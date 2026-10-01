import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
  description:
    "Therapy for adults navigating anxiety, trauma, and burnout in Santa Monica, California and via secure telehealth statewide. Warm, grounded, evidence-based care.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-ivory text-charcoal font-manrope antialiased selection:bg-sage/40 selection:text-charcoal overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
