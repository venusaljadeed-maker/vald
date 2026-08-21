"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { contactData } from "@/lib/contact";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact Us", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isHome = pathname === "/";
  // The header should be hidden if we are on the home page, at the top, and the menu isn't open.
  const isHiddenOnHome = isHome && !isScrolled && !isMenuOpen;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isHiddenOnHome
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100 bg-white shadow-md py-3"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-[60]" onClick={() => setIsMenuOpen(false)}>
            <Image 
              src="/images/logo.png" 
              alt="VALD" 
              width={220} 
              height={70} 
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold hover:text-vald-gold transition-colors flex items-center gap-1 uppercase tracking-widest relative group text-vald-deep-navy"
              >
                {link.name}
                {/* Hover underline */}
                <span className="absolute -bottom-1.5 left-1/2 w-0 h-0.5 bg-vald-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 relative z-[60]">
            <Link 
              href="/contact" 
              className="hidden sm:flex px-5 py-2.5 text-xs inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 ease-out uppercase tracking-wide bg-vald-dark-navy text-vald-white hover:bg-black"
            >
              GET A QUOTE
            </Link>
            <button 
              className="xl:hidden w-10 h-10 border rounded-full flex items-center justify-center transition-colors border-vald-soft-grey text-vald-deep-navy hover:bg-vald-soft-grey bg-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white xl:hidden flex flex-col pt-24 pb-safe overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 gap-6 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-display font-bold text-vald-deep-navy hover:text-vald-gold transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-8 bg-vald-off-white mt-auto border-t border-vald-soft-grey/20 flex flex-col gap-4"
            >
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between bg-vald-dark-navy text-white px-6 py-4 rounded-lg font-semibold uppercase tracking-wide"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href={`https://wa.me/${contactData.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between border-2 border-vald-dark-navy text-vald-dark-navy px-6 py-4 rounded-lg font-semibold uppercase tracking-wide"
              >
                WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
