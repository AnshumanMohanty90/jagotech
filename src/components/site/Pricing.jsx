import React from "react";
import Reveal from "@/components/site/Reveal";
import PlanColumn from "@/components/site/PlanColumn";
import { useCurrency, formatPrice, CurrencyToggle } from "@/lib/currency";

// Self-serve plans show a yearly-billed monthly price, with the month-to-month price as a note.
// Per person, Starter and Team cost the same; Team adds Automate and the chat apps.
const PLANS = [
  {
    name: "Starter",
    priceInr: 15999,
    priceUsd: 219,
    monthlyInr: 19999,
    monthlyUsd: 269,
    desc: "Ask and Analyze for up to 10\u00a0people.",
    cta: "Book a free trial",
    href: "/contact?intent=trial",
  },
  {
    name: "Team",
    priceInr: 39999,
    priceUsd: 529,
    monthlyInr: 49999,
    monthlyUsd: 659,
    desc: "Ask, Analyze and Automate for up to 25\u00a0people, on WhatsApp, Slack and Teams.",
    cta: "Book a free trial",
    href: "/contact?intent=trial",
    primary: true,
  },
  {
    name: "Growth",
    price: "Custom pricing",
    desc: "All four modules for 26 to 200\u00a0people.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Growth",
    trialHref: "/contact?intent=trial",
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    desc: "All four modules for any number of people and AI agents, with your choice of AI\u00a0model.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Enterprise",
  },
  {
    name: "JShield add-on",
    price: "Custom pricing",
    desc: "Customer consent, breach response and a record of the personal data you hold.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=JShield%20add-on",
  },
  {
    name: "Own servers",
    price: "Custom pricing",
    desc: "Jago runs on your own servers, with AI tuned to your data.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Own%20servers",
  },
];

const INCLUDED = [
  "Control over who sees what",
  "A record of every action",
  "Document and data analysis",
  "No long lock-in",
];

export default function Pricing() {
  const { currency, rate } = useCurrency();
  const plans = PLANS.map((p) =>
    p.priceInr
      ? {
          ...p,
          price: `${formatPrice(p.priceInr, currency, rate, 0, p.priceUsd)} a month`,
          priceNote: `Billed yearly. ${formatPrice(p.monthlyInr, currency, rate, 0, p.monthlyUsd)} a month if billed\u00a0monthly.`,
        }
      : p
  );
  return (
    <Reveal id="pricing" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
        <h2 className="font-heading text-balance">Pick a plan by team size and the modules you&nbsp;need.</h2>
        <p className="site-line mt-3 text-base leading-6 text-[#dde4ee]">
          Custom plans are priced on your team size and the modules you use.
        </p>
        <CurrencyToggle className="mt-4 justify-center" />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {plans.slice(0, 3).map((p) => (
            <PlanColumn key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {plans.slice(3).map((p) => (
            <PlanColumn key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="site-label">Every plan includes</p>
          <p className="site-line mt-3 text-base leading-6 text-[#dde4ee]">
            {INCLUDED.join(", ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          {currency === "INR" && (
            <p className="text-sm leading-relaxed">Rupee prices do not include GST.</p>
          )}
          <p className="text-sm leading-relaxed">
            We are preparing for a SOC 2 audit and ISO 27001&nbsp;certification.
          </p>
          <p className="text-sm leading-relaxed">
            WhatsApp, Slack and Teams may charge their own messaging fees.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
