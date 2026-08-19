import React from "react";
import { contactData } from "@/lib/contact";
import { ArrowRight } from "lucide-react";

export const ContactMethods = () => {
  return (
    <div className="mt-16">
      <h3 className="text-sm font-semibold tracking-widest text-vald-gold uppercase mb-8">
        TALK TO VALD
      </h3>
      
      <div className="grid grid-cols-2 gap-8 md:gap-12">
        <a 
          href={`https://wa.me/${contactData.whatsapp}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block"
        >
          <h4 className="text-xl font-display font-bold text-vald-deep-navy mb-2">WhatsApp</h4>
          <span className="text-sm font-medium text-vald-text-grey group-hover:text-vald-gold transition-colors inline-flex items-center gap-2">
            Start a conversation <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
        </a>

        <a 
          href={`tel:${contactData.phone.replace(/\s+/g, '')}`} 
          className="group block"
        >
          <h4 className="text-xl font-display font-bold text-vald-deep-navy mb-2">Call</h4>
          <span className="text-sm font-medium text-vald-text-grey group-hover:text-vald-gold transition-colors">
            {contactData.phone}
          </span>
        </a>

        <a 
          href={`mailto:${contactData.email}`} 
          className="group block"
        >
          <h4 className="text-xl font-display font-bold text-vald-deep-navy mb-2">Email</h4>
          <span className="text-sm font-medium text-vald-text-grey group-hover:text-vald-gold transition-colors">
            {contactData.email}
          </span>
        </a>

        <a 
          href={contactData.mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block"
        >
          <h4 className="text-xl font-display font-bold text-vald-deep-navy mb-2">Visit</h4>
          <span className="text-sm font-medium text-vald-text-grey group-hover:text-vald-gold transition-colors inline-flex items-center gap-2">
            {contactData.location} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </div>
  );
};
