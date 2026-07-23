import { createFileRoute } from "@tanstack/react-router";
import { Award, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { BookingDialog } from "@/components/site/booking-dialog";
import { CLINIC } from "@/lib/booking";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${CLINIC.name}` },
      { name: "description", content: "Meet the team behind Brightleaf Dental — a family-first clinic focused on gentle, honest dentistry." },
      { property: "og:title", content: `About — ${CLINIC.name}` },
      { property: "og:description", content: "Meet the team behind Brightleaf Dental — a family-first clinic focused on gentle, honest dentistry." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: HeartHandshake, title: "People first", body: "We treat every patient like a neighbor — because most of them are." },
  { icon: ShieldCheck, title: "Honest care", body: "Only what you need, explained plainly, priced up front." },
  { icon: Award, title: "Continually learning", body: "Our team trains yearly on the latest techniques and materials." },
  { icon: Users, title: "Whole-family focus", body: "From first teeth to full dentures, we've got every stage covered." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">About us</p>
      <h1 className="mt-2 font-serif text-5xl">A neighborhood clinic built on trust.</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Brightleaf Dental was founded on a simple idea: dentistry should feel
        calm, clear, and personal. For over a decade, our team has cared for
        families across Springfield — and we've stayed small on purpose, so
        every patient gets our full attention.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
            <v.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-serif text-xl">{v.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-secondary/50 p-8 text-center">
        <h2 className="font-serif text-3xl">Ready to meet the team?</h2>
        <p className="mt-2 text-muted-foreground">Your first visit includes a full exam, gentle cleaning, and a plan we build together.</p>
        <div className="mt-6 flex justify-center">
          <BookingDialog size="lg" />
        </div>
      </div>
    </div>
  );
}
