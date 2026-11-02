import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Phone, MapPin, CreditCard, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQS = [
  {
    q: 'Are the treatment suites completely private and sanitized between appointments?',
    a: 'Yes, absolutely. Every massage, facial, and bodywork session is conducted in a private, soundproof, climate-controlled suite. Fresh single-use sanitized linens, autoclaved towels, and medical-grade UV sterilized equipment are prepared prior to every guest arrival.',
  },
  {
    q: 'Are certified male and female therapists available for appointments?',
    a: 'Yes. Samariya is a full-service family wellness sanctuary. We have certified, highly trained female therapists for female guests, certified male therapists for male guests, and synchronized dual therapists for couples. You can specify your preference when booking.',
  },
  {
    q: 'Can couples or family members book and unwind in the same suite together?',
    a: 'Yes! We have a dedicated Couples VIP Suite featuring dual synchronized heated tables, a floral foot soaking basin, and a private changing enclave. It is ideal for couples, spouses, sisters, or close friends seeking side-by-side tranquility.',
  },
  {
    q: 'What should I wear, and what is provided upon arrival at Samariya?',
    a: 'You can arrive in your normal casual clothes. We provide complimentary sanitized spa robes, disposable single-use garments, and soft slippers. Dedicated private changing spaces and hot shower facilities are available inside our Banamalipur salon.',
  },
  {
    q: 'What payment modes are accepted at the front desk?',
    a: 'We accept all convenient Indian payment methods: UPI (Google Pay, PhonePe, Paytm, BHIM), all major Credit & Debit cards (Visa, MasterCard, RuPay), and Cash. You only pay after your treatment is completed—there are no advance cancellation fees.',
  },
  {
    q: 'Where is the salon located in Agartala, and is guest parking available?',
    a: 'We are conveniently located at Bhogowan Thakur Chowmuhani, Banamalipur, Agartala (directly near S22 Cafe). Dedicated guest parking and valet assistance are available for both two-wheelers and four-wheelers.',
  },
];

export default function FaqSection({ onOpenBooking }) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#09318D]/15 relative overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#09318D]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>Pre-Arrival Guidance & Etiquette</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#09318D] tracking-tight leading-tight">
            Guest Etiquette & <span className="font-serif italic text-[#FD91CC] font-bold">Frequently Asked Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed max-w-2xl mx-auto">
            {t('faqSubtitle')}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 transition-all overflow-hidden ${
                  isOpen
                    ? 'border-[#FD91CC] bg-white shadow-md'
                    : 'border-[#09318D]/15 bg-white hover:border-[#09318D]/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-black text-sm sm:text-base text-[#09318D]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#FD91CC] text-[#09318D]' : 'bg-[#09318D]/10 text-[#09318D]'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#38528E] leading-relaxed border-t border-[#09318D]/10">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-3xl bg-[#09318D]/5 border border-[#09318D]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="font-heading font-black text-sm text-[#09318D] block">
              Have a special request or medical query?
            </span>
            <p className="text-xs text-[#38528E] font-medium">
              Our front desk receptionist is available 7 days a week from 10:00 AM to 8:30 PM.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="tel:9366217621"
              className="px-5 py-2.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-xs font-bold uppercase tracking-wider hover:border-[#FD91CC] transition-colors"
            >
              Call 9366217621
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full btn-peach text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
            >
              Book Online →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

