import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { CLINIC } from "@/lib/booking";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top Row */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt={CLINIC.name}
              className="h-12 w-12 object-contain"
            />

            <div className="leading-tight">
              <h1 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
                {CLINIC.name}
              </h1>

              <p className="text-xs text-muted-foreground">
                HSR Layout • Kudlu
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "font-medium text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="border-t border-border py-2 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-sm hover:bg-muted"
                activeProps={{ className: "block rounded-md px-2 py-3 font-medium bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}