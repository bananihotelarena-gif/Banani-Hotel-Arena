"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Building, HeartHandshake, Compass } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Building,
      title: "Prime Banani Location",
      desc: "Situated on Road 27, Block-A with direct access to Dhaka's commercial hubs.",
    },
    {
      icon: HeartHandshake,
      title: "Clean & Private Stay",
      desc: "Dedicated to utmost privacy, cleanliness, and peace of mind for every guest.",
    },
    {
      icon: Compass,
      title: "All Traveler Types",
      desc: "Tailored single, couple, and spacious family accommodations.",
    },
  ];

  return (
    <section
      id="aboutus"
      className="py-20 lg:py-28 bg-cream-50 scroll-mt-20 border-t border-cream-200/80"
      aria-label="About Banani Hotel Arena"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Framing */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Accent Background Box */}
              <div
                className="absolute -top-4 -left-4 w-3/4 h-3/4 border-2 border-gold/30 rounded-2xl -z-10 hidden sm:block"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg border-2 border-white bg-cream-200">
                <Image
                  src="/images/Family-Room-scaled-1.webp"
                  alt="Comfortable Family Room Accommodation at Banani Hotel Arena"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Quality Assurance Pill */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-charcoal text-cream-50 p-4 sm:p-5 rounded-2xl shadow-soft-lg max-w-[260px] border border-charcoal-700">
                <p className="font-serif text-2xl font-bold text-gold-light mb-1">
                  100%
                </p>
                <p className="text-xs text-cream-200 leading-snug">
                  Comfort, privacy, and convenience guaranteed for your Dhaka stay.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-widest uppercase mb-4">
              <span>Boutique Hospitality</span>
            </div>

            {/* H2 Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight mb-6">
              About Banani Hotel Arena
            </h2>

            {/* Exact User Copy */}
            <p className="font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed font-light mb-8">
              Our goal is to provide guests with a clean, comfortable, and relaxing environment at a convenient location in Banani. Whether you are visiting Dhaka for business, personal travel, or a family stay, our range of room categories is designed to meet different accommodation needs.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9 w-full">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-cream-200/90 shadow-soft-sm"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <item.icon className="w-4 h-4 text-gold shrink-0" />
                    <h3 className="font-sans text-sm font-semibold text-charcoal">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button: Call Us */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+8801352066041"
                className="inline-flex items-center gap-2.5 bg-charcoal hover:bg-charcoal-800 text-cream-50 px-7 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
                aria-label="Call Banani Hotel Arena at +8801352066041"
              >
                <Phone className="w-4 h-4 text-gold-light" />
                <span>Call Us</span>
              </a>

              <a
                href="https://wa.me/+8801352066041"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-charcoal-700 hover:text-gold transition-colors py-3.5 px-4"
              >
                <span>WhatsApp Inquiry &rarr;</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
