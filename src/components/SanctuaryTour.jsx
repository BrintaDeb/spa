import React, { useState } from 'react';
import { Eye, MapPin, Thermometer, Droplets, Sparkles, X, ArrowRight, ShieldCheck, Sun } from 'lucide-react';

const CHAMBERS = [
  {
    id: 'swedish-suite',
    name: 'Swedish Relaxation Suite',
    zone: 'Chamber 01 • Single Sanctuary',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    temp: '24.0°C Constant Climate',
    humidity: '48% Controlled Air',
    lighting: '2700K Warm Amber',
    features: ['Single Heated Massage Bed', 'Acoustic Sound Insulation', 'Sanitised Fresh Linens', 'Personal Changing Space'],
    description: 'An intimate, quiet sanctuary designed for private full body massages, hot stone rituals, and peaceful decompression in Agartala.',
    bookingTitle: 'Swedish Relaxation Suite Session',
    price: 999,
  },
  {
    id: 'couples-suite',
    name: 'Dedicated Couples VIP Suite',
    zone: 'Chamber 02 • Dual Sanctuary',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80',
    temp: '24.5°C Ambient Climate',
    humidity: '52% Controlled Mist',
    lighting: '2200K Candlelit Ambiance',
    features: ['Dual Synchronized Treatment Tables', 'Floral Hydro-Foot Soaking Basin', 'Couples Changing Enclave', 'Private Aromatherapy Diffuser'],
    description: 'A spacious private suite where partners or loved ones unwind side-by-side with synchronized therapists and customized pressure profiles.',
    bookingTitle: 'Couples Synchronized Swedish Ritual',
    price: 1999,
  },
  {
    id: 'facial-chamber',
    name: '24K Gold Facial & Aesthetics Chamber',
    zone: 'Chamber 03 • Skin Studio',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    temp: '23.0°C Purified Air',
    humidity: '55% Steam Humidified',
    lighting: '3500K High-CRI Clinical Glow',
    features: ['Ozone Warm Steam Generator', 'Ultrasonic Pore Infusion Wand', 'UV Sterilization Station', 'Diamond Microdermabrasion Unit'],
    description: 'Equipped with medical-grade aesthetic equipment for deep pore extractions, hydration barrier replenishment, and festive 24K gold facials.',
    bookingTitle: 'Festive 24K Gold Radiance Facial',
    price: 999,
  },
  {
    id: 'hair-lounge',
    name: 'Botanical Hair & Scalp Lounge',
    zone: 'Chamber 04 • Salon Studio',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    temp: '23.5°C Refreshing Climate',
    humidity: '50% Balanced Air',
    lighting: '3000K Soft Studio Glow',
    features: ['Deep-Recline Hair Spa Wash Basin', 'Scalp Ozone Steamer Unit', 'Ayurvedic Kansa Wand Station', 'Organic Botanical Conditioning Bar'],
    description: 'A dedicated salon studio focused on clarifying scalp facials, deep conditioning hair spas, and revitalizing blowouts.',
    bookingTitle: 'Botanical Deep Conditioning Hair Spa',
    price: 799,
  },
];

export default function SanctuaryTour({ onOpenBooking }) {
  const [activeChamber, setActiveChamber] = useState(CHAMBERS[0]);

  return (
    <section id="sanctuary" className="py-20 sm:py-28 px-4 sm:px-8 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-script text-5xl sm:text-6xl text-[#FD91CC] font-bold block">
            Physical Sanctuary
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-[0.18em] text-[#09318D] font-extrabold">
            Explore Our Treatment Chambers
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed">
            Take a virtual look inside our private suites in Banamalipur, Agartala. Every chamber is sterilized between appointments with controlled ambient climate.
          </p>
        </div>

        {/* Chamber Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-white border border-[#09318D]/20 rounded-full max-w-3xl mx-auto shadow-sm">
          {CHAMBERS.map((ch) => {
            const active = activeChamber.id === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => setActiveChamber(ch)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  active
                    ? 'bg-[#09318D] text-white shadow-sm'
                    : 'text-[#38528E] hover:text-[#09318D] hover:bg-[#09318D]/5'
                }`}
              >
                {ch.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Chamber Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#09318D]/20 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Visual Photograph Frame (Left 6 Columns) */}
          <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto lg:h-full bg-[#09318D] min-h-[340px]">
            <img
              src={activeChamber.image}
              alt={activeChamber.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Zone Tag */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-[#09318D]/15">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#09318D]">
                {activeChamber.zone}
              </span>
            </div>

            {/* Bottom Status */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
              <span className="flex items-center gap-1.5 bg-[#09318D]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FD91CC]" /> 100% Sanitized Protocols
              </span>
            </div>
          </div>

          {/* Environmental Telemetry & Details (Right 6 Columns) */}
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#FD91CC] block">
                BANAMALIPUR SANCTUARY
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#09318D]">
                {activeChamber.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#38528E] leading-relaxed">
                {activeChamber.description}
              </p>
            </div>

            {/* Environmental Telemetry Row */}
            <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-[#09318D]/5 rounded-2xl border border-[#09318D]/10 text-center">
              <div>
                <span className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-[#38528E]">
                  <Thermometer className="w-3 h-3 text-[#FD91CC]" /> TEMP
                </span>
                <span className="text-xs font-mono font-bold text-[#09318D] block mt-0.5">
                  {activeChamber.temp.split(' ')[0]}
                </span>
              </div>

              <div>
                <span className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-[#38528E]">
                  <Droplets className="w-3 h-3 text-[#FD91CC]" /> AIR
                </span>
                <span className="text-xs font-mono font-bold text-[#09318D] block mt-0.5">
                  {activeChamber.humidity.split(' ')[0]}
                </span>
              </div>

              <div>
                <span className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-[#38528E]">
                  <Sun className="w-3 h-3 text-[#FD91CC]" /> LIGHT
                </span>
                <span className="text-xs font-mono font-bold text-[#09318D] block mt-0.5">
                  {activeChamber.lighting.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Chamber Features */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#09318D] block">
                SUITE AMENITIES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#38528E]">
                {activeChamber.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#FD91CC] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex items-center justify-between border-t border-[#09318D]/10">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#38528E] block">
                  STARTING FROM
                </span>
                <span className="font-heading text-xl font-black text-[#09318D]">
                  ₹{activeChamber.price}
                </span>
              </div>

              <button
                onClick={() =>
                  onOpenBooking({
                    name: activeChamber.bookingTitle,
                    price: activeChamber.price,
                    duration: '60 MIN',
                  })
                }
                className="px-6 py-3 rounded-full btn-peach text-xs font-bold uppercase tracking-wider shadow-md inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Reserve This Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
