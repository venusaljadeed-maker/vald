"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const BRANDS = [
  "DEWALT", "BOSCH", "Makita", "STANLEY", "3M", "WURTH", "ESAB", "LINCOLN ELECTRIC"
];

export const BrandStrip = () => {
  return (
    <section className="bg-[#0b1424] py-8 border-y border-vald-soft-grey/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <h3 className="text-[10px] font-semibold uppercase tracking-widest text-vald-text-grey mb-6">
          TRUSTED BY INDUSTRY. CHOSEN BY PROFESSIONALS.
        </h3>
        
        <div className="flex items-center justify-between gap-8 md:gap-12 overflow-x-auto no-scrollbar pb-4">
          {BRANDS.map((brand, index) => (
            <div 
              key={index} 
              className="text-white/60 font-display font-bold text-xl md:text-2xl whitespace-nowrap opacity-70 hover:opacity-100 hover:text-white transition-all duration-300"
            >
              {brand}
            </div>
          ))}
          
          <button className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors ml-auto">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
