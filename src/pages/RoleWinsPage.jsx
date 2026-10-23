import React from "react";
import Navbar from "@/components/site/Navbar";
import RoleWins from "@/components/site/RoleWins";
import Footer from "@/components/site/Footer";

export default function RoleWinsPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <RoleWins />
      </main>
      <Footer />
    </div>
  );
}