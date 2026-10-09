'use client';

import React from 'react';
import { MOOD_DATA, MoodOption } from '@/data/coffeeData';
import { Sparkles, Disc, Music, ArrowRight, Check } from 'lucide-react';

interface MoodSelectorProps {
  lang: 'EN' | 'KR';
  selectedMoodId: string;
  onSelectMood: (mood: MoodOption) => void;
  onViewPairedBean: (beanId: string) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  lang,
  selectedMoodId,
  onSelectMood,
  onViewPairedBean,
}) => {
  const currentMood = MOOD_DATA.find((m) => m.id === selectedMoodId) || MOOD_DATA[0];

  return (
    <section id="mood-selector" className="py-20 lg:py-28 bg-warm-ivory border-b border-ink-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-ink-black pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-korean-red" />
              <span className="font-mono text-xs text-korean-red tracking-widest uppercase font-semibold">
                03. {lang === 'EN' ? 'SEOUL MOOD SELECTOR' : '오늘의 기분 (센서리 매칭)'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-black tracking-tight">
              {lang === 'EN' ? 'Tune Your Sensory State' : '지금 당신에게 필요한 서울의 리듬'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-black/70 max-w-md font-light">
            {lang === 'EN'
              ? 'Select your current time or desired energy state. The platform synchronizes a specialty roast profile and K-Sound frequency in real time.'
              : '현재 시간대나 원하는 에너지 상태를 선택하세요. 로스팅 프로파일과 K-Sound 어쿠스틱 세션이 즉시 연동됩니다.'}
          </p>
        </div>

        {/* 4-Quadrant Mood Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOOD_DATA.map((mood) => {
            const isSelected = mood.id === selectedMoodId;
            return (
              <div
                key={mood.id}
                onClick={() => onSelectMood(mood)}
                className={`cursor-pointer border transition-all duration-300 p-6 flex flex-col justify-between relative ${
                  isSelected
                    ? 'border-ink-black bg-white shadow-elevated ring-1 ring-ink-black'
                    : 'border-seoul-concrete/60 bg-ivory-light hover:border-ink-black hover:bg-white'
                }`}
              >
                {/* Active Indicator Top-Right */}
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-korean-red text-white text-[10px] font-mono px-2 py-0.5 font-bold uppercase flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>ACTIVE</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-coffee-brown px-2 py-0.5 border border-coffee-brown/30 bg-warm-ivory">
                      {mood.timeSlot}
                    </span>
                    <span className="font-mono text-[11px] text-seoul-concrete font-medium">{mood.bpm} BPM</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink-black mb-1">
                    {lang === 'EN' ? mood.titleEn : mood.titleKr}
                  </h3>
                  <div className="font-korean text-xs text-coffee-brown mb-3 font-semibold">
                    {lang === 'EN' ? mood.titleKr : mood.titleEn}
                  </div>

                  <p className="text-xs text-ink-black/70 leading-relaxed mb-6">
                    {lang === 'EN' ? mood.vibeDescriptionEn : mood.vibeDescriptionKr}
                  </p>
                </div>

                <div className="pt-4 border-t border-seoul-concrete/30 space-y-3 font-mono text-[11px]">
                  <div>
                    <span className="text-seoul-concrete uppercase block text-[9px]">{lang === 'EN' ? 'Flavor Notes' : '플레이버 노트'}</span>
                    <span className="text-ink-black font-medium">{mood.flavorProfile}</span>
                  </div>
                  <div>
                    <span className="text-seoul-concrete uppercase block text-[9px]">{lang === 'EN' ? 'Soundtrack Pairing' : '사운드 페어링'}</span>
                    <span className="text-korean-red font-medium flex items-center gap-1">
                      <Music className="w-3 h-3" />
                      {mood.soundGenre}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Mood Live Summary Box */}
        <div className="mt-10 border border-ink-black bg-ink-black text-warm-ivory p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-champagne-gold text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? 'CURRENT SENSORY SYNC' : '현재 센서리 동기화'}</span>
              <span>•</span>
              <span className="font-bold">{currentMood.titleEn}</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl text-warm-ivory">
              {lang === 'EN' ? 'Paired Acoustic Soundscape:' : '페어링된 사운드스케이프:'}{' '}
              <span className="italic text-champagne-gold">"{currentMood.ambientTrackTitle}"</span>
            </div>
            <div className="text-xs text-seoul-concrete font-mono">
              Tempo: {currentMood.bpm} BPM • Frequency: 432 Hz Healing Tone • Roasted for Precision
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onViewPairedBean(currentMood.coffeePairingId)}
              className="px-5 py-3 bg-korean-red hover:bg-korean-red/90 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-2 shadow-glow-red"
            >
              <span>{lang === 'EN' ? 'View Paired Bean' : '매칭 원두 확인하기'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
