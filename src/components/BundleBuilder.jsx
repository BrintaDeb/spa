import React, { useState } from 'react';
import { Layers, Sparkles, Check, Plus, Minus, ArrowRight, Clock, ShieldCheck, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BUNDLE_SERVICES = [
  {
    category: 'Massage & Bodywork',
    categoryIcon: '💆',
    items: [
      { id: 'm-swedish', name: 'One Hour Swedish Relaxation', duration: 60, price: 999, tag: 'Most Popular' },
      { id: 'm-deeptissue', name: 'Deep Tissue Knot Decompression', duration: 60, price: 1199 },
      { id: 'm-hotstone', name: 'Volcanic Basalt Hot Stone Therapy', duration: 60, price: 1299 },
      { id: 'm-foot', name: 'Floral Hydro-Soak & Foot Reflexology', duration: 30, price: 499 },
    ],
  },
  {
    category: 'Skin & Facial Aesthetics',
    categoryIcon: '✨',
    items: [
      { id: 'f-gold', name: 'Festive 24K Gold Radiance Facial', duration: 60, price: 999, tag: 'Signature Glow' },
      { id: 'f-detan', name: 'Organic Fruit & Vitamin De-Tan Facial', duration: 45, price: 699 },
      { id: 'f-ultrasonic', name: 'Ultrasonic Deep Pore Cleanse & Steam', duration: 45, price: 799 },
    ],
  },
  {
    category: 'Hair Spa & Salon Care',
    categoryIcon: '🌿',
    items: [
      { id: 'h-spa', name: 'Botanical Deep Conditioning Hair Spa', duration: 45, price: 799 },
      { id: 'h-pedicure', name: 'Luxury Herbal Pedicure & Foot Scrub', duration: 45, price: 499 },
      { id: 'h-scalp', name: 'Scalp Ozone Steam & Ayurvedic Kansa Wand', duration: 30, price: 499 },
    ],
  },
];

export default function BundleBuilder({ onOpenBooking }) {
  const { t } = useLanguage();
  const [selectedIds, setSelectedIds] = useState(['m-swedish', 'f-gold']);

  const toggleItem = (id) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Find all selected objects
  const allServices = BUNDLE_SERVICES.flatMap((cat) => cat.items);
  const selectedItems = allServices.filter((s) => selectedIds.includes(s.id));

  // Calculations
  const rawSubtotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const totalMinutes = selectedItems.reduce((acc, curr) => acc + curr.duration, 0);

  let discountPercent = 0;
  let bundleBadge = 'Single Ritual';

  if (selectedItems.length === 2) {
    discountPercent = 10;
    bundleBadge = 'Sanctuary Duo (10% Off)';
  } else if (selectedItems.length >= 3) {
    discountPercent = 15;
    bundleBadge = 'Empress Full Day (15% Off)';
  }

  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const finalPrice = rawSubtotal - discountAmount;

  return (
    <section id="bundle-builder" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#09318D]/15 relative overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#FD91CC]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>Mix & Match Sanctuary Days</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#09318D] tracking-tight leading-tight">
            Build Your Custom <span className="font-serif italic text-[#FD91CC] font-bold">Spa Package</span>
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed">
            {t('bundleBuilderSubtitle')}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Category Blocks (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {BUNDLE_SERVICES.map((category) => (
              <div key={category.category} className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-[#09318D]/15">
                  <span className="text-lg">{category.categoryIcon}</span>
                  <h3 className="font-heading font-black text-sm uppercase tracking-wider text-[#09318D]">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.items.map((item) => {
                    const isSelected = selectedIds.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer flex items-start justify-between min-h-[46px] ${
                          isSelected
                            ? 'bg-[#FD91CC]/15 border-[#FD91CC] shadow-md ring-2 ring-[#FD91CC]/30'
                            : 'bg-white border-[#09318D]/15 hover:border-[#09318D]/40'
                        }`}
                      >
                        <div className="space-y-1 pr-2">
                          {item.tag && (
                            <span className="text-[9px] uppercase font-black tracking-widest text-[#09318D] bg-[#FD91CC]/30 px-2 py-0.5 rounded-full inline-block mb-1 border border-[#FD91CC]/60">
                              {item.tag}
                            </span>
                          )}
                          <h4 className="font-heading font-black text-xs sm:text-sm text-[#09318D] leading-snug">
                            {item.name}
                          </h4>
                          <span className="text-[11px] text-[#38528E] flex items-center gap-1 font-medium font-mono">
                            <Clock className="w-3 h-3 text-[#FD91CC]" /> {item.duration} Min
                          </span>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-mono font-black text-sm text-[#09318D] block">
                            ₹{item.price}
                          </span>
                          <span
                            className={`inline-block mt-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              isSelected
                                ? 'bg-[#09318D] text-white shadow-xs'
                                : 'border border-[#09318D]/20 text-stone-400'
                            }`}
                          >
                            {isSelected ? '✓' : '+'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Live Bundle Summary & WhatsApp Booking (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#09318D]/20 shadow-xl space-y-6 sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#09318D]/15">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#FD91CC] block">
                  LIVE BUNDLE TELEMETRY
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-black text-[#09318D]">
                  Custom Sanctuary Retreat
                </h3>
              </div>

              {discountPercent > 0 && (
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FD91CC] text-[#09318D] shadow-xs">
                  {bundleBadge}
                </span>
              )}
            </div>

            {/* Selected Items List */}
            <div className="space-y-2.5">
              <span className="text-[10px] uppercase font-black tracking-wider text-[#38528E] block">
                Selected Treatments ({selectedItems.length}):
              </span>
              <div className="space-y-2">
                {selectedItems.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-[#09318D]/5 border border-[#09318D]/10"
                  >
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#09318D]" />
                      <span className="font-bold text-[#09318D]">{s.name}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono font-bold text-[#09318D]">₹{s.price}</span>
                      <span className="text-[10px] text-[#38528E] block">({s.duration}m)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined Metrics Card */}
            <div className="p-4 rounded-2xl bg-[#09318D]/5 border border-[#09318D]/15 space-y-2 text-xs">
              <div className="flex justify-between text-[#38528E]">
                <span>Individual Menu Total:</span>
                <span className="font-mono">₹{rawSubtotal}</span>
              </div>
              <div className="flex justify-between text-[#38528E]">
                <span>Combined Treatment Time:</span>
                <span className="font-mono font-semibold text-[#09318D]">{totalMinutes} Minutes ({Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m)</span>
              </div>

              {discountPercent > 0 ? (
                <div className="flex justify-between text-[#09318D] font-black border-t border-[#09318D]/10 pt-2 text-sm">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-[#FD91CC]" /> Bundle Savings ({discountPercent}%):
                  </span>
                  <span className="text-emerald-600">-₹{discountAmount}</span>
                </div>
              ) : (
                <div className="text-[11px] text-[#FD91CC] font-bold italic pt-1">
                  *Tip: Add 1 more service to unlock 10% instant bundle discount!
                </div>
              )}
            </div>

            {/* Final Investment Row */}
            <div className="flex items-baseline justify-between pt-2">
              <div>
                <span className="text-[10px] uppercase font-black text-[#38528E] block">
                  FINAL BUNDLE INVESTMENT
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-black text-[#09318D]">
                    ₹{finalPrice}
                  </span>
                  {discountPercent > 0 && (
                    <span className="font-mono text-sm line-through text-[#38528E]/60">
                      ₹{rawSubtotal}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-emerald-600 font-bold block bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {discountPercent > 0 ? `Saved ₹${discountAmount}` : 'Standard Rate'}
                </span>
              </div>
            </div>

            {/* Booking CTA Button */}
            <button
              onClick={() => {
                const bundleNames = selectedItems.map((s) => s.name).join(' + ');
                onOpenBooking({
                  name: `Custom Bundle: ${bundleNames}`,
                  price: finalPrice,
                  duration: `${totalMinutes} MIN`,
                });
              }}
              className="w-full py-4 rounded-full btn-peach text-xs font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book This Curated Bundle →</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-[#38528E] font-medium">
              Zero cancellation fee • Pay at Banamalipur salon after your treatments
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

