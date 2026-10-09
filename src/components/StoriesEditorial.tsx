'use client';

import React from 'react';
import { EDITORIAL_STORIES } from '@/data/coffeeData';
import Image from 'next/image';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

interface StoriesEditorialProps {
  lang: 'EN' | 'KR';
}

export const StoriesEditorial: React.FC<StoriesEditorialProps> = ({ lang }) => {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-ivory-light border-b border-ink-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-ink-black pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-coffee-brown" />
              <span className="font-mono text-xs text-coffee-brown tracking-widest uppercase font-semibold">
                08. {lang === 'EN' ? 'EDITORIAL PUBLICATION & ESSAYS' : '매거진 & 저널'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-black tracking-tight">
              {lang === 'EN' ? 'The Seoul Coffee Gazette' : '서울 커피 문화와 음향 탐구'}
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-ink-black/70 max-w-md font-light">
            {lang === 'EN'
              ? 'Long-form editorial explorations into architectural spaces, psychoacoustic bean pairing, and modern Korean craft traditions.'
              : '공간 디자인, 음향과 미각의 심리학, 그리고 전통 공예의 현대적 재해석을 다루는 심층 저널입니다.'}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_STORIES.map((story) => (
            <article
              key={story.id}
              className="border border-ink-black bg-white flex flex-col justify-between group hover:shadow-elevated transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-ivory border-b border-ink-black">
                  <Image
                    src={story.image}
                    alt={story.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute top-3 left-3 bg-ink-black text-warm-ivory text-[10px] font-mono px-2.5 py-0.5 uppercase tracking-wider">
                    {lang === 'EN' ? story.categoryEn : story.categoryKr}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-seoul-concrete">
                    <span>{story.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink-black leading-snug group-hover:text-coffee-brown transition-colors">
                    {lang === 'EN' ? story.titleEn : story.titleKr}
                  </h3>

                  <p className="text-xs text-ink-black/70 leading-relaxed font-light">
                    {lang === 'EN' ? story.excerptEn : story.excerptKr}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-seoul-concrete/20 mt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-seoul-concrete">{story.author}</span>
                <span className="text-xs font-mono font-bold text-ink-black group-hover:text-korean-red flex items-center gap-1 transition-colors">
                  <span>{lang === 'EN' ? 'Read Feature' : '전문 읽기'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
