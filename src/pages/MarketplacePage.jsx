import React from "react";
import Navbar from "@/components/site/Navbar";
import Marketplace from "@/components/site/Marketplace";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function MarketplacePage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Marketplace />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}