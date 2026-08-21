"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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

export const ValdStandardGrid = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Note: Removed the continuous setInterval animation loop for better performance.
  // Animations now only trigger on interaction (hover).

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

      {/* Central "VALD." Marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FDFDFD] flex items-center justify-center z-20">
        <span className="font-display font-bold text-sm text-vald-deep-navy tracking-widest flex items-center">
          VALD<span className="text-vald-gold">.</span>
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
        {PRINCIPLES.map((principle) => {
          const isActive = activeIndex === principle.index;
          return (
            <div 
              key={principle.id}
              className={`relative p-12 flex flex-col justify-center cursor-pointer group ${isActive ? 'z-30' : ''}`}
              onMouseEnter={() => setActiveIndex(principle.index)}
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
                    {/* OPTIMIZATION: Replaced native img with next/image, sizing to 50vw since it's a grid box on desktop */}
                    <Image 
                      src={principle.bgImage} 
                      alt={principle.title}
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
                    <principle.icon active={isActive} />
                  </div>
                </div>

                <h3 className={`font-sans text-[13px] font-bold uppercase tracking-widest mb-3 ${isActive ? 'text-white' : 'text-vald-deep-navy'}`}>
                  {principle.title}
                </h3>
                
                <div className={`h-[2px] w-8 mb-4 ${isActive ? 'bg-vald-gold' : 'bg-transparent'}`} />

                <p className={`text-[14px] font-sans leading-[1.6] ${isActive ? 'text-gray-300' : 'text-vald-text-grey'}`}>
                  {principle.description}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, display: 'none' }}
                        animate={{ opacity: 1, display: 'block' }}
                        exit={{ opacity: 0, display: 'none' }}
                        className="mt-1 font-semibold text-white"
                      >
                        {principle.descriptionHover}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </p>

                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-vald-gold"
                    >
                      EXPLORE <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Standard Score Visual */}
      <div className="absolute -bottom-16 left-0 w-full flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-vald-text-grey">
        <span>THE VALD STANDARD</span>
        <div className="flex gap-4">
          {PRINCIPLES.map((p, i) => (
            <span key={p.id} className="flex items-center gap-4">
              <span className={activeIndex === i ? "text-vald-deep-navy" : ""}>{p.title}</span>
              {i < 3 && <span className="opacity-30">—</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
