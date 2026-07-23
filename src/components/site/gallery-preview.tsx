import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import clinic1 from "@/assets/gallery/CLINIC1.jpeg";
import clinic2 from "@/assets/gallery/CLINIC2.jpeg";
import clinic3 from "@/assets/gallery/CLINIC3.jpeg";

const images = [
  {
    src: clinic1,
    alt: "Modern dental treatment room",
  },
  {
    src: clinic2,
    alt: "Dental consultation room",
  },
  {
    src: clinic3,
    alt: "Comfortable patient waiting area",
  },
];

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Our Clinic
        </p>

        <h2 className="mt-3 font-serif text-4xl">
          Experience Our Modern Dental Clinic
        </h2>

        <p className="mt-4 text-muted-foreground">
          From advanced treatment rooms to a comfortable waiting area, every
          part of our clinic is designed to provide a safe, hygienic, and
          stress-free dental experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.alt}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          View Full Gallery
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}