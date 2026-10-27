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
    // Arc node position inside the 387px diagram.
    node: { left: 280, top: 0 },
  },
  {
    t: "No one is checking",
    d: "AI acts without a person approving, and nothing is on record if a regulator asks.",
    answer: "A person approves key steps and every action is logged",
    color: "#ff6b35",
    Icon: AlertTriangle,
    node: { left: 350, top: 148 },
  },
  {
    t: "Costs pile up",
    d: "Every department pays for its own AI tool, and expensive AI does even simple jobs.",
    answer: "One platform, with low-cost AI for simple tasks",
    color: "#9b59b6",
    Icon: TrendingUp,
    node: { left: 298, top: 287 },
  },
];

// Arc diagram: three problem nodes orbiting "Every AI Project".
function ArcDiagram() {
  return (
    <div aria-hidden="true" className="relative hidden lg:block shrink-0 w-[387px] h-[343px]">
      <svg className="absolute inset-0" width="387" height="343" viewBox="0 0 387 343" fill="none">
        <path d="M308 28 C 392 70 392 130 378 176 C 372 230 360 280 326 315" stroke="rgba(0,242,255,0.25)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
      </svg>
      <div className="absolute left-[92px] top-[141px] w-[185px] h-[60px] flex flex-col items-center justify-center text-center font-ui text-[13px] font-bold text-white/60">
        <span>Every</span>
        <span>AI Project</span>
      </div>
      {STOPPERS.map(({ t, color, Icon, node }) => (
        <div
          key={t}
          className="absolute flex items-center justify-center w-14 h-14 rounded-full border-2 bg-[#1a1f2e]"
          style={{ left: node.left, top: node.top, borderColor: color }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      ))}
    </div>
  );
}

export default function Challenge() {
  return (
    <Reveal id="problem" className="relative">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="The problem" title="Your teams want to use AI. Three things stop them." />

        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[72px]">
          <ArcDiagram />

          <ol className="w-full lg:w-[596px] min-w-0 flex flex-col gap-10">
            {STOPPERS.map((s, i) => (
              <li key={s.t} className="site-row min-w-0 flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full font-ui text-[13px] font-bold"
                    style={{ backgroundColor: s.color, color: i === 0 ? "#0b0d10" : "#fff" }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="!font-ui !text-[22px] !font-bold !leading-tight text-balance" style={{ color: s.color }}>
                    {s.t}
                  </h3>
                </div>
                <p className="site-line text-[15px] leading-6 text-[#8896a9]">{s.d}</p>
                <p
                  className="site-line inline-flex items-center gap-2 self-start rounded-lg px-3 py-1.5 font-ui text-[13px] font-bold leading-snug"
                  style={{ color: s.color, backgroundColor: `${s.color}17` }}
                >
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  {s.answer}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}
