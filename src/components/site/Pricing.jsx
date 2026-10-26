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
    desc: "Ask questions and see why numbers move, for up to 10\u00a0people.",
    cta: "Try it free for a week",
    href: "/contact?intent=trial",
  },
  {
    name: "Team",
    priceInr: 39999,
    priceUsd: 529,
    monthlyInr: 49999,
    monthlyUsd: 659,
    desc: "Ask, Analyze and Automate for up to 25\u00a0people, on WhatsApp, Slack and Teams.",
    cta: "Try it free for a week",
    href: "/contact?intent=trial",
    primary: true,
  },
  {
    name: "Growth",
    price: "Custom pricing",
    desc: "All four modules, including Predict, for 26 to 200\u00a0people.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Growth",
    trialHref: "/contact?intent=trial",
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    desc: "Every module for any number of people and AI agents, with your choice of AI model.",
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
  "Who-sees-what controls",
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
          price: `${formatPrice(p.priceInr, currency, rate, 0, p.priceUsd)} a month`,
          priceNote: `Billed yearly, or ${formatPrice(p.monthlyInr, currency, rate, 0, p.monthlyUsd)} a month if you pay monthly.`,
        }
      : p
  );
  return (
    <Reveal id="pricing" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-heading text-balance">Plans</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-slate-300">
          Custom plans are priced on your team size and the modules you use.
        </p>
        <CurrencyToggle className="mt-3" />

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {plans.slice(0, 3).map((p) => (
            <PlanColumn key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {plans.slice(3).map((p) => (
            <PlanColumn key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-8">
          <p className="site-label">Every plan includes</p>
          <p className="mt-3 text-[16px] leading-relaxed text-slate-300">
            {INCLUDED.join(", ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {currency === "INR" && (
            <p className="text-sm leading-relaxed">Rupee prices do not include GST.</p>
          )}
          <p className="text-sm leading-relaxed">
            Built to a global security standard (SOC 2); certification under way.
          </p>
          <p className="text-sm leading-relaxed">
            WhatsApp, Slack and Teams may charge their own messaging fees.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
