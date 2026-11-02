import React from 'react';
import { Phone, ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function CouplesSuite({ onOpenBooking }) {
  return (
    <section id="couples" className="py-20 sm:py-28 px-4 sm:px-8 bg-[#FFFFFF] border-t border-[#09318D]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Copy & Direct Phone Callout */}
        <div className="lg:col-span-6 space-y-6">
          <span className="font-script text-5xl sm:text-6xl text-[#FD91CC] font-bold block leading-none">
            Perfect for Couples!
          </span>

          <div className="space-y-2">
            <h3 className="font-heading text-xs font-black tracking-[0.22em] uppercase text-[#FD91CC]">
              COUPLES CUSTOM MASSAGE & FACIALS
            </h3>
            <h4 className="font-heading text-xl sm:text-3xl font-black text-[#09318D] uppercase tracking-wide leading-snug">
              ENJOY THE BENEFITS OF PROFESSIONAL RELAXATION, TOGETHER, IN OUR DEDICATED COUPLES SUITE!
            </h4>
          </div>

          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed">
            Unwind side-by-side with your partner, spouse, or loved one. Our synchronized couples sessions provide an intimate, serene ambiance with dual expert therapists, floral foot soaks, warm aromatherapy oils, and private suite tranquility in Banamalipur, Agartala.
          </p>

          {/* Call to Book Highlight Box */}
          <div className="bg-white p-6 rounded-2xl border-l-4 border-[#FD91CC] border-y border-r border-[#09318D]/15 shadow-md space-y-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#09318D] block">
              CALL TO BOOK YOUR COUPLES SUITE
            </span>
            <a
              href="tel:9366217621"
              className="font-mono text-2xl sm:text-3xl font-black text-[#09318D] hover:text-[#FD91CC] transition-colors block"
            >
              +91 9366217621
            </a>
            <span className="text-xs text-[#38528E] font-medium block">
              Advance reservation recommended for couples rooms and weekend evening slots.
            </span>
          </div>

          <div className="pt-2">
            <button
              onClick={() =>
                onOpenBooking({
                  name: 'Couples Synchronized Swedish Ritual',
                  price: 1999,
                  duration: '60 MIN',
                })
              }
              className="px-8 py-3.5 btn-peach text-xs shadow-md rounded-full inline-flex items-center gap-2 cursor-pointer"
            >
              <span>RESERVE COUPLES SUITE (@ ₹1,999)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: High Quality Couples Suite Photography */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#09318D]">
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80"
              alt="Couples private massage suite with ambient candlelight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FD91CC]" />
                <span>Private Couples Suite • Samariya Banamalipur</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
