import React from "react";

export const UtilityBar = () => {
  return (
    <div className="bg-vald-off-white text-vald-text-grey text-xs py-1.5 px-6 flex justify-between items-center hidden lg:flex border-b border-vald-soft-grey">
      <div className="flex gap-6">
        <span>Dubai, UAE</span>
        <a href="tel:+971000000000" className="hover:text-vald-deep-navy transition-colors">
          +971 00 000 0000
        </a>
        <a href="mailto:info@vald.com" className="hover:text-vald-deep-navy transition-colors">
          info@vald.com
        </a>
      </div>
      <div className="flex gap-4">
        <button className="hover:text-vald-deep-navy transition-colors">Download Catalogue</button>
        <button className="hover:text-vald-deep-navy transition-colors">EN</button>
      </div>
    </div>
  );
};
