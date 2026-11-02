import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, CheckCircle2, Heart, Volume2, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORIES = [
  {
    id: 'deep-tissue',
    name: 'Debolina Datta',
    location: 'Banamalipur, Agartala',
    treatment: 'Deep Tissue & Basalt Stone Therapy',
    price: 1899,
    duration: '60 MIN',
    tag: 'Tension Relief',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Sitting at my IT desk all week had locked my trapezius muscles. The certified therapist pinpointed the exact trigger points with hot basalt stones. Felt 10kg lighter walking out!',
    verifiedDate: 'Yesterday',
    rating: 5,
  },
  {
    id: 'couples-suite',
    name: 'Rajesh & Sanchita',
    location: 'Ramnagar, Agartala',
    treatment: 'VIP Candlelight Couples Harmony',
    price: 3499,
    duration: '90 MIN',
    tag: 'Anniversary Special',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    quote: 'We booked the private suite for our 4th wedding anniversary. Rose petals, lemongrass aroma mist, and warm almond oil. Pure serene bliss right here in Agartala near S22 Cafe.',
    verifiedDate: '3 days ago',
    rating: 5,
  },
  {
    id: 'gold-facial',
    name: 'Priyanka Saha',
    location: 'Radhanagar, Agartala',
    treatment: '24K Gold Radiance Facial',
    price: 2499,
    duration: '75 MIN',
    tag: 'Bridal Glow',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'Got the 24K Gold facial before family festivities. The lymphatic drainage massage and cold jade roller depuffed my face completely. Still glowing days later without makeup!',
    verifiedDate: '4 days ago',
    rating: 5,
  },
  {
    id: 'scalp-therapy',
    name: 'Amitabha Bhattacharya',
    location: 'Kunjaban, Agartala',
    treatment: 'Botanical Hair & Scalp Restoration',
    price: 1499,
    duration: '45 MIN',
    tag: 'Stress Detox',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'The warm herbal oil drip and acupressure scalp massage melted away my migraine pressure. Cleanest salon hygiene in Tripura and warm Kashmiri Kahwa tea served afterwards.',
    verifiedDate: '5 days ago',
    rating: 5,
  },
  {
    id: 'relaxation-999',
    name: 'Soumik Roy',
    location: 'Melarmath, Agartala',
    treatment: 'Signature Relaxation Body Therapy',
    price: 999,
    duration: '60 MIN',
    tag: '₹999 Signature Offer',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Was skeptical about a full 60-minute body session for only ₹999, but the experience exceeded 5-star hotel spas. Disinfected robes, dim lighting, soft flute music, and top-tier professionalism.',
    verifiedDate: '1 week ago',
    rating: 5,
  },
];

