import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";

const SIZES = ["1 to 50", "51 to 200", "201 to 500", "501 to 1,000", "Over 1,000"];

const PERSONAL_DOMAINS = [
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.in", "yahoo.in",
  "outlook.com", "hotmail.com", "hotmail.co.in", "live.com", "msn.com",
  "aol.com", "icloud.com", "me.com", "proton.me", "protonmail.com",
  "rediffmail.com", "yandex.com", "yandex.ru", "gmx.com", "mail.com",
];

const inputCls =
  "rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3.5 text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition";

export default function TrialForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", employees: "", task: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const trimmed = form.email.trim().toLowerCase();
    const domain = trimmed.split("@")[1] || "";
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(trimmed) || PERSONAL_DOMAINS.includes(domain)) {
      setError("Please use your work email. Personal addresses like Gmail are not accepted.");
      return;
    }
    setSending(true);
    setError("");
    try {
      await base44.entities.Lead.create({
        name: form.name.trim(),
        email: trimmed,
        company: form.company.trim(),
        employees: form.employees,
        task: form.task.trim(),
        source: "eight_week_plan",
      });
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-15 mask-fade-edges" />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <div className="rounded-3xl border border-primary/40 bg-card/50 backdrop-blur p-7 sm:p-9 glow-cyan">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3"
            >
              <Check className="mt-1 h-5 w-5 shrink-0 text-emerald" />
              <p className="text-base leading-relaxed text-foreground/90">
                Thanks. We will reply within one working day.
              </p>
            </motion.div>
          ) : (
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
                  value={form.email}
                  onChange={set("email")}
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
                <select
                  required
                  value={form.employees}
                  onChange={set("employees")}
                  className={`${inputCls} text-muted-foreground`}
                >
                  <option value="">Company size</option>
                  {SIZES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                rows={4}
                required
                value={form.task}
                onChange={set("task")}
                placeholder="Which task takes your team the most time?"
                className={`${inputCls} w-full`}
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="site-cta-primary group gap-2 px-5 py-3.5 rounded-xl text-sm disabled:opacity-60"
                >
                  Get my 8-week plan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <p className="text-sm leading-relaxed text-muted-foreground">We reply within one working day.</p>
              </div>
              {error && <p className="text-sm leading-relaxed text-destructive">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}