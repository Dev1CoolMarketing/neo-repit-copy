import { useEffect } from "react";
import { motion } from "framer-motion";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { initFadeInAnimations } from "@/lib/utils";
import { LocationCard } from "@/components/location-card";
import { locations } from "@/data/locations";

const heroImage =
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=80";

const locationImages: Record<number, string> = {
  1: "/assets/locations/elsegundo.webp",
  2: "/assets/locations/encinitas.webp",
  3: "/assets/locations/irvine.webp",
  4: "/assets/locations/palmdesert.webp",
  5: "/assets/locations/temecula.webp",
};

const accentPalette = ["rgb(98, 80, 70)"];

export default function LocationsPage() {
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

        <section className="relative z-10 -mt-24 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {locations.map((location, index) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  accentColor={accentPalette[index % accentPalette.length]}
                  imageSrc={
                    locationImages[location.id] ?? locationImages[(index % accentPalette.length) + 1]
                  }
                  appointmentNote="(By appointment only)"
                  ctaHref="/#contact"
                  ctaLabel="Contact Us!"
                  styles={{
                    container:
                      "backdrop-blur bg-white/95 border border-white/60 shadow-[0px_45px_65px_rgba(15,23,42,0.12)]",
                    mapLink: "text-base",
                    hours: "text-sm",
                    accessibilityList: "sm:grid-cols-2",
                    cta: "shadow-lg",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-black text-white md:min-h-[70vh]">
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
          California expertise. Concierge care.
        </h1>
        <p className="max-w-2xl text-base text-white/70 md:text-lg">
          Explore our boutique offices engineered for advanced hair restoration.
          Every location delivers the same Dr. NEO® precision, regenerative technology, and discreet patient experience.
        </p>
      </motion.div>
    </section>
  );
}
