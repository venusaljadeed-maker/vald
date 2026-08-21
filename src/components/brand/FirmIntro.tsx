import React from "react";
import Image from "next/image";
import { FirmIntroGrid } from "./FirmIntroInteractive";
import { Globe, ShieldCheck, Zap } from "lucide-react";

const PILLARS = [
  {
    id: "global",
    index: 0,
    title: "Global Reach",
    description: "Strategic distribution.",
    descriptionHover: "Dubai to clients worldwide.",
    icon: ({ active }: { active?: boolean }) => <Globe className="w-5 h-5" color={active ? "#F1B111" : "currentColor"} strokeWidth={1.5} />,
    bgImage: "/images/packing-materials.jpg",
  },
  {
    id: "quality",
    index: 1,
    title: "Verified Quality",
    description: "Industry-leading.",
    descriptionHover: "Partnered manufacturers.",
    icon: ({ active }: { active?: boolean }) => <ShieldCheck className="w-5 h-5" color={active ? "#F1B111" : "currentColor"} strokeWidth={1.5} />,
    bgImage: "/images/drill-bits.jpg",
  },
  {
    id: "sourcing",
    index: 2,
    title: "Rapid Sourcing",
    description: "Time-critical ops.",
    descriptionHover: "Streamlined procurement.",
    icon: ({ active }: { active?: boolean }) => <Zap className="w-5 h-5" color={active ? "#F1B111" : "currentColor"} strokeWidth={1.5} />,
    bgImage: "/images/welding-equipment.jpg",
  },
  {
    id: "inventory",
    index: 3,
    title: "1000+ Products",
    description: "Comprehensive",
    descriptionHover: "inventory for industrial needs.",
    icon: ({ active }: { active?: boolean }) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M4 6h16M4 12h16M4 18h16" stroke={active ? "#F1B111" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgImage: "/images/lifting-equipment.jpg",
  },
];

export const FirmIntro = () => {
  return (
    <section className="bg-[#FDFDFD] border-y border-vald-soft-grey/30 overflow-hidden relative">
      {/* Background Subtle Elements */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-vald-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-stretch h-full">
          
          {/* Left: Typographic Title (42%) */}
          <div className="w-full lg:w-[42%] flex flex-col items-start relative z-10 pr-12 lg:pr-24 justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-vald-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-vald-gold uppercase">
                The Firm Behind VALD.
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-vald-deep-navy leading-[1.1] tracking-tight mb-6">
              VENUS ALJADEED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vald-gold to-yellow-600">
                WHOLESALE TRADING LLC
              </span>
            </h2>
            
            <div className="text-[11px] font-semibold tracking-[0.25em] text-vald-text-grey uppercase mb-8 border-l-2 border-vald-gold pl-4 py-1">
              Building & Construction Materials
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-10">
              Operating from the heart of Dubai, we are a premier international trading house dedicated to sourcing, verifying, and distributing high-grade industrial hardware, safety equipment, and precision machinery to rigorous operations across the GCC, Africa, and global markets.
            </p>
          </div>

          {/* Right: Interactive Grid Layout (58%) - Client Component */}
          <FirmIntroGrid />
          
          {/* MOBILE (Horizontal Slider with Swipe) - Server Component */}
          <div className="lg:hidden w-full mt-12 pb-6">
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4 -mx-6 px-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.id} className="relative bg-vald-deep-navy p-8 flex flex-col justify-center rounded-xl overflow-hidden h-[380px] w-[85vw] flex-shrink-0 snap-center">
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={pillar.bgImage} 
                        alt={pillar.title} 
                        fill
                        sizes="(max-width: 1024px) 85vw, 100vw"
                        className="object-cover mix-blend-overlay opacity-20 grayscale pointer-events-none" 
                      />
                    </div>
                    <div className="relative z-20">
                      <div className="text-vald-gold font-mono text-xs tracking-widest mb-6 block">0{index + 1} / 04</div>
                      <div className="mb-6 relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-vald-gold/80" />
                        <div className="text-white"><Icon active={true} /></div>
                      </div>
                      <h3 className="font-sans text-[16px] font-bold uppercase tracking-widest text-white mb-4">{pillar.title}</h3>
                      <div className="h-[2px] w-12 bg-vald-gold mb-6" />
                      <p className="text-[15px] font-sans leading-[1.6] text-gray-300">
                        {pillar.description}
                        <span className="block mt-1 font-semibold text-white">{pillar.descriptionHover}</span>
                      </p>
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
