'use client';

import { useState } from 'react';
import { Flame, Play } from 'lucide-react';

const URL_18_44 = 'https://tikhoty.pl/link/fbbc/1212/58239101';
const URL_45_PLUS = 'https://tikhoty.pl/link/ecea/1211/58239101';

export default function AgeGate() {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleAgeSelect = (ageGroup: string) => {
    setSelectedAge(ageGroup);
    setIsRedirecting(true);
    
    const url = ageGroup === '18-44' ? URL_18_44 : URL_45_PLUS;
    
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/30 to-black" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-600/10 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-700/15 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Floating cards effect */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-600/10 rounded-3xl blur-3xl animate-blob" style={{ animationDuration: '7s' }} />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-800/10 rounded-3xl blur-3xl animate-blob" style={{ animationDuration: '7s', animationDelay: '2s' }} />

        {/* Main card */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-red-600/30 rounded-3xl p-8 shadow-2xl shadow-red-900/50">
          
          {/* Icon with play button vibe */}
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 to-red-800 animate-pulse" />
              <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                <Play className="h-8 w-8 text-red-600 fill-red-600" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
              PriVate
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">.</span>
            </h1>
            <p className="text-red-300 font-semibold mb-2 text-sm">TikTok dla Dorosłych</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Odkrywaj ekskluzywne treści i poznawaj ludzi z Twojej okolicy.
            </p>
          </div>

          {/* Stats teaser */}
          <div className="grid grid-cols-3 gap-2 mb-8">
            <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-3 text-center">
              <p className="text-red-400 font-bold text-lg">12K+</p>
              <p className="text-slate-400 text-xs">Aktywni</p>
            </div>
            <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-3 text-center">
              <p className="text-red-400 font-bold text-lg">4.8★</p>
              <p className="text-slate-400 text-xs">Ocena</p>
            </div>
            <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-3 text-center">
              <p className="text-red-400 font-bold text-lg">∞</p>
              <p className="text-slate-400 text-xs">Zabawy</p>
            </div>
          </div>

          {/* Age Selection */}
          <div className="space-y-3 mb-8">
            {/* 18-44 Button */}
            <button
              onClick={() => handleAgeSelect('18-44')}
              disabled={isRedirecting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 relative group overflow-hidden ${
                selectedAge === '18-44'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/60 scale-105'
                  : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed shadow-lg shadow-red-600/30'
              }`}
            >
              <span className="relative z-10">
                {isRedirecting && selectedAge === '18-44' ? 'Otwieranie...' : '🔥 Mam 18-44 lata'}
              </span>
              {!isRedirecting && selectedAge !== '18-44' && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-white/10 to-red-500/0 group-hover:translate-x-full transition-transform duration-500" />
              )}
            </button>

            {/* 45+ Button */}
            <button
              onClick={() => handleAgeSelect('45+')}
              disabled={isRedirecting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 relative group overflow-hidden ${
                selectedAge === '45+'
                  ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg shadow-red-700/60 scale-105'
                  : 'bg-gradient-to-r from-red-700 to-red-800 text-white hover:from-red-600 hover:to-red-700 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed shadow-lg shadow-red-700/30'
              }`}
            >
              <span className="relative z-10">
                {isRedirecting && selectedAge === '45+' ? 'Otwieranie...' : '🔞 Mam 45+'}
              </span>
              {!isRedirecting && selectedAge !== '45+' && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-white/10 to-red-600/0 group-hover:translate-x-full transition-transform duration-500" />
              )}
            </button>
          </div>

          {/* Benefits */}
          <div className="space-y-2 mb-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-red-600" />
              <span>Treści 18+ tylko dla zweryfikowanych</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-red-600" />
              <span>Całkowita anonimowość</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-red-600" />
              <span>Bezpieczne i dyskretne</span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-slate-500 leading-relaxed mb-4">
            Potwierdzam, że jestem osobą dorosłą (18+) i wyrażam zgodę na wyświetlenie zawartości dla dorosłych.
          </p>

          {/* Footer */}
          <div className="pt-4 border-t border-red-900/30 text-center">
            <p className="text-xs text-slate-600">
              Twoja prywatność jest zagwarantowana
            </p>
          </div>
        </div>

        {/* Glow effect bottom */}
        <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full shadow-lg shadow-red-600/50" />
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
            opacity: 0.5;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
            opacity: 0.6;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </main>
  );
}
