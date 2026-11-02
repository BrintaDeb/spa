import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

export default function AnnouncementTicker({ onOpenBooking }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-[#1F1D1A] dark:bg-[#0C0B0A] text-[#FAF8F5] text-[11px] font-mono tracking-wider py-1.5 px-4 border-b border-[#D4AF37]/30 flex items-center justify-between">
      <div className="max-w-7xl mx-auto flex-1 flex items-center justify-center gap-3 text-center">
        <span className="flex items-center gap-1.5 text-[#D4AF37]">
          <Sparkles className="w-3 h-3" />
          <span className="font-semibold uppercase tracking-widest text-[10px]">Special Festive Offer</span>
        </span>
        <span className="hidden sm:inline text-white/40">•</span>
        <span className="text-white/90">
          One Hour Holistic Body Relaxation @ <strong className="text-[#D4AF37] font-semibold">₹999 Only</strong> in Agartala
        </span>
        <button
          onClick={() => onOpenBooking({ name: 'One Hour Relaxation Ritual', price: 999, duration: '60 MIN' })}
          className="hidden md:inline-flex items-center gap-1 text-[#D4AF37] hover:underline uppercase text-[10px] font-bold tracking-widest ml-2"
        >
          <span>Claim Slot</span>
          <ArrowRight className="w-2.5 h-2.5" />
        </button>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="text-white/60 hover:text-white p-1 transition-colors"
        title="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}

