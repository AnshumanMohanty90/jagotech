import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Pricing from "@/components/site/Pricing";
import Roi from "@/components/site/Roi";
import PricingFaq from "@/components/site/PricingFaq";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function PricingPage() {
  usePageMeta("Pricing | Jago AI", "Jago AI pricing by team size and modules, with a demo of Ask, Analyze, Predict and Automate.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Plans" title="Start with one team and add people and modules as you&nbsp;grow.">
          Prices are shown in your currency. Book a demo to see any plan in&nbsp;action.
        </PageHeader>
        <Pricing />
        <Roi />
        <PricingFaq />
      </main>
      <CTA tinted />
      <Footer />
    </div>
  );
}
