import Link from "next/link";
import Image from "next/image";
import { MapPin, Video, ArrowRight } from "lucide-react";

export default function SpecialtiesSection() {
  return (
    <section className="bg-ivory py-16 sm:py-24 md:py-32 border-b border-borderNeutral/50 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-[840px] mb-12 sm:mb-16 md:mb-20">
          <div className="mb-4 sm:mb-5 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-forest"></span>
            <p className="eyebrow-text">
              PRACTICE LOCATION &amp; TELEHEALTH
            </p>
          </div>
          <h2 className="font-cormorant text-[32px] sm:text-[42px] lg:text-[52px] font-light leading-[1.14] text-charcoal tracking-[-0.015em] mb-5 sm:mb-6">
            In-person therapy in Santa Monica. Secure telehealth across California.
          </h2>
          <p className="font-manrope text-[15px] sm:text-lg leading-[1.75] text-charcoal/80">
            Dr. Maya Reynolds offers in-person therapy from her quiet, private Santa Monica office, as well as secure telehealth sessions for clients located throughout California.
          </p>
        </div>

        {/* Two Practice Format Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Card 1: In-Person Therapy */}
          <div className="bg-[#FAF8F4] p-6 sm:p-10 lg:p-12 border border-borderNeutral/80 rounded-[2px] flex flex-col justify-between transition-all duration-300 hover:border-forest/60">
            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </span>
                <span className="font-manrope text-[11px] font-medium tracking-[0.18em] uppercase text-forest">
                  Santa Monica, CA
                </span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-charcoal mb-4">
                In-Person Sessions
              </h3>

              <p className="font-manrope text-[15px] sm:text-base leading-[1.7] text-charcoal/80 mb-6">
                Sessions take place in a quiet, private office suite in Santa Monica. The space is intentionally curated with natural light, comfortable seating, and an uncluttered setting designed to feel grounded the moment you walk through the door.
              </p>

              <div className="pt-6 border-t border-borderNeutral/70 space-y-2 text-xs font-manrope text-warmgrey">
                <p className="font-medium text-charcoal">Practice Address:</p>
                <p>123th Street 45 W, Santa Monica, CA 90401</p>
                <p className="text-[11px] text-warmgrey">Central Santa Monica · Near ocean breezes · Private building</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-borderNeutral/60">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-xs font-manrope font-medium tracking-[0.14em] uppercase text-forest hover:text-forest-dark transition-colors"
              >
                <span>Inquire About In-Person Openings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Secure Telehealth Statewide */}
          <div className="bg-[#FAF8F4] p-6 sm:p-10 lg:p-12 border border-borderNeutral/80 rounded-[2px] flex flex-col justify-between transition-all duration-300 hover:border-forest/60">
            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                  <Video className="w-5 h-5 stroke-[1.5]" />
                </span>
                <span className="font-manrope text-[11px] font-medium tracking-[0.18em] uppercase text-forest">
                  California Statewide
                </span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-charcoal mb-4">
                Secure Virtual Telehealth
              </h3>

              <p className="font-manrope text-[15px] sm:text-base leading-[1.7] text-charcoal/80 mb-6">
                High-quality, confidential therapy conducted via secure, HIPAA-compliant video. Accessible to California residents statewide, providing flexibility for demanding work schedules, travel commitments, or those living outside the immediate Santa Monica area.
              </p>

              <div className="pt-6 border-t border-borderNeutral/70 space-y-2 text-xs font-manrope text-warmgrey">
                <p className="font-medium text-charcoal">Eligibility &amp; Coverage:</p>
                <p>Adult residents physically located within the state of California</p>
                <p className="text-[11px] text-warmgrey">Encrypted video platform · No commute · Flexible morning/day slots</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-borderNeutral/60">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-xs font-manrope font-medium tracking-[0.14em] uppercase text-forest hover:text-forest-dark transition-colors"
              >
                <span>Inquire About Telehealth Sessions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
