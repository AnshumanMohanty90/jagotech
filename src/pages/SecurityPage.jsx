import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import SecurityPoints from "@/components/site/SecurityPoints";
import Footer from "@/components/site/Footer";

export default function SecurityPage() {
  usePageMeta("Security | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader eyebrow="Security" title="Your data stays under your control.">
          Jago is built for Indian companies that handle customer data every day.
        </PageHeader>
        <SecurityPoints />
      </main>
      <Footer />
    </div>
  );
}