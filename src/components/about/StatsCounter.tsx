"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value, label, suffix = "+" }: { value: number, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 40);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative p-8 rounded-2xl bg-white border border-vald-soft-grey/30 shadow-xl shadow-vald-deep-navy/5 hover:-translate-y-2 transition-transform duration-300 group overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-vald-gold to-yellow-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
      <h3 className="text-4xl md:text-5xl font-display font-bold text-vald-deep-navy mb-3">
        {count}{suffix}
      </h3>
      <p className="text-xs text-vald-text-grey uppercase tracking-widest font-bold">
        {label}
      </p>
    </motion.div>
  );
};

export const StatsCounter = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
      <Counter value={25} label="Years of Trust" />
      <Counter value={500} label="Global Partners" />
      <Counter value={10} label="Products Delivered" suffix="k+" /> 
    </div>
  );
};
