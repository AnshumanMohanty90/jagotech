import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ProofStrip from "@/components/site/ProofStrip";
import Challenge from "@/components/site/Challenge";
import WhatJagoDoes from "@/components/site/WhatJagoDoes";
import HowItWorks from "@/components/site/HowItWorks";
import CustomerStory from "@/components/site/CustomerStory";
import WhyJago from "@/components/site/WhyJago";
import RoleWins from "@/components/site/RoleWins";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <Challenge />
        <WhatJagoDoes />
        <HowItWorks />
        <CustomerStory />
        <WhyJago />
        <RoleWins />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}