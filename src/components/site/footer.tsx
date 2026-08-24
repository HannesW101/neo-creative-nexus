import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[92rem] px-5 py-16 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono">Sevren Studios</p>
            <p className="mt-4 max-w-md font-display text-3xl leading-tight">
              Built in South Africa, live anywhere.
            </p>
            <a
              href="mailto:contact@sevrenstudios.com"
              className="mt-6 inline-block border-b border-ember pb-1 text-sm text-foreground"
            >
              contact@sevrenstudios.com
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/pricing" className="hover:text-foreground">
              Pricing
            </Link>
            <Link to="/faq" className="hover:text-foreground">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
        <p className="mt-14 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Sevren Studios. Websites, hosting and ongoing care.
        </p>
      </div>
    </footer>
  );
}
