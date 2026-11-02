import React, { useState } from 'react';
import { Sparkles, Clock, Thermometer, Wind, Music, Eye } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Curated Rituals' },
  { id: 'bodywork', label: 'Bodywork & Massages' },
  { id: 'hydro', label: 'Thermal Hydrotherapy' },
  { id: 'facials', label: 'Holistic Facials & Glow' },
  { id: 'salon', label: 'Family Salon & Hair Care' },
];

const TREATMENTS = [
  {
    id: 'special-999',
    category: 'bodywork',
    isPromo: true,
    title: 'Signature Full Body Relaxation Ritual',
    subtitle: 'Relieves stress & anxiety, improves blood circulation, soothes muscles & joints',
    image: '/images/poster1.png',
    pricing: { '60 MIN': 999, '90 MIN': 1499, '120 MIN': 1999 },
    aroma: 'Sweet Orange, Sandalwood & Cold-Pressed Sesame',
    pressure: 3,
    roomTemp: '25°C',
    acoustic: '432Hz Theta Meditative Drone',
    features: [
      'Full Body Relaxation Massage',
      'Relieves Stress & Anxiety',
      'Improves Blood Circulation',
      'Soothes Muscle & Joints',
      'Enhances Natural Glow',
    ],
  },
  {
    id: 'festive-glow',
    category: 'facials',
    isPromo: true,
    title: 'Festive Glow & 24K Radiance Treatment',
    subtitle: 'Cellular skin restoration, deep lymphatic detox & golden luminosity',
    image: '/images/poster3.png',
    pricing: { '60 MIN': 999, '90 MIN': 1599, '120 MIN': 2199 },
    aroma: 'Moroccan Damask Rose & Neroli Mist',
    pressure: 2,
    roomTemp: '24°C',
    acoustic: 'Soft Singing Bowls & Binaural Water Waves',
    features: [
      'Enzymatic Botanical Exfoliation',
      'Rose Quartz Facial Sculpting',
      '24K Gold Luminosity Mask',
      'Hydra-Barrier Moisture Infusion',
    ],
  },
  {
    id: 'basalt-stones',
    category: 'bodywork',
    title: 'Volcanic Basalt Hot Stone Therapy',
    subtitle: 'Heated river stones infused with essential oils to melt deep muscle knots',
    image: '/images/poster2.png',
    pricing: { '60 MIN': 1299, '90 MIN': 1799, '120 MIN': 2399 },
    aroma: 'Aged Hinoki Wood & Frankincense',
    pressure: 4,
    roomTemp: '26°C',
    acoustic: 'Deep 108Hz Grounding Resonance',
    features: [
      'Heated Basalt Stone Alignment',
      'Myofascial Trigger Point Release',
      'Warm Cedarwood Essential Oils',
      'Acupressure Spine Mobilization',
    ],
  },
  {
    id: 'hydro-circuit',
    category: 'hydro',
    title: 'Nordic Contrast Hydrotherapy & Plunge',
    subtitle: 'Cedarwood thermal sauna followed by cold plunge and herbal mineral soak',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    pricing: { '60 MIN': 1199, '90 MIN': 1699, '120 MIN': 2199 },
    aroma: 'Wild Alpine Eucalyptus & Pine Needles',
    pressure: 1,
    roomTemp: 'Sauna 78°C / Plunge 12°C',
    acoustic: 'Gentle Thermal Spring Drip Waves',
    features: [
      'Private Hinoki Cedar Infrared Sauna',
      'Glacial Magnesium Cold Plunge (12°C)',
      'Himalayan Salt Mineral Bath Soak',
      'Organic Electrolyte Botanical Infusion',
    ],
  },
  {
    id: 'ayurvedic-potli',
    category: 'bodywork',
    title: 'Ayurvedic Herbal Potli Kizhi Ritual',
    subtitle: 'Warm medicated herbal poultices steeped in therapeutic oils for joint vitality',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    pricing: { '60 MIN': 1399, '90 MIN': 1899, '120 MIN': 2499 },
    aroma: 'Bala, Ashwagandha & Camphor Leaf',
    pressure: 4,
    roomTemp: '26°C',
    acoustic: 'Vedic Grounding Harmonics',
    features: [
      'Steamed Organic Herbal Poultices',
      'Deep Joint & Spine Soothing Strokes',
      'Continuous Warm Herbal Drizzle',
      'Herbal Steam Finishing Bath',
    ],
  },
  {
    id: 'luxury-salon',
    category: 'salon',
    title: 'Botanical Hair Spa & Scalp Awakening',
    subtitle: 'Nutrient-rich scalpel detox, deep conditioning mask, and reflexology head massage',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    pricing: { '60 MIN': 899, '90 MIN': 1299, '120 MIN': 1799 },
    aroma: 'Rosemary, Tea Tree & Lavender',
    pressure: 3,
    roomTemp: '24°C',
    acoustic: 'Crisp Ambient Rain Mist',
    features: [
      'Micro-Exfoliating Scalp Scrub',
      'Infrared Ozone Steam Mist',
      'Argan & Jojoba Deep Conditioning',
      'Precision Blowout & Silk Finish',
    ],
  },
];

