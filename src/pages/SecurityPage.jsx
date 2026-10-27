import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import SecurityPoints from "@/components/site/SecurityPoints";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function SecurityPage() {
  usePageMeta("Security | Jago AI", "Jago AI security: role-based access, audit trails, human sign-off on key actions and the option to run on your own servers.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Security" title="Your data stays under your&nbsp;control.">
          Jago is built for companies that handle customer data every day.
        </PageHeader>
        <SecurityPoints />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}