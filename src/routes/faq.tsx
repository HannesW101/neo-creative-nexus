import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Sevren Studios Monthly Websites" },
      {
        name: "description",
        content:
          "Answers on monthly billing, domain ownership, what counts as a minor change, cancelling and working outside South Africa.",
      },
      { property: "og:title", content: "FAQ | Sevren Studios Monthly Websites" },
      {
        property: "og:description",
        content: "Monthly billing, domain ownership, included edits and cancelling, explained plainly.",
      },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "Why monthly instead of one payment upfront?",
    a: "Pay once and you are still on the hook for hosting, security and updates, one way or another. The monthly fee covers all of it, so no separate invoice shows up later.",
  },
  {
    q: "Do I own my domain and content?",
    a: "Yes. We register and pay for the domain as part of setup, but it is registered in your name from day one. Your content stays yours, always.",
  },
  {
    q: "What counts as a minor change?",
    a: "Text edits, photo swaps, updated hours or pricing. New pages or new functionality get a quote first, so nothing lands as a surprise.",
  },
  {
    q: "Can I cancel?",
    a: "Anytime. Every plan is month to month with no minimum term. Tell us you are cancelling and we either take the site down straight away or leave it live until the billing period ends, whichever you prefer.",
  },
  {
    q: "Do you work with businesses outside South Africa?",
    a: "Yes. We are based in South Africa and work with clients anywhere. Prices convert as a guide and we confirm the billing currency with you directly.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[92rem] px-5 pt-32 pb-24 md:px-10 md:pt-44 md:pb-36">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="label-mono">Questions</p>
          <h1 className="display-md mt-5">The things people ask before signing.</h1>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Something here not covered? Ask directly and you get a straight answer, not a sales call.
          </p>
          <Link to="/contact" className="mt-8 inline-block border-b border-ember pb-1 text-sm">
            Ask us instead
          </Link>
        </div>

        <div className="divide-y divide-hairline border-y border-hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-8 py-7 text-left"
                >
                  <span className="font-display text-2xl leading-tight md:text-3xl">{f.q}</span>
                  <span
                    className={`mt-2 text-ember transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pr-12 leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
