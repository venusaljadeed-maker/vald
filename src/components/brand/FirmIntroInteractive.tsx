"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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

export const FirmIntroGrid = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Note: Removed the continuous setInterval animation loop for better performance.

  return (
    <div className="hidden lg:flex w-full lg:w-[58%] relative min-h-[500px]">
      {/* The 2x2 Grid Lines Container */}
      <div className="absolute inset-0 border border-vald-deep-navy/10 flex flex-col">
        <div className="flex-1 flex border-b border-vald-deep-navy/10">
          <div className="flex-1 border-r border-vald-deep-navy/10"></div>
          <div className="flex-1"></div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 border-r border-vald-deep-navy/10"></div>
          <div className="flex-1"></div>
        </div>
      </div>

      {/* Central "VA." Marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FDFDFD] flex items-center justify-center z-20">
        <span className="font-display font-bold text-sm text-vald-deep-navy tracking-widest flex items-center">
          VA<span className="text-vald-gold">.</span>
        </span>
      </div>

      {/* Connection Highlight Lines (Dynamic) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <AnimatePresence>
          {activeIndex === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-[25%] left-1/2 w-[1px] h-[25%] bg-vald-gold origin-bottom shadow-[0_0_8px_rgba(241,177,17,0.5)]" />
          )}
          {activeIndex === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-1/2 left-[75%] w-[25%] h-[1px] bg-vald-gold origin-left shadow-[0_0_8px_rgba(241,177,17,0.5)]" />
          )}
          {activeIndex === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-[50%] left-[25%] w-[25%] h-[1px] bg-vald-gold origin-right shadow-[0_0_8px_rgba(241,177,17,0.5)]" />
          )}
          {activeIndex === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-[50%] left-1/2 w-[1px] h-[25%] bg-vald-gold origin-top shadow-[0_0_8px_rgba(241,177,17,0.5)]" />
          )}
        </AnimatePresence>
      </div>

      {/* Grid Modules */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-10">
        {PILLARS.map((pillar) => {
          const isActive = activeIndex === pillar.index;
          const Icon = pillar.icon;
          return (
            <div 
              key={pillar.id}
              className={`relative p-10 xl:p-12 flex flex-col justify-center cursor-pointer group ${isActive ? 'z-30' : ''}`}
              onMouseEnter={() => setActiveIndex(pillar.index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Active State Background & Image */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-[1px] bg-vald-deep-navy overflow-hidden"
                    style={{
                      boxShadow: "0px 10px 30px rgba(10, 26, 47, 0.15)"
                    }}
                  >
                    <Image 
                      src={pillar.bgImage} 
                      alt={pillar.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className="object-cover mix-blend-overlay opacity-20 grayscale"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content (Z-20 to sit above background) */}
              <motion.div 
                className="relative z-20"
                animate={{ y: isActive ? -4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon Container */}
                <div className="mb-6 relative w-10 h-10 flex items-center justify-center">
                  <motion.div 
                    className={`absolute inset-0 rounded-full border border-vald-gold/30`}
                    animate={{ borderColor: isActive ? "rgba(241,177,17,0.8)" : "rgba(10, 26, 47, 0.1)" }}
                  />
                  {/* Orbiting dot */}
                  <motion.div 
                    className="absolute w-1.5 h-1.5 bg-vald-gold rounded-full"
                    initial={{ top: -3, left: 18 }}
                    animate={{ 
                      rotate: isActive ? 180 : 0,
                      transformOrigin: "2px 23px"
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className={`text-${isActive ? 'white' : 'vald-deep-navy'}`}>
                    <Icon active={isActive} />
                  </div>
                </div>

                <h3 className={`font-sans text-[13px] font-bold uppercase tracking-widest mb-3 ${isActive ? 'text-white' : 'text-vald-deep-navy'}`}>
                  {pillar.title}
                </h3>
                
                <div className={`h-[2px] w-8 mb-4 ${isActive ? 'bg-vald-gold' : 'bg-transparent'}`} />

                <p className={`text-[14px] font-sans leading-[1.6] ${isActive ? 'text-gray-300' : 'text-vald-text-grey'}`}>
                  {pillar.description}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, display: 'none' }}
                        animate={{ opacity: 1, display: 'block' }}
                        exit={{ opacity: 0, display: 'none' }}
                        className="mt-1 font-semibold text-white"
                      >
                        {pillar.descriptionHover}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
