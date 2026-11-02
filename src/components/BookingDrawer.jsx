import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, Send, CheckCircle2, ShieldCheck, Sun, Coffee } from 'lucide-react';

const COMMON_SERVICES = [
  { name: 'One Hour Full Body Swedish Relaxation', price: 999, duration: '60 MIN' },
  { name: 'Deep Tissue Muscle Knot Decompression', price: 1199, duration: '60 MIN' },
  { name: 'Volcanic Basalt Hot Stone Therapy', price: 1299, duration: '60 MIN' },
  { name: 'Festive 24K Gold Radiance Facial', price: 999, duration: '60 MIN' },
  { name: 'Botanical Deep Conditioning Hair Spa', price: 799, duration: '45 MIN' },
  { name: 'Couples Synchronized Swedish Ritual', price: 1999, duration: '60 MIN' },
];

const BODY_ZONES = [
  { id: 'neck', label: 'Neck & Trapezius' },
  { id: 'shoulders', label: 'Shoulders & Upper Back' },
  { id: 'lumbar', label: 'Lower Lumbar Spine' },
  { id: 'glutes', label: 'Glutes & Sciatic Area' },
  { id: 'legs', label: 'Calves & Feet' },
  { id: 'scalp', label: 'Scalp & Temples' },
];

export default function BookingDrawer({ isOpen, onClose, initialData = null }) {
  const [selectedService, setSelectedService] = useState(COMMON_SERVICES[0]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [therapistPref, setTherapistPref] = useState('No Preference');
  const [selectedZones, setSelectedZones] = useState(['neck', 'shoulders']);
  const [lightingPref, setLightingPref] = useState('Candlelit Amber (2200K)');
  const [teaPref, setTeaPref] = useState('Organic Kashmiri Kahwa');
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (initialData) {
      const match = COMMON_SERVICES.find(
        (s) => s.name.toLowerCase() === (initialData.name || '').toLowerCase()
      );
      if (match) {
        setSelectedService(match);
      } else {
        setSelectedService({
          name: initialData.name || 'Custom Spa Treatment',
          price: initialData.price || 999,
          duration: initialData.duration || '60 MIN',
        });
      }
    }
  }, [initialData]);

  // Set default date to tomorrow
  useEffect(() => {
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    const yyyy = tmrw.getFullYear();
    const mm = String(tmrw.getMonth() + 1).padStart(2, '0');
    const dd = String(tmrw.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const toggleZone = (zoneId) => {
    if (selectedZones.includes(zoneId)) {
      setSelectedZones(selectedZones.filter((z) => z !== zoneId));
    } else {
      setSelectedZones([...selectedZones, zoneId]);
    }
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const zoneLabels = selectedZones
      .map((id) => BODY_ZONES.find((z) => z.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const text = encodeURIComponent(
      `Hello Samariya Beauty Spa! 🌸\n\nI would like to reserve a session:\n` +
      `• Treatment: ${selectedService.name} (₹${selectedService.price})\n` +
      `• Date: ${date} at ${time}\n` +
      `• Focus Areas: ${zoneLabels || 'General full body'}\n` +
      `• Lighting Ambience: ${lightingPref}\n` +
      `• Welcome Tea: ${teaPref}\n` +
      `• Therapist Preference: ${therapistPref}\n` +
      `• Guest Name: ${name || 'Guest'}\n` +
      `• Guest Phone: ${phone || 'Not provided'}\n` +
      (notes ? `• Special Notes: ${notes}\n` : '') +
      `\nPlease confirm slot availability at your Banamalipur salon.`
    );
    window.open(`https://wa.me/919366217621?text=${text}`, '_blank');
    setIsConfirmed(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Dimmed Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-xl bg-white text-[#09318D] shadow-2xl h-full flex flex-col justify-between overflow-y-auto border-l border-[#09318D]/20 z-10">
        
        {/* Header with Bold Crest */}
        <div className="p-6 border-b border-[#09318D]/15 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#FD91CC] p-0.5 bg-white shadow-xs">
              <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#FD91CC] block font-heading">
                Samariya Concierge
              </span>
              <h3 className="font-heading text-xl font-black leading-none text-[#09318D]">
                Reserve Your Ritual
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[#09318D]/20 text-[#09318D] hover:border-[#FD91CC] transition-colors cursor-pointer"
            aria-label="Close reservation drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 flex-1 space-y-6">
          {isConfirmed ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#FD91CC]/25 text-[#09318D] flex items-center justify-center mb-5 border-2 border-[#FD91CC]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-black mb-2 text-[#09318D]">
                Inquiry Dispatched!
              </h3>
              <p className="text-xs text-[#38528E] max-w-sm leading-relaxed mb-6 font-medium">
                Your reservation details have been generated for WhatsApp to <strong className="text-[#09318D]">+91 9366217621</strong>. Our reception team in Banamalipur will confirm your slot shortly.
              </p>

              <div className="bg-[#09318D]/5 p-5 rounded-2xl border border-[#09318D]/15 w-full text-left text-xs space-y-2.5 mb-6 shadow-xs">
                <div className="flex justify-between border-b border-[#09318D]/10 pb-2">
                  <span className="text-[#38528E]">Service:</span>
                  <span className="font-bold text-[#09318D]">{selectedService.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#09318D]/10 pb-2">
                  <span className="text-[#38528E]">Date & Time:</span>
                  <span className="font-semibold text-[#09318D]">{date} at {time}</span>
                </div>
                <div className="flex justify-between border-b border-[#09318D]/10 pb-2">
                  <span className="text-[#38528E]">Focus Areas:</span>
                  <span className="font-semibold text-right max-w-[200px] text-[#09318D]">{selectedZones.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#38528E]">Total Amount:</span>
                  <span className="font-black text-[#09318D] text-base">₹{selectedService.price}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsConfirmed(false);
                  onClose();
                }}
                className="w-full py-3.5 rounded-full btn-espresso text-xs uppercase tracking-widest font-bold cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-6">
              
              {/* Service Selection */}
              <div>
                <label htmlFor="service-select" className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block mb-2">
                  Selected Treatment
                </label>
                <select
                  id="service-select"
                  name="service-select"
                  value={selectedService.name}
                  onChange={(e) => {
                    const match = COMMON_SERVICES.find((s) => s.name === e.target.value);
                    if (match) setSelectedService(match);
                  }}
                  className="w-full p-3 rounded-xl border border-[#09318D]/20 bg-white text-xs text-[#09318D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FD91CC]"
                >
                  {COMMON_SERVICES.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — ₹{s.price} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="res-date" className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block mb-2">
                    Preferred Date
                  </label>
                  <input
                    id="res-date"
                    name="res-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#09318D]/20 bg-white text-xs text-[#09318D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FD91CC]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="res-time" className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="res-time"
                    name="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#09318D]/20 bg-white text-xs text-[#09318D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FD91CC]"
                  >
                    {['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* FEATURE 3: Interactive Body Focus Map Selector */}
              <div className="bg-[#09318D]/5 p-4 sm:p-5 rounded-2xl border border-[#09318D]/15 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block">
                    Target Body Focus Areas
                  </span>
                  <span className="text-[10px] text-[#09318D] bg-[#FD91CC]/30 border border-[#FD91CC]/60 px-2 py-0.5 rounded-full font-bold">
                    {selectedZones.length} Selected
                  </span>
                </div>
                <p className="text-[11px] text-[#38528E] font-medium">
                  Tap the areas of your body experiencing tension or fatigue so our therapists can prepare targeted pressure:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                  {BODY_ZONES.map((zone) => {
                    const isSelected = selectedZones.includes(zone.id);
                    return (
                      <button
                        type="button"
                        key={zone.id}
                        onClick={() => toggleZone(zone.id)}
                        className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FD91CC] text-[#09318D] border-[#FD91CC] shadow-xs'
                            : 'bg-white text-[#09318D] border-[#09318D]/20 hover:border-[#FD91CC]'
                        }`}
                      >
                        <span className="block leading-snug">{zone.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FEATURE 4: Pre-Arrival Sensory Preferences */}
              <div className="bg-[#09318D]/5 p-4 sm:p-5 rounded-2xl border border-[#09318D]/15 space-y-4">
                <span className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block">
                  Pre-Arrival Sensory Personalization
                </span>

                {/* Lighting Hue */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#38528E] flex items-center gap-1">
                    <Sun className="w-3 h-3 text-[#FD91CC]" /> Room Lighting Ambience
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {['Candlelit Amber (2200K)', 'Natural Daylight (3500K)', 'Dimmed Twilight'].map((l) => (
                      <button
                        type="button"
                        key={l}
                        onClick={() => setLightingPref(l)}
                        className={`p-2 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                          lightingPref === l
                            ? 'bg-[#09318D] text-white border-[#09318D]'
                            : 'bg-white text-[#09318D] border-[#09318D]/20'
                        }`}
                      >
                        {l.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Arrival Tea */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#38528E] flex items-center gap-1">
                    <Coffee className="w-3 h-3 text-[#FD91CC]" /> Complimentary Welcome Tea
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {['Organic Kashmiri Kahwa', 'Warm Chamomile Tisane', 'Fresh Lemongrass Tea'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTeaPref(t)}
                        className={`p-2 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                          teaPref === t
                            ? 'bg-[#09318D] text-white border-[#09318D]'
                            : 'bg-white text-[#09318D] border-[#09318D]/20'
                        }`}
                      >
                        {t.split(' ')[1] || t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Therapist Preference */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block mb-2">
                  Therapist Preference
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {['Female', 'Male', 'No Preference'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setTherapistPref(opt)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        therapistPref === opt
                          ? 'bg-[#09318D] text-white border-[#09318D] shadow-xs'
                          : 'bg-white text-[#09318D] border-[#09318D]/20'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="guest-name" className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block mb-2">
                    Your Full Name
                  </label>
                  <input
                    id="guest-name"
                    name="guest-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#09318D]/20 bg-white text-xs text-[#09318D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FD91CC]"
                  />
                </div>

                <div>
                  <label htmlFor="guest-phone" className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block mb-2">
                    Contact Phone Number
                  </label>
                  <input
                    id="guest-phone"
                    name="guest-phone"
                    type="tel"
                    required
                    placeholder="e.g. 9366217621"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#09318D]/20 bg-white text-xs text-[#09318D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FD91CC]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="guest-notes" className="text-[11px] uppercase tracking-wider font-black text-[#09318D] block mb-2">
                  Special Notes / Preferences
                </label>
                <textarea
                  id="guest-notes"
                  name="guest-notes"
                  rows={2}
                  placeholder="e.g. Upper back knots, lower back pain, allergies..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#09318D]/20 bg-white text-xs text-[#09318D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FD91CC]"
                />
              </div>

              {/* Price Summary Banner */}
              <div className="bg-[#FD91CC]/20 p-4 rounded-xl border border-[#FD91CC]/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-black text-[#09318D] block">
                    TOTAL INVESTMENT
                  </span>
                  <span className="font-heading text-xl font-black text-[#09318D]">
                    ₹{selectedService.price}
                  </span>
                </div>
                <span className="text-[10px] text-[#09318D] font-mono font-bold">
                  Pay at Salon • Zero Advance Fee
                </span>
              </div>

              {/* Submit to WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 rounded-full btn-peach text-xs font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Reservation via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-[#38528E] font-medium">
                Questions? Call our front desk directly at{' '}
                <a href="tel:9366217621" className="font-bold text-[#09318D] hover:text-[#FD91CC] underline transition-colors">
                  +91 9366217621
                </a>
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
