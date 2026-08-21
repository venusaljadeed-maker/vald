import type { Metadata } from "next";
import { FinalCTA } from "@/components/quote/FinalCTA";

export const metadata: Metadata = {
  title: "Products & Resources | Industrial Hardware Catalog",
  description: "Explore the comprehensive VALD product catalog. Sourcing premium lifting equipment, safety gear, welding machines, and tools in Dubai.",
};

export default function ResourcesPage() {
  return (
    <>
      <div className="pt-32 pb-24 bg-[#0A1A2F] text-center px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-vald-gold/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-vald-gold/50"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vald-gold">VALD KNOWLEDGE HUB</span>
            <div className="w-8 h-[1px] bg-vald-gold/50"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Resources & <br/>Procurement Process
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to understand how we source, verify, and deliver industrial hardware to power your operations seamlessly.
          </p>
        </div>
      </div>

      {/* Detailed Product Catalog - Editorial Layout */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center mb-24">
            <span className="text-vald-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Comprehensive Inventory</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1A2F]">Detailed Product Catalog</h2>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our exhaustive range of industrial hardware, safety equipment, and precision tools sourced globally to meet your exacting standards.
            </p>
          </div>

          <div className="flex flex-col gap-16 lg:gap-24">
            {[
              {
                title: "Lifting & Handling",
                image: "/images/lifting-equipment.jpg",
                items: ["Plain & Geared Trolleys", "Chain Blocks & Lever Hoists", "Electric Chain & Wire Hoists", "Plate & Pipe Lifting Clamps", "Manual Hand & Wire Rope Winches", "Pallet Trucks & Stackers", "Mechanical Jacks", "Polyester Webbing & Cargo Lashing"]
              },
              {
                title: "Safety & Protection",
                image: "/images/safety-equipment.jpg",
                items: ["Safety & Welding Helmets", "High-Vis Vests & Harnesses", "Earmuffs, Earplugs & Glasses", "Working Gloves & Welding Gear", "Safety Shoes & Rigger Boots", "Warning Tapes & Safety Mesh", "Traffic Cones & Fire Blankets", "Masks, Face Shields & PPE Kits"]
              },
              {
                title: "Welding Equipment",
                image: "/images/welding-equipment.jpg",
                items: ["Arc, TIG & MIG Welding Machines", "Welding Cables & Connectors", "Electrode Holders & Earth Clamps", "Electrode Ovens", "MIG & TIG Torches & Accessories", "Cutting Tips, Handles & Nozzles", "Regulators & Twin Hoses", "Journeyman Welding Sets"]
              },
              {
                title: "Tools & Machinery",
                image: "/images/tools-machines-2.jpg",
                items: ["Pipe Wrenches & Spanners", "Aviation Snips & Bolt Cutters", "Screwdriver & Socket Sets", "Allen Keys & Hammers", "Pneumatic Air Tools", "Magnetic Base Drilling Machines", "Cordless & Hand Drills", "Angle Grinders & Polishers"]
              },
              {
                title: "Cutting & Grinding",
                image: "/images/cutting-grinding.jpg",
                items: ["Ceramic Grinding Wheels", "Angle Grinding Discs", "Metal & Diamond Cutting Discs", "Cup Wire Brushes", "Circular Saw Blades", "Flap Discs"]
              },
              {
                title: "Fasteners & Hardware",
                image: "/images/fasteners.jpg",
                items: [
                  "Self Drilling & SDS Screws",
                  "Hex, Carriage & Roofing Bolts",
                  "Expansion, Sleeve & Ceiling Anchors",
                  "Cap Allen Bolts & U-Bolts",
                  "Fix Bolts & Metal Frame Anchors",
                  "Flange, Lock & Wing Nuts",
                  "Clinching, Cage & Special Nuts",
                  "Spring, Star & Square Washers",
                  "Threaded Bars & Foundation Bolts",
                  "Lifting Eye Bolts & Nuts",
                  "Shackles, Snap Hooks & Turnbuckles",
                  "Wire Rope Clips & Quick Links"
                ]
              },
              {
                title: "Abrasives & Drill Bits",
                image: "/images/drill-bits.jpg",
                items: ["Emery Paper & Cloth Rolls", "Surface Finishing Pads", "Velcro Sanding Discs", "Metal & Twist Drill Bits", "H.S.S. Cutters", "Hole Saws Sets"]
              },
              {
                title: "Garage & Painting",
                image: "/images/garage.jpg",
                items: ["Sigma Air Compressors", "Battery Chargers & Boosters", "Bottle & Trolley Jacks", "Hydraulic Car Lifts", "Paint Brushes & Rollers", "Spray Guns & Chisels", "Extension Poles & Paint Trays"]
              },
              {
                title: "Building Materials",
                image: "/images/building-materials.jpg",
                items: ["Industrial Plywood Sheets", "Solid Wooden Beams", "Structural Timber", "Marine Grade Plywood", "Formwork Plywood", "MDF & Particle Boards"]
              },
              {
                title: "Scaffolding Materials",
                image: "/images/scaffolding.jpg",
                items: ["Heavy Duty Steel Frames", "Galvanized Metal Planks", "Scaffolding Pipes & Tubes", "Couplers & Clamps", "Base Jacks & U-Heads", "Aluminum Scaffolding Towers"]
              },
              {
                title: "Packing Materials",
                image: "/images/packing-materials.jpg",
                items: ["Clear, Brown & Duct Tapes", "Masking & Warning Tapes", "Stretch Film & Bubble Rolls", "Sealant Tape & Rubber Sheets", "Corrugated Rolls", "Carton Boxes"]
              },
              {
                title: "Wire",
                image: "/images/wire-products.jpg",
                items: ["Black Annealed Wire", "Galvanized Wire", "PVC Coated Wire", "Binding Wire", "Stainless Steel Wire", "Barbed Wire", "Welded Wire Mesh", "Chain Link Fencing"]
              },
              {
                title: "Electrical Cables",
                image: "/images/electrical-cables.jpg",
                items: ["PVC Flexible Cables", "Armoured Cables", "Control Cables", "Submersible Cables", "Marine Cables", "Low Voltage Cables", "Rubber Cables", "Panel Wires"]
              }
            ].map((category, idx) => (
              <div key={idx} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
                {/* Image Section - Alternating Left/Right */}
                <div className={`lg:col-span-5 h-[320px] relative overflow-hidden rounded-2xl shadow-lg ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-[#0A1A2F]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-display font-bold text-[#0A1A2F] mb-8 pb-4 border-b-2 border-vald-gold/30 inline-block">
                    {category.title}
                  </h3>
                  
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-[15px] text-gray-600 flex items-start group/item p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors">
                        <div className="mt-1 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-vald-gold/10 text-vald-gold mr-3">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
