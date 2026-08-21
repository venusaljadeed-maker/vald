import React from "react";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-vald-deep-navy">
      <div 
        className="absolute inset-0 w-full h-full z-0 hidden md:block bg-vald-deep-navy"
        dangerouslySetInnerHTML={{ __html: `
          <video autoPlay loop muted playsInline preload="metadata" class="w-full h-full object-cover bg-vald-deep-navy" style="background-color: #0F172A;">
            <source src="/videos/hero-desktop.mp4#t=0.001" type="video/mp4" />
          </video>
        `}}
      />

      {/* Full-width Mobile Video Background */}
      <div 
        className="absolute inset-0 w-full h-full z-0 block md:hidden bg-vald-deep-navy"
        dangerouslySetInnerHTML={{ __html: `
          <video autoPlay loop muted playsInline preload="metadata" class="w-full h-full object-cover bg-vald-deep-navy" style="background-color: #0F172A;">
            <source src="/videos/hero-mobile.mp4#t=0.001" type="video/mp4" />
          </video>
        `}}
      />

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Hero Text Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto mt-16 md:mt-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-xl tracking-tight">
          Uncompromising <span className="text-vald-gold">Quality</span> for <br className="hidden md:block" /> Industrial <span className="text-vald-gold">Excellence.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-lg">
          "Bridging the gap between rigorous industrial requirements and flawless execution."
        </p>
      </div>
    </section>
  );
};
