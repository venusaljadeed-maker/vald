import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VALD. | Premium Industrial Hardware Supplier in Dubai, UAE",
  description: "VALD is a leading importer, exporter & supplier of industrial hardware, lifting, safety, welding equipment and tools in Dubai, UAE.",
};
import { Hero } from "@/components/hero/Hero";
import { BrandStrip } from "@/components/brands/BrandStrip";
import { FirmIntro } from "@/components/brand/FirmIntro";
import { ValdStandard } from "@/components/brand/ValdStandard";
import { ProductEcosystem } from "@/components/products/ProductEcosystem";
import { FinalCTA } from "@/components/quote/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <FirmIntro />
      <ValdStandard />
      <ProductEcosystem />
      <FinalCTA />
    </>
  );
}
