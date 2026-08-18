"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    id: "lift",
    title: "LIFT",
    description: "Hoists, Jacks, Trolleys & more",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="26" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 14H26M14 26H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "build",
    title: "BUILD",
    description: "Fasteners, Tools, Drill Bits & more",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 28L28 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "protect",
    title: "PROTECT",
    description: "PPE, Safety Gear & Equipment",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8L12 11V18C12 24 15 29 20 32C25 29 28 24 28 18V11L20 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "weld",
    title: "WELD",
    description: "Welding Machines, Accessories & more",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 8L12 20H20L18 32L28 20H20L22 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "maintain",
    title: "MAINTAIN",
    description: "Garage Equipment, Abrasives & more",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 10V30M10 20H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export const SolutionBlocks = () => {
  return (
    <section className="bg-[#0b1424] py-16 text-white border-y border-vald-soft-grey/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white">WHAT ARE YOU LOOKING FOR?</h2>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer p-6 hover:bg-white/5 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-b from-vald-gold/0 to-vald-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-vald-gold mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                  {solution.icon}
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-vald-gold transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-vald-text-grey text-sm mb-8 max-w-[150px] group-hover:text-white/80 transition-colors duration-300">
                  {solution.description}
                </p>
                
                <div className="mt-auto">
                  <ArrowRight className="text-vald-gold w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
