import Image from "next/image";

export default function HonoringBanner() {
  return (
    <section id="the-space" className="relative bg-[#FAF8F3] py-16 sm:py-24 md:py-32 border-b border-borderNeutral/50 overflow-hidden">
      {/* Secondary anchor for direct linking to #our-office */}
      <span id="our-office" className="absolute -top-24 pointer-events-none" />
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-6">
            <div className="mb-4 sm:mb-5 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-forest"></span>
              <p className="eyebrow-text">
                OUR OFFICE
              </p>
            </div>
            <h2 className="font-cormorant text-[32px] sm:text-[42px] lg:text-[52px] font-light leading-[1.12] text-charcoal tracking-[-0.015em]">
              A calm space for therapy.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-4">
            <p className="font-manrope text-[15px] sm:text-lg leading-[1.75] text-charcoal/80 font-normal max-w-xl">
              Dr. Maya Reynolds offers in-person therapy from her quiet, private office in Santa Monica, California. The space is designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment where clients can feel more at ease.
            </p>
          </div>
        </div>

        {/* Balanced Editorial Photography Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 items-start">
          
          {/* Office Image 1: Main Feature (approx 60% width: 7 of 12 cols) */}
          <div className="md:col-span-7">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden bg-stone-100 shadow-[0_12px_40px_-15px_rgba(41,49,46,0.08)]">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds quiet, private Santa Monica therapy office with natural light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 850px"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-3.5 flex flex-wrap items-center justify-between gap-y-1 gap-x-2 text-xs font-manrope text-warmgrey px-0.5">
              <span className="uppercase tracking-[0.14em] font-medium text-forest">
                Santa Monica Consultation Suite
              </span>
              <span className="text-[11px] tracking-widest uppercase">
                Natural Light &amp; Calm Setting
              </span>
            </div>
          </div>

          {/* Office Image 2: Supporting Room View (approx 40% width: 5 of 12 cols) */}
          <div className="md:col-span-5">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden bg-stone-100 shadow-[0_12px_40px_-15px_rgba(41,49,46,0.08)]">
              <Image
                src="/images/office-2.jpg"
                alt="Therapy space with comfortable seating, olive plant, and uncluttered bookshelf in Santa Monica"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 550px"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-3.5 flex flex-wrap items-center justify-between gap-y-1 gap-x-2 text-xs font-manrope text-warmgrey px-0.5">
              <span className="uppercase tracking-[0.14em] font-medium text-forest">
                Quiet Environment
              </span>
              <span className="text-[11px] tracking-widest uppercase">
                Curated &amp; Uncluttered
              </span>
            </div>
          </div>

        </div>

        {/* Subtle Location & In-Person Practice Details */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-borderNeutral/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-manrope text-warmgrey">
          <div>
            <p className="text-xs sm:text-[13px] tracking-wide text-charcoal/75">
              Quiet, private, and designed to feel grounding.
            </p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] uppercase tracking-[0.18em] text-forest font-medium">
            <span>Santa Monica, California</span>
            <span className="w-1 h-1 rounded-full bg-forest/40"></span>
            <span>In-Person Therapy</span>
          </div>
        </div>

      </div>
    </section>
  );
}
