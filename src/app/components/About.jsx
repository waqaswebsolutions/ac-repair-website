import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="section-title">About AirPrestige</h2>
            <p className="text-text-soft text-base sm:text-lg mt-4">
              With over 15 years of elite service, AirPrestige delivers premium HVAC solutions to discerning homeowners and businesses. We combine technical mastery with honest, transparent pricing.
            </p>
            <p className="text-text-soft text-base sm:text-lg mt-4">
              Our certified technicians use state‑of‑the‑art equipment to ensure your comfort all year round.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-accent-cool hover:bg-accent-cool-hover text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-glow-cool mt-6 cursor-pointer"
            >
              Learn More
            </Link>
          </div>
          
          {/* ✅ REPLACE THIS SECTION - Image instead of icon */}
          <div className="rounded-3xl overflow-hidden shadow-soft h-[320px] relative hover:scale-[1.01] transition-all">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
              alt="HVAC technician installing equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}