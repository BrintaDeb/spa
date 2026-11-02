import React from 'react';
import { Award, Sparkles, Calendar, Star } from 'lucide-react';

const ARTISANS = [
  {
    id: 'ananya',
    name: 'Ananya Sharma',
    role: 'Lead Holistic Bodywork Practitioner',
    experience: '12 Years Practice',
    certification: 'CIDESCO International & Wat Po Traditional Medicine (Bangkok)',
    specialties: ['Myofascial Deep Tissue', 'Volcanic Stone Alignment', 'Craniosacral Stillness'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    philosophy: '“The body remembers what the mind conceals. My touch is guided by intuition and deep somatic listening.”',
  },
  {
    id: 'rajesh',
    name: 'Rajesh Debbarma',
    role: 'Senior Ayurvedic & Reflexology Master',
    experience: '14 Years Practice',
    certification: 'Ayurvedic Gurukula Kerala • Master in Marma Therapy',
    specialties: ['Herbal Potli Kizhi', 'Reflexology Meridian Pressure', 'Vedic Joint Mobilization'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    philosophy: '“Restoring Prana (vital life force) through natural herbal warmth and precise energy point alignment.”',
  },
  {
    id: 'priya',
    name: 'Priya Majumder',
    role: 'Master Holistic Aesthetician & Skin Alchemist',
    experience: '9 Years Practice',
    certification: 'Advanced Dermato-Cosmetology • Certified Gua Sha Sculptor',
    specialties: ['Festive 24K Gold Facials', 'Lymphatic Drainage Sculpting', 'Botanical Barrier Repair'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    philosophy: '“True skin radiance is an organic reflection of cellular hydration, calm breath, and unhurried care.”',
  },
];

export default function ArtisansCarousel({ onBookWithArtisan }) {
  return (
    <section id="artisans" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono-telemetry text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
            The Living Hands
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#2C2623] dark:text-[#E6E2DA] font-light leading-none">
            Master Practitioners & Artisans
          </h2>
        </div>
        <p className="max-w-md text-[#4A423D] dark:text-[#C2BCB2] font-light text-sm">
          Our certified therapists bring decades of meditative discipline, ancient Eastern medicinal wisdom, and empathetic somatic touch to each session.
        </p>
      </div>

      {/* Practitioners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTISANS.map((artisan) => (
          <div
            key={artisan.id}
            className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            data-cursor="ARTISAN"
          >
            {/* Portrait Image Container */}
            <div className="relative h-80 overflow-hidden bg-black/10">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              {/* Overlay Role & Experience Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono-telemetry uppercase text-amber-200">
                {artisan.experience}
              </div>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#D4AF37] block">
                  {artisan.role}
                </span>
                <h3 className="font-editorial text-2xl font-normal">
                  {artisan.name}
                </h3>
              </div>
            </div>

            {/* Artisan Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Certification */}
                <div className="flex items-start gap-2 text-xs font-mono-telemetry text-[#6E7E6A] dark:text-[#9EA89B] mb-4 pb-4 border-b border-[#2C2623]/10 dark:border-white/10">
                  <Award className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{artisan.certification}</span>
                </div>

                {/* Philosophy Quote */}
                <p className="text-xs italic text-[#4A423D] dark:text-[#C2BCB2] leading-relaxed mb-6">
                  {artisan.philosophy}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono-telemetry uppercase tracking-wider text-[#6E7E6A] dark:text-[#9EA89B] block mb-2">
                    Core Specializations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {artisan.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-[#2C2623]/5 dark:bg-white/5 border border-[#2C2623]/10 dark:border-white/10 text-[10px] font-mono-telemetry text-[#2C2623] dark:text-[#E6E2DA]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book With Practitioner Button */}
              <button
                onClick={() =>
                  onBookWithArtisan({
                    practitioner: artisan.name,
                    name: `Bespoke Session with ${artisan.name}`,
                    duration: '90 MIN',
                    price: 1699,
                  })
                }
                className="w-full py-3 rounded-full border border-[#D4AF37] text-[#2C2623] dark:text-[#E6E2DA] hover:bg-[#D4AF37] hover:text-[#111210] font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                data-cursor="SELECT"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-inherit" />
                <span>Reserve with {artisan.name.split(' ')[0]}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

