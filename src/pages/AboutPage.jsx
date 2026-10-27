import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function AboutPage() {
  usePageMeta("About | Jago AI", "Jago AI builds AI agents that companies can trust with their data. Founded in Bengaluru in 2026.");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="About" title="We build AI that companies can trust with their data.">
          Jago AI was founded in Bengaluru in February 2026. We are recognised by Startup India and were
          chosen in the top 200 of more than 11,000 applicants to the UAE-India Start-Up Series 2.0.
        </PageHeader>
        <section className="site-section site-section-alt">
          <div className="mx-auto flex max-w-[1024px] flex-col gap-4 px-5 sm:px-8 sm:flex-row">
            <p className="site-line flex-1 rounded-2xl border border-[#2f3641] bg-[rgba(19,22,27,0.3)] p-6 text-base sm:text-lg leading-[1.6] text-[#dde4ee]">
              What we do: we help companies put AI to work on daily tasks, with controls built for data
              protection&nbsp;laws.
            </p>
            <p className="site-line flex-1 rounded-2xl border border-[#2f3641] bg-[rgba(19,22,27,0.3)] p-6 text-base sm:text-lg leading-[1.6] text-[#dde4ee]">
              Where we started: lending, where audit, collections and compliance work is heavy and the
              rules are&nbsp;strict.
            </p>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}