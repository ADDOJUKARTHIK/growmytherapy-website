import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section id="about" className="bg-ivory py-16 sm:py-24 md:py-32 border-b border-borderNeutral/50 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Portrait & Credentials Box (cols 1-5) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[440px] lg:max-w-none">
              
              {/* Subtle sage background accent frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-sage/50 rounded-[2px] pointer-events-none hidden sm:block" />

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 shadow-[0_12px_36px_-12px_rgba(41,49,46,0.07)]">
                <Image
                  src="/images/maya-portrait.jpg"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                />
              </div>

              {/* Editorial Caption Box */}
              <div className="mt-4 sm:mt-5 p-4 sm:p-5 bg-white/70 backdrop-blur-sm border border-borderNeutral/70 rounded-[2px]">
                <p className="font-cormorant text-xl text-charcoal font-medium leading-none mb-1">
                  Dr. Maya Reynolds, Psy.D.
                </p>
                <p className="font-manrope text-xs text-warmgrey uppercase tracking-wider">
                  Licensed Clinical Psychologist · Santa Monica, CA
                </p>
                <div className="mt-3 pt-3 border-t border-borderNeutral/50 flex items-center justify-between text-[11px] text-forest font-manrope">
                  <span>Santa Monica Office</span>
                  <span>Telehealth Across CA</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Therapeutic Philosophy (cols 6-12) */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-4 sm:mb-5 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-forest"></span>
              <p className="eyebrow-text">
                MEET DR. MAYA REYNOLDS
              </p>
            </div>

            {/* H2 Heading */}
            <h2 className="font-cormorant text-[32px] sm:text-[42px] lg:text-[52px] font-light leading-[1.12] text-charcoal mb-6 sm:mb-8 tracking-[-0.015em]">
              Therapy grounded in understanding, practical tools, and depth.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 sm:space-y-6 text-charcoal/85 font-manrope text-[15px] sm:text-base lg:text-[17px] leading-[1.75] mb-8 sm:mb-10">
              <p>
                Dr. Maya Reynolds is a licensed clinical psychologist based in Santa Monica, California. She works with adults experiencing anxiety, trauma, burnout, and the effects of chronic stress.
              </p>
              <p>
                Her approach is warm, collaborative, and grounded. She integrates evidence-based methods including CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they&apos;re experiencing.
              </p>
              <p className="text-charcoal/75 text-[14.5px] sm:text-[15.5px]">
                Trauma work is an important part of her practice. Dr. Reynolds works with adults navigating single-incident trauma as well as complex, long-standing patterns stemming from childhood, relationships, or chronic stress—pacing sessions carefully with an emphasis on safety and regulation.
              </p>
            </div>

            {/* Core Values / Practice Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 py-5 sm:py-6 border-y border-borderNeutral/70 mb-8 sm:mb-10">
              <div>
                <span className="block font-cormorant text-xl sm:text-2xl text-forest font-light">Warm</span>
                <span className="block font-manrope text-xs text-warmgrey uppercase tracking-wider mt-1">Collaborative Care</span>
              </div>
              <div>
                <span className="block font-cormorant text-xl sm:text-2xl text-forest font-light">Grounded</span>
                <span className="block font-manrope text-xs text-warmgrey uppercase tracking-wider mt-1">Somatic &amp; Mind</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-cormorant text-xl sm:text-2xl text-forest font-light">Evidence-Based</span>
                <span className="block font-manrope text-xs text-warmgrey uppercase tracking-wider mt-1">CBT, EMDR &amp; Depth</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/#contact"
                className="btn-primary text-center"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/#the-space"
                className="btn-secondary text-center"
              >
                Tour the Santa Monica Space
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
