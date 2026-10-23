import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import UseCases from "@/components/site/UseCases";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function SolutionsPage() {
  usePageMeta("Solutions | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Solutions" title="Start with the outcome you need.">
          Pick the work that hurts most. Jago runs it, and a person approves the key steps.
        </PageHeader>
        <UseCases />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}