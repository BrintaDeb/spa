import React, { useState } from 'react';
import { MapPin, Navigation, Car, Clock, Phone, ExternalLink, Compass, ShieldCheck, Footprints, Bus } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AGARTALA_LANDMARKS = [
  {
    id: 'city-centre',
    name: 'Agartala City Centre (Paradise Chowmuhani)',
    shortName: 'City Centre',
    category: 'Heart of Town',
    distance: '1.4 km',
    duration: '5 - 6 mins',
    autoTime: '5 mins',
    carTime: '5 mins',
    walkTime: '16 mins',
    route: 'Via Central Road & Banamalipur Connector',
    transitTip: 'Frequent e-rickshaws (TomTom) available every 30 seconds.',
    landmarkRef: 'Head east past S22 Cafe towards Bhogowan Thakur Chowmuhani.',
  },
  {
    id: 'ujjayanta-palace',
    name: 'Ujjayanta Palace & Heritage Grounds',
    shortName: 'Palace Compound',
    category: 'Heritage Heart',
    distance: '1.8 km',
    duration: '5 - 7 mins',
    autoTime: '6 mins',
    carTime: '6 mins',
    walkTime: '20 mins',
    route: 'Via Palace Lake South Gate & Central Road',
    transitTip: 'Convenient 5-minute TomTom (e-rickshaw) ride or short drive.',
    landmarkRef: 'Take the eastern gate road towards Banamalipur; 100m past S22 Cafe.',
  },
  {
    id: 'battala-melarmath',
    name: 'Battala & Melarmath Central',
    shortName: 'Battala / Melarmath',
    category: 'Commercial Hub',
    distance: '2.4 km',
    duration: '7 - 9 mins',
    autoTime: '8 mins',
    carTime: '7 mins',
    walkTime: '26 mins',
    route: 'Via Akhaura Road & Central Post Office Link',
    transitTip: 'Direct auto-rickshaw route along main thoroughfare.',
    landmarkRef: 'Cross Jagannath Bari road into Banamalipur Chowmuhani.',
  },
  {
    id: 'mbb-college',
    name: 'MBB College / College Tilla',
    shortName: 'MBB College',
    category: 'Academic District',
    distance: '2.6 km',
    duration: '8 - 10 mins',
    autoTime: '9 mins',
    carTime: '8 mins',
    walkTime: '30 mins',
    route: 'Via College Road & Banamalipur Lake Approach',
    transitTip: 'Shared auto or student e-rickshaws running continuously.',
    landmarkRef: 'Enter Banamalipur from the lake roundabout near S22 Cafe.',
  },
  {
    id: 'mbb-airport',
    name: 'Maharaja Bir Bikram Airport (IXA)',
    shortName: 'Agartala Airport',
    category: 'Flight Arrivals',
    distance: '8.8 km',
    duration: '20 - 24 mins',
    autoTime: '22 mins',
    carTime: '19 mins',
    walkTime: '1 hr 45 min',
    route: 'Via VIP Road, Kunjaban & Radhanagar Link',
    transitTip: 'Pre-paid airport taxi or direct airport auto to Banamalipur.',
    landmarkRef: 'Pass Radhanagar Motor Stand, proceed straight to Bhogowan Thakur Chowmuhani.',
  },
  {
    id: 'railway-station',
    name: 'Agartala Railway Station (Badharghat)',
    shortName: 'Badharghat Station',
    category: 'Train Arrivals',
    distance: '5.2 km',
    duration: '14 - 16 mins',
    autoTime: '15 mins',
    carTime: '13 mins',
    walkTime: '58 mins',
    route: 'Via Bypass Road & South Banamalipur Entrance',
    transitTip: 'Direct railway station auto or app-based cab.',
    landmarkRef: 'Enter Banamalipur from Bypass link; destination is beside S22 Cafe.',
  },
];

