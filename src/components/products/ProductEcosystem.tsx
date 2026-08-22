import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { ProductEcosystemMobile } from "./ProductEcosystemMobile";

const CATEGORIES = [
  {
    id: "01",
    title: "LIFTING EQUIPMENT",
    colSpan: "col-span-12 md:col-span-5",
    image: "/images/lifting-equipment.jpg",
  },
  {
    id: "02",
    title: "SAFETY EQUIPMENT",
    colSpan: "col-span-12 md:col-span-4",
    image: "/images/safety-equipment.jpg",
  },
  {
    id: "03",
    title: "WELDING EQUIPMENT",
    colSpan: "col-span-12 md:col-span-3",
    image: "/images/welding-equipment.jpg",
  },
  {
    id: "04",
    title: "TOOLS & MACHINES",
    colSpan: "col-span-12 md:col-span-3",
    image: "/images/tools-machines-2.jpg",
  },
  {
    id: "05",
    title: "CUTTING & GRINDING",
    colSpan: "col-span-12 md:col-span-3",
    image: "/images/cutting-grinding.jpg",
  },
  {
    id: "06",
    title: "DRILL BITS & ABRASIVES",
    colSpan: "col-span-12 md:col-span-2",
    image: "/images/drill-bits.jpg",
  },
  {
    id: "07",
    title: "FASTENERS & FIXINGS",
    colSpan: "col-span-12 md:col-span-2",
    image: "/images/fasteners.jpg",
  },
  {
    id: "08",
    title: "GARAGE & PACKING",
    colSpan: "col-span-12 md:col-span-2",
    image: "/images/garage.jpg",
  },
];

export const ProductEcosystem = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-y border-vald-soft-grey/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-vald-deep-navy">OUR PRODUCT ECOSYSTEM</h2>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
            <span className="w-1.5 h-1.5 bg-vald-gold"></span>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-12 gap-4">
          {CATEGORIES.map((category, index) => (
            <FadeIn
              key={category.id}
              delay={index * 0.05}
              margin="-50px"
              className={category.colSpan}
            >
              <Link
                href="/resources"
                className="group cursor-pointer relative overflow-hidden rounded-xl bg-[#0b1424] min-h-[280px] flex flex-col justify-between p-8 block w-full h-full"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03101F] via-[#03101F]/30 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-60"></div>
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="text-vald-gold font-mono text-sm tracking-widest block transition-transform duration-300 group-hover:-translate-y-1">
                    {category.id}
                  </span>
                  
                  <div className="mt-auto transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="font-display text-white text-xl md:text-2xl font-bold mb-4 w-2/3 leading-tight">
                      {category.title}
                    </h3>
                    
                    <div className="flex items-center text-vald-gold text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      View Products
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile Swipe Container (Client Component) */}
        <ProductEcosystemMobile categories={CATEGORIES} />
      </div>
    </section>
  );
};
