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
  pricing: {
    headline: "Get pricing for your company.",
    sub: "Tell us your team size and the work you want Jago to take on. We will send you a quote.",
  },
};

export default function ContactPage() {
  usePageMeta("Contact | Jago AI");
  const [params] = useSearchParams();
  const intent = params.get("intent") || "plan";
  const presetTask = params.get("task") || "";
  const planOfInterest = params.get("plan") || "";
  const content = INTENTS[intent] || INTENTS.plan;

  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Contact" title={content.headline} showActions={false}>
          {content.sub}
        </PageHeader>
        <section className="relative site-section site-section-alt">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <LeadForm
              intent={intent}
              defaultTask={presetTask}
              planOfInterest={planOfInterest}
              sourcePage={`/contact?intent=${intent}`}
            />
            <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
              Or write to us at{" "}
              <a
                href="mailto:contact@jagoai.com"
                className="site-inline-link copy-accent hover:underline underline-offset-4 transition-colors"
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