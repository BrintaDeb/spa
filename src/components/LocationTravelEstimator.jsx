import React, { useState } from 'react';
import { MapPin, Navigation, Car, Clock, Phone, ExternalLink, Compass, ShieldCheck } from 'lucide-react';

const AGARTALA_LANDMARKS = [
  {
    id: 'mbb-airport',
    name: 'MBB Airport Agartala',
    shortName: 'Agartala Airport',
    category: 'Flight Arrivals',
    distance: '8.5 km',
    duration: '18 - 22 mins',
    route: 'Via VIP Road & Banamalipur Link',
    transitTip: 'Pre-paid airport taxi or auto directly to Banamalipur.',
    landmarkRef: 'Pass Radhanagar Motor Stand, proceed straight to Bhogowan Thakur Chowmuhani.',
  },
  {
    id: 'ujjayanta-palace',
    name: 'Ujjayanta Palace & Museum',
    shortName: 'Palace Compound',
    category: 'Heritage Heart',
    distance: '1.8 km',
    duration: '5 - 7 mins',
    route: 'Via Palace Lake South Gate & Central Road',
    transitTip: 'Convenient 5-minute TomTom (e-rickshaw) ride or short drive.',
    landmarkRef: 'Take the eastern gate road towards Banamalipur; 100m past S22 Cafe.',
  },
  {
    id: 'battala-melarmath',
    name: 'Battala & Melarmath Central',
    shortName: 'Battala / Melarmath',
    category: 'City Center',
    distance: '2.4 km',
    duration: '8 - 10 mins',
    route: 'Via Akhaura Road & Central Post Office Link',
    transitTip: 'Frequent e-rickshaws available every minute.',
    landmarkRef: 'Cross Jagannath Bari road into Banamalipur Chowmuhani.',
  },
  {
    id: 'railway-station',
    name: 'Agartala Railway Station',
    shortName: 'Badharghat Station',
    category: 'Train Arrivals',
    distance: '5.2 km',
    duration: '14 - 16 mins',
    route: 'Via Bypass Road & South Banamalipur Entrance',
    transitTip: 'Auto-rickshaw or ride-share directly to S22 Cafe landmark.',
    landmarkRef: 'Enter Banamalipur from Bypass link; near Bhogowan Thakur Chowmuhani.',
  },
  {
    id: 'tripura-university',
    name: 'Tripura Central University',
    shortName: 'Suryamaninagar',
    category: 'Southern Suburb',
    distance: '9.1 km',
    duration: '22 - 25 mins',
    route: 'Via NH8 Bypass & Amtali Connector',
    transitTip: 'Direct auto-rickshaw or university car route into city.',
    landmarkRef: 'Arrive via Banamalipur Main Road directly beside S22 Cafe.',
  },
];

