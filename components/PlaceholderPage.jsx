import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PlaceholderPage({ title, category, description }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <Navbar />

      <main className="flex-grow">
        {/* Hero / Header for internal page */}
        <section className="pt-12 pb-16 md:pt-16 md:pb-24 px-6 sm:px-10 lg:px-[82px] max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <div className="text-xs uppercase tracking-widest text-stone-500 mb-6 flex items-center space-x-2 font-sans">
            <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
            <span>/</span>
            {category && (
              <>
                <span className="text-stone-500">{category}</span>
                <span>/</span>
              </>
            )}
            <span className="text-charcoal font-medium">{title}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-charcoal mb-6 leading-tight">
            {title}
          </h1>

          {/* Editorial divider */}
          <div className="w-16 h-[1px] bg-forest/20 mb-8"></div>

          {/* Content Description */}
          <div className="max-w-2xl text-charcoal/80 text-lg leading-relaxed font-light space-y-6">
            <p>
              {description ||
                "Specialized, compassionate psychological care for adults navigating anxiety, trauma, and burnout in Santa Monica and across California."}
            </p>
            <p className="text-base text-warmgrey">
              Dr. Maya Reynolds provides in-person sessions at her Santa Monica office (123th Street 45 W) and secure telehealth sessions throughout California.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/#contact"
              className="btn-primary"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/"
              className="text-xs tracking-widest uppercase font-medium text-forest hover:text-charcoal transition-colors border-b border-forest/30 pb-1"
            >
              ← Back to Homepage
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
