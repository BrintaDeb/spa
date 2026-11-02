import React, { useState } from 'react';
import { Crown, Check, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MembershipSection({ onOpenBooking }) {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      id: 'silver',
      name: 'Silver Sanctuary',
      badge: 'Essential Wellness',
      priceMonthly: 2499,
      priceAnnual: 25490,
      description: 'Ideal for busy professionals seeking regular bi-weekly somatic reset.',
      benefits: [
        '2 Full Body Massages (60 Min each) per month',
        '10% Off all Family Salon & Hair Care services',
        'Rollover unused credits for up to 60 days',
        'Complimentary Welcome Herbal Tea Ceremony',
        'Direct Priority Reception Line',
      ],
      whatsappMsg: 'Hello Samariya Spa! 🌟 I would like to enroll in the Silver Sanctuary Membership (₹2,499/mo). Please share registration details.',
    },
    {
      id: 'gold',
      name: 'Gold Radiance',
      badge: 'Most Popular',
      popular: true,
      priceMonthly: 4499,
      priceAnnual: 45890,
      description: 'Comprehensive monthly full-body decompression with complimentary aesthetics.',
      benefits: [
        '4 Full Body Massages (60 Min each) per month',
        '1 Complimentary Festive 24K Gold Facial per quarter',
        '15% Off all Salon, Facial & Grooming packages',
        'Priority Suite Booking for Weekend Evening slots',
        'Guest Privilege: Bring 1 friend/family member at member rates',
        'Custom Essential Oil formulation per visit',
      ],
      whatsappMsg: 'Hello Samariya Spa! 🌟 I would like to enroll in the Gold Radiance Membership (₹4,499/mo). Please share VIP registration details.',
    },
    {
      id: 'couples-pass',
      name: 'Royal Couples Club',
      badge: 'VIP Dual Pass',
      priceMonthly: 6999,
      priceAnnual: 71390,
      description: 'The ultimate monthly sanctuary for couples who prioritize shared tranquility.',
      benefits: [
        '4 Synchronized Couples Sessions (60 Min) in private VIP suite',
        'Volcanic Basalt Stones & Warm Oils included complimentary',
        'Private changing, shower & relaxation enclave access',
        'VIP Welcome Tea Service (Kashmiri Kahwa & Tisanes)',
        'Flexible scheduling with zero cancellation penalties',
        'Complimentary anniversary champagne-scented facial upgrade',
      ],
      whatsappMsg: 'Hello Samariya Spa! 🌟 I would like to enroll in the Royal Couples Club Membership (₹6,999/mo). Please share couples suite VIP details.',
    },
  ];

  const handleEnroll = (tier) => {
    const text = encodeURIComponent(tier.whatsappMsg);
    window.open(`https://wa.me/919366217621?text=${text}`, '_blank');
  };

  return (
    <section id="membership" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#09318D]/15 relative overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FD91CC]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
            <Crown className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>Aura Club Wellness Passes</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#09318D] tracking-tight leading-tight">
            VIP Wellness <span className="font-serif italic text-[#FD91CC] font-bold">Memberships</span>
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed max-w-2xl mx-auto">
            {t('membershipSubtitle')}
          </p>

          {/* Billing Toggle (Monthly vs Annual -15%) */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${!isAnnual ? 'text-[#09318D]' : 'text-[#38528E]'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-[#09318D] p-1 flex items-center transition-colors cursor-pointer relative"
              aria-label="Toggle annual or monthly membership billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#FD91CC] transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${isAnnual ? 'text-[#09318D]' : 'text-[#38528E]'}`}>
              <span>Annual Pass</span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-[#FD91CC] text-[#09318D] px-2 py-0.5 rounded-full shadow-xs">
                Save 15%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;
            const periodLabel = isAnnual ? '/ year' : '/ month';

            return (
              <div
                key={tier.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border-2 transition-all flex flex-col justify-between relative ${
                  tier.popular
                    ? 'border-[#FD91CC] shadow-2xl ring-2 ring-[#FD91CC]/30 lg:-translate-y-2'
                    : 'border-[#09318D]/20 shadow-md hover:border-[#09318D]/40'
                }`}
              >
                {/* Popular Ribbon Tag */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#09318D] text-[#FD91CC] border border-[#FD91CC] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    ★ MOST POPULAR SANCTUARY PASS
                  </div>
                )}

                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#09318D]/10">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FD91CC] block">
                        {tier.badge}
                      </span>
                      <h3 className="font-heading font-black text-xl sm:text-2xl text-[#09318D]">
                        {tier.name}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#09318D]/10 flex items-center justify-center text-[#09318D]">
                      <Crown className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs text-[#38528E] leading-relaxed font-medium">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="py-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading text-3xl sm:text-4xl font-black text-[#09318D]">
                        ₹{price.toLocaleString()}
                      </span>
                      <span className="text-xs text-[#38528E] font-medium font-mono">{periodLabel}</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                      No commitment • Pause or cancel anytime
                    </span>
                  </div>

                  {/* Benefits Checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-[#09318D]/10">
                    <span className="text-[10px] uppercase font-black text-[#09318D] tracking-wider block">
                      MEMBERSHIP PRIVILEGES:
                    </span>
                    <ul className="space-y-2 text-xs text-[#38528E]">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FD91CC] shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enrollment Button */}
                <div className="pt-6 mt-6 border-t border-[#09318D]/10">
                  <button
                    onClick={() => handleEnroll(tier)}
                    className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      tier.popular ? 'btn-peach' : 'btn-espresso'
                    }`}
                  >
                    <span>Enroll via WhatsApp →</span>
                  </button>
                  <span className="text-[10px] text-center text-[#38528E] block mt-2 font-medium">
                    Processed instantly by Samariya front desk
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
