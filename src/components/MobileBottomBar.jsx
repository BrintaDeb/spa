import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-[#09318D]/15 px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Direct Phone Call Button */}
        <a
          href="tel:9366217621"
          className="flex-1 min-h-[46px] py-3 px-3 rounded-full bg-[#09318D] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
          aria-label="Call Samariya Reception"
        >
          <Phone className="w-3.5 h-3.5 text-[#FD91CC]" />
          <span>Call Reception</span>
        </a>

        {/* WhatsApp Book Special Offer Button */}
        <button
          onClick={() => onOpenBooking({ name: 'One Hour Relaxation Ritual', price: 999, duration: '60 MIN' })}
          className="flex-[1.4] min-h-[46px] py-3 px-3 rounded-full btn-peach text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform cursor-pointer"
          aria-label="Book 1 Hour Massage at 999 rupees"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book @ ₹999</span>
        </button>

      </div>
    </div>
  );
}
