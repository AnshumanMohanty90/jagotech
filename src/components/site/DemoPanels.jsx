import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import AnswerBox from "@/components/site/AnswerBox";

const SCRIPTED = {
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

// Loaded on demand: only rendered when the visitor switches off the Ask tab.
export default function DemoPanels({ tab, language }) {
  const [shown, setShown] = useState({});
  const [actionNote, setActionNote] = useState("");

  const current = SCRIPTED[tab];

  return (
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
  );
}