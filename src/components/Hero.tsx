'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Play, Disc3, Clock, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  lang: 'EN' | 'KR';
  onExploreDrop: () => void;
  onStreamAudio: () => void;
  isPlayingAudio: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreDrop,
  onStreamAudio,
  isPlayingAudio,
}) => {
  // Countdown timer for next limited drop
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-ink-black overflow-hidden bg-warm-ivory">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#B8B4AD_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Drop Alert Bar */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 mb-8 border border-ink-black bg-ivory-light shadow-sm text-xs font-mono">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-korean-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-korean-red"></span>
          </span>
          <span className="font-bold text-korean-red uppercase">
            {lang === 'EN' ? 'Hanjeongpan Drop 04' : '한정판 드롭 04'}
          </span>
          <span className="text-seoul-concrete">•</span>
          <span className="text-ink-black/80 hidden sm:inline">
            {lang === 'EN' ? 'Soju Oak Cask Micro-Lot' : '전통 소주 오크 배럴 에이지드'}
          </span>
          <span className="text-seoul-concrete">•</span>
          <div className="flex items-center gap-1 font-semibold text-ink-black">
            <Clock className="w-3 h-3 text-coffee-brown" />
            <span suppressHydrationWarning>
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Main Grid: Headline & Visual Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Masthead */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-[0.25em] text-coffee-brown uppercase block font-semibold">
                {lang === 'EN' ? 'SEOUL COFFEE CULTURE × ACOUSTIC SENSORY RITUAL' : '서울 커피 문화와 사운드의 결합'}
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-black leading-[1.05]">
                The Rhythmic Pulse of Seoul,{' '}
                <span className="italic font-normal font-serif text-coffee-brown">Distilled Into</span>{' '}
                Every Cup.
              </h1>

              <p className="font-korean text-lg sm:text-xl text-ink-black/75 tracking-wide pt-2 font-medium">
                서울의 리듬, 한 잔에 담긴 예술. 성수동의 콘크리트 감성과 아날로그 바이닐 사운드의 만남.
              </p>
            </div>

            <p className="text-sm sm:text-base text-ink-black/70 max-w-xl font-light leading-relaxed">
              {lang === 'EN'
                ? 'K-POP COFFEE fuses South Korea’s world-leading artisanal café craftsmanship with contemporary Seoul soundscapes. An elevated sensory portal bridging physical roasteries, sonic exploration, and limited lifestyle drops.'
                : '케이팝 커피는 세계를 선도하는 한국의 스페셜티 커피 문화와 컨템포러리 K-사운드를 결합한 하이엔드 라이프스타일 플랫폼입니다. 성수동 아틀리에의 원두와 감각적인 사운드스케이프를 경험해 보세요.'}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreDrop}
                className="px-6 py-3.5 bg-korean-red hover:bg-korean-red/90 text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-glow-red flex items-center gap-2 group"
              >
                <span>{lang === 'EN' ? 'Explore Current Drop' : '한정판 드롭 보기'}</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onStreamAudio}
                className="px-6 py-3.5 border border-ink-black hover:bg-ink-black hover:text-warm-ivory text-ink-black text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center gap-2.5 bg-warm-ivory/60"
              >
                <Disc3 className={`w-4 h-4 ${isPlayingAudio ? 'animate-spin-slow text-korean-red' : ''}`} />
                <span>{isPlayingAudio ? (lang === 'EN' ? 'Pause Audio' : '음악 일시정지') : (lang === 'EN' ? 'Stream K-Sound' : 'K-Sound 감상')}</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-8 border-t border-seoul-concrete/40 grid grid-cols-3 gap-6 font-mono text-xs text-ink-black/75">
              <div>
                <span className="block text-xl font-bold font-serif text-ink-black">100%</span>
                <span className="text-[11px] text-coffee-brown uppercase">{lang === 'EN' ? 'Micro-Lot Specialty' : '스페셜티 마이크로랏'}</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-serif text-ink-black">432 Hz</span>
                <span className="text-[11px] text-coffee-brown uppercase">{lang === 'EN' ? 'Acoustic Soundscapes' : '사운드 페어링 음원'}</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-serif text-ink-black">04 Districts</span>
                <span className="text-[11px] text-coffee-brown uppercase">{lang === 'EN' ? 'Seoul Radar Map' : '서울 파트너 아틀리에'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative border border-ink-black p-3 bg-white shadow-elevated">
              {/* Corner Tag */}
              <div className="absolute -top-3.5 -right-3.5 bg-champagne-gold text-ink-black font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-wider border border-ink-black z-20">
                Seongsu Atelier 01
              </div>

              {/* Editorial Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-seoul-concrete/20">
                <Image
                  src="/images/hero-cafe.jpg"
                  alt="Seongsu Morning Café Morning Light"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Ambient Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Card Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-warm-ivory z-10 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-champagne-gold">
                    <span>ARCHITECTURAL MORNING</span>
                    <span>성수동 2가</span>
                  </div>
                  <p className="font-serif text-base italic leading-snug">
                    "Soft sunlight streaming over raw concrete, morning crema at 92.5°C."
                  </p>
                </div>
              </div>

              {/* Tactile Specs Bar */}
              <div className="mt-3 pt-2.5 border-t border-seoul-concrete/40 flex justify-between items-center text-[11px] font-mono text-ink-black/70">
                <span>PLATE: Hasselblad H6D-100c</span>
                <span className="text-korean-red font-bold">KPopCoffee.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
