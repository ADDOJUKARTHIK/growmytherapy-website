import Navbar from "@/components/Navbar";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Frequently Asked Questions | Dr. Maya Reynolds, PsyD - Santa Monica, CA",
  description:
    "Find answers to common questions about Dr. Maya Reynolds' psychology practice, specialties, Santa Monica office location, modalities, and telehealth across California.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <Navbar />
      <main className="flex-grow pt-10">
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
}
