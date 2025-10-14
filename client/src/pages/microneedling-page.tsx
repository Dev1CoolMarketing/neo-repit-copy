import SiteFooter from "@/components/site-footer";
import { useEffect } from "react";
import { initFadeInAnimations } from "@/lib/utils";
import TestimonialsSectionPremium from "@/components/testimonials-section-premium";
import FueNavBar from "@/components/fue/fue-nav-bar";
import GenericHeader from "@/components/generic-header";
import GenericReasons from "@/components/generic-reasons";
import GenericHowItWorks from "@/components/generic-how-it-works";

import FaqSection from "@/components/faq-section";
import GenericProcess from "@/components/generic-process";
import { microneedlingDetails, microneedlingReasons } from "@/data/microneedling-data";
import HairLineHeroesSlider from "@/components/hairline-heroes-slider/HairlineHeroesSlider";

const headerDetails = [
  "Stimulates follicle regeneration.",
  "Improves circulation and scalp health.",
  "Effective results without high treatment cost.",
];
export default function Microneedling() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "SoCal Advanced Hair Restoration | Dr. NEO";

    return cleanup;
  }, []);
  const gradientClass =
    "bg-gradient-to-r from-[#007AFF] via-[#00C7BE] to-[#007AFF] bg-clip-text text-transparent";
  return (
    <div className="flex min-h-screen flex-col">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
        <GenericHeader
        title1={"Follicular"}
        title2={"Microneedling"}
        title3={""}
        details={headerDetails}
        image={"/assets/microneedling/Untitled design (4).png"}
        gradientClass={
          "bg-gradient-to-r from-[#007AFF] via-[#00C7BE]  to-[#007AFF] bg-clip-text text-transparent"
        }
        gradientButtonClass={"bg-[#007AFF]"}
      />
      <div className="flex justify-center py-8">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight ${gradientClass}`}
        >
          Clinical Highlights
        </h2>
      </div>
      <GenericReasons reasons={microneedlingReasons} gradientClass={gradientClass} />
      {/* <FueHowItWorks /> */}
      <GenericHowItWorks
        processDetails={microneedlingDetails}
        color="#007AFF"
        gradientClass={gradientClass}
        title="Follicular Microneedling, Step by Step"
      />
      <GenericProcess
        title="PROCESS"
        headline="See our process in action"
        details="Watch step-by-step videos of our FUE hair transplant procedure.
            Understand exactly what happens during your treatment."
        video="/assets/video/NEO Stinger.mov"

        gradientClass={
          "bg-gradient-to-br from-[#007AFF] via-[#00C7BE] to-[#007AFF]  "
        }
      />
      <HairLineHeroesSlider />
      <TestimonialsSectionPremium />
      {/* <FueResults /> */}
      <FaqSection />
      <SiteFooter />
      </main>
    </div>
  );
}
