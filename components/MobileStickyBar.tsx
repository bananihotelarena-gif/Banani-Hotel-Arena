"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-md border-t border-cream-300 px-4 py-2.5 shadow-soft-lg flex items-center gap-3"
      role="region"
      aria-label="Quick Mobile Booking Bar"
    >
      <a
        href="tel:+8801352066041"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-800 text-cream-50 py-3 rounded-full text-xs font-semibold tracking-wider uppercase shadow-soft-sm active:scale-95 transition-all"
        aria-label="Call Banani Hotel Arena at +8801352066041"
      >
        <Phone className="w-4 h-4 text-gold-light" />
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/+8801352066041"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-full text-xs font-semibold tracking-wider uppercase shadow-soft-sm active:scale-95 transition-all"
        aria-label="WhatsApp Banani Hotel Arena at +8801352066041"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
