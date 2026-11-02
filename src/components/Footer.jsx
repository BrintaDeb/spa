import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer id="location" className="bg-[#09318D] text-white pt-16 pb-24 lg:pb-12 px-4 sm:px-8 border-t-4 border-[#FD91CC]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Brand Crest Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FD91CC] bg-white p-0.5 shadow-lg">
              <img
                src="/images/logo.png"
                alt="Samariya Beauty Spa Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-heading text-xl font-bold uppercase tracking-[0.2em] block text-white">
                SAMARIYA
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#FD91CC] font-bold block">
                BEAUTY SPA & FAMILY SALON • AGARTALA
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking({ name: 'One Hour Relaxation Ritual', price: 999, duration: '60 MIN' })}
              className="px-6 py-2.5 rounded-full btn-peach text-xs font-bold"
            >
              Book @ ₹999 Offer
            </button>
            <a
              href="https://wa.me/919366217621"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>

        {/* 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start text-xs font-heading">
          
          {/* Column 1: Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-extrabold uppercase tracking-[0.2em] text-[#FD91CC] text-[11px] pb-2 border-b border-white/15">
              SANCTUARY HOURS
            </h4>
            <div className="space-y-2 font-mono text-[11px] text-white/80 leading-relaxed">
              <div className="flex justify-between">
                <span>MONDAY</span>
                <span>10:00 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>TUESDAY</span>
                <span>10:00 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>WED / THU</span>
                <span>10:00 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>FRIDAY</span>
                <span>10:00 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between text-[#FD91CC] font-bold">
                <span>SAT / SUN</span>
                <span>10:00 AM – 8:30 PM</span>
              </div>
            </div>
            <span className="text-[10px] text-white/60 block italic pt-1">
              *Open all 7 days including holidays and festive weekends.
            </span>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-extrabold uppercase tracking-[0.2em] text-[#FD91CC] text-[11px] pb-2 border-b border-white/15">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 font-bold tracking-[0.16em] uppercase text-white/90">
              <li>
                <a href="#about" className="hover:text-[#FD91CC] transition-colors">OUR BRAND PHILOSOPHY</a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-[#FD91CC] transition-colors">SPA VIDEO ATMOSPHERE</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FD91CC] transition-colors">CURATED SERVICES MENU</a>
              </li>
              <li>
                <a href="#gift-cards" className="hover:text-[#FD91CC] transition-colors">GIFT A SPA VOUCHERS</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FD91CC] transition-colors">CLIENT EXPERIENCES</a>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking({ name: 'One Hour Relaxation Ritual', price: 999 })}
                  className="hover:text-[#FD91CC] transition-colors text-left uppercase text-[#FD91CC] font-bold cursor-pointer"
                >
                  SPECIAL @ ₹999 ONLY
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="space-y-4">
            <h4 className="font-extrabold uppercase tracking-[0.2em] text-[#FD91CC] text-[11px] pb-2 border-b border-white/15">
              LOCATION & CONTACT
            </h4>
            
            <div className="space-y-3 text-white/80 leading-relaxed font-sans">
              <a
                href="tel:9366217621"
                className="font-mono text-base font-extrabold text-[#FD91CC] hover:underline block"
              >
                +91 9366217621
              </a>

              <p className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-[#FD91CC] shrink-0 mt-0.5" />
                <span>
                  Bhogowan Thakur Chowmuhani, Near S22 Cafe, Banamalipur, Agartala, Tripura - 799001
                </span>
              </p>

              <p className="flex items-center gap-2 text-xs">
                <MessageSquare className="w-4 h-4 text-[#FD91CC] shrink-0" />
                <span>WhatsApp: +91 9366217621</span>
              </p>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Banamalipur+Agartala+Tripura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FD91CC] hover:underline"
                >
                  <span>Open In Google Maps →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter / VIP Sanctuary Club */}
          <div className="space-y-4">
            <h4 className="font-extrabold uppercase tracking-[0.2em] text-[#FD91CC] text-[11px] pb-2 border-b border-white/15">
              SANCTUARY PRIVILEGES
            </h4>
            <p className="text-white/70 text-xs leading-relaxed font-sans">
              Be the first to receive notifications about monthly wellness workshops, festive packages, and exclusive seasonal promotions in Agartala.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-900/60 border border-emerald-500 rounded text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You are now on our VIP guest list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
                <div className="flex">
                  <input
                    id="newsletter-email"
                    aria-label="Your email address"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 text-white placeholder-white/50 text-xs rounded-l border border-white/20 focus:outline-none focus:border-[#FD91CC]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#FD91CC] hover:bg-[#F873B8] text-[#09318D] font-black rounded-r transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-white/50 block">
                  We respect your privacy. No spam, ever.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal & Monogram Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <p>© {new Date().getFullYear()} Samariya Beauty Spa & Family Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Relax • Rejuvenate • Be Your Best</span>
            <span>Agartala, Tripura</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
