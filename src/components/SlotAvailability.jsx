import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Sun, Moon, Sunset } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DAYS = [
  { id: 'today', label: 'Today', sublabel: 'Immediate Openings' },
  { id: 'tomorrow', label: 'Tomorrow', sublabel: 'Advance Planning' },
  { id: 'saturday', label: 'This Saturday', sublabel: 'Weekend Peak' },
  { id: 'sunday', label: 'This Sunday', sublabel: 'Weekend Retreat' },
];

const TIME_PERIODS = [
  {
    period: 'Morning Zen',
    icon: Sun,
    timeRange: '10:00 AM – 01:00 PM',
    status: 'Quiet & Calm',
    slots: [
      { time: '10:00 AM', status: 'available', seats: 2 },
      { time: '11:30 AM', status: 'filling', seats: 1, label: '1 Slot Left' },
      { time: '12:45 PM', status: 'booked', seats: 0 },
    ],
  },
  {
    period: 'Afternoon Renewal',
    icon: Sparkles,
    timeRange: '01:00 PM – 05:00 PM',
    status: 'Optimal Decompression',
    slots: [
      { time: '01:30 PM', status: 'available', seats: 3 },
      { time: '02:45 PM', status: 'available', seats: 2 },
      { time: '04:00 PM', status: 'filling', seats: 1, label: '1 Slot Left' },
    ],
  },
  {
    period: 'Evening Twilight',
    icon: Sunset,
    timeRange: '05:00 PM – 08:30 PM',
    status: 'Most Requested',
    badge: 'Popular',
    slots: [
      { time: '05:30 PM', status: 'filling', seats: 1, label: 'Fast Filling' },
      { time: '06:45 PM', status: 'available', seats: 2 },
      { time: '07:30 PM', status: 'filling', seats: 1, label: '1 Slot Left' },
    ],
  },
];

export default function SlotAvailability({ onOpenBooking }) {
  const { t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState(DAYS[0].id);

  // Compute date string based on selected day
  const getDateForDay = (dayId) => {
    const d = new Date();
    if (dayId === 'tomorrow') d.setDate(d.getDate() + 1);
    else if (dayId === 'saturday') {
      const day = d.getDay();
      const diff = (6 - day + 7) % 7 || 7;
      d.setDate(d.getDate() + diff);
    } else if (dayId === 'sunday') {
      const day = d.getDay();
      const diff = (7 - day) % 7 || 7;
      d.setDate(d.getDate() + diff);
    }
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSlotClick = (slotTime) => {
    onOpenBooking({
      name: 'One Hour Full Body Swedish Relaxation',
      price: 999,
      duration: '60 MIN',
      date: getDateForDay(selectedDay),
      time: slotTime,
    });
  };

  return (
    <section id="availability" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#09318D]/15 relative overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#09318D]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>Real-Time Chamber Availability</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#09318D] tracking-tight leading-tight">
            Live Daily <span className="font-serif italic text-[#FD91CC] font-bold">Appointment Slots</span>
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed max-w-2xl mx-auto">
            {t('slotsSubtitle')}
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-white border border-[#09318D]/20 rounded-full max-w-2xl mx-auto shadow-sm">
          {DAYS.map((d) => {
            const active = selectedDay === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDay(d.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  active
                    ? 'bg-[#09318D] text-white shadow-xs'
                    : 'text-[#38528E] hover:text-[#09318D] hover:bg-[#09318D]/5'
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>

        {/* 3 Time Period Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIME_PERIODS.map((period) => {
            const PeriodIcon = period.icon;
            return (
              <div
                key={period.period}
                className="bg-white p-6 rounded-3xl border-2 border-[#09318D]/15 shadow-md flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Period Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#09318D]/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#09318D]/10 flex items-center justify-center text-[#09318D]">
                        <PeriodIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-sm text-[#09318D]">
                          {period.period}
                        </h3>
                        <span className="text-[11px] font-mono text-[#38528E] block">
                          {period.timeRange}
                        </span>
                      </div>
                    </div>

                    {period.badge && (
                      <span className="text-[9px] uppercase font-black tracking-widest text-[#09318D] bg-[#FD91CC]/30 border border-[#FD91CC] px-2 py-0.5 rounded-full">
                        {period.badge}
                      </span>
                    )}
                  </div>

                  {/* Slot Pills */}
                  <div className="space-y-2.5">
                    {period.slots.map((slot) => {
                      const isBooked = slot.status === 'booked';
                      const isFilling = slot.status === 'filling';
                      return (
                        <button
                          key={slot.time}
                          disabled={isBooked}
                          onClick={() => handleSlotClick(slot.time)}
                          className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all text-xs font-semibold ${
                            isBooked
                              ? 'bg-stone-50 border-stone-200 text-stone-400 cursor-not-allowed opacity-60'
                              : isFilling
                              ? 'bg-[#FD91CC]/15 border-[#FD91CC] text-[#09318D] hover:bg-[#FD91CC]/30 cursor-pointer shadow-xs'
                              : 'bg-white border-[#09318D]/20 text-[#09318D] hover:border-[#FD91CC] hover:bg-[#09318D]/5 cursor-pointer'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Clock className={`w-3.5 h-3.5 ${isBooked ? 'text-stone-300' : 'text-[#FD91CC]'}`} />
                            <span className="font-mono font-bold">{slot.time}</span>
                          </div>

                          <div>
                            {isBooked ? (
                              <span className="text-[10px] uppercase font-bold text-stone-400">Reserved</span>
                            ) : slot.label ? (
                              <span className="text-[10px] font-bold text-[#09318D] bg-[#FD91CC]/40 px-2 py-0.5 rounded-full">
                                {slot.label}
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                Available ({slot.seats})
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#09318D]/10 text-center">
                  <span className="text-[11px] text-[#38528E] font-medium flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instant Confirmation via Reception</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#09318D]/5 p-5 rounded-2xl border border-[#09318D]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-[#38528E] font-medium">
            <span className="font-bold text-[#09318D]">Need an urgent or custom slot time?</span> Walk-in appointments are welcomed at Bhogowan Thakur Chowmuhani, Banamalipur (near S22 Cafe).
          </div>
          <a
            href="tel:9366217621"
            className="px-6 py-2.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] font-bold text-xs uppercase tracking-wider hover:border-[#FD91CC] transition-colors shrink-0 shadow-xs"
          >
            Call: +91 9366217621
          </a>
        </div>

      </div>
    </section>
  );
}

