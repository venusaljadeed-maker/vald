"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const MetricItem = ({ value, label, suffix = "", prefix = "" }: { value: number, label: string, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const duration = 2000; // 2 seconds

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(value * easeProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-vald-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 flex items-center justify-center">
          <span className="text-vald-gold mr-1">{prefix}</span>
          {count}
          <span className="text-vald-gold ml-1">{suffix}</span>
        </div>
        <div className="h-px w-12 bg-vald-gold/50 mx-auto mb-4"></div>
        <h4 className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest">{label}</h4>
      </motion.div>
    </div>
  );
};

export const Metrics = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0A1A2F]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-vald-gold/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-vald-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Proven Track Record</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Delivering Scale & Precision</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <MetricItem value={15} label="Years of Excellence" suffix="+" />
          <MetricItem value={50} label="Global Brand Partners" suffix="+" />
          <MetricItem value={10} label="Thousand Products" suffix="K+" />
          <MetricItem value={24} label="Hour Expert Support" suffix="/7" />
        </div>
      </div>
    </section>
  );
};
