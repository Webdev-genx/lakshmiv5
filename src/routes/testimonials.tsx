import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CLINIC } from "@/lib/booking";
import { BookingDialog } from "@/components/site/booking-dialog";
 import { REVIEWS } from "@/lib/reviews";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: `Patient Reviews — ${CLINIC.name}` },
      {
        name: "description",
        content:
          "Read genuine Google reviews from patients of Lakshmi Oral & Dental Care. Trusted dental care by Dr. Atul Kumar in HSR Layout and Kudlu, Bengaluru.",
      },
      { property: "og:title", content: `Patient Reviews — ${CLINIC.name}` },
      {
        property: "og:description",
        content:
          "Discover why patients trust Lakshmi Oral & Dental Care for Root Canal Treatment, Cosmetic Dentistry and family dental care.",
      },
    ],
  }),
  component: TestimonialsPage,
});


function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Patient Reviews
        </p>

        <h1 className="mt-2 font-serif text-5xl">
          Trusted by Patients Across Bengaluru
        </h1>

        <p className="mt-5 text-lg text-muted-foreground">
          Our patients trust us for compassionate care, painless treatment,
          modern technology, and outstanding results. Here are some of their
          experiences at Lakshmi Oral & Dental Care.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>

            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
              “{r.body}”
            </blockquote>

            <figcaption className="mt-4 text-sm">
              <div className="font-medium">{r.name}</div>
              <div className="text-muted-foreground">{r.years}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-secondary/50 p-8 text-center">
        <h2 className="font-serif text-3xl">
          Experience Quality Dental Care
        </h2>

        <p className="max-w-2xl text-muted-foreground">
          Join hundreds of satisfied patients who trust Dr. Atul Kumar for
          expert, comfortable, and personalized dental care.
        </p>

        <BookingDialog size="lg" label="Book Appointment" />
      </div>
    </div>
  );
}

