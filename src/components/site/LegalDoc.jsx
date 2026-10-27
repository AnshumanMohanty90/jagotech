import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Footer from "@/components/site/Footer";
import { LEGAL } from "@/content/legal";


const EMAIL = /([A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,})/;
function Linked({ text }) {
  return text.split(EMAIL).map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={`mailto:${part}`} className="whitespace-nowrap underline underline-offset-2">
        {part}
      </a>
    ) : (
      part
    ),
  );
}

function Block({ item }) {
  if (typeof item === "string") {
    return <p className="site-line max-w-[72ch] text-base leading-6 text-[#dde4ee] text-pretty"><Linked text={item} /></p>;
  }
  if (item.h) {
    return <h3 className="pt-2 !font-ui !text-lg !font-bold !leading-[1.375] text-foreground">{item.h}</h3>;
  }
  return (
    <ul className="max-w-[72ch] list-disc space-y-2 pl-5 text-base leading-6 text-[#dde4ee] marker:text-primary">
      {item.list.map((li) => (
        <li key={li} className="text-pretty"><Linked text={li} /></li>
      ))}
    </ul>
  );
}

export default function LegalDoc({ doc }) {
  const d = LEGAL[doc];
  usePageMeta(`${d.title} | Jago AI`, d.intro && typeof d.intro[0] === "string" ? d.intro[0].split(/(?<=\.)\s/)[0] : undefined);
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main id="main-content">
        <PageHeader eyebrow="Legal" title={d.title} showActions={false}>
          {`Last updated ${d.updated}.`}
        </PageHeader>
        <section className="site-section site-section-alt">
          <div className="mx-auto max-w-[1024px] px-5 sm:px-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-[#2f3641] bg-[rgba(19,22,27,0.3)] p-6">
              {d.intro.map((p) => (
                <Block key={p} item={p} />
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-6">
              {d.sections.map(([h, body]) => (
                <section key={h} className="flex flex-col gap-4 rounded-2xl border border-[#2f3641] bg-[rgba(19,22,27,0.3)] p-6">
                  <h2 className="font-heading !text-xl text-balance">{h}</h2>
                  {body.map((item, i) => (
                    <Block key={i} item={item} />
                  ))}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
