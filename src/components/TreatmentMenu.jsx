import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock, CheckCircle2, Scale } from 'lucide-react';
import TreatmentComparisonModal from './TreatmentComparisonModal';

const CATEGORIES = [
  { id: 'massage', label: 'MASSAGE THERAPY' },
  { id: 'facials', label: 'PERFORMANCE FACIALS' },
  { id: 'hair', label: 'HAIR SPA & SALON' },
  { id: 'nails', label: 'NAILS & REFLEXOLOGY' },
];

const MENU_ITEMS = {
  massage: [
    {
      id: 'swedish',
      title: 'Swedish Relaxation Massage (Signature Offer)',
      isPromo: true,
      promoTag: 'SPECIAL @ ₹999',
      price: '₹999',
      originalPrice: '₹1,999',
      duration: '60 MIN',
      desc: 'Gentle, gliding strokes designed to increase circulation, soothe nervous tension, and bring complete mental and physical restoration in a private sanitised chamber.',
      benefits: ['Full Body Coverage', 'Improves Blood Circulation', 'Calms Nervous System', 'Tension Relief'],
    },
    {
      id: 'hot-stone',
      title: 'Volcanic Basalt Hot Stone Therapy',
      price: '₹1,299',
      duration: '60 MIN',
      desc: 'Smooth heated river basalt stones used with customized pressure to penetrate deep muscle tissue and eliminate stubborn knots.',
      benefits: ['Penetrating Heat Therapy', 'Eases Joint Stiffness', 'Deep Calming Sensation'],
    },
    {
      id: 'deep-tissue',
      title: 'Deep Tissue & Tension Release',
      price: '₹1,199',
      duration: '60 MIN',
      desc: 'Focused slow strokes and targeted pressure on chronic muscle fatigue, stiff shoulders, and lower lumbar tightness.',
      benefits: ['Breaks Down Muscle Knots', 'Post-Workout Recovery', 'Postural Reset'],
    },
    {
      id: 'potli',
      title: 'Ayurvedic Herbal Potli Kizhi',
      price: '₹1,399',
      duration: '60 MIN',
      desc: 'Steamed medicated herbal poultices steeped in therapeutic warm oils to nourish aching joints and restore vital prana.',
      benefits: ['Traditional Herbal Poultice', 'Joint Pain Relief', 'Detoxifies Tissues'],
    },
  ],
  facials: [
    {
      id: 'gold-facial',
      title: 'Festive Glow & 24K Radiance Facial',
      isPromo: true,
      promoTag: 'FESTIVE GLOW @ ₹999',
      price: '₹999',
      originalPrice: '₹1,699',
      duration: '60 MIN',
      desc: 'Botanical enzyme cleanse, lymphatic facial sculpting, and a radiant 24K gold luminosity mask for instant party & wedding glow.',
      benefits: ['Deep Cleansing & Steam', '24K Gold Peptide Mask', 'Instant Luminous Radiance'],
    },
    {
      id: 'hydra-moisture',
      title: 'Hydra Deep Moisture Barrier Infusion',
      price: '₹1,299',
      duration: '60 MIN',
      desc: 'Ultrasonic pore cleansing paired with hyaluronic acid hydration to quench parched skin and restore a supple skin barrier.',
      benefits: ['Ultrasonic Extraction', 'Hyaluronic Acid Surge', 'Barrier Protection'],
    },
    {
      id: 'diamond-glow',
      title: 'Diamond Microdermabrasion Glow',
      price: '₹1,499',
      duration: '60 MIN',
      desc: 'Non-invasive diamond-tip exfoliation to polish skin texture, lighten pigmentation, and stimulate collagen synthesis.',
      benefits: ['Diamond-Tip Exfoliation', 'Pore Refinement', 'Even Skin Tone'],
    },
  ],
  hair: [
    {
      id: 'scalp-detox',
      title: 'Botanical Scalp Detox & Hair Spa',
      price: '₹899',
      duration: '60 MIN',
      desc: 'Exfoliating scalp scrub, ozone steam mist, argan deep conditioning mask, and an extended relaxing head and neck massage.',
      benefits: ['Scalp Exfoliation & Steam', 'Argan Moisture Infusion', 'Neck & Shoulder Massage'],
    },
    {
      id: 'keratin',
      title: 'Keratin & Protein Nourishment Ritual',
      price: '₹1,499',
      duration: '75 MIN',
      desc: 'Intense micro-keratin reconstructive treatment to tame unruly frizz, seal damaged hair cuticles, and deliver glossy softness.',
      benefits: ['Frizz Reduction', 'Cuticle Smoothing', 'Long-Lasting Shine'],
    },
  ],
  nails: [
    {
      id: 'rose-pedicure',
      title: 'Luxury Rose Petal Foot Bath & Pedicure',
      price: '₹799',
      duration: '45 MIN',
      desc: 'Warm floral milk bath, sea salt exfoliation, cuticle grooming, callus buffing, and a relaxing peppermint foot massage.',
      benefits: ['Floral Milk Soak', 'Dead Skin Removal', 'Aromatherapy Foot Massage'],
    },
    {
      id: 'reflexology',
      title: 'Meridian Acupressure Hand & Foot Reflexology',
      price: '₹699',
      duration: '30 MIN',
      desc: 'Targeted acupressure on vital reflex zones to improve energy flow throughout the body and relieve fatigue.',
      benefits: ['Acupressure Point Relief', 'Tired Feet Recovery', 'Nervous System Reset'],
    },
  ],
};

