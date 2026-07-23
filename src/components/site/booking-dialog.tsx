import { useState, type ReactNode } from "react";
import { Calendar } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GOOGLE_CALENDAR_APPT_URL } from "@/lib/booking";

type Props = {
  children?: ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  label?: string;
};

export function BookingDialog({
  children,
  variant = "default",
  size = "default",
  className,
  label = "Book an appointment",
}: Props) {
  const [open, setOpen] = useState(false);
  const embedUrl = `${GOOGLE_CALENDAR_APPT_URL}?gv=true`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ?? (
          <Button variant={variant} size={size} className={className}>
            <Calendar className="mr-2 h-4 w-4" />
            {label}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="font-serif text-2xl">
            Book your visit
          </DialogTitle>
          <DialogDescription>
            Pick a time that works for you. You'll receive a confirmation by email.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <iframe
            title="Book an appointment"
            src={embedUrl}
            className="w-full h-[640px] border-0"
            loading="eager"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
