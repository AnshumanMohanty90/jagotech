import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Challenge from "@/components/site/Challenge";
import WhatJagoDoes from "@/components/site/WhatJagoDoes";
import ProductTrinity from "@/components/site/ProductTrinity";
import Channels from "@/components/site/Channels";
import RoleWins from "@/components/site/RoleWins";
import GameChanger from "@/components/site/GameChanger";
import GenAIAddons from "@/components/site/GenAIAddons";
import Trust from "@/components/site/Trust";
import Pricing from "@/components/site/Pricing";
import Roi from "@/components/site/Roi";
import Marketplace from "@/components/site/Marketplace";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <WhatJagoDoes />
        <ProductTrinity />
        <Channels />
        <RoleWins />
        <GameChanger />
        <GenAIAddons />
        <Trust />
        <Pricing />
        <Roi />
        <Marketplace />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}