import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import ResourceLibrary from "@/components/site/ResourceLibrary";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function ResourcesPage() {
  usePageMeta("Resources | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Resources" title="Learn from teams already doing it.">
          Short notes and working guides on putting AI agents to work,{" "}
          from your first process to company-wide.{" "}
          No theory.
        </PageHeader>
        <ResourceLibrary />
      </main>
      <CTA tinted />
      <Footer />
    </div>
  );
}