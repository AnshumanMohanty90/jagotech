import React from "react";
import logoUrl from "@/assets/jago-logo.svg";
import logoInkUrl from "@/assets/jago-logo-ink.svg";

export default function Logo({ className = "h-8 w-auto", variant = "light" }) {
  const src = variant === "ink" ? logoInkUrl : logoUrl;
  return <img src={src} alt="Jago AI" width={112} height={30} className={className} />;
}