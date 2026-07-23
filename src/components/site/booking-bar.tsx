import { useEffect, useState } from "react";
import { Calendar, Phone, MapPin } from "lucide-react";
import { BookingDialog } from "@/components/site/booking-dialog";
import { CLINIC } from "@/lib/booking";

export function BookingBar() {
  const slides = [
    {
      type: "phone",
      text: CLINIC.phone,
    },
    {
      type: "address",
      text:
        "Ground Floor, GR Residency, 24th Main Rd, 2nd Sector, ITI Layout, HSR Layout, Bengaluru, Karnataka 560102",
    },
    {
      type: "address",
      text:
        "Kudlu Main Rd, Kudlu, Bengaluru, Karnataka 560068",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 350);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">

          {/* Mobile */}
          <div className="flex h-6 items-center sm:hidden">
            <div
              className={`flex items-center gap-1.5 transition-all duration-300 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
            >
              {slides[current].type === "phone" ? (
                <>
                  <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                  <a href={CLINIC.phoneHref} className="hover:underline">
                    {slides[current].text}
                  </a>
                </>
              ) : (
                <>
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="truncate text-xs">
                    {slides[current].text}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Desktop */}
          <a
            href={CLINIC.phoneHref}
            className="hidden items-center gap-1.5 hover:underline sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {CLINIC.phone}
          </a>

          <div className="hidden h-6 items-center sm:flex">
            <div
              className={`flex items-center gap-1.5 transition-all duration-300 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
            >
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span>
                {slides[(current % 2) + 1].text}
              </span>
            </div>
          </div>

        </div>

        <BookingDialog
          variant="secondary"
          size="sm"
          className="h-8 self-start sm:self-auto"
          label="Book appointment"
        >
          <button
            type="button"
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-background px-3 text-xs font-medium text-foreground shadow-sm transition hover:bg-background/90"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book appointment
          </button>
        </BookingDialog>
      </div>
    </div>
  );
}