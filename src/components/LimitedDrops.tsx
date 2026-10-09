'use client';

import React, { useState } from 'react';
import { Flame, Clock, Bell, Lock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface LimitedDropsProps {
  lang: 'EN' | 'KR';
  onReserveDrop: () => void;
}

export const LimitedDrops: React.FC<LimitedDropsProps> = ({ lang, onReserveDrop }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [vipCode, setVipCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const handleUnlockVip = (e: React.FormEvent) => {
    e.preventDefault();
    if (vipCode.trim().toUpperCase() === 'SEOUL2026' || vipCode.trim().length > 3) {
      setUnlocked(true);
      setErrorMessage('');
    } else {
      setErrorMessage(lang === 'EN' ? 'Invalid Access Code. (Try: SEOUL2026)' : '잘못된 코드입니다. (추천: SEOUL2026)');
    }
  };

  return (
    <section id="drops" className="py-20 lg:py-28 bg-ink-black text-warm-ivory border-b border-seoul-concrete/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-seoul-concrete/20 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-korean-red animate-ping" />
              <span className="font-mono text-xs text-korean-red tracking-widest uppercase font-semibold">
                06. {lang === 'EN' ? 'SEASONAL DROP CALENDAR' : '한정판 드롭 캘린더'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ivory tracking-tight">
              {lang === 'EN' ? 'Rare Batches & Cultural Drops' : '한정 수량 마이크로 로스팅 & 굿즈'}
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-seoul-concrete max-w-md font-mono">
            {lang === 'EN'
              ? 'Ultra-limited quantities strictly capped per release. Verified domain collectors and email subscribers receive guaranteed 1-hour priority allocation.'
              : '철저한 수량 제한으로 생산되는 한정판 라인업입니다. 사전 알림 신청자에게 1시간 우선 구매 링크가 발송됩니다.'}
          </div>
        </div>

        {/* Featured Drop 04 Hero Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-seoul-concrete/30 bg-espresso-dark/60 p-6 sm:p-10 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-korean-red/10 blur-3xl pointer-events-none" />

          {/* Left Column: Visual Artwork */}
          <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-auto border border-champagne-gold/40 overflow-hidden bg-ink-black">
            <Image
              src="/images/coffee-bag-nocturne.jpg"
              alt="Hanjeongpan Drop 04"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute top-4 left-4 bg-korean-red text-white text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider">
              {lang === 'EN' ? 'LIVE DROP • 14 UNITS LEFT' : '실시간 드롭 • 14개 잔여'}
            </div>
            <div className="absolute bottom-4 right-4 bg-ink-black/90 text-champagne-gold text-[11px] font-mono px-3 py-1 border border-champagne-gold/60">
              SERIAL: KR-DROP-04/100
            </div>
          </div>

          {/* Right Column: Drop Details & Forms */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-champagne-gold font-mono text-xs uppercase tracking-widest font-semibold">
                  DROP NO. 04 — OAK CASK AGED
                </span>
                <span className="text-seoul-concrete">•</span>
                <span className="text-korean-red font-mono text-xs font-bold uppercase">
                  BATCH LIMIT: 100 BAGS
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-warm-ivory leading-tight">
                {lang === 'EN'
                  ? 'Soju Oak Cask Fermented Natural Gesha'
                  : '전통 안동 소주 오크 배럴 숙성 게이샤 원두'}
              </h3>

              <p className="text-xs sm:text-sm text-seoul-concrete leading-relaxed font-light">
                {lang === 'EN'
                  ? 'Aged for 45 days in charred Korean oak barrels previously used for artisanal distilled liquor. Imparts intoxicating notes of ripe damson plum, honeyed vanilla cask, and subtle smoked cinnamon.'
                  : '전통 증류주를 숙성했던 참나무 오크통에서 45일간 추가 에이징한 독창적인 마이크로랏입니다. 짙은 자두의 과즙과 은은한 바닐라 오크 향이 압도적인 피니시를 선사합니다.'}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs border-t border-seoul-concrete/20 pt-4">
                <div>
                  <span className="text-[10px] text-seoul-concrete uppercase block">Weight / Pack</span>
                  <span className="text-warm-ivory">200g Whole Bean</span>
                </div>
                <div>
                  <span className="text-[10px] text-seoul-concrete uppercase block">Collector Perk</span>
                  <span className="text-champagne-gold">Holo Photocard #02</span>
                </div>
                <div>
                  <span className="text-[10px] text-seoul-concrete uppercase block">Retail Price</span>
                  <span className="text-warm-ivory font-bold">$45 / ₩60,000</span>
                </div>
              </div>
            </div>

            {/* VIP Secret Vault / Unlock Form */}
            <div className="pt-4 border-t border-seoul-concrete/20 space-y-4">
              {!unlocked ? (
                <div className="bg-ink-black/80 border border-seoul-concrete/30 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-champagne-gold">
                      <Lock className="w-3.5 h-3.5" />
                      <span>{lang === 'EN' ? 'VIP Priority Access Pass' : 'VIP 우선 구매 코드'}</span>
                    </span>
                    <span className="text-[10px] text-seoul-concrete">Password: SEOUL2026</span>
                  </div>
                  <form onSubmit={handleUnlockVip} className="flex gap-2">
                    <input
                      type="text"
                      placeholder={lang === 'EN' ? 'Enter Passcode (e.g. SEOUL2026)' : '비밀번호 입력'}
                      value={vipCode}
                      onChange={(e) => setVipCode(e.target.value)}
                      className="flex-1 bg-warm-ivory/10 border border-seoul-concrete/40 px-3 py-2 text-xs font-mono text-warm-ivory placeholder-seoul-concrete focus:outline-none focus:border-champagne-gold"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-champagne-gold hover:bg-champagne-gold/90 text-ink-black font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      {lang === 'EN' ? 'Unlock' : '해제'}
                    </button>
                  </form>
                  {errorMessage && <p className="text-[11px] font-mono text-korean-red">{errorMessage}</p>}
                </div>
              ) : (
                <div className="bg-champagne-gold/10 border border-champagne-gold p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-champagne-gold font-mono text-xs">
                    <ShieldCheck className="w-5 h-5 text-champagne-gold" />
                    <div>
                      <span className="font-bold block">
                        {lang === 'EN' ? 'VIP ACCESS GRANTED' : 'VIP 우선 구매 권한 승인됨'}
                      </span>
                      <span className="text-[10px] text-seoul-concrete">Tier 1 Collector Pass Verified</span>
                    </div>
                  </div>
                  <button
                    onClick={onReserveDrop}
                    className="px-5 py-2.5 bg-korean-red hover:bg-korean-red/90 text-white font-mono text-xs font-bold uppercase tracking-widest shadow-glow-red transition-all"
                  >
                    {lang === 'EN' ? 'Instant Allocation' : '즉시 수량 배정'}
                  </button>
                </div>
              )}

              {/* Waitlist Notification Bar */}
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-2">
                  <input
                    type="email"
                    required
                    placeholder={
                      lang === 'EN'
                        ? 'Enter email for Drop 05 SMS/email radar alerts'
                        : '다음 드롭 05 사전 알림 이메일 입력'
                    }
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-warm-ivory/10 border border-seoul-concrete/40 px-4 py-2.5 text-xs font-mono text-warm-ivory placeholder-seoul-concrete focus:outline-none focus:border-korean-red"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 border border-warm-ivory hover:bg-warm-ivory hover:text-ink-black text-warm-ivory font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>{lang === 'EN' ? 'Subscribe Alerts' : '알림 신청'}</span>
                  </button>
                </form>
              ) : (
                <div className="text-xs font-mono text-champagne-gold flex items-center gap-2 py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {lang === 'EN'
                      ? 'Priority subscription confirmed! You are #184 on the radar list.'
                      : '우선 알림 신청이 완료되었습니다. 대기 순번: 184번'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
