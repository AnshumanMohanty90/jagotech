import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import LeadForm from "@/components/site/LeadForm";
import Footer from "@/components/site/Footer";
import usePageMeta from "@/hooks/usePageMeta";
import { findAgent } from "@/components/site/marketplaceData";

const INTENTS = {
  contact: {
    headline: "Contact Jago AI.",
    sub: "Tell us why you are getting in touch and we will route your message to the right person.",
  },
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
  guide: {
    headline: "Get the guide when it is ready.",
    sub: "Leave your details and we will email you as soon as the guide is published.",
  },
  pricing: {
    headline: "Get pricing for your company.",
    sub: "Tell us your team size and the work you want Jago to take on. We will send you a quote.",
  },
};

export default function ContactPage() {
  usePageMeta("Contact | Jago AI", "Contact Jago AI for a demo, pricing, a free trial, partnerships or support.");
  const [params] = useSearchParams();
  const KNOWN = ["contact", "plan", "trial", "enterprise", "pricing", "guide", "buy"];
  const raw = params.get("intent") || "contact";
  const agent = findAgent(params.get("agent") || "");
  const intent = KNOWN.includes(raw) && (raw !== "buy" || agent) ? raw : "contact";
  const presetTask = params.get("task") || "";
  const planOfInterest = params.get("plan") || "";
  const module = (params.get("module") || "").replace(/[^a-z]/g, "").slice(0, 12);
  const content =
    intent === "buy"
      ? agent.pilot
        ? { headline: `Request a pilot of ${agent.name.replace(/^Jasper: /, "Jasper ")}.`, sub: "Tell us about your sales pipeline in Zoho CRM. We will email you the next steps to set up the pilot." }
        : { headline: `Buy the ${agent.name}.`, sub: `Tell us roughly how many ${agent.units} you expect each month. We will email you the next steps to start, priced per ${agent.unit} as shown in the marketplace.` }
      : INTENTS[intent] || INTENTS.contact;

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
              agent={agent}
              defaultTask={presetTask}
              planOfInterest={planOfInterest}
              sourcePage={`/contact?intent=${intent}${module ? `&module=${module}` : ""}${intent === "buy" ? `&agent=${agent.id}` : ""}`}
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