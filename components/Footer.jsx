import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F3] border-t border-borderNeutral/60 font-manrope">
      {/* Main Footer Section */}
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10">
          
          {/* Col 1: Brand & Practice Statement (cols 1-5) */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <Link href="/" className="inline-block group mb-4">
              <span className="font-cormorant text-2xl sm:text-3xl font-light tracking-[0.04em] text-charcoal block group-hover:text-forest transition-colors">
                DR. MAYA REYNOLDS
              </span>
              <span className="font-manrope text-[10.5px] sm:text-[11px] tracking-[0.2em] uppercase text-warmgrey block mt-1">
                Psy.D. · Licensed Clinical Psychologist
              </span>
            </Link>

            <p className="font-manrope text-sm sm:text-[15px] leading-[1.75] text-charcoal/75 max-w-md mt-4 mb-6">
              A warm, grounded private psychology practice in Santa Monica, California. Dedicated to supporting thoughtful, high-achieving adults navigating anxiety, trauma, and burnout.
            </p>

            <div className="flex items-center gap-2 text-xs text-forest font-medium tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-forest"></span>
              <span>In-Person · Santa Monica · Telehealth CA</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (cols 6-7) */}
          <div className="lg:col-span-2">
            <p className="font-manrope text-xs font-semibold tracking-[0.18em] uppercase text-charcoal mb-4 sm:mb-5">
              EXPLORE
            </p>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-charcoal/80">
              <li>
                <Link href="/#about" className="hover:text-forest transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-forest transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-forest transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/#the-space" className="hover:text-forest transition-colors">
                  The Space
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-forest transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-forest transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties (cols 8-9) */}
          <div className="lg:col-span-2">
            <p className="font-manrope text-xs font-semibold tracking-[0.18em] uppercase text-charcoal mb-4 sm:mb-5">
              SPECIALTIES
            </p>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-charcoal/80">
              <li>
                <Link href="/#services" className="hover:text-forest transition-colors">
                  Anxiety &amp; Panic
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-forest transition-colors">
                  Trauma Therapy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-forest transition-colors">
                  Burnout &amp; Stress
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-forest transition-colors">
                  EMDR Therapy
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-forest transition-colors">
                  CBT Modality
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Practice Location & Contact (cols 10-12) */}
          <div className="lg:col-span-3">
            <p className="font-manrope text-xs font-semibold tracking-[0.18em] uppercase text-charcoal mb-4 sm:mb-5">
              LOCATION &amp; CONTACT
            </p>
            <div className="text-sm leading-[1.7] text-charcoal/80 space-y-2">
              <p className="font-medium text-charcoal">Santa Monica Office</p>
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <div className="pt-2 space-y-1">
                <p>
                  <a
                    href="mailto:contact@drmayareynolds.com"
                    className="hover:text-forest transition-colors"
                  >
                    contact@drmayareynolds.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:3105550198"
                    className="hover:text-forest transition-colors"
                  >
                    (310) 555-0198
                  </a>
                </p>
              </div>
              <p className="pt-2 text-xs text-warmgrey">
                Serving Santa Monica, West Los Angeles &amp; Telehealth throughout California.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer / Legal Bar in Deep Forest Green */}
      <div className="bg-forest text-ivory/80 py-5 px-5 sm:px-10 text-center text-xs tracking-wider font-light">
        <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, Psy.D. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-ivory/70 text-[11.5px]">
            <Link href="/terms" className="hover:text-ivory transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/privacy-policy" className="hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/disclaimer" className="hover:text-ivory transition-colors">
              Notice of Privacy Practices
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
