import React from "react";
import logoUrl from "@/assets/jago-logo.svg";

export default function Logo({ className = "h-8 w-auto" }) {
  return <img src={logoUrl} alt="JagoTech" className={className} />;
}