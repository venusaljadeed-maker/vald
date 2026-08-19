import React from "react";
import { contactData } from "@/lib/contact";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const LocationCard = () => {
  return (
    <div className="mt-12 relative w-full max-w-sm rounded-xl overflow-hidden group cursor-pointer border border-vald-soft-grey/20">
      {/* Background Map Placeholder */}
      <div className="absolute inset-0 bg-[#0b1424] transition-transform duration-700 ease-out group-hover:scale-105">
        <div className="w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent flex items-center justify-center">
          {/* Subtle stylized map lines could go here */}
          <div className="w-[150%] h-[150%] rounded-full border border-white/5 absolute -top-1/4 -left-1/4"></div>
          <div className="w-[100%] h-[100%] rounded-full border border-white/5 absolute top-1/4 left-1/4"></div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative p-6 h-48 flex flex-col items-center justify-center text-center z-10">
        <h4 className="text-sm font-semibold tracking-widest uppercase text-white/90 mb-4">
          DUBAI • UAE
        </h4>

        {/* Animated Marker */}
        <div className="relative mb-6">
          <motion.div 
            className="absolute inset-0 bg-vald-gold rounded-full opacity-30 blur-sm"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <MapPin className="w-8 h-8 text-vald-gold relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>

        {/* Hover Text */}
        <a 
          href={contactData.mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-[#0b1424]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"
        >
          <span className="text-white font-medium text-sm tracking-widest uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Location <span className="text-vald-gold">→</span>
          </span>
        </a>
      </div>
    </div>
  );
};
