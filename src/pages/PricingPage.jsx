import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Pricing from "@/components/site/Pricing";
import Roi from "@/components/site/Roi";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function PricingPage() {
  usePageMeta("Pricing | Jago AI", "Jago AI pricing by team size and modules, with a free week to try Ask, Analyze, Predict and Automate on sample data.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Plans" title="Start with one team. Grow into the whole company.">
          Clear prices in rupees. Try any plan free for a week.
        </PageHeader>
        <Pricing />
        <Roi />
      </main>
      <CTA tinted />
      <Footer />
    </div>
  );
}