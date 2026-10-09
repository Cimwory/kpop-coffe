'use client';

import React, { useState } from 'react';
import { COFFEE_PRODUCTS, CoffeeProduct } from '@/data/coffeeData';
import Image from 'next/image';
import { Plus, Check, SlidersHorizontal, BookOpen, Flame, Sparkles } from 'lucide-react';

interface CoffeeRitualProps {
  lang: 'EN' | 'KR';
  onAddToCart: (product: CoffeeProduct) => void;
  onOpenBrewGuide: (product: CoffeeProduct) => void;
  highlightedBeanId?: string;
}

export const CoffeeRitual: React.FC<CoffeeRitualProps> = ({
  lang,
  onAddToCart,
  onOpenBrewGuide,
  highlightedBeanId,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'Light' | 'Medium' | 'Dark' | 'Reserve'>('ALL');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts =
    filter === 'ALL' ? COFFEE_PRODUCTS : COFFEE_PRODUCTS.filter((p) => p.roastLevel === filter);

  const handleAdd = (product: CoffeeProduct) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="beans" className="py-20 lg:py-28 bg-ivory-light border-b border-ink-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-ink-black pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-korean-red" />
              <span className="font-mono text-xs text-korean-red tracking-widest uppercase font-semibold">
                04. {lang === 'EN' ? 'SIGNATURE ROAST COLLECTION' : '커피 로스팅 & 에디션'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-black tracking-tight">
              {lang === 'EN' ? 'The Artisanal Brew Ritual' : '성수동의 정밀한 로스팅 미학'}
            </h2>
          </div>

          {/* Roast Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {(['ALL', 'Light', 'Medium', 'Dark', 'Reserve'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilter(lvl)}
                className={`px-3 py-1.5 border transition-all ${
                  filter === lvl
                    ? 'border-ink-black bg-ink-black text-warm-ivory font-bold'
                    : 'border-seoul-concrete/60 bg-warm-ivory text-ink-black hover:border-ink-black'
                }`}
              >
                {lvl === 'ALL' ? (lang === 'EN' ? 'All Beans' : '전체 원두') : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* 3:4 Aspect Ratio Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isHighlighted = highlightedBeanId === product.id;

            return (
              <div
                key={product.id}
                id={`bean-${product.id}`}
                className={`border bg-white flex flex-col justify-between transition-all duration-300 group ${
                  isHighlighted
                    ? 'border-korean-red ring-2 ring-korean-red shadow-elevated'
                    : 'border-ink-black hover:shadow-elevated'
                }`}
              >
                <div>
                  {/* Image Container with 3:4 Aspect Ratio */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-warm-ivory border-b border-ink-black">
                    <Image
                      src={product.image}
                      alt={product.nameEn}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      <span className="bg-ink-black text-warm-ivory text-[10px] font-mono px-2.5 py-0.5 uppercase tracking-wider font-semibold">
                        {product.roastLevel} Roast
                      </span>
                      {product.isDrop && (
                        <span className="bg-korean-red text-white text-[10px] font-mono px-2.5 py-0.5 uppercase tracking-wider font-bold animate-pulse">
                          {product.dropNumber}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-white/95 text-ink-black text-[10px] font-mono px-2 py-0.5 border border-ink-black">
                        {product.weight}
                      </span>
                    </div>

                    {/* Bottom overlay: Origin */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink-black/85 via-ink-black/40 to-transparent p-4 text-warm-ivory">
                      <span className="text-[10px] font-mono text-champagne-gold tracking-widest uppercase block">
                        {product.origin}
                      </span>
                      <span className="text-xs font-mono opacity-80">{product.altitude}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {/* Roast Intensity Dots */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-seoul-concrete border-b border-seoul-concrete/20 pb-3">
                      <span className="flex items-center gap-1 text-ink-black">
                        <Flame className="w-3.5 h-3.5 text-coffee-brown" />
                        <span>{lang === 'EN' ? 'Roast Level' : '로스팅 강도'}</span>
                      </span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className={`w-2 h-2 rounded-full ${
                              dot <= product.roastDots ? 'bg-coffee-brown' : 'bg-seoul-concrete/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-bold text-ink-black group-hover:text-coffee-brown transition-colors">
                        {lang === 'EN' ? product.nameEn : product.nameKr}
                      </h3>
                      <div className="font-korean text-xs text-coffee-brown font-medium">
                        {lang === 'EN' ? product.nameKr : product.nameEn}
                      </div>
                    </div>

                    <p className="text-xs text-ink-black/70 leading-relaxed font-light">
                      {product.tagline}
                    </p>

                    {/* Sensory Notes Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.notes.map((note) => (
                        <span
                          key={note}
                          className="text-[10px] font-mono px-2 py-0.5 bg-warm-ivory border border-seoul-concrete/40 text-ink-black"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    {/* Process Detail */}
                    <div className="text-[11px] font-mono text-ink-black/80 pt-1">
                      <span className="text-seoul-concrete uppercase block text-[9px]">
                        {lang === 'EN' ? 'Process Method' : '가공 방식'}
                      </span>
                      <span>{product.process}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 border-t border-seoul-concrete/20 mt-4">
                  <div className="flex items-baseline justify-between py-3">
                    <div>
                      <span className="font-serif text-2xl font-bold text-ink-black">
                        ${product.priceUSD}
                      </span>
                      <span className="text-[11px] font-mono text-seoul-concrete ml-2">
                        / ₩{product.priceKRW.toLocaleString()}
                      </span>
                    </div>
                    {product.limitedStock && (
                      <span className="text-[10px] font-mono text-korean-red font-semibold">
                        {product.limitedStock} {lang === 'EN' ? 'bags left' : '개 잔여'}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => onOpenBrewGuide(product)}
                      className="py-2.5 px-3 border border-ink-black text-ink-black hover:bg-warm-ivory text-xs font-mono font-semibold uppercase flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{lang === 'EN' ? 'Brew Guide' : '브루잉 가이드'}</span>
                    </button>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`py-2.5 px-3 text-xs font-mono font-bold uppercase flex items-center justify-center gap-1.5 transition-all ${
                        addedId === product.id
                          ? 'bg-ink-black text-warm-ivory'
                          : 'bg-korean-red hover:bg-korean-red/90 text-white shadow-glow-red'
                      }`}
                    >
                      {addedId === product.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'EN' ? 'Added' : '담김'}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{lang === 'EN' ? 'Add to Cart' : '장바구니'}</span>
                        </>
                      )}
                    </button>
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
