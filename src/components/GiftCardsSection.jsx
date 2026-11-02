import React, { useState } from 'react';
import { Gift, Send, Sparkles } from 'lucide-react';

export default function GiftCardsSection({ onOpenBooking }) {
  const [selectedAmount, setSelectedAmount] = useState(999);
  const [recipientName, setRecipientName] = useState('');

  const amounts = [999, 1499, 1999, 2999, 4999];

  const handleSendGiftWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Samariya Spa! 🎁 I would like to purchase a Gift Voucher for ₹${selectedAmount}${
        recipientName ? ` for ${recipientName}` : ''
      }. Please share voucher details and payment options.`
    );
    window.open(`https://wa.me/919366217621?text=${text}`, '_blank');
  };

  return (
    <section id="gift-cards" className="py-20 sm:py-28 px-4 sm:px-8 bg-[#FFFFFF] border-t border-[#09318D]/15 relative overflow-hidden">
      
      {/* Decorative Warm Vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FD91CC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-script text-5xl sm:text-6xl text-[#FD91CC] font-bold block">
            Gift Cards
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-[0.18em] text-[#09318D] font-extrabold">
            Give The Gift Of Pure Relaxation
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed">
            Digital gift certificates available for all massage, facial, and salon packages.
            The perfect thoughtful gift for anniversaries, birthdays, weddings, or festive occasions in Agartala.
          </p>
        </div>

        {/* Tactile Gift Voucher Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#09318D]/20 shadow-xl max-w-3xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#09318D]/15">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FD91CC]/20 flex items-center justify-center text-[#09318D] border border-[#FD91CC]/50">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#FD91CC] block">
                  DIGITAL GIFT CERTIFICATE
                </span>
                <span className="font-heading text-lg font-black text-[#09318D]">
                  Samariya Spa Gift Voucher
                </span>
              </div>
            </div>

            <span className="text-xs font-mono font-bold text-[#09318D] bg-[#FD91CC]/25 px-3.5 py-1.5 rounded-full border border-[#FD91CC]/50">
              VALID FOR 12 MONTHS
            </span>
          </div>

          {/* Amount Selection */}
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#09318D] block">
              1. Choose Gift Amount
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {amounts.map((amt) => {
                const active = selectedAmount === amt;
                return (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-3 px-2 rounded-xl text-center font-heading font-black text-sm sm:text-base transition-all cursor-pointer ${
                      active
                        ? 'bg-[#09318D] text-white shadow-md scale-105'
                        : 'bg-white text-[#09318D] border border-[#09318D]/20 hover:border-[#FD91CC]'
                    }`}
                  >
                    ₹{amt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recipient Customization */}
          <div className="space-y-3">
            <label htmlFor="recipient-name-input" className="text-xs font-black uppercase tracking-wider text-[#09318D] block">
              2. Recipient Name (Optional)
            </label>
            <input
              id="recipient-name-input"
              aria-label="Recipient Name"
              type="text"
              placeholder="e.g. Priya Sharma / Ananya & Rahul"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#09318D]/20 bg-white text-sm text-[#09318D] focus:outline-none focus:ring-2 focus:ring-[#FD91CC] transition-all font-medium"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={handleSendGiftWhatsApp}
              className="w-full py-4 rounded-full btn-peach text-xs font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Generate Voucher via WhatsApp (₹{selectedAmount})</span>
            </button>
            <p className="text-[11px] text-center text-[#38528E] mt-3 font-medium">
              Instant digital dispatch to your WhatsApp. Redeemable for any massage, facial, or salon service at our Banamalipur salon.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
