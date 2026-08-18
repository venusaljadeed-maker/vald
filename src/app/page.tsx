import React from "react";
import { Hero } from "@/components/hero/Hero";
import { SolutionBlocks } from "@/components/solutions/SolutionBlocks";
import { ValdStandard } from "@/components/brand/ValdStandard";
import { ProductEcosystem } from "@/components/products/ProductEcosystem";
import { IndustryShowcase } from "@/components/industries/IndustryShowcase";
import { BrandStrip } from "@/components/brands/BrandStrip";
import { Metrics } from "@/components/home/Metrics";
import { FinalCTA } from "@/components/quote/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionBlocks />
      <ValdStandard />
      <ProductEcosystem />
      <IndustryShowcase />
      <Metrics />
      <BrandStrip />
      <FinalCTA />
    </>
  );
}
