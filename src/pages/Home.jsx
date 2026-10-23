import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Challenge from "@/components/site/Challenge";
import WhatJagoDoes from "@/components/site/WhatJagoDoes";
import RoleWins from "@/components/site/RoleWins";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="jago-home site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar logoVariant="ink" />
      <main>
        <Hero />
        <Challenge />
        <WhatJagoDoes />
        <RoleWins />
        <CTA />
      </main>
      <Footer logoVariant="ink" />
    </div>
  );
}