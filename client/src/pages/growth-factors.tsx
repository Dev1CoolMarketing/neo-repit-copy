import GrowthFactorsHeader from "@/components/growth-factors/growth-factors-header";
import GrowthFactorsReasons from "@/components/growth-factors/growth-factors-reasons";
import GrowthFactorsHowItWorks from "@/components/growth-factors/growth-factors-how-it-works";
import GrowthFactorsFAQ from "@/components/growth-factors/growth-factors-faq";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SectionHeader from "@/components/SectionHeader";
import FueStyleTreatmentCard from "@/components/FueStyleTreatmentCard";
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
    { 
      title: "Comprehensive Assessment", 
      copy: "Advanced trichoscopy and digital scalp analysis using dermoscopic technology to evaluate follicular miniaturization patterns.",
      features: [
        "Digital follicular mapping",
        "Androgenetic staging",
        "Response prediction"
      ],
      gradient: "from-[#0071e3] to-[#005bb5]"
    },
    { 
      title: "Growth Factor Isolation", 
      copy: "Specialized centrifugation process to concentrate your body's natural growth factors for maximum therapeutic benefit.",
      features: [
        "Platelet-rich plasma extraction",
        "Growth factor concentration",
        "Quality assessment"
      ],
      gradient: "from-[#ba62fc] to-[#9f4df7]"
    },
    { 
      title: "Precision Application", 
      copy: "Targeted microneedling and injection techniques to deliver growth factors directly to hair follicles for optimal results.",
      features: [
        "Microneedling therapy",
        "Follicular injection",
        "Scalp stimulation"
      ],
      gradient: "from-[#A87B23] to-[#FAE151]"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <GrowthFactorsHeader />
        {/* <GrowthFactorsReasons /> */}
        
        {/* HOW IT WORKS START */}
        <section className="py-24 bg-[#f5f5f7]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-center bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent w-full text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] font-normal leading-[1.1] tracking-[-0.04em] pb-6">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                growth factor therapy rundown
              </p>
            </div>
            
            {/* Mobile Layout - Stacked Cards */}
            <div className="block md:hidden space-y-6">
              {steps.map((s, i) => (
                <FueStyleTreatmentCard 
                  key={i} 
                  step={i + 1} 
                  title={s.title}
                  features={s.features}
                  gradient={s.gradient}
                >
                  {s.copy}
                </FueStyleTreatmentCard>
              ))}
            </div>

            {/* Desktop Layout - Grid */}
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <FueStyleTreatmentCard 
                  key={i} 
                  step={i + 1} 
                  title={s.title}
                  features={s.features}
                  gradient={s.gradient}
                >
                  {s.copy}
                </FueStyleTreatmentCard>
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
            <a href="/booking" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3 rounded-full transition">
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