"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Calendar,
  User,
  Users,
} from "lucide-react";

export default function Contact() {
  const [selectedRoom, setSelectedRoom] = useState(
    "Deluxe Couple Room Ac (3) - TK 4,500"
  );
  const [checkInDate, setCheckInDate] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [guestName, setGuestName] = useState("");

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Banani Hotel Arena, I would like to book a room.%0A%0A• Guest Name: ${guestName || "Guest"}%0A• Room Category: ${selectedRoom}%0A• Check-in Date: ${checkInDate || "Flexible"}%0A• Guests: ${guestCount}%0A%0APlease let me know the availability.`;
    window.open(`https://wa.me/+8801352066041?text=${message}`, "_blank");
  };

  return (
    <section
      id="contactus"
      className="py-20 lg:py-28 bg-cream-100 scroll-mt-20 border-t border-cream-200/80"
      aria-label="Contact Banani Hotel Arena"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>24/7 Reservations & Support</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight mb-5">
            Get In Touch
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed font-light">
            Contact Banani Hotel Arena for room information, availability, and booking assistance. Our team will be happy to help you choose the right room for your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-14">
          {/* Left Column: Direct Contact Info & Quick Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Now */}
              <a
                href="tel:+8801352066041"
                className="group p-5 rounded-xl bg-white border border-cream-200/90 shadow-soft hover:shadow-soft-lg hover:border-gold/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-cream-50 group-hover:bg-gold/15 flex items-center justify-center shrink-0 border border-cream-200 group-hover:border-gold/30 transition-colors">
                  <Phone className="w-5 h-5 text-charcoal group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <span className="block text-[11px] font-sans font-medium uppercase tracking-wider text-charcoal-500 mb-0.5">
                    Call Now
                  </span>
                  <span className="font-sans font-semibold text-sm sm:text-base text-charcoal group-hover:text-gold-dark transition-colors">
                    +8801352066041
                  </span>
                  <span className="block text-[11px] text-charcoal-500 mt-0.5">
                    Direct 24/7 Front Desk
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+8801352066041"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-white border border-cream-200/90 shadow-soft hover:shadow-soft-lg hover:border-[#25D366]/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center shrink-0 border border-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <span className="block text-[11px] font-sans font-medium uppercase tracking-wider text-charcoal-500 mb-0.5">
                    WhatsApp
                  </span>
                  <span className="font-sans font-semibold text-sm sm:text-base text-charcoal group-hover:text-[#20ba59] transition-colors">
                    +8801352066041
                  </span>
                  <span className="block text-[11px] text-charcoal-500 mt-0.5">
                    Instant Chat & Inquiry
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@bananihotelarena.com"
                className="group p-5 rounded-xl bg-white border border-cream-200/90 shadow-soft hover:shadow-soft-lg hover:border-gold/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-cream-50 group-hover:bg-gold/15 flex items-center justify-center shrink-0 border border-cream-200 group-hover:border-gold/30 transition-colors">
                  <Mail className="w-5 h-5 text-charcoal group-hover:text-gold transition-colors" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-sans font-medium uppercase tracking-wider text-charcoal-500 mb-0.5">
                    Email
                  </span>
                  <span className="font-sans font-semibold text-sm text-charcoal group-hover:text-gold-dark transition-colors truncate block">
                    info@bananihotelarena.com
                  </span>
                  <span className="block text-[11px] text-charcoal-500 mt-0.5">
                    Reservations & Inquiries
                  </span>
                </div>
              </a>

              {/* Hours / Service */}
              <div className="p-5 rounded-xl bg-white border border-cream-200/90 shadow-soft flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-cream-50 flex items-center justify-center shrink-0 border border-cream-200">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="block text-[11px] font-sans font-medium uppercase tracking-wider text-charcoal-500 mb-0.5">
                    Reception Hours
                  </span>
                  <span className="font-sans font-semibold text-sm text-charcoal">
                    Open 24 Hours / 7 Days
                  </span>
                  <span className="block text-[11px] text-charcoal-500 mt-0.5">
                    Always Ready to Welcome You
                  </span>
                </div>
              </div>
            </div>

            {/* Address Banner */}
            <div className="p-5 rounded-xl bg-white border border-cream-200/90 shadow-soft flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                <MapPin className="w-5 h-5 text-gold-dark" />
              </div>
              <div>
                <span className="block text-[11px] font-sans font-medium uppercase tracking-wider text-charcoal-500 mb-0.5">
                  Hotel Address (NAP)
                </span>
                <p className="font-sans font-medium text-sm sm:text-base text-charcoal leading-snug">
                  House No- 65/A, Road 27, Block-A, Banani, Dhaka 1213, Bangladesh
                </p>
                <span className="block text-xs text-charcoal-500 mt-1">
                  Near Banani Supermarket & Kemal Ataturk Avenue
                </span>
              </div>
            </div>

            {/* Direct Booking WhatsApp Form */}
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-cream-200/90 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-lg font-semibold text-charcoal">
                  Direct Booking Assistance
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold bg-gold/10 px-2 py-0.5 rounded">
                  Fast Response
                </span>
              </div>

              <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                <div>
                  <label htmlFor="guest-name" className="block text-xs font-medium text-charcoal-700 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      id="guest-name"
                      type="text"
                      placeholder="e.g. Tariq Ahmed"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 pl-10 rounded-lg text-sm bg-cream-50/70 border border-cream-300 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:bg-white text-charcoal transition-all"
                    />
                    <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="room-select" className="block text-xs font-medium text-charcoal-700 mb-1">
                      Room Category
                    </label>
                    <select
                      id="room-select"
                      value={selectedRoom}
                      onChange={(e) => setSelectedRoom(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-cream-50/70 border border-cream-300 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:bg-white text-charcoal transition-all"
                    >
                      <option value="Standard Single Room Ac (1) - TK 3,500">
                        Standard Single Room Ac (TK 3,500)
                      </option>
                      <option value="Standard Couple Room Ac (2) - TK 4,000">
                        Standard Couple Room Ac (TK 4,000)
                      </option>
                      <option value="Deluxe Couple Room Ac (3) - TK 4,500">
                        Deluxe Couple Room Ac (TK 4,500)
                      </option>
                      <option value="Premium Family Room Ac (4) - TK 5,500">
                        Premium Family Room Ac (TK 5,500)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="checkin-date" className="block text-xs font-medium text-charcoal-700 mb-1">
                      Preferred Check-in Date
                    </label>
                    <div className="relative">
                      <input
                        id="checkin-date"
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 pl-10 rounded-lg text-sm bg-cream-50/70 border border-cream-300 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:bg-white text-charcoal transition-all"
                      />
                      <Calendar className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="guest-count" className="block text-xs font-medium text-charcoal-700 mb-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      id="guest-count"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 pl-10 rounded-lg text-sm bg-cream-50/70 border border-cream-300 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:bg-white text-charcoal transition-all"
                    >
                      <option value="1 Guest">1 Guest (Single Occupancy)</option>
                      <option value="2 Guests">2 Guests (Couple / Double)</option>
                      <option value="3 Guests">3 Guests (Family)</option>
                      <option value="4+ Guests">4+ Guests</option>
                    </select>
                    <Users className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-soft hover:shadow-soft-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Booking Request via WhatsApp</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Google Map Iframe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 h-full"
          >
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-cream-200/90 shadow-soft h-full flex flex-col justify-between">
              <div className="mb-3 px-2 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal">
                    Location on Google Maps
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    House No- 65/A, Road 27, Block-A, Banani, Dhaka 1213
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/place/Banani+Hotel+Arena/@23.7986578,90.3998606,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c78d03ad2a79:0xfb4abc0ee4b26d7b!8m2!3d23.7986578!4d90.3998606!16s%2Fg%2F11w7f9p3p_?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gold hover:text-gold-dark uppercase tracking-wider underline underline-offset-4"
                >
                  Open in Maps &rarr;
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:min-h-[460px] rounded-lg overflow-hidden border border-cream-300 bg-cream-200">
                <iframe
                  title="Banani Hotel Arena Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.560561409923!2d90.39986058885495!3d23.798657799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78d03ad2a79%3A0xfb4abc0ee4b26d7b!2sBanani%20Hotel%20Arena!5e0!3m2!1sen!2sbd!4v1791106322787!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full grayscale-[10%] contrast-[105%]"
                />
              </div>

              <div className="mt-3 px-2 flex items-center justify-between text-[11px] text-charcoal-500">
                <span>Centrally located in Banani Diplomatic & Commercial Area</span>
                <span>Direct Cab / Uber Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
