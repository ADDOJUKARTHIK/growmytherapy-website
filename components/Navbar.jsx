"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Approach", href: "/#approach" },
    { label: "The Space", href: "/#the-space" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-borderNeutral/80 shadow-[0_2px_15px_-4px_rgba(41,49,46,0.04)]"
          : "bg-ivory border-b border-borderNeutral/50"
      }`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 h-[78px] sm:h-[86px] md:h-[90px] flex items-center justify-between">
        {/* Editorial Wordmark Logo */}
        <Link
          href="/"
          className="group flex flex-col items-start transition-opacity hover:opacity-90"
        >
          <span className="font-cormorant text-2xl sm:text-[27px] font-light tracking-[0.06em] text-charcoal leading-none">
            MAYA REYNOLDS
          </span>
          <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-warmgrey mt-1 font-medium group-hover:text-forest transition-colors">
            Psy.D. · Santa Monica
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-11">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link font-manrope text-[12.5px] font-medium tracking-[0.14em] text-charcoal/90 hover:text-forest transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Primary Header CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/#contact"
            className="btn-primary"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center pr-1">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-1 text-charcoal hover:text-forest focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.4]" />
            ) : (
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <span className="block w-6 h-[1.5px] bg-charcoal"></span>
                <span className="block w-4 h-[1.5px] bg-charcoal"></span>
                <span className="block w-6 h-[1.5px] bg-charcoal"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Refined Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[78px] sm:top-[86px] bg-ivory z-40 px-6 sm:px-8 py-8 flex flex-col justify-between animate-fadeIn lg:hidden border-t border-borderNeutral/60">
          <div className="space-y-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-cormorant text-2xl sm:text-3xl font-light text-charcoal hover:text-forest transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 pb-8 border-t border-borderNeutral/60 space-y-4">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-3.5"
            >
              Schedule a Consultation
            </Link>
            <p className="text-center font-manrope text-xs text-warmgrey uppercase tracking-widest">
              Santa Monica, CA · Telehealth Statewide
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
