import FueHeader from "@/components/fue/fue-header";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { useEffect } from "react";
import { initFadeInAnimations } from "@/lib/utils";
import FueReasons from "@/components/fue/fue-reasons";
import FueHowItWorks from "@/components/fue/fue-how-it-works";
import FueProcess from "@/components/fue/fue-process";
import FueExpertConsultations from "@/components/fue/fue-expert-consultations";
import FuePersonalized from "@/components/fue/fue-personalized";
import FueAllDevices from "@/components/fue/fue-all-devices";
import FueCompareOurPlans from "@/components/fue/fue-compare-our-plans";
import FueResults from "@/components/fue/fue-results-from-real-patients";
import Frame_81 from "@/components/Frame_81";
import TestimonialsSectionPremium from "@/components/testimonials-section-premium";
import FueNavBar from "@/components/fue/fue-nav-bar";
import GenericHeader from "@/components/generic-header";
import GenericReasons from "@/components/generic-reasons";

const headerDetails = [
  " Advanced FUE technology.",
  "Natural results.",
  "Restored confidence.",
];

    const fueReasons = [
        {
            highlight: "Natural-looking results",
            description: "with aesthetic appeal and more youthful density",
        },
        {
            highlight: "No visible linear scar",
            description:
                "because FUE skips the outdated practice of scalp strip removal",
        },
        {
            highlight: "Quicker recovery",
            description: " with our minimally invasive approach",
        },
        {
            highlight: "Ultra-popular procedure",
            description:
                "because FUE skips the outdated practice of scalp strip removal",
        },
        {
            highlight: "Men, women, hairlines, crowns, eyebrows and beards",
            description: "-we got you covered",
        },
    ];

export default function Fue() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "SoCal Advanced Hair Restoration | Dr. NEO";

    return cleanup;
  }, []);
  const fueGradientClass = "bg-gradient-to-r from-[#B91C1C] via-[#761A20] to-[#111827] bg-clip-text text-transparent"
  return (
    <div className="flex min-h-screen flex-col">
      <FueNavBar />
      <GenericHeader  
              title1={"FUE"}
        title2={"Hair Transplant"}
        details={headerDetails}
        image={"/assets/fue/shinyfollicle.webp"}
        gradientClass={
          "bg-gradient-to-r from-[#B91C1C] via-[#761A20] to-[#111827] bg-clip-text text-transparent"
        }
        gradientButtonClass={"custom-button-fue"}/>
      <GenericReasons reasons={fueReasons} gradientClass={fueGradientClass} />
      <FueHowItWorks />
      <FueProcess />
      <Frame_81 />
      <TestimonialsSectionPremium />
      <FueResults />

      <SiteFooter />
    </div>
  );
}
