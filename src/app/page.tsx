import React from "react";
import { Hero } from "@/components/hero/Hero";
import { BrandStrip } from "@/components/brands/BrandStrip";
import { ValdStandard } from "@/components/brand/ValdStandard";
import { ProductEcosystem } from "@/components/products/ProductEcosystem";
import { FinalCTA } from "@/components/quote/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <ValdStandard />
      <ProductEcosystem />
      <FinalCTA />
    </>
  );
}
