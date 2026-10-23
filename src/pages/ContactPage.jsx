import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import LeadForm from "@/components/site/LeadForm";
import Footer from "@/components/site/Footer";
import usePageMeta from "@/hooks/usePageMeta";

const INTENTS = {
  plan: {
    headline: "Download the 8-week plan.",
    sub: "A one-page plan to put AI to work on one process in 8 weeks: what we do, what you do and what you get at each stage.",
  },
  trial: {
    headline: "Try Jago free for a week.",
    sub: "Activate a trial workspace and try Ask, Analyze, Predict and Automate on sample data. No payment details needed.",
  },
  enterprise: {
    headline: "Talk to us about Jago for your enterprise.",
  },
};

export default function ContactPage() {
  usePageMeta("Contact | Jago AI");
  const [params] = useSearchParams();
  const intent = params.get("intent") || "plan";
  const presetTask = params.get("task") || "";
  const content = INTENTS[intent] || INTENTS.plan;

  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Contact" title={content.headline} showActions={false}>
          {content.sub}
        </PageHeader>
        <section className="relative site-section">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-3xl border border-primary/40 bg-card/50 backdrop-blur p-7 sm:p-9 glow-cyan">
              <LeadForm
                intent={intent}
                defaultTask={presetTask}
                sourcePage={`/contact?intent=${intent}`}
              />
            </div>
            <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
              Or write to us at{" "}
              <a
                href="mailto:contact@jagoai.com"
                className="copy-accent hover:underline underline-offset-4 transition-colors"
              >
                contact@jagoai.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}