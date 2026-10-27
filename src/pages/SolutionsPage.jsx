import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import UseCases from "@/components/site/UseCases";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function SolutionsPage() {
  usePageMeta("Solutions | Jago AI", "Jago AI solutions by team and industry, each built on Ask, Analyze, Predict and Automate.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Solutions" title="Start with the result your team needs&nbsp;most.">
          Pick the work that takes your team the most time. Jago runs it, and a person approves key&nbsp;steps.
        </PageHeader>
        <UseCases />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}