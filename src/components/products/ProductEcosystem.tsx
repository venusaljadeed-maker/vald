"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const CATEGORIES = [
  {
    id: "01",
    title: "LIFTING EQUIPMENT",
    colSpan: "col-span-12 md:col-span-5",
    image: "/images/lifting-equipment.jpg",
  },
  {
    id: "02",
    title: "SAFETY EQUIPMENT",
    colSpan: "col-span-12 md:col-span-4",
    image: "/images/safety-equipment.jpg",
  },
  {
    id: "03",
    title: "WELDING EQUIPMENT",
    colSpan: "col-span-12 md:col-span-3",
    image: "/images/welding-equipment.jpg",
  },
  {
    id: "04",
    title: "TOOLS & MACHINES",
    colSpan: "col-span-12 md:col-span-3",
    image: "/images/tools-machines-2.jpg",
  },
  {
    id: "05",
    title: "CUTTING & GRINDING",
    colSpan: "col-span-12 md:col-span-3",
    image: "/images/cutting-grinding.jpg",
  },
  {
    id: "06",
    title: "DRILL BITS & ABRASIVES",
    colSpan: "col-span-12 md:col-span-2",
    image: "/images/drill-bits.jpg",
  },
  {
    id: "07",
    title: "FASTENERS & FIXINGS",
    colSpan: "col-span-12 md:col-span-2",
    image: "/images/fasteners.jpg",
  },
  {
    id: "08",
    title: "GARAGE & PACKING",
    colSpan: "col-span-12 md:col-span-2",
    image: "/images/garage.jpg",
  },
];

export const ProductEcosystem = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 border-y border-vald-soft-grey/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-vald-deep-navy">OUR PRODUCT ECOSYSTEM</h2>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-12 gap-4">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group cursor-pointer relative overflow-hidden rounded-xl bg-[#0b1424] min-h-[280px] flex flex-col justify-between p-8 ${category.colSpan}`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  unoptimized
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#03101F] via-[#03101F]/30 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-60"></div>
              
              <div className="relative z-20 flex flex-col h-full justify-between">
                <span className="text-vald-gold font-mono text-sm tracking-widest block transition-transform duration-300 group-hover:-translate-y-1">
                  {category.id}
                </span>
                
                <div className="mt-auto transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-display text-white text-xl md:text-2xl font-bold mb-4 w-2/3 leading-tight">
                    {category.title}
                  </h3>
                  
                  <div className="flex items-center text-vald-gold text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    View Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Container */}
        <div className="md:hidden flex flex-col">
          <div className="flex items-center justify-between mb-4 px-2">
            <button 
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              className="p-2 text-vald-deep-navy disabled:opacity-30 transition-opacity"
              disabled={activeIndex === 0}
              aria-label="Previous Category"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-sm font-display font-bold text-vald-deep-navy tracking-wide">
              {CATEGORIES[activeIndex].title}
            </div>
            <button 
              onClick={() => scrollTo(Math.min(CATEGORIES.length - 1, activeIndex + 1))}
              className="p-2 text-vald-deep-navy disabled:opacity-30 transition-opacity"
              disabled={activeIndex === CATEGORIES.length - 1}
              aria-label="Next Category"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-xl bg-[#0b1424] h-[400px] w-[85vw] flex-shrink-0 snap-center flex flex-col justify-between p-6"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03101F] via-[#03101F]/30 to-transparent opacity-80 z-10"></div>
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="text-vald-gold font-mono text-xs tracking-widest block">
                    {category.id} / 08
                  </span>
                  
                  <div className="mt-auto">
                    <div className="flex items-center text-vald-gold text-[10px] font-semibold uppercase tracking-widest">
                      View Products
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {CATEGORIES.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-vald-gold' : 'w-2 bg-vald-soft-grey'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
