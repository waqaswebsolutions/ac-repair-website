import Link from 'next/link';
import { FaCalendarCheck } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="container-custom py-8 sm:py-12">
      <div className="bg-gradient-to-br from-primary to-primary-light rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-soft relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-accent-cool/5 rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Elevate Your Comfort
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-md mx-auto mt-3">
            Book your premium service today and experience true peace of mind.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent-cool hover:bg-accent-cool-hover text-white font-bold px-8 sm:px-10 py-4 rounded-full transition-all hover:scale-105 shadow-glow-cool mt-6 cursor-pointer"
          >
            <FaCalendarCheck />
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
} 