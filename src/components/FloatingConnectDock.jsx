import React from 'react';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';

export default function FloatingConnectDock({ onOpenBooking }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      {/* Direct Phone Call Button */}
      <a
        href="tel:9366217621"
        className="w-12 h-12 rounded-full bg-[#1F1D1A] dark:bg-[#1A1816] text-[#FAF8F5] border border-[#D4AF37]/50 shadow-xl flex items-center justify-center hover:scale-108 hover:border-[#D4AF37] transition-all"
        title="Call Samariya Spa (9366217621)"
      >
        <Phone className="w-5 h-5 text-[#D4AF37]" />
      </a>

      {/* Direct WhatsApp Quick Chat Pill */}
      <a
        href="https://wa.me/919366217621?text=Hello%20Samariya%20Spa,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs tracking-wider uppercase shadow-2xl transition-all hover:scale-105 border border-emerald-500/40"
        title="WhatsApp Instant Booking"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Instant Book Ritual Button */}
      <button
        onClick={() => onOpenBooking()}
        className="hidden md:flex items-center gap-2 px-4 py-3 rounded-full bg-[#D4AF37] hover:bg-[#EAE5DD] text-[#141312] font-semibold text-xs tracking-wider uppercase shadow-2xl transition-all hover:scale-105 border border-[#D4AF37]"
        title="Book Appointment"
      >
        <Sparkles className="w-4 h-4" />
        <span>Book @ ₹999</span>
      </button>
    </div>
  );
}

