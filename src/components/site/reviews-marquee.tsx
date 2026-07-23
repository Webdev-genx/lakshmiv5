import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";

export function ReviewsMarquee() {
  // Duplicate the list so the CSS translate -50% loop is seamless.
  const items = [...REVIEWS, ...REVIEWS];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Reviews
        </p>
        <h2 className="mt-2 font-serif text-4xl">Loved by local families.</h2>
        <p className="mt-3 text-muted-foreground">
          5.0 average from verified patient reviews.
        </p>
      </div>

      <div
        className="marquee-mask mt-10 overflow-hidden"
        style={{ ["--marquee-duration" as any]: "50s" }}
      >
        <div className="animate-marquee flex w-max gap-6 hover:[animation-play-state:paused]">
          {items.map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:w-[360px]"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
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
      </div>
    </section>
  );
}
