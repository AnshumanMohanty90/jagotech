import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
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

      <Dialog open={!!active} onOpenChange={(v) => !v && setActive(null)}>
        <DialogContent
          onCloseAutoFocus={(e) => {
            if (triggerRef.current) {
              e.preventDefault();
              triggerRef.current.focus();
            }
          }}
          className="max-h-[92vh] w-[calc(100%-2rem)] max-w-4xl gap-0 overflow-hidden rounded-2xl border-[#2f3641] bg-[#0b0d10] p-0 focus:outline-none [&>button:last-child]:hidden"
        >
          {active && (
            <>
              <div className="flex items-center justify-between gap-4 border-b border-[#2f3641] px-5 py-3">
                <DialogTitle className="font-ui text-base font-bold text-foreground">
                  {active.title}: how it works
                </DialogTitle>
                <DialogClose className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-[#2f3641] px-3 font-ui text-sm font-semibold text-foreground hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <X aria-hidden="true" className="h-4 w-4" />
                  Close
                </DialogClose>
              </div>
              <DialogDescription className="sr-only">A short video showing how the {active.title} module works.</DialogDescription>
              <video
                key={active.id}
                className="block aspect-video w-full bg-black"
                src={`/videos/modules/${active.id}.mp4`}
                poster={`/videos/modules/${active.id}-poster.jpg`}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </Reveal>
  );
}
