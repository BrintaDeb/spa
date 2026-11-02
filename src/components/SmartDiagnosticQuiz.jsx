import React, { useState } from 'react';
import { Sparkles, Brain, Droplets, Clock, Wind, Sun, Snowflake, CloudRain, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const QUESTIONS = [
  {
    id: 'concern',
    stepNumber: 'I',
    title: 'What is your primary physical goal today?',
    subtitle: 'Select the focus area your body is calling for:',
    options: [
      {
        id: 'neck',
        label: 'Stiff Neck & Trapezius',
        desc: 'Shoulder tightness, scapula knots & screen fatigue',
        icon: '⚡',
        baseTreatment: 'Deep Neck & Upper Back Myofascial Therapy',
      },
      {
        id: 'glow',
        label: 'Dull Dehydrated Complexion',
        desc: 'Dry skin barrier, environmental tan & loss of radiance',
        icon: '✨',
        baseTreatment: 'Festive 24K Gold Cellular Radiance Facial',
      },
      {
        id: 'scalp',
        label: 'Hair Breakage & Scalp Stress',
        desc: 'Tight scalp, follicle fatigue & pollution buildup',
        icon: '🌿',
        baseTreatment: 'Botanical Hair & Scalp Ozone Therapy',
      },
      {
        id: 'calm',
        label: 'Pure Full Body Relaxation',
        desc: 'Autonomic nervous exhaustion & restorative tranquility',
        icon: '🌸',
        baseTreatment: 'One Hour Swedish Full Body Relaxation',
      },
    ],
  },
  {
    id: 'sensitivity',
    stepNumber: 'II',
    title: 'Desired Pressure & Touch Sensitivity',
    subtitle: 'How firm would you like your therapist to work?',
    options: [
      {
        id: 'gentle',
        label: 'Gentle Flow (Light)',
        desc: 'Calming effleurage strokes for autonomic ease',
        oilNote: 'French Lavender & Roman Chamomile',
      },
      {
        id: 'moderate',
        label: 'Moderate Decompression',
        desc: 'Balanced medium pressure targeting muscular knots',
        oilNote: 'Mysore Sandalwood & Sweet Orange',
      },
      {
        id: 'deep',
        label: 'Deep Structural (Firm)',
        desc: 'Intense trigger-point myofascial tension release',
        oilNote: 'Nilgiri Eucalyptus, Frankincense & Black Pepper',
      },
    ],
  },
  {
    id: 'duration',
    stepNumber: 'III',
    title: 'Ideal Session Duration',
    subtitle: 'How much time can you dedicate to your wellbeing?',
    options: [
      {
        id: '45',
        label: 'Express Relief (45 Min)',
        desc: 'Focused targeted recovery for busy schedules',
        price: 799,
        duration: '45 MIN',
      },
      {
        id: '60',
        label: 'Classic Sanctuary (60 Min)',
        desc: 'Our signature full-body comprehensive ritual (Offer @ ₹999)',
        price: 999,
        duration: '60 MIN',
        recommended: true,
      },
      {
        id: '90',
        label: 'Immersive Luxury (90 Min)',
        desc: 'Complete unhurried immersion with scalp & foot therapy',
        price: 1499,
        duration: '90 MIN',
      },
    ],
  },
  {
    id: 'climate',
    stepNumber: 'IV',
    title: 'Agartala Seasonal Climate Factor',
    subtitle: 'Contextual botanical recommendation for Tripura’s weather:',
    options: [
      {
        id: 'winter',
        label: 'Tripura Mild Winter / Dry Season',
        desc: 'Cold breeze & dry skin → Warm Sweet Almond & Heated Basalt Stones',
        climateAddon: 'Warm Basalt Compression + Barrier Lipid Seal',
        icon: Snowflake,
      },
      {
        id: 'monsoon',
        label: 'Tripura Monsoon / Humid Dampness',
        desc: 'High humidity & body heaviness → Nilgiri Eucalyptus Steam & Clay Detox',
        climateAddon: 'Volumetric Herbal Steam + Cooling Foot Soak',
        icon: CloudRain,
      },
      {
        id: 'summer',
        label: 'Tripura Sunny Summer Warmth',
        desc: 'Heat exhaustion & sun exposure → Chilled Aloe Vera & Cucumber Mist',
        climateAddon: 'Cold Marble Stone De-puffing + Mint Inhalation',
        icon: Sun,
      },
    ],
  },
];

export default function SmartDiagnosticQuiz({ onOpenBooking }) {
  const { t } = useLanguage();
  const { isTwilight } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    concern: 'calm',
    sensitivity: 'moderate',
    duration: '60',
    climate: 'winter',
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (questionId, optionId) => {
    const updated = { ...answers, [questionId]: optionId };
    setAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Compute recommendation
  const concernObj = QUESTIONS[0].options.find((o) => o.id === answers.concern);
  const sensitivityObj = QUESTIONS[1].options.find((o) => o.id === answers.sensitivity);
  const durationObj = QUESTIONS[2].options.find((o) => o.id === answers.duration);
  const climateObj = QUESTIONS[3].options.find((o) => o.id === answers.climate);

  const protocolTitle = `${concernObj?.baseTreatment || 'Bespoke Spa Ritual'}`;
  const price = durationObj?.price || 999;
  const duration = durationObj?.duration || '60 MIN';

  return (
    <section id="diagnostic-quiz" className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-400 relative overflow-hidden ${
      isTwilight
        ? 'bg-[#041544] border-[#FD91CC]/20 text-[#F8FAFE]'
        : 'bg-[#FFFFFF] border-[#09318D]/15 text-[#09318D]'
    }`}>
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FD91CC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#09318D]/20 text-[#09318D] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
            <Brain className="w-3.5 h-3.5 text-[#FD91CC]" />
            <span>30-Second Sensory Consultation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Smart Skin & Body <span className="font-serif italic text-[#FD91CC] font-bold">Diagnostic Quiz</span>
          </h2>
          <p className={`text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto ${
            isTwilight ? 'text-white/80' : 'text-[#38528E]'
          }`}>
            {t('quizSubtitle')}
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className={`rounded-3xl border-2 shadow-2xl p-6 sm:p-10 transition-all ${
          isTwilight
            ? 'bg-[#071c56]/85 border-[#FD91CC]/30 text-white backdrop-blur-md'
            : 'bg-white border-[#09318D]/15'
        }`}>
          
          {!isCompleted ? (
            <div className="space-y-8">
              
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#09318D] text-[#FD91CC] border border-[#FD91CC]/50 text-xs font-bold flex items-center justify-center font-roman shadow-sm">
                    {QUESTIONS[currentStep].stepNumber}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest">
                    Phase {QUESTIONS[currentStep].stepNumber} of IV
                  </span>
                </div>

                {/* Progress Dots */}
                <div className="flex items-center gap-1.5">
                  {QUESTIONS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentStep
                          ? 'w-8 bg-[#09318D]'
                          : idx < currentStep
                          ? 'w-3 bg-[#FD91CC]'
                          : 'w-2 bg-[#09318D]/20'
                      }`}
                      aria-label={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Current Question Title */}
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#09318D]">
                  {QUESTIONS[currentStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#38528E] mt-1 font-medium">
                  {QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {QUESTIONS[currentStep].options.map((opt) => {
                  const isSelected = answers[QUESTIONS[currentStep].id] === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(QUESTIONS[currentStep].id, opt.id)}
                      className={`p-5 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#FD91CC] bg-[#FD91CC]/10 shadow-md ring-2 ring-[#FD91CC]/30 scale-[1.01]'
                          : 'border-[#09318D]/15 bg-white hover:border-[#09318D]/40'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xl">
                            {typeof opt.icon === 'string' ? opt.icon : (Icon && <Icon className="w-5 h-5 text-[#09318D]" />)}
                          </span>
                          {opt.recommended && (
                            <span className="text-[10px] uppercase font-black tracking-widest text-[#09318D] bg-[#FD91CC]/30 border border-[#FD91CC] px-2 py-0.5 rounded-full">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <h4 className="font-heading font-black text-sm sm:text-base text-[#09318D]">
                          {opt.label}
                        </h4>
                        <p className="text-xs text-[#38528E] leading-relaxed font-medium">
                          {opt.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#09318D]/10 flex items-center justify-between">
                        {opt.price ? (
                          <span className="font-mono font-bold text-sm text-[#09318D]">₹{opt.price}</span>
                        ) : (
                          <span className="text-[10px] uppercase font-bold text-[#38528E]">Tailored Blend</span>
                        )}
                        <span className={`text-[10px] font-black uppercase tracking-wider ${isSelected ? 'text-[#09318D]' : 'text-stone-400'}`}>
                          {isSelected ? '✓ Selected' : 'Choose →'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`text-xs font-bold uppercase tracking-wider ${
                    currentStep === 0 ? 'opacity-30 cursor-not-allowed text-[#38528E]' : 'text-[#09318D] hover:underline cursor-pointer'
                  }`}
                >
                  ← Previous Step
                </button>

                <span className="text-xs text-[#38528E] font-medium font-mono">
                  Banamalipur Sanctuary Formulation
                </span>
              </div>

            </div>
          ) : (
            /* Diagnostic Results Card */
            <div className="space-y-8 animate-fadeIn">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#09318D]/15">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#FD91CC]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09318D]">
                      YOUR BESPOKE DIAGNOSTIC PROTOCOL
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#09318D]">
                    {protocolTitle}
                  </h3>
                </div>

                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-full border border-[#09318D]/20 hover:border-[#FD91CC] text-xs font-bold text-[#09318D] inline-flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              {/* 3 Pill Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* 1. Essential Oil Elixir */}
                <div className="p-4 rounded-2xl bg-[#09318D]/5 border border-[#09318D]/15 space-y-1.5">
                  <span className="text-[10px] uppercase font-black text-[#FD91CC] tracking-wider block">
                    CUSTOM AROMA ELIXIR
                  </span>
                  <span className="font-heading font-black text-sm text-[#09318D] block">
                    {sensitivityObj?.oilNote}
                  </span>
                  <p className="text-[11px] text-[#38528E]">
                    Cold-pressed therapeutic botanical carrier with organic essential extracts.
                  </p>
                </div>

                {/* 2. Tripura Seasonal Climate Note */}
                <div className="p-4 rounded-2xl bg-[#09318D]/5 border border-[#09318D]/15 space-y-1.5">
                  <span className="text-[10px] uppercase font-black text-[#FD91CC] tracking-wider block">
                    AGARTALA CLIMATE ADAPTATION
                  </span>
                  <span className="font-heading font-black text-sm text-[#09318D] block">
                    {climateObj?.climateAddon}
                  </span>
                  <p className="text-[11px] text-[#38528E]">
                    Compensates for local Tripura humidity & temperature variations.
                  </p>
                </div>

                {/* 3. Session Duration & Pricing */}
                <div className="p-4 rounded-2xl bg-[#FD91CC]/20 border border-[#FD91CC]/60 space-y-1.5">
                  <span className="text-[10px] uppercase font-black text-[#09318D] tracking-wider block">
                    TREATMENT INVESTMENT
                  </span>
                  <span className="font-heading font-black text-2xl text-[#09318D] block">
                    ₹{price} <span className="text-xs font-mono font-medium">({duration})</span>
                  </span>
                  <p className="text-[11px] text-[#09318D] font-medium">
                    Includes private sanitized suite, organic tea & disposable linens.
                  </p>
                </div>

              </div>

              {/* Reservation CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#38528E] font-medium text-center sm:text-left">
                  <p>Certified therapist protocols • Pay at salon • Zero cancellation fee</p>
                  <p className="text-[#09318D] font-bold mt-0.5">Banamalipur Sanctuary (Near S22 Cafe)</p>
                </div>

                <button
                  onClick={() =>
                    onOpenBooking({
                      name: `${protocolTitle} (${duration})`,
                      price: price,
                      duration: duration,
                    })
                  }
                  className="w-full sm:w-auto px-8 py-4 rounded-full btn-peach text-xs font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book This Bespoke Journey →</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

