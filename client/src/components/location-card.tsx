import { Location } from "@/data/locations";
import { cn } from "@/lib/utils";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

type StyleOverrides = Partial<{
  container: string;
  imageWrapper: string;
  image: string;
  content: string;
  eyebrow: string;
  city: string;
  mapLink: string;
  address: string;
  hours: string;
  accessibilityHeading: string;
  accessibilityList: string;
  phoneLink: string;
  appointmentNote: string;
  cta: string;
}>;

type LocationCardProps = {
  location: Location;
  className?: string;
  accentColor?: string;
  imageSrc?: string;
  imageAlt?: string;
  appointmentNote?: string;
  ctaHref?: string;
  ctaLabel?: string;
  styles?: StyleOverrides;
};

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1529429617124-aee00148117b?auto=format&fit=crop&w=1600&q=80";

export function LocationCard({
  location,
  className,
  accentColor = "rgb(98, 80, 70)",
  imageSrc = PLACEHOLDER_IMAGE,
  imageAlt,
  appointmentNote,
  ctaHref,
  ctaLabel = "Book Consultation",
  styles = {},
}: LocationCardProps) {
  const {
    container = "",
    imageWrapper = "",
    image = "",
    content = "",
    eyebrow = "",
    city = "",
    mapLink = "",
    address = "",
    hours = "",
    accessibilityHeading = "",
    accessibilityList = "",
    phoneLink = "",
    appointmentNote: appointmentNoteClass = "",
    cta = "",
  } = styles;

  const [accessibilityIntro, accessibilitySub, ...accessibilityItems] =
    location.accessibility;

  return (
    <motion.article
      aria-label={`${location.title} Location`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0px_24px_45px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:shadow-[0px_32px_60px_rgba(15,23,42,0.18)]",
        container,
        className,
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={cn(
          "relative aspect-[16/9] w-full overflow-hidden bg-slate-100",
          imageWrapper,
        )}
      >
        <motion.img
          src={imageSrc}
          alt={imageAlt ?? `${location.title} exterior`}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]",
            image,
          )}
          whileHover={{ scale: 1.02 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-6 px-8 pb-8 pt-10 text-center md:px-10",
          content,
        )}
      >
        <div className="flex flex-col gap-3">
          <span
            className={cn(
              "inline-flex items-center justify-center",
              eyebrow,
            )}
          >
            <span
              className="inline-block h-1 w-8 rounded-full"
              style={{ backgroundColor: accentColor }}
              aria-hidden="true"
            />
          </span>
          <h2
            className={cn(
              "text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl",
              city,
            )}
          >
            {location.title}
          </h2>
        </div>

        <a
          href={location.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300 rounded-full px-4 py-2",
            mapLink,
          )}
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100"
            style={{ color: accentColor }}
          >
            <MapPin className="h-4 w-4" />
          </span>
          <span className="underline decoration-dotted underline-offset-4">
            Get Directions
          </span>
        </a>

        <div
          className={cn(
            "text-sm leading-relaxed text-slate-600",
            address,
          )}
        >
          <p>{location.address}</p>
        </div>

        <div
          className={cn(
            "text-sm text-slate-600",
            hours,
          )}
        >
          <p className="mb-1 font-semibold uppercase tracking-[0.2em] text-slate-500">
            Hours
          </p>
          <ul className="space-y-1">
            {location.hours.map((hour, index) => (
              <li key={`${location.id}-hours-${index}`}>{hour}</li>
            ))}
          </ul>
        </div>

        {appointmentNote && (
          <p
            className={cn(
              "text-center text-sm italic text-slate-500",
              appointmentNoteClass,
            )}
          >
            {appointmentNote}
          </p>
        )}

        <div className="grid gap-4 rounded-3xl bg-slate-50 p-6">
          <div className="text-center">
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500",
                accessibilityHeading,
              )}
            >
              {accessibilityIntro}
            </p>
            <p
              className={cn(
                "text-sm font-semibold uppercase tracking-[0.3em] text-slate-700",
                accessibilityHeading,
              )}
            >
              {accessibilitySub}
            </p>
          </div>
          <ul
            className={cn(
              "grid gap-2 text-sm text-slate-600 text-left",
              accessibilityList,
            )}
          >
            {accessibilityItems.map((feature, index) => (
              <li key={`${location.id}-feature-${index}`}>
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                    aria-hidden="true"
                  />
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <a
            href={`tel:${location.contact.replace(/[^+\d]/g, "")}`}
            className={cn(
              "inline-flex items-center justify-center gap-3 text-sm font-medium text-slate-900 transition-colors duration-300 hover:text-slate-600",
              phoneLink,
            )}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100"
              style={{ color: accentColor }}
            >
              <Phone className="h-4 w-4" />
            </span>
            <span>{location.contact}</span>
          </a>

          {ctaHref && (
            <motion.a
              href={ctaHref}
              className={cn(
                "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-transform duration-300 hover:scale-[1.02]",
                cta,
              )}
              style={{ background: accentColor }}
              aria-label="Contact Us at our clinics"
              whileTap={{ scale: 0.97 }}
            >
              {ctaLabel}
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
