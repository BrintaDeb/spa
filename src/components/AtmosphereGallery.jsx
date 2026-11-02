import React from 'react';
import { Sparkles } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    title: 'Private Treatment Suite',
    subtitle: 'Quiet, temperature-regulated private suites with soothing ambient warm lighting',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=80',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    title: 'Warm Basalt River Stones',
    subtitle: 'Infused with organic vetiver & cypress oils for deep spinal release',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Campaign: One Hour @ ₹999 Only',
    subtitle: 'Full body relaxation & natural glow campaign',
    image: '/images/poster1.png',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Campaign: Festive Glow For You',
    subtitle: '24K gold skin luminosity & facial sculpting',
    image: '/images/poster3.png',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Campaign: Relieves Stress & Anxiety',
    subtitle: 'Soothes muscles & joints with holistic warmth',
    image: '/images/poster2.png',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Botanical Foot Bath & Reflexology',
    subtitle: 'Damask rose petals and Himalayan salts for tired feet',
    image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=1000&q=80',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export default function AtmosphereGallery() {
  return (
    <section id="atmosphere" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-black/5 dark:border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-[#C5A880] dark:text-[#D4AF37] block mb-2">
            Visual Stillness
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#1F1D1A] dark:text-[#ECE7DF] font-light leading-none">
            Chambers & Atmosphere
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#5E5851] dark:text-[#B5AEA4] font-light leading-relaxed">
          Step inside our serene Banamalipur sanctuary. Every detail is curated to calm the senses from the moment you arrive.
        </p>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl overflow-hidden shadow-sm border border-black/5 dark:border-white/10 ${item.span} aspect-[4/3] md:aspect-auto`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#D4AF37]">
                Samariya Sanctuary
              </span>
              <h3 className="font-serif-luxury text-2xl font-normal mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-white/80 font-light max-w-md">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

