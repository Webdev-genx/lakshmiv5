import { createFileRoute } from "@tanstack/react-router";
import { GallerySection } from "@/components/site/gallery";
import { CLINIC } from "@/lib/booking";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — ${CLINIC.name}` },
      { name: "description", content: "A look inside our clinic — treatment rooms, waiting area, and the team." },
      { property: "og:title", content: `Gallery — ${CLINIC.name}` },
      { property: "og:description", content: "A look inside our clinic — treatment rooms, waiting area, and the team." },
    ],
  }),
  component: () => <GallerySection />,
});
