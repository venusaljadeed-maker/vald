export default function AboutPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-vald-white text-center px-6 pt-32 pb-20">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-vald-deep-navy mb-4">About Us</h1>
      <p className="text-vald-text-grey max-w-lg">
        This is a demo page for the About Us section. In a full implementation, this page would contain the company history, mission, vision, and team details.
      </p>
    </div>
  );
}
