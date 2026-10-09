'use client';

import React, { useState } from 'react';
import { SEOUL_RADAR_LOCATIONS, SeoulLocation } from '@/data/coffeeData';
import Image from 'next/image';
import { MapPin, Navigation, Clock, Music, ExternalLink, Compass } from 'lucide-react';

interface SeoulRadarMapProps {
  lang: 'EN' | 'KR';
}

export const SeoulRadarMap: React.FC<SeoulRadarMapProps> = ({ lang }) => {
  const [activeLocId, setActiveLocId] = useState<string>(SEOUL_RADAR_LOCATIONS[0].id);

  const activeLocation =
    SEOUL_RADAR_LOCATIONS.find((loc) => loc.id === activeLocId) || SEOUL_RADAR_LOCATIONS[0];

  return (
    <section id="seoul-radar" className="py-20 lg:py-28 bg-warm-ivory border-b border-ink-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-ink-black pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-korean-red" />
              <span className="font-mono text-xs text-korean-red tracking-widest uppercase font-semibold">
                05. {lang === 'EN' ? 'SEOUL CAFÉ RADAR & CULTURAL SPACES' : '문화 공간 (서울 카페 레이더)'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-black tracking-tight">
              {lang === 'EN' ? 'Physical Footprints in Seoul' : '성수 • 홍대 • 한남 • 북촌 아틀리에'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-black/70 max-w-md font-light">
            {lang === 'EN'
              ? 'Explore our flagship roasteries and curated partner listening bars across Seoul’s most iconic cultural epicenters.'
              : '서울의 가장 감각적인 문화 중심지에 위치한 플래그십 로스터리와 리스닝 바 네트워크를 실시간으로 확인하세요.'}
          </p>
        </div>

        {/* Interactive District Navigator & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: District Tabs & Stylized Radar Graphic */}
          <div className="lg:col-span-5 space-y-6">
            {/* District Selector Tabs */}
            <div className="space-y-3">
              {SEOUL_RADAR_LOCATIONS.map((loc) => {
                const isActive = loc.id === activeLocId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocId(loc.id)}
                    className={`w-full text-left p-4 border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'border-ink-black bg-ink-black text-warm-ivory shadow-md'
                        : 'border-seoul-concrete/60 bg-white text-ink-black hover:border-ink-black'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-korean-red' : 'text-coffee-brown'}`} />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider">
                          {loc.district}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-bold mt-1">
                        {lang === 'EN' ? loc.nameEn : loc.nameKr}
                      </h4>
                    </div>
                    <span className="font-mono text-[11px] opacity-70">
                      {isActive ? '● ACTIVE' : '○ VIEW'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Stylized Seoul GPS Coordinates Box */}
            <div className="border border-ink-black p-5 bg-ivory-light font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-coffee-brown font-bold border-b border-seoul-concrete/30 pb-2">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-korean-red animate-spin-slow" />
                  <span>SEOUL RADAR STATUS</span>
                </span>
                <span className="text-[10px] bg-champagne-gold/20 text-ink-black px-2 py-0.5 border border-champagne-gold/60">
                  LIVE GRID
                </span>
              </div>
              <div className="text-[11px] text-ink-black/70 space-y-1 pt-1">
                <p>Coordinates: 37.5445° N, 127.0560° E (Seoul Center)</p>
                <p>Current Time in Seoul: KST (UTC+9) • Open for Service</p>
                <p className="text-korean-red font-semibold">Specialty Roasting Active in Seongsu</p>
              </div>
            </div>
          </div>

          {/* Right: Featured Location Showcase Card */}
          <div className="lg:col-span-7">
            <div className="border border-ink-black bg-white shadow-elevated">
              {/* Location Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-ivory border-b border-ink-black">
                <Image
                  src={activeLocation.image}
                  alt={activeLocation.nameEn}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute top-4 left-4 bg-ink-black text-warm-ivory text-xs font-mono font-bold px-3 py-1 uppercase tracking-wider">
                  {activeLocation.districtKr}
                </div>
              </div>

              {/* Location Detailed Specs */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-black">
                    {lang === 'EN' ? activeLocation.nameEn : activeLocation.nameKr}
                  </h3>
                  <div className="font-korean text-sm text-coffee-brown mt-1">
                    {lang === 'EN' ? activeLocation.nameKr : activeLocation.nameEn}
                  </div>
                  <p className="text-xs font-mono text-seoul-concrete mt-2 flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-korean-red" />
                    <span>{activeLocation.address}</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-seoul-concrete/30 py-4 font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-seoul-concrete uppercase block">
                      {lang === 'EN' ? 'Signature Offering' : '시그니처 메뉴'}
                    </span>
                    <span className="font-bold text-coffee-brown">{activeLocation.signatureDrink}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-seoul-concrete uppercase block">
                      {lang === 'EN' ? 'Acoustic Direction' : '사운드 큐레이션'}
                    </span>
                    <span className="font-medium text-ink-black flex items-center gap-1">
                      <Music className="w-3 h-3 text-korean-red" />
                      {activeLocation.musicFocus}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-seoul-concrete uppercase block">
                      {lang === 'EN' ? 'Hours' : '운영 시간'}
                    </span>
                    <span className="text-ink-black flex items-center gap-1">
                      <Clock className="w-3 h-3 text-seoul-concrete" />
                      {activeLocation.openingHours}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-seoul-concrete uppercase block">
                      {lang === 'EN' ? 'Visitor Access' : '방문 예약'}
                    </span>
                    <span className="text-korean-red font-semibold">Walk-in & Table Booking Ready</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      activeLocation.nameEn + ' ' + activeLocation.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink-black hover:bg-coffee-brown text-warm-ivory text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>{lang === 'EN' ? 'Get Directions (Naver/Google)' : '길찾기 안내'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[11px] font-mono text-seoul-concrete">
                    KPopCoffee Flagship Network #0{SEOUL_RADAR_LOCATIONS.indexOf(activeLocation) + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
