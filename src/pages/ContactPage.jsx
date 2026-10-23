import React from "react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import TrialForm from "@/components/site/TrialForm";
import Footer from "@/components/site/Footer";

export default function ContactPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader eyebrow="Contact" title="Bring one process. Get your free 8-week plan." />
        <TrialForm />
      </main>
      <Footer />
    </div>
  );
}