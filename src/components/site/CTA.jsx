import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [employees, setEmployees] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!email || sending) return;
    const trimmed = email.trim().toLowerCase();
    const domain = trimmed.split("@")[1] || "";
    const PERSONAL_DOMAINS = [
      "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.in", "yahoo.in",
      "outlook.com", "hotmail.com", "hotmail.co.in", "live.com", "msn.com",
      "aol.com", "icloud.com", "me.com", "proton.me", "protonmail.com",
      "rediffmail.com", "yandex.com", "yandex.ru", "gmx.com", "mail.com",
    ];
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(trimmed) || PERSONAL_DOMAINS.includes(domain)) {
      setError("Please use your work email. Personal addresses like Gmail are not accepted.");
      return;
    }
    setSending(true);
    setError("");
    try {
      await base44.entities.Lead.create({
        email: trimmed,
        company: company.trim(),
        employees,
        source: "trial_start",
      });
      setSent(true);
      setEmail("");
      setCompany("");
      setEmployees("");
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-edges" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full bg-primary/10 blur-[140px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">Awareness · Clarity · Right action</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-balance">
            Give your business an{" "}
            <span className="whitespace-nowrap text-primary text-glow">AI workforce.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto text-balance">
            Bring us <strong className="copy-focus">one process your team spends too much time managing</strong>.
            We'll show you how Jago can <strong className="copy-accent">connect the systems</strong>,
            understand the context, <em className="copy-aside">and move the work forward.</em>
          </p>

          <form onSubmit={submit} className="mt-8 mx-auto max-w-xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="flex-1 rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3.5 text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
              />
              <button
                type="submit"
                disabled={sending}
                className="site-cta-primary group gap-2 px-5 py-3.5 rounded-xl text-sm disabled:opacity-60"
              >
                Start your trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
                className="rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3.5 text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
              />
              <select
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
                className="rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3.5 text-base leading-relaxed text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
              >
                <option value="">Employees</option>
                <option value="100-500">100 to 500</option>
                <option value="500-2500">500 to 2,500</option>
                <option value="2500-10000">2,500 to 10,000</option>
                <option value="10000+">10,000+</option>
              </select>
            </div>
          </form>

          <div className="mt-4 min-h-6">
            {sent ? (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-start gap-2 text-base leading-relaxed text-emerald"
              >
                <Check className="mt-1 h-4 w-4 shrink-0" /> Thanks. We will set up your trial workspace and
                reach out shortly.
              </motion.span>
            ) : error ? (
              <span className="text-base leading-relaxed text-destructive">{error}</span>
            ) : null}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Prefer a guided walkthrough first?{" "}
            <a
              href="https://www.jago-tech.ai/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              Book a demo
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}