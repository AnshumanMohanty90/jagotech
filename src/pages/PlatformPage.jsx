import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import PlatformOverview from "@/components/site/PlatformOverview";
import AgentsOverview from "@/components/site/AgentsOverview";
import Capabilities from "@/components/site/Capabilities";
import Integrations from "@/components/site/Integrations";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function PlatformPage() {
  usePageMeta("Platform | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Platform" title="One platform for your systems, documents and voice.">
          Jago connects your <strong className="copy-focus">sales, finance and HR systems</strong>, reads
          your documents and hears your voice notes.{" "}
          <strong className="copy-accent">You choose which actions need a sign-off.</strong>
        </PageHeader>
        <PlatformOverview />
        <AgentsOverview />
        <Capabilities />
        <Integrations />
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <p className="max-w-2xl text-base leading-relaxed text-foreground/90">
                <strong className="copy-focus">Who can see and do what, with a record of every action.</strong>{" "}
                Every change is logged with who approved it.
              </p>
              <Link
                to="/security"
                className="site-cta-secondary group gap-1.5 px-4 py-2 rounded-lg text-sm self-start lg:self-auto shrink-0"
              >
                Security Controls
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}