import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Industries from "@/components/site/Industries";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function IndustriesPage() {
  usePageMeta("Industries | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="By industry" title="Made for your industry.">
          Ready-made workflows for your sector.
        </PageHeader>
        <Industries />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}