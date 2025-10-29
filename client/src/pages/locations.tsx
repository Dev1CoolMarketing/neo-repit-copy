import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { initFadeInAnimations } from "@/lib/utils";
import { locations } from "@/data/locations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heroImage =
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=80";

export default function LocationsPage() {
  const defaultSlug = locations[0]?.slug ?? "";
  const [openSlug, setOpenSlug] = useState(defaultSlug);
  const [featuredSlug, setFeaturedSlug] = useState(defaultSlug);

  const activeLocation = useMemo(() => {
    if (!locations.length) {
      return undefined;
    }
    if (!featuredSlug) {
      return locations[0];
    }
    return locations.find((location) => location.slug === featuredSlug) ?? locations[0];
  }, [featuredSlug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanup = initFadeInAnimations();
    document.title = "Our Clinic Locations | Dr. NEO";
    return cleanup;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-slate-900">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
        <Hero />

        <section className="relative z-10 -mt-16 pb-24 md:pb-32">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8">
            <div className="relative w-full aspect-[16/9] min-h-[280px] overflow-hidden rounded-[40px] border border-white/60 shadow-[0px_45px_65px_rgba(15,23,42,0.12)] sm:min-h-[360px] lg:aspect-[5/2] lg:min-h-[420px]">
              <motion.img
                key={activeLocation?.id}
                src={activeLocation?.image}
                alt={activeLocation ? `${activeLocation.title} clinic exterior` : "Clinic exterior"}
                className="h-full w-full object-cover"
                initial={{ opacity: 0.4, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-3xl bg-black/60 px-6 py-4 text-white backdrop-blur">
                <p className="text-2xl font-semibold">
                  {activeLocation?.title ?? "Locations"}
                </p>
                <Link
                  href={`/locations/${activeLocation?.slug ?? ""}`}
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-white/80"
                >
                  Details
                </Link>
              </div>
            </div>

            <Accordion
              type="single"
              collapsible
              value={openSlug}
              onValueChange={(value) => {
                if (!value) {
                  setOpenSlug("");
                  return;
                }
                setOpenSlug(value);
                setFeaturedSlug(value);
              }}
              className="flex flex-col gap-4"
            >
              {locations.map((location) => {
                return (
                  <AccordionItem
                    key={location.id}
                    value={location.slug}
                    className="border-none"
                  >
                    <AccordionTrigger className="group rounded-full border border-slate-200 bg-white px-6 py-4 text-center text-lg font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 data-[state=open]:bg-slate-900 data-[state=open]:text-white data-[state=open]:shadow-lg">
                      <span className="w-full text-center">{location.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <div className="flex flex-col items-center gap-6 rounded-3xl bg-white px-6 py-6 text-center shadow-[0px_24px_45px_rgba(15,23,42,0.08)]">
                        <div className="flex flex-col gap-3 text-slate-600">
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Address
                          </p>
                          <p className="text-base text-slate-800 text-center">
                            {location.address}
                          </p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <a
                            href={`tel:${location.contact.replace(/[^+\d]/g, "")}`}
                            className="w-max self-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-700"
                          >
                            {location.contact}
                          </a>
                          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                            (By appointment only)
                          </p>
                          <Link
                            href={`/locations/${location.slug}`}
                            className="w-max self-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-50"
                          >
                            Location Details
                          </Link>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[40vh] w-full items-center justify-center overflow-hidden bg-black text-white md:min-h-[70vh]">
      <motion.img
        src={heroImage}
        alt="Clinic exterior"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.35]"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80" />
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center md:gap-8"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
          Our Clinics
        </span>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
Our Locations
        </h1>
        <p className="max-w-2xl text-base text-white/70 md:text-lg">

        </p>
      </motion.div>
    </section>
  );
}
