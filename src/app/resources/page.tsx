import { RequirementProcess } from "@/components/process/RequirementProcess";
import { FinalCTA } from "@/components/quote/FinalCTA";

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

      <RequirementProcess />

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
                items: ["Pipe Wrenches & Spanners", "Aviation Snips & Bolt Cutters", "Screwdriver & Socket Sets", "Allen Keys & Hammers", "C-Clamps & Vices", "Pneumatic Air Tools", "Magnetic Base Drilling Machines", "Cordless & Hand Drills", "Angle Grinders & Polishers"]
              },
              {
                title: "Cutting & Grinding",
                image: "/images/cutting-grinding.jpg",
                items: ["Ceramic Grinding Wheels", "Angle Grinding Discs", "Metal & Diamond Cutting Discs", "Cup Wire Brushes", "Circular Saw Blades", "Flap Discs"]
              },
              {
                title: "Fasteners & Hardware",
                image: "/images/fasteners.jpg",
                items: ["Self Drilling & Machine Screws", "Dry Wall & Chip Board Screws", "Coach Screws & Washers", "Hex Nuts & Anchor Bolts", "Rivets & Allen Bolts", "Dome Head Cup Nuts", "Shear Studs & Threaded Bars", "Clear, Brown & Duct Tapes"]
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