export default function StoryHighlights({ onOpenBooking }) {
  const { t } = useLanguage();
  const [activeStoryIdx, setActiveStoryIdx] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressTimerRef = useRef(null);

  const openStory = (idx) => {
    setActiveStoryIdx(idx);
    setProgress(0);
    setIsPaused(false);
  };

  const closeStory = () => {
    setActiveStoryIdx(null);
    setProgress(0);
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
  };

  const nextStory = () => {
    if (activeStoryIdx !== null) {
      if (activeStoryIdx < STORIES.length - 1) {
        setActiveStoryIdx(activeStoryIdx + 1);
        setProgress(0);
      } else {
        closeStory();
      }
    }
  };

  const prevStory = () => {
    if (activeStoryIdx !== null) {
      if (activeStoryIdx > 0) {
        setActiveStoryIdx(activeStoryIdx - 1);
        setProgress(0);
      } else {
        setProgress(0);
      }
    }
  };

  // Keyboard navigation & auto-progress
  useEffect(() => {
    if (activeStoryIdx === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeStory();
      if (e.key === 'ArrowRight') nextStory();
      if (e.key === 'ArrowLeft') prevStory();
    };
    window.addEventListener('keydown', handleKeyDown);

    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    if (!isPaused) {
      const stepMs = 50; // update interval
      const totalDuration = 6000; // 6 seconds per story
      const stepPercent = (stepMs / totalDuration) * 100;

      progressTimerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextStory();
            return 0;
          }
          return prev + stepPercent;
        });
      }, stepMs);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [activeStoryIdx, isPaused]);

  const current = activeStoryIdx !== null ? STORIES[activeStoryIdx] : null;

  return (
    <section className="py-6 sm:py-8 bg-[#FFFFFF] border-b border-[#09318D]/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FD91CC] animate-ping" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[#09318D]">
              {t('story_title')}
            </h3>
          </div>
          <span className="text-[11px] text-[#09318D]/60 font-semibold hidden sm:inline-block">
            {t('story_subtitle')}
          </span>
        </div>

        {/* Story Highlights Horizontal Tray */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
          {STORIES.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => openStory(idx)}
              className="group flex flex-col items-center gap-2 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FD91CC] rounded-xl p-1 transition-transform active:scale-95"
            >
              {/* Outer Gradient Ring */}
              <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-[#09318D] via-[#FD91CC] to-[#09318D] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <div className="p-0.5 bg-white rounded-full">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Verified Mini Badge */}
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#09318D] fill-[#FD91CC]" />
                </div>
              </div>

              {/* Story Guest Name & Tag */}
              <div className="text-center w-20 sm:w-24">
                <p className="text-[11px] font-bold text-[#09318D] truncate group-hover:text-[#FD91CC] transition-colors">
                  {story.name.split(' ')[0]}
                </p>
                <p className="text-[9px] text-[#09318D]/60 font-medium truncate">
                  {story.tag}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Story Viewer Popup Modal */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in"
          onClick={closeStory}
        >
          <div
            className="relative w-full max-w-md h-[90vh] max-h-[720px] bg-[#09318D] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between border-2 border-[#FD91CC]/30 text-white select-none"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Background Story Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={current.image}
                alt={current.treatment}
                className="w-full h-full object-cover brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09318D] via-[#09318D]/40 to-black/60" />
            </div>

            {/* Top Navigation & Progress Bars */}
            <div className="relative z-10 p-4 space-y-3">
              {/* Progress Segment Bars */}
              <div className="flex items-center gap-1.5">
                {STORIES.map((s, idx) => (
                  <div
                    key={s.id}
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                  >
                    <div
                      className="h-full bg-[#FD91CC] transition-all duration-75"
                      style={{
                        width:
                          idx < activeStoryIdx
                            ? '100%'
                            : idx === activeStoryIdx
                            ? `${progress}%`
                            : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Story Author & Close */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-10 h-10 rounded-full border-2 border-[#FD91CC] object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-white leading-tight">
                        {current.name}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FD91CC] fill-[#FD91CC]" />
                    </div>
                    <p className="text-[10px] text-white/80 font-medium">
                      {current.location} • {current.verifiedDate}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeStory}
                  className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Story"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tap Left/Right Navigation zones */}
            <div className="absolute inset-y-16 inset-x-0 z-10 flex">
              <div
                className="w-1/3 h-full cursor-pointer"
                onClick={prevStory}
                title="Previous Story"
              />
              <div
                className="w-2/3 h-full cursor-pointer"
                onClick={nextStory}
                title="Next Story"
              />
            </div>

            {/* Bottom Content Card */}
            <div className="relative z-20 p-5 bg-gradient-to-t from-[#09318D] via-[#09318D]/95 to-transparent space-y-3.5">
              {/* Star Rating & Tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FD91CC] fill-[#FD91CC]" />
                  ))}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-[#FD91CC] text-[#09318D] px-2.5 py-1 rounded-full">
                  {current.tag}
                </span>
              </div>

              {/* Treatment Name & Pricing */}
              <div>
                <h4 className="font-heading text-lg font-bold text-white leading-tight">
                  {current.treatment}
                </h4>
                <p className="text-xs text-[#FD91CC] font-semibold mt-0.5">
                  ₹{current.price} • {current.duration}
                </p>
              </div>

              {/* Guest Quote */}
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic bg-white/10 p-3 rounded-2xl backdrop-blur-xs border border-white/15">
                "{current.quote}"
              </p>

              {/* Book This Ritual CTA */}
              <div className="pt-1 flex items-center gap-2">
                <button
                  onClick={() => {
                    closeStory();
                    onOpenBooking({
                      name: current.treatment,
                      price: current.price,
                      duration: current.duration,
                    });
                  }}
                  className="flex-1 py-3 px-4 rounded-full bg-[#FD91CC] text-[#09318D] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#09318D]" />
                  <span>Book This Experience</span>
                </button>

                <button
                  onClick={prevStory}
                  disabled={activeStoryIdx === 0}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-30 text-white flex items-center justify-center shrink-0 cursor-pointer"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStory}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center shrink-0 cursor-pointer"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

