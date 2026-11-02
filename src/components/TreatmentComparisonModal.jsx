import React from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Zap, Thermometer, Leaf, Droplets } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const COMPARISON_DATA = [
  {
    id: 'swedish',
    name: 'Swedish Relaxation',
    tag: 'Signature Offer @ ₹999',
    tagColor: 'bg-[#FD91CC] text-[#09318D]',
    price: 999,
    originalPrice: 1999,
    duration: '60 MIN',
    pressureScore: 2,
    pressureLabel: 'Gentle Flow (2/5)',
    target: 'Full Body Superficial Musculature & Nervous Ease',
    bestFor: 'First-time spa guests, high stress, anxiety, mental exhaustion',
    oil: 'Warm Sweet Almond & French Lavender',
    feeling: 'Light as air, serene, floating calm',
    popular: true,
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Release',
    tag: 'Posture & Knot Reset',
    tagColor: 'bg-[#09318D] text-white',
    price: 1199,
    originalPrice: 1699,
    duration: '60 MIN',
    pressureScore: 5,
    pressureLabel: 'Intense Firm (5/5)',
    target: 'Deep Muscle Fascia, Scapula Knots, Trapezius & Lumbar',
    bestFor: 'Desk workers, screen fatigue, chronic neck stiffness, athletes',
    oil: 'Arnica Montana, Camphor & Nilgiri Eucalyptus',
    feeling: 'Decompressed tension, elongated posture, knot-free freedom',
    popular: false,
  },
  {
    id: 'hot-stone',
    name: 'Volcanic Basalt Stones',
    tag: 'Deep Thermal Therapy',
    tagColor: 'bg-[#E6B87D] text-[#041544]',
    price: 1299,
    originalPrice: 1899,
    duration: '60 MIN',
    pressureScore: 3,
    pressureLabel: 'Thermal Penetrating (3/5)',
    target: 'Tight Joints, Deep Muscle Fibers & Thermal Expansion',
    bestFor: 'Winter chill, joint stiffness, circulatory sluggishness',
    oil: 'Warm Sesame Elixir & Heated River Basalt',
    feeling: 'Deeply melted muscles, soothing core warmth, restful sleep',
    popular: false,
  },
  {
    id: 'herbal-potli',
    name: 'Ayurvedic Herbal Potli',
    tag: 'Traditional Medicated Kizhi',
    tagColor: 'bg-emerald-600 text-white',
    price: 1399,
    originalPrice: 1999,
    duration: '60 MIN',
    pressureScore: 3.5,
    pressureLabel: 'Poultice Rhythmic (3.5/5)',
    target: 'Marrow Channels, Aching Joints & Prana Pathways',
    bestFor: 'Chronic joint aches, cold weather stiffness, holistic healing',
    oil: 'Steamed Medicated Leaves & Herbal Decoctions',
    feeling: 'Deeply nourished tissues, pain relief, revitalized vitality',
    popular: false,
  },
];

export default function TreatmentComparisonModal({ isOpen, onClose, onOpenBooking }) {
  const { isTwilight } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Therapy Comparison Matrix"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-5xl rounded-3xl overflow-hidden border-2 shadow-2xl p-6 sm:p-8 space-y-6 my-auto ${
          isTwilight
            ? 'bg-[#041544] border-[#FD91CC]/30 text-[#F8FAFE]'
            : 'bg-white border-[#09318D]/20 text-[#09318D]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FD91CC]/25 text-[#FD91CC] text-[10px] font-black uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3 h-3" /> Side-by-Side Therapy Matrix
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-black">
              Compare Bodywork Therapies
            </h3>
            <p className="text-xs text-stone-400 font-medium">
              Find the perfect therapy for your exact muscle needs and comfort level.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Comparison Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPARISON_DATA.map((t) => (
            <div
              key={t.id}
              className={`rounded-2xl p-5 border-2 flex flex-col justify-between transition-all ${
                t.popular
                  ? 'border-[#FD91CC] bg-[#FD91CC]/10 shadow-lg ring-1 ring-[#FD91CC]/40'
                  : isTwilight
                  ? 'border-white/10 bg-white/5'
                  : 'border-[#09318D]/15 bg-white'
              }`}
            >
              {/* Card Top: Title & Pricing */}
              <div className="space-y-3">
                <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block ${t.tagColor}`}>
                  {t.tag}
                </span>

                <div>
                  <h4 className="font-heading font-black text-base leading-snug">
                    {t.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-mono text-xl font-black text-[#FD91CC]">
                      ₹{t.price}
                    </span>
                    <span className="text-xs font-mono text-stone-400 line-through">
                      ₹{t.originalPrice}
                    </span>
                    <span className="text-[10px] text-stone-400 font-bold ml-auto font-mono">
                      {t.duration}
                    </span>
                  </div>
                </div>

                {/* Pressure Meter */}
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block mb-1">
                    Pressure Intensity
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <div
                        key={lvl}
                        className={`h-2 flex-1 rounded-full transition-all ${
                          lvl <= t.pressureScore
                            ? 'bg-[#FD91CC]'
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#FD91CC] block mt-1">
                    {t.pressureLabel}
                  </span>
                </div>

                {/* Anatomy Focus */}
                <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                    Target Focus
                  </span>
                  <p className="leading-snug">{t.target}</p>
                </div>

                {/* Ideal For */}
                <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                    Ideal For
                  </span>
                  <p className="leading-snug text-stone-300">{t.bestFor}</p>
                </div>

                {/* Carrier Oil & Medium */}
                <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                    Therapeutic Medium
                  </span>
                  <p className="leading-snug font-medium text-[#FD91CC]">{t.oil}</p>
                </div>

                {/* Post-Session Feeling */}
                <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                    Post-Session Sensation
                  </span>
                  <p className="leading-snug italic text-stone-300 font-medium">"{t.feeling}"</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-white/15">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking({ name: t.name, price: t.price, duration: t.duration });
                  }}
                  className={`w-full py-2.5 px-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    t.popular
                      ? 'btn-peach shadow-md'
                      : 'bg-white/15 hover:bg-[#FD91CC] hover:text-[#09318D] text-white border border-white/20'
                  }`}
                >
                  <span>Book @ ₹{t.price}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
