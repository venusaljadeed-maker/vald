import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Preloader } from "@/components/layout/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const clashDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "VALD. | Premium Industrial Hardware Supplier in Dubai, UAE",
    template: "%s | VALD.",
  },
  description: "Importers, Exporters & Suppliers of Industrial hardware, lifting, safety, welding and tools in Dubai, UAE. Bridging the gap between rigorous industrial requirements and flawless execution.",
  openGraph: {
    title: "VALD. | Premium Industrial Hardware Supplier",
    description: "Industrial hardware, lifting, safety, welding and tools in Dubai, UAE.",
    url: "https://www.venus-aljadeed.com",
    siteName: "VALD.",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.venus-aljadeed.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VALD.",
  "image": "https://www.venus-aljadeed.com/images/logo.png",
  "@id": "https://www.venus-aljadeed.com",
  "url": "https://www.venus-aljadeed.com",
  "telephone": "+971507056995",
  "email": "info@venus-aljadeed.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${clashDisplay.variable} font-sans antialiased text-vald-deep-navy bg-vald-off-white selection:bg-vald-gold selection:text-vald-dark-navy pb-16 sm:pb-0`}>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
