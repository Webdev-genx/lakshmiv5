import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Smile, Stethoscope, Baby, Zap, ShieldPlus } from "lucide-react";
import { BookingDialog } from "@/components/site/booking-dialog";
import { CLINIC } from "@/lib/booking";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${CLINIC.name}` },
      { name: "description", content: "Preventive, cosmetic, restorative and emergency dental care for every member of the family." },
      { property: "og:title", content: `Services — ${CLINIC.name}` },
      { property: "og:description", content: "Preventive, cosmetic, restorative and emergency dental care for every member of the family." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Stethoscope, title: "Preventive care", body: "Routine cleanings, exams, and X-rays that catch issues early." },
  { icon: Sparkles, title: "Cosmetic dentistry", body: "Whitening, veneers, and bonding — refreshed, natural-looking smiles." },
  { icon: Smile, title: "Invisible aligners", body: "Straighten teeth discreetly with clear aligner treatment plans." },
  { icon: ShieldPlus, title: "Restorative work", body: "Fillings, crowns, bridges, and implants that look and feel like your own." },
  { icon: Baby, title: "Kids' dentistry", body: "Warm, patient care that helps children build lifelong healthy habits." },
  { icon: Zap, title: "Emergency visits", body: "Same-day appointments for chipped teeth, aches, and urgent concerns." },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Services</p>
        <h1 className="mt-2 font-serif text-5xl">Complete dental care, done gently.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Every treatment is explained clearly before we begin — including cost
          — so you can make the call that's right for you.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
            <s.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-serif text-xl">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center">
        <h2 className="font-serif text-3xl">Not sure what you need?</h2>
        <p className="max-w-lg text-muted-foreground">Book a consultation and we'll figure it out together — no pressure, no surprise fees.</p>
        <BookingDialog size="lg" />
      </div>
    </div>
  );
}
