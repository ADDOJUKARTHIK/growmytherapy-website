import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="relative bg-ivory py-16 sm:py-24 md:py-32 border-b border-borderNeutral/50 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Editorial Statement & Reflections (cols 1-7) */}
          <div className="lg:col-span-7">
            {/* Subtle Sage Accent Badge & Eyebrow */}
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sage"></span>
              <p className="eyebrow-text">
                A SPACE TO SLOW DOWN
              </p>
            </div>

            {/* H2 Heading: Cormorant Garamond 48–58px Desktop, 36–42px Mobile */}
            <h2 className="font-cormorant text-[30px] min-[390px]:text-[34px] sm:text-[42px] lg:text-[52px] xl:text-[56px] font-light leading-[1.14] text-charcoal mb-6 sm:mb-10 max-w-[680px]">
              <span className="sm:inline block">You don&apos;t have to </span>
              <span className="sm:inline block">keep pushing through.</span>
            </h2>

            {/* Subtle Misty Blue decorative divider line */}
            <div className="w-16 h-[2px] bg-misty mb-6 sm:mb-10"></div>

            {/* Editorial Body Text - Two Balanced Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 text-charcoal/80 font-manrope text-[15px] sm:text-base lg:text-[17px] leading-[1.75]">
              <div>
                <p>
                  Many thoughtful, high-achieving adults look like they&apos;re doing well on the outside while privately feeling exhausted, overwhelmed, or stuck in overthinking.
                </p>
              </div>

              <div>
                <p>
                  Therapy can be a space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.
                </p>
              </div>
            </div>

            {/* Quote / Editorial Sign-off */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-borderNeutral/60 flex items-center gap-4">
              <span className="font-cormorant italic text-lg sm:text-xl text-forest font-light">
                &ldquo;Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.&rdquo;
              </span>
            </div>
          </div>

          {/* Right Column: Natural Light California Coastal Photography (cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[440px] lg:max-w-none">
              {/* Subtle architectural border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-misty/60 rounded-[2px] pointer-events-none hidden sm:block" />

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100 shadow-[0_10px_30px_-12px_rgba(41,49,46,0.06)]">
                <Image
                  src="/images/sec2-ocean.jpg"
                  alt="Calm blue ocean waves reflecting golden sunlight along the California coast"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-3 text-right">
                <span className="font-manrope text-[11px] tracking-[0.16em] uppercase text-warmgrey">
                  Santa Monica Coastline · Natural Light
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}