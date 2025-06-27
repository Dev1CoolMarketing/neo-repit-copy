import GrowthFactorsHeader from "@/components/growth-factors/growth-factors-header";
import GrowthFactorsReasons from "@/components/growth-factors/growth-factors-reasons";
import GrowthFactorsHowItWorks from "@/components/growth-factors/growth-factors-how-it-works";
import GrowthFactorsFAQ from "@/components/growth-factors/growth-factors-faq";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
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

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <GrowthFactorsHeader />
        <GrowthFactorsReasons />
        <GrowthFactorsHowItWorks />
        <GrowthFactorsFAQ />
      </main>
      <SiteFooter />
    </div>
  );
}