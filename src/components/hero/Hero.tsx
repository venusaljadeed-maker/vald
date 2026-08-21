"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 md:pb-20 flex items-center bg-vald-off-white overflow-hidden">
      {/* Background large watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[20vw] font-display font-black text-vald-soft-grey/40 select-none z-0 tracking-tighter mix-blend-multiply">
        VALD.
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="max-w-xl w-full pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="w-6 md:w-8 h-0.5 bg-vald-deep-navy"></div>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-vald-deep-navy">
              Importers, Exporters & Suppliers Of
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display font-bold text-vald-deep-navy mb-6 md:mb-8 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 5rem)" }}
          >
            BUILT FOR <br /> THE WORK. <br />
            <span className="text-vald-gold">READY FOR <br /> THE WORLD.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-vald-text-grey text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-lg leading-relaxed"
          >
            Industrial hardware, lifting, safety, welding and tools — sourced for businesses that demand reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button variant="dark" size="lg" className="w-full sm:w-auto" withArrow>
              Explore Solutions
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" withArrow>
              Talk to VALD
            </Button>
          </motion.div>
        </div>

        {/* Right Content / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Mockup for the industrial background and product composition */}
          <picture>
             {/* Use a smaller image for mobile to save bandwidth */}
             <source media="(max-width: 768px)" srcSet="/images/sparks.jpg" />
             <source media="(min-width: 769px)" srcSet="/images/sparks.jpg" />
             <img src="/images/sparks.jpg" alt="Industrial Hardware" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" />
          </picture>
          
          <div className="absolute inset-0 bg-[#0b1424]/90 flex items-center justify-center p-6 md:p-8">
            {/* Subtle gold lighting effect */}
            <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-vald-gold/20 rounded-full blur-[80px] md:blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-vald-gold/10 rounded-full blur-[100px] md:blur-[120px]"></div>
            
            <div className="relative z-10 w-full h-full border border-white/10 rounded-xl bg-gradient-to-tr from-white/5 to-transparent flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
               <span className="text-white/50 text-xs md:text-sm font-mono mb-4">[ PREMIUM PRODUCT COMPOSITION ]</span>
               <p className="text-white/80 max-w-sm text-xs md:text-sm leading-relaxed">Industrial equipment including lifting hook, chain hoist, welding machine, safety helmet, gloves, and power tools.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
