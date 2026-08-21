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
    </section>
  );
};
