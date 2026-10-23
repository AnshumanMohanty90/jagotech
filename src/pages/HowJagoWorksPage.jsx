import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import HowJagoWorks from "@/components/site/HowJagoWorks";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function HowJagoWorksPage() {
  usePageMeta("How Jago Works | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="How Jago Works" title="Ask, automate, analyze and predict.">
          The full detail behind the four modules, plus the engine underneath them. All of it sits
          behind one login.
        </PageHeader>
        <HowJagoWorks />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}