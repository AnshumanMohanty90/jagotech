import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import HowJagoWorks from "@/components/site/HowJagoWorks";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function HowJagoWorksPage() {
  usePageMeta("How Jago Works | Jago AI", "How Jago AI works: ask in plain words, test why numbers moved, see what comes next and automate routine work, with your sign-off on key steps.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="How Jago Works" title="Here is how each of the four modules&nbsp;works.">
          This page covers each module, the engine underneath and how your team uses&nbsp;Jago.
        </PageHeader>
        <HowJagoWorks />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}