import React from 'react';

export default function MarqueeRibbon({ text = null, bg = 'bg-[#2B2824]', textColor = 'text-white' }) {
  const content = text || (
    <>
      <span className="mx-6">★ BRAND NEW SERVICES ADDED!</span>
      <span className="mx-6">ONE HOUR FULL BODY MASSAGE @ ₹999 ONLY</span>
      <span className="mx-6">★ FESTIVE 24K GOLD FACIALS</span>
      <span className="mx-6">CALL TO BOOK: +91 9366217621</span>
      <span className="mx-6">★ PRIVATE SUITES IN AGARTALA</span>
      <span className="mx-6">RELAX • REJUVENATE • BE YOUR BEST</span>
    </>
  );

  return (
    <div className={`overflow-hidden py-3 ${bg} ${textColor} border-y border-black/10 select-none shadow-xs`}>
      <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-extrabold tracking-[0.24em] uppercase">
        <div className="flex items-center">{content}</div>
        <div className="flex items-center">{content}</div>
      </div>
    </div>
  );
}

