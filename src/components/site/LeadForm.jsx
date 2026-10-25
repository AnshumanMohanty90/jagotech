import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { submitLead } from "@/lib/submitLead";

const SIZES = ["1 to 50", "51 to 200", "201 to 500", "501 to 1,000", "Over 1,000"];

const PERSONAL_DOMAINS = [
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.in", "yahoo.in",
  "outlook.com", "hotmail.com", "hotmail.co.in", "live.com", "msn.com",
  "aol.com", "icloud.com", "me.com", "proton.me", "protonmail.com",
  "rediffmail.com", "yandex.com", "yandex.ru", "gmx.com", "mail.com",
];

const PERSONAL_EMAIL_MESSAGE =
  "Please use your work email, not a Gmail, Yahoo or Outlook address.";
const SAVE_FAILED_MESSAGE =
  "We could not send this. Your details are still here. Please try again or write to";
const CONTACT_EMAIL = "contact@jagoai.com";

// The 8-week plan PDF (stored publicly).
export const PLAN_PDF_URL =
  "https://media.base44.com/files/public/6ac78b627ed759581c8a0fea/df70a7026_JagoAI_8-WeekPlan.pdf";

const INTENT_TEXT = {
  contact: {
    button: "Send message",
    thanks: "Thank you. We have your message and will reply to your work email.",
  },
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
  pricing: {
    button: "Get my quote",
    thanks: "Thank you. We will email your quote to you.",
  },
};

const PLANS_OF_INTEREST = ["Growth", "Enterprise", "JShield add-on", "Own servers"];

export const CONTACT_REASONS = [
  "Book a demo",
  "Pricing and plans",
  "Start a free trial",
  "Partnership",
  "Customer support",
  "Media and press",
  "Careers",
  "Something else",
];

const FIELD_ORDER = ["reason", "name", "workEmail", "company", "companySize", "planOfInterest", "mainTask"];

// A unique id per submission, stored on the Lead.
const newSubmissionId = () =>
  window.crypto && window.crypto.randomUUID
    ? window.crypto.randomUUID()
    : `s-${Date.now()}-${Math.random().toString(36).slice(2)}`;

const inputCls =
  "w-full rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3.5 text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition";

