'use client';

import React from 'react';
import { ArrowUp, Disc3, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: 'EN' | 'KR';
  onOpenB2B: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenB2B }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-dark text-warm-ivory border-t border-seoul-concrete/30 pt-16 pb-28 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-seoul-concrete/20">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-champagne-gold flex items-center justify-center bg-ink-black text-warm-ivory font-serif font-bold text-base">
                K
              </div>
              <span className="font-serif font-bold text-xl tracking-wider text-warm-ivory">
                K-POP COFFEE
              </span>
            </div>

            <p className="font-korean text-xs text-seoul-concrete leading-relaxed max-w-sm">
              서울 성수동의 스페셜티 커피 문화와 컨템포러리 K-사운드를 융합한 글로벌 라이프스타일 플랫폼입니다.
            </p>

            <div className="pt-2 font-mono text-[11px] text-champagne-gold">
              <span>Domain Authority: </span>
              <a href="https://kpopcoffee.com" target="_blank" rel="noreferrer" className="underline hover:text-white">
                KPopCoffee.com
              </a>
              <span className="text-seoul-concrete ml-2">• Global Rights Reserved</span>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-champagne-gold uppercase tracking-wider block font-bold">
              {lang === 'EN' ? 'EXPLORE' : '탐색'}
            </span>
            <ul className="space-y-2 text-seoul-concrete">
              <li><a href="#beans" className="hover:text-warm-ivory transition-colors">Specialty Roasts</a></li>
              <li><a href="#mood-selector" className="hover:text-warm-ivory transition-colors">Mood Selector</a></li>
              <li><a href="#ksound" className="hover:text-warm-ivory transition-colors">K-Sound Archive</a></li>
              <li><a href="#seoul-radar" className="hover:text-warm-ivory transition-colors">Seoul Radar Map</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-champagne-gold uppercase tracking-wider block font-bold">
              {lang === 'EN' ? 'DROPS & PERKS' : '드롭 & 멤버십'}
            </span>
            <ul className="space-y-2 text-seoul-concrete">
              <li><a href="#drops" className="hover:text-warm-ivory transition-colors">Hanjeongpan Drop 04</a></li>
              <li><a href="#photocards" className="hover:text-warm-ivory transition-colors">Digital Photocards</a></li>
              <li><a href="#stories" className="hover:text-warm-ivory transition-colors">Editorial Journal</a></li>
              <li>
                <button onClick={onOpenB2B} className="text-korean-red hover:underline text-left">
                  B2B Commercial Deck
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: Specifications */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-champagne-gold uppercase tracking-wider block font-bold">
              {lang === 'EN' ? 'SYSTEM SPEC' : '시스템 사양'}
            </span>
            <ul className="space-y-1.5 text-[11px] text-seoul-concrete">
              <li>Palette: Ivory / Ink / Red / Gold</li>
              <li>Audio: Web Audio 432Hz Synth</li>
              <li>Grid: 12-Column Responsive</li>
              <li>Deploy: Ready for Vercel Edge</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-seoul-concrete">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-champagne-gold" />
            <span>© 2026 K-POP COFFEE. Designed for Client Review & Presentation via Vercel.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-warm-ivory transition-colors border border-seoul-concrete/30 px-3 py-1.5"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
