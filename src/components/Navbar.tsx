'use client';

import React, { useState } from 'react';
import { ShoppingBag, Disc3, Volume2, VolumeX, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: 'EN' | 'KR';
  onToggleLang: () => void;
  cartCount: number;
  onOpenCart: () => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  onOpenB2B: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  cartCount,
  onOpenCart,
  isPlayingAudio,
  onToggleAudio,
  onOpenB2B,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#beans', en: '01. Beans & Ritual', kr: '01. 커피 로스팅' },
    { href: '#mood-selector', en: '02. Mood Selector', kr: '02. 오늘의 기분' },
    { href: '#ksound', en: '03. K-Sound', kr: '03. 서울의 소리' },
    { href: '#seoul-radar', en: '04. Seoul Radar', kr: '04. 문화 공간' },
    { href: '#drops', en: '05. Limited Drops', kr: '05. 한정판 Drop' },
    { href: '#photocards', en: '06. Photocards', kr: '06. 포토카드' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      {/* Top micro ticker */}
      <div className="bg-ink-black text-warm-ivory text-[10px] tracking-widest uppercase py-1 px-4 flex justify-between items-center font-mono border-b border-seoul-concrete/20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-korean-red animate-pulse" />
          <span>SEOUL SPECIALTY COFFEE CULTURE × GLOBAL K-SOUND</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-seoul-concrete">
          <span>KPopCoffee.com Flagship Experience</span>
          <span className="text-champagne-gold">SEONGSU • HONGDAE • HANNAM</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-ink-black flex items-center justify-center bg-ink-black text-warm-ivory font-serif font-bold text-base transition-transform group-hover:scale-105">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-wider text-ink-black leading-tight">
              K-POP COFFEE
            </span>
            <span className="text-[9px] tracking-widest font-mono text-coffee-brown uppercase font-semibold">
              {lang === 'EN' ? 'Seoul • Roastery & Vinyl' : '서울 성수동 • 로스터리'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-wider font-medium text-ink-black/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-korean-red transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-korean-red hover:after:w-full after:transition-all after:duration-300"
            >
              {lang === 'EN' ? link.en : link.kr}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Audio Quick Indicator & Button */}
          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border transition-all ${
              isPlayingAudio
                ? 'border-korean-red text-korean-red bg-korean-red/10 animate-pulse-subtle'
                : 'border-seoul-concrete/60 text-ink-black/80 hover:border-ink-black'
            }`}
            title="K-Sound Ambient Stream"
          >
            <Disc3 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-spin-slow text-korean-red' : ''}`} />
            <span className="hidden sm:inline font-mono text-[11px] font-semibold">
              {isPlayingAudio ? 'STREAMING' : 'K-SOUND'}
            </span>
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 opacity-60" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-medium border border-seoul-concrete/60 rounded hover:border-ink-black transition-colors"
            title="Change Language"
          >
            <Globe className="w-3 h-3 text-seoul-concrete" />
            <span className={lang === 'EN' ? 'font-bold text-korean-red' : 'text-ink-black/60'}>EN</span>
            <span className="text-seoul-concrete">/</span>
            <span className={lang === 'KR' ? 'font-bold text-korean-red' : 'text-ink-black/60'}>KR</span>
          </button>

          {/* B2B Proposal CTA */}
          <button
            onClick={onOpenB2B}
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase border border-ink-black bg-transparent hover:bg-ink-black hover:text-warm-ivory transition-colors"
          >
            {lang === 'EN' ? 'B2B Inquiry' : '협업 문의'}
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-ink-black hover:text-korean-red transition-colors"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-korean-red text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink-black hover:text-korean-red"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-warm-ivory border-b border-ink-black px-6 py-6 space-y-4 animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-3 text-sm uppercase tracking-wider font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-seoul-concrete/20 hover:text-korean-red transition-colors"
              >
                {lang === 'EN' ? link.en : link.kr}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex justify-between items-center">
            <button
              onClick={() => {
                onOpenB2B();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-mono tracking-wider uppercase bg-ink-black text-warm-ivory"
            >
              {lang === 'EN' ? 'B2B & Domain Inquiry' : '협업 및 라이선싱 문의'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
