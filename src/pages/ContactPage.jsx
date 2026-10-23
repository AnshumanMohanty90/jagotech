import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import LeadForm from "@/components/site/LeadForm";
import Footer from "@/components/site/Footer";
import usePageMeta from "@/hooks/usePageMeta";

const INTENTS = {
  plan: {
    headline: "Bring one process. Get your free 8-week plan.",
    sub: "Tell us the task that takes your team the most time. In one 30-minute call we map it and send you a written 8-week plan, free.",
  },
  trial: {
    headline: "Try Jago free for a week.",
    sub: "We set up a workspace on sample data in your area, so your team can ask real questions from day one. No payment details needed.",
  },
};

export default function ContactPage() {
  usePageMeta("Contact | Jago AI");
  const [params] = useSearchParams();
  const isTrial = params.get("intent") === "trial";
  const presetTask = params.get("task") || "";
  const content = isTrial ? INTENTS.trial : INTENTS.plan;

  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader eyebrow="Contact" title={content.headline}>
          {content.sub}
        </PageHeader>
        <section className="pt-2 pb-16 overflow-hidden">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-3xl border border-primary/40 bg-card/50 backdrop-blur p-7 sm:p-9 glow-cyan">
              <LeadForm
                intent={isTrial ? "trial" : "plan"}
                defaultTask={presetTask}
                sourcePage={isTrial ? "/contact?intent=trial" : "/contact?intent=plan"}
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