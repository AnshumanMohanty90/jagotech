import React, { useState } from "react";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const EXAMPLE_TABS = [
  {
    id: "analyze",
    label: "Analyze",
    example: "Why did South region sales fall behind target last quarter?",
  },
  {
    id: "predict",
    label: "Predict",
    example: "Which branches are likely to miss target this month?",
  },
  {
    id: "automate",
    label: "Automate",
    example: "Update the CRM with this order and notify the finance team.",
  },
];

const TABS = [{ id: "ask", label: "Ask" }, ...EXAMPLE_TABS];

const TAB_CLS =
  "site-choice font-mono text-xs leading-relaxed uppercase tracking-wide px-2.5 py-1.5 rounded-lg border transition-colors";
const activeTabCls = (active) =>
  active
    ? `${TAB_CLS} text-primary bg-primary/10 border-primary/40`
    : `${TAB_CLS} text-muted-foreground border-transparent hover:text-foreground`;

function AnswerBox({ answer, language }) {
  return (
    <div className="mt-2 rounded-xl border border-primary/25 bg-background/80 px-4 py-3">
      <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">jago · answer</span>
      <p lang={language} className="mt-2 font-body text-base leading-relaxed text-foreground/90 whitespace-pre-line break-words">
        {answer}
      </p>
    </div>
  );
}

export default function AskDemo({ placeholder, language }) {
  const [tab, setTab] = useState("ask");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [examples, setExamples] = useState({});

  const runExample = async (t) => {
    setExamples((prev) => ({ ...prev, [t.id]: { loading: true, answer: null } }));
    try {
      const res = await base44.functions.invoke("askDemo", {
        prompt: t.example,
        ...(language ? { language } : {}),
      });
      setExamples((prev) => ({ ...prev, [t.id]: { loading: false, answer: res.data.answer } }));
    } catch {
      setExamples((prev) => ({ ...prev, [t.id]: { loading: false, answer: null, error: true } }));
    }
  };

  const ask = async (e) => {
    e.preventDefault();
    const prompt = value.trim();
    if (!prompt || loading) return;
    setLoading(true);
    setError("");
    setAnswer(null);
    try {
      const res = await base44.functions.invoke("askDemo", {
        prompt,
        ...(language ? { language } : {}),
      });
      setAnswer(res.data.answer);
    } catch {
      setError("The demo could not answer right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const activeExample = EXAMPLE_TABS.find((t) => t.id === tab);
  const exampleState = examples[tab] || {};

  return (
    <>
      <div className="flex flex-wrap items-center gap-1.5 px-1 pb-3" role="tablist" aria-label="Demo modes">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
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
              className="flex-1 min-w-0 bg-transparent outline-none font-body text-base leading-relaxed text-foreground placeholder:text-muted-foreground/70"
              aria-label="Ask Jago a question"
            />
            <button
              type="submit"
              disabled={loading || !value.trim()}
              className="site-cta-primary shrink-0 gap-1.5 px-3.5 py-2 rounded-lg text-sm disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <>
                  Ask Jago
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
          {answer && <AnswerBox answer={answer} language={language} />}
          {error && <p className="mt-2 px-1 text-sm leading-relaxed text-destructive">{error}</p>}
        </>
      ) : (
        activeExample && (
          <>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background/80 px-4 py-3.5">
              <Sparkles className="w-5 h-5 text-primary shrink-0" />
              <p className="flex-1 min-w-0 font-body text-base leading-relaxed text-foreground/90">
                {activeExample.example}
              </p>
              <button
                onClick={() => runExample(activeExample)}
                disabled={exampleState.loading}
                className="site-cta-primary shrink-0 gap-1.5 px-3.5 py-2 rounded-lg text-sm disabled:opacity-50"
              >
                {exampleState.loading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <>
                    See the answer
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
            {exampleState.answer && <AnswerBox answer={exampleState.answer} language={language} />}
            {exampleState.error && (
              <p className="mt-2 px-1 text-sm leading-relaxed text-destructive">
                The demo could not answer right now. Please try again in a moment.
              </p>
            )}
          </>
        )
      )}
    </>
  );
}