import { RequirementProcess } from "@/components/process/RequirementProcess";

export default function AboutPage() {
  return (
    <>
      <div className="pt-32 pb-24 bg-white text-center px-6 relative overflow-hidden">
        <div className="relative z-10 container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-vald-gold/50"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vald-gold">OUR STORY</span>
            <div className="w-8 h-[1px] bg-vald-gold/50"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-vald-deep-navy mb-8 tracking-tight leading-tight">
            Elevating Industrial <br/> Procurement Worldwide
          </h1>
          <p className="text-vald-text-grey text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            VALD is a premier international industrial supply brand dedicated to bridging the gap between rigorous industrial requirements and flawless execution. We source, verify, and deliver high-grade machinery, safety equipment, and precision tools to operations across the globe.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
            <div>
              <h3 className="text-3xl font-display font-bold text-[#0A1A2F] mb-2">25+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Years of Trust</p>
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-[#0A1A2F] mb-2">500+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Global Partners</p>
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-[#0A1A2F] mb-2">10k+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Products Delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirement Process Component inserted below the About content */}
      <RequirementProcess />
    </>
  );
}
