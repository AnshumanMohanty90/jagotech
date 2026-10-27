import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import AskDemo from "@/components/site/AskDemo";

const PROMPTS = [
  "Finance: which invoices risk slipping past due?",
  "Sales: which deals will slip this quarter?",
  "Operations: why is line 4 downtime rising?",
];

function useTypewriter(strings, typeMs = 55, pauseMs = 1400) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    let t;
    if (!deleting && text === current) {
      t = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => i + 1);
    } else {
      t = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? typeMs / 2 : typeMs);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx, strings, typeMs, pauseMs]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(PROMPTS);

  return (
    <section id="top" className="relative overflow-hidden pt-12 sm:pt-16">
      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 hero-glow" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full flex flex-col items-center text-center">
        {/* Everything above the fold renders immediately: no entrance animations. */}
        <p className="site-label site-eyebrow">AI agents for growing companies</p>

        <h1 className="mt-4 max-w-5xl font-heading text-3xl sm:text-4xl lg:text-5xl !font-semibold leading-[1.12] tracking-[-0.025em] text-balance">
          Put AI to work across your company <span className="text-primary">in 8 weeks.</span>
        </h1>

        <p className="mt-4 max-w-5xl text-base sm:text-lg text-muted-foreground text-pretty break-words">
          <strong className="copy-focus">Build AI agents in plain language</strong>, predict trends, and
          analyze cross-department data across text, audio, image, and video. Query via key channels,{" "}
          <strong className="copy-focus">automate workflows end-to-end</strong>, and scale safely with
          multi-region Compliance AI.
        </p>

        {/* Live demo */}
        <div className="mt-10 sm:mt-14 w-full max-w-[1039px] text-left">
          <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-xl p-4 sm:p-5 glow-cyan">
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Ask Jago, sample data
              </span>
              <span className="text-sm text-muted-foreground">Sample data</span>
            </div>
            <AskDemo placeholder={typed} />
            <p className="site-line mt-3 px-1 text-sm text-muted-foreground">
              Answers from sample data · 50+ languages ·{" "}
              <span className="text-primary">text or voice</span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
            Try it free for a week
          </Link>
          <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
            Download the 8-week plan
          </Link>
        </div>

        <p className="site-line mt-4 text-base font-semibold text-slate-50">
          No payment details needed.
        </p>

        <p className="site-line mt-3 text-sm font-normal text-slate-300">
          Live at a large lender, works on WhatsApp, Slack and Teams, in 50+ languages
        </p>
      </div>
    </section>
  );
}