import React from 'react';
import { Sparkles, Check, MessageSquare, ArrowRight } from 'lucide-react';

const BENEFITS = [
  {
    title: 'Full Body Relaxation',
    desc: 'Unwinds deep somatic fatigue, muscle knots, and nervous tension through synchronized therapeutic strokes.',
  },
  {
    title: 'Relieves Stress & Anxiety',
    desc: 'Aromatherapy inhalation and rhythmic touch slow the heart rate and release mental heaviness.',
  },
  {
    title: 'Improves Blood Circulation',
    desc: 'Promotes vital oxygenation and nutrient delivery to tissues, joints, and vital energy pathways.',
  },
  {
    title: 'Soothes Muscle & Joints',
    desc: 'Eases back stiffness, cervical neck strain, and joint stiffness using warm essential oils.',
  },
  {
    title: 'Enhances Natural Glow',
    desc: 'Botanical hydration and gentle lymphatic detox bring natural cellular radiance back to your skin.',
  },
];

export default function SignatureExperience({ onOpenBooking }) {
  return (
    <section id="special-offer" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Official Poster Visual (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 max-w-md w-full group">
            <img
              src="/images/poster1.png"
              alt="Samariya Beauty Spa Special Offer Poster: One Hour @ 999 Only"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#D4AF37] block">
                  Limited Time Introductory Offer
                </span>
                <span className="font-serif-luxury text-2xl font-light">
                  One Hour @ ₹999 Only
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Copy & 5 Pillars (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-xs text-[#C5A880] dark:text-[#D4AF37] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">The Signature Experience</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#1F1D1A] dark:text-[#ECE7DF] font-light leading-tight mb-4">
              One Hour of Pure Restoration. <br />
              <span className="italic text-[#C5A880] dark:text-[#D4AF37]">
                At ₹999 Only.
              </span>
            </h2>

            <p className="text-[#5E5851] dark:text-[#B5AEA4] font-light text-base leading-relaxed">
              We believe regular wellness should be accessible, dignified, and transformative.
              Our signature 60-minute session brings together ancient relaxation techniques, warm cold-pressed oils,
              and compassionate care by certified therapists in private, hygienic suites.
            </p>
          </div>

          {/* 5 Benefits List */}
          <div className="space-y-4 pt-2">
            {BENEFITS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 group">
                <div className="w-5 h-5 rounded-full border border-[#D4AF37]/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D4AF37] transition-colors">
                  <Check className="w-3 h-3 text-[#C5A880] group-hover:text-[#141312]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#1F1D1A] dark:text-[#ECE7DF]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#7A746C] dark:text-[#A69E94] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-black/5 dark:border-white/10">
            <button
              onClick={() => onOpenBooking({ name: 'One Hour Relaxation Ritual', price: 999, duration: '60 MIN' })}
              className="px-8 py-3.5 rounded-full bg-[#1F1D1A] dark:bg-[#D4AF37] text-white dark:text-[#141312] hover:bg-[#C5A880] transition-all font-semibold text-xs tracking-wider uppercase shadow-sm flex items-center gap-2"
            >
              <span>Reserve This Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://wa.me/919366217621?text=Hello%20Samariya%20Spa,%20I%20would%20like%20to%20book%20the%20One%20Hour%20@%20₹999%20Special%20Offer."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-black/15 dark:border-white/15 hover:border-[#D4AF37] text-xs font-medium tracking-wider uppercase flex items-center gap-2 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask Questions on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

