'use client';

import React from 'react';
import { Layers, Disc, Sparkles, Feather } from 'lucide-react';

interface BrandManifestoProps {
  lang: 'EN' | 'KR';
}

export const BrandManifesto: React.FC<BrandManifestoProps> = ({ lang }) => {
  const pillars = [
    {
      number: '01',
      titleEn: 'Seongsu-dong Raw Craft',
      titleKr: '성수동의 인더스트리얼 미학',
      descEn:
        'Born in Seoul’s converted warehouse districts. Raw concrete, exposed iron beams, and uncompromised extraction standards.',
      descKr:
        '서울 성수동의 붉은 벽돌과 노출 콘크리트에서 영감을 받아, 타협 없는 스페셜티 추출 기준을 확립합니다.',
      icon: Layers,
    },
    {
      number: '02',
      titleEn: 'Vinyl & Listening Bars',
      titleKr: '아날로그 바이닐 & K-사운드',
      descEn:
        'Coffee is an acoustic ritual. We curate frequency-tuned Korean soundscapes synchronized with every roast profile.',
      descKr:
        '커피는 청각적인 의식입니다. 원두의 로스팅 프로파일과 공명하는 K-사운드 음원을 함께 큐레이션합니다.',
      icon: Disc,
    },
    {
      number: '03',
      titleEn: 'Bojagi Wrapping Ritual',
      titleKr: '보자기 전통 패키징과 촉각',
      descEn:
        'Every bean package evokes the respectful ceremony of Korean fabric folding—tactile, intentional, and sustainable.',
      descKr:
        '정성과 예를 담아 물건을 감싸는 한국의 보자기 공예를 현대적인 지속가능 패키지에 담았습니다.',
      icon: Feather,
    },
    {
      number: '04',
      titleEn: 'Dancheong Color Discipline',
      titleKr: '단청의 절제된 컬러 포인트',
      descEn:
        'Disciplined accents of Korean Red and Metallic Champagne against an airy canvas of Warm Ivory and Ink Black.',
      descKr:
        '단청의 절제된 미학처럼 웜 아이보리와 잉크 블랙의 여백 위에 한국적 포인트 컬러를 조화시킵니다.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-light border-b border-ink-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="border-b border-ink-black pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-korean-red tracking-widest uppercase font-semibold">
              02. {lang === 'EN' ? 'BRAND MANIFESTO & PHILOSOPHY' : '브랜드 철학 및 문화적 기반'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-black tracking-tight">
              {lang === 'EN' ? 'A Sensory Bridge Between Seoul & The World' : '서울의 감각을 세계의 일상으로'}
            </h2>
          </div>
          <div className="font-korean text-sm text-ink-black/70 max-w-md font-medium">
            "우리는 단순한 음료를 판매하지 않습니다. 서울의 새벽 공기, 골목길의 바이닐 소리, 그리고 정성스러운 한 잔의
            시간을 제안합니다."
          </div>
        </div>

        {/* 4 Cultural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="border border-ink-black p-6 bg-warm-ivory relative group hover:border-korean-red transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs font-bold text-seoul-concrete group-hover:text-korean-red transition-colors">
                    [{pillar.number}]
                  </span>
                  <div className="p-2 border border-seoul-concrete/40 rounded-full group-hover:border-korean-red group-hover:bg-korean-red/10 transition-colors">
                    <Icon className="w-4 h-4 text-ink-black group-hover:text-korean-red transition-colors" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-ink-black mb-1">
                  {lang === 'EN' ? pillar.titleEn : pillar.titleKr}
                </h3>
                <span className="font-korean text-xs text-coffee-brown block mb-3 font-semibold">
                  {lang === 'EN' ? pillar.titleKr : pillar.titleEn}
                </span>

                <p className="text-xs text-ink-black/75 leading-relaxed">
                  {lang === 'EN' ? pillar.descEn : pillar.descKr}
                </p>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-seoul-concrete/30 flex items-center justify-between text-[10px] font-mono text-seoul-concrete uppercase">
                  <span>K-Heritage</span>
                  <span className="group-hover:text-ink-black transition-colors">Seoul Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
