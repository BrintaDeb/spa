import React, { useState } from 'react';
import { Compass, Sparkles, Clock, CheckCircle2, ArrowRight, Droplets, Heart } from 'lucide-react';

const BODY_STATES = [
  {
    id: 'fatigue',
    title: 'Mental Fatigue',
    subtitle: 'Cognitive overload, screen strain & sensory exhaustion',
    icon: '🧠',
    recommendedMassage: 'Swedish Relaxation Massage (Signature Offer)',
    basePrice: 999,
    duration: '60 MIN',
  },
  {
    id: 'tension',
    title: 'Deep Muscle Knots',
    subtitle: 'Shoulder tightness, stiff scapula & lower back tension',
    icon: '⚡',
    recommendedMassage: 'Deep Tissue & Tension Release',
    basePrice: 1199,
    duration: '60 MIN',
  },
  {
    id: 'sleepless',
    title: 'Sleep Deprivation',
    subtitle: 'Restlessness, insomnia & circadian jet-lag',
    icon: '🌙',
    recommendedMassage: 'Volcanic Basalt Hot Stone Therapy',
    basePrice: 1299,
    duration: '60 MIN',
  },
  {
    id: 'renewal',
    title: 'Cellular Skin Renewal',
    subtitle: 'Dehydrated, dull complexion needing natural glow',
    icon: '✨',
    recommendedMassage: 'Festive Glow & 24K Radiance Facial',
    basePrice: 999,
    duration: '60 MIN',
  },
];

const SENSORY_AROMAS = [
  {
    id: 'lavender',
    name: 'French Lavender & Sweet Almond',
    note: 'Calming • Nervine Relaxant • Gentle Ease',
    mood: 'Soothing',
  },
  {
    id: 'sandalwood',
    name: 'Mysore Sandalwood & Frankincense',
    note: 'Grounding • Sacred Meditative Depth',
    mood: 'Centering',
  },
  {
    id: 'eucalyptus',
    name: 'Nilgiri Eucalyptus & Peppermint',
    note: 'Invigorating • Respiratory Opening',
    mood: 'Refreshing',
  },
];

const PRESSURE_LEVELS = [
  {
    id: 'gentle',
    label: 'Gentle Flow (1 - 2)',
    desc: 'Soft rhythmic effleurage for deep autonomic relaxation',
  },
  {
    id: 'moderate',
    label: 'Moderate Firm (3 - 4)',
    desc: 'Targeted muscular decompression & knot relief',
  },
  {
    id: 'deep',
    label: 'Deep Structural (5)',
    desc: 'Intense trigger-point myofascial release',
  },
];

