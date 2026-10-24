import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import CustomersStory from "@/components/site/CustomersStory";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function CustomersPage() {
  usePageMeta("Customers | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Customers" title="How a large lender decides which branches to audit first">
          A large Indian lender with a branch network spread across many states.
        </PageHeader>
        <CustomersStory />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}