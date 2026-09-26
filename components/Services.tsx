"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wind,
  BedDouble,
  Wifi,
  Droplets,
  ConciergeBell,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Wind,
      title: "Air Condition",
      description:
        "Enjoy a cool and comfortable environment with air-conditioned rooms, suitable for a pleasant stay throughout the year.",
      badge: "Climate Control",
    },
    {
      icon: BedDouble,
      title: "Comfortable Rooms",
      description:
        "Stay connected during your visit with convenient Wi-Fi access for your everyday communication and online needs.",
      badge: "Pure Comfort",
    },
    {
      icon: Wifi,
      title: "Free Wifi",
      description:
        "Enjoy top-notch amenities, comfort, and convenience in the heart of uttora.",
      badge: "High-Speed",
    },
    {
      icon: Droplets,
      title: "Hot & Cold Water",
      description:
        "Enjoy convenient hot and cold water facilities during your stay for added comfort.",
      badge: "24/7 Available",
    },
    {
      icon: ConciergeBell,
      title: "Room Service",
      description:
        "Our team is committed to providing attentive service and helping guests enjoy a comfortable stay.",
      badge: "Attentive Staff",
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description:
        "Located on Road 27 in Banani, our hotel provides convenient access to the surrounding business, dining, shopping, and lifestyle areas.",
      badge: "Road 27, Banani",
    },
  ];

  return (
    <section
      id="ourservices"
      className="py-20 lg:py-28 bg-cream-100 scroll-mt-20 border-t border-cream-200/80"
      aria-label="Our Hotel Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Guest Amenities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight mb-5">
            Our Services
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed font-light">
            At Banani Hotel Arena, we focus on providing a comfortable and convenient experience for our guests. Our facilities and services are designed to make your stay easy and relaxing.
          </p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-xl p-8 border border-cream-200/90 shadow-soft hover:shadow-soft-lg hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with Muted Gold Subtle Glow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cream-50 group-hover:bg-gold/10 border border-cream-200 group-hover:border-gold/30 flex items-center justify-center transition-all duration-300">
                    <service.icon className="w-6 h-6 text-charcoal group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <span className="text-[11px] font-sans font-medium tracking-wider uppercase text-charcoal-500 bg-cream-50 px-2.5 py-1 rounded-full border border-cream-200">
                    {service.badge}
                  </span>
                </div>

                {/* H3 Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium mb-3 group-hover:text-gold-dark transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Exact Description */}
                <p className="font-sans text-sm text-charcoal-600 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-6 pt-4 border-t border-cream-200/60 flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider uppercase text-gold">
                  Included in stay
                </span>
                <span className="w-2 h-2 rounded-full bg-cream-300 group-hover:bg-gold transition-colors duration-300" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
