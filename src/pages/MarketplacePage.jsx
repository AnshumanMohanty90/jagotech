import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Marketplace from "@/components/site/Marketplace";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function MarketplacePage() {
  usePageMeta("Marketplace | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Marketplace" title="Pick a single agent. Pay only as you use.">
          Add one agent to your website or system, pay per use, and expand when it proves its worth.
        </PageHeader>
        <Marketplace />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}