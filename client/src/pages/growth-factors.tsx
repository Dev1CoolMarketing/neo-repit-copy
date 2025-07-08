import GrowthFactorsHeader from "@/components/growth-factors/growth-factors-header";
import GrowthFactorsReasons from "@/components/growth-factors/growth-factors-reasons";
import GrowthFactorsHowItWorks from "@/components/growth-factors/growth-factors-how-it-works";
import GrowthFactorsFAQ from "@/components/growth-factors/growth-factors-faq";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SectionHeader from "@/components/SectionHeader";
import TreatmentStepCard from "@/components/TreatmentStepCard";
import { useEffect } from "react";
import { initFadeInAnimations } from "@/lib/utils";

export default function GrowthFactors() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "Growth Factors Hair Restoration | Dr. NEO";

    return cleanup;
  }, []);

  const steps = [
    { title: "Consultation", copy: "Provider checks scalp + plan." },
    { title: "Preparation", copy: "Growth factors isolated via centrifuge." },
    { title: "Application", copy: "Microneedling / injections boost follicles." }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <GrowthFactorsHeader />
        <GrowthFactorsReasons />
        
        {/* HOW IT WORKS START */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader title="How It Works" subtitle="Growth Factor Therapy rundown" />
            <div className="space-y-6">
              {steps.map((s, i) => (
                <TreatmentStepCard key={i} step={i + 1} title={s.title}>
                  {s.copy}
                </TreatmentStepCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <SectionHeader
              title="When Will I See Results?"
              subtitle="Reduced shedding 4–6 wks • fuller density 3–6 mo"
              align="center"
            />
            <a href="/booking" className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
              book your consult
            </a>
          </div>
        </section>
        {/* HOW IT WORKS END */}
        
        <GrowthFactorsFAQ />
      </main>
      <SiteFooter />
    </div>
  );
}