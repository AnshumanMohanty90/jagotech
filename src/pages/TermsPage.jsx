import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Footer from "@/components/site/Footer";

export default function TermsPage() {
  usePageMeta("Terms | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Legal" title="Terms of Use" />
        <section className="site-section">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-base leading-relaxed text-muted-foreground">This page is being updated.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}