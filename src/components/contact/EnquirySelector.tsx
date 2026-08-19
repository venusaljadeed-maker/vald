import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package, Calculator, Lightbulb, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export type EnquiryType = "product" | "quote" | "custom" | "support";

const ENQUIRY_OPTIONS = [
  {
    id: "product" as EnquiryType,
    title: "A PRODUCT",
    description: "Find a specific product or category.",
    icon: <Package className="w-5 h-5" />
  },
  {
    id: "quote" as EnquiryType,
    title: "A QUOTE",
    description: "Request pricing for a quantity/order.",
    icon: <Calculator className="w-5 h-5" />
  },
  {
    id: "custom" as EnquiryType,
    title: "A CUSTOM REQUIREMENT",
    description: "Tell us what you're looking for and let VALD source it.",
    icon: <Lightbulb className="w-5 h-5" />
  },
  {
    id: "support" as EnquiryType,
    title: "TECHNICAL SUPPORT",
    description: "Need help choosing the right equipment?",
    icon: <Wrench className="w-5 h-5" />
  }
];

interface EnquirySelectorProps {
  selected: EnquiryType;
  onSelect: (type: EnquiryType) => void;
}

export const EnquirySelector = ({ selected, onSelect }: EnquirySelectorProps) => {
  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold tracking-widest text-vald-gold uppercase mb-6">
        I NEED...
      </h3>
      
      <div className="flex flex-col gap-3">
        {ENQUIRY_OPTIONS.map((option) => {
          const isSelected = selected === option.id;
          
          return (
            <div
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                "group relative w-full p-5 flex items-center justify-between cursor-pointer transition-all duration-300 overflow-hidden",
                isSelected 
                  ? "bg-vald-deep-navy text-white shadow-lg shadow-vald-deep-navy/20" 
                  : "bg-white border border-vald-soft-grey/30 text-vald-deep-navy hover:border-vald-gold/50"
              )}
            >
              {/* Animated Background for Selection */}
              {isSelected && (
                <motion.div 
                  layoutId="enquiry-bg"
                  className="absolute inset-0 bg-vald-deep-navy"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <div className="relative z-10 flex items-center gap-4">
                <div className={cn(
                  "flex items-center justify-center transition-colors duration-300",
                  isSelected ? "text-vald-gold" : "text-vald-text-grey group-hover:text-vald-gold"
                )}>
                  {option.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg tracking-wide uppercase mb-1">
                    {option.title}
                  </h4>
                  <p className={cn(
                    "text-xs font-medium",
                    isSelected ? "text-white/80" : "text-vald-text-grey"
                  )}>
                    {option.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10">
                {isSelected ? (
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-2 text-vald-gold"
                  >
                    <span className="w-8 h-px bg-vald-gold"></span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2 text-vald-text-grey group-hover:text-vald-gold transition-colors">
                    <span className="w-4 h-px bg-current transition-all duration-300 group-hover:w-8"></span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
