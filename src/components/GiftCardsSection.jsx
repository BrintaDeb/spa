import React, { useState } from 'react';
import { Gift, Send, Sparkles, Heart, Award, Copy, Check, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const OCCASIONS = [
  { id: 'anniversary', label: 'Wedding Anniversary', icon: '💍', quote: 'A serene retreat to celebrate your timeless love.' },
  { id: 'birthday', label: 'Birthday Bliss', icon: '🎂', quote: 'Wishing you a year of radiant vitality and inner peace.' },
  { id: 'bridal', label: 'Bridal Radiance', icon: '👰', quote: 'Luminous pampering for your unforgettable moments.' },
  { id: 'stress', label: 'Stress & Tension Detox', icon: '🌿', quote: 'Melt away daily burdens in pure therapeutic stillness.' },
  { id: 'festive', label: 'Festive Celebration', icon: '✨', quote: 'Cherishing togetherness with golden festive pampering.' },
];

export default function GiftCardsSection({ onOpenBooking }) {
  const { t } = useLanguage();
  const { isTwilight } = useTheme();

  const [selectedAmount, setSelectedAmount] = useState(999);
  const [recipientName, setRecipientName] = useState('Priya Saha');
  const [senderName, setSenderName] = useState('With Love');
  const [selectedOccasion, setSelectedOccasion] = useState(OCCASIONS[0]);
  const [copied, setCopied] = useState(false);

  const voucherCode = `SAMARIYA-${selectedAmount}-${(recipientName.slice(0, 3).toUpperCase() || 'AURA')}-2026`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendGiftWhatsApp = () => {
    const text = encodeURIComponent(
      `🎁 *SAMARIYA BEAUTY SPA GIFT VOUCHER*\n\n` +
      `• *For:* ${recipientName || 'Valued Guest'}\n` +
      `• *From:* ${senderName || 'Anonymous'}\n` +
      `• *Occasion:* ${selectedOccasion.label}\n` +
      `• *Voucher Value:* ₹${selectedAmount}\n` +
      `• *Voucher Code:* ${voucherCode}\n` +
      `• *Validity:* 6 Months from issue\n` +
      `• *Redeemable at:* Samariya Beauty Spa, Banamalipur, Agartala (Near S22 Cafe)\n\n` +
      `Please confirm reservation & payment options for this gift voucher!`
    );
    window.open(`https://wa.me/919366217621?text=${text}`, '_blank');
  };

  return (
    <section id="gift-cards" className={`py-20 sm:py-28 px-4 sm:px-8 border-t transition-colors duration-400 relative overflow-hidden ${
      isTwilight
        ? 'bg-[#041544] border-[#FD91CC]/20 text-[#F8FAFE]'
        : 'bg-[#FFFFFF] border-[#09318D]/15 text-[#09318D]'
    }`}>
      
      {/* Decorative Warm Ambient Spheres */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#FD91CC]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-[#09318D]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#09318D]/20 text-[#09318D] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
            <Gift className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>Luxury Digital Vouchers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Give The Gift Of <span className="font-serif italic text-[#FD91CC] font-bold">Pure Serenity</span>
          </h2>
          <p className={`text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto ${
            isTwilight ? 'text-white/80' : 'text-[#38528E]'
          }`}>
            Create a personalized digital luxury gift voucher for your loved ones in Agartala.
            Redeemable for any full body massage, 24K gold facial, or couple sanctuary ritual.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Customizer vs Live Card Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Customizer Controls (7 Cols) */}
          <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl border-2 space-y-6 ${
            isTwilight
              ? 'bg-[#071c56]/85 border-[#FD91CC]/30 shadow-2xl backdrop-blur-md'
              : 'bg-white border-[#09318D]/15 shadow-xl'
          }`}>
            
            {/* Step 1: Amount Selection */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider block">
                1. Select Gift Certificate Value
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { amt: 999, tag: 'Signature Offer' },
                  { amt: 1999, tag: 'Duo Relax' },
                  { amt: 2499, tag: 'Radiance Glow' },
                  { amt: 4999, tag: 'VIP Suite' },
                ].map((item) => {
                  const active = selectedAmount === item.amt;
                  return (
                    <button
                      key={item.amt}
                      onClick={() => setSelectedAmount(item.amt)}
                      className={`p-3 rounded-2xl text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center ${
                        active
                          ? 'border-[#FD91CC] bg-[#FD91CC]/20 text-[#09318D] dark:text-white font-black shadow-md scale-[1.02]'
                          : isTwilight
                          ? 'border-white/15 bg-white/5 text-white/80 hover:border-[#FD91CC]'
                          : 'border-[#09318D]/15 bg-white text-[#09318D] hover:border-[#FD91CC]'
                      }`}
                    >
                      <span className="font-mono font-black text-base">₹{item.amt}</span>
                      <span className="text-[9px] uppercase tracking-wider text-[#FD91CC] font-bold mt-0.5">
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Occasion Selector */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider block">
                2. Select Occasion & Sentiment
              </label>
              <div className="flex flex-wrap gap-2">
                {OCCASIONS.map((occ) => {
                  const active = selectedOccasion.id === occ.id;
                  return (
                    <button
                      key={occ.id}
                      onClick={() => setSelectedOccasion(occ)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                        active
                          ? 'bg-[#09318D] text-white border-[#09318D] shadow-sm'
                          : isTwilight
                          ? 'bg-white/5 border-white/15 text-white hover:border-[#FD91CC]'
                          : 'bg-white border-[#09318D]/15 text-[#09318D] hover:border-[#FD91CC]'
                      }`}
                    >
                      <span>{occ.icon}</span>
                      <span>{occ.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Recipient & Sender Customization */}
            <div className="space-y-4 pt-1">
              <div>
                <label htmlFor="voucher-recipient-name" className="text-xs font-black uppercase tracking-wider block mb-1.5">
                  3. Recipient Name
                </label>
                <input
                  id="voucher-recipient-name"
                  name="recipientName"
                  type="text"
                  placeholder="e.g. Priya Saha / Mom & Dad"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FD91CC] transition-all ${
                    isTwilight
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/40'
                      : 'bg-white border-[#09318D]/20 text-[#09318D] placeholder-stone-400'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="voucher-sender-name" className="text-xs font-black uppercase tracking-wider block mb-1.5">
                  4. From (Sender Name)
                </label>
                <input
                  id="voucher-sender-name"
                  name="senderName"
                  type="text"
                  placeholder="e.g. Rahul / Your Family"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FD91CC] transition-all ${
                    isTwilight
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/40'
                      : 'bg-white border-[#09318D]/20 text-[#09318D] placeholder-stone-400'
                  }`}
                />
              </div>
            </div>

            {/* Step 4: Dispatch Action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSendGiftWhatsApp}
                className="flex-1 py-4 rounded-full btn-peach text-xs font-extrabold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Dispatch Card via WhatsApp</span>
              </button>

              <button
                onClick={handleCopyCode}
                className={`px-5 py-4 rounded-full border text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : isTwilight
                    ? 'bg-white/10 border-white/20 text-white hover:border-[#FD91CC]'
                    : 'bg-white border-[#09318D]/20 text-[#09318D] hover:border-[#FD91CC]'
                }`}
                title="Copy voucher code"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            <p className={`text-[11px] text-center font-medium ${
              isTwilight ? 'text-white/60' : 'text-[#38528E]'
            }`}>
              Instant digital verification. Redeemable in Banamalipur near S22 Cafe, Agartala. Valid for 6 full months.
            </p>

          </div>

          {/* Right Column: Live Luxury Voucher Card Preview (5 Cols) */}
          <div className="lg:col-span-6 sticky top-24 space-y-4">
            
            <div className="flex items-center justify-between px-2">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FD91CC] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Live Voucher Preview
              </span>
              <span className="text-[10px] font-mono text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                ● Authentic Gift Pass
              </span>
            </div>

            {/* The Luxury Physical-Style Voucher Card */}
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-[#FD91CC]/60 bg-gradient-to-br from-[#09318D] via-[#052163] to-[#041544] text-white">
              
              {/* Metallic Radial Sheen */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FD91CC]/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E6B87D]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Card Top: Crest & Value */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FD91CC] bg-white p-0.5 shadow-md shrink-0">
                    <img src="/images/logo.png" alt="Samariya Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-black tracking-widest leading-none">
                      SAMARIYA
                    </h3>
                    <p className="text-[9px] font-bold text-[#FD91CC] tracking-[0.2em] uppercase mt-1">
                      Sanctuary Gift Certificate
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-widest text-white/70 block font-bold">
                    Value
                  </span>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#FD91CC] tracking-tight">
                    ₹{selectedAmount}
                  </span>
                </div>
              </div>

              {/* Card Center: Recipient Presentation */}
              <div className="relative z-10 py-3 space-y-1 text-center">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E6B87D]">
                  Presented with Honour To
                </span>
                <p className="font-script text-3xl sm:text-4xl text-white font-bold leading-tight drop-shadow-sm">
                  {recipientName || 'Our Cherished Guest'}
                </p>
                <p className="text-[11px] text-white/90 italic font-medium max-w-sm mx-auto">
                  "{selectedOccasion.quote}"
                </p>
              </div>

              {/* Card Bottom: Metadata & Gold Foil Seal */}
              <div className="relative z-10 pt-3 border-t border-white/15 flex items-end justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-white/60 block">
                    Certificate Code
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#FD91CC] tracking-wider">
                    {voucherCode}
                  </span>
                  <span className="text-[9px] text-white/60 block mt-0.5">
                    Valid 6 Months • Banamalipur, Agartala
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#E6B87D] via-[#FFE3BA] to-[#E6B87D] p-0.5 shadow-lg flex items-center justify-center text-[#09318D]">
                    <Award className="w-5 h-5 text-[#09318D]" />
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Pill */}
            <div className="p-4 rounded-2xl border bg-white/5 dark:bg-white/5 border-white/10 flex items-center justify-between text-xs">
              <span className="text-stone-500 dark:text-stone-300 font-medium">
                Want to book an appointment with this voucher?
              </span>
              <button
                onClick={() => onOpenBooking({ name: `Gift Voucher (₹${selectedAmount})`, price: selectedAmount, duration: '60 MIN' })}
                className="font-bold text-[#FD91CC] hover:underline cursor-pointer ml-2 shrink-0"
              >
                Redeem Now →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
