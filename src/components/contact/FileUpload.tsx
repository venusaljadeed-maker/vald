import React, { useState, useRef } from "react";
import { UploadCloud, X, File } from "lucide-react";
import { cn } from "@/lib/utils";

export const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full mb-8">
      <h4 className="text-xs font-semibold tracking-widest uppercase text-vald-deep-navy mb-4">
        Specification / Reference (Optional)
      </h4>
      
      {!file ? (
        <div 
          className={cn(
            "w-full h-32 border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition-colors duration-300 cursor-pointer",
            isDragging ? "border-vald-gold bg-vald-gold/5" : "border-vald-soft-grey hover:border-vald-gold/50 hover:bg-white"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={inputRef} 
            onChange={handleChange} 
            className="hidden" 
            accept="image/*,.pdf,.doc,.docx" 
          />
          <UploadCloud className={cn("w-6 h-6 mb-2 transition-colors", isDragging ? "text-vald-gold" : "text-vald-text-grey")} />
          <p className="text-sm font-medium text-vald-deep-navy mb-1">
            DROP YOUR REQUIREMENT HERE
          </p>
          <p className="text-xs text-vald-text-grey tracking-widest uppercase">
            PDF / IMAGE / SPECIFICATION
          </p>
        </div>
      ) : (
        <div className="w-full p-4 bg-white border border-vald-gold/30 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 bg-vald-off-white rounded flex items-center justify-center flex-shrink-0">
              <File className="w-5 h-5 text-vald-gold" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-vald-deep-navy truncate">{file.name}</p>
              <p className="text-xs text-vald-text-grey">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={() => setFile(null)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-vald-text-grey hover:text-red-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
