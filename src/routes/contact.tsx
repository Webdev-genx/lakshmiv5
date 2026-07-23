import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BookingDialog } from "@/components/site/booking-dialog";
import { ClinicLocationsMaps } from "@/components/site/clinic-map";
import { CLINIC, GOOGLE_CALENDAR_APPT_URL } from "@/lib/booking";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${CLINIC.name}` },
      { name: "description", content: "Call, email, or book online. We reply within one business day." },
      { property: "og:title", content: `Contact — ${CLINIC.name}` },
      { property: "og:description", content: "Call, email, or book online. We reply within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-2 font-serif text-5xl">Let's find you a time.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Prefer to talk first? Call or email us. Ready to book? Pick a slot
          straight from our live Google Calendar below.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <InfoRow icon={Phone} label="Phone">
            <a href={CLINIC.phoneHref} className="hover:underline">{CLINIC.phone}</a>
          </InfoRow>
          <InfoRow icon={Mail} label="Email">
            <a href={`mailto:${CLINIC.email}`} className="hover:underline">{CLINIC.email}</a>
          </InfoRow>
          <InfoRow icon={MapPin} label="Visit">{CLINIC.address}</InfoRow>
          <InfoRow icon={Clock} label="Hours">
            <ul className="space-y-1 text-sm">
              {CLINIC.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </InfoRow>
          <BookingDialog size="lg" className="w-full" />
        </div>

        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Book online — Brightleaf Dental"
              src={`${GOOGLE_CALENDAR_APPT_URL}?gv=true`}
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Our locations</p>
          <h2 className="mt-2 font-serif text-3xl">Two clinics near you.</h2>
          <p className="mt-3 text-muted-foreground">
            Each map shows one branch — tap the pin for directions.
          </p>
        </div>

        <div className="mt-6">
          <ClinicLocationsMaps />
        </div>
      </div>

    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        <Icon className="h-4 w-4" /> {label}
      </div>
      <div className="mt-2 text-foreground/90">{children}</div>
    </div>
  );
}
