"use client";

import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full-width Desktop Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
