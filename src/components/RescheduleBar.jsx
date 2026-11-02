import React from 'react';
import { CalendarClock, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function RescheduleBar() {
  const { t } = useLanguage();
  const { isTwilight } = useTheme();

  return (
    <div className={`border-b py-2 sm:py-2.5 px-4 sm:px-6 lg:px-8 transition-colors duration-400 ${
      isTwilight
        ? 'bg-[#051c5b] border-[#FD91CC]/20 text-[#F8FAFE]'
        : 'bg-[#FFFFFF] border-[#09318D]/15 text-[#09318D]'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
        
        {/* Left: Signature Handwritten Script Accent */}
        <div className="flex items-center gap-2 shrink-0">
          <CalendarClock className="w-4 h-4 text-[#FD91CC]" />
          <span className="font-script text-2xl sm:text-3xl text-[#FD91CC] leading-none select-none font-bold">
            {t('reschedulePrompt')}
          </span>
        </div>

        {/* Right: Streamlined Client Advisory */}
        <div className={`text-[11.5px] sm:text-xs leading-relaxed flex flex-wrap items-center justify-center sm:justify-end gap-x-2 gap-y-1 ${
          isTwilight ? 'text-white/80' : 'text-[#38528E]'
        }`}>
          <span>{t('rescheduleAdvisory')}</span>
        </div>

      </div>
    </div>
  );
}
