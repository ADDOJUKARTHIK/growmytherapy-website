import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WhoWeHelp() {
  const services = [
    {
      number: "01",
      title: "ANXIETY & PANIC",
      description:
        "Support for persistent worry, overthinking, physical tension, difficulty sleeping, and the feeling of always being on edge.",
      focus: "Mind-Body Regulation · Thought Patterns · Nervous System Care",
    },
    {
      number: "02",
      title: "TRAUMA THERAPY",
      description:
        "Carefully paced therapy for adults working through single-incident trauma or longer-standing experiences connected to childhood, relationships, or chronic stress.",
      focus: "EMDR Therapy · Somatic Stabilization · Depth Understanding",
    },
    {
      number: "03",
      title: "BURNOUT & PERFECTIONISM",
      description:
        "Support for professionals, entrepreneurs, and creatives navigating burnout, perfectionism, high internal pressure, and feeling disconnected from themselves.",
      focus: "Sustainable Living · Self-Compassion · Values Realignment",
    },
  ];

  return (
    <section id="services" className="bg-[#FAF8F4] py-16 sm:py-24 md:py-32 border-b border-borderNeutral/50">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-[760px] mb-12 sm:mb-16 md:mb-20">
          <div className="mb-4 sm:mb-5 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-forest"></span>
            <p className="eyebrow-text">
              AREAS OF SUPPORT
            </p>
          </div>
          <h2 className="font-cormorant text-[32px] sm:text-[42px] lg:text-[52px] font-light leading-[1.12] text-charcoal tracking-[-0.015em]">
            Therapy for what you&apos;re carrying.
          </h2>
        </div>

        {/* 3-Column Editorial Treatment: Large Numbers, Elegant Typography, Thin Dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col justify-between pt-6 sm:pt-8 border-t border-charcoal/15 transition-all duration-300 hover:border-forest"
            >
              {/* Top Row: Number & Arrow */}
              <div>
                <div className="flex items-baseline justify-between mb-6 sm:mb-8">
                  <span className="font-cormorant text-4xl sm:text-5xl font-light text-forest/80 group-hover:text-forest transition-colors">
                    {service.number}
                  </span>
                  <Link
                    href="/#contact"
                    className="w-9 h-9 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal/60 group-hover:text-forest group-hover:border-forest group-hover:bg-ivory transition-all"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Service Title */}
                <h3 className="font-cormorant text-2xl sm:text-[27px] font-normal tracking-[0.04em] text-charcoal mb-4 uppercase">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="font-manrope text-[15px] sm:text-[16.5px] leading-[1.72] text-charcoal/80 mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Service Subtle Focus Footer */}
              <div className="pt-5 border-t border-charcoal/10 mt-auto">
                <span className="font-manrope text-[11px] uppercase tracking-[0.16em] text-warmgrey font-medium">
                  {service.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Prompt */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-borderNeutral/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-manrope text-sm text-warmgrey max-w-xl">
            Sessions are tailored to your unique personal history, nervous system, and daily reality. Telehealth available throughout California.
          </p>
          <Link
            href="/#contact"
            className="btn-editorial-link"
          >
            <span>Request an Appointment</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
