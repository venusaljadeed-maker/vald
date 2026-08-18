"use client";

import React from "react";
import { ArrowRight, Clock, DollarSign, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  { text: "Quick Response", icon: <Clock className="w-4 h-4" /> },
  { text: "Best Price Assured", icon: <ShieldCheck className="w-4 h-4" /> },
  { text: "On-time Delivery", icon: <Truck className="w-4 h-4" /> },
  { text: "Expert Support", icon: <DollarSign className="w-4 h-4" /> },
];

export const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-[#0b1424] overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-vald-gold/20 via-[#0b1424] to-[#0b1424] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1424] via-[#0b1424]/90 to-transparent"></div>
        {/* Placeholder for sparks/grinder image */}
        <div className="w-full h-full bg-[url('/images/sparks.jpg')] bg-cover bg-right bg-no-repeat opacity-20 mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-vald-gold"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-vald-gold">
              CAN&apos;T FIND WHAT YOU NEED?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            We&apos;ll source it. <br />
            You focus on <span className="text-vald-gold">building</span>.
          </h2>

          <p className="text-white/80 text-lg mb-10 max-w-lg leading-relaxed">
            Send us your requirement and our team will get back to you with the best solution.
          </p>

          <Button variant="primary" size="lg" withArrow className="mb-12">
            SEND YOUR REQUIREMENT
          </Button>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-vald-gold">
                <div className="w-8 h-8 rounded-full border border-vald-gold/30 flex items-center justify-center">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold text-white/90">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
