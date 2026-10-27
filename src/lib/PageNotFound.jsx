import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import usePageMeta from "@/hooks/usePageMeta";

export default function PageNotFound() {
  usePageMeta("Page not found | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="site-section">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <p className="site-label site-eyebrow">Page not found</p>
            <h1 className="mt-4 font-heading text-balance">
              We could not find that page.
            </h1>
            <p className="mt-4 text-base sm:text-lg">
              The link may be old or mistyped. Start from the home page or get in touch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/" className="site-cta-primary px-5 py-3 rounded-xl">
                Go to the home page
              </Link>
              <Link to="/contact" className="site-cta-secondary px-5 py-3 rounded-xl">
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
