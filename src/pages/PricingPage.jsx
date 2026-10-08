import React from "react";
import Navbar from "@/components/site/Navbar";
import Pricing from "@/components/site/Pricing";
import Roi from "@/components/site/Roi";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function PricingPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Pricing />
        <Roi />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}