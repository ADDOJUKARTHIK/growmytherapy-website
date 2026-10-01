import Link from "next/link";

export default function QuoteBanner() {
  return (
    <section className="relative bg-forest text-ivory py-20 sm:py-32 md:py-40 overflow-hidden">
      {/* Subtle organic light accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-black/[0.05] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14">
        <div className="max-w-[880px] mx-auto text-center flex flex-col items-center">
          
          {/* Subtle Sage Eyebrow Line */}
          <div className="mb-5 sm:mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-sage/60"></span>
            <span className="font-manrope text-xs tracking-[0.2em] uppercase text-sage font-medium">
              A FOUNDATION FOR LIFE
            </span>
            <span className="w-8 h-[1px] bg-sage/60"></span>
          </div>

          {/* Large Cormorant Garamond Heading */}
          <h2 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] font-light leading-[1.08] text-ivory tracking-[-0.02em] mb-6 sm:mb-8">
            More than symptom relief.
          </h2>

          {/* Body Statement */}
          <p className="font-manrope text-[15px] sm:text-lg lg:text-[20px] leading-[1.7] text-ivory/90 font-light max-w-[720px] mb-10 sm:mb-12">
            Therapy can help you develop greater insight, resilience, and a stronger relationship with yourself over time.
          </p>

          {/* CTA: Get Started */}
          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center font-manrope text-xs sm:text-[13px] font-medium tracking-[0.16em] uppercase bg-ivory text-forest px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Quiet Note */}
          <p className="mt-8 text-xs font-manrope text-ivory/60 tracking-wider">
            In-Person Santa Monica Office · Secure California Telehealth
          </p>

        </div>
      </div>
    </section>
  );
}
