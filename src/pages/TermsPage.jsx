import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function TermsPage() {
  usePageMeta("Terms | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Legal" title="Terms of Use">
          The terms for using the Jago AI website and service.
        </PageHeader>
        <section className="site-section site-section-alt">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-base leading-relaxed text-muted-foreground">This page is being updated.</p>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}