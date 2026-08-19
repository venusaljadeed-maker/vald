"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "RESOURCES", href: "/resources" },
  { name: "CONTACT US", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="VALD" 
            width={220} 
            height={70} 
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-vald-deep-navy hover:text-vald-gold transition-colors flex items-center gap-1 uppercase tracking-widest relative group"
            >
              {link.name}
              {/* Hover underline */}
              <span className="absolute -bottom-1.5 left-1/2 w-0 h-0.5 bg-vald-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button variant="dark" className="hidden sm:flex">
            GET A QUOTE
          </Button>
          <button className="xl:hidden w-10 h-10 border border-vald-soft-grey rounded-full flex items-center justify-center text-vald-deep-navy hover:bg-vald-soft-grey transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
