import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import Accordion from "@/components/site/Accordion";

const POINTS = [
  {
    t: "Data stays in India",
    d: "Your data is stored in India, or on your own servers if you prefer.",
  },
  {
    t: "You approve key actions",
    d: "You choose which actions need a sign-off before anything changes.",
  },
  {
    t: "Every action is logged",
    d: "A record of who did what, ready for an audit.",
  },
  {
    t: "Data law built in",
    d: "Consent and access rules from JShield apply to every answer.",
  },
];

export default function Trust() {
  return (
    <Reveal id="trust" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 min-w-0">
          <SectionIntro eyebrow="Trust" title="Built for companies" titleMuted="that handle customer data." />
          <Link
            to="/security"
            className="mt-6 hidden lg:inline-block text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            Read about security
          </Link>
        </div>

        <div className="lg:col-span-7 min-w-0 lg:-mt-3.5">
          <Accordion
            firstOpen
            items={POINTS.map((p) => ({
              key: p.t,
              title: p.t,
              body: <p className="text-base leading-relaxed text-pretty">{p.d}</p>,
            }))}
          />
          <Link
            to="/security"
            className="mt-6 inline-block lg:hidden text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            Read about security
          </Link>
        </div>
      </div>
    </Reveal>
  );
}