'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, TrendingUp, Handshake, Building2, X } from 'lucide-react';

interface B2BPortalProps {
  lang: 'EN' | 'KR';
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const B2BPortal: React.FC<B2BPortalProps> = ({ lang, isOpenModal, onCloseModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: 'Brand Licensing & Franchising',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const content = (
    <div className="space-y-10">
      {/* Top Banner on Domain Value */}
      <div className="border border-champagne-gold/60 bg-gradient-to-r from-espresso-dark to-ink-black p-6 sm:p-8 text-warm-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-champagne-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-champagne-gold text-xs font-mono font-bold tracking-widest uppercase">
            <TrendingUp className="w-4 h-4" />
            <span>GLOBAL DOMAIN ASSET & STRATEGIC BRAND FRAMEWORK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-ivory">
            KPopCoffee.com — Enterprise Commercial Valuation
          </h2>

          <p className="text-xs sm:text-sm text-seoul-concrete max-w-2xl leading-relaxed">
            {lang === 'EN'
              ? 'A rare category-defining .com digital asset engineered for global consumer scale. Available for joint ventures, international master franchise licensing, or complete turnkey brand acquisition.'
              : '글로벌 소비재 시장을 선점할 수 있는 희소한 최상위 .com 도메인과 완성된 브랜드 프레임워크입니다. 글로벌 프랜차이즈 라이선싱, 합작 투자 및 도메인 인수 협상이 가능합니다.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-seoul-concrete/20 font-mono text-xs">
            <div>
              <span className="text-seoul-concrete uppercase block text-[10px]">Domain Authority</span>
              <span className="text-champagne-gold font-bold text-base">Tier 1 (.com)</span>
            </div>
            <div>
              <span className="text-seoul-concrete uppercase block text-[10px]">Target Audience</span>
              <span className="text-warm-ivory font-bold text-base">Gen Z & K-Culture</span>
            </div>
            <div>
              <span className="text-seoul-concrete uppercase block text-[10px]">Commercial Model</span>
              <span className="text-warm-ivory font-bold text-base">D2C + Retail + Drops</span>
            </div>
            <div>
              <span className="text-seoul-concrete uppercase block text-[10px]">Turnkey Readiness</span>
              <span className="text-korean-red font-bold text-base">100% Production</span>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form & Partnership Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-ink-black">
            {lang === 'EN' ? 'Partnership Channels' : '협업 및 제휴 분야'}
          </h3>
          <p className="text-xs text-ink-black/70 leading-relaxed font-light">
            {lang === 'EN'
              ? 'We actively collaborate with specialty roasters, entertainment labels, fashion brands, and cultural institutions to create multi-sensory experiences.'
              : '스페셜티 로스터리, 엔터테인먼트 레이블, 패션 브랜드 및 글로벌 유통 파트너와의 전략적 협업을 진행합니다.'}
          </p>

          <div className="space-y-3 pt-2 font-mono text-xs">
            <div className="p-3 border border-seoul-concrete/60 bg-white flex items-center gap-3">
              <Handshake className="w-4 h-4 text-korean-red" />
              <div>
                <span className="font-bold text-ink-black block">Specialty Roasting Collaborations</span>
                <span className="text-[11px] text-seoul-concrete">Co-branded seasonal micro-lots & D2C revenue share</span>
              </div>
            </div>

            <div className="p-3 border border-seoul-concrete/60 bg-white flex items-center gap-3">
              <Building2 className="w-4 h-4 text-champagne-gold" />
              <div>
                <span className="font-bold text-ink-black block">Domain Buyout & Strategic Licensing</span>
                <span className="text-[11px] text-seoul-concrete">Complete transfer of KPopCoffee.com rights & brand assets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div className="lg:col-span-7 border border-ink-black bg-white p-6 sm:p-8 shadow-elevated">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-korean-red mx-auto animate-bounce" />
              <h4 className="font-serif text-2xl font-bold text-ink-black">
                {lang === 'EN' ? 'Inquiry Successfully Dispatched' : '제휴 문의가 접수되었습니다'}
              </h4>
              <p className="text-xs font-mono text-ink-black/70 max-w-sm mx-auto">
                {lang === 'EN'
                  ? 'Our brand stewardship executive will review your proposal and respond with the official commercial deck within 24 hours.'
                  : '담당 브랜드 디렉터가 내용을 검토한 후 24시간 이내에 공식 협업 제안서를 전달해 드립니다.'}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 border border-ink-black text-xs font-mono uppercase hover:bg-ink-black hover:text-warm-ivory transition-colors"
              >
                {lang === 'EN' ? 'Submit Another Inquiry' : '추가 문의 작성'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-mono text-seoul-concrete uppercase">
                    {lang === 'EN' ? 'Full Name *' : '성함 / 담당자명 *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-seoul-concrete/60 px-3.5 py-2.5 text-xs text-ink-black font-mono focus:border-ink-black focus:outline-none"
                    placeholder="e.g. Min-ho Kang"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono text-seoul-concrete uppercase">
                    {lang === 'EN' ? 'Business Email *' : '회사 이메일 *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-seoul-concrete/60 px-3.5 py-2.5 text-xs text-ink-black font-mono focus:border-ink-black focus:outline-none"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-mono text-seoul-concrete uppercase">
                    {lang === 'EN' ? 'Company / Organization' : '소속 기업명'}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border border-seoul-concrete/60 px-3.5 py-2.5 text-xs text-ink-black font-mono focus:border-ink-black focus:outline-none"
                    placeholder="Seoul Creative Roasters Corp"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono text-seoul-concrete uppercase">
                    {lang === 'EN' ? 'Inquiry Nature' : '문의 유형'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border border-seoul-concrete/60 px-3.5 py-2.5 text-xs text-ink-black font-mono focus:border-ink-black focus:outline-none bg-white"
                  >
                    <option>Brand Licensing & Franchising</option>
                    <option>Specialty Roaster Co-Branding</option>
                    <option>Domain Asset Acquisition (KPopCoffee.com)</option>
                    <option>Media & Entertainment Sponsorship</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-mono text-seoul-concrete uppercase">
                  {lang === 'EN' ? 'Partnership Scope & Details *' : '협업 제안 내용 *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-seoul-concrete/60 px-3.5 py-2.5 text-xs text-ink-black font-mono focus:border-ink-black focus:outline-none"
                  placeholder={
                    lang === 'EN'
                      ? 'Describe your distribution reach, brand synergy, or acquisition proposal...'
                      : '구체적인 제휴 내용이나 사업 계획을 간략히 기재해 주세요...'
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-ink-black hover:bg-coffee-brown text-warm-ivory text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === 'EN' ? 'Request Official Commercial Deck' : '공식 제휴 제안서 요청'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-black/70 backdrop-blur-md animate-in fade-in">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-warm-ivory border border-ink-black p-6 sm:p-10 shadow-2xl">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 p-2 text-ink-black hover:text-korean-red transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="collaborate" className="py-20 lg:py-28 bg-warm-ivory border-b border-ink-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-ink-black pb-8 mb-12 flex items-center justify-between">
          <div className="space-y-2">
            <span className="font-mono text-xs text-korean-red tracking-widest uppercase font-semibold">
              09. {lang === 'EN' ? 'B2B & LICENSING PORTAL' : '협업 문의 (파트너십 & 도메인)'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-black tracking-tight">
              {lang === 'EN' ? 'Commercial Collaboration' : '글로벌 브랜드 제휴 및 협업'}
            </h2>
          </div>
        </div>
        {content}
      </div>
    </section>
  );
};
