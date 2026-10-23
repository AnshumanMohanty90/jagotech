import React from "react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import CustomerStory from "@/components/site/CustomerStory";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function CustomersPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader eyebrow="Customers" title="A major lending NBFC now knows which branches to audit first">
          How Jago AI works in production, at a lender with branches across 22 states.
        </PageHeader>
        <CustomerStory showLink={false} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}