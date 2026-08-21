import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ValdStandardGrid } from "./ValdStandardInteractive";

// --- CUSTOM SVG ICONS ---
const QualityIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SourcingIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="1.5"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="1.5"/>
  </svg>
);

const ReliabilityIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="1.5"/>
    <path d="M12 6v6l4 2" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SupportIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4zM3 19a2 2 0 0 0 2 2h1v-6H3v4z" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="1.5"/>
  </svg>
);

const PRINCIPLES = [
  {
    id: "quality",
    index: 0,
    title: "QUALITY",
    description: "Carefully selected products.",
    descriptionHover: "Tested & certified.",
    icon: QualityIcon,
    bgImage: "/images/drill-bits.jpg",
  },
  {
    id: "sourcing",
    index: 1,
    title: "SOURCING",
    description: "Global network.",
    descriptionHover: "Right products. Right price.",
    icon: SourcingIcon,
    bgImage: "/images/packing-materials.jpg",
  },
  {
    id: "reliability",
    index: 2,
    title: "RELIABILITY",
    description: "On-time delivery.",
    descriptionHover: "Every time. Assured.",
    icon: ReliabilityIcon,
    bgImage: "/images/lifting-equipment.jpg",
  },
  {
    id: "support",
    index: 3,
    title: "SUPPORT",
    description: "Expert guidance before",
    descriptionHover: "& after your purchase.",
    icon: SupportIcon,
    bgImage: "/images/welding-equipment.jpg",
  },
];

export const ValdStandard = () => {
  return (
    <section className="relative py-24 bg-[#FDFDFD] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-bold text-vald-deep-navy opacity-[0.02] pointer-events-none select-none z-0">
        VALD.
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(#0A1A2F 1px, transparent 1px), linear-gradient(90deg, #0A1A2F 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 h-full">
          
          {/* LEFT: 42% */}
          <div className="w-full lg:w-[42%] flex flex-col pt-12 pr-12 lg:pr-24">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-vald-gold"></div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vald-deep-navy">THE VALD STANDARD</span>
              </div>
              
              <h2 className="text-4xl md:text-[44px] lg:text-[52px] font-sans font-bold text-vald-deep-navy leading-[1.15] mb-8 tracking-tight md:whitespace-nowrap">
                We don&apos;t just supply.<br className="hidden md:block" />
                We add <span className="text-vald-gold">value</span>.
              </h2>
              <p className="text-[15px] font-sans text-vald-text-grey leading-[1.8] max-w-[420px] mb-12">
                For over a decade, we have been more than a vendor to our clients. We are a trusted sourcing partner ensuring your operations never stop.
              </p>

              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-vald-deep-navy">
                EXPLORE OUR STANDARD <ArrowRight className="w-4 h-4 text-vald-gold" />
              </div>
            </div>
          </div>

          {/* RIGHT: 58% (Grid Layout) - Client Component */}
          <ValdStandardGrid />
          
          {/* MOBILE (Horizontal Slider with Swipe) - Server Rendered Static HTML */}
          <div className="lg:hidden w-full mt-12 pb-6">
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="text-[10px] font-bold tracking-[0.2em] text-vald-text-grey">
                THE VALD STANDARD
              </div>
            </div>

            <div 
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4 -mx-6 px-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PRINCIPLES.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.id}
                    className="relative bg-vald-deep-navy p-8 flex flex-col justify-center rounded-xl overflow-hidden h-[380px] w-[85vw] flex-shrink-0 snap-center"
                  >
                    {/* Background Image Optimized with next/image */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={principle.bgImage} 
                        alt={principle.title}
                        fill
                        sizes="(max-width: 1024px) 85vw, 100vw"
                        className="object-cover mix-blend-overlay opacity-20 grayscale pointer-events-none"
                      />
                    </div>
                    
                    <div className="relative z-20">
                      <div className="text-vald-gold font-mono text-xs tracking-widest mb-6 block">
                        0{index + 1} / 04
                      </div>

                      <div className="mb-6 relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-vald-gold/80" />
                        <div className="absolute w-2 h-2 bg-vald-gold rounded-full top-0 right-0" />
                        <div className="text-white">
                          <Icon active={true} />
                        </div>
                      </div>

                      <h3 className="font-sans text-[16px] font-bold uppercase tracking-widest text-white mb-4">
                        {principle.title}
                      </h3>
                      
                      <div className="h-[2px] w-12 bg-vald-gold mb-6" />

                      <p className="text-[15px] font-sans leading-[1.6] text-gray-300">
                        {principle.description}
                        <span className="block mt-1 font-semibold text-white">
                          {principle.descriptionHover}
                        </span>
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-vald-gold">
                        EXPLORE <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
