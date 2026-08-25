import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import emberTexture from "@/assets/ember-texture.jpg";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    body: "SSL, backups and uptime are handled. Nothing to patch, no second invoice from someone you never met.",
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
    ours: "Hosting, SSL and backups inside one line item",
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
    body: "Hosting, security and your included updates keep running every month without you chasing us.",
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
      {/* Hero: one idea, room to breathe */}
      <section
        ref={heroRef as never}
        className="relative grain flex min-h-svh items-center overflow-hidden pt-32 pb-24 md:pt-40"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 hairline-grid opacity-50" />
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

        <div className="mx-auto w-full max-w-[92rem] px-5 md:px-10">
          <p className="label-mono rise">Web design and hosting, South Africa</p>

          <h1 className="display-xl rise mt-8 max-w-5xl">
            Your website,
            <br />
            <span className="ember-text">run for you</span> monthly.
          </h1>

          <p className="rise mt-10 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            We build it, host it and keep it current for one flat fee.
          </p>

          <div className="rise mt-12 flex flex-wrap items-center gap-3">
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

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="label-mono opacity-60">Scroll</span>
        </div>
      </section>

      {/* The promise, three lines, one screen */}
      <section className="stage mx-auto max-w-[92rem] px-5 py-24 md:px-10">
        <p className="sd-in label-mono">The short version</p>
        <div className="mt-12 space-y-10 md:space-y-14">
          {[
            ["Live in", "3 to 5 business days"],
            ["Included", "Hosting, SSL, backups, updates"],
            ["Contract", "Month to month, cancel anytime"],
          ].map(([k, v]) => (
            <div key={k} className="sd-in border-t border-hairline pt-6 md:flex md:items-baseline md:gap-16">
              <p className="label-mono md:w-40 md:shrink-0">{k}</p>
              <p className="display-lede mt-4 md:mt-0">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sector marquee */}
      <section
        className="marquee-mask border-y border-hairline py-6"
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

      {/* What you get: sticky title, one card per screen */}
      <section className="mx-auto max-w-[92rem] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="pt-24 lg:sticky lg:top-32 lg:h-fit lg:pt-36">
            <p className="label-mono">What you get</p>
            <h2 className="display-md mt-6 balance">One fee. No add-on invoices.</h2>
            <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
              Most studios quote a build, then bill again for hosting, patches and every small edit
              after launch. All of it sits in the same line item here.
            </p>
            <p className="label-mono mt-10 opacity-60">Six things, keep scrolling</p>
          </div>

          <ol className="pb-12 lg:pb-24">
            {included.map((item) => (
              <li key={item.n} className="stage py-6">
                <div className="sd-in">
                  <span className="font-mono text-xs text-ember">{item.n}</span>
                  <div className="sd-bar mt-4 h-px origin-left bg-ember/60" />
                  <h3 className="display-lede mt-8 max-w-xl balance">{item.title}</h3>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Old way vs ours */}
      <section className="border-y border-hairline bg-surface/30">
        <div className="mx-auto max-w-[92rem] px-5 py-28 md:px-10 md:py-40">
          <div className="sd-in">
            <p className="label-mono">The difference</p>
            <h2 className="display-md mt-6 max-w-3xl balance">
              The usual way, and the way we do it.
            </h2>
          </div>

          <ul className="mt-20 space-y-16 md:space-y-24">
            {comparison.map((row, i) => (
              <li key={row.ours} className="sd-in grid gap-6 border-t border-hairline pt-8 md:grid-cols-2 md:gap-16">
                <p className="flex items-start gap-4 text-muted-foreground line-through decoration-muted-foreground/40">
                  <span className="mt-1 font-mono text-xs no-underline">0{i + 1}</span>
                  {row.old}
                </p>
                <p className="display-lede text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight">
                  {row.ours}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative grain border-b border-hairline">
        <div className="mx-auto grid max-w-[92rem] gap-16 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="pt-24 lg:sticky lg:top-32 lg:h-fit lg:pt-36">
            <p className="label-mono">How it works</p>
            <h2 className="display-md mt-6 balance">From first email to live site.</h2>
            <div className="group relative mt-12 overflow-hidden rounded-lg border border-hairline">
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

          <ol className="pb-16 lg:pb-28">
            {process.map((step) => (
              <li key={step.n} className="stage py-6">
                <div className="sd-slide">
                  <span className="font-display text-6xl text-ember/60 md:text-7xl">{step.n}</span>
                  <h3 className="display-lede mt-8">{step.title}</h3>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto flex min-h-[80svh] max-w-[92rem] items-center px-5 py-28 md:px-10">
        <Spotlight className="sd-in grain hairline-ember w-full overflow-hidden rounded-lg bg-surface p-10 md:p-20">
          <div className="pointer-events-none absolute -bottom-32 -left-20 size-[30rem] rounded-full bg-ember/25 blur-[130px]" />
          <p className="label-mono">Next step</p>
          <h2 className="display-md mt-6 max-w-3xl balance">
            Send one email about your business. We reply within a business day.
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
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
      </section>
    </div>
  );
}
