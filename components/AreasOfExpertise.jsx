import Link from "next/link";

export default function AreasOfExpertise() {
  const approaches = [
    {
      code: "CBT",
      title: "Cognitive-Behavioral Therapy",
      description:
        "Cognitive-behavioral therapy to better understand thoughts, emotions, and patterns.",
    },
    {
      code: "EMDR",
      title: "Eye Movement Desensitization",
      description:
        "An evidence-based approach incorporated into trauma-focused work.",
    },
    {
      code: "MINDFULNESS",
      title: "Mindfulness-Based Practices",
      description:
        "Practices that support awareness and connection with the present moment.",
    },
    {
      code: "SOMATIC",
      title: "Body-Oriented Techniques",
      description:
        "Exploring the connection between emotional experiences and the body.",
    },
  ];

  return (
    <section id="approach" className="bg-forest text-ivory py-20 sm:py-28 md:py-32 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          
          {/* Left Column: Eyebrow & Main Heading */}
          <div className="lg:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sage"></span>
              <p className="font-manrope text-xs font-medium tracking-[0.18em] uppercase text-sage">
                MY APPROACH
              </p>
            </div>
            <h2 className="font-cormorant text-[38px] sm:text-[48px] lg:text-[54px] font-light leading-[1.12] text-ivory tracking-[-0.015em]">
              Practical tools.
              <br />
              Deeper understanding.
            </h2>
          </div>

          {/* Right Column: Introductory Body */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="font-manrope text-base sm:text-lg leading-[1.75] text-ivory/85 font-normal max-w-xl">
              Therapy works best when you feel respected, understood, and actively involved in the process. Sessions are structured enough to feel supportive while leaving room for reflection and depth.
            </p>
          </div>

        </div>

        {/* Four Approaches Grid: 4 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {approaches.map((item, idx) => (
            <div
              key={item.code}
              className="flex flex-col justify-between pt-8 border-t border-ivory/20 transition-all duration-300 hover:border-sage"
            >
              <div>
                <span className="font-manrope text-xs font-semibold tracking-[0.2em] text-sage block mb-4 uppercase">
                  {item.code}
                </span>

                <h3 className="font-cormorant text-2xl lg:text-[25px] font-light text-ivory mb-4 tracking-normal leading-snug">
                  {item.title}
                </h3>

                <p className="font-manrope text-[15px] sm:text-[15.5px] leading-[1.7] text-ivory/80">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-ivory/10">
                <span className="font-manrope text-[11px] tracking-widest uppercase text-ivory/50">
                  Modality 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA within Deep Forest Green */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-ivory/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-manrope text-sm text-ivory/70 max-w-lg">
            Evidence-based modalities integrated dynamically to support both cognitive clarity and physiological regulation.
          </p>
          <Link
            href="/#contact"
            className="btn-ivory-outline"
          >
            Schedule a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
