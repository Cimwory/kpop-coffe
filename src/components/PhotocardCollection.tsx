'use client';

import React, { useState } from 'react';
import { COLLECTIBLE_CARDS, CollectibleCard } from '@/data/coffeeData';
import Image from 'next/image';
import { Sparkles, RotateCw, Award, Shield, Check } from 'lucide-react';

interface PhotocardCollectionProps {
  lang: 'EN' | 'KR';
}

export const PhotocardCollection: React.FC<PhotocardCollectionProps> = ({ lang }) => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [claimedCards, setClaimedCards] = useState<{ [key: string]: boolean }>({});

  const handleCardClick = (id: string) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  const handleClaim = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setClaimedCards((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="photocards" className="py-20 lg:py-28 bg-warm-ivory border-b border-ink-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-ink-black pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-champagne-gold" />
              <span className="font-mono text-xs text-coffee-brown tracking-widest uppercase font-semibold">
                07. {lang === 'EN' ? 'DIGITAL PHOTOCARD ARCHIVE' : '포토카드 & 컬렉터 아카이브'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-black tracking-tight">
              {lang === 'EN' ? 'Tactile Collectibles & Perks' : '디지털 포토카드 컬렉션'}
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-ink-black/70 max-w-md font-light">
            {lang === 'EN'
              ? 'Click each card to flip and inspect its authentication watermark, rarity score, and recurring lifestyle perks.'
              : '카드를 클릭하여 앞뒷면을 뒤집어보고 고유 시리얼 넘버와 멤버십 혜택을 확인해 보세요.'}
          </div>
        </div>

        {/* 3D Interactive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIBLE_CARDS.map((card) => {
            const isFlipped = flippedCardId === card.id;
            const isClaimed = !!claimedCards[card.id];

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="perspective-1000 cursor-pointer select-none group"
              >
                <div
                  className={`relative w-full aspect-[2/3] transition-transform duration-700 transform-style-3d rounded-lg shadow-xl border ${
                    card.tier === 'HOLOGRAPHIC'
                      ? 'border-champagne-gold ring-1 ring-champagne-gold/60'
                      : 'border-ink-black'
                  } ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden bg-ink-black flex flex-col justify-between p-4">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={card.image}
                        alt={card.titleEn}
                        fill
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/20 to-transparent" />
                    </div>

                    {/* Holographic Sheen Layer */}
                    {card.tier === 'HOLOGRAPHIC' && (
                      <div className="absolute inset-0 holographic-sheen opacity-40 pointer-events-none z-10" />
                    )}

                    {/* Front Header */}
                    <div className="relative z-20 flex items-center justify-between font-mono text-[10px]">
                      <span className="bg-ink-black/90 text-warm-ivory px-2 py-0.5 border border-seoul-concrete/40 uppercase">
                        {card.series}
                      </span>
                      <span
                        className={`px-2 py-0.5 font-bold uppercase ${
                          card.tier === 'HOLOGRAPHIC'
                            ? 'bg-champagne-gold text-ink-black'
                            : card.tier === 'GOLD'
                            ? 'bg-coffee-brown text-warm-ivory'
                            : 'bg-seoul-concrete text-ink-black'
                        }`}
                      >
                        {card.rarityPercent}
                      </span>
                    </div>

                    {/* Front Bottom */}
                    <div className="relative z-20 space-y-2">
                      <div className="flex items-center justify-between text-warm-ivory font-mono text-xs">
                        <span className="text-champagne-gold font-bold">{card.cardNumber}</span>
                        <span className="flex items-center gap-1 text-[10px] text-seoul-concrete">
                          <RotateCw className="w-3 h-3 animate-spin-slow" />
                          <span>{lang === 'EN' ? 'Click to Flip' : '뒤집기'}</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-warm-ivory">
                        {lang === 'EN' ? card.titleEn : card.titleKr}
                      </h3>
                      <div className="font-korean text-xs text-champagne-gold font-medium">
                        {lang === 'EN' ? card.titleKr : card.titleEn}
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg overflow-hidden bg-gradient-to-br from-espresso-dark via-ink-black to-espresso-dark p-6 flex flex-col justify-between border border-champagne-gold/60 text-warm-ivory">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-seoul-concrete/30 pb-3 font-mono text-xs">
                        <span className="text-champagne-gold font-bold">KPOPCOFFEE CERTIFIED</span>
                        <span className="text-seoul-concrete">{card.editionLimit}</span>
                      </div>

                      <div className="space-y-2 pt-2">
                        <span className="font-mono text-[10px] text-seoul-concrete uppercase block">
                          {lang === 'EN' ? 'Holder Perk & Privileges' : '홀더 특전 및 혜택'}
                        </span>
                        <p className="font-serif text-sm leading-relaxed text-warm-ivory">
                          "{lang === 'EN' ? card.perkEn : card.perkKr}"
                        </p>
                      </div>

                      <div className="border border-champagne-gold/30 bg-ink-black/60 p-3 space-y-1 font-mono text-[10px] text-seoul-concrete">
                        <div className="flex justify-between">
                          <span>AUTHENTICATION:</span>
                          <span className="text-champagne-gold font-semibold">VERIFIED HASH</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CONTRACT METRIC:</span>
                          <span className="text-warm-ivory">0xKPOP...88F1</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-seoul-concrete/30">
                      <button
                        onClick={(e) => handleClaim(e, card.id)}
                        className={`w-full py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                          isClaimed
                            ? 'bg-champagne-gold text-ink-black'
                            : 'bg-korean-red hover:bg-korean-red/90 text-white shadow-glow-red'
                        }`}
                      >
                        {isClaimed ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{lang === 'EN' ? 'Card Claimed to Wallet' : '보관함 등록 완료'}</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{lang === 'EN' ? 'Claim Digital Card' : '카드 무료 수령'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
