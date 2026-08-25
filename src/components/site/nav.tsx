import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 24);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className={`absolute inset-x-0 top-0 h-px transition-opacity duration-500 ${
          scrolled ? "bg-hairline opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="scroll-line h-px w-full"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <div
        className={`mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-5 transition-all duration-500 md:px-10 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-sm bg-ember text-primary-foreground font-display text-lg font-bold leading-none">
            S
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            Sevren<span className="text-muted-foreground"> Studios</span>
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-1 rounded-full border border-hairline px-2 py-1.5 backdrop-blur-xl transition-colors md:flex ${
            scrolled ? "bg-surface/70" : "bg-surface/30"
          }`}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-surface-raised" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Start a site
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-full border border-hairline bg-surface/70 px-4 py-2 text-sm backdrop-blur-xl md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-5 rounded-lg border border-hairline bg-surface/95 p-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-sm px-4 py-3 text-lg font-display"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
