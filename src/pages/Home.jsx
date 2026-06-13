/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Skills from "../sections/Skills";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1E293B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] antialiased overflow-x-hidden relative">
      
      {/* BACKGROUND FLOATING BLOB AESTHETICS */}
      <div className="absolute top-[5%] -left-48 w-[400px] h-[400px] bg-gradient-to-tr from-[#7C3AED]/10 to-[#EC4899]/10 rounded-full blur-[110px] pointer-events-none select-none animate-float-slow mix-blend-multiply" />
      <div className="absolute top-[25%] -right-48 w-[500px] h-[500px] bg-gradient-to-bl from-[#EFF6FF] via-[#F5F3FF] to-[#7C3AED]/5 rounded-full blur-[130px] pointer-events-none select-none animate-float-medium mix-blend-multiply" />
      <div className="absolute top-[55%] left-1/3 w-[450px] h-[450px] bg-gradient-to-br from-[#EC4899]/8 via-[#EFF6FF] to-transparent rounded-full blur-[120px] pointer-events-none select-none animate-float-slow" />
      <div className="absolute bottom-[10%] -left-32 w-[380px] h-[380px] bg-gradient-to-tr from-[#7C3AED]/8 to-[#F5F3FF] rounded-full blur-[100px] pointer-events-none select-none animate-float-medium" />
      <div className="absolute bottom-[2%] right-10 w-[420px] h-[420px] bg-gradient-to-l from-[#EC4899]/5 to-[#EFF6FF] rounded-full blur-[110px] pointer-events-none select-none animate-float-slow" />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <Services />

      {/* 3. Portfolio Section */}
      <Portfolio />

      {/* 4. Skills Section */}
      <Skills />

      {/* 5. Testimonials Section */}
      <Testimonials />

      {/* 6. Contact Section */}
      <Contact />

      {/* 7. Modern Footer */}
      <Footer />

      {/* Global Floating WhatsApp Contact Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
