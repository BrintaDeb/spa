import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Sparkles, MapPin, Calendar, Users, ChevronUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const QUICK_QUERIES = [
  {
    icon: Calendar,
    title: "Today's Open Slots",
    desc: 'Check immediate appointment availability',
    text: 'Hello Samariya Spa! Are there any massage or facial appointment slots available today at your Banamalipur salon?',
  },
  {
    icon: Sparkles,
    title: '₹999 Signature Offer',
    desc: 'Book 60-min Swedish Relaxation @ ₹999',
    text: 'Hi Samariya Spa! I would like to reserve the ₹999 Signature Swedish Massage offer. When is the next available opening?',
  },
  {
    icon: MapPin,
    title: 'Directions from S22 Cafe',
    desc: 'Bhogowan Thakur Chowmuhani landmark',
    text: 'Hello! I am near Bhogowan Thakur Chowmuhani / S22 Cafe in Banamalipur. Could you share directions or guide me to the entrance?',
  },
  {
    icon: Users,
    title: 'Couples Sanctuary Suite',
    desc: 'Private dual chamber booking',
    text: 'Hi Samariya Spa! I would like to inquire about booking your private couples sanctuary suite. What packages are available?',
  },
];

export default function FloatingConciergePill() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const { isTwilight } = useTheme();

  const handleSendWhatsApp = (text) => {
    const message = text || customMsg;
    if (!message.trim()) return;
    const url = `https://wa.me/919366217621?text=${encodeURIComponent(message.trim())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    if (!text) setCustomMsg('');
  };

  return (
    <aside aria-label="Live Concierge" className="fixed bottom-20 right-3 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* Expanded Concierge Drawer / Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Samariya Live Reception"
          className={`mb-3 w-[calc(100vw-1.5rem)] sm:w-[380px] rounded-3xl shadow-2xl border backdrop-blur-xl overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
            isTwilight
              ? 'bg-[#041544]/95 border-[#E6B87D]/30 text-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
              : 'bg-white/95 border-[#09318D]/20 text-[#09318D] shadow-[0_20px_50px_rgba(9,49,141,0.18)]'
          }`}
        >
          {/* Card Header */}
          <div
            className={`p-4 border-b flex items-center justify-between ${
              isTwilight
                ? 'bg-gradient-to-r from-[#030e2f] to-[#041544] border-white/10'
                : 'bg-gradient-to-r from-[#09318D] to-[#1546b5] text-white border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#FD91CC]/20 border border-[#FD91CC]/40 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#FD91CC]" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-heading font-black text-sm tracking-wide text-white">
                    Samariya Live Reception
                  </h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-1.5 py-0.2 rounded-full font-bold">
                    ONLINE
                  </span>
                </div>
                <p className="text-[11px] text-white/80">
                  Agartala Banamalipur Desk • Avg reply ~2 min
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Query Pills */}
          <div className="p-4 space-y-3 max-h-[50vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-heading font-bold uppercase tracking-wider ${
                isTwilight ? 'text-[#E6B87D]' : 'text-[#38528E]'
              }`}>
                Instant Inquiries
              </span>
              <span className="text-[10px] text-stone-400">Tap to send via WhatsApp</span>
            </div>

            <div className="space-y-2">
              {QUICK_QUERIES.map((q, idx) => {
                const IconComponent = q.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSendWhatsApp(q.text)}
                    className={`w-full p-2.5 rounded-2xl text-left border transition-all duration-200 flex items-start gap-3 group cursor-pointer ${
                      isTwilight
                        ? 'bg-white/5 border-white/10 hover:border-[#FD91CC]/60 hover:bg-white/10'
                        : 'bg-slate-50 border-[#09318D]/10 hover:border-[#FD91CC] hover:bg-[#FD91CC]/5'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FD91CC]/20 border border-[#FD91CC]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-[#FD91CC]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-xs font-bold truncate ${
                          isTwilight ? 'text-white' : 'text-[#09318D]'
                        }`}>
                          {q.title}
                        </p>
                        <Send className="w-3 h-3 text-[#FD91CC] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                      </div>
                      <p className="text-[11px] text-stone-400 truncate mt-0.5">
                        {q.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <label htmlFor="concierge-message" className="sr-only">Type your question</label>
              <div className="relative">
                <input
                  id="concierge-message"
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendWhatsApp()}
                  placeholder="Type any question for reception..."
                  className={`w-full text-xs rounded-full pl-4 pr-10 py-2.5 border focus:outline-none transition-colors ${
                    isTwilight
                      ? 'bg-white/10 border-white/20 text-white placeholder-stone-400 focus:border-[#FD91CC]'
                      : 'bg-white border-[#09318D]/20 text-[#09318D] placeholder-stone-400 focus:border-[#09318D]'
                  }`}
                />
                <button
                  onClick={() => handleSendWhatsApp()}
                  disabled={!customMsg.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#FD91CC] disabled:opacity-40 text-[#09318D] flex items-center justify-center transition-opacity cursor-pointer disabled:cursor-not-allowed"
                  aria-label="Send custom message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Call Row */}
            <div className="pt-2 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-stone-400">Prefer voice consultation?</span>
              <a
                href="tel:9366217621"
                className="inline-flex items-center gap-1.5 font-bold text-[#09318D] dark:text-[#E6B87D] hover:underline"
              >
                <Phone className="w-3 h-3 text-[#FD91CC]" />
                <span>+91 9366217621</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${
          isTwilight
            ? 'bg-[#041544]/90 border-[#E6B87D]/40 text-stone-100 hover:border-[#FD91CC]'
            : 'bg-[#09318D] border-[#FD91CC]/40 text-white hover:bg-[#0c3dae]'
        }`}
        aria-label="Open Live Concierge Chat"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>

        <MessageCircle className="w-4 h-4 text-[#FD91CC]" />

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-heading font-black tracking-wider uppercase">
            Reception
          </span>
          <span className="hidden sm:inline text-[11px] opacity-80 font-medium">
            • 2m reply
          </span>
        </div>

        <ChevronUp
          className={`w-3.5 h-3.5 text-[#FD91CC] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </aside>
  );
}