export default function LocationTravelEstimator() {
  const { isTwilight } = useTheme();
  const [selectedLandmark, setSelectedLandmark] = useState(AGARTALA_LANDMARKS[0]);
  const [transportMode, setTransportMode] = useState('auto'); // 'auto', 'car', 'walk'

  const getDirectRouteUrl = (landmark) => {
    const origin = encodeURIComponent(`${landmark.name}, Agartala, Tripura`);
    const destination = encodeURIComponent('Samariya Beauty Spa and Family Salon, Bhogowan Thakur Chowmuhani, Banamalipur, Agartala, Tripura 799001');
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
  };

  const getActiveDuration = (landmark) => {
    if (transportMode === 'car') return landmark.carTime;
    if (transportMode === 'walk') return landmark.walkTime;
    return landmark.autoTime;
  };

  const mapsQueryUrl = 'https://www.google.com/maps/search/?api=1&query=Samariya+Beauty+Spa+and+Family+Salon+Banamalipur+Agartala+Tripura';
  const whatsappLocationUrl = 'https://wa.me/919366217621?text=Hello%20Samariya%20Spa,%20please%20send%20your%20exact%20live%20location%20pin%20and%20driving%20directions%20near%20S22%20Cafe.';

  return (
    <section id="location" className={`py-20 sm:py-28 border-t transition-colors duration-400 relative overflow-hidden ${
      isTwilight
        ? 'bg-[#041544] border-[#FD91CC]/20 text-[#F8FAFE]'
        : 'bg-[#FFFFFF] border-[#09318D]/15 text-[#09318D]'
    }`}>
      
      {/* Subtle background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FD91CC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#09318D]/20 text-[#09318D] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm mb-4">
            <Compass className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>Agartala Sanctuary Arrival Guide</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            How Close Are You to <span className="font-serif italic text-[#FD91CC] font-bold">Pure Serenity?</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed ${
            isTwilight ? 'text-white/80' : 'text-[#38528E]'
          }`}>
            Situated in the peaceful heart of Banamalipur, Agartala. Tap any landmark below for instant turn-by-turn navigation in Google Maps.
          </p>

          {/* Transport Mode Switcher */}
          <div className="mt-6 inline-flex p-1 rounded-full border bg-white/10 backdrop-blur-md border-white/20 shadow-sm">
            {[
              { id: 'auto', label: '🛺 E-Rickshaw (TomTom)' },
              { id: 'car', label: '🚗 Car / Taxi' },
              { id: 'walk', label: '🚶 Walking' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setTransportMode(mode.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  transportMode === mode.id
                    ? 'bg-[#09318D] text-white shadow-sm ring-1 ring-[#FD91CC]/50'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Landmark Selector Grid (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/15 dark:border-white/15">
              <span className="text-xs uppercase font-black tracking-widest">
                Select Your Starting Landmark:
              </span>
              <span className="text-xs font-mono text-[#FD91CC] font-bold">
                Destination: Near S22 Cafe
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AGARTALA_LANDMARKS.map((landmark) => {
                const isSelected = selectedLandmark.id === landmark.id;
                const activeTime = getActiveDuration(landmark);

                return (
                  <div
                    key={landmark.id}
                    onClick={() => setSelectedLandmark(landmark)}
                    className={`p-4 rounded-2xl transition-all border-2 cursor-pointer min-h-[46px] flex flex-col justify-between ${
                      isSelected
                        ? isTwilight
                          ? 'bg-[#071c56] border-[#FD91CC] shadow-xl ring-2 ring-[#FD91CC]/40'
                          : 'bg-white border-[#FD91CC] shadow-md ring-2 ring-[#FD91CC]/30 scale-[1.01]'
                        : isTwilight
                        ? 'bg-white/5 border-white/15 hover:border-[#FD91CC]/60'
                        : 'bg-white border-[#09318D]/15 hover:border-[#FD91CC]/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-black tracking-widest text-[#09318D] bg-[#FD91CC]/25 px-2 py-0.5 rounded-full border border-[#FD91CC]/50">
                          {landmark.category}
                        </span>
                        <span className="text-xs font-mono font-bold flex items-center gap-1 text-[#FD91CC]">
                          {landmark.distance}
                        </span>
                      </div>
                      <h4 className="font-heading font-black text-sm mt-1 leading-snug">
                        {landmark.shortName}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 dark:border-white/10 flex items-center justify-between">
                      <span className="text-[11px] flex items-center gap-1 font-semibold text-[#FD91CC]">
                        <Clock className="w-3 h-3" /> {activeTime}
                      </span>
                      <a
                        href={getDirectRouteUrl(landmark)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] font-black uppercase tracking-wider text-[#09318D] bg-[#FD91CC] hover:bg-white px-2.5 py-1 rounded-full transition-colors flex items-center gap-1 shadow-xs"
                        title={`Open Google Maps route from ${landmark.shortName}`}
                      >
                        <Navigation className="w-2.5 h-2.5" />
                        <span>Navigate</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Route Detailed Card */}
            <div className={`mt-6 p-6 sm:p-7 rounded-3xl border-2 shadow-lg transition-all ${
              isTwilight
                ? 'bg-[#071c56]/85 border-[#FD91CC]/40 text-white backdrop-blur-md'
                : 'bg-white border-[#FD91CC]/60'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/15">
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-stone-400">
                    Live Transit Corridor From
                  </span>
                  <h3 className="font-heading text-lg font-black text-[#FD91CC]">
                    {selectedLandmark.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 bg-[#09318D] text-white px-4 py-2.5 rounded-2xl border border-[#FD91CC]/30">
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-wider text-white/70 block">Time</span>
                    <span className="font-mono text-sm font-black text-[#FD91CC]">
                      {getActiveDuration(selectedLandmark)}
                    </span>
                  </div>
                  <div className="h-6 w-px bg-white/20" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-white/70 block">Distance</span>
                    <span className="font-mono text-sm font-black text-white">{selectedLandmark.distance}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-[#FD91CC] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#FD91CC]">Route Corridor: </span>
                    <span>{selectedLandmark.route}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#FD91CC] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#FD91CC]">Transit Recommendation: </span>
                    <span>{selectedLandmark.transitTip}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FD91CC] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#FD91CC]">Final Arrival Landmark: </span>
                    <span>{selectedLandmark.landmarkRef}</span>
                  </div>
                </div>
              </div>

              {/* 1-Tap Direct Google Maps Route Button */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={getDirectRouteUrl(selectedLandmark)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-full btn-peach text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Start Live Google Maps Route ({getActiveDuration(selectedLandmark)})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Physical Sanctuary Info & Instant Navigation Links (5 Cols) */}
          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border-2 shadow-xl flex flex-col justify-between ${
            isTwilight
              ? 'bg-[#071c56]/85 border-[#FD91CC]/30 text-white backdrop-blur-md'
              : 'bg-white border-[#09318D]/20'
          }`}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FD91CC] animate-pulse" />
                <span className="text-[11px] uppercase font-black tracking-[0.16em] text-[#FD91CC]">
                  Open 7 Days • 10:00 AM – 8:30 PM
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-black">
                Samariya Beauty Spa & Family Salon
              </h3>
              <p className="mt-1 text-xs text-[#FD91CC] font-black uppercase tracking-wider">
                Sanctuary Chambers & Wellness Lounge
              </p>

              {/* Verified Location Box */}
              <div className={`mt-6 p-4 rounded-2xl border space-y-2 ${
                isTwilight ? 'bg-white/5 border-white/10' : 'bg-[#09318D]/5 border-[#09318D]/15'
              }`}>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FD91CC] shrink-0 mt-1" />
                  <div className="text-xs leading-relaxed">
                    <p className="font-black">Bhogowan Thakur Chowmuhani</p>
                    <p className="text-stone-400">Banamalipur, Agartala, Tripura 799001</p>
                    <p className="text-[#FD91CC] font-bold mt-0.5">Direct Landmark: Near S22 Cafe</p>
                  </div>
                </div>
              </div>

              {/* Guest Amenities on Arrival */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-[#FD91CC]" />
                  <span>Complimentary Valet Assistance & Street Parking</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-[#FD91CC]" />
                  <span>Dedicated Private Changing & Shower Rooms</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-[#FD91CC]" />
                  <span>Couple & Family Suites with Sound Insulation</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
              <a
                href={mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full btn-peach text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:9366217621"
                  className={`py-3 px-3 rounded-full border text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors min-h-[46px] ${
                    isTwilight
                      ? 'bg-white/10 border-white/20 text-white hover:border-[#FD91CC]'
                      : 'bg-white border-[#09318D]/20 text-[#09318D] hover:border-[#FD91CC]'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#FD91CC]" />
                  <span>Call Reception</span>
                </a>

                <a
                  href={whatsappLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-full bg-[#FD91CC]/20 border border-[#FD91CC]/50 text-white dark:text-[#FD91CC] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 hover:bg-[#FD91CC]/30 transition-colors min-h-[46px]"
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
