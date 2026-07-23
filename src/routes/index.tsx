import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, HeartHandshake, Sparkles, Star, ArrowRight, Check } from "lucide-react";
import { BookingDialog } from "@/components/site/booking-dialog";
import { GalleryPreview } from "@/components/site/gallery-preview";
import { ReviewsMarquee } from "@/components/site/reviews-marquee";
import { ClinicLocationsMaps } from "@/components/site/clinic-map";
import { CLINIC, GOOGLE_CALENDAR_APPT_URL } from "@/lib/booking";
import heroImg from "@/assets/hero-doc.jpeg";
import doctorImg from "@/assets/doctor-main-pic.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Lakshmi Oral & Dental Care | Best Dental Clinic in HSR Layout & Kudlu, Bengaluru",
      },
      {
        name: "description",
        content:
          "Lakshmi Oral & Dental Care offers Root Canal Treatment, Cosmetic Dentistry, Dental Implants, Braces, Teeth Whitening, Pediatric Dentistry and complete family dental care in HSR Layout and Kudlu, Bengaluru.",
      },
      {
        property: "og:title",
        content:
          "Lakshmi Oral & Dental Care | Best Dental Clinic in Bengaluru",
      },
      {
        property: "og:description",
        content:
          "Expert dental care by Dr. Atul Kumar. Book appointments online for Root Canal Treatment, Cosmetic Dentistry, Dental Implants, Braces, Teeth Whitening and more.",
      },
    ],
  }),
  component: HomePage,
});

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Experienced Dental Care",
    body: "Modern dental treatments performed with precision, safety and patient comfort as the highest priority.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle & Comfortable Treatment",
    body: "We make every visit stress-free with compassionate care for children, adults and senior patients.",
  },
  {
    icon: Sparkles,
    title: "Two Convenient Locations",
    body: "Visit us at HSR Layout or Kudlu, whichever is more convenient for you and your family.",
  },
];

const services = [
  "Cleanings & check-ups",
  "Cosmetic whitening",
  "Invisible aligners",
  "Fillings & crowns",
  "Emergency care",
  "Kids' dentistry",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(circle_at_top,theme(colors.primary/0.15),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 lg:grid-cols-2 lg:items-center lg:pt-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Trusted Dental Care in Bengaluru
            </span>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl">
              Expert Dental Care for Every Smile
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {CLINIC.tagline}{CLINIC.tagline} Schedule your appointment online in just a few
              clicks or connect with us instantly on WhatsApp.
            </p>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span><span>5.0 ★ Google Rating •  Trusted by Families Across Bengaluru</span></span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden />
            <img
              src={heroImg}
              alt="Dr. Atul Kumar providing dental treatment at Lakshmi Oral & Dental Care"
              width={1600}
              height={1100}
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-border/50"
            />
          </div>
        </div>
      </section>
      {/* DOCTOR */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <img
              src={doctorImg}
              alt="Dr. Atul Kumar"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Meet Your Dentist
            </p>

            <h2 className="mt-3 font-serif text-4xl text-foreground">
              Dr. Atul Kumar
            </h2>

            <p className="mt-2 text-lg font-medium text-primary">
              BDS • Root Canal & Cosmetic Dentistry Specialist
            </p>

            <p className="mt-6 text-muted-foreground leading-8">
              Dr. Atul Kumar is a dedicated BDS dentist specializing in Root Canal
              Treatment and Cosmetic Dentistry. With a patient-first approach and
              modern treatment techniques, he is committed to delivering comfortable,
              ethical and high-quality dental care for children, adults and senior
              patients at both our HSR Layout and Kudlu clinics.

            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Root Canal Specialist</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Cosmetic Dentistry</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Family Dental Care</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Patient-Focused Treatment</span>
              </div>

            </div>

            

          </div>

        </div>
      </section>                
      

      {/* TRUST */}
      <section className="mx-auto max-w-6xl px-4 py-20">

        <div className="mx-auto mb-12 max-w-2xl text-center">

          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Choose Us
          </p>

          <h2 className="mt-3 font-serif text-4xl">
            Trusted Dental Care for Your Entire Family
          </h2>

          <p className="mt-4 text-muted-foreground">
            Combining modern technology, experienced treatment and compassionate
            care to help every patient smile with confidence.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {trustPoints.map((t) => (
            <div key={t.title} className="rounded-2xl border border-border bg-card p-6">
              <t.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-serif text-xl">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS — auto side-scrolling above services */}
      <ReviewsMarquee />

      {/* SERVICES snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Services</p>
            <h2 className="mt-2 font-serif text-4xl">Complete Dental Care for Every Smile </h2>
            <p className="mt-3 text-muted-foreground">
              From routine cleanings to full-mouth restorations, we take pride
              in doing every treatment thoroughly — and gently.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm">
                <Check className="h-4 w-4 text-primary" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GalleryPreview />

      {/* LOCATIONS — separate maps per clinic */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Our locations</p>
          <h2 className="mt-2 font-serif text-4xl"> Visit Our Clinics.</h2>
          <p className="mt-3 text-muted-foreground">
            Find the branch closest to you — each map opens directions in one tap.
          </p>
        </div>
        <div className="mt-8">
          <ClinicLocationsMaps />
        </div>
      </section>


      {/* EMBED — Google Calendar booking, sitting above further content */}
      <section id="book" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Book online
            </p>
            <h2 className="mt-2 font-serif text-4xl">Pick a time that suits you</h2>
            <p className="mt-3 text-muted-foreground">
              Real-time openings straight from our Google Calendar. Instant
              confirmation, easy rescheduling.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background">
            <iframe
              title="Book an Appointment — Lakshmi Oral & Dental Care"
              src={`${GOOGLE_CALENDAR_APPT_URL}?gv=true`}
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
