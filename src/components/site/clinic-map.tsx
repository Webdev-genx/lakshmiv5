import { MapPin } from "lucide-react";

const CLINIC_LOCATIONS = [
  {
    name: "Lakshmi Oral & Dental Care – HSR Layout",
    address:
      "Ground Floor, GR Residency, 24th Main Road, 2nd Sector, ITI Layout, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 861 855 4143", // Replace with actual number
    phoneHref: "tel:+918618554143",
    mapEmbed:
      "https://www.google.com/maps?q=Lakshmi+Oral+And+Dental+Care,+Ground+Floor,+GR+Residency,+24th+Main+Rd,+2nd+Sector,+ITI+Layout,+HSR+Layout,+Bengaluru,+Karnataka+560102&output=embed",
    directions:
      "https://www.google.com/maps/dir//Lakshmi+Oral+And+Dental+Care,+Ground+Floor,+GR+Residency,+24th+Main+Rd,+2nd+Sector,+ITI+Layout,+HSR+Layout,+Bengaluru,+Karnataka+560102",
  },
  {
    name: "Lakshmi Oral & Dental Care – Kudlu",
    address:
      "Kudlu Main Road, Kudlu, Bengaluru, Karnataka 560068",
    phone: "+91 861 855 4143", // Replace with actual number
    phoneHref: "tel:+918618554143",
    mapEmbed:
      "https://www.google.com/maps?q=Kudlu+Main+Road,+Kudlu,+Bengaluru,+Karnataka+560068&output=embed",
    directions:
      "https://www.google.com/maps?daddr=Kudlu+Main+Rd,+Kudlu,+Bengaluru,+Karnataka+560068",
  },
];

function LocationMap({
  embedUrl,
  className,
}: {
  embedUrl: string;
  className?: string;
}) {
  return (
    <div
      className={
        "overflow-hidden rounded-2xl border border-border bg-muted " +
        (className ?? "")
      }
    >
      <iframe
        src={embedUrl}
        title="Clinic Location"
        className="h-[300px] w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function ClinicLocationsMaps() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {CLINIC_LOCATIONS.map((clinic) => (
        <article
          key={clinic.name}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <LocationMap
            embedUrl={clinic.mapEmbed}
            className="rounded-none border-0"
          />

          <div className="p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />

              <div>
                <h3 className="font-semibold text-lg">{clinic.name}</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {clinic.address}
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href={clinic.phoneHref}
                    className="text-primary font-medium hover:underline"
                  >
                    {clinic.phone}
                  </a>

                  <a
                    href={clinic.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}