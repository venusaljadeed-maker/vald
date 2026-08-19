"use client";

import React, { useState } from "react";
import { EnquiryType, EnquirySelector } from "@/components/contact/EnquirySelector";
import { DynamicContactForm } from "@/components/contact/DynamicContactForm";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { LocationCard } from "@/components/contact/LocationCard";

export default function ContactPage() {
  const [enquiryType, setEnquiryType] = useState<EnquiryType>("product");

  return (
    <div className="bg-vald-off-white min-h-screen pt-32 pb-24 overflow-hidden relative">
      {/* Background Watermark */}
      <div className="absolute top-1/4 -right-[10%] text-[20vw] font-display font-black text-vald-deep-navy/[0.02] pointer-events-none select-none tracking-tighter leading-none z-0">
        VALD.
      </div>
      
      {/* Subtle Industrial Texture (Simulated with CSS) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0yMCAyMGgtdjIwSDIweiIgZmlsbD0iIzA5MTIyNSIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-50 z-0 pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="w-full mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-vald-deep-navy leading-[0.9] tracking-tight mb-4">
            LET'S BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-vald-gold to-yellow-600">SOMETHING</span> THAT WORKS.
          </h1>
          <p className="text-lg font-medium text-vald-text-grey max-w-md">
            Tell us what you need. We'll help you find the right product, source it, and get it moving.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* LEFT COLUMN: 45% */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="mb-12">
              <EnquirySelector selected={enquiryType} onSelect={setEnquiryType} />
            </div>

            {/* Banner Image filling the empty space */}
            <div className="hidden lg:block mt-8">
              <img 
                src="/images/contact-logo.png" 
                alt="VALD Banner" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: 55% */}
          <div className="w-full lg:w-[55%]">
            <div className="sticky top-32">
              <DynamicContactForm enquiryType={enquiryType} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-vald-soft-grey p-4 z-50 flex items-center justify-between shadow-2xl">
        <span className="text-xs font-bold text-vald-deep-navy uppercase tracking-widest">
          Need an immediate response?
        </span>
        <a 
          href={`https://wa.me/971552555517`}
          className="bg-vald-gold text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider shadow hover:bg-yellow-600 transition-colors"
        >
          WhatsApp VALD
        </a>
      </div>
    </div>
  );
}
