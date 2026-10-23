import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import RoleWins from "@/components/site/RoleWins";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function RoleWinsPage() {
  usePageMeta("Role Wins | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Jago in your role" title="How teams use Jago">
          Examples of everyday use.
        </PageHeader>
        <RoleWins withIntro={false} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}