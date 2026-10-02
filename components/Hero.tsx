"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, ShieldCheck, Sparkles, Wifi } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-cream-200/50 via-cream-100 to-cream-100"
      aria-label="Welcome and Hotel Introduction"
    >
      {/* Decorative Subtle Background Flourish */}
      <div
        className="absolute top-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtext, CTAs, Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Boutique Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-50 border border-gold/30 text-charcoal-700 text-xs font-medium tracking-wide uppercase mb-6 shadow-soft-sm">
              <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Road 27, Block-A, Banani, Dhaka</span>
            </div>

            {/* Exactly one H1 on the page as required by SEO specifications */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-charcoal font-normal tracking-tight leading-[1.15] mb-6 text-balance">
              Welcome To <span className="font-medium italic text-charcoal-900">Banani Hotel Arena</span> — Best Hotel in Banani
            </h1>

            {/* Subtext - exact user copy */}
            <p className="font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mb-8 font-light">
              Looking for a comfortable and convenient residential hotel in Banani, Dhaka? Welcome to Banani Hotel Arena, where comfort, privacy, and convenience come together for a pleasant stay.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="https://wa.me/+8801352066041"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
                aria-label="Contact Banani Hotel Arena on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+8801352066041"
                className="inline-flex items-center justify-center gap-2.5 bg-charcoal hover:bg-charcoal-800 text-cream-50 px-7 py-3.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
                aria-label="Call Banani Hotel Arena at +8801352066041"
              >
                <Phone className="w-4 h-4 text-gold-light" />
                <span>Call Us</span>
              </a>

              <Link
                href="#rooms"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wider uppercase text-charcoal hover:text-gold border border-cream-300 hover:border-gold/60 bg-white/70 backdrop-blur-sm transition-all duration-300"
              >
                <span>View Rooms</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cream-300/80 w-full max-w-lg">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs font-medium text-charcoal-700">100% Privacy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs font-medium text-charcoal-700">Clean & Sanitized</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Wifi className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs font-medium text-charcoal-700">High-Speed Wi-Fi</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image with Boutique Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame Border */}
              <div
                className="absolute -inset-3 rounded-2xl border border-gold/30 -rotate-1 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-soft-lg border-2 border-white bg-cream-200">
                <Image
                  src="/images/family-room.webp"
                  alt="Family Room at Banani Hotel Arena"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Image Gradient Overlay for Depth */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Rate Tag */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-cream-200 shadow-soft">
                  <div className="flex items-center justify-between sm:justify-start gap-3">
                    <div>
                      <span className="block text-[10px] tracking-wider uppercase font-semibold text-charcoal-500">
                        Rates Starting From
                      </span>
                      <span className="font-serif text-lg font-bold text-charcoal">
                        TK 3,500 <span className="text-xs font-sans font-normal text-charcoal-500">/ night</span>
                      </span>
                    </div>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase bg-gold/15 text-gold-dark rounded">
                      AC Included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
