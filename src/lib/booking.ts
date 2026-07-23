// Google Calendar appointment scheduling URL.
// Replace this with your clinic's real appointment page from Google Calendar
// (Settings > Appointment schedules > Share > "Copy link"). The `?gv=true`
// query is appended automatically for embed contexts.
export const GOOGLE_CALENDAR_APPT_URL =
  (import.meta.env.VITE_GOOGLE_CALENDAR_APPT_URL as string | undefined) ??
  "https://calendar.app.google/w2eLHUNoXmAqfmm6A";

export type ClinicLocation = {
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  hours: readonly { day: string; time: string }[];
  /** Latitude / longitude for the Google Map pin. */
  lat: number;
  lng: number;
};

export const CLINIC_LOCATIONS: readonly ClinicLocation[] = [
  {
    name: "Lakshmi Oral & Dental Care - HSR Layout",
    address:
      "Ground Floor, GR Residency, 24th Main Rd, 2nd Sector, ITI Layout, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 861 855 4143",
    phoneHref: "tel:+918618554143",
    hours: [
      { day: "Monday - Saturday", time: "09:30 AM - 09:30 PM" },
      { day: "Sunday", time: "09:00 AM - 12:00 PM" },
    ],
    lat: 39.7817,
    lng: -89.6501,
  },
  {
    name: "Lakshmi Oral & Dental Care - Kudlu",
    address:
      "Kudlu Main Rd, Kudlu, Bengaluru, Karnataka 560068",
    phone: "+91 861 855 4143",
    phoneHref: "tel:+918618554143",
    hours: [
      { day: "Monday - Saturday", time: "09:30 AM - 09:30 PM" },
      { day: "Sunday", time: "09:00 AM - 12:00 PM" },
    ],
    lat: 39.7995,
    lng: -89.7005,
  },
] as const;

// Backwards-compatible single-clinic export used by header/footer copy.
export const CLINIC = {
  name: "Lakshmi Oral & Dental Care",

  tagline:
    "Expert Root Canal, Cosmetic & Family Dental Care in HSR Layout and Kudlu.",

  phone: "+91 861 855 4143",

  phoneHref: "tel:+918618554143",

  email: "lakshmioralanddentalclinic@gmail.com",

  address: CLINIC_LOCATIONS[0].address,

  hours: CLINIC_LOCATIONS[0].hours,
} as const;