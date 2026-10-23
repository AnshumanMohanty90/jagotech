import React from "react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import UseCases from "@/components/site/UseCases";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function SolutionsPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
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