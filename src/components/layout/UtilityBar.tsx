import React from "react";
import { contactData } from "@/lib/contact";

export const UtilityBar = () => {
  return (
    <div className="bg-vald-off-white text-vald-text-grey text-xs py-1.5 px-6 flex justify-between items-center hidden lg:flex border-b border-vald-soft-grey">
      <div className="flex gap-6">
        <span>{contactData.location}</span>
        <a href={`tel:${contactData.phone.replace(/\s+/g, '')}`} className="hover:text-vald-deep-navy transition-colors">
          {contactData.phone}
        </a>
        <a href={`mailto:${contactData.email}`} className="hover:text-vald-deep-navy transition-colors">
          {contactData.email}
        </a>
      </div>
      <div className="flex gap-4">
        <button className="hover:text-vald-deep-navy transition-colors">Download Catalogue</button>
        <button className="hover:text-vald-deep-navy transition-colors">EN</button>
      </div>
    </div>
  );
};
