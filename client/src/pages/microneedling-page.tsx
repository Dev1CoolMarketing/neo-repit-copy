import SiteFooter from "@/components/site-footer";
import { useCallback, useEffect, useState } from "react";
import { initFadeInAnimations } from "@/lib/utils";
import TestimonialsSectionPremium from "@/components/testimonials-section-premium";
import FueNavBar from "@/components/fue/fue-nav-bar";
import GenericHeader from "@/components/generic-header";
import GenericReasons from "@/components/generic-reasons";
import GenericHowItWorks from "@/components/generic-how-it-works";

import FaqSection from "@/components/faq-section";
import GenericProcess from "@/components/generic-process";
import {
  microneedlingDetails,
  microneedlingReasons,
} from "@/data/microneedling-data";
import HairLineHeroesSlider from "@/components/hairline-heroes-slider/HairlineHeroesSlider";
import ContactSection from "@/components/contact-section";
import GenericFaqSection from "@/components/generic-faq-section";
import { fueFaq } from "@/data/fue-faq";

const headerDetails = [
  "Stimulates follicle regeneration.",
  "Improves circulation and scalp health.",
  "Effective results without high treatment cost.",
];
export default function Microneedling() {
  const [headerReady, setHeaderReady] = useState(false);
  const handleHeaderReady = useCallback(() => {
    setHeaderReady(true);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "SoCal Advanced Hair Restoration | Dr. NEO";

    const fallbackTimer = window.setTimeout(() => {
      setHeaderReady(true);
    }, 8000);

    return () => {
      window.clearTimeout(fallbackTimer);
      if (typeof cleanup === "function") {
        cleanup();
      }
    };
  }, []);
  const gradientClass =
    "bg-gradient-to-r from-[#1174DF] via-[#00C7BE] to-[#1174DF] bg-clip-text text-transparent";
  return (
    <div className="flex min-h-screen flex-col">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
        <GenericHeader
          title1={"Follicular"}
          title2={"Microneedling"}
          title3={""}
          details={headerDetails}
          image={"/assets/microneedling/microneedlingpen.png"}
          gradientClass={
            "bg-gradient-to-r from-[#007AFF] via-[#00C7BE]  to-[#007AFF] bg-clip-text text-transparent"
          }
          gradientButtonClass={"bg-[#1174DF]"}
          contentId="microneedling-page-content"
          onReady={handleHeaderReady}
        />

        {headerReady && (
          <div
            id="microneedling-page-content"
            className="flex flex-1 flex-col content-visible"
          >
            <GenericReasons
              reasons={microneedlingReasons}
              gradientClass={gradientClass}
            />
            {/* <FueHowItWorks /> */}
            <GenericHowItWorks
              processDetails={microneedlingDetails}
              color="#007AFF"
              gradientClass={gradientClass}
              title="The Science of Follicule Renewal"
            />
            <GenericProcess
              title="PROCESS"
              headline="See our process in action"
              details="Watch step-by-step videos of our FUE hair transplant procedure.
            Understand exactly what happens during your treatment."
              video="/assets/video/microneedling.mov"
              gradientClass={"bg-[#007AFF] "}
            />
            <HairLineHeroesSlider />
            <ContactSection />
            <GenericFaqSection faqs={fueFaq} />
            <SiteFooter />
          </div>
        )}
      </main>
    </div>
  );
}
