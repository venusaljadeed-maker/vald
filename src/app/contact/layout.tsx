import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote",
  description: "Contact VALD for premium industrial hardware, lifting equipment, safety gear, and more. Get a custom quote for your requirements in Dubai, UAE.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
