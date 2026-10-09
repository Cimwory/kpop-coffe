'use client';

import React, { useState, useEffect } from 'react';
import { CoffeeProduct } from '@/data/coffeeData';
import { X, Play, Pause, RotateCcw, Droplets, Thermometer, Gauge, Sparkles } from 'lucide-react';

interface BrewGuideModalProps {
  product: CoffeeProduct | null;
  onClose: () => void;
  lang: 'EN' | 'KR';
}

export const BrewGuideModal: React.FC<BrewGuideModalProps> = ({ product, onClose, lang }) => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  if (!product) return null;

  const steps = [
    {
      time: '0:00 - 0:45',
      titleEn: 'Bloom Stage',
      titleKr: '뜸 들이기 (블루밍)',
      descEn: 'Pour 50g of 92°C water evenly in concentric circles. Allow CO2 degassing to unleash aromatic florals.',
      descKr: '92°C의 온수 50g을 원을 그리며 고르게 주입하고 45초간 가스를 배출시킵니다.',
    },
    {
      time: '0:45 - 1:30',
      titleEn: 'First Center Pour',
      titleKr: '1차 본 추출',
      descEn: 'Slowly pour up to 150g with continuous gentle flow. Keep bed level without disturbing sides.',
      descKr: '필터 벽면에 닿지 않도록 중앙에서부터 150g까지 부드럽게 주입합니다.',
    },
    {
      time: '1:30 - 2:30',
      titleEn: 'Final Drawdown',
      titleKr: '2차 마무리 추출',
      descEn: 'Pour remaining water up to 250g total. Allow clean drawdown for crisp, transparent acidity.',
      descKr: '총 250g까지 마무리 주입 후 깨끗한 후미를 위해 2분 30초 내에 추출을 마칩니다.',
    },
  ];

  const formatTimer = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-warm-ivory border border-ink-black shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ink-black hover:text-korean-red transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-ink-black pb-4 mb-6 space-y-1">
          <span className="font-mono text-[10px] text-korean-red font-bold uppercase tracking-widest">
            {lang === 'EN' ? 'THE SEOUL EXTRACTION RITUAL' : '성수 아틀리에 브루잉 공식'}
          </span>
          <h3 className="font-serif text-2xl font-bold text-ink-black">
            {lang === 'EN' ? product.nameEn : product.nameKr}
          </h3>
          <p className="font-mono text-xs text-seoul-concrete">
            {product.origin} • {product.process}
          </p>
        </div>

        {/* Extraction Metrics */}
        <div className="grid grid-cols-3 gap-3 border border-ink-black bg-white p-4 font-mono text-xs mb-6">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-coffee-brown" />
            <div>
              <span className="text-[9px] text-seoul-concrete block uppercase">Ratio</span>
              <span className="font-bold">1:16.6 (15g : 250g)</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-korean-red" />
            <div>
              <span className="text-[9px] text-seoul-concrete block uppercase">Water Temp</span>
              <span className="font-bold">92.5°C / 198°F</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-champagne-gold" />
            <div>
              <span className="text-[9px] text-seoul-concrete block uppercase">Grind Size</span>
              <span className="font-bold">Medium-Fine</span>
            </div>
          </div>
        </div>

        {/* Step by Step Timeline */}
        <div className="space-y-4 mb-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 p-3 bg-ivory-light border border-seoul-concrete/40">
              <span className="font-mono text-xs font-bold text-korean-red w-24 flex-shrink-0">
                {step.time}
              </span>
              <div className="space-y-0.5">
                <h5 className="font-serif text-sm font-bold text-ink-black">
                  {lang === 'EN' ? step.titleEn : step.titleKr}
                </h5>
                <p className="text-xs text-ink-black/75">
                  {lang === 'EN' ? step.descEn : step.descKr}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Stopwatch Bar */}
        <div className="flex items-center justify-between p-4 bg-ink-black text-warm-ivory border border-ink-black">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-bold text-champagne-gold">
              {formatTimer(seconds)}
            </span>
            <span className="text-xs font-mono text-seoul-concrete">
              {lang === 'EN' ? 'Pour Stopwatch' : '스톱워치'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="px-4 py-2 bg-korean-red hover:bg-korean-red/90 text-white font-mono text-xs font-bold uppercase flex items-center gap-1.5"
            >
              {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{timerRunning ? 'Pause' : 'Start'}</span>
            </button>
            <button
              onClick={() => {
                setTimerRunning(false);
                setSeconds(0);
              }}
              className="p-2 border border-seoul-concrete/40 hover:bg-warm-ivory/10 text-warm-ivory"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
