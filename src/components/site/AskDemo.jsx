import React, { useState } from "react";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function AskDemo({ placeholder, language }) {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <>
      <form onSubmit={ask} className="flex items-center gap-3 rounded-xl bg-background/80 px-4 py-3.5">
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
      {answer && (
        <div className="mt-2 rounded-xl border border-primary/25 bg-background/80 px-4 py-3">
          <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">jago · answer</span>
          <p lang={language} className="mt-2 font-body text-base leading-relaxed text-foreground/90 whitespace-pre-line break-words">{answer}</p>
        </div>
      )}
      {error && <p className="mt-2 px-1 text-sm leading-relaxed text-destructive">{error}</p>}
    </>
  );
}