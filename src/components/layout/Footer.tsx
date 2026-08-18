import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-[#0b1424] text-white pt-20 pb-10 border-t border-vald-soft-grey/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:pr-8">
            <Link href="/" className="flex items-baseline mb-6">
              <span className="font-display font-bold text-4xl text-white tracking-tight">
                VALD
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-vald-gold ml-1"></span>
            </Link>
            <p className="text-vald-text-grey text-sm leading-relaxed mb-6">
              Importers, Exporters & Suppliers of General Hardware, Safety, Lifting, Tools & Industrial Solutions in UAE and across the world.
            </p>
            <div className="text-xs text-vald-text-grey">
              <p className="mb-1">© 2026 VALD. All Rights Reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-vald-gold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-vald-text-grey">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/brands" className="hover:text-white transition-colors">Brands</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-vald-gold mb-6">Product Categories</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-vald-text-grey">
              <Link href="/products/lifting" className="hover:text-white transition-colors">Lifting Equipment</Link>
              <Link href="/products/abrasives" className="hover:text-white transition-colors">Abrasives</Link>
              <Link href="/products/safety" className="hover:text-white transition-colors">Safety Equipment</Link>
              <Link href="/products/drill-bits" className="hover:text-white transition-colors">Drill Bits</Link>
              <Link href="/products/welding" className="hover:text-white transition-colors">Welding Equipment</Link>
              <Link href="/products/fasteners" className="hover:text-white transition-colors">Fasteners</Link>
              <Link href="/products/tools" className="hover:text-white transition-colors">Tools & Machines</Link>
              <Link href="/products/garage" className="hover:text-white transition-colors">Garage</Link>
              <Link href="/products/cutting" className="hover:text-white transition-colors">Cutting & Grinding</Link>
              <Link href="/products/protection" className="hover:text-white transition-colors">Protection</Link>
            </div>
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
