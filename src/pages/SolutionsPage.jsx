import React from "react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Industries from "@/components/site/Industries";
import UseCases from "@/components/site/UseCases";
import RoleWins from "@/components/site/RoleWins";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function SolutionsPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Solutions" title="Built around your business.">
          One platform, every department. Explore what Jago does for your{" "}
          <strong className="copy-focus">industry</strong>, your{" "}
          <strong className="copy-focus">use case</strong>, and{" "}
          <strong className="copy-accent">your role.</strong>
        </PageHeader>

        <section id="industries" className="scroll-mt-24 pt-6 pb-4">
          <Industries />
        </section>

        <UseCases />

        <div id="by-user" className="scroll-mt-24">
          <RoleWins />
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}