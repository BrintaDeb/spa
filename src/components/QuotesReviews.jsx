import React from 'react';
import { Star, CheckCircle, MapPin } from 'lucide-react';

export default function QuotesReviews() {
  const reviews = [
    {
      id: 1,
      quote:
        'I am so grateful we now have a genuine luxury spa in Agartala! The ₹999 full body Swedish massage was so deeply relaxing, the private room was immaculate, and the therapists are thoroughly trained.',
      author: 'Ananya Debbarma',
      service: 'One Hour Full Body Relaxation',
      location: 'Banamalipur, Agartala',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Booked the couples suite for our anniversary. The warm basalt stones and aroma oils completely melted our muscle tension. Cleanliness and hospitality are on par with 5-star resorts.',
      author: 'Rajdeep & Sharmila Saha',
      service: 'Couples Hot Stone Therapy',
      location: 'Agartala Central',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'The Festive 24K Gold Facial and Botanical Hair Spa left my skin glowing for days! Highly recommended for wedding grooming and festive prep in Tripura.',
      author: 'Priya Majumder',
      service: 'Festive 24K Gold Facial',
      location: 'Ramnagar, Agartala',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-8 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-script text-5xl sm:text-6xl text-[#FD91CC] font-bold block">
            Client Experiences
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-[0.18em] text-[#09318D] font-extrabold">
            Words From Our Honored Guests
          </h2>
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FD91CC] text-[#FD91CC]" />
            ))}
            <span className="text-xs font-bold text-[#09318D] ml-2 font-mono">
              4.9 / 5.0 (Google Verified Reviews)
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white p-8 rounded-3xl border border-[#09318D]/20 shadow-sm hover:border-[#FD91CC]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#FD91CC]">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FD91CC] text-[#FD91CC]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#38528E] leading-relaxed italic">
                  “{r.quote}”
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-[#09318D]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-sm font-black text-[#09318D]">
                    {r.author}
                  </h4>
                  <span className="text-[11px] text-[#38528E] flex items-center gap-1 mt-0.5 font-medium">
                    <MapPin className="w-3 h-3 text-[#FD91CC]" /> {r.location}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-[#09318D] bg-[#FD91CC]/25 px-2.5 py-1 rounded-full border border-[#FD91CC]/50">
                  <CheckCircle className="w-3 h-3 text-[#09318D]" />
                  <span>Verified Guest</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
