import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import ModuleVideoDialog from "@/components/site/ModuleVideoDialog";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const CAPS = [
  {
    id: "ask",
    title: "Ask",
    desc: "Ask in plain words and get the number from your own\u00a0data.",
  },
  {
    id: "analyze",
    title: "Analyze",
    desc: "See why a number moved, with the reasons behind\u00a0it.",
  },
  {
    id: "predict",
    title: "Predict",
    desc: "Get a WhatsApp message when a number starts to\u00a0slip.",
  },
  {
    id: "automate",
    title: "Automate",
    desc: "Let Jago update your systems after a person approves key\u00a0steps.",
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(null);
  const triggerRef = useRef(null);

  return (
    <Reveal id="capabilities" className="relative scroll-mt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="The four modules" title="Watch a short video of each module at&nbsp;work.">
          Each module works on your data, under your rules.{" "}
          <Link to="/how-jago-works" className="text-primary font-semibold underline underline-offset-4 decoration-primary/30 hover:decoration-primary">
            See How Jago Works
          </Link>{" "}
          for the full detail.
        </SectionIntro>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {CAPS.map((c) => (
            <div key={c.id} id={c.id} className="site-col flex scroll-mt-24 flex-col">
              <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-balance">{c.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-pretty">{c.desc}</p>
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setActive(c);
                }}
                className="site-choice mt-auto -ml-2 inline-flex min-h-[44px] items-center gap-2 self-start rounded-lg px-2 pt-4 font-ui text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                <Play aria-hidden="true" className="h-4 w-4" />
                See how it works
              </button>
            </div>
          ))}
        </div>
      </div>

      <ModuleVideoDialog module={active} onClose={() => setActive(null)} triggerRef={triggerRef} />
    </Reveal>
  );
}
