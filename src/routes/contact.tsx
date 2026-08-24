import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Sevren Studios" },
      {
        name: "description",
        content:
          "Tell us about your business and what you need from a website. We reply within one business day, usually faster.",
      },
      { property: "og:title", content: "Contact | Sevren Studios" },
      {
        property: "og:description",
        content: "One email to start. We reply within one business day.",
      },
    ],
  }),
  component: Contact,
});

const needs = ["New website", "Replace an old site", "Hosting and care only", "SEO help", "Not sure yet"];

function Contact() {
  const [need, setNeed] = useState(needs[0]);
  const [form, setForm] = useState({ name: "", business: "", email: "", detail: "" });

  const mailto = `mailto:contact@sevrenstudios.com?subject=${encodeURIComponent(
    `${need} enquiry from ${form.business || form.name || "a business"}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nNeed: ${need}\n\n${form.detail}`,
  )}`;

  const field =
    "w-full rounded-sm border border-hairline bg-background px-4 py-3.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ember";

  return (
    <div className="mx-auto max-w-[92rem] px-5 pt-32 pb-24 md:px-10 md:pt-44 md:pb-36">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="label-mono">Get in touch</p>
          <h1 className="display-md mt-5">Tell us about your business.</h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            A few lines is plenty. What you do, where you work and what the site needs to bring in.
            We reply within one business day, usually faster.
          </p>
          <div className="mt-12 space-y-px overflow-hidden rounded-lg border border-hairline bg-hairline">
            {[
              ["Email", "contact@sevrenstudios.com"],
              ["Based in", "South Africa, working worldwide"],
              ["Build time", "3 to 5 business days"],
            ].map(([k, v]) => (
              <div key={k} className="bg-surface p-6">
                <p className="label-mono">{k}</p>
                <p className="mt-2 font-display text-xl">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          className="grain rounded-lg border border-hairline bg-surface p-8 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="label-mono">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={`mt-3 ${field}`}
              />
            </label>
            <label className="block">
              <span className="label-mono">Business</span>
              <input
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                placeholder="Business name"
                className={`mt-3 ${field}`}
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="label-mono">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@business.co.za"
              className={`mt-3 ${field}`}
            />
          </label>

          <fieldset className="mt-8">
            <legend className="label-mono">What do you need</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {needs.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setNeed(n)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    n === need
                      ? "border-ember bg-ember text-primary-foreground"
                      : "border-hairline text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="mt-8 block">
            <span className="label-mono">Detail</span>
            <textarea
              rows={5}
              value={form.detail}
              onChange={(e) => setForm({ ...form, detail: e.target.value })}
              placeholder="What you do, where you work, anything the site has to handle."
              className={`mt-3 ${field}`}
            />
          </label>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ember px-7 py-4 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Send message <span>&rarr;</span>
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            This opens your mail app with the details filled in.
          </p>
        </form>
      </div>
    </div>
  );
}
