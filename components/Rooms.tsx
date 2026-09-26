"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Users, Check, Sparkles } from "lucide-react";

export default function Rooms() {
  const rooms = [
    {
      id: "standard-single",
      title: "Standard Single Room Ac (1)",
      image: "/images/Single-Room-scaled-1-1024x768.webp",
      alt: "Standard Single AC Room at Banani Hotel Arena",
      description:
        "A cozy and comfortable room designed for single occupancy. The Standard Single Room is an ideal choice for solo travelers, business guests, and visitors looking for a comfortable stay in Banani.",
      price: "TK 3,141",
      occupancy: "1 Guest",
      tag: "Solo & Business",
      amenities: ["Air Conditioned", "High-Speed Wi-Fi", "Hot & Cold Water"],
    },
    {
      id: "standard-couple",
      title: "Standard Couple Room Ac (2)",
      image: "/images/Couple-Room-1-scaled-1-1024x768.webp",
      alt: "Standard Couple AC Room at Banani Hotel Arena",
      description:
        "Banani Hotel Arena offers a comfortable standard rooms for single occupancy with both AC and non-AC options. We offers comfortable service.",
      price: "TK 3,141",
      occupancy: "2 Guests",
      tag: "Popular Choice",
      amenities: ["Air Conditioned", "Queen Bed", "High-Speed Wi-Fi"],
    },
    {
      id: "deluxe-couple",
      title: "Deluxe Couple Room Ac (2)",
      image: "/images/Couple-Room-scaled-1-1024x768.webp",
      alt: "Deluxe Couple AC Room at Banani Hotel Arena",
      description:
        "Discover comfort and elegance in the Deluxe Room at Banani Hotel Arena, offering AC and non-AC options for couples.",
      price: "TK 4,041",
      occupancy: "2 Guests",
      tag: "Deluxe Comfort",
      amenities: ["King/Queen Bed", "Air Conditioned", "Room Service"],
    },
    {
      id: "premium-family",
      title: "Premium Family Room Ac (3)",
      image: "/images/Family-Room-scaled-1-1024x768.webp",
      alt: "Premium Family AC Room at Banani Hotel Arena",
      description:
        "Discover comfort and elegance in the Deluxe Room at Banani Hotel Arena, offering AC and non-AC options for couples.",
      price: "TK 4,941",
      occupancy: "3 Guests",
      tag: "Spacious Suite",
      amenities: ["Family Layout", "Air Conditioned", "Hot & Cold Water"],
    },
  ];

  return (
    <section
      id="rooms"
      className="py-20 lg:py-28 bg-cream-50 scroll-mt-20 border-t border-cream-200/80"
      aria-label="Rooms and Rent Pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Accommodations & Rates</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight mb-5">
            Rooms Rent Price
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed font-light">
            Choose from our clean, well-appointed room categories in Banani, Dhaka. Every room includes modern conveniences, air-conditioning, and 24/7 guest assistance.
          </p>
        </div>

        {/* 4 Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {rooms.map((room, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-xl overflow-hidden border border-cream-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Consistent Aspect Ratio & Zoom on Hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-charcoal/90 backdrop-blur-md text-cream-50 text-[11px] font-sans font-medium tracking-wider uppercase px-3 py-1 rounded-full border border-charcoal-700">
                      {room.tag}
                    </span>
                  </div>

                  {/* Occupancy Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-charcoal text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Users className="w-3 h-3 text-gold" />
                    <span>{room.occupancy}</span>
                  </div>

                  {/* Price Tag Floating on Image Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-soft border border-cream-200">
                      <span className="font-serif text-lg sm:text-xl font-bold text-charcoal">
                        {room.price}
                      </span>
                      <span className="text-xs font-sans text-charcoal-500 font-normal ml-1">
                        / per night
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium mb-3 group-hover:text-gold-dark transition-colors duration-300">
                    {room.title}
                  </h3>

                  <p className="font-sans text-sm text-charcoal-600 leading-relaxed font-light mb-5">
                    {room.description}
                  </p>

                  {/* Key Amenity Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-cream-200/70">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center gap-1 text-[11px] text-charcoal-600 bg-cream-100 px-2.5 py-1 rounded-md border border-cream-200"
                      >
                        <Check className="w-3 h-3 text-gold" />
                        <span>{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="tel:+8801352066041"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-800 text-cream-50 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-soft-sm hover:shadow-soft hover:-translate-y-0.5"
                  aria-label={`Book ${room.title} now by calling +8801352066041`}
                >
                  <Phone className="w-3.5 h-3.5 text-gold-light" />
                  <span>Book Now</span>
                </a>

                <a
                  href={`https://wa.me/+8801352066041?text=${encodeURIComponent(
                    `Hello, I would like to inquire about booking the ${room.title} at Banani Hotel Arena.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-medium tracking-wider uppercase text-charcoal hover:text-white border border-cream-300 hover:border-[#25D366] hover:bg-[#25D366] bg-white transition-all duration-300"
                  aria-label={`Inquire on WhatsApp about ${room.title}`}
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                  <span className="sm:hidden">WhatsApp</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
