import React from "react";
import { ShieldOff, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const STOPPERS = [
  {
    t: "Customer data leaks",
    d: "Staff paste customer details into public AI tools. That can break data protection laws.",
    answer: "Jago keeps customer data inside your systems",
    color: "#00f2ff",
    Icon: ShieldOff,
  },
  {
    t: "No one is checking",
    d: "AI acts without a person approving, and nothing is on record if a regulator asks.",
    answer: "A person approves key steps and every action is logged",
    color: "#00f2ff",
    Icon: AlertTriangle,
  },
  {
    t: "Costs pile up",
    d: "Every department pays for its own AI tool, and expensive AI does even simple jobs.",
    answer: "One platform, with low-cost AI for simple tasks",
    color: "#00f2ff",
    Icon: TrendingUp,
  },
];

export default function Challenge() {
  return (
    <Reveal id="problem" className="relative">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="The problem" title="Your teams want to use AI. Three things stop them." />

        <ol className="mx-auto mt-10 grid max-w-[1024px] min-w-0 gap-6 md:grid-cols-3">
          {STOPPERS.map((s, i) => (
            <li key={s.t} className="site-row min-w-0 flex flex-col items-center text-center">
              {/* Icon node, with a line running to the next step on wide screens */}
              <div aria-hidden="true" className="relative flex w-full items-center justify-center">
                {i > 0 && <span className="absolute right-1/2 top-1/2 hidden h-0.5 w-1/2 -translate-y-1/2 bg-[rgba(0,242,255,0.25)] md:block" />}
                {i < STOPPERS.length - 1 && (
                  <span className="absolute left-1/2 top-1/2 hidden h-0.5 w-1/2 -translate-y-1/2 bg-[rgba(0,242,255,0.25)] md:block" />
                )}
                <span
                  className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 bg-[#1a1f2e]"
                  style={{ borderColor: s.color }}
                >
                  <s.Icon className="h-6 w-6" style={{ color: s.color }} />
                </span>
              </div>

              <div className="mt-5 flex min-w-0 flex-1 flex-col items-center gap-2">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full font-ui text-[13px] font-bold"
                  style={{ backgroundColor: s.color, color: "#090a0c" }}
                >
                  {i + 1}
                </span>
                <h3 className="!font-ui !text-[22px] !font-bold !leading-tight text-balance text-foreground">
                  {s.t}
                </h3>
                <p className="site-line text-base leading-6 text-[#dde4ee]">{s.d}</p>
                <p
                  className="site-line mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-center font-ui text-[13px] font-bold leading-snug"
                  style={{ color: s.color, backgroundColor: `${s.color}17` }}
                >
                  <CheckCircle className="h-3.5 w-3.5 shrink-0" />
                  {s.answer}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
