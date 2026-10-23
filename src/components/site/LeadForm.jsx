import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { base44 } from "@/api/base44Client";

const SIZES = ["1 to 50", "51 to 200", "201 to 500", "501 to 1,000", "Over 1,000"];

const PERSONAL_DOMAINS = [
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.in", "yahoo.in",
  "outlook.com", "hotmail.com", "hotmail.co.in", "live.com", "msn.com",
  "aol.com", "icloud.com", "me.com", "proton.me", "protonmail.com",
  "rediffmail.com", "yandex.com", "yandex.ru", "gmx.com", "mail.com",
];

// Placeholder for the 8-week plan PDF. Swap this single URL when the file is ready.
export const PLAN_PDF_URL = "/8-week-plan.pdf";

const downloadPlanPdf = () => {
  const a = document.createElement("a");
  a.href = PLAN_PDF_URL;
  a.download = "jago-8-week-plan.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const INTENT_TEXT = {
  plan: {
    button: "Download the plan",
    thanks: "Thank you. Your download has started.",
  },
  trial: {
    button: "Activate my free week",
    thanks: "Thank you. Your trial request is in. We will email your login details to you.",
  },
  enterprise: {
    button: "Send",
    thanks: "Thank you. Our team will be in touch.",
  },
  guide: {
    button: "Notify me",
    thanks: "Thank you. We will email you when this guide is ready.",
  },
};

const inputCls =
  "rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3.5 text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition";

export default function LeadForm({
  intent = "plan",
  sourcePage,
  defaultTask = "",
  buttonLabel,
  thankYou,
  note = "We do not share your details.",
  mini = false,
}) {
  const { pathname } = useLocation();
  const [form, setForm] = useState({
    name: "",
    workEmail: "",
    company: "",
    companySize: "",
    mainTask: defaultTask,
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const trimmed = form.workEmail.trim().toLowerCase();
    const domain = trimmed.split("@")[1] || "";
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(trimmed) || PERSONAL_DOMAINS.includes(domain)) {
      setError("Please use your work email so we can set up your plan.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await base44.functions.invoke("saveLead", {
        intent,
        name: form.name.trim(),
        workEmail: trimmed,
        company: form.company.trim(),
        companySize: mini ? "" : form.companySize,
        mainTask: mini ? defaultTask : form.mainTask.trim(),
        sourcePage: sourcePage || pathname,
      });
      if (!res.data || res.data.ok !== true) {
        throw new Error("Save failed");
      }
      setSent(true);
      if (intent === "plan") downloadPlanPdf();
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  if (sent && intent === "plan") {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <Check className="mt-1 h-5 w-5 shrink-0 text-emerald" />
          <p className="text-base leading-relaxed text-foreground/90">
            Thank you. Your download has started.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href={PLAN_PDF_URL} download="jago-8-week-plan.pdf" className="site-cta-secondary px-5 py-3 rounded-xl">
            Download again
          </a>
          <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
            Try it free for a week
          </Link>
        </div>
      </motion.div>
    );
  }

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3">
        <Check className="mt-1 h-5 w-5 shrink-0 text-emerald" />
        <p className="text-base leading-relaxed text-foreground/90">
          {thankYou || INTENT_TEXT[intent].thanks}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={form.name}
          onChange={set("name")}
          placeholder="Name"
          className={inputCls}
        />
        <input
          type="email"
          required
          value={form.workEmail}
          onChange={set("workEmail")}
          placeholder="Work email"
          className={inputCls}
        />
        <input
          type="text"
          required
          value={form.company}
          onChange={set("company")}
          placeholder="Company"
          className={inputCls}
        />
        {!mini && (
          <select
            required
            value={form.companySize}
            onChange={set("companySize")}
            className={`${inputCls} text-muted-foreground`}
          >
            <option value="">Company size</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        )}
      </div>
      {!mini && (
        <textarea
          rows={4}
          required
          value={form.mainTask}
          onChange={set("mainTask")}
          placeholder="Which task takes your team the most time?"
          className={`${inputCls} w-full`}
        />
      )}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="site-cta-primary group gap-2 px-5 py-3.5 rounded-xl text-sm disabled:opacity-60"
        >
          {buttonLabel || INTENT_TEXT[intent].button}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <p className="text-sm leading-relaxed text-muted-foreground">{note}</p>
      </div>
      {error && <p className="text-sm leading-relaxed text-destructive">{error}</p>}
    </form>
  );
}