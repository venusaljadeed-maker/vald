"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { contactData } from "@/lib/contact";
import { motion, AnimatePresence } from "framer-motion";

export const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Use a clean WhatsApp link without non-numeric characters
  const cleanPhone = contactData.phone.replace(/[^0-9]/g, "");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-vald-soft-grey/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:hidden pb-safe"
        >
          <div className="flex h-[70px]">
            <a 
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center text-vald-deep-navy border-r border-vald-soft-grey/20 hover:bg-vald-off-white active:bg-vald-soft-grey/50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mb-1 text-[#25D366]" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
            </a>
            
            <a 
              href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
              className="flex-1 flex flex-col items-center justify-center text-vald-deep-navy hover:bg-vald-off-white active:bg-vald-soft-grey/50 transition-colors"
            >
              <Phone className="w-5 h-5 mb-1 text-vald-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
            </a>
            
            <Link 
              href="/contact"
              className="flex-[1.5] bg-vald-dark-navy text-white flex items-center justify-center gap-2 hover:bg-black active:bg-black/90 transition-colors"
            >
              <span className="text-xs font-semibold uppercase tracking-wider">Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
