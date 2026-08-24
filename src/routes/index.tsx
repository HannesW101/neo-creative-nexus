import { createFileRoute, Link } from "@tanstack/react-router";
import emberTexture from "@/assets/ember-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sevren Studios | Websites on a Flat Monthly Fee" },
      {
        name: "description",
        content:
          "We build your business website and run it for one monthly fee. Hosting, security, SEO and updates included. Live in 3 to 5 business days.",
      },
      { property: "og:title", content: "Sevren Studios | Websites on a Flat Monthly Fee" },
      {
        property: "og:description",
        content:
          "One monthly fee covers the build, hosting, security and updates. Live in 3 to 5 business days, cancel anytime.",
      },
    ],
  }),
  component: Home,
});

const sectors = [
  "Trades & Contractors",
  "Electrical & Solar",
  "Plumbing & HVAC",
  "Automotive",
  "Home Services",
  "Professional Services",
];

const included = [
  {
    n: "01",
    title: "A site built around what you sell",
    body: "No template with your logo dropped in. We design for your jobs, your area and the people phoning you.",
  },
  {
    n: "02",
    title: "Hosting and security on us",
    body: "SSL, backups and uptime are handled. Nothing to patch, no second invoice arriving from someone else.",
  },
  {
    n: "03",
    title: "Set up to be found nearby",
    body: "Technical SEO done properly and your Google Business Profile wired up so local searches land on you.",
  },
  {
    n: "04",
    title: "Edits without a callout fee",
    body: "New hours, new photos, a price change. Email it over and it goes live. No quote for the small stuff.",
  },
  {
    n: "05",
    title: "Ways to reach you, day one",
    body: "Click to call, WhatsApp and a map on the page, in whichever order your customers actually use them.",
  },
  {
    n: "06",
    title: "Numbers in plain language",
    body: "Visitor and enquiry tracking from launch. Growth and Premium plans get a monthly read on what changed.",
  },
];

const process = [
  {
    n: "01",
    title: "Get in touch",
    body: "Tell us what your current site costs you, or what not having one costs you. One email is enough to start.",
  },
  {
    n: "02",
    title: "Design and build",
    body: "Once your content and branding land with us, the site is built and reviewed in 3 to 5 business days.",
  },
  {
    n: "03",
    title: "Launch",
    body: "Domain connected, Google Business Profile and Search Console set up, site live and indexed.",
  },
  {
    n: "04",
    title: "Ongoing care",
    body: "Hosting, security and your included updates keep running every month without you having to chase us.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative grain overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 hairline-grid opacity-60" />
        <div className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[38rem] rounded-full bg-ember/20 blur-[140px]" />

        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <p className="label-mono rise">Web design and hosting, South Africa</p>

          <h1 className="display-xl rise mt-6 max-w-5xl">
            Your website,
            <br />
            <span className="ember-text">run for you</span> monthly.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Stop paying thousands upfront for a site that then sits there. We build it, host it,
              secure it and keep it current for one flat fee, so there is no big invoice to find
              before the site has made you a cent.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See plans and pricing
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-hairline px-7 py-4 font-medium transition-colors hover:bg-surface"
              >
                Email us
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
            {[
              ["Live in", "3 to 5 business days"],
              ["Included", "Hosting, SSL, backups"],
              ["Contract", "Month to month, cancel anytime"],
            ].map(([k, v]) => (
              <div key={k} className="bg-surface/70 p-6 backdrop-blur-xl">
                <dt className="label-mono">{k}</dt>
                <dd className="mt-3 font-display text-xl leading-tight">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Sector marquee */}
      <section className="border-y border-hairline py-5" aria-label="Industries we build for">
        <div className="marquee-track gap-10">
          {[...sectors, ...sectors].map((s, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-2xl text-muted-foreground md:text-3xl">{s}</span>
              <span className="text-ember">&#10022;</span>
            </span>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-[92rem] px-5 py-24 md:px-10 md:py-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono">What you get</p>
            <h2 className="display-md mt-5 max-w-2xl">One fee. No add-on invoices.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Most studios quote a build, then bill again for hosting, patches and every small edit
            after launch. We put all of it in the same line item.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {included.map((item) => (
            <article
              key={item.n}
              className="group relative bg-surface p-8 transition-colors hover:bg-surface-raised"
            >
              <span className="font-mono text-xs text-ember">{item.n}</span>
              <h3 className="mt-6 text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <span className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative grain border-y border-hairline">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="label-mono">How it works</p>
            <h2 className="display-md mt-5">From first email to live site.</h2>
            <div className="relative mt-10 overflow-hidden rounded-lg border border-hairline">
              <img
                src={emberTexture}
                alt="Glowing embers running through dark charcoal"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-56 w-full object-cover opacity-80"
              />
              <p className="absolute bottom-5 left-5 max-w-[16rem] font-display text-xl leading-tight">
                Slow quotes go cold. We keep the build moving.
              </p>
            </div>
          </div>

          <ol className="space-y-px overflow-hidden rounded-lg border border-hairline bg-hairline">
            {process.map((step) => (
              <li
                key={step.n}
                className="flex gap-6 bg-surface p-8 transition-colors hover:bg-surface-raised md:gap-10 md:p-10"
              >
                <span className="font-display text-4xl text-ember/70 md:text-5xl">{step.n}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[92rem] px-5 py-24 md:px-10 md:py-36">
        <div className="relative grain overflow-hidden rounded-lg border border-hairline bg-surface p-10 md:p-20">
          <div className="pointer-events-none absolute -bottom-32 -left-20 size-[30rem] rounded-full bg-ember/25 blur-[130px]" />
          <p className="label-mono">Next step</p>
          <h2 className="display-md mt-5 max-w-3xl">
            Send one email about your business. We reply within a business day.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-ember px-7 py-4 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Tell us what you need
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border border-hairline px-7 py-4 font-medium transition-colors hover:bg-surface-raised"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
