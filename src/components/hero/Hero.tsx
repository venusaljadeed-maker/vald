import React from "react";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-vald-deep-navy">
      <div 
        className="absolute inset-0 w-full h-full z-0 hidden md:block"
        dangerouslySetInnerHTML={{ __html: `
          <video autoPlay loop muted playsInline preload="auto" class="w-full h-full object-cover">
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
        `}}
      />

      {/* Full-width Mobile Video Background */}
      <div 
        className="absolute inset-0 w-full h-full z-0 block md:hidden"
        dangerouslySetInnerHTML={{ __html: `
          <video autoPlay loop muted playsInline preload="auto" class="w-full h-full object-cover">
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>
        `}}
      />
    </section>
  );
};
