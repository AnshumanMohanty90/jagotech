import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const CAPS = [
  {
    id: "ask",
    title: "Ask",
    desc: "Ask a question in plain words and get the number from your own data.",
  },
  {
    id: "predict",
    title: "Predict",
    desc: "Get a message on WhatsApp when a number starts to slip.",
  },
  {
    id: "analyze",
    title: "Analyze",
    desc: "See why a number moved, with the reasons behind it.",
  },
  {
    id: "automate",
    title: "Automate",
    desc: "Let Jago update your systems, after a person approves the key steps.",
  },
];

export default function Capabilities() {
  return (
    <Reveal id="capabilities" className="relative scroll-mt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="The four modules" title="Four modules, one login.">
          Each one works on your data, under your rules.{" "}
          <Link to="/how-jago-works" className="text-primary font-semibold underline underline-offset-4 decoration-primary/30 hover:decoration-primary">
            See How Jago Works
          </Link>{" "}
          for the full detail.
        </SectionIntro>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {CAPS.map((c) => (
            <div key={c.id} id={c.id} className="site-col scroll-mt-24">
              <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-balance">{c.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-pretty">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}