import React from "react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Footer from "@/components/site/Footer";

export default function TermsPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader eyebrow="Legal" title="Terms of Use" />
        <section className="pt-4 pb-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-base leading-relaxed text-muted-foreground">This page is being updated.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}