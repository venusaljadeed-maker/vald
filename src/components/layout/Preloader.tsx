"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-white flex items-center justify-center"
        >
          {/* Pulsing and scaling animation for the logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-72 h-72 md:w-[500px] md:h-[500px]"
          >
            {/* 
              Using mix-blend-multiply will remove any solid white background 
              from the image, perfectly blending it into the white preloader background.
            */}
            <Image
              src="/images/preloader-logo.png"
              alt="VALD Loading"
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
