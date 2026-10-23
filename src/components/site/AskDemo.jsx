import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SCRIPTED = {
  ask: {
    label: "Ask",
    example: "Show regional sales performance against target for Q3.",
    answer:
      "North is 18% ahead of target. South is 4% behind. West and East are on target. Chart attached.",
  },
  analyze: {
    label: "Analyze",
    example: "Why did South region sales fall behind target last quarter?",
    answer:
      "Two branches account for most of the gap: collections slowed in the last six weeks of the quarter and three large orders moved to the next quarter.",
  },
  predict: {
    label: "Predict",
    example: "Which branches are likely to miss target this month?",
    answer:
      "Three branches are likely to miss target: Pune East, Nashik and Indore. Collections are 12% behind the usual pace. An alert has gone to the regional heads on WhatsApp.",
  },
  automate: {
    label: "Automate",
    example: "Update the CRM with this order and notify the finance team.",
    answer:
      "Draft ready: the order is filled in the CRM and a note for the finance team is written. Nothing changes until you approve.",
  },
};

const TAB_ORDER = ["ask", "analyze", "predict", "automate"];

const TAB_CLS =
  "site-choice font-mono text-xs leading-relaxed uppercase tracking-wide px-2.5 py-1.5 rounded-lg border transition-colors";
const activeTabCls = (active) =>
  active
    ? `${TAB_CLS} text-primary bg-primary/10 border-primary/40`
    : `${TAB_CLS} text-muted-foreground border-transparent hover:text-foreground`;

function AnswerBox({ language, text, children }) {
  return (
    <div className="mt-2 rounded-xl border border-primary/25 bg-background/80 px-4 py-3">
      <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">jago · answer</span>
      <p lang={language} className="mt-2 font-body text-base leading-relaxed text-foreground/90 whitespace-pre-line break-words">
        {text}
      </p>
      {children}
    </div>
  );
}

export default function AskDemo({ placeholder, language }) {
  const [tab, setTab] = useState("ask");
  const [value, setValue] = useState("");
  const [typedReply, setTypedReply] = useState(false);
  const [exampleShown, setExampleShown] = useState(false);
  const [shown, setShown] = useState({});
  const [actionNote, setActionNote] = useState("");

  const ask = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setExampleShown(false);
    setTypedReply(true);
  };

  const current = SCRIPTED[tab];

  return (
    <>
      <div className="flex flex-wrap items-center gap-1.5 px-1 pb-3" role="tablist" aria-label="Demo modes">
        {TAB_ORDER.map((id) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={activeTabCls(tab === id)}
          >
            {SCRIPTED[id].label}
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
              className="flex-1 min-w-0 bg-transparent outline-none font-body text-base leading-relaxed text-foreground placeholder:text-muted-foreground/70"
              aria-label="Ask Jago a question"
            />
            <button
              type="submit"
              disabled={!value.trim()}
              className="site-cta-primary shrink-0 gap-1.5 px-3.5 py-2 rounded-lg text-sm disabled:opacity-50"
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
            className="mt-2 px-1 block text-left font-mono text-xs leading-relaxed text-muted-foreground hover:text-primary transition-colors"
          >
            Try an example: {SCRIPTED.ask.example}
          </button>
          {exampleShown && <AnswerBox language={language} text={SCRIPTED.ask.answer} />}
          {typedReply && (
            <AnswerBox
              language={language}
              text={
                <>
                  This demo uses sample data.{" "}
                  <Link to="/contact?intent=trial" className="text-primary underline underline-offset-4">
                    Start a free week
                  </Link>{" "}
                  to ask questions about your own data.
                </>
              }
            />
          )}
        </>
      ) : (
        <>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-background/80 px-4 py-3.5">
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            <p className="flex-1 min-w-0 font-body text-base leading-relaxed text-foreground/90">
              {current.example}
            </p>
            <button
              onClick={() => setShown((prev) => ({ ...prev, [tab]: true }))}
              className="site-cta-primary shrink-0 gap-1.5 px-3.5 py-2 rounded-lg text-sm"
            >
              See the answer
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          {shown[tab] && (
            <AnswerBox language={language} text={current.answer}>
              {tab === "automate" && (
                <>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActionNote("This is a demo. Start a free week to try it on your data.")}
                      className="site-cta-primary px-3.5 py-2 rounded-lg text-sm"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => setActionNote("This is a demo. Start a free week to try it on your data.")}
                      className="site-cta-secondary px-3.5 py-2 rounded-lg text-sm"
                    >
                      Edit
                    </button>
                  </div>
                  {actionNote && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{actionNote}</p>
                  )}
                </>
              )}
            </AnswerBox>
          )}
        </>
      )}
    </>
  );
}