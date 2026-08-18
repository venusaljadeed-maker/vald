"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Factory, Droplet, Car, Package, Cog } from "lucide-react";

const INDUSTRIES = [
  { id: "construction", name: "Construction", image: "/images/construction.jpg", icon: <Building2 className="w-6 h-6" /> },
  { id: "manufacturing", name: "Manufacturing", image: "/images/manufacturing.jpg", icon: <Factory className="w-6 h-6" /> },
  { id: "oil-gas", name: "Oil & Gas", image: "/images/oil-gas.jpg", icon: <Droplet className="w-6 h-6" /> },
  { id: "automotive", name: "Automotive & Garages", image: "/images/automotive.jpg", icon: <Car className="w-6 h-6" /> },
  { id: "warehousing", name: "Warehousing & Logistics", image: "/images/warehousing.jpg", icon: <Package className="w-6 h-6" /> },
  { id: "engineering", name: "General Engineering", image: "/images/engineering.jpg", icon: <Cog className="w-6 h-6" /> },
];

export const IndustryShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-24 bg-vald-white">
      <div className="container mx-auto px-6 lg:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-vald-deep-navy">INDUSTRIES WE SERVE</span>
            <div className="w-8 h-px bg-vald-text-grey"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-vald-deep-navy leading-tight">
            Solutions for <br /> industries that <br /> <span className="text-vald-gold">build</span> the world.
          </h2>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-6">
          <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-vald-deep-navy border border-vald-soft-grey px-6 py-3 hover:bg-vald-soft-grey transition-colors">
            EXPLORE INDUSTRIES
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              className="w-10 h-10 rounded-full border border-vald-soft-grey flex items-center justify-center text-vald-deep-navy hover:bg-vald-soft-grey transition-colors disabled:opacity-50"
              disabled={activeIndex === 0}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveIndex(Math.min(INDUSTRIES.length - 1, activeIndex + 1))}
              className="w-10 h-10 rounded-full bg-vald-gold flex items-center justify-center text-white hover:bg-yellow-500 transition-colors disabled:opacity-50"
              disabled={activeIndex === INDUSTRIES.length - 1}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden px-6 lg:px-12 pb-12">
        <div className="flex gap-4 min-h-[400px]">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.id}
              className={`relative rounded-xl overflow-hidden cursor-pointer group flex-shrink-0 transition-all duration-500 ease-out`}
              style={{
                width: activeIndex === index ? "40%" : "12%",
                minWidth: activeIndex === index ? "300px" : "120px",
              }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Fallback pattern */}
              <div className="absolute inset-0 bg-[#0b1424] opacity-90"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#03101F] via-[#03101F]/40 to-transparent z-10"></div>
              
              <div className="relative z-20 h-full flex flex-col items-center justify-end p-6 text-center">
                <div className="text-white mb-4 group-hover:text-vald-gold transition-colors duration-300">
                  {industry.icon}
                </div>
                
                <h3 className={`font-sans font-bold text-white transition-all duration-300 ${activeIndex === index ? 'text-lg md:text-xl' : 'text-xs md:text-sm hidden md:block'}`}>
                  {industry.name}
                </h3>
                
                {activeIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 w-6 h-6 rounded-full bg-vald-gold flex items-center justify-center text-white"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
