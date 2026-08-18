import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", withArrow, children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 ease-out uppercase tracking-wide";

    const variants = {
      primary: "bg-vald-gold text-vald-dark-navy hover:bg-yellow-400",
      secondary: "bg-vald-deep-navy text-vald-white hover:bg-vald-dark-navy",
      dark: "bg-vald-dark-navy text-vald-white hover:bg-black",
      outline: "border border-vald-deep-navy text-vald-deep-navy hover:bg-vald-deep-navy hover:text-vald-white",
      ghost: "text-vald-deep-navy hover:bg-vald-soft-grey",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-sm",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className, "group")}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
