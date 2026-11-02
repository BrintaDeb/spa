import React, { useState } from 'react';
import { Eye, MapPin, Thermometer, Droplets, Sparkles, X, ArrowRight, ShieldCheck, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CHAMBERS = [
  {
    id: 'swedish-suite',
    roman: 'I',
    name: 'Swedish Relaxation Suite',
    zone: 'Chamber I • Single Sanctuary',
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
    roman: 'II',
    name: 'Dedicated Couples VIP Suite',
    zone: 'Chamber II • Dual VIP Sanctuary',
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
    roman: 'III',
    name: '24K Gold Facial Aesthetics Parlor',
    zone: 'Chamber III • Clinical Skin Studio',
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
    roman: 'IV',
    name: 'Botanical Hair & Scalp Studio',
    zone: 'Chamber IV • Scalp Lounge',
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
  const { isTwilight } = useTheme();
  const [activeChamber, setActiveChamber] = useState(CHAMBERS[0]);

  return (
    <section id="sanctuary" className={`py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden transition-colors duration-400 ${
      isTwilight ? 'bg-[#041544] text-[#F8FAFE]' : 'bg-[#FFFFFF] text-[#09318D]'
    }`}>
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-script text-5xl sm:text-6xl text-[#FD91CC] font-bold block">
            Physical Sanctuary
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-[0.18em] font-extrabold">
            Explore Our Treatment Chambers
          </h2>
          <p className={`text-sm sm:text-base font-medium leading-relaxed ${
            isTwilight ? 'text-white/80' : 'text-[#38528E]'
          }`}>
            Take a virtual tour inside our private suites in Banamalipur, Agartala. Every chamber is sterilized between appointments with controlled ambient microclimates.
          </p>
        </div>

        {/* Chamber Selection Pills with Classical Roman Numerals */}
        <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-full max-w-4xl mx-auto shadow-sm border ${
          isTwilight
            ? 'bg-[#071c56]/90 border-[#FD91CC]/30'
            : 'bg-white border-[#09318D]/20'
        }`}>
          {CHAMBERS.map((ch) => {
            const active = activeChamber.id === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => setActiveChamber(ch)}
                className={`px-3.5 sm:px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  active
                    ? 'bg-[#09318D] text-white shadow-sm ring-2 ring-[#FD91CC]/60'
                    : isTwilight
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-[#38528E] hover:text-[#09318D] hover:bg-[#09318D]/5'
                }`}
              >
                <span className="font-roman font-black text-[#FD91CC] text-[11px] bg-black/20 px-1.5 py-0.5 rounded-md">
                  {ch.roman}
                </span>
                <span className="truncate">{ch.name.split(' ')[0]} {ch.name.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Chamber Showcase Card (Liquid Glassmorphism) */}
        <div className={`rounded-3xl overflow-hidden border-2 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center transition-all ${
          isTwilight
            ? 'bg-[#071c56]/80 border-[#FD91CC]/30 backdrop-blur-xl'
            : 'bg-white border-[#09318D]/15'
        }`}>
          
          {/* Visual Photograph Frame (Left 6 Columns) */}
          <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto lg:h-full bg-[#09318D] min-h-[340px]">
            <img
              src={activeChamber.image}
              alt={activeChamber.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Zone Tag & Classical Roman Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-[#09318D]/15 flex items-center gap-2">
              <span className="font-roman font-black text-[#09318D] text-xs">
                {activeChamber.roman}
              </span>
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
              <div className="flex items-center gap-2">
                <span className="font-roman font-black text-sm text-[#FD91CC] bg-[#FD91CC]/20 px-2 py-0.5 rounded-md">
                  CHAMBER {activeChamber.roman}
                </span>
                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#FD91CC]">
                  BANAMALIPUR SANCTUARY
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black">
                {activeChamber.name}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isTwilight ? 'text-white/80' : 'text-[#38528E]'
              }`}>
                {activeChamber.description}
              </p>
            </div>

            {/* Environmental Telemetry Row */}
            <div className={`grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl border text-center ${
              isTwilight
                ? 'bg-white/5 border-white/10'
                : 'bg-[#09318D]/5 border-[#09318D]/10'
            }`}>
              <div>
                <span className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-stone-400">
                  <Thermometer className="w-3 h-3 text-[#FD91CC]" /> TEMP
                </span>
                <span className="text-xs font-mono font-bold block mt-0.5">
                  {activeChamber.temp.split(' ')[0]}
                </span>
              </div>

              <div>
                <span className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-stone-400">
                  <Droplets className="w-3 h-3 text-[#FD91CC]" /> AIR
                </span>
                <span className="text-xs font-mono font-bold block mt-0.5">
                  {activeChamber.humidity.split(' ')[0]}
                </span>
              </div>

              <div>
                <span className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-stone-400">
                  <Sun className="w-3 h-3 text-[#FD91CC]" /> LIGHT
                </span>
                <span className="text-xs font-mono font-bold block mt-0.5">
                  {activeChamber.lighting.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Chamber Features */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider block">
                SUITE AMENITIES:
              </span>
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs ${
                isTwilight ? 'text-white/80' : 'text-[#38528E]'
              }`}>
                {activeChamber.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#FD91CC] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className={`pt-2 flex items-center justify-between border-t ${
              isTwilight ? 'border-white/15' : 'border-[#09318D]/10'
            }`}>
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 block">
                  STARTING FROM
                </span>
                <span className="font-heading text-xl font-black text-[#FD91CC]">
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
                <span>Reserve Suite {activeChamber.roman}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
