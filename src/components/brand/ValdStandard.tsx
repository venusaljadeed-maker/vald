"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle logic
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering]);

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
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </div>

          {/* RIGHT: 58% (Grid Layout) */}
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
                    onMouseEnter={() => {
                      setIsHovering(true);
                      setActiveIndex(principle.index);
                    }}
                    onMouseLeave={() => setIsHovering(false)}
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
                          <img 
                            src={principle.bgImage} 
                            alt={principle.title}
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 grayscale"
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
                            EXPLORE <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight className="w-3 h-3" /></motion.div>
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
          
          {/* MOBILE (Horizontal Slider with Swipe) */}
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
                    {/* Background Image */}
                    <img 
                      src={principle.bgImage} 
                      alt={principle.title}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 grayscale pointer-events-none"
                    />
                    
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
