import React, { useState } from 'react';
import { Award, Sparkles, Check, Gift, ArrowRight, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const PASSPORT_STAMPS = [
  {
    step: 1,
    roman: 'I',
    title: 'Sanctuary Initiation',
    unlockedAt: '1st Visit',
    reward: 'Signature Lavender Aromatherapy Mist & Custom Essential Oil Selection',
    value: '₹350 Value',
    tag: 'WELCOME GIFT',
    description: 'Personalized scent ritual on arrival plus skin/muscle tension evaluation by master therapist.',
  },
  {
    step: 2,
    roman: 'II',
    title: 'Kashmiri Kahwa Ritual',
    unlockedAt: '2nd Visit',
    reward: 'Warm Saffron & Cardamom Kahwa Herbal Infusion served in brass goblets',
    value: '₹400 Value',
    tag: 'WELLNESS BREW',
    description: 'Freshly brewed post-therapy antioxidant elixir designed to enhance lymphatic detoxification.',
  },
  {
    step: 3,
    roman: 'III',
    title: 'Moroccan Rose Pedicure',
    unlockedAt: '3rd Visit',
    reward: '50% Flat Off Deluxe Milk & Himalayan Pink Salt Foot Care',
    value: '₹550 Savings',
    tag: 'MIDPOINT REWARD',
    description: 'Full 45-minute revitalizing foot ritual with dead-skin exfoliation and pressure point massage.',
  },
  {
    step: 4,
    roman: 'IV',
    title: 'Hydro-Botanical Soak',
    unlockedAt: '4th Visit',
    reward: 'Complimentary 20-min Warm Floral Hydro-Soak & Reflexology Add-On',
    value: '₹650 Value',
    tag: 'SANCTUARY RETREAT',
    description: 'Submerged warm water hydrotherapy with wild rose petals and therapeutic Epsom salts.',
  },
  {
    step: 5,
    roman: 'V',
    title: 'The Golden Nirvana',
    unlockedAt: '5th Visit',
    reward: 'FREE 60-Min 24K Gold Facial OR Full Swedish Relaxation Massage',
    value: '₹1,999 Value',
    tag: 'VIP PINNACLE',
    description: 'Complete complimentary full-duration signature chamber session of your choice. Zero bill.',
  },
];

export default function SanctuaryPassport({ onOpenBooking }) {
  const [selectedStamp, setSelectedStamp] = useState(3);
  const [guestPhone, setGuestPhone] = useState('');
  const { isTwilight } = useTheme();

  const activeData = PASSPORT_STAMPS.find((s) => s.step === selectedStamp) || PASSPORT_STAMPS[2];

  const handleClaimWhatsApp = (e) => {
    e.preventDefault();
    const phone = guestPhone.trim() || 'Guest';
    const message = `Hello Samariya Spa! I would like to register/claim rewards on my Digital VIP Sanctuary Passport (Phone: ${phone}) for Milestone ${activeData.roman}: ${activeData.title} (${activeData.reward}). Please verify my stamps at the Agartala salon.`;
    const url = `https://wa.me/919366217621?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="loyalty-passport" className="py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FD91CC]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#09318D]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD91CC]/20 border border-[#FD91CC]/40 text-[#09318D] dark:text-[#E6B87D] text-xs font-heading font-black tracking-widest uppercase">
            <Award className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>Digital Guest Loyalty Program</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-[0.16em] text-[#09318D] dark:text-white font-extrabold">
            The Sanctuary VIP Passport
          </h2>

          <p className="text-sm sm:text-base text-[#38528E] dark:text-stone-300 font-medium leading-relaxed">
            Every session at Samariya brings you closer to pure transcendence. Collect 5 visit stamps and unlock complimentary luxury treatments valued up to ₹1,999.
          </p>
        </div>

        {/* Passport Booklet Card */}
        <div
          className={`rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
            isTwilight
              ? 'bg-[#030e2f]/90 border-[#E6B87D]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
              : 'bg-white border-[#09318D]/20 shadow-[0_20px_50px_rgba(9,49,141,0.12)]'
          }`}
        >
          {/* Passport Gold Header Bar */}
          <div
            className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
              isTwilight
                ? 'bg-gradient-to-r from-[#02091d] via-[#041544] to-[#02091d] border-white/10'
                : 'bg-gradient-to-r from-[#09318D] via-[#1140ad] to-[#09318D] text-white border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FD91CC]/20 border border-[#FD91CC]/40 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#FD91CC]" />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#FD91CC]">
                  PASS-ID: SMP-AGT-2026-VIP
                </p>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white tracking-wide">
                  Samariya Beauty Spa • Banamalipur, Agartala
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold bg-[#FD91CC] text-[#09318D] px-3 py-1 rounded-full shadow-xs">
                5 STAMP REWARD CYCLE
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Interactive 5-Stamp Progression Row */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#38528E] dark:text-[#E6B87D]">
                  Tap Any Stamp To Preview Reward Milestones:
                </span>
                <span className="text-[11px] font-medium text-stone-400">
                  Step {activeData.step} of 5 Active
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
                {PASSPORT_STAMPS.map((stamp) => {
                  const isSelected = stamp.step === selectedStamp;
                  const isCompleted = stamp.step <= selectedStamp;

                  return (
                    <button
                      key={stamp.step}
                      type="button"
                      onClick={() => setSelectedStamp(stamp.step)}
                      className={`relative p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-between min-h-[140px] group ${
                        isSelected
                          ? isTwilight
                            ? 'bg-[#FD91CC]/15 border-[#FD91CC] ring-2 ring-[#FD91CC]/30 shadow-lg scale-105'
                            : 'bg-[#FD91CC]/15 border-[#09318D] ring-2 ring-[#09318D]/20 shadow-md scale-105'
                          : isCompleted
                          ? isTwilight
                            ? 'bg-white/5 border-emerald-500/40 text-stone-200 hover:border-[#FD91CC]/50'
                            : 'bg-stone-50 border-emerald-500/40 text-[#09318D] hover:border-[#FD91CC]'
                          : isTwilight
                          ? 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'
                          : 'bg-white border-[#09318D]/15 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {/* Stamp Top Roman Badge */}
                      <span className="text-[10px] font-mono font-black uppercase text-stone-400">
                        {stamp.unlockedAt}
                      </span>

                      {/* Wax Stamp Seal Graphic */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center my-2 border-2 transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                          stamp.step === 5
                            ? 'bg-gradient-to-tr from-amber-400 to-yellow-200 border-amber-300 text-amber-950 font-black'
                            : isCompleted
                            ? 'bg-[#FD91CC] border-white text-[#09318D] font-black'
                            : isTwilight
                            ? 'bg-white/10 border-white/20 text-stone-400'
                            : 'bg-slate-100 border-slate-300 text-stone-400'
                        }`}
                      >
                        {stamp.step === 5 ? (
                          <Sparkles className="w-5 h-5 text-amber-900 animate-spin-slow" />
                        ) : isCompleted ? (
                          <Check className="w-5 h-5 stroke-[3]" />
                        ) : (
                          <span className="font-heading font-black text-sm">{stamp.roman}</span>
                        )}
                      </div>

                      {/* Stamp Label */}
                      <div className="space-y-0.5">
                        <p className="text-xs font-heading font-black tracking-tight truncate max-w-full">
                          {stamp.title}
                        </p>
                        <p className="text-[10px] font-bold text-[#FD91CC]">{stamp.value}</p>
                      </div>

                      {/* Selected Indicator Arrow */}
                      {isSelected && (
                        <div className="absolute -bottom-2 w-3 h-3 bg-[#FD91CC] rotate-45 rounded-xs"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Milestone Spotlight Card */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                isTwilight
                  ? 'bg-gradient-to-r from-[#041544] to-[#08236d] border-[#FD91CC]/30 text-white'
                  : 'bg-gradient-to-r from-blue-50/70 via-pink-50/50 to-indigo-50/70 border-[#09318D]/20 text-[#09318D]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#09318D] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      Milestone {activeData.roman} • {activeData.unlockedAt}
                    </span>
                    <span className="bg-[#FD91CC] text-[#09318D] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {activeData.tag}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {activeData.value}
                    </span>
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-black">
                    {activeData.reward}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#38528E] dark:text-stone-300 leading-relaxed max-w-2xl">
                    {activeData.description}
                  </p>
                </div>

                {/* Claim / Sync Action Form */}
                <div className="shrink-0 w-full md:w-80 space-y-3 bg-white/70 dark:bg-black/30 p-4 rounded-2xl border border-black/5 dark:border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <Gift className="w-4 h-4 text-[#FD91CC]" />
                    <span>Claim or Link to Your Number</span>
                  </div>

                  <form onSubmit={handleClaimWhatsApp} className="space-y-2">
                    <label htmlFor="passport-phone" className="sr-only">Enter 10-digit mobile number</label>
                    <input
                      id="passport-phone"
                      name="phone"
                      type="tel"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 focus:outline-none focus:border-[#FD91CC] text-[#09318D] dark:text-white"
                    />

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider btn-espresso shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      <span>Sync via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>

                  <p className="text-[10px] text-stone-400 text-center">
                    Instant verification at front desk upon arrival. No paper cards needed.
                  </p>
                </div>

              </div>
            </div>

            {/* Passport Guarantee Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <ShieldCheck className="w-5 h-5 text-[#FD91CC] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#09318D] dark:text-white">Lifetime Validity</p>
                  <p className="text-[11px] text-stone-400">Your stamps never expire across visits</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <HeartHandshake className="w-5 h-5 text-[#FD91CC] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#09318D] dark:text-white">Family Shareable</p>
                  <p className="text-[11px] text-stone-400">Stamps can be accumulated by family members</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <PhoneCall className="w-5 h-5 text-[#FD91CC] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#09318D] dark:text-white">Phone-Number Linked</p>
                  <p className="text-[11px] text-stone-400">Front desk auto-tracks with every visit</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