export default function RitualFinder({ onOpenBooking }) {
  const [selectedState, setSelectedState] = useState(BODY_STATES[0].id);
  const [selectedAroma, setSelectedAroma] = useState(SENSORY_AROMAS[0].id);
  const [selectedPressure, setSelectedPressure] = useState(PRESSURE_LEVELS[0].id);

  const currentState = BODY_STATES.find((s) => s.id === selectedState) || BODY_STATES[0];
  const currentAroma = SENSORY_AROMAS.find((a) => a.id === selectedAroma) || SENSORY_AROMAS[0];
  const currentPressure = PRESSURE_LEVELS.find((p) => p.id === selectedPressure) || PRESSURE_LEVELS[0];

  return (
    <section id="ritual-finder" className="py-20 sm:py-28 px-4 sm:px-8 bg-[#FFFFFF] border-y border-[#09318D]/15 relative overflow-hidden">
      
      {/* Decorative Blur Circles (#FD91CC Rose Pink & #09318D Royal Blue) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FD91CC]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#09318D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-script text-5xl sm:text-6xl text-[#FD91CC] font-bold block">
            Sensory Diagnostic
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-[0.18em] text-[#09318D] font-extrabold">
            Interactive Ritual Finder
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed">
            Every body speaks a different language. Select your current physical state below to generate a tailored 3-step Samariya spa journey.
          </p>
        </div>

        {/* 3-Step Diagnostic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selectors (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Body State */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#09318D] block flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#09318D] text-white text-[11px] flex items-center justify-center font-mono">1</span>
                <span>How does your body feel today?</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BODY_STATES.map((state) => {
                  const active = selectedState === state.id;
                  return (
                    <button
                      key={state.id}
                      onClick={() => setSelectedState(state.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                        active
                          ? 'bg-white border-[#FD91CC] shadow-md ring-2 ring-[#FD91CC]/40 scale-[1.01]'
                          : 'bg-white border-[#09318D]/15 hover:border-[#FD91CC]/60 hover:bg-white'
                      }`}
                    >
                      <span className="text-2xl shrink-0 mt-0.5">{state.icon}</span>
                      <div>
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-[#09318D]">
                          {state.title}
                        </h4>
                        <p className="text-[11px] text-[#38528E] leading-snug mt-1">
                          {state.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Sensory Aroma */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#09318D] block flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#09318D] text-white text-[11px] flex items-center justify-center font-mono">2</span>
                <span>Select Your Botanical Aroma Note</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SENSORY_AROMAS.map((aroma) => {
                  const active = selectedAroma === aroma.id;
                  return (
                    <button
                      key={aroma.id}
                      onClick={() => setSelectedAroma(aroma.id)}
                      className={`p-3 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                        active
                          ? 'bg-[#09318D] text-white border-[#09318D] shadow-sm'
                          : 'bg-white text-[#38528E] border-[#09318D]/15 hover:border-[#FD91CC]'
                      }`}
                    >
                      <span className={`text-[10px] uppercase font-bold tracking-wider block ${active ? 'text-[#FD91CC]' : 'text-[#09318D]'}`}>
                        {aroma.mood}
                      </span>
                      <span className="font-heading text-xs font-bold block mt-1 leading-snug">
                        {aroma.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Pressure Level */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#09318D] block flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#09318D] text-white text-[11px] flex items-center justify-center font-mono">3</span>
                <span>Desired Pressure Profile</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PRESSURE_LEVELS.map((press) => {
                  const active = selectedPressure === press.id;
                  return (
                    <button
                      key={press.id}
                      onClick={() => setSelectedPressure(press.id)}
                      className={`p-3 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                        active
                          ? 'bg-[#FD91CC] text-[#09318D] border-[#FD91CC] shadow-sm'
                          : 'bg-white text-[#38528E] border-[#09318D]/15 hover:border-[#FD91CC]'
                      }`}
                    >
                      <span className="font-heading text-xs font-black block">
                        {press.label}
                      </span>
                      <span className={`text-[10px] block mt-1 leading-tight font-medium ${active ? 'text-[#09318D]' : 'text-[#38528E]'}`}>
                        {press.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Dynamic Recommendation Card (Right 5 Columns) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#FD91CC]/60 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#09318D]/15">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FD91CC]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09318D]">
                  RECOMMENDED JOURNEY
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#09318D] bg-[#FD91CC]/25 px-2.5 py-1 rounded-full border border-[#FD91CC]/50">
                100% Bespoke
              </span>
            </div>

            {/* Core Recommendation */}
            <div className="space-y-2">
              <h3 className="font-heading text-xl sm:text-2xl font-black text-[#09318D] leading-snug">
                {currentState.recommendedMassage}
              </h3>
              <p className="text-xs text-[#38528E] font-medium">
                Infused with <strong className="text-[#09318D]">{currentAroma.name}</strong> • {currentPressure.label}
              </p>
            </div>

            {/* 3-Step Sequence */}
            <div className="space-y-3 bg-[#09318D]/5 p-4 rounded-2xl border border-[#09318D]/10">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#09318D] block">
                YOUR 3-STEP SPA JOURNEY:
              </span>

              <div className="space-y-2 text-xs text-[#38528E]">
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#09318D] text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span><strong className="text-[#09318D]">Floral Foot Soak:</strong> Warm mineral bath infused with Himalayan salt & fresh petals.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#09318D] text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span><strong className="text-[#09318D]">{currentState.recommendedMassage}:</strong> 60 minutes in a private climate-controlled suite.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#09318D] text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span><strong className="text-[#09318D]">Herbal Tea Ceremony:</strong> Organic warm tisane to restore natural hydration.</span>
                </div>
              </div>
            </div>

            {/* Pricing & Duration */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#38528E] block">
                  INVESTMENT
                </span>
                <span className="font-heading text-2xl font-black text-[#09318D]">
                  ₹{currentState.basePrice}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#09318D] bg-white px-3 py-1.5 rounded-full border border-[#09318D]/20 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#FD91CC]" /> {currentState.duration}
              </span>
            </div>

            {/* Action CTA */}
            <button
              onClick={() =>
                onOpenBooking({
                  name: `${currentState.recommendedMassage} (${currentAroma.name})`,
                  price: currentState.basePrice,
                  duration: currentState.duration,
                })
              }
              className="w-full py-4 rounded-full btn-peach text-xs font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book This Recommended Journey →</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