export default function TreatmentShowcase({ onSelectTreatment }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDurations, setSelectedDurations] = useState({});

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  const getDuration = (id) => selectedDurations[id] || '60 MIN';

  const handleDurationChange = (id, duration) => {
    setSelectedDurations((prev) => ({ ...prev, [id]: duration }));
  };

  return (
    <section id="rituals" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono-telemetry text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
            The Curated Menu
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#2C2623] dark:text-[#E6E2DA] font-light leading-none">
            Holistic Sanctuary Rituals
          </h2>
        </div>
        <p className="max-w-md text-[#4A423D] dark:text-[#C2BCB2] font-light text-sm">
          Every ritual is meticulously personalized with organic cold-pressed botanicals, adjustable pressure profiles, and tailored acoustic frequencies.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono-telemetry uppercase tracking-wider transition-all whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-[#2C2623] dark:bg-[#D4AF37] text-[#FAF6F0] dark:text-[#111210] font-semibold shadow-md'
                : 'border border-[#2C2623]/10 dark:border-white/10 hover:border-[#D4AF37] text-[#4A423D] dark:text-[#C2BCB2]'
            }`}
            data-cursor="FILTER"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Treatment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTreatments.map((item) => {
          const currentDuration = getDuration(item.id);
          const currentPrice = item.pricing[currentDuration];

          return (
            <div
              key={item.id}
              className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between group relative ${
                item.isPromo ? 'border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(212,175,55,0.15)]' : ''
              }`}
              data-cursor="EXPLORE"
            >
              {/* Promo Badge */}
              {item.isPromo && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#D4AF37] text-[#111210] font-mono-telemetry text-[10px] tracking-widest uppercase font-bold shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Special Offer • ₹999</span>
                </div>
              )}

              {/* High-Res Media Container */}
              <div className="relative h-64 overflow-hidden bg-black/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Overlay Duration Selector */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono-telemetry">
                  <span className="text-[11px] uppercase tracking-wider text-amber-200">Select Duration:</span>
                  <div className="flex gap-1.5">
                    {Object.keys(item.pricing).map((dur) => (
                      <button
                        key={dur}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDurationChange(item.id, dur);
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] transition-all ${
                          currentDuration === dur
                            ? 'bg-[#D4AF37] text-[#111210] font-bold'
                            : 'bg-black/50 hover:bg-white/20 text-white/90'
                        }`}
                      >
                        {dur}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content & Sensory Telemetry */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl text-[#2C2623] dark:text-[#E6E2DA] font-normal mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6E7E6A] dark:text-[#9EA89B] font-light leading-relaxed mb-4">
                    {item.subtitle}
                  </p>

                  {/* Tactile Telemetry Grid */}
                  <div className="space-y-2 py-3 border-y border-[#2C2623]/10 dark:border-white/10 text-[11px] font-mono-telemetry text-[#4A423D] dark:text-[#C2BCB2] mb-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[#6E7E6A] dark:text-[#9EA89B]">
                        <Wind className="w-3.5 h-3.5 text-[#D4AF37]" /> Aroma Note
                      </span>
                      <span className="font-medium text-right truncate max-w-[170px]">{item.aroma}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#6E7E6A] dark:text-[#9EA89B]">Pressure Profile</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((pip) => (
                          <span
                            key={pip}
                            className={`w-2 h-2 rounded-full ${
                              pip <= item.pressure ? 'bg-[#D4AF37]' : 'bg-[#2C2623]/20 dark:bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[#6E7E6A] dark:text-[#9EA89B]">
                        <Thermometer className="w-3.5 h-3.5 text-[#D4AF37]" /> Suite Temp
                      </span>
                      <span>{item.roomTemp}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[#6E7E6A] dark:text-[#9EA89B]">
                        <Music className="w-3.5 h-3.5 text-[#D4AF37]" /> Sound Wave
                      </span>
                      <span className="truncate max-w-[170px]">{item.acoustic}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1 mb-6 text-xs text-[#4A423D] dark:text-[#C2BCB2]">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-4 border-t border-[#2C2623]/10 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-telemetry uppercase text-[#6E7E6A] dark:text-[#9EA89B] block">
                      {currentDuration} Session
                    </span>
                    <span className="font-editorial text-3xl font-medium text-[#2C2623] dark:text-[#E6E2DA]">
                      ₹{currentPrice}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      onSelectTreatment({
                        name: item.title,
                        duration: currentDuration,
                        price: currentPrice,
                        aroma: item.aroma,
                      })
                    }
                    className="px-4 py-2.5 rounded-full bg-[#2C2623] dark:bg-[#D4AF37] text-[#FAF6F0] dark:text-[#111210] hover:bg-[#D4AF37] hover:text-[#111210] text-xs uppercase tracking-widest font-semibold transition-all shadow-sm"
                    data-cursor="RESERVE"
                  >
                    Reserve Ritual
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

