import React from "react";
import { ShieldCheck, Globe, Clock, Headphones } from "lucide-react";

const PRINCIPLES = [
  {
    id: "quality",
    title: "QUALITY",
    description: "Carefully selected products.\nTested & certified.",
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    id: "sourcing",
    title: "SOURCING",
    description: "Global network. Right\nproducts. Right price.",
    icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    id: "reliability",
    title: "RELIABILITY",
    description: "On-time delivery. Every time.\nAssured.",
    icon: <Clock className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    id: "support",
    title: "SUPPORT",
    description: "Expert guidance before &\nafter your purchase.",
    icon: <Headphones className="w-6 h-6" strokeWidth={1.5} />,
  },
];

export const ValdStandard = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Manifesto Statement */}
          <div className="pt-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-gray-400"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A1A2F]">THE VALD STANDARD</span>
            </div>
            
            <h2 className="text-[44px] lg:text-[52px] font-sans font-bold text-[#0A1A2F] leading-[1.15] mb-8 tracking-tight whitespace-nowrap">
              We don&apos;t just supply.<br />
              We add <span className="text-[#F1B111]">value</span>.
            </h2>
            <p className="text-[15px] font-sans text-[#6B7280] leading-[1.8] max-w-[420px]">
              For over a decade, we have been more than a vendor to<br />
              our clients.<br />
              We are a trusted sourcing partner ensuring your operations<br />
              never stop.
            </p>
          </div>

          {/* Right: Principles */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14 pt-4">
            {PRINCIPLES.map((principle) => (
              <div key={principle.id} className="flex flex-col">
                <div className="w-[60px] h-[60px] rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#0A1A2F] mb-6 shadow-sm">
                  {principle.icon}
                </div>
                <h3 className="font-sans text-[13px] font-bold uppercase tracking-widest text-[#0A1A2F] mb-3">
                  {principle.title}
                </h3>
                <p className="text-[14px] font-sans text-[#6B7280] leading-[1.6] whitespace-pre-line">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
