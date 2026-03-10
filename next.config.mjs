/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://tikhoty.pl/link/3106/58239101',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
