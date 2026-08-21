import React from "react";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full-width Desktop Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>

      {/* Full-width Mobile Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
