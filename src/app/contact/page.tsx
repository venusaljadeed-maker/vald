import React from "react";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-vald-off-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-vald-deep-navy mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-vald-text-grey">
            Whether you are looking for a specific tool, requesting a bulk order quote, or need technical support, our experts are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Box (Form) */}
          <div className="bg-white p-8 md:p-10 shadow-sm border border-vald-soft-grey/50">
            <h3 className="text-2xl font-display font-bold text-vald-deep-navy mb-6">
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-vald-deep-navy uppercase tracking-wider">First Name *</label>
                  <input type="text" id="firstName" className="w-full bg-vald-off-white border-b-2 border-transparent focus:border-vald-gold px-4 py-3 outline-none transition-colors" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-vald-deep-navy uppercase tracking-wider">Last Name *</label>
                  <input type="text" id="lastName" className="w-full bg-vald-off-white border-b-2 border-transparent focus:border-vald-gold px-4 py-3 outline-none transition-colors" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-vald-deep-navy uppercase tracking-wider">Email Address *</label>
                <input type="email" id="email" className="w-full bg-vald-off-white border-b-2 border-transparent focus:border-vald-gold px-4 py-3 outline-none transition-colors" placeholder="john@company.com" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-vald-deep-navy uppercase tracking-wider">Company Name</label>
                <input type="text" id="company" className="w-full bg-vald-off-white border-b-2 border-transparent focus:border-vald-gold px-4 py-3 outline-none transition-colors" placeholder="Company L.L.C" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-vald-deep-navy uppercase tracking-wider">Message *</label>
                <textarea id="message" rows={4} className="w-full bg-vald-off-white border-b-2 border-transparent focus:border-vald-gold px-4 py-3 outline-none transition-colors resize-none" placeholder="How can we help you today?" required></textarea>
              </div>

              <Button type="submit" variant="dark" className="w-full">
                SEND MESSAGE
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
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vald-gold/10 rounded-full flex items-center justify-center flex-shrink-0 text-vald-gold mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vald-deep-navy mb-1 uppercase tracking-wider text-sm">Headquarters</h4>
                    <p className="text-vald-text-grey leading-relaxed">
                      Dubai, United Arab Emirates<br />
                      Serving clients across the GCC, Africa, and Global Markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vald-gold/10 rounded-full flex items-center justify-center flex-shrink-0 text-vald-gold mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vald-deep-navy mb-1 uppercase tracking-wider text-sm">Phone</h4>
                    <a href="tel:+971552555517" className="text-vald-text-grey hover:text-vald-gold transition-colors inline-block mb-1">
                      +971 55 255 5517
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vald-gold/10 rounded-full flex items-center justify-center flex-shrink-0 text-vald-gold mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vald-deep-navy mb-1 uppercase tracking-wider text-sm">Email</h4>
                    <a href="mailto:info@vald.com" className="text-vald-text-grey hover:text-vald-gold transition-colors">
                      info@vald.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vald-gold/10 rounded-full flex items-center justify-center flex-shrink-0 text-vald-gold mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vald-deep-navy mb-1 uppercase tracking-wider text-sm">Business Hours</h4>
                    <p className="text-vald-text-grey">
                      Monday - Saturday<br />
                      8:00 AM - 6:00 PM (GST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-200 w-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-vald-deep-navy/5 flex items-center justify-center transition-colors group-hover:bg-transparent">
                <p className="text-vald-text-grey font-medium uppercase tracking-widest text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> View on Map
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
