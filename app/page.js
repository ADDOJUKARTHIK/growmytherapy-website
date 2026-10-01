import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HopeSection from "@/components/HopeSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import HowWeWork from "@/components/HowWeWork";
import HonoringBanner from "@/components/HonoringBanner";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import QuoteBanner from "@/components/QuoteBanner";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal w-full overflow-x-hidden">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* Section 1: Hero (Step 8) */}
        <Hero />

        {/* Section 2: Introduction / Slow Down (Step 9) */}
        <HopeSection />

        {/* Section 3: Services / Areas of Support (Step 10) */}
        <WhoWeHelp />

        {/* Section 4: My Approach (Step 11) */}
        <AreasOfExpertise />

        {/* Section 5: Meet Dr. Maya Reynolds (Step 12) */}
        <HowWeWork />

        {/* Section 6: The Space / Office (Step 13) */}
        <HonoringBanner />

        {/* Section 7: Practice Location & Telehealth (Step 14) */}
        <SpecialtiesSection />

        {/* Section 8: Philosophy / Closing CTA Statement (Step 15) */}
        <QuoteBanner />

        {/* Section 9: FAQ Accordion & Booking CTA (Step 16) */}
        <AppointmentSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
