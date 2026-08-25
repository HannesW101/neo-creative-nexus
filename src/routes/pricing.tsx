import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { Spotlight } from "@/components/site/spotlight";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Sevren Studios Monthly Website Plans" },
      {
        name: "description",
        content:
          "Flat monthly website plans from R399. Build, hosting, SSL, SEO and updates in one fee. Month to month, no contract.",
      },
      { property: "og:title", content: "Pricing | Sevren Studios Monthly Website Plans" },
      {
        property: "og:description",
        content: "Five plans, one monthly fee each. Nothing else to negotiate.",
      },
    ],
  }),
  component: Pricing,
});

const currencies = {
  ZAR: { symbol: "R", rate: 1, decimals: 0 },
  USD: { symbol: "$", rate: 0.055, decimals: 0 },
  EUR: { symbol: "\u20ac", rate: 0.051, decimals: 0 },
  GBP: { symbol: "\u00a3", rate: 0.043, decimals: 0 },
  AUD: { symbol: "A$", rate: 0.084, decimals: 0 },
} as const;

type Code = keyof typeof currencies;

const plans = [
  {
    name: "Basic",
    zar: 399,
    tagline: "Set up once, hosted forever. No ongoing changes.",
    features: [
      "Single page site, up to 5 sections",
      "Mobile first responsive design",
      "Hosting and SSL included",
      "Contact form and WhatsApp link",
      "Google Maps embed",
      "On page SEO at launch",
      "Hosting only after launch",
    ],
  },
  {
    name: "Starter",
    zar: 799,
    tagline: "The same site as Basic, kept up to date by us.",
    features: [
      "Single page site, up to 5 sections",
      "Mobile first responsive design",
      "Hosting and SSL included",
      "Contact form and WhatsApp link",
      "Google Maps embed",
      "On page SEO at launch",
      "Minor updates on request",
    ],
  },
  {
    name: "Business",
    zar: 1499,
    tagline: "What most trades and service businesses actually need.",
    popular: true,
    features: [
      "Multi section site, up to 6 pages",
      "Mobile first responsive design",
      "Hosting, SSL and maintenance",
      "On page SEO",
      "Google Business Profile setup",
      "Analytics dashboard",
      "Monthly minor changes included",
    ],
  },
  {
    name: "Growth",
    zar: 2499,
    tagline: "For businesses chasing more search traffic.",
    features: [
      "Everything in Business, plus:",
      "Up to 10 pages, blog support",
      "Ongoing SEO and content work",
      "Monthly performance report",
      "Priority turnaround on changes",
      "Self edit CMS access, optional",
    ],
  },
  {
    name: "Premium",
    zar: 3999,
    plus: true,
    tagline: "Multi location businesses that want one point of contact.",
    features: [
      "Everything in Growth, plus:",
      "Multi location or advanced structure",
      "Custom integrations on request",
      "Dedicated support and check ins",
      "Scoped quotes for booking or shop",
    ],
  },
];

function format(zar: number, code: Code) {
  const c = currencies[code];
  const value = zar * c.rate;
  const rounded = code === "ZAR" ? value : Math.round(value);
  return `${c.symbol}${rounded.toLocaleString("en-ZA", { maximumFractionDigits: c.decimals })}`;
}

function Pricing() {
  const [code, setCode] = useState<Code>("ZAR");

  return (
    <div className="mx-auto max-w-[92rem] px-5 pt-32 pb-24 md:px-10 md:pt-44 md:pb-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label-mono">Pricing</p>
          <h1 className="display-md mt-5 max-w-2xl balance">Pick a plan. Nothing else to negotiate.</h1>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Billed monthly, month to month. Other currencies convert as a guide and we confirm final
            billing currency with you directly.
          </p>
        </div>

        <div className="flex flex-wrap gap-1 rounded-full border border-hairline bg-surface p-1">
          {(Object.keys(currencies) as Code[]).map((c) => (
            <button
              key={c}
              onClick={() => setCode(c)}
              className={`rounded-full px-4 py-2 font-mono text-xs tracking-widest transition-colors ${
                c === code
                  ? "bg-ember text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={(i % 3) * 80}>
          <Spotlight
            as="article"
            className={`flex h-full flex-col bg-surface p-8 transition-colors hover:bg-surface-raised ${
              plan.popular ? "ring-1 ring-inset ring-ember/30" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute right-8 top-8 rounded-full bg-ember/15 px-3 py-1 font-mono text-[0.625rem] tracking-widest text-ember uppercase">
                Most picked
              </span>
            )}
            <h2 className="font-display text-3xl">{plan.name}</h2>
            <p className="mt-3 min-h-12 text-sm text-muted-foreground">{plan.tagline}</p>
            <p className="mt-8 font-display text-5xl tracking-tight">
              {format(plan.zar, code)}
              {plan.plus && <span className="text-ember">+</span>}
              <span className="ml-2 font-sans text-sm text-muted-foreground">/month</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1 text-ember">&#9671;</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-between gap-4 rounded-full border border-hairline px-6 py-3.5 text-sm font-medium transition-colors hover:border-ember hover:bg-ember hover:text-primary-foreground"
            >
              {plan.plus ? "Talk to us" : "Get started"}
              <span>&rarr;</span>
            </Link>
          </Spotlight>
          </Reveal>
        ))}

        <div className="flex flex-col justify-center bg-surface p-8">
          <p className="label-mono">Add ons</p>
          <h2 className="mt-5 text-3xl">Booking or an online shop?</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Those get a separate scoped quote rather than a forced upgrade. Tell us what the flow
            needs to do and we price that piece on its own.
          </p>
          <Link to="/contact" className="mt-8 self-start border-b border-ember pb-1 text-sm">
            Tell us what you are after
          </Link>
        </div>
      </div>
    </div>
  );
}
