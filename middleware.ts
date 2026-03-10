import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BOT_USER_AGENTS = [
  'bot', 'crawler', 'spider', 'scraper', 'curl', 'wget', 'python', 
  'java', 'httpd', 'node', 'phantom', 'selenium', 'headless', 
  'request', 'scrapy', 'feed fetcher', 'monitoring', 'nmap',
  'masscan', 'shodan', 'censys', 'qualys', 'nessus'
]

const IP_REQUESTS: Record<string, { count: number; timestamp: number }> = {}
const MAX_REQUESTS_PER_MINUTE = 30
const CLEANUP_INTERVAL = 60000 // 1 minute

// Cleanup old entries every minute
setInterval(() => {
  const now = Date.now()
  for (const ip in IP_REQUESTS) {
    if (now - IP_REQUESTS[ip].timestamp > 60000) {
      delete IP_REQUESTS[ip]
    }
  }
}, CLEANUP_INTERVAL)

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  const pathname = request.nextUrl.pathname

  // Block all non-root paths - they get 404
  if (pathname !== '/') {
    return new NextResponse('Not Found', { status: 404 })
  }

  // Check if it's a known bot on root path
  if (BOT_USER_AGENTS.some(bot => userAgent.includes(bot))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Rate limiting: max 30 requests per minute per IP
  const now = Date.now()
  if (IP_REQUESTS[ip]) {
    if (now - IP_REQUESTS[ip].timestamp < 60000) {
      IP_REQUESTS[ip].count++
      if (IP_REQUESTS[ip].count > MAX_REQUESTS_PER_MINUTE) {
        return new NextResponse('Too Many Requests', { status: 429 })
      }
    } else {
      // Reset counter if older than 1 minute
      IP_REQUESTS[ip] = { count: 1, timestamp: now }
    }
  } else {
    IP_REQUESTS[ip] = { count: 1, timestamp: now }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
