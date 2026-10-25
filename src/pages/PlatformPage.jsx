import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import PlatformOverview from "@/components/site/PlatformOverview";
import ModuleSwitcher from "@/components/site/ModuleSwitcher";
import AgentsOverview from "@/components/site/AgentsOverview";
import Capabilities from "@/components/site/Capabilities";
import Integrations from "@/components/site/Integrations";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function PlatformPage() {
  usePageMeta("Platform | Jago AI", "The Jago AI platform: Ask, Analyze, Predict and Automate, connected to your systems and documents across every channel.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Platform" title="One platform for your systems, documents and voice.">
          Jago connects your sales, finance and HR systems, reads
          your documents and hears your voice notes.{" "}
          You choose which actions need a sign-off.
        </PageHeader>
        <ModuleSwitcher />
        <PlatformOverview />
        <AgentsOverview />
        <Capabilities />
        <Integrations />
        <section className="site-section">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <p className="max-w-2xl text-base leading-relaxed text-foreground/90">
                Who can see and do what, with a record of every action.{" "}
                Every change is logged with who approved it.
              </p>
              <Link
                to="/security"
                className="site-cta-secondary px-4 py-2.5 rounded-xl text-sm self-start lg:self-auto shrink-0"
              >
                Security Controls
              </Link>
            </div>
          </div>
        </section>
      </main>
      <CTA tinted />
      <Footer />
    </div>
  );
}