export default function LocationTravelEstimator() {
  const [selectedLandmark, setSelectedLandmark] = useState(AGARTALA_LANDMARKS[1]);

  const mapsQueryUrl = 'https://www.google.com/maps/search/?api=1&query=Samariya+Beauty+Spa+Banamalipur+Agartala+Tripura';
  const whatsappLocationUrl = 'https://wa.me/919366217621?text=Hello%20Samariya%20Spa,%20please%20send%20your%20exact%20live%20location%20pin%20and%20driving%20directions%20near%20S22%20Cafe.';

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#09318D]/15 relative overflow-hidden">
      
      {/* Subtle background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FD91CC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm mb-4">
            <Compass className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>Agartala Sanctuary Arrival Guide</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#09318D] tracking-tight leading-tight">
            How Close Are You to <span className="font-serif italic text-[#FD91CC] font-bold">Pure Serenity?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#38528E] max-w-2xl mx-auto font-medium leading-relaxed">
            Conveniently situated in the peaceful heart of Banamalipur, Agartala. Calculate your travel duration from key transit hubs and city landmarks.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Landmark Selector Pills & Travel Time Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#09318D]/15">
              <span className="text-xs uppercase font-black tracking-widest text-[#09318D]">
                Select Your Starting Point:
              </span>
              <span className="text-xs font-mono text-[#FD91CC] font-bold">
                Banamalipur Destination
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AGARTALA_LANDMARKS.map((landmark) => {
                const isSelected = selectedLandmark.id === landmark.id;
                return (
                  <button
                    key={landmark.id}
                    onClick={() => setSelectedLandmark(landmark)}
                    className={`p-4 rounded-2xl text-left transition-all border cursor-pointer min-h-[46px] flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-2 border-[#FD91CC] shadow-md ring-2 ring-[#FD91CC]/30'
                        : 'bg-white border-[#09318D]/15 hover:border-[#FD91CC]/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-black tracking-widest text-[#09318D] bg-[#FD91CC]/25 px-2 py-0.5 rounded-full border border-[#FD91CC]/50">
                          {landmark.category}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#09318D] flex items-center gap-1">
                          <Car className="w-3.5 h-3.5 text-[#FD91CC]" /> {landmark.distance}
                        </span>
                      </div>
                      <h4 className="font-heading font-black text-sm text-[#09318D] mt-1">
                        {landmark.name}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#09318D]/10 flex items-center justify-between">
                      <span className="text-[11px] text-[#38528E] flex items-center gap-1 font-semibold">
                        <Clock className="w-3 h-3 text-[#FD91CC]" /> {landmark.duration}
                      </span>
                      <span className={`text-[10px] font-black uppercase tracking-wider ${isSelected ? 'text-[#09318D]' : 'text-stone-400'}`}>
                        {isSelected ? '● Active Route' : 'Select →'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Route Detailed Card */}
            <div className="mt-6 p-6 rounded-3xl bg-white border-2 border-[#FD91CC]/60 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#09318D]/15">
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#38528E]">
                    Calculated Route from
                  </span>
                  <h3 className="font-heading text-lg font-black text-[#09318D]">
                    {selectedLandmark.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 bg-[#09318D]/5 px-4 py-2 rounded-2xl border border-[#09318D]/10">
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#38528E] block">Approx. Time</span>
                    <span className="font-mono text-sm font-black text-[#09318D]">{selectedLandmark.duration}</span>
                  </div>
                  <div className="h-6 w-px bg-[#09318D]/20" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#38528E] block">Distance</span>
                    <span className="font-mono text-sm font-black text-[#09318D]">{selectedLandmark.distance}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-[#38528E]">
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-[#09318D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#09318D]">Route Corridor: </span>
                    {selectedLandmark.route}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#FD91CC] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#09318D]">Transit Recommendation: </span>
                    {selectedLandmark.transitTip}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FD91CC] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#09318D]">Final Arrival Cue: </span>
                    {selectedLandmark.landmarkRef}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Physical Sanctuary Info & Instant Navigation Links (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#09318D]/20 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FD91CC] animate-pulse" />
                <span className="text-[11px] uppercase font-black tracking-[0.16em] text-[#09318D]">
                  Open Today • 10:00 AM – 8:30 PM
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-black text-[#09318D]">
                Samariya Beauty Spa & Family Salon
              </h3>
              <p className="mt-1 text-xs text-[#FD91CC] font-black uppercase tracking-wider">
                Sanctuary Chambers & Wellness Lounge
              </p>

              {/* Verified Location Box */}
              <div className="mt-6 p-4 rounded-2xl bg-[#09318D]/5 border border-[#09318D]/15 space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FD91CC] shrink-0 mt-1" />
                  <div className="text-xs text-[#09318D] leading-relaxed">
                    <p className="font-black">Bhogowan Thakur Chowmuhani</p>
                    <p className="text-[#38528E]">Banamalipur, Agartala, Tripura 799001</p>
                    <p className="text-[#09318D] font-bold mt-0.5">Direct Landmark: Near S22 Cafe</p>
                  </div>
                </div>
              </div>

              {/* Guest Amenities on Arrival */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#38528E] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#09318D]" />
                  <span>Complimentary Valet Assistance & Street Parking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#38528E] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#09318D]" />
                  <span>Dedicated Private Changing & Shower Rooms</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#38528E] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#09318D]" />
                  <span>Couple & Family Suites with Sound Insulation</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#09318D]/15 space-y-3">
              <a
                href={mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full btn-peach text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps Navigation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:9366217621"
                  className="py-3 px-3 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 hover:border-[#FD91CC] transition-colors min-h-[46px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FD91CC]" />
                  <span>Call Reception</span>
                </a>

                <a
                  href={whatsappLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-full bg-[#FD91CC]/20 border border-[#FD91CC]/50 text-[#09318D] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 hover:bg-[#FD91CC]/30 transition-colors min-h-[46px]"
                >
                  <span>WhatsApp Pin</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
