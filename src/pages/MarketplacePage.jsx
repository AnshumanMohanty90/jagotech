import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import Marketplace from "@/components/site/Marketplace";
import Footer from "@/components/site/Footer";

export default function MarketplacePage() {
  usePageMeta("Marketplace | Jago AI", "Ready-made Jago AI agents you add to your website or systems and pay for per use.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <Marketplace />
      </main>
      <Footer />
    </div>
  );
}