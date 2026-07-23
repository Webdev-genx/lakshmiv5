import { useEffect, useState } from "react";
import galleryData from "@/content/gallery.json";

type ClinicImage = {
  image: string;
  caption?: string;
};

type ResultItem = {
  title: string;
  before: string;
  after: string;
};

type GalleryData = {
  clinic: ClinicImage[];
  results: ResultItem[];
};

export function GallerySection() {
  const [gallery, setGallery] = useState<GalleryData>({
    clinic: galleryData.clinic ?? [],
    results: galleryData.results ?? [],
  });

  useEffect(() => {
    let cancelled = false;

    fetch("/content/gallery.json", { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : null))
      .then((json: GalleryData | null) => {
        if (!cancelled && json) {
          setGallery({
            clinic: json.clinic ?? [],
            results: json.results ?? [],
          });
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Our Clinic
        </p>

        <h2 className="mt-2 font-serif text-4xl">
          Modern, Clean & Comfortable
        </h2>

        <p className="mt-3 text-muted-foreground">
          Take a look inside Lakshmi Oral & Dental Care and explore our
          treatment rooms, equipment and welcoming environment.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.clinic.map((item, idx) => (
          <figure
            key={`${item.image}-${idx}`}
            className="group overflow-hidden rounded-2xl bg-muted"
          >
            <img
              src={item.image}
              alt={item.caption ?? "Clinic photo"}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            {item.caption && (
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}