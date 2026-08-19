import React from "react";
import { cn } from "@/lib/utils";

export interface EditorialInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextArea?: boolean;
}

export const EditorialInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  EditorialInputProps
>(({ label, error, isTextArea, className, ...props }, ref) => {
  return (
    <div className="relative group w-full mb-6">
      {isTextArea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={cn(
            "block w-full bg-transparent border-0 border-b border-vald-soft-grey/40 py-4 px-0 text-vald-deep-navy focus:ring-0 focus:border-vald-gold transition-colors duration-300 peer resize-none",
            "placeholder-transparent",
            className
          )}
          placeholder={label}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={cn(
            "block w-full bg-transparent border-0 border-b border-vald-soft-grey/40 py-4 px-0 text-vald-deep-navy focus:ring-0 focus:border-vald-gold transition-colors duration-300 peer",
            "placeholder-transparent",
            className
          )}
          placeholder={label}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      
      <label
        className={cn(
          "absolute left-0 text-[10px] text-vald-deep-navy font-semibold tracking-widest uppercase transition-all duration-300 pointer-events-none -top-3",
          "peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-vald-text-grey",
          "peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-vald-gold"
        )}
      >
        {label}
      </label>
      
      {error && (
        <p className="absolute -bottom-5 left-0 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
});

EditorialInput.displayName = "EditorialInput";
