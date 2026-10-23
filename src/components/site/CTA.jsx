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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full bg-primary/15 blur-[140px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-balance">
            Bring one process. We will show you Jago running it{" "}
            <span className="whitespace-nowrap text-primary text-glow">in 8 weeks.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto text-balance">
            Tell us the work that takes your team the most time. In one call, we map it and give you a{" "}
            <strong className="copy-accent">free 8-week plan</strong>.
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
                Get your free 8-week plan
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
                <option value="1-50">1 to 50</option>
                <option value="51-100">51 to 100</option>
                <option value="100-200">100 to 200</option>
                <option value="200-500">200 to 500</option>
                <option value="500-1000">500 to 1,000</option>
                <option value="1000+">Greater than 1,000</option>
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

          <div className="mt-6">
            <a href="https://www.jago-tech.ai/contact" className="site-cta-secondary px-5 py-3 rounded-xl">
              Try it free for a week
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}