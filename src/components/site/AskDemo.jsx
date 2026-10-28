import React, { useState, lazy, Suspense } from "react";
import { tabKeys } from "@/lib/tabKeys";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnswerBox from "@/components/site/AnswerBox";

// The Analyze/Predict/Automate answers load on demand, off the home page bundle.
const DemoPanels = lazy(() => import("@/components/site/DemoPanels"));

const ASK = {
  example: "Show regional sales performance against target for Q3.",
  answer:
    "North is 18% ahead of target. South is 4% behind. West and East are on target. Chart attached.",
};

const TABS = [
  { id: "ask", label: "Ask" },
  { id: "analyze", label: "Analyze" },
  { id: "predict", label: "Predict" },
  { id: "automate", label: "Automate" },
];

const TAB_CLS =
  "site-choice site-inline-link text-sm leading-relaxed px-2.5 py-1.5 rounded-lg border transition-colors";
const activeTabCls = (active) =>
  active
    ? `${TAB_CLS} text-primary bg-primary/10 border-primary/40`
    : `${TAB_CLS} text-muted-foreground border-transparent hover:text-foreground`;

export default function AskDemo({ placeholder, language }) {
  const [tab, setTab] = useState("ask");
  const [value, setValue] = useState("");
  const [typedReply, setTypedReply] = useState(false);
  const [exampleShown, setExampleShown] = useState(false);

  const ask = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setExampleShown(false);
    setTypedReply(true);
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-1.5 px-1 pb-3" role="tablist" aria-label="Demo modes">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => tabKeys(e, TABS.length, i, (n) => setTab(TABS[n].id))}
            className={activeTabCls(tab === t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "ask" ? (
        <>
          <form onSubmit={ask} className="flex items-center gap-3 rounded-xl border border-border bg-background/80 px-4 py-3.5">
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value.slice(0, 300))}
              placeholder={placeholder}
              className="flex-1 min-w-0 min-h-[44px] bg-transparent outline-none font-body text-base leading-relaxed text-foreground placeholder:text-muted-foreground/70"
              aria-label="Ask Jago a question"
            />
            <button
              type="submit"
              disabled={!value.trim()}
              className="site-cta-primary shrink-0 gap-1.5 px-3.5 py-2 rounded-lg text-sm "
            >
              Ask Jago
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
          <button
            type="button"
            onClick={() => {
              setTypedReply(false);
              setExampleShown(true);
            }}
            className="site-inline-link mt-2 px-1 text-left text-sm leading-relaxed text-muted-foreground hover:text-primary transition-colors"
          >
            Try an example: {ASK.example}
          </button>
          {exampleShown && <AnswerBox language={language} text={ASK.answer} />}
          {typedReply && (
            <AnswerBox
              language={language}
              text={
                <>
                  This demo uses sample data.{" "}
                  <Link to="/contact?intent=trial" className="site-inline-link text-primary underline underline-offset-4">
                    Book a free trial
                  </Link>{" "}
                  to ask questions about your own data.
                </>
              }
            />
          )}
        </>
      ) : (
        <Suspense fallback={null}>
          <DemoPanels tab={tab} language={language} />
        </Suspense>
      )}
    </>
  );
}