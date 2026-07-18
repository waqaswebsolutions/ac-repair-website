'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSnowflake, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#footer' },  // ✅ Contact → Footer
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-xl border-b border-primary/5 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 text-2xl font-extrabold text-primary">
            <FaSnowflake className="text-accent-cool text-xl" />
            Air<span className="text-accent-cool">Prestige</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-accent-cool after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"  // ✅ Book Service → Contact Form
              className="bg-accent-cool hover:bg-accent-cool-hover text-white font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 shadow-glow-cool cursor-pointer"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary text-2xl cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-primary/5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-base font-medium hover:text-accent-cool transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"  // ✅ Book Service → Contact Form
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-accent-cool hover:bg-accent-cool-hover text-white font-bold px-6 py-3 rounded-full transition-all mt-2 cursor-pointer"
            >
              Book Service
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}