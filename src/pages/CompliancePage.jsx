import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Compliance from "@/components/site/Compliance";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function CompliancePage() {
  usePageMeta("Compliance | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Compliance" title="Built for India's data protection law.">
          Jago keeps a record of every action.{" "}
          <strong className="copy-focus">JShield tracks consent and breaches</strong>, and the duties that
          start on <strong className="copy-accent">13 May 2027.</strong>
        </PageHeader>
        <Compliance />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}