export default function TreatmentMenu({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('massage');
  const [comparisonOpen, setComparisonOpen] = useState(false);

  const currentItems = MENU_ITEMS[activeTab] || [];

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-8 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-script text-5xl sm:text-6xl text-[#FD91CC] font-bold block">
            Curated Menu
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-[0.18em] text-[#09318D] font-extrabold">
            Services & Pricing
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed">
            All services are provided in clean, private therapy suites with certified therapists.
            Transparent pricing with zero hidden fees.
          </p>
        </div>

        {/* 4 Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-white border border-[#09318D]/20 rounded-full max-w-2xl mx-auto shadow-sm">
          {CATEGORIES.map((cat) => {
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                  active
                    ? 'bg-[#09318D] text-white shadow-sm'
                    : 'text-[#38528E] hover:text-[#09318D] hover:bg-[#09318D]/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Massage Comparison Matrix Trigger */}
        <div className="flex justify-center -mt-6">
          <button
            onClick={() => setComparisonOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-heading font-black tracking-wider uppercase bg-[#FD91CC]/15 hover:bg-[#FD91CC]/25 text-[#09318D] border border-[#FD91CC]/60 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Scale className="w-4 h-4 text-[#FD91CC]" />
            <span>Compare Therapies Side-by-Side (Pressure, Oils & Knots)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#09318D]" />
          </button>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
          {currentItems.map((item) => {
            const priceNum = parseInt(item.price.replace(/[^\d]/g, ''), 10);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  item.isPromo
                    ? 'border-2 border-[#FD91CC] shadow-xl ring-2 ring-[#FD91CC]/30'
                    : 'border border-[#09318D]/20 shadow-sm hover:border-[#FD91CC]/60'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Promo & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {item.promoTag ? (
                      <span className="bg-[#09318D] text-[#FD91CC] border border-[#FD91CC]/50 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                        {item.promoTag}
                      </span>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#09318D]">
                        PROFESSIONAL THERAPY
                      </span>
                    )}

                    <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#09318D] bg-[#09318D]/5 px-2.5 py-1 rounded-full border border-[#09318D]/15">
                      <Clock className="w-3.5 h-3.5 text-[#FD91CC]" /> {item.duration}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-black text-[#09318D] leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-black font-heading text-[#09318D]">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-[#38528E]/60 line-through font-mono">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#38528E] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-1.5 pt-1">
                    {item.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#38528E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FD91CC] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Booking Trigger Footer */}
                <div className="pt-6 border-t border-[#09318D]/10 mt-6 flex items-center justify-between">
                  <span className="text-[11px] text-[#38528E] font-medium">
                    Pay at salon • Zero cancellation fee
                  </span>

                  <button
                    onClick={() =>
                      onOpenBooking({
                        name: item.title,
                        price: priceNum,
                        duration: item.duration,
                      })
                    }
                    className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                      item.isPromo
                        ? 'btn-peach shadow-md'
                        : 'btn-espresso shadow-sm'
                    }`}
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Consultation Callout */}
        <div className="text-center pt-4">
          <p className="text-xs sm:text-sm text-[#38528E]">
            Not sure which therapy your body needs today? Call our front desk at{' '}
            <a href="tel:9366217621" className="font-bold text-[#09318D] hover:text-[#FD91CC] underline transition-colors">
              +91 9366217621
            </a>{' '}
            for personalized guidance.
          </p>
        </div>

      </div>

      {/* Comparison Modal */}
      <TreatmentComparisonModal
        isOpen={comparisonOpen}
        onClose={() => setComparisonOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}
