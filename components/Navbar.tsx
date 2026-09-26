"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LogoSVG from "./LogoSVG";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#aboutus" },
    { name: "Our Services", href: "#ourservices" },
    { name: "Rooms", href: "#rooms" },
    { name: "Contact Us", href: "#contactus" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/95 backdrop-blur-md shadow-soft border-b border-cream-300/80 py-3.5"
          : "bg-cream-100/80 backdrop-blur-sm py-5 border-b border-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo Link */}
        <Link
          href="#"
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1 -ml-1 transition-opacity hover:opacity-90"
          aria-label="Banani Hotel Arena Homepage"
        >
          {/* Desktop Full Lockup */}
          <div className="hidden sm:block">
            <LogoSVG variant="full" className="h-10 text-charcoal" />
          </div>
          {/* Mobile Icon-only or Compact */}
          <div className="sm:hidden flex items-center gap-2.5">
            <LogoSVG variant="icon" className="h-9 w-9 text-charcoal" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-sm tracking-wider font-semibold text-charcoal uppercase">
                Banani
              </span>
              <span className="text-[9px] tracking-widest text-gold uppercase font-medium">
                Hotel Arena
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-charcoal-700 hover:text-charcoal px-3.5 py-2 text-sm tracking-wide font-medium transition-colors relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </Link>
          ))}
        </div>

        {/* Desktop Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/+8801352066041"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium text-charcoal-700 hover:text-charcoal transition-colors px-3 py-2 rounded-full border border-cream-300 hover:border-gold/50 bg-white/60"
            aria-label="WhatsApp +8801352066041"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+8801352066041"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-800 text-cream-50 hover:text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-soft-sm hover:shadow-soft hover:-translate-y-0.5"
            aria-label="Book Now by calling +8801352066041"
          >
            <Phone className="w-3.5 h-3.5 text-gold-light" />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+8801352066041"
            className="inline-flex items-center justify-center p-2 rounded-full bg-gold text-white text-xs shadow-sm"
            aria-label="Call +8801352066041"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-charcoal hover:text-gold hover:bg-cream-200/60 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-cream-50/98 border-b border-cream-300 shadow-lg px-6 pt-4 pb-8 transition-all animate-fade-in"
          id="mobile-navigation"
        >
          <div className="flex flex-col space-y-3 pb-6 border-b border-cream-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-charcoal-800 hover:text-gold text-base font-medium py-2 tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-5 space-y-3">
            <a
              href="tel:+8801352066041"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-charcoal text-cream-50 py-3 rounded-full text-xs font-medium tracking-widest uppercase shadow-soft-sm"
            >
              <Phone className="w-4 h-4 text-gold-light" />
              <span>Book Now: +8801352066041</span>
            </a>
            <a
              href="https://wa.me/+8801352066041"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 border border-cream-300 bg-white py-3 rounded-full text-xs font-medium tracking-widest uppercase text-charcoal"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
