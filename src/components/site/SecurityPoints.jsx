import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";

const POINTS = [
  "You decide who can see and do what.",
  "A person approves the key steps before anything changes.",
  "Every action is on record, ready for an audit.",
  "You choose which AI is used for each task.",
  "Jago can run on your own servers.",
  "Your data stays in India.",
];

export default function SecurityPoints() {
  return (
    <Reveal className="relative site-section-alt">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <ul className="max-w-none">
          {POINTS.map((p) => (
            <li key={p} className="py-4 text-base sm:text-lg leading-relaxed text-pretty min-h-[44px]">
              {p}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-base leading-relaxed text-pretty">
          Security certification (SOC 2 and ISO 27001, two global standards) is under way.
        </p>

        <Link to="/contact?intent=enterprise" className="site-cta-primary mt-8 px-5 py-3 rounded-xl">
          Talk to us
        </Link>
      </div>
    </Reveal>
  );
}