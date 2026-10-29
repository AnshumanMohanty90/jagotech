import React, { useRef, useState } from "react";
import { MessageSquare, Search, TrendingUp, Workflow, Play } from "lucide-react";
import ModuleVideoDialog from "@/components/site/ModuleVideoDialog";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const MODULES = [
  {
    id: "ask",
    Icon: MessageSquare,
    title: "Ask",
    desc: "Jago answers questions in your language from your systems, with\u00a0sources.",
  },
  {
    id: "analyze",
    Icon: Search,
    title: "Analyze",
    desc: "Jago tests why a number moved and shows which reasons\u00a0hold.",
  },
  {
    id: "predict",
    Icon: TrendingUp,
    title: "Predict",
    desc: "Jago warns you what is likely to slip, and\u00a0why.",
  },
  {
    id: "automate",
    Icon: Workflow,
    title: "Automate",
    desc: "Jago runs routine tasks you describe in plain words, with your\u00a0sign-off.",
  },
];

export default function ModuleSwitcher() {
  const [video, setVideo] = useState(null);
  const triggerRef = useRef(null);

  return (
    <Reveal id="modules" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="What Jago does" title="Four AI modules with one login, under your rules." />

        <ul className="mx-auto mt-10 grid max-w-[1216px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((mod) => (
            <li key={mod.id} className="flex min-w-0 flex-col gap-4 rounded-2xl border border-[#2f3641] bg-[rgba(19,22,27,0.3)] p-5 lg:min-h-[260px]">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(0,242,255,0.22)] bg-[rgba(0,242,255,0.07)]">
                <mod.Icon aria-hidden="true" className="h-8 w-8 text-primary" />
              </span>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-6 w-1 rounded-full bg-primary" />
                <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-foreground">{mod.title}</h3>
              </div>
              <p className="site-line text-base leading-[26px] text-[#c1cbd7]">{mod.desc}</p>
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setVideo(mod);
                }}
                className="site-choice mt-auto -ml-2 inline-flex min-h-[44px] items-center gap-2 self-start rounded-lg px-2 font-ui text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                <Play aria-hidden="true" className="h-4 w-4" />
                See how it works
              </button>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 text-center text-base leading-relaxed">
          Add <span className="copy-focus">JShield</span> to manage consent and data protection&nbsp;duties.{" "}
          <a
            href="https://jshield.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="site-inline-link text-primary underline underline-offset-4 hover:decoration-primary/60 transition-colors"
          >
            Read about JShield
          </a>
        </p>
      </div>
      <ModuleVideoDialog module={video} onClose={() => setVideo(null)} triggerRef={triggerRef} />
    </Reveal>
  );
}
