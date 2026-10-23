import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import CustomersStory from "@/components/site/CustomersStory";
import Footer from "@/components/site/Footer";

export default function CustomersPage() {
  usePageMeta("Customers | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader eyebrow="Customers" title="How a major lending NBFC decides which branches to audit first">
          A non-bank lender (NBFC) with about Rs 11,000 crore of loans to small borrowers across 22 states,
          mostly rural and semi-urban.
        </PageHeader>
        <CustomersStory />
      </main>
      <Footer />
    </div>
  );
}