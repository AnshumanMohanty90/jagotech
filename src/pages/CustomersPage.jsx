import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import CustomersStory from "@/components/site/CustomersStory";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function CustomersPage() {
  usePageMeta("Customers | Jago AI", "How a large lender used Jago AI to rank more than 1,000 branches by risk and decide which to audit first.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Customers" title="A large lender uses Jago to decide which branches to audit&nbsp;first.">
          The lender has more than 1,000 branches spread across many&nbsp;regions.
        </PageHeader>
        <CustomersStory />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}