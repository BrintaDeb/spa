import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Star } from 'lucide-react';

export default function LocationFooter({ onOpenBooking }) {
  return (
    <footer id="location" className="relative pt-20 pb-12 px-4 sm:px-8 border-t border-black/5 dark:border-white/10 bg-[#FAF8F5] dark:bg-[#11100F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 pb-16 border-b border-black/5 dark:border-white/10">
          
          {/* Brand & Address Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 bg-white/70 dark:bg-black/60 logo-aura shrink-0 shadow-lg">
                <img
                  src="/images/logo.png"
                  alt="Samariya Spa Official Crest Logo"
                  className="w-full h-full object-contain filter contrast-105"
                />
              </div>
              <div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1F1D1A] dark:text-[#ECE7DF] leading-none">
                  SAMARIYA
                </h3>
                <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-semibold text-[#8E877F] dark:text-[#A69E94] block mt-1">
                  Beauty Spa & Family Salon
                </span>
                <span className="text-[9px] tracking-widest text-[#C5A880] dark:text-[#D4AF37] uppercase block font-medium mt-0.5">
                  Relax • Rejuvenate • Be Your Best
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5E5851] dark:text-[#B5AEA4] font-light leading-relaxed">
              Agartala’s premier wellness sanctuary, committed to the highest standards of sanitation, serene privacy, and personalized therapeutic care.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1F1D1A] dark:text-[#ECE7DF] block">Sanctuary Address:</span>
                  <p className="text-[#5E5851] dark:text-[#B5AEA4] leading-relaxed">
                    Bhogowan Thakur Chowmuhani, Near S22 Cafe,<br />
                    Banamalipur, Agartala, Tripura - 799001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A880] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1F1D1A] dark:text-[#ECE7DF] block">Hours:</span>
                  <p className="text-[#5E5851] dark:text-[#B5AEA4]">
                    Monday – Sunday: 10:00 AM – 8:30 PM (Daily)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1F1D1A] dark:text-[#ECE7DF] block">Reservations & Inquiries:</span>
                  <a href="tel:9366217621" className="text-[#C5A880] dark:text-[#D4AF37] font-mono text-sm font-bold hover:underline">
                    +91 9366217621
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/919366217621?text=Hello%20Samariya%20Spa,%20I%20would%20like%20to%20reserve%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-xs transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="https://www.google.com/maps/search/Bhogowan+Thakur+Chowmuhani,+Near+S22+Cafe,+Banamalipur,+Agartala,+Tripura"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-black/15 dark:border-white/15 hover:border-[#D4AF37] text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 h-[360px] shadow-sm relative">
            <iframe
              title="Samariya Spa Banamalipur Agartala Location"
              src="https://maps.google.com/maps?q=Banamalipur,+Agartala,+Tripura&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-[1.03]"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
              <div className="bg-[#FAF8F5]/90 dark:bg-[#141312]/90 backdrop-blur-md p-3 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-between text-xs pointer-events-auto shadow-sm">
                <div>
                  <span className="font-semibold block text-[#1F1D1A] dark:text-[#ECE7DF]">Near S22 Cafe, Banamalipur</span>
                  <span className="text-[11px] text-[#7A746C] dark:text-[#A69E94]">Agartala, Tripura - 799001</span>
                </div>
                <span className="text-[#C5A880] dark:text-[#D4AF37] font-mono text-[11px] font-bold">Open Everyday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A746C] dark:text-[#A69E94]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} <strong>Samariya Beauty Spa & Family Salon</strong>. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wide">
            <a href="#special-offer" className="hover:text-[#C5A880] transition-colors">₹999 Special</a>
            <a href="#services" className="hover:text-[#C5A880] transition-colors">Services</a>
            <a href="#atmosphere" className="hover:text-[#C5A880] transition-colors">Atmosphere</a>
            <a href="#location" className="hover:text-[#C5A880] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
