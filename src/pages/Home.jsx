import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ProductTrinity from "@/components/site/ProductTrinity";
import Channels from "@/components/site/Channels";
import RoleWins from "@/components/site/RoleWins";
import Industries from "@/components/site/Industries";
import GameChanger from "@/components/site/GameChanger";
import GenAIAddons from "@/components/site/GenAIAddons";
import Trust from "@/components/site/Trust";
import Pricing from "@/components/site/Pricing";
import Marketplace from "@/components/site/Marketplace";
import Roi from "@/components/site/Roi";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProductTrinity />
        <Channels />
        <RoleWins />
        <Industries />
        <GameChanger />
        <GenAIAddons />
        <Trust />
        <Pricing />
        <Marketplace />
        <Roi />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}