import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-ivory overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 border-b border-borderNeutral/50">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Hero Lifestyle Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Soft decorative background offset frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-sage/40 rounded-[2px] pointer-events-none hidden sm:block" />
              
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 shadow-[0_10px_35px_-10px_rgba(41,49,46,0.08)]">
                <Image
                  src="/images/hero-lifestyle.jpg"
                  alt="Woman standing on balcony overlooking the city skyline, looking upward"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>

              {/* Minimal Editorial Portrait Caption */}
              <div className="mt-3.5 flex items-center justify-between text-xs tracking-wider font-manrope text-warmgrey px-2">
                <span className="uppercase tracking-[0.14em] font-medium text-forest">
                  Dr. Maya Reynolds, Psy.D.
                </span>
                <span className="text-[11px] tracking-widest uppercase">
                  Santa Monica, CA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-4 xl:pl-8">
            {/* Eyebrow Label */}
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-3">
              <span className="w-6 h-[1px] bg-forest/60"></span>
              <p className="eyebrow-text">
                THERAPY FOR ADULTS
              </p>
            </div>

            {/* H1 Heading: 64–76px desktop, 42–48px mobile, Cormorant Garamond */}
            <h1 className="font-cormorant font-light text-[32px] min-[390px]:text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-[-0.02em] text-charcoal mb-6 sm:mb-8 max-w-[720px]">
              <span className="sm:inline block">Therapy for Anxiety, </span>
              <span className="sm:inline block">Trauma &amp; Burnout </span>
              <span className="sm:inline block">in Santa Monica</span>
            </h1>

            {/* Supporting Text: Manrope 16–18px, Line-height 1.6–1.7 */}
            <p className="font-manrope text-[15px] sm:text-lg lg:text-[17.5px] leading-[1.72] text-charcoal/80 font-normal max-w-[580px] mb-8 sm:mb-10 pr-2 sm:pr-0">
              A warm, grounded space for adults navigating anxiety, stress, trauma, burnout, and the pressure of always having to keep going.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 mb-10 sm:mb-12">
              <Link
                href="/#contact"
                className="btn-primary text-center"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/#approach"
                className="btn-secondary text-center"
              >
                Explore My Approach
              </Link>
            </div>

            {/* Practice Credential Bar */}
            <div className="pt-6 border-t border-borderNeutral/70 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-warmgrey font-manrope">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                <span>Licensed Clinical Psychologist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                <span>In-Person Santa Monica · 123th Street 45 W</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-misty"></span>
                <span>Telehealth Statewide Across California</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
