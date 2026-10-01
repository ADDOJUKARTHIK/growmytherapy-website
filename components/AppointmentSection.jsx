"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, MapPin, Mail, Phone } from "lucide-react";

export default function AppointmentSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What does Dr. Maya Reynolds specialize in?",
      answer:
        "Dr. Maya Reynolds specializes in therapy for adults experiencing anxiety, panic, trauma, and professional burnout. She frequently supports individuals navigating persistent worry, tension in the body, difficulty sleeping, single-incident trauma, long-standing patterns from earlier life experiences, and perfectionism with high internal pressure.",
    },
    {
      question: "Does Dr. Maya Reynolds offer online therapy?",
      answer:
        "Yes. In addition to in-person therapy from her Santa Monica office, Dr. Reynolds offers secure telehealth sessions for clients located throughout California.",
    },
    {
      question: "Where is the practice located?",
      answer:
        "The practice is located at 123th Street 45 W, Santa Monica, CA 90401. The office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
    },
    {
      question: "What therapeutic approaches does she use?",
      answer:
        "Dr. Reynolds integrates evidence-based methods tailored to the individual, including Cognitive-Behavioral Therapy (CBT), EMDR for trauma-focused work, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological aspects of what they are experiencing.",
    },
    {
      question: "Who does Dr. Reynolds work with?",
      answer:
        "Dr. Reynolds works with individual adults. Many of the people she works with are high-achieving, thoughtful, and self-aware—including professionals, entrepreneurs, and creatives—who appear functional on the outside while privately feeling exhausted, stuck in overthinking, or emotionally on edge.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-ivory py-16 sm:py-24 md:py-32 border-b border-borderNeutral/50">
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* ========================================================= */}
        {/* PART 1: FAQ ACCORDION                                     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 mb-20 sm:mb-28 md:mb-32">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="mb-4 sm:mb-5 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-forest"></span>
              <p className="eyebrow-text">
                COMMON QUESTIONS
              </p>
            </div>
            <h2 className="font-cormorant text-[32px] sm:text-[42px] lg:text-[52px] font-light leading-[1.12] text-charcoal tracking-[-0.015em] mb-5 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-manrope text-[15px] sm:text-[17px] leading-[1.72] text-charcoal/80 mb-6 sm:mb-8 max-w-md">
              Clear answers regarding specialties, modalities, office location in Santa Monica, and telehealth availability across California.
            </p>

            <div className="p-6 bg-[#FAF8F4] border border-borderNeutral/80 rounded-[2px] space-y-3 hidden lg:block">
              <p className="font-cormorant text-xl text-charcoal font-normal">
                Have a question not listed here?
              </p>
              <p className="font-manrope text-xs text-warmgrey leading-relaxed">
                Feel free to reach out directly to inquire about sessions or to discuss whether therapy with Dr. Reynolds is the right fit.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-manrope font-medium tracking-[0.14em] uppercase text-forest hover:text-forest-dark transition-colors pt-2"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-charcoal/15 border-t border-b border-charcoal/15">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question} className="py-5 sm:py-7">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-start justify-between gap-4 text-left group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-cormorant text-xl sm:text-[25px] font-light text-charcoal group-hover:text-forest transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <span className="mt-1 flex-shrink-0 w-7 h-7 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal/60 group-hover:border-forest group-hover:text-forest transition-all">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 stroke-[1.8]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 stroke-[1.8]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 sm:mt-5 pr-4 sm:pr-10 animate-fadeIn">
                        <p className="font-manrope text-[15px] sm:text-base leading-[1.75] text-charcoal/80">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* PART 2: SCHEDULE / CONSULTATION CARD (id="contact")       */}
        {/* ========================================================= */}
        <div id="contact" className="bg-[#FAF8F4] border border-borderNeutral/80 rounded-[2px] p-6 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-forest"></span>
                <p className="eyebrow-text">
                  BEGIN THERAPY
                </p>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-4xl lg:text-[44px] font-light leading-[1.15] text-charcoal mb-4 sm:mb-6">
                Schedule an initial consultation.
              </h3>

              <p className="font-manrope text-[15px] sm:text-lg leading-[1.72] text-charcoal/80 mb-6 sm:mb-8 max-w-xl">
                Taking the first step is an investment in your well-being. Dr. Reynolds offers an initial consultation to discuss your concerns, answer any questions, and see if working together feels like the right fit.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href="mailto:contact@drmayareynolds.com"
                  className="btn-primary text-center"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="tel:3105550198"
                  className="btn-secondary text-center"
                >
                  (310) 555-0198
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6 border-t lg:border-t-0 lg:border-l border-borderNeutral/70 pt-8 lg:pt-0">
              <h4 className="font-cormorant text-2xl font-light text-charcoal mb-4">
                Practice Details
              </h4>
              
              <div className="space-y-4 font-manrope text-sm text-charcoal/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-charcoal">Santa Monica Office</p>
                    <p className="text-warmgrey text-xs mt-0.5">123th Street 45 W, Santa Monica, CA 90401</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-charcoal">Email Inquiries</p>
                    <p className="text-warmgrey text-xs mt-0.5">contact@drmayareynolds.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-charcoal">Telehealth Statewide</p>
                    <p className="text-warmgrey text-xs mt-0.5">Secure video sessions across California</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 pt-5 border-t border-borderNeutral/60 text-xs font-manrope text-warmgrey">
                Confidentiality is strictly maintained. In-person visits by appointment only.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
