import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import Accordion from "@/components/site/Accordion";
import { tabKeys } from "@/lib/tabKeys";

// Pricing questions in three groups, one group shown at a time so the section fits one screen.
const GROUPS = [
  {
    id: "usage",
    label: "AI usage",
    faqs: [
      {
        q: "Do you charge for AI tokens?",
        a: "No. Your plan price covers the AI that the people on your plan use in their normal work, so you never get a separate token bill. If your use grows far beyond your plan, we talk to you before anything changes.",
      },
      {
        q: "Which AI models does Jago use?",
        a: "Jago picks the right AI for each task from more than 100 AI models. Simple tasks run on lower-cost AI and harder ones on stronger AI, which keeps your cost down. On Enterprise and Own servers, you choose which AI is used for each task.",
      },
      {
        q: "Can we bring our own AI model or AI account?",
        a: "Yes, on Enterprise and Own servers. Tell us the model or account you use, and we leave that AI cost out of your price.",
      },
      {
        q: "How does Predict make its forecasts?",
        a: "Predict reads trends across your sales, finance and operations data, warns you about what is likely to slip and shows the signals behind each warning. The models built for your company are kept only while you are a customer and are never used to train shared models. Predict comes with Growth, Enterprise and Own servers.",
      },
      {
        q: "Is there a limit on Automate agent runs?",
        a: "On Team, agents cover the normal work of your 25 people, and every run is on record. If an agent needs to run at high volume, for example on every order or every email, we price it on Growth by the number of agents and runs.",
      },
      {
        q: "Is our data used to train AI?",
        a: "No. Your data is not used to train shared or general AI models without your written consent. It is stored in our India region by default, or on your own servers, and is deleted or returned when you leave.",
        link: { to: "/security", label: "Read about security" },
      },
    ],
  },
  {
    id: "scope",
    label: "Plans",
    faqs: [
      {
        q: "What does each plan cover?",
        a: "Starter covers Ask and Analyze for up to 10 people. Team adds Automate and WhatsApp, Slack and Teams for up to 25 people. Growth adds Predict for 26 to 200 people. Enterprise covers any number of people and agents. JShield adds data protection compliance, and Own servers runs Jago inside your company.",
      },
      {
        q: "Who counts as a person on a plan?",
        a: "Anyone who signs in to ask questions, see reports or approve steps. AI agents are not counted as people.",
      },
      {
        q: "Do WhatsApp, Slack and Teams cost extra?",
        a: "Jago's plan price covers Jago. WhatsApp, Slack and Teams may charge their own messaging fees.",
      },
      {
        q: "What files can we upload?",
        a: "Files up to 5 MB each, in PDF, DOCX, XLSX, CSV, JSON, TXT and other common formats.",
      },
      {
        q: "How are Marketplace agents priced?",
        a: "Marketplace agents are sold one at a time, and you pay only for what you use, such as per scan, per page or per minute. They are separate from these plans.",
        link: { to: "/marketplace", label: "See the Marketplace" },
      },
    ],
  },
  {
    id: "billing",
    label: "Billing",
    faqs: [
      {
        q: "What do we get in the free week?",
        a: "A trial workspace with sample data, so you can see what Jago does before you connect your own systems. No payment details are needed.",
      },
      {
        q: "Can we pay monthly, and is GST extra?",
        a: "Yes. Each plan shows the yearly price and the higher month-to-month price. Rupee prices do not include GST. Customers in India pay in rupees and everyone else pays in US dollars.",
      },
      {
        q: "Can we cancel?",
        a: "Yes, there is no long lock-in. A monthly plan stays active to the end of the month you have paid for. A yearly plan ends at the end of its term, and prepaid yearly fees are not refunded. If you cancel a monthly plan within 7 days of the first charge without real use, you get a full refund.",
        link: { to: "/refund-policy", label: "Read the refund policy" },
      },
      {
        q: "What if we outgrow our plan?",
        a: "Move to the next plan when you need more people or modules. Your workspace and data stay as they are.",
      },
    ],
  },
];

const TAB_CLS =
  "site-choice min-h-[44px] rounded-lg border px-3 text-sm font-semibold leading-relaxed transition-colors";
const tabCls = (active) =>
  active
    ? `${TAB_CLS} text-primary bg-primary/10 border-primary/40`
    : `${TAB_CLS} text-foreground/90 border-transparent hover:text-foreground`;

export default function PricingFaq() {
  const [active, setActive] = useState(0);
  const group = GROUPS[active];

  return (
    <Reveal id="pricing-faq" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 min-w-0">
          <SectionIntro eyebrow="Pricing questions" title="What your plan covers" titleMuted="and how usage works." />
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Pricing question groups">
            {GROUPS.map((g, i) => (
              <button
                key={g.id}
                id={`faq-tab-${g.id}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={active === i ? `faq-panel-${g.id}` : undefined}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => tabKeys(e, GROUPS.length, i, setActive)}
                className={tabCls(active === i)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="lg:col-span-7 min-w-0 lg:-mt-3.5"
          role="tabpanel"
          id={`faq-panel-${group.id}`}
          aria-labelledby={`faq-tab-${group.id}`}
        >
          <Accordion
            key={group.id}
            firstOpen
            items={group.faqs.map((f) => ({
              key: f.q,
              title: f.q,
              body: (
                <>
                  <p className="text-base leading-relaxed text-pretty">{f.a}</p>
                  {f.link && (
                    <Link
                      to={f.link.to}
                      className="mt-3 inline-block text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                    >
                      {f.link.label}
                    </Link>
                  )}
                </>
              ),
            }))}
          />
        </div>
      </div>
    </Reveal>
  );
}
