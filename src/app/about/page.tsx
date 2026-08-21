import type { Metadata } from "next";
import { RequirementProcess } from "@/components/process/RequirementProcess";

export const metadata: Metadata = {
  title: "About Us | Industrial Hardware Supplier Dubai",
  description: "Learn more about VALD, a premier international industrial supply brand dedicated to bridging the gap between rigorous industrial requirements and flawless execution.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-[#0b1424] text-center px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-vald-gold/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-vald-gold/50"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vald-gold">ABOUT US</span>
            <div className="w-8 h-[1px] bg-vald-gold/50"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
            Rooted in Legacy, <br className="hidden md:block"/> Built for the Future
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6 font-light">
            Venus Al Jadeed Wholesale Trading LLC is a dynamic, independent trading enterprise based in Dubai, UAE, specializing in high-grade building materials, hardware, and structural supplies.
          </p>
        </div>
      </div>

      {/* Heritage Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <span className="text-vald-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Heritage</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-vald-deep-navy mb-8">How the Name was Formed</h2>
          <div className="relative">
            <span className="absolute -top-10 -left-4 md:-left-8 text-8xl text-gray-100 font-serif z-0">"</span>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto relative z-10 font-light">
              While the company is an independent business owned and operated in Dubai, its foundation is deeply inspired by a rich personal legacy. The company name pays homage to <strong className="text-vald-deep-navy font-semibold">Venus Enterprises</strong>—a respected timber business established in India by my grandfather, <strong className="text-vald-deep-navy font-semibold">K.P. Mustafa Haji</strong>. Guided by the timeless principles of integrity, quality, and hard work passed down through generations, Venus Al Jadeed bridges classic business values with modern trading efficiency.
            </p>
            <span className="absolute -bottom-16 -right-4 md:-right-8 text-8xl text-gray-100 font-serif z-0 rotate-180">"</span>
          </div>
        </div>
      </section>

      {/* Headquarters Image Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="group relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-vald-deep-navy/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img 
              src="/images/vald-dubai-warehouse.jpg" 
              alt="VALD Headquarters in Dubai" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle Overlay Label */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-vald-gold font-bold tracking-wider text-xs uppercase block mb-1">Global Headquarters</span>
              <span className="text-vald-deep-navy font-display font-bold text-lg">Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-vald-deep-navy mb-6">Global Reach & Export Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Headquartered in Dubai’s premier trading hub, our supply operations extend well beyond the UAE. We actively manage wholesale exports and bulk supply solutions tailored for key international markets:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "GCC Region", desc: "Fast-track supply chain and bulk delivery across Saudi Arabia, Oman, Qatar, Bahrain, and Kuwait." },
              { title: "African Markets", desc: "Dependable sourcing, packaging, and shipping of hardware and construction materials for expanding infrastructure projects across the continent." },
              { title: "International Exports", desc: "Flexible, fully compliant international shipping, documentation, and trade logistics to meet global demand." }
            ].map((market, i) => (
              <div key={i} className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-300 cursor-default">
                <div className="w-12 h-12 bg-vald-gold/10 text-vald-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-vald-gold group-hover:text-white transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-vald-deep-navy mb-3 group-hover:text-vald-gold transition-colors">{market.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{market.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-vald-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Brand Identity</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-vald-deep-navy mb-6">Our Core Values — VALD</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our identity and daily operations are driven by four core pillars that form our brand identity, VALD:
              </p>
              
              <div className="space-y-4">
                {[
                  { l: "V", title: "Value", desc: "Delivering top-tier construction and hardware products at competitive, market-leading wholesale prices." },
                  { l: "A", title: "Authenticity", desc: "Ensuring 100% genuine sourcing, transparent trade terms, and straightforward business dealings." },
                  { l: "L", title: "Logistics", desc: "Operating a streamlined supply chain to guarantee prompt delivery to your job sites or designated ports." },
                  { l: "D", title: "Dependability", desc: "Serving as a reliable, long-term supply partner for contractors, builders, and regional distributors." }
                ].map((val, i) => (
                  <div key={i} className="group flex gap-4 p-4 -mx-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 flex-shrink-0 bg-vald-deep-navy text-vald-gold font-display font-bold text-2xl rounded flex items-center justify-center group-hover:bg-vald-gold group-hover:text-white transition-colors duration-300">
                      {val.l}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-vald-deep-navy mb-1 group-hover:text-vald-gold transition-colors">— {val.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-vald-deep-navy/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img src="/images/vald-staff-planning.jpg" alt="Core Values" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-vald-deep-navy mb-16">Why Choose Venus Al Jadeed?</h2>
          
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {[
              { title: "Values Inspired by Heritage", desc: "Built on a foundation of trust and integrity inspired by the legacy of K.P. Mustafa Haji." },
              { title: "End-to-End Export Support", desc: "Full management of bulk trade orders, international shipping documentation, and customs compliance." },
              { title: "Uncompromising Quality", desc: "Sourced strictly from verified and certified manufacturers." },
              { title: "On-Time Delivery", desc: "Streamlined logistics designed to keep your construction projects moving without delay." }
            ].map((reason, i) => (
              <div key={i} className="group flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:bg-[#0b1424] hover:border-[#0b1424] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="mt-1 w-6 h-6 flex-shrink-0 text-vald-gold group-hover:scale-125 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-vald-deep-navy mb-2 group-hover:text-white transition-colors">{reason.title}</h4>
                  <p className="text-gray-600 text-sm group-hover:text-gray-300 transition-colors">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Process Component inserted below the About content */}
      <RequirementProcess />
    </>
  );
}
