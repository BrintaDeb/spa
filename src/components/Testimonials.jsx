import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Deblina Chakraborty',
    location: 'Banamalipur, Agartala',
    comment: 'The One Hour @ ₹999 package is genuinely incredible. The Swedish massage was deeply relaxing, the private room was spotless and warm, and the therapist was very polite and skilled. Agartala needed a place like this!',
    service: 'One Hour Relaxation Ritual',
  },
  {
    name: 'Subhradeep Roy',
    location: 'Radhanagar, Agartala',
    comment: 'I went in with terrible neck and lower back stiffness from desk work. The hot stone massage melted the tension completely. Extremely peaceful environment near S22 Cafe. Highly recommend Samariya Spa to everyone.',
    service: 'Volcanic Basalt Hot Stone',
  },
  {
    name: 'Moumita Deb',
    location: 'Kunjaban, Agartala',
    comment: 'Took my mother for the Festive Glow facial and hair spa. The staff treated us like family, and our skin felt hydrated and radiant for days. Wonderful family salon and luxury spa experience.',
    service: 'Festive Glow Facial & Hair Spa',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-black/5 dark:border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-xs text-[#C5A880] dark:text-[#D4AF37] mb-3">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Patron Experiences</span>
        </div>
        <h2 className="font-serif-luxury text-4xl sm:text-5xl text-[#1F1D1A] dark:text-[#ECE7DF] font-light leading-tight mb-4">
          Words from Our Guests
        </h2>
        <p className="text-sm text-[#5E5851] dark:text-[#B5AEA4] font-light leading-relaxed">
          Read real impressions from guests who have stepped through our doors in Banamalipur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="editorial-card p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#5E5851] dark:text-[#B5AEA4] font-light leading-relaxed italic mb-6">
                “{rev.comment}”
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-medium text-sm text-[#1F1D1A] dark:text-[#ECE7DF]">
                  {rev.name}
                </h4>
                <span className="text-[11px] text-[#7A746C] dark:text-[#A69E94]">
                  {rev.location}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[#C5A880] dark:text-[#D4AF37] font-mono">
                {rev.service}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

