import { useEffect } from "react";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import FaqSection from "@/components/faq-section";
import { initFadeInAnimations } from "@/lib/utils";

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanup = initFadeInAnimations();
    document.title = "Frequently Asked Questions | Dr. NEO";
    return cleanup;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-slate-900">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
        <section className="relative isolate overflow-hidden bg-neutral-900 py-24 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black opacity-90" />
            <div className="absolute inset-y-0 right-[-20%] w-[60%] rotate-12 rounded-[9999px] bg-gradient-to-br from-[#FAE151]/30 via-transparent to-transparent blur-3xl" />
            <div className="absolute inset-y-0 left-[-25%] w-[50%] rounded-[9999px] bg-gradient-to-tr from-[#625046]/40 via-transparent to-transparent blur-3xl" />
          </div>
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Support
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="max-w-3xl text-base text-white/70 md:text-lg">
              Explore answers to the most common questions about Dr. NEO’s hair restoration services, procedures, and patient experience. Can’t find what you need? Our concierge team is ready to help.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <FaqSection />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
