import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { EnquiryType } from "./EnquirySelector";
import { EditorialInput } from "./EditorialInput";
import { ProductSearch } from "./ProductSearch";
import { FileUpload } from "./FileUpload";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { contactData } from "@/lib/contact";

const baseSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  company: z.string().optional(),
});

const formSchemas = {
  product: baseSchema.extend({
    product: z.string().min(1, "Product is required"),
    quantity: z.string().min(1, "Quantity is required"),
    requirement: z.string().optional(),
  }),
  quote: baseSchema.extend({
    productCategory: z.string().min(1, "Category is required"),
    quantity: z.string().min(1, "Quantity is required"),
    deliveryLocation: z.string().min(1, "Location is required"),
    additionalReqs: z.string().optional(),
  }),
  custom: baseSchema.extend({
    lookingFor: z.string().min(1, "Please describe what you are looking for"),
    quantity: z.string().optional(),
    additionalInfo: z.string().optional(),
  }),
};

interface DynamicContactFormProps {
  enquiryType: EnquiryType;
}

interface CombinedFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  product?: string;
  quantity?: string;
  requirement?: string;
  productCategory?: string;
  deliveryLocation?: string;
  additionalReqs?: string;
  lookingFor?: string;
  additionalInfo?: string;
}

export const DynamicContactForm = ({ enquiryType }: DynamicContactFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<CombinedFormData>({
    resolver: zodResolver(formSchemas[enquiryType] as any) as any,
    mode: "onBlur"
  });

  const nextStep = async () => {
    // Validate current step fields before moving on
    let fieldsToValidate: string[] = [];
    if (step === 1) {
      if (enquiryType === "product") fieldsToValidate = ["product", "quantity"];
      if (enquiryType === "quote") fieldsToValidate = ["productCategory", "quantity", "deliveryLocation"];
      if (enquiryType === "custom") fieldsToValidate = ["lookingFor"];
    } else if (step === 2) {
      fieldsToValidate = ["firstName", "lastName", "email", "phone"];
    }

    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) setStep(step + 1);
  };

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    let message = `*New Enquiry from VALD Website*\n\n`;
    message += `*Name:* ${data.firstName} ${data.lastName}\n`;
    message += `*Email:* ${data.email}\n`;
    message += `*Phone:* ${data.phone}\n`;
    if (data.company) message += `*Company:* ${data.company}\n`;
    message += `\n*Enquiry Type:* ${enquiryType.toUpperCase()}\n`;
    
    if (enquiryType === "product") {
      message += `*Product:* ${data.product}\n`;
      message += `*Quantity:* ${data.quantity}\n`;
    } else if (enquiryType === "quote") {
      if (data.product) message += `*Product:* ${data.product}\n`;
      if (data.quantity) message += `*Quantity:* ${data.quantity}\n`;
      if (data.deliveryLocation) message += `*Location:* ${data.deliveryLocation}\n`;
    } else if (enquiryType === "custom") {
      message += `*Looking For:* ${data.lookingFor}\n`;
      if (data.quantity) message += `*Quantity:* ${data.quantity}\n`;
    }
    
    if (data.additionalInfo) {
      message += `*Additional Info:* ${data.additionalInfo}\n`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactData.whatsapp}?text=${encodedMessage}`;

    // Process and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-full flex flex-col items-center justify-center text-center p-12 bg-white shadow-xl shadow-vald-deep-navy/5 border border-vald-soft-grey/30"
      >
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="font-display font-bold text-3xl text-vald-deep-navy mb-4">
          REQUIREMENT RECEIVED.
        </h3>
        <p className="text-vald-text-grey max-w-md mx-auto mb-12">
          Thank you. Our team will review your requirement and get back to you shortly.
        </p>
        
        <div className="pt-8 border-t border-vald-soft-grey/20 w-full">
          <p className="text-sm font-semibold tracking-widest uppercase text-vald-deep-navy mb-4">
            Need an immediate response?
          </p>
          <a 
            href={`https://wa.me/${contactData.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-vald-gold font-bold hover:text-yellow-600 transition-colors"
          >
            WhatsApp VALD <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 shadow-xl shadow-vald-deep-navy/5 border border-vald-soft-grey/30 relative overflow-hidden">
      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-vald-soft-grey/30">
        <motion.div 
          className="h-full bg-vald-gold"
          initial={{ width: "33%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="flex items-center justify-between mb-10">
        <h3 className="text-sm font-semibold tracking-widest text-vald-gold uppercase">
          {step === 1 && "01 / WHAT DO YOU NEED?"}
          {step === 2 && "02 / YOUR DETAILS"}
          {step === 3 && "03 / REQUIREMENT"}
        </h3>
        <span className="text-xs font-bold text-vald-text-grey tracking-widest">
          0{step} / 03
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {enquiryType === "product" && (
                <>
                  <ProductSearch />
                  <EditorialInput label="Specific Product Name" {...register("product")} error={errors.product?.message as string} />
                  <EditorialInput label="Required Quantity" {...register("quantity")} error={errors.quantity?.message as string} />
                </>
              )}
              {enquiryType === "quote" && (
                <>
                  <ProductSearch />
                  <div className="grid grid-cols-2 gap-6">
                    <EditorialInput label="Quantity" {...register("quantity")} error={errors.quantity?.message as string} />
                    <EditorialInput label="Delivery Location" {...register("deliveryLocation")} error={errors.deliveryLocation?.message as string} />
                  </div>
                </>
              )}
              {enquiryType === "custom" && (
                <>
                  <EditorialInput label="What are you looking for?" isTextArea {...register("lookingFor")} error={errors.lookingFor?.message as string} />
                  <EditorialInput label="Estimated Quantity" {...register("quantity")} />
                </>
              )}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <EditorialInput label="First Name *" {...register("firstName")} error={errors.firstName?.message as string} />
                <EditorialInput label="Last Name *" {...register("lastName")} error={errors.lastName?.message as string} />
              </div>
              <EditorialInput label="Email Address *" type="email" {...register("email")} error={errors.email?.message as string} />
              <div className="grid grid-cols-2 gap-6">
                <EditorialInput label="Phone Number *" type="tel" {...register("phone")} error={errors.phone?.message as string} />
                <EditorialInput label="Company Name" {...register("company")} />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <FileUpload />
              <EditorialInput label="Any additional information?" isTextArea {...register("additionalInfo")} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-between">
          {step > 1 ? (
            <button 
              type="button" 
              onClick={() => setStep(step - 1)}
              className="text-xs font-bold text-vald-text-grey hover:text-vald-deep-navy tracking-widest uppercase transition-colors"
            >
              ← Back
            </button>
          ) : (
            <div></div> // Spacer
          )}

          {step < 3 ? (
            <Button type="button" variant="dark" onClick={nextStep} withArrow>
              CONTINUE
            </Button>
          ) : (
            <Button 
              type="submit" 
              variant="dark"
              disabled={isSubmitting}
              className="min-w-[160px]"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "SEND REQUIREMENT"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
