import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import WaterRippleCanvas from './components/WaterRippleCanvas';
import Navbar from './components/Navbar';
import RescheduleBar from './components/RescheduleBar';
import HeroSection from './components/HeroSection';
import StoryHighlights from './components/StoryHighlights';
import MarqueeRibbon from './components/MarqueeRibbon';
import SmartDiagnosticQuiz from './components/SmartDiagnosticQuiz';
import BundleBuilder from './components/BundleBuilder';
import SlotAvailability from './components/SlotAvailability';
import SpaVideoAtmosphere from './components/SpaVideoAtmosphere';
import RitualFinder from './components/RitualFinder';
import SanctuaryTour from './components/SanctuaryTour';
import TreatmentMenu from './components/TreatmentMenu';
import CouplesSuite from './components/CouplesSuite';
import MembershipSection from './components/MembershipSection';
import SanctuaryPassport from './components/SanctuaryPassport';
import FloatingConciergePill from './components/FloatingConciergePill';
import GiftCardsSection from './components/GiftCardsSection';
import FaqSection from './components/FaqSection';
import LocationTravelEstimator from './components/LocationTravelEstimator';
import QuotesReviews from './components/QuotesReviews';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import BookingDrawer from './components/BookingDrawer';

function SpaAppContent() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingData(data);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const { isTwilight } = useTheme();

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${isTwilight ? 'bg-[#041544] text-[#F8FAFE]' : 'bg-[#FFFFFF] text-[#09318D]'} selection:bg-[#FD91CC]/30 selection:text-[#09318D]`}>
      
      {/* 1. Global 60fps Interactive Water Ripple Canvas */}
      <WaterRippleCanvas />

      {/* 2. Floating Header Navigation with Multilingual Switcher (EN | বাংলা) */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 3. Welcome & Reschedule Advisory Bar */}
      <RescheduleBar />

      <main className="relative z-10">
        {/* 4. Asymmetrical Overlapping Hero ("Your Serenity Awaits" + Video Atmosphere) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onExploreAtmosphere={() => {
            const el = document.getElementById('atmosphere');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Verified Guest Story Highlights (Instagram / Luxury Spa Bubble Tray) */}
        <StoryHighlights onOpenBooking={handleOpenBooking} />

        {/* 6. Infinite Running Kinetic Marquee Ribbon #1 */}
        <MarqueeRibbon
          bg="bg-[#09318D]"
          textColor="text-white"
          text={
            <>
              <span className="mx-6 text-[#FD91CC] font-bold">★ SPECIAL INTRODUCTORY OFFER: ONE HOUR FULL BODY RELAXATION @ ₹999 ONLY</span>
              <span className="mx-6">★ FESTIVE 24K GOLD RADIANCE FACIALS</span>
              <span className="mx-6 text-[#FD91CC]">★ SAMARIYA BEAUTY SPA & FAMILY SALON</span>
              <span className="mx-6">★ APPOINTMENTS: +91 9366217621</span>
              <span className="mx-6 text-[#FD91CC]">★ BANAMALIPUR, AGARTALA (NEAR S22 CAFE)</span>
            </>
          }
        />

        {/* 7. Smart Skin & Body Diagnostic Quiz (30-Sec Recommendation + Agartala Climate Advisory) */}
        <div id="diagnostic-quiz">
          <SmartDiagnosticQuiz onOpenBooking={handleOpenBooking} />
        </div>

        {/* 8. Custom Spa Day Bundle Builder (Interactive Mix & Match with 10%-15% Dynamic Discount) */}
        <div id="bundle-builder">
          <BundleBuilder onOpenBooking={handleOpenBooking} />
        </div>

        {/* 9. Live Daily Slot Availability Indicator (Morning Zen, Afternoon Renewal, Evening Twilight) */}
        <div id="availability">
          <SlotAvailability onOpenBooking={handleOpenBooking} />
        </div>

        {/* 10. Flagship Generated Spa Video & Atmospheric Effects Studio */}
        <div id="atmosphere">
          <SpaVideoAtmosphere onOpenBooking={handleOpenBooking} />
        </div>

        {/* 11. Interactive Sensory Diagnostic Ritual Builder (Custom Journey) */}
        <div id="ritual-finder">
          <RitualFinder onOpenBooking={handleOpenBooking} />
        </div>

        {/* 12. Interactive 4-Chamber Floorplan & Microclimate Sanctuary Tour */}
        <div id="sanctuary">
          <SanctuaryTour onOpenBooking={handleOpenBooking} />
        </div>

        {/* 13. Curated Services & Pricing Menu (Massage, Facials, Hair Spa, Nails) */}
        <div id="services">
          <TreatmentMenu onOpenBooking={handleOpenBooking} />
        </div>

        {/* 14. "Perfect for Couples!" Dedicated VIP Suite Showcase */}
        <div id="couples">
          <CouplesSuite onOpenBooking={handleOpenBooking} />
        </div>

        {/* 15. VIP Wellness Membership Tiers ("Aura Club" Silver, Gold, Royal Couples) */}
        <div id="membership">
          <MembershipSection onOpenBooking={handleOpenBooking} />
        </div>

        {/* 15b. Digital VIP "Sanctuary Passport" (Guest Loyalty Stamps) */}
        <div id="loyalty-passport">
          <SanctuaryPassport onOpenBooking={handleOpenBooking} />
        </div>

        {/* 16. Infinite Running Kinetic Marquee Ribbon #2 (Call to Book Ticker) */}
        <MarqueeRibbon
          bg="bg-[#FD91CC]"
          textColor="text-[#09318D]"
          text={
            <>
              <span className="mx-6 font-bold">★ CALL TO BOOK: (9366) 217-621</span>
              <span className="mx-6 font-semibold">BHOGOWAN THAKUR CHOWMUHANI, BANAMALIPUR</span>
              <span className="mx-6 font-bold">★ CALL TO BOOK: +91 9366217621</span>
              <span className="mx-6 font-semibold">OPEN 7 DAYS A WEEK: 10AM – 8:30PM</span>
              <span className="mx-6 font-bold">★ SAMARIYA BEAUTY SPA & FAMILY SALON</span>
            </>
          }
        />

        {/* 17. Digital Gift Certificates Section */}
        <div id="gift-cards">
          <GiftCardsSection onOpenBooking={handleOpenBooking} />
        </div>

        {/* 18. Pre-Treatment FAQ & Guest Etiquette Guide (Agartala-Tailored) */}
        <div id="faq">
          <FaqSection onOpenBooking={handleOpenBooking} />
        </div>

        {/* 19. Interactive Agartala Transit Distance & Landmark Travel Time Estimator */}
        <div id="location">
          <LocationTravelEstimator />
        </div>

        {/* 20. Verified Testimonials & Quotes Carousel */}
        <div id="reviews">
          <QuotesReviews />
        </div>
      </main>

      {/* 21. Structured 4-Column Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 22. Mobile Bottom Dock (Android & iOS Safe Area Optimized) */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* 22b. Floating Live Concierge Pill with Real-Time Reception Status */}
      <FloatingConciergePill />

      {/* 23. Slide-out Reservation Concierge Drawer */}
      <BookingDrawer
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialData={bookingData}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SpaAppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
