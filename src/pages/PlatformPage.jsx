import React from "react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import PlatformOverview from "@/components/site/PlatformOverview";
import AgentsOverview from "@/components/site/AgentsOverview";
import Capabilities from "@/components/site/Capabilities";
import Integrations from "@/components/site/Integrations";
import Trust from "@/components/site/Trust";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function PlatformPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Platform" title="One platform. Your systems. Agents that get work done.">
          Jago connects your business systems, understands your data and processes, and puts AI agents to
          work across everyday operations,{" "}
          <strong className="copy-accent">with governance and control built in.</strong>
        </PageHeader>
        <PlatformOverview />
        <AgentsOverview />
        <Capabilities />
        <Integrations />
        <div id="security" className="scroll-mt-24">
          <Trust />
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}