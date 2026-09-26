"use client";

import React from "react";
import Link from "next/link";
import LogoSVG from "./LogoSVG";
import { Phone, MessageCircle, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#aboutus" },
    { name: "Our Services", href: "#ourservices" },
    { name: "Rooms", href: "#rooms" },
    { name: "Contact Us", href: "#contactus" },
  ];

  const roomLinks = [
    { name: "Standard Single Room Ac (TK 3,141)", href: "#rooms" },
    { name: "Standard Couple Room Ac (TK 3,141)", href: "#rooms" },
    { name: "Deluxe Couple Room Ac (TK 4,041)", href: "#rooms" },
    { name: "Premium Family Room Ac (TK 4,941)", href: "#rooms" },
  ];

  return (
    <footer
      className="bg-charcoal text-cream-100 pt-16 pb-12 border-t border-charcoal-800"
      aria-label="Hotel Footer & Directory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-charcoal-700/80">
          {/* Brand & Description Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="#"
              className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Banani Hotel Arena Home"
            >
              {/* Single-color / Monochrome variant for dark background */}
              <LogoSVG
                variant="full"
                monochrome={true}
                className="h-10 text-cream-50"
              />
            </Link>

            <p className="text-sm text-cream-300/80 leading-relaxed font-light max-w-md">
              Banani Hotel Arena is a leading residential hotel located on Road 27, Banani, Dhaka. We offer clean, relaxing, and fully equipped AC rooms designed for solo travelers, couples, and family stays.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/+8801352066041"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-800 hover:bg-[#25D366] text-cream-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-charcoal-700"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="tel:+8801352066041"
                className="w-10 h-10 rounded-full bg-charcoal-800 hover:bg-gold text-cream-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-charcoal-700"
                aria-label="Call Reception"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@bananihotelarena.com"
                className="w-10 h-10 rounded-full bg-charcoal-800 hover:bg-gold text-cream-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-charcoal-700"
                aria-label="Email Banani Hotel Arena"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block font-serif text-base font-semibold text-cream-50 tracking-wide uppercase text-xs">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-300/70 hover:text-gold transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Room Categories */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block font-serif text-base font-semibold text-cream-50 tracking-wide uppercase text-xs">
              Room Categories
            </span>
            <ul className="space-y-2.5 text-sm">
              {roomLinks.map((room, idx) => (
                <li key={idx}>
                  <Link
                    href={room.href}
                    className="text-cream-300/70 hover:text-gold transition-colors inline-block"
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP (Name, Address, Phone) Section for Local SEO Consistency */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block font-serif text-base font-semibold text-cream-50 tracking-wide uppercase text-xs">
              Contact & NAP
            </span>
            <address className="not-italic space-y-3 text-sm text-cream-300/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="leading-snug">
                  <strong>Banani Hotel Arena</strong><br />
                  House No- 65/A, Road 27, Block-A,<br />
                  Banani, Dhaka 1213, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+8801352066041"
                  className="hover:text-gold transition-colors"
                >
                  +8801352066041
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:info@bananihotelarena.com"
                  className="hover:text-gold transition-colors truncate"
                >
                  info@bananihotelarena.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/60">
          <p>© 2026 Banani Hotel Arena. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Residential Hotel in Banani, Dhaka</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-gold text-cream-300/80 transition-colors focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
