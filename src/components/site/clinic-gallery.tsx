import { useEffect, useState } from "react";

interface ClinicImage {
  image: string;
  caption?: string;
}

interface TreatmentResult {
  title: string;
  description?: string;
  before: string;
  after: string;
}

interface GalleryData {
  clinic: ClinicImage[];
  results: TreatmentResult[];
}

export function ClinicGallery() {
  const [gallery, setGallery] = useState<GalleryData>({
    clinic: [],
    results: [],
  });

  useEffect(() => {
    fetch("/content/gallery.json")
      .then((r) => r.json())
      .then((data) =>
        setGallery({
          clinic: data.clinic ?? [],
          results: data.results ?? [],
        })
      );
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Our Clinic
        </p>

        <h2 className="mt-2 font-serif text-4xl">
          Modern, Clean & Comfortable
        </h2>

        <p className="mt-4 text-muted-foreground">
          Take a look inside Lakshmi Oral & Dental Care and explore our modern
          treatment rooms, advanced equipment and welcoming environment.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.clinic.map((item, index) => (
          <figure
            key={index}
            className="overflow-hidden rounded-2xl border bg-card shadow-sm"
          >
            <img
              src={item.image}
              alt={item.caption ?? ""}
              className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-105"
            />

            {item.caption && (
              <figcaption className="p-4 text-center text-sm text-muted-foreground">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {gallery.results.length > 0 && (
        <>
          <div className="mt-20 mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Treatment Results
            </p>

            <h2 className="mt-2 font-serif text-4xl">
              Before &amp; After
            </h2>

            <p className="mt-4 text-muted-foreground">
              Examples of successful treatments performed at our clinic.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {gallery.results.map((result, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border bg-card shadow-sm"
              >
                <h3 className="border-b p-4 text-center text-xl font-semibold">
                  {result.title}
                </h3>

                <div className="grid grid-cols-2">
                  <div>
                    <img
                      src={result.before}
                      alt={`${result.title} Before`}
                      className="aspect-square w-full object-cover"
                    />
                    <p className="p-3 text-center font-medium">Before</p>
                  </div>

                  <div>
                    <img
                      src={result.after}
                      alt={`${result.title} After`}
                      className="aspect-square w-full object-cover"
                    />
                    <p className="p-3 text-center font-medium">After</p>
                  </div>
                </div>

                {result.description && (
                  <p className="p-4 text-center text-muted-foreground">
                    {result.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}