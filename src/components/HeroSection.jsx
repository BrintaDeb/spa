import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock, MapPin, ShieldCheck, Droplets, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import soundscape from '../utils/soundscape';
import { useLanguage } from '../context/LanguageContext';

const SPA_VIDEOS = [
  {
    id: 'massage',
    label: 'Swedish Massage',
    subtitle: 'Therapeutic Hands-On Bodywork',
    src: '/videos/massage-treatment.mp4',
    poster: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'stones',
    label: 'Hot Basalt Stones',
    subtitle: 'Volcanic Heat & Muscle Melting',
    src: '/videos/hot-stones.mp4',
    poster: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'aromatherapy',
    label: 'Botanical Therapy',
    subtitle: 'Herbal Essential Oil Elixirs',
    src: '/videos/authentic-spa.mp4',
    poster: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
  },
];

export default function HeroSection({ onOpenBooking, onExploreAtmosphere }) {
  const { t } = useLanguage();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const videoRef = useRef(null);

  const currentVideo = SPA_VIDEOS[activeVideoIndex];

  // Auto-play when switching video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [activeVideoIndex]);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleAudio = () => {
    const active = soundscape.toggle();
    setIsAudioActive(active);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
      {/* Decorative Blur Spheres */}
      <div 
        className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#FD91CC]/20 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#09318D]/10 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Samariya Authentic Headline & Special Offer Spotlight */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
          
          {/* Signature Handwritten Script Accent */}
          <div className="inline-flex flex-col items-center lg:items-start">
            <span className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#FD91CC] leading-tight block select-none font-bold drop-shadow-xs">
              {t('heroScript')}
            </span>
            <p className="text-[#38528E] text-sm sm:text-base font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mt-2">
              {t('heroDesc')}
            </p>
          </div>

          {/* Signature Special Feature Card (₹999 Spotlight) */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border-l-4 border-[#FD91CC] border-y border-r border-[#09318D]/15 shadow-md max-w-xl mx-auto lg:mx-0 space-y-3 text-left">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09318D] block">
                {t('specialOfferBadge')}
              </span>
              <span className="text-[10px] font-mono font-bold text-[#09318D] bg-[#FD91CC]/30 px-2.5 py-1 rounded-full border border-[#FD91CC]">
                LIMITED SLOTS
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-[#09318D]">
                {t('specialOfferHeadline')}
              </span>
            </div>

            <p className="text-xs text-[#38528E] leading-relaxed">
              {t('specialOfferDesc')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-[#38528E] font-semibold border-t border-[#09318D]/15">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FD91CC]" /> 60 Minutes Duration
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FD91CC]" /> Banamalipur, Agartala
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#09318D]" /> 100% Certified Hygiene
              </span>
            </div>
          </div>

          {/* Action Buttons (Unified Height & Aligned) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <a
              href="#services"
              className="h-11 px-6 btn-espresso text-xs rounded-full shadow-sm inline-flex items-center justify-center gap-2"
            >
              <span>{t('exploreMenu')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FD91CC]" />
            </a>

            <button
              onClick={() =>
                onOpenBooking({
                  name: 'One Hour Relaxation Ritual',
                  price: 999,
                  duration: '60 MIN',
                })
              }
              className="h-11 px-7 btn-peach text-xs rounded-full shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('bookOnline')}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Genuine Authentic Spa Massage Video Showcase */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          
          {/* Main Visual Card with Arch Top */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-[#09318D] group">
            
            {/* Real Spa Massage Video Player */}
            <video
              ref={videoRef}
              key={currentVideo.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={currentVideo.poster}
              className="w-full h-full object-cover"
            >
              <source src={currentVideo.src} type="video/mp4" />
              <img
                src={currentVideo.poster}
                alt={currentVideo.subtitle}
                className="w-full h-full object-cover"
              />
            </video>

            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

            {/* Top Live Video Badge & Interactive Controls */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#09318D] text-[10px] font-black uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FD91CC] animate-pulse" />
                Live Spa Atmosphere
              </span>

              {/* Play / Pause Toggle Button */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleAudio}
                  className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer ${
                    isAudioActive
                      ? 'bg-[#FD91CC] text-[#09318D]'
                      : 'bg-black/50 hover:bg-black/70 text-white'
                  }`}
                  title="Toggle Soothing Rain & Water Droplets Soundscape"
                  aria-label="Toggle soothing rain and water droplets soundscape"
                >
                  {isAudioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={toggleVideoPlayback}
                  className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                  title={isPlaying ? "Pause Video" : "Play Video"}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                </button>
              </div>
            </div>

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
              <div className="bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-widest text-[#FD91CC] uppercase">
                    Therapy Spotlight
                  </span>
                  <span className="text-[10px] font-mono text-white/80">
                    4K Authentic Treatment
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white leading-tight">
                  {currentVideo.label}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1">
                  {currentVideo.subtitle}
                </p>
              </div>
            </div>

          </div>

          {/* Interactive 3-Button Video Selector Pills */}
          <div className="w-full max-w-sm sm:max-w-md mt-4 grid grid-cols-3 gap-2">
            {SPA_VIDEOS.map((item, index) => {
              const isActive = index === activeVideoIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveVideoIndex(index)}
                  className={`py-2 px-1 text-center rounded-xl border text-[11px] font-bold tracking-tight transition-all cursor-pointer flex flex-col items-center justify-center ${
                    isActive
                      ? 'bg-[#09318D] text-white border-[#09318D] shadow-sm'
                      : 'bg-white text-[#09318D] border-[#09318D]/20 hover:border-[#FD91CC] hover:bg-[#FD91CC]/10'
                  }`}
                >
                  <span className="truncate w-full">{item.label}</span>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
