import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { CLINIC } from "@/lib/booking";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-serif text-xl">{CLINIC.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {CLINIC.tagline}
          </p>
        </div>
        <div>
          <h3 className="font-serif text-base">Visit Us</h3>

          <div className="mt-4 space-y-5 text-sm">

            <div>
              <p className="font-medium text-foreground">HSR Layout</p>
              <div className="mt-1 flex gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Ground Floor, GR Residency,<br />
                  24th Main Rd, 2nd Sector,<br />
                  ITI Layout, HSR Layout,<br />
                  Bengaluru 560102
                </span>
              </div>
            </div>

            <div>
              <p className="font-medium text-foreground">Kudlu</p>
              <div className="mt-1 flex gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Kudlu Main Road,<br />
                  Kudlu,<br />
                  Bengaluru 560068
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={CLINIC.phoneHref} className="hover:underline">
                  {CLINIC.phone}
                </a>
              </div>

              <div className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${CLINIC.email}`} className="hover:underline">
                  {CLINIC.email}
                </a>
              </div>
            </div>

          </div>
        </div>
        <div>
          <h3 className="font-serif text-base">Clinic Hours</h3>

          <div className="mt-4 space-y-4 text-sm">

            <div>
              <p className="font-medium text-foreground">Monday – Saturday</p>
              <p className="text-muted-foreground">
                9:30 AM – 9:30 PM
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">Sunday</p>
              <p className="text-muted-foreground">
                9:00 AM – 12:00 PM
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <a href="/admin/" className="hover:text-foreground">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
