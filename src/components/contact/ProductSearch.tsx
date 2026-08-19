import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "Lifting",
  "Safety",
  "Welding",
  "Tools & Machines",
  "Cutting & Grinding",
  "Abrasives",
  "Drill Bits",
  "Painting Tools",
  "Packing Materials",
  "Rivets / Screws / Nuts & Bolts",
  "Garage",
  "Protection Products"
];

export const ProductSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCategories = CATEGORIES.filter(c => 
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full mb-6" ref={wrapperRef}>
      <label className="block text-[10px] font-semibold tracking-widest uppercase text-vald-deep-navy mb-2">
        What product are you looking for?
      </label>
      
      <div 
        className={cn(
          "flex items-center justify-between w-full border-b py-3 cursor-pointer transition-colors duration-300",
          isOpen ? "border-vald-gold" : "border-vald-soft-grey/40 hover:border-vald-gold/50"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={cn("text-lg", selected ? "text-vald-deep-navy" : "text-vald-text-grey")}>
          {selected || "Select a category..."}
        </span>
        <ChevronDown className={cn("w-5 h-5 text-vald-deep-navy transition-transform duration-300", isOpen && "rotate-180")} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-vald-soft-grey/30 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center px-4 py-3 border-b border-vald-soft-grey/20 bg-vald-off-white">
            <Search className="w-4 h-4 text-vald-text-grey mr-3" />
            <input 
              type="text" 
              placeholder="Search categories..."
              className="w-full bg-transparent border-none outline-none text-sm text-vald-deep-navy placeholder:text-vald-text-grey"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div className="max-h-60 overflow-y-auto">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(category => (
                <div 
                  key={category}
                  className="px-4 py-3 text-sm text-vald-deep-navy hover:bg-vald-gold/10 cursor-pointer flex items-center justify-between transition-colors"
                  onClick={() => {
                    setSelected(category);
                    setIsOpen(false);
                    setSearch("");
                  }}
                >
                  {category}
                  {selected === category && <Check className="w-4 h-4 text-vald-gold" />}
                </div>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-sm text-vald-text-grey">
                No categories found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
