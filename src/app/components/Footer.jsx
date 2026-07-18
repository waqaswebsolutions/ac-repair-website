import Link from 'next/link';
import { FaSnowflake, FaPhone, FaEnvelope, FaMapPin, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#testimonials' },
];
const serviceLinks = ['AC Repair', 'Installation', 'Maintenance', 'Heating'];

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-white/80 pt-16 pb-8 mt-8">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="#" className="flex items-center gap-2 text-2xl font-extrabold text-white">
              <FaSnowflake className="text-accent-cool" />
              Air<span className="text-accent-cool">Prestige</span>
            </Link>
            <p className="text-sm mt-3 max-w-xs text-white/60">
              Premium air conditioning and heating repair. Trusted since 2010.
            </p>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="text-white/60 hover:text-accent-cool hover:-translate-y-0.5 transition-all cursor-pointer text-lg" />
              <FaTwitter className="text-white/60 hover:text-accent-cool hover:-translate-y-0.5 transition-all cursor-pointer text-lg" />
              <FaInstagram className="text-white/60 hover:text-accent-cool hover:-translate-y-0.5 transition-all cursor-pointer text-lg" />
              <FaYoutube className="text-white/60 hover:text-accent-cool hover:-translate-y-0.5 transition-all cursor-pointer text-lg" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4">Quick Links</h5>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm text-white/60 hover:text-accent-cool hover:translate-x-1 transition-all py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4">Services</h5>
            {serviceLinks.map((link) => (
              <Link
                key={link}
                href="#services"
                className="block text-sm text-white/60 hover:text-accent-cool hover:translate-x-1 transition-all py-1"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Contact - Plain text, not clickable */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4">Contact</h5>
            <div className="flex items-center gap-3 text-sm text-white/60 py-1.5">
              <FaPhone className="text-accent-cool" />
              (800) 555‑0123
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60 py-1.5">
              <FaEnvelope className="text-accent-cool" />
              info@airprestige.com
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60 py-1.5">
              <FaMapPin className="text-accent-cool" />
              123 Comfort St, USA
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/40">
          © 2026 AirPrestige HVAC. All rights reserved. <span className="text-accent-cool font-semibold">Premium Service</span>
        </div>
      </div>
    </footer>
  );
}