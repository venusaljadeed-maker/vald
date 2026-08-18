"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Globe, ShieldCheck, Truck } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "YOUR REQUIREMENT",
    description: "You tell us what you need.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    id: "02",
    title: "OUR SOURCING",
    description: "We source from trusted manufacturers.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: "03",
    title: "QUALITY CHECK",
    description: "Every product goes through strict quality checks.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: "04",
    title: "DELIVERY",
    description: "On-time delivery to your location, every time.",
    icon: <Truck className="w-6 h-6" />,
  },
];

export const RequirementProcess = () => {
  return (
    <section className="py-24 bg-vald-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-vald-text-grey"></div>
          <span className="text-xs font-semibold uppercase tracking-widest text-vald-deep-navy">FROM REQUIREMENT TO REALITY</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Statement */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-vald-deep-navy leading-tight mb-6">
              You have a requirement. <br />
              We deliver the <span className="text-vald-gold">solution</span>.
            </h2>
            <p className="text-vald-text-grey text-sm leading-relaxed mb-8">
              Tell us what you need and our team will source, verify and deliver exactly what your business requires.
            </p>
            <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-vald-deep-navy border border-vald-soft-grey px-6 py-3 hover:bg-vald-soft-grey transition-colors">
              HOW IT WORKS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Right: Process Steps */}
          <div className="lg:col-span-8 relative mt-16 lg:mt-0">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-vald-soft-grey z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left relative group"
                >
                  <div className="w-24 h-24 rounded-full bg-white border border-vald-soft-grey flex items-center justify-center text-vald-deep-navy mb-8 shadow-sm relative z-10 group-hover:border-vald-gold transition-colors duration-300">
                    {step.icon}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-vald-gold flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  <span className="text-vald-text-grey font-mono text-xs tracking-widest mb-2 block">{step.id}</span>
                  <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-vald-deep-navy mb-3">{step.title}</h3>
                  <p className="text-vald-text-grey text-xs leading-relaxed max-w-[150px]">{step.description}</p>
                  
                  {index < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-4 w-8 text-vald-text-grey">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
