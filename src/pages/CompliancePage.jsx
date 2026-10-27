import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Compliance from "@/components/site/Compliance";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function CompliancePage() {
  usePageMeta("Compliance | Jago AI", "How Jago AI handles data protection under the DPDP Act and GDPR, with role-based access, audit trails and your choice of where data is stored.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Compliance" title="Jago and JShield help you meet the DPDP Act and GDPR, and prepare for SOC&nbsp;2.">
          Jago records every action. JShield tracks consent, breaches and the DPDP duties that start on
          13&nbsp;May&nbsp;2027.
        </PageHeader>
        <Compliance />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}