function Field({ id, label, error, children }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block text-sm font-medium leading-relaxed text-foreground/90">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm leading-relaxed text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default function LeadForm({
  intent = "plan",
  sourcePage,
  defaultTask = "",
  planOfInterest = "",
  buttonLabel,
  thankYou,
  note = "We do not share your details.",
  mini = false,
}) {
  const { pathname } = useLocation();
  const TEXT = INTENT_TEXT[intent] || INTENT_TEXT.contact;
  const submissionIdRef = useRef("");
  const errorRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    workEmail: "",
    company: "",
    companySize: "",
    mainTask: defaultTask,
    planOfInterest: PLANS_OF_INTEREST.includes(planOfInterest) ? planOfInterest : "",
    reason: "",
    website: "", // honeypot: humans never see or fill this
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");
  const refs = useRef({});

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const cls = (key) => `${inputCls} ${errors[key] ? "border-destructive/70" : ""}`;
  const a11y = (key) => ({
    id: key,
    "aria-invalid": errors[key] ? "true" : "false",
    ...(errors[key] ? { "aria-describedby": `${key}-error` } : {}),
  });
  const ref = (key) => (el) => {
    refs.current[key] = el;
  };

  const checkPersonalEmail = () => {
    const domain = form.workEmail.trim().toLowerCase().split("@")[1] || "";
    if (PERSONAL_DOMAINS.includes(domain)) {
      setErrors((prev) => ({ ...prev, workEmail: PERSONAL_EMAIL_MESSAGE }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    const trimmed = form.workEmail.trim().toLowerCase();
    const domain = trimmed.split("@")[1] || "";
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(trimmed)) {
      next.workEmail = "Please enter your work email.";
    } else if (PERSONAL_DOMAINS.includes(domain)) {
      next.workEmail = PERSONAL_EMAIL_MESSAGE;
    }
    if (!form.company.trim()) next.company = "Please enter your company.";
    if (!mini && !form.companySize) next.companySize = "Please select your company size.";
    if (intent === "pricing" && !form.planOfInterest) next.planOfInterest = "Please select a plan.";
    if (intent === "contact" && !form.reason) next.reason = "Please choose why you are contacting us.";
    if (!mini && !form.mainTask.trim()) {
      next.mainTask =
        intent === "contact"
          ? "Please tell us how we can help."
          : "Please tell us the task that takes your team the most time.";
    }
    return next;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;

    // Honeypot filled: a bot, not a person. Show the normal thank-you, save nothing.
    if (form.website.trim()) {
      setSent(true);
      return;
    }

    const next = validate();
    setErrors(next);
    if (FIELD_ORDER.some((k) => next[k])) {
      for (const key of FIELD_ORDER) {
        if (next[key]) {
          refs.current[key]?.focus();
          break;
        }
      }
      return;
    }

    // Open the tab now, inside the click, so the browser allows it.
    const downloadWindow = intent === "plan" ? window.open("", "_blank") : null;

    setSending(true);
    setServerError("");
    try {
      const trimmed = form.workEmail.trim().toLowerCase();
      const res = await submitLead({
        // General contact messages are saved as enterprise leads, with the reason first.
        intent: intent === "contact" ? "enterprise" : intent,
        submissionId: (submissionIdRef.current ||= newSubmissionId()),
        name: form.name.trim(),
        workEmail: trimmed,
        company: form.company.trim(),
        companySize: mini ? "" : form.companySize,
        mainTask: mini
          ? defaultTask
          : intent === "contact"
            ? `${form.reason}: ${form.mainTask.trim()}`
            : form.mainTask.trim(),
        planOfInterest: intent === "pricing" ? form.planOfInterest : "",
        sourcePage: sourcePage || pathname,
      });
      if (!res.data || res.data.ok !== true) {
        throw new Error("Save failed");
      }
      if (downloadWindow) downloadWindow.location.href = PLAN_PDF_URL;
      setSent(true);
    } catch {
      if (downloadWindow) downloadWindow.close();
      // Keep every value so the visitor can try again without retyping.
      setServerError(SAVE_FAILED_MESSAGE);
      window.setTimeout(() => errorRef.current?.focus(), 0);
    } finally {
      setSending(false);
    }
  };

  if (sent && intent === "plan") {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-5">
        <p className="text-base leading-relaxed text-foreground/90">
          Thank you. Your download has started.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PLAN_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="site-cta-secondary px-5 py-3 rounded-xl"
          >
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
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-base leading-relaxed text-foreground/90">
        {thankYou || TEXT.thanks}
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      {intent === "contact" && (
        <Field id="reason" label="Why are you contacting us?" error={errors.reason}>
          <select
            ref={ref("reason")}
            required
            value={form.reason}
            onChange={set("reason")}
            className={`${cls("reason")} ${form.reason ? "" : "text-muted-foreground"}`}
            {...a11y("reason")}
          >
            <option value="">Select a reason</option>
            {CONTACT_REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
      )}
      <Field id="name" label="Name" error={errors.name}>
        <input
          ref={ref("name")}
          type="text"
          required
          value={form.name}
          onChange={set("name")}
          autoComplete="name"
          maxLength={120}
          className={cls("name")}
          {...a11y("name")}
        />
      </Field>
      <Field id="workEmail" label="Work email" error={errors.workEmail}>
        <input
          ref={ref("workEmail")}
          type="email"
          required
          value={form.workEmail}
          onChange={set("workEmail")}
          onBlur={checkPersonalEmail}
          autoComplete="email"
          maxLength={160}
          className={cls("workEmail")}
          {...a11y("workEmail")}
        />
      </Field>
      <Field id="company" label="Company" error={errors.company}>
        <input
          ref={ref("company")}
          type="text"
          required
          value={form.company}
          onChange={set("company")}
          autoComplete="organization"
          maxLength={160}
          className={cls("company")}
          {...a11y("company")}
        />
      </Field>
      {!mini && (
        <Field id="companySize" label="Company size" error={errors.companySize}>
          <select
            ref={ref("companySize")}
            required
            value={form.companySize}
            onChange={set("companySize")}
            className={`${cls("companySize")} text-muted-foreground`}
            {...a11y("companySize")}
          >
            <option value="">Company size</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      )}
      {intent === "pricing" && (
        <Field id="planOfInterest" label="Plan of interest" error={errors.planOfInterest}>
          <select
            ref={ref("planOfInterest")}
            required
            value={form.planOfInterest}
            onChange={set("planOfInterest")}
            className={`${cls("planOfInterest")} text-muted-foreground`}
            {...a11y("planOfInterest")}
          >
            <option value="">Plan of interest</option>
            {PLANS_OF_INTEREST.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
      )}
      {!mini && (
        <Field
          id="mainTask"
          label={intent === "contact" ? "How can we help?" : "Which task takes your team the most time?"}
          error={errors.mainTask}
        >
          <textarea
            ref={ref("mainTask")}
            rows={4}
            required
            maxLength={2000}
            value={form.mainTask}
            onChange={set("mainTask")}
            className={`${cls("mainTask")} w-full`}
            {...a11y("mainTask")}
          />
        </Field>
      )}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={set("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
      />
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="site-cta-primary px-5 py-3.5 rounded-xl text-sm disabled:opacity-60"
        >
          {sending ? "Sending..." : buttonLabel || TEXT.button}
        </button>
        <p className="text-sm leading-relaxed text-muted-foreground">{note}</p>
      </div>
      {serverError && (
        <p ref={errorRef} tabIndex={-1} role="alert" className="text-sm leading-relaxed text-destructive outline-none">
          {serverError}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="whitespace-nowrap underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
