"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const BRANDS = [
  { name: "DEWALT", logo: "https://cdn.worldvectorlogo.com/logos/dewalt-1.svg" },
  { name: "BOSCH", logo: "https://cdn.worldvectorlogo.com/logos/bosch.svg" },
  { name: "Makita", logo: "https://cdn.worldvectorlogo.com/logos/makita-1.svg" },
  { name: "STANLEY", logo: "https://cdn.worldvectorlogo.com/logos/stanley.svg" },
  { name: "3M", logo: "https://cdn.worldvectorlogo.com/logos/3m-1.svg" },
  { name: "WURTH", logo: "https://logo.clearbit.com/wurth.com" },
  { name: "ESAB", logo: "https://cdn.worldvectorlogo.com/logos/esab.svg" },
  { name: "LINCOLN ELECTRIC", logo: "https://cdn.worldvectorlogo.com/logos/lincoln-electric.svg" }
];

export const BrandStrip = () => {
  return (
    <section className="bg-white py-12 border-y border-vald-soft-grey overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-8">
        <h3 className="text-[10px] font-semibold uppercase tracking-widest text-vald-text-grey text-center md:text-left">
          TRUSTED BY INDUSTRY. CHOSEN BY PROFESSIONALS.
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-48 mx-8 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-12 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if the image fails to load
                  e.currentTarget.style.display = 'none';
                  const textNode = document.createElement('span');
                  textNode.innerText = brand.name;
                  textNode.className = "font-display font-bold text-2xl text-vald-deep-navy";
                  e.currentTarget.parentElement?.appendChild(textNode);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
