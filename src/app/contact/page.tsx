"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form visually after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-vald-off-white min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-vald-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-vald-deep-navy mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-vald-text-grey">
            Whether you are looking for a specific tool, requesting a bulk order quote, or need technical support, our experts are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          {/* Contact Box (Form) */}
          <div className="bg-white p-8 md:p-10 shadow-lg shadow-vald-deep-navy/5 border border-vald-soft-grey/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:border-vald-gold/30">
            <h3 className="text-2xl font-display font-bold text-vald-deep-navy mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="firstName" className="text-xs font-bold text-vald-deep-navy uppercase tracking-wider transition-colors group-focus-within:text-vald-gold">First Name *</label>
                  <input type="text" id="firstName" className="w-full bg-vald-off-white border-2 border-transparent focus:bg-white focus:border-vald-gold focus:ring-4 focus:ring-vald-gold/10 rounded-md px-4 py-3 outline-none transition-all duration-300" placeholder="John" required />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="lastName" className="text-xs font-bold text-vald-deep-navy uppercase tracking-wider transition-colors group-focus-within:text-vald-gold">Last Name *</label>
                  <input type="text" id="lastName" className="w-full bg-vald-off-white border-2 border-transparent focus:bg-white focus:border-vald-gold focus:ring-4 focus:ring-vald-gold/10 rounded-md px-4 py-3 outline-none transition-all duration-300" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2 group">
                <label htmlFor="email" className="text-xs font-bold text-vald-deep-navy uppercase tracking-wider transition-colors group-focus-within:text-vald-gold">Email Address *</label>
                <input type="email" id="email" className="w-full bg-vald-off-white border-2 border-transparent focus:bg-white focus:border-vald-gold focus:ring-4 focus:ring-vald-gold/10 rounded-md px-4 py-3 outline-none transition-all duration-300" placeholder="john@company.com" required />
              </div>
              
              <div className="space-y-2 group">
                <label htmlFor="company" className="text-xs font-bold text-vald-deep-navy uppercase tracking-wider transition-colors group-focus-within:text-vald-gold">Company Name</label>
                <input type="text" id="company" className="w-full bg-vald-off-white border-2 border-transparent focus:bg-white focus:border-vald-gold focus:ring-4 focus:ring-vald-gold/10 rounded-md px-4 py-3 outline-none transition-all duration-300" placeholder="Company L.L.C" />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="text-xs font-bold text-vald-deep-navy uppercase tracking-wider transition-colors group-focus-within:text-vald-gold">Message *</label>
                <textarea id="message" rows={4} className="w-full bg-vald-off-white border-2 border-transparent focus:bg-white focus:border-vald-gold focus:ring-4 focus:ring-vald-gold/10 rounded-md px-4 py-3 outline-none transition-all duration-300 resize-none" placeholder="How can we help you today?" required></textarea>
              </div>

              <Button 
                type="submit" 
                variant="dark" 
                className={`w-full relative overflow-hidden transition-all duration-300 ${isSubmitted ? 'bg-green-600 hover:bg-green-700' : ''}`}
                disabled={isSubmitting}
              >
                <span className={`transition-opacity duration-300 ${isSubmitting || isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
                  SEND MESSAGE
                </span>
                
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                
                {isSubmitted && (
                  <div className="absolute inset-0 flex items-center justify-center gap-2 text-white">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>MESSAGE SENT</span>
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-display font-bold text-vald-deep-navy mb-8">
                Our Office
              </h3>
              
              <div className="space-y-8">
                <div className="group flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 bg-white shadow-sm border border-vald-soft-grey/30 rounded-xl flex items-center justify-center flex-shrink-0 text-vald-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-vald-gold group-hover:text-vald-deep-navy group-hover:shadow-md">
                    <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vald-deep-navy mb-1 uppercase tracking-wider text-sm transition-colors duration-300 group-hover:text-vald-gold">Headquarters</h4>
                    <p className="text-vald-text-grey leading-relaxed transition-colors duration-300 group-hover:text-vald-deep-navy">
                      Dubai, United Arab Emirates<br />
                      Serving clients across the GCC, Africa, and Global Markets.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 bg-white shadow-sm border border-vald-soft-grey/30 rounded-xl flex items-center justify-center flex-shrink-0 text-vald-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-vald-gold group-hover:text-vald-deep-navy group-hover:shadow-md">
                    <Phone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vald-deep-navy mb-1 uppercase tracking-wider text-sm transition-colors duration-300 group-hover:text-vald-gold">Phone</h4>
                    <a href="tel:+971552555517" className="text-vald-text-grey transition-colors duration-300 group-hover:text-vald-deep-navy inline-block mb-1">
                      +971 55 255 5517
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 bg-white shadow-sm border border-vald-soft-grey/30 rounded-xl flex items-center justify-center flex-shrink-0 text-vald-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-vald-gold group-hover:text-vald-deep-navy group-hover:shadow-md">
                    <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vald-deep-navy mb-1 uppercase tracking-wider text-sm transition-colors duration-300 group-hover:text-vald-gold">Email</h4>
                    <a href="mailto:info@vald.com" className="text-vald-text-grey transition-colors duration-300 group-hover:text-vald-deep-navy">
                      info@vald.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 cursor-default">
                  <div className="w-12 h-12 bg-white shadow-sm border border-vald-soft-grey/30 rounded-xl flex items-center justify-center flex-shrink-0 text-vald-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-vald-gold group-hover:text-vald-deep-navy group-hover:shadow-md">
                    <Clock className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                  </div>
                  <div>
                    <h4 className="font-bold text-vald-deep-navy mb-1 uppercase tracking-wider text-sm transition-colors duration-300 group-hover:text-vald-gold">Business Hours</h4>
                    <p className="text-vald-text-grey transition-colors duration-300 group-hover:text-vald-deep-navy">
                      Monday - Saturday<br />
                      8:00 AM - 6:00 PM (GST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-200 w-full relative overflow-hidden group rounded-xl shadow-inner border border-vald-soft-grey/20 cursor-pointer">
              <div className="absolute inset-0 bg-vald-deep-navy/5 flex items-center justify-center transition-all duration-500 group-hover:bg-vald-deep-navy/80">
                <div className="flex flex-col items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <MapPin className="w-8 h-8 text-vald-gold" />
                  <p className="text-white font-bold uppercase tracking-widest text-sm">
                    Open in Maps
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                  <MapPin className="w-6 h-6 text-vald-deep-navy/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
