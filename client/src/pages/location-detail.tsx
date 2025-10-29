import { useEffect, useMemo } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { initFadeInAnimations } from "@/lib/utils";
import { locations } from "@/data/locations";
import { MapPin, Phone } from "lucide-react";

export default function LocationDetailPage() {
  const [match, params] = useRoute("/locations/:slug");
  const locationData = useMemo(() => {
    if (!match || !params?.slug) {
      return null;
    }
    return locations.find((location) => location.slug === params.slug) ?? null;
  }, [match, params?.slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanup = initFadeInAnimations();

    if (locationData) {
      document.title = `${locationData.title} Clinic | Dr. NEO`;
    } else {
      document.title = "Location Not Found | Dr. NEO";
    }

    return cleanup;
  }, [locationData]);

  if (!locationData) {
    return (
      <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-slate-900">
        <FueNavBar />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex flex-1 items-center justify-center px-6 py-24"
        >
          <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-[0px_32px_60px_rgba(15,23,42,0.12)]">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Location
            </p>
            <h1 className="mt-3 text-3xl font-semibold">
              We couldn&apos;t find that clinic.
            </h1>
            <p className="mt-4 text-sm text-slate-600">
              The location you&apos;re looking for may have moved or isn&apos;t available yet.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/locations"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-700"
              >
                View all locations
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-50"
              >
                Contact us
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const [accessibilityIntro, accessibilitySubheading, ...accessibilityItems] =
    locationData.accessibility;

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-slate-900">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
        <section className="relative isolate flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-black text-white">
          <motion.img
            src={locationData.image}
            alt={`${locationData.title} clinic exterior`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.05, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <motion.div
            className="relative z-10 mx-auto flex max-w-5xl flex-col gap-4 px-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              Dr. NEO Clinic
            </span>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {locationData.title}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-white/70 md:text-lg">
              Concierge-level hair restoration in {locationData.title}, featuring
              regenerative medicine, private suites, and the latest robotic transplant technology.
            </p>
          </motion.div>
        </section>

        <section className="relative z-10 -mt-20 pb-24 md:-mt-28 md:pb-32">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
            <div className="relative flex w-full flex-col overflow-hidden rounded-[40px] bg-white shadow-[0px_45px_65px_rgba(15,23,42,0.12)]">
              <div className="relative w-full aspect-[4/3] min-h-[260px] overflow-hidden sm:aspect-[3/2] sm:min-h-[340px] lg:aspect-[5/3] lg:min-h-[380px]">
                <motion.img
                  src={locationData.image}
                  alt={`${locationData.title} clinic interior`}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.02 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="flex flex-col gap-6 p-8 sm:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Address
                  </p>
                  <p className="mt-3 text-lg font-medium text-slate-900">
                    {locationData.address}
                  </p>
                </div>
                <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a
                    href={locationData.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-transparent bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-700 sm:w-auto"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="h-4 w-4" />
                    </span>
                    Get Directions
                  </a>
                  <a
                    href={`tel:${locationData.contact.replace(/[^+\d]/g, "")}`}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-50 sm:w-auto"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                      <Phone className="h-4 w-4" />
                    </span>
                    {locationData.contact}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-10 rounded-[40px] bg-white p-8 shadow-[0px_45px_65px_rgba(15,23,42,0.12)] sm:p-10">
              <div className="flex flex-col gap-4 text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Clinic overview
                </p>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Engineered for discreet, high-touch care.
                </h2>
                <p className="text-base leading-relaxed">
                  Each Dr. NEO clinic is deliberately designed to deliver best-in-class hair restoration in an elevated, spa-like setting. Private suites, dedicated surgical techs, and advanced imaging ensure every visit feels personal.
                </p>
              </div>

              <div className="grid gap-6 rounded-3xl bg-slate-50 p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Hours
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {locationData.hours.map((hour, index) => (
                      <li key={`${locationData.slug}-hour-${index}`}>
                        {hour}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {accessibilityIntro}
                  </p>
                  {accessibilitySubheading && (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700">
                      {accessibilitySubheading}
                    </p>
                  )}
                  <ul className="mt-3 grid gap-2 text-left text-sm text-slate-600 sm:grid-cols-2">
                    {accessibilityItems.map((feature, index) => (
                      <li key={`${locationData.slug}-feature-${index}`}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/locations"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-50 sm:w-auto"
                >
                  Back to all locations
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-700 sm:w-auto"
                >
                  Book consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
