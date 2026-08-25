import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import emberTexture from "@/assets/ember-texture.jpg";
import { Reveal } from "@/components/site/reveal";
import { Spotlight } from "@/components/site/spotlight";

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

const comparison = [
  {
    old: "R25 000 upfront before a single visitor arrives",
    ours: "A monthly fee that starts small and stays the same",
  },
  {
    old: "Hosting billed by someone else you never met",
    ours: "Hosting, SSL and backups inside the same line item",
  },
  {
    old: "A quote every time you want a photo swapped",
    ours: "Email the change, it goes live, no callout fee",
  },
  {
    old: "Six weeks of waiting for a first draft",
    ours: "Built and reviewed in 3 to 5 business days",
  },
  {
    old: "A twelve month contract you cannot leave",
    ours: "Month to month, cancel whenever it stops working",
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

/** Moves the hero ember glow toward the pointer. */
function useHeroPointer() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--px", `${x * 70}px`);
      node.style.setProperty("--py", `${y * 50}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return ref;
}

function Home() {
  const heroRef = useHeroPointer();

  return (
    <div>
      {/* Hero */}
      <section
        ref={heroRef as never}
        className="relative grain overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 hairline-grid opacity-60" />
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[38rem] rounded-full bg-ember/20 blur-[140px] transition-transform duration-[1200ms] ease-out"
          style={{ transform: "translate3d(var(--px, 0px), var(--py, 0px), 0)" }}
        />
        <div
          className="pointer-events-none absolute bottom-[-14rem] left-[-8%] -z-10 size-[26rem] rounded-full bg-ember-soft/10 blur-[150px] transition-transform duration-[1600ms] ease-out"
          style={{
            transform: "translate3d(calc(var(--px, 0px) * -0.6), calc(var(--py, 0px) * -0.6), 0)",
          }}
        />

        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <p className="label-mono rise">Web design and hosting, South Africa</p>

          <h1 className="display-xl rise mt-6 max-w-5xl">
            Your website,
            <br />
            <span className="ember-text">run for you</span> monthly.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <p className="max-w-xl balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              Stop paying thousands upfront for a site that then sits there. We build it, host it,
              secure it and keep it current for one flat fee, so there is no big invoice to find
              before the site has made you a cent.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/pricing"
                className="group sheen inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
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
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 90}>
                <Spotlight className="h-full bg-surface/70 p-6 backdrop-blur-xl">
                  <dt className="label-mono">{k}</dt>
                  <dd className="mt-3 font-display text-xl leading-tight">{v}</dd>
                </Spotlight>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Sector marquee */}
      <section
        className="marquee-mask border-y border-hairline py-5"
        aria-label="Industries we build for"
      >
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
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono">What you get</p>
            <h2 className="display-md mt-5 max-w-2xl balance">One fee. No add-on invoices.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Most studios quote a build, then bill again for hosting, patches and every small edit
            after launch. We put all of it in the same line item.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => (
            <Reveal key={item.n} delay={(i % 3) * 90}>
              <Spotlight
                as="article"
                className="group h-full bg-surface p-8 transition-colors hover:bg-surface-raised"
              >
                <span className="font-mono text-xs text-ember">{item.n}</span>
                <h3 className="mt-6 text-2xl balance">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100" />
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Old way vs ours */}
      <section className="border-y border-hairline bg-surface/30">
        <div className="mx-auto max-w-[92rem] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="label-mono">The difference</p>
            <h2 className="display-md mt-5 max-w-3xl balance">
              The usual way, and the way we do it.
            </h2>
          </Reveal>

          <ul className="mt-14 space-y-px overflow-hidden rounded-lg border border-hairline bg-hairline">
            {comparison.map((row, i) => (
              <Reveal key={row.ours} delay={i * 70} as="li">
                <div className="grid gap-3 bg-surface p-6 md:grid-cols-2 md:gap-10 md:p-8">
                  <p className="flex items-start gap-4 text-muted-foreground line-through decoration-muted-foreground/40">
                    <span className="mt-1 font-mono text-xs not-italic no-underline">0{i + 1}</span>
                    {row.old}
                  </p>
                  <p className="flex items-start gap-4 font-display text-xl leading-snug">
                    <span className="mt-1 text-ember">&#10022;</span>
                    {row.ours}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative grain border-y border-hairline">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="label-mono">How it works</p>
            <h2 className="display-md mt-5 balance">From first email to live site.</h2>
            <div className="group relative mt-10 overflow-hidden rounded-lg border border-hairline">
              <img
                src={emberTexture}
                alt="Glowing embers running through dark charcoal"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-56 w-full object-cover opacity-80 transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <p className="absolute bottom-5 left-5 max-w-[16rem] font-display text-xl leading-tight">
                Slow quotes go cold. We keep the build moving.
              </p>
            </div>
          </div>

          <ol className="space-y-px overflow-hidden rounded-lg border border-hairline bg-hairline">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 90} as="li">
                <Spotlight
                  className="flex gap-6 bg-surface p-8 transition-colors hover:bg-surface-raised md:gap-10 md:p-10"
                >
                  <span className="font-display text-4xl text-ember/70 md:text-5xl">{step.n}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl">{step.title}</h3>
                    <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[92rem] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <Spotlight className="grain hairline-ember overflow-hidden rounded-lg bg-surface p-10 md:p-20">
            <div className="pointer-events-none absolute -bottom-32 -left-20 size-[30rem] rounded-full bg-ember/25 blur-[130px]" />
            <p className="label-mono">Next step</p>
            <h2 className="display-md mt-5 max-w-3xl balance">
              Send one email about your business. We reply within a business day.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="sheen rounded-full bg-ember px-7 py-4 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
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
          </Spotlight>
        </Reveal>
      </section>
    </div>
  );
}
