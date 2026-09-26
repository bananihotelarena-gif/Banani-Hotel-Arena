import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Rooms from "@/components/Rooms";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Rooms />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
