import { CLINIC } from "@/lib/booking";
import whatsappLogo from "@/assets/whatsapp-logo.avif";

// WhatsApp brand green
const WA_GREEN = "#25D366";

const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ??
  CLINIC.phoneHref.replace(/[^\d]/g, "");

const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hi ${CLINIC.name}, I'd like to book an appointment.`,
);

const HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function WhatsAppButton() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 block h-14 w-14"
    >
      {/* Blinking pulse rings */}
      <span
        className="pointer-events-none absolute inset-1 rounded-full opacity-60 animate-ping"
        style={{ backgroundColor: WA_GREEN, animationDuration: "1.9s" }}
        aria-hidden
      />
      
      {/* Button */}
      <span
        className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg ring-2 ring-white/70 transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: WA_GREEN }}
      >
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="h-10 w-10 object-contain select-none"
          draggable={false}
        />
      </span>
    </a>
  );
}
