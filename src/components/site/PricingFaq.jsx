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
        a: "No. Normal use by the people on your plan is included. If your use is far above normal, we talk to you before any extra charge.",
      },
      {
        q: "Which AI models does Jago use?",
        a: "Jago picks the right AI model for each task, and a lower-cost one for simple work. On Enterprise and Own servers, you choose.",
      },
      {
        q: "Can we bring our own AI model?",
        a: "Yes, on Enterprise and Own servers. You pay your AI provider directly, and we take that cost out of your price.",
      },
      {
        q: "How does Predict make forecasts?",
        a: "It reads your sales, finance and operations data and warns you about likely misses, with the reasons. It comes with Growth and above.",
      },
      {
        q: "Is there a limit on agent runs?",
        a: "Team covers normal daily work. An agent that runs on every order or email is priced separately, from Growth.",
      },
      {
        q: "Is our data used to train AI?",
        a: "No, not without your written consent. Your data stays in our India region or on your own servers.",
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
        a: "Starter has Ask and Analyze for 10\u00a0people. Team adds Automate and chat apps for 25. Growth adds Predict for up to 200. Enterprise has no limit on people.",
      },
      {
        q: "Who counts as a person?",
        a: "Anyone who signs in. AI agents do not count.",
      },
      {
        q: "Do WhatsApp, Slack and Teams cost extra?",
        a: "They may charge their own messaging fees. Jago adds none.",
      },
      {
        q: "What files can we upload?",
        a: "PDF, Word, Excel, CSV and text files, up to 5 MB each.",
      },
      {
        q: "How are Marketplace agents priced?",
        a: "By use, such as per scan or per page, separate from these plans.",
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
        a: "A workspace with sample data. No payment details needed.",
      },
      {
        q: "Can we pay monthly?",
        a: "Yes. Monthly billing costs about 25% more than yearly.",
      },
      {
        q: "Is GST extra?",
        a: "Yes, on rupee prices. Dollar prices have no GST.",
      },
      {
        q: "Can we cancel?",
        a: "Yes. A monthly plan runs to the end of the paid month. Yearly fees are not refunded. If you have not used a monthly plan, cancel within 7 days for a full refund.",
        link: { to: "/refund-policy", label: "Read the refund policy" },
      },
      {
        q: "What if we outgrow our plan?",
        a: "Move up a plan. Your workspace and data stay as they are.",
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
          <SectionIntro eyebrow="Pricing questions" title="What your plan covers." />
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
