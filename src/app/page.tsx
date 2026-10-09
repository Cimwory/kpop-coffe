'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BrandManifesto } from '@/components/BrandManifesto';
import { MoodSelector } from '@/components/MoodSelector';
import { CoffeeRitual } from '@/components/CoffeeRitual';
import { AudioDock } from '@/components/AudioDock';
import { SeoulRadarMap } from '@/components/SeoulRadarMap';
import { LimitedDrops } from '@/components/LimitedDrops';
import { PhotocardCollection } from '@/components/PhotocardCollection';
import { StoriesEditorial } from '@/components/StoriesEditorial';
import { B2BPortal } from '@/components/B2BPortal';
import { CartDrawer, CartItem } from '@/components/CartDrawer';
import { BrewGuideModal } from '@/components/BrewGuideModal';
import { MOOD_DATA, COFFEE_PRODUCTS, CoffeeProduct, MoodOption } from '@/data/coffeeData';

export default function Home() {
  const [lang, setLang] = useState<'EN' | 'KR'>('EN');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [selectedMoodId, setSelectedMoodId] = useState<string>('dawn');

  // Modals and Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const [brewGuideProduct, setBrewGuideProduct] = useState<CoffeeProduct | null>(null);

  // Cart State with initial sample item
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: COFFEE_PRODUCTS[0],
      quantity: 1,
    },
  ]);

  // Highlight bean in CoffeeRitual
  const [highlightedBeanId, setHighlightedBeanId] = useState<string | undefined>(undefined);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'KR' : 'EN'));
  };

  const handleToggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
  };

  const handleSelectMood = (mood: MoodOption) => {
    setSelectedMoodId(mood.id);
    // Auto sync track to mood
    if (mood.id === 'dawn') setCurrentTrackIndex(0);
    else if (mood.id === 'groove') setCurrentTrackIndex(1);
    else if (mood.id === 'lounge') setCurrentTrackIndex(2);
    else if (mood.id === 'midnight') setCurrentTrackIndex(3);

    // Auto start audio if not playing
    if (!isPlayingAudio) {
      setIsPlayingAudio(true);
    }
  };

  const handleViewPairedBean = (beanId: string) => {
    setHighlightedBeanId(beanId);
    const el = document.getElementById(`bean-${beanId}`) || document.getElementById('beans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => setHighlightedBeanId(undefined), 3500);
  };

  const handleAddToCart = (product: CoffeeProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-warm-ivory text-ink-black flex flex-col">
      {/* Sticky Header */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
        onOpenB2B={() => setIsB2BOpen(true)}
      />

      {/* Main Content Modules */}
      <main className="flex-1">
        {/* Module 01: Hero */}
        <Hero
          lang={lang}
          onExploreDrop={() => {
            const dropEl = document.getElementById('drops');
            if (dropEl) dropEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onStreamAudio={handleToggleAudio}
          isPlayingAudio={isPlayingAudio}
        />

        {/* Module 02: Brand Manifesto */}
        <BrandManifesto lang={lang} />

        {/* Module 03: Mood Selector */}
        <MoodSelector
          lang={lang}
          selectedMoodId={selectedMoodId}
          onSelectMood={handleSelectMood}
          onViewPairedBean={handleViewPairedBean}
        />

        {/* Module 04: Coffee Ritual & Products */}
        <CoffeeRitual
          lang={lang}
          onAddToCart={handleAddToCart}
          onOpenBrewGuide={(product) => setBrewGuideProduct(product)}
          highlightedBeanId={highlightedBeanId}
        />

        {/* Module 05: Seoul Radar Map & Cultural Spaces */}
        <SeoulRadarMap lang={lang} />

        {/* Module 06: Seasonal Limited Drops */}
        <LimitedDrops
          lang={lang}
          onReserveDrop={() => {
            const caskBean = COFFEE_PRODUCTS.find((p) => p.isDrop) || COFFEE_PRODUCTS[3];
            handleAddToCart(caskBean);
          }}
        />

        {/* Module 07: Digital Photocard System */}
        <PhotocardCollection lang={lang} />

        {/* Module 08: Editorial Publication & Stories */}
        <StoriesEditorial lang={lang} />

        {/* Module 09: B2B Commercial Portal */}
        <B2BPortal lang={lang} />
      </main>

      {/* Persistent Audio Dock */}
      <AudioDock
        lang={lang}
        isPlaying={isPlayingAudio}
        onTogglePlay={handleToggleAudio}
        currentTrackIndex={currentTrackIndex}
        onSelectTrack={(idx) => setCurrentTrackIndex(idx)}
        selectedMoodId={selectedMoodId}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        lang={lang}
      />

      {/* Brew Guide Modal */}
      <BrewGuideModal
        product={brewGuideProduct}
        onClose={() => setBrewGuideProduct(null)}
        lang={lang}
      />

      {/* B2B Proposal Modal */}
      {isB2BOpen && (
        <B2BPortal
          lang={lang}
          isOpenModal={true}
          onCloseModal={() => setIsB2BOpen(false)}
        />
      )}
    </div>
  );
}
