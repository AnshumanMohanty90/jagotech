import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";

const POINTS = [
  "You decide who can see and do what.",
  "A person approves the key steps before anything changes.",
  "Every action is on record, ready for an audit.",
  "On Enterprise and own-server plans, you choose which AI is used for each\u00a0task.",
  "Jago can run on your own servers.",
  "You choose where your data is stored.",
];

export default function SecurityPoints() {
  return (
    <Reveal className="relative site-section-alt">
      <div className="relative mx-auto max-w-[1024px] px-5 sm:px-8 flex flex-col items-center gap-6">
        <ul className="grid w-full gap-4 sm:grid-cols-2">
          {POINTS.map((p) => (
            <li
              key={p}
              className="flex min-h-[44px] items-start gap-3 rounded-2xl border border-[#2f3641] bg-[rgba(19,22,27,0.3)] p-5"
            >
              <CheckCircle aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span className="site-line text-base leading-6 text-[#dde4ee] text-pretty">{p}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto max-w-[772px] text-center text-base text-pretty">
          We are preparing for a SOC 2 audit and ISO 27001&nbsp;certification.
        </p>

        <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
          Book a free trial
        </Link>
      </div>
    </Reveal>
  );
}