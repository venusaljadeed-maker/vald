"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  id: string;
  title: string;
  colSpan: string;
  image: string;
}

export const ProductEcosystemMobile = ({ categories }: { categories: Category[] }) => {
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
          {categories[activeIndex]?.title}
        </div>
        <button 
          onClick={() => scrollTo(Math.min(categories.length - 1, activeIndex + 1))}
          className="p-2 text-vald-deep-navy disabled:opacity-30 transition-opacity"
          disabled={activeIndex === categories.length - 1}
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
        {categories.map((category) => (
          <Link
            href="/resources"
            key={category.id}
            className="group relative overflow-hidden rounded-xl bg-[#0b1424] h-[400px] w-[85vw] flex-shrink-0 snap-center flex flex-col justify-between p-6 block"
          >
            {/* Image Background Optimized */}
            <div className="absolute inset-0 z-0">
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 85vw, 100vw"
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
          </Link>
        ))}
      </div>
      
      {/* Pagination Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {categories.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-vald-gold' : 'w-2 bg-vald-soft-grey'}`}
          />
        ))}
      </div>
    </div>
  );
};
