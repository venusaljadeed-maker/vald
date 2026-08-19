import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-[#0b1424] text-white pt-20 pb-10 border-t border-vald-soft-grey/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:pr-12">
            <Link href="/" className="flex items-center gap-4 mb-8 hover:opacity-90 transition-opacity">
              <div className="flex items-baseline">
                <span className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">
                  VALD
                </span>
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-vald-gold ml-1.5"></span>
              </div>
              <div className="w-px h-14 md:h-20 bg-white/30"></div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-xl md:text-2xl text-white tracking-widest leading-none mb-1.5">
                  VENUS ALJADEED
                </span>
                <span className="text-[9px] md:text-[11px] font-semibold text-white tracking-[0.25em] uppercase leading-tight mb-0.5">
                  Wholesale Trading LLC
                </span>
                <span className="text-[8px] md:text-[10px] font-medium text-white/70 tracking-[0.15em] uppercase leading-tight">
                  Building & Construction Materials
                </span>
              </div>
            </Link>
            <p className="text-vald-text-grey text-sm leading-relaxed mb-6">
              Importers, Exporters & Suppliers of General Hardware, Safety, Lifting, Tools & Industrial Solutions in UAE and across the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-vald-gold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-vald-text-grey">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-vald-gold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-vald-text-grey">
              <li className="flex gap-3">
                <span className="text-vald-gold mt-0.5">📍</span>
                <span>Dubai, UAE</span>
              </li>
              <li className="flex gap-3">
                <span className="text-vald-gold mt-0.5"><Phone className="w-4 h-4" /></span>
                <a href="tel:+971552555517" className="hover:text-white transition-colors">+971 55 255 5517</a>
              </li>
              <li className="flex gap-3">
                <span className="text-vald-gold mt-0.5"><Mail className="w-4 h-4" /></span>
                <a href="mailto:info@vald.com" className="hover:text-white transition-colors">info@vald.com</a>
              </li>
              <li className="flex gap-3">
                <span className="text-vald-gold mt-0.5">🕒</span>
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-vald-soft-grey/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-vald-text-grey">
          <p>© 2026 VALD. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
