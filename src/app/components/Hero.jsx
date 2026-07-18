import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaShieldAlt, FaBolt, FaCalendarCheck, FaFileInvoice } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center section-padding bg-bg-light relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-[-30%] right-[-10%] w-[700px] h-[700px] bg-accent-cool/5 rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight">
                            Elite <span className="text-accent-cool relative">
                                Cooling
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-accent-cool/15 rounded-full -z-10" />
                            </span> &<br />Heating Mastery
                        </h1>

                        <p className="mt-5 text-lg sm:text-xl text-text-soft max-w-lg">
                            White‑glove HVAC service with certified technicians, transparent pricing, and 24/7 emergency care.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="#contact"
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full transition-all cursor-pointer"
                            >
                                <FaFileInvoice className="inline mr-2" />
                                Request Quote
                            </Link>
                        </div>

                        <div className="mt-10 pt-6 border-t border-primary/10 flex flex-wrap gap-6 sm:gap-10">
                            <span className="flex items-center gap-2 font-semibold text-sm text-text-dark">
                                <FaCheckCircle className="text-accent-cool text-lg" />
                                Licensed
                            </span>
                            <span className="flex items-center gap-2 font-semibold text-sm text-text-dark">
                                <FaCheckCircle className="text-accent-cool text-lg" />
                                Insured
                            </span>
                            <span className="flex items-center gap-2 font-semibold text-sm text-text-dark">
                                <FaShieldAlt className="text-accent-cool text-lg" />
                                100% Guarantee
                            </span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-soft hover:shadow-xl transition-all hover:scale-[1.01]">
                        <Image
    src="/ac-repair.jpg"
    alt="HVAC technician servicing air conditioning unit"
    width={800}
    height={600}
    className="w-full h-[420px] sm:h-[480px] object-cover"
    priority
/>
                        <div className="absolute top-6 right-6 bg-accent-warm text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-glow-warm animate-pulse-badge">
                            <FaBolt className="text-sm" />
                            24/7 Emergency
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}