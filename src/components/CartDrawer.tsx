'use client';

import React, { useState } from 'react';
import { CoffeeProduct } from '@/data/coffeeData';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface CartItem {
  product: CoffeeProduct;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  lang: 'EN' | 'KR';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  lang,
}) => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const totalUSD = items.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);
  const totalKRW = items.reduce((sum, item) => sum + item.product.priceKRW * item.quantity, 0);
  const freeShippingThreshold = 60;
  const progressPercent = Math.min(100, (totalUSD / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}
    setCheckoutComplete(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in">
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-ink-black/60 backdrop-blur-sm" />

      {/* Slide-out drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-warm-ivory border-l border-ink-black shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-ink-black flex items-center justify-between bg-ivory-light">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] text-korean-red font-bold uppercase tracking-widest">
                {lang === 'EN' ? 'YOUR SENSORY SELECTION' : '선택된 장바구니'}
              </span>
              <h3 className="font-serif text-xl font-bold text-ink-black">
                {lang === 'EN' ? 'Direct Roastery Cart' : '주문 내역'} ({items.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-ink-black hover:text-korean-red transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-white border-b border-seoul-concrete/30 font-mono text-xs">
            <div className="flex justify-between items-center text-[11px] mb-1.5">
              <span className="text-coffee-brown font-semibold">
                {totalUSD >= freeShippingThreshold
                  ? lang === 'EN'
                    ? '✓ FREE EXPEDITED WORLDWIDE SHIPPING UNLOCKED'
                    : '✓ 전 세계 무료 배송 적용됨'
                  : lang === 'EN'
                  ? `Add $${(freeShippingThreshold - totalUSD).toFixed(0)} more for Free Shipping`
                  : `무료 배송까지 $${(freeShippingThreshold - totalUSD).toFixed(0)} 남음`}
              </span>
              <span className="text-seoul-concrete">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-warm-ivory h-1.5 border border-seoul-concrete/30">
              <div
                className="bg-korean-red h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutComplete ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-korean-red mx-auto animate-bounce" />
                <h4 className="font-serif text-2xl font-bold text-ink-black">
                  {lang === 'EN' ? 'Order Simulated Successfully!' : '주문 시뮬레이션 완료!'}
                </h4>
                <p className="text-xs font-mono text-ink-black/70 max-w-xs mx-auto">
                  {lang === 'EN'
                    ? 'In production, this connects to Stripe / Toss Payments with automated Bojagi packaging dispatch.'
                    : '실제 운영 시 토스페이먼츠/Stripe 결제 모듈과 연동되며 보자기 패키지로 출고됩니다.'}
                </p>
                <button
                  onClick={() => setCheckoutComplete(false)}
                  className="px-6 py-2.5 bg-ink-black text-warm-ivory text-xs font-mono uppercase font-bold"
                >
                  {lang === 'EN' ? 'Back to Cart' : '장바구니로 돌아가기'}
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center space-y-3 font-mono text-xs text-seoul-concrete">
                <p>{lang === 'EN' ? 'Your cart is currently empty.' : '장바구니가 비어 있습니다.'}</p>
                <p className="text-ink-black/60 font-serif italic text-sm">
                  {lang === 'EN' ? 'Select freshly roasted beans from our collection.' : '신선한 로스팅 원두를 담아보세요.'}
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="border border-seoul-concrete/50 bg-white p-4 flex gap-4 items-center"
                >
                  <div className="relative w-16 h-20 bg-warm-ivory border border-seoul-concrete/30 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.nameEn}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <h5 className="font-serif text-sm font-bold text-ink-black truncate">
                      {lang === 'EN' ? item.product.nameEn : item.product.nameKr}
                    </h5>
                    <p className="text-[10px] font-mono text-seoul-concrete">
                      {item.product.roastLevel} Roast • {item.product.weight}
                    </p>
                    <div className="font-mono text-xs font-bold text-ink-black">
                      ${item.product.priceUSD * item.quantity}
                      <span className="text-[10px] text-seoul-concrete ml-1">
                        / ₩{(item.product.priceKRW * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="flex items-center border border-seoul-concrete/60 bg-warm-ivory">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-white text-ink-black"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-mono text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-white text-ink-black"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-seoul-concrete hover:text-korean-red p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Bar */}
          {!checkoutComplete && items.length > 0 && (
            <div className="p-6 border-t border-ink-black bg-ivory-light space-y-4 font-mono text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between text-seoul-concrete">
                  <span>{lang === 'EN' ? 'Subtotal' : '상품 합계'}</span>
                  <span>${totalUSD} / ₩{totalKRW.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-seoul-concrete">
                  <span>{lang === 'EN' ? 'Bojagi Fabric Gift Wrap' : '친환경 보자기 포장'}</span>
                  <span className="text-champagne-gold font-semibold">{lang === 'EN' ? 'COMPLIMENTARY' : '무료 증정'}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-ink-black border-t border-seoul-concrete/30 pt-2 font-serif">
                  <span>{lang === 'EN' ? 'Total (USD / KRW)' : '최종 결제 금액'}</span>
                  <span>${totalUSD} / ₩{totalKRW.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-korean-red hover:bg-korean-red/90 text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-glow-red transition-all"
              >
                <span>{lang === 'EN' ? 'Simulate Vercel Checkout' : '결제 시뮬레이션'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-seoul-concrete text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-champagne-gold" />
                <span>Encrypted 256-Bit SSL • Global Dispatch from Seongsu Roastery</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
