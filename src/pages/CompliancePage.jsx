import React from "react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Compliance from "@/components/site/Compliance";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function CompliancePage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Compliance" title="Compliance, built into everything JagoTech does.">
          Security and privacy are not add-ons here. Meet the posture behind the platform, and
          JShield, our dedicated compliance companion.
        </PageHeader>
        <Compliance />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}