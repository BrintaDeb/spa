import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Volume2, VolumeX, Sparkles, Languages, CloudRain, Droplets } from 'lucide-react';
import soundscape from '../utils/soundscape';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenBooking }) {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const checkState = () => {
      setIsPlayingAudio(soundscape.isPlaying);
    };
    const interval = setInterval(checkState, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const active = soundscape.toggle();
    setIsPlayingAudio(active);
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'bn' : 'en');
  };

  // Streamlined desktop links to prevent overflow & wrapping
  const desktopLinks = [
    { label: t('nav_quiz'), href: '#diagnostic-quiz', highlight: true },
    { label: t('nav_bundles'), href: '#bundle-builder' },
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_slots'), href: '#availability' },
    { label: t('nav_memberships'), href: '#membership' },
    { label: t('nav_faq'), href: '#faq' },
    { label: t('nav_location'), href: '#location' },
  ];

  // Full detailed links for mobile drawer
  const mobileLinks = [
    { label: t('nav_quiz'), href: '#diagnostic-quiz', highlight: true, badge: 'Smart Diagnostic' },
    { label: t('nav_bundles'), href: '#bundle-builder', badge: 'Save 15%' },
    { label: t('nav_slots'), href: '#availability', badge: 'Live Slots' },
    { label: t('nav_memberships'), href: '#membership', badge: 'VIP Pass' },
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_atmosphere'), href: '#atmosphere' },
    { label: t('nav_couples'), href: '#couples' },
    { label: t('nav_faq'), href: '#faq' },
    { label: t('nav_location'), href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#09318D]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Crest Logo & Stylized Name */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#FD91CC] shadow-xs transition-transform duration-300 group-hover:scale-105 bg-white shrink-0 flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Samariya Beauty Spa & Family Salon Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-heading text-sm sm:text-base font-black uppercase tracking-[0.16em] text-[#09318D] leading-none">
              SAMARIYA
            </span>
            <span className="text-[8px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.22em] text-[#FD91CC] leading-none mt-1">
              BEAUTY SPA & SALON
            </span>
          </div>
        </a>

        {/* Desktop Navigation Anchors */}
        <nav className="hidden xl:flex items-center gap-1">
          {desktopLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[11px] font-bold tracking-[0.08em] uppercase px-2.5 py-1.5 rounded-full transition-colors flex items-center gap-1 whitespace-nowrap ${
                link.highlight
                  ? 'text-[#09318D] bg-[#FD91CC]/25 hover:bg-[#FD91CC]/40 border border-[#FD91CC]/50'
                  : 'text-[#09318D] hover:text-[#FD91CC] hover:bg-[#09318D]/5'
              }`}
            >
              {link.highlight && <Sparkles className="w-3 h-3 text-[#09318D]" />}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          
          {/* Language Switcher Pill (EN ↔ বাংলা) */}
          <button
            onClick={toggleLanguage}
            className="h-[38px] px-3 rounded-full border border-[#09318D]/20 hover:border-[#FD91CC] bg-white text-[#09318D] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            title="Switch Language / ভাষা পরিবর্তন করুন"
            aria-label="Toggle language between English and Bengali"
          >
            <Languages className="w-3.5 h-3.5 text-[#09318D]" />
            <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
          </button>

          {/* Soothing Rain & Water Droplets Audio Visualizer Button */}
          <button
            onClick={toggleSound}
            className={`h-[38px] px-3 rounded-full border transition-all flex items-center gap-2 cursor-pointer text-xs font-bold uppercase tracking-wider shrink-0 ${
              isPlayingAudio
                ? 'bg-[#FD91CC] text-[#09318D] border-[#FD91CC] shadow-xs'
                : 'bg-white text-[#09318D] border-[#09318D]/20 hover:border-[#FD91CC]'
            }`}
            title="Toggle Soothing Rain & Water Droplets Soundscape"
            aria-label="Toggle soothing rain and water droplets soundscape"
          >
            {isPlayingAudio ? (
              <>
                <div className="flex items-end gap-0.5 h-3 px-0.5" aria-hidden="true">
                  <span className="w-0.5 bg-[#09318D] rounded-full animate-wave-1" />
                  <span className="w-0.5 bg-[#09318D] rounded-full animate-wave-2" />
                  <span className="w-0.5 bg-[#09318D] rounded-full animate-wave-3" />
                  <span className="w-0.5 bg-[#09318D] rounded-full animate-wave-4" />
                </div>
                <span className="text-[10px] font-bold">Rain & Drops</span>
              </>
            ) : (
              <>
                <Droplets className="w-3.5 h-3.5 text-[#09318D]" />
                <span className="text-[10px] font-bold">Rain & Drops</span>
              </>
            )}
          </button>

          {/* Direct Phone Call Button */}
          <a
            href="tel:9366217621"
            className="w-[38px] h-[38px] rounded-full bg-white border border-[#09318D]/20 text-[#09318D] hover:text-[#FD91CC] hover:border-[#FD91CC] transition-colors flex items-center justify-center shrink-0"
            title="Call Reception: +91 9366217621"
            aria-label="Call +91 9366217621"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Book Online Pill CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="h-[38px] px-5 rounded-full btn-peach text-[11px] font-extrabold uppercase tracking-widest shadow-xs flex items-center justify-center cursor-pointer shrink-0 whitespace-nowrap"
          >
            {t('btn_book_now')} →
          </button>
        </div>

        {/* Mobile Header Controls (< 1024px) */}
        <div className="flex lg:hidden items-center gap-1.5">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="h-9 px-2.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-[11px] font-bold flex items-center gap-1"
            aria-label="Switch Language"
          >
            <Languages className="w-3 h-3 text-[#09318D]" />
            <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>

          {/* Soothing Rain & Water Droplets Audio Toggle */}
          <button
            onClick={toggleSound}
            className={`w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer shrink-0 ${
              isPlayingAudio
                ? 'bg-[#FD91CC] text-[#09318D] border-[#FD91CC]'
                : 'bg-white text-[#09318D] border-[#09318D]/20'
            }`}
            title="Toggle Soothing Rain & Water Droplets"
            aria-label="Toggle soothing rain and water droplets soundscape"
          >
            {isPlayingAudio ? (
              <div className="flex items-end gap-0.5 h-2.5 px-0.5" aria-hidden="true">
                <span className="w-0.5 bg-[#09318D] rounded-full animate-wave-1" />
                <span className="w-0.5 bg-[#09318D] rounded-full animate-wave-2" />
                <span className="w-0.5 bg-[#09318D] rounded-full animate-wave-3" />
                <span className="w-0.5 bg-[#09318D] rounded-full animate-wave-4" />
              </div>
            ) : (
              <Droplets className="w-3.5 h-3.5 text-[#09318D]" />
            )}
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-xl bg-white border border-[#09318D]/20 text-[#09318D] flex items-center justify-center cursor-pointer shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#09318D]/15 px-6 py-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {mobileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm uppercase font-bold tracking-[0.14em] py-2.5 border-b border-[#09318D]/10 flex items-center justify-between min-h-[46px] ${
                  link.highlight ? 'text-[#09318D] font-extrabold' : 'text-[#09318D]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-[#FD91CC]/30 text-[#09318D] px-2 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking({ name: 'One Hour Relaxation Ritual', price: 999, duration: '60 MIN' });
              }}
              className="w-full py-4 rounded-full btn-peach text-xs text-center font-bold tracking-widest shadow-md min-h-[46px]"
            >
              Book @ ₹999 (Special Offer)
            </button>

            <a
              href="tel:9366217621"
              className="w-full py-3.5 rounded-full bg-white border border-[#09318D]/20 text-[#09318D] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 min-h-[46px]"
            >
              <Phone className="w-4 h-4 text-[#FD91CC]" />
              <span>Call Reception: +91 9366217621</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
