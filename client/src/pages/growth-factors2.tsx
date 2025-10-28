import { useState, useEffect, useCallback } from "react";
// import imgDrNeoLogo from "@/assets/letterN.png";

import styles from "../styles/fue.module.css";
import GenericHeader from "@/components/generic-header";
import FueNavBar from "@/components/fue/fue-nav-bar";
import dermatoscopeImg from "@assets/gf-howitworks-step1.webp";
import prpTubeImg from "@assets/gf-hiw2-prptube.webp";
import microneedlingPenImg from "@assets/gf-hiw3-mnpen.webp";
import recoveryTrackerImg from "@assets/gf-howitworks-step4.png";
import SiteFooter from "@/components/site-footer";
import GenericReasons from "@/components/generic-reasons";
import GenericHowItWorks from "@/components/generic-how-it-works";
import GenericFaqSection from "@/components/generic-faq-section";
import { fueFaq } from "@/data/fue-faq";
import HairLineHeroesSlider from "@/components/hairline-heroes-slider/HairlineHeroesSlider";
import ContactSection from "@/components/contact-section";
import followUpConsultationImg from "@assets/fue-howitworks-step4.webp";
import GenericProcess from "@/components/generic-process";

const headerDetails = [
  "Stimulates natural hair growth.",
  "No pills. No prescriptions.",
  "Composed entirely of natural agents.",
];
const reasons = [
  {
    highlight: "5× Greater Effectiveness ",
    description: "versus other topical treatments alone.",
  },
  {
    highlight: "Long-Term Results,",
    description:
      "naturally occurring proteins stimulate continuous regeneration.",
  },
  {
    highlight: "Noticeably Fuller Coverage ",
    description: "and proven density boost",
  },
  {
    highlight: "Visible thickening",
    description: "in as little as 20 weeks.",
  },

  {
    highlight: "Zero Surgical Risk ",
    description: "with minimal downtime.",
  },
];











// Clean timeline step with proper contrast






const growthFactorDetails = [
  {
    title: "Step 1: Your Growth Factors Consultation",
    subtitle: "Personalized evaluation for a biologic hair-density boost",
    description:
      "Start your journey with a personalized consultation. We’ll determine if Growth Factors — our biologic therapy designed to stimulate follicles and improve hair density — is right for you.",
    image: dermatoscopeImg,
    alt: "medical device shown that you can trust us with consultations",
    moreDetails: [
      {
        type: "list",
        title: "Why Growth Factors?",
        bullets: [
          "Derived from your own blood’s regenerative proteins",
          "Non-surgical and incision-free",
          "Safe and effective for men and women",
        ],
      },
      {
        type: "list",
        title: "What We Evaluate",
        bullets: [
          "Your pattern and extent of thinning",
          "Scalp health and potential for response",
          "Your goals and expectations",
        ],
      },
      {
        type: "list",
        title: "After your consult, you’ll know",
        bullets: [
          "If Growth Factors is right for you",
          "Recommended number of sessions",
          "Cost of your treatment plan",
          "What results you can realistically expect",
        ],
      },
    ],
  },
  {
    title: "Step 2: Growth Factors + Microneedling Treatment",
    subtitle: "Combined in the same session for enhanced delivery",
    description:
      "Unlike providers who apply growth factors alone, we combine Microneedling + Growth Factors in a single visit to enhance penetration and efficacy through micro-channels that deliver regenerative proteins deeper into the scalp.",
    image: prpTubeImg,
    alt: "tube filled with PRP ",
    moreDetails: [
      {
        type: "list",
        title: "What’s Involved",
        bullets: [
          "Scalp cleansing and preparation",
          "Microneedling to create controlled micro-channels",
          "Immediate infusion of concentrated Growth Factors into the scalp",
          "Soothing serum application and clear aftercare instructions",
        ],
      },
      {
        type: "list",
        title: "Why It Matters",
        bullets: [
          "Microneedling primes the scalp for maximum delivery",
          "Growth Factors support follicle signaling and circulation",
          "The combination encourages new growth and strengthens existing strands",
          "Session typically 30–45 minutes with no downtime",
        ],
      },
    ],
  },
  {
    title: "Step 3: Recovery & Regrowth",
    subtitle: "",
    description:
      "Expect a quick recovery and a staged improvement in thickness, coverage, and scalp vitality as follicles respond.",
    image: microneedlingPenImg,
    alt: "hair follicule recovery image",
    moreDetails: [
      {
        type: "list",
        title: "Healing & Growth Timeline",
        bullets: [
          "Days 1–3: Mild redness or sensitivity, similar to a light sunburn",
          "Weeks 4–6: Early improvements in scalp vitality and texture",
          "Weeks 6–12: Noticeable increases in thickness and coverage",
          "3–6 Months: Progressive improvement with stronger, healthier strands",
        ],
      },
    ],
  },
  {
    title: "Step 4: Optimization Sessions",
    subtitle: "Reinforce results every 3–6 months",
    description:
      "Growth Factors Infusion is most effective as a series. Follow-up sessions every 3–6 months reinforce follicular activity and extend long-term results.",
    image: recoveryTrackerImg,
    alt: "optimiation sessions clipboard showing how to optimize your growth",
    moreDetails: [
      {
        type: "list",
        title: "Why Continue",
        bullets: [
          "Sustains follicle signaling and circulation",
          "Builds on prior gains for thicker coverage",
          "Helps preserve results over time",
        ],
      },
      {
        type: "list",
        title: "Typical Cadence",
        bullets: [
          "Series of initial sessions as recommended",
          "Maintenance every 3–6 months based on goals and response",
        ],
      },
    ],
  },
  {
    title: "Step 5: Ongoing Follicular Maintenance",
    subtitle: "Protect and extend your results",
    description:
      "Keep your results thriving with a tailored plan and professional oversight.",
    image: followUpConsultationImg,
    alt: "follow up consulation image",
    moreDetails: [
      {
        type: "list",
        title: "Your Maintenance Plan May Include",
        bullets: [
          "Periodic Growth Factors Infusion maintenance",
          "Clinical-grade red light therapy",
          "Nutrition and supplement support",
          "Preventive medical therapies when appropriate",
          "Scalp health coaching for daily care",
        ],
      },
    ],
  },
];

export default function GrowthFactors() {
  const gfGradientClass =
    "bg-gradient-to-r from-[#5CB270] via-[#89AD5F] to-[#E4A43C] bg-clip-text text-transparent";
  const [headerReady, setHeaderReady] = useState(false);
  const handleHeaderReady = useCallback(() => {
    setHeaderReady(true);
  }, []);
  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      setHeaderReady(true);
    }, 8000);

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
        {/* <GrowthFactorsHeader /> */}
        {/* <HeroSection /> */}
        <GenericHeader
          title1={"Growth"}
          title2={"Factors"}
          details={headerDetails}
          image={"/assets/header/FOLLICULES.webp"}
          gradientClass={
            "bg-gradient-to-r from-[#5CB270] via-[#89AD5F] to-[#E4A43C] bg-clip-text text-transparent"
          }
          gradientButtonClass={"custom-button-growth-factors"}
          contentId="growth-factors-page-content"
          onReady={handleHeaderReady}
        />
        {headerReady && (
          <div
            id="growth-factors-page-content"
            className="flex flex-1 flex-col content-visible"
          >
            <GenericReasons reasons={reasons} gradientClass={gfGradientClass} />
            <GenericHowItWorks
              processDetails={growthFactorDetails}
              title="Growth Powered By Your Biology"
              gradientClass={gfGradientClass}
              color="#046706"
            />
                        <GenericProcess
                          title="PROCESS"
                          headline="See our process in action"
                          details="Watch step-by-step videos of our FUE hair transplant procedure.
                        Understand exactly what happens during your treatment."
                          video="/assets/video/growthfactors.webm"
                          gradientClass={
                            "bg-gradient-to-br from-[#5CB270] via-[#89AD5F] to-[#E4A43C] "
                          }
                        />
            {/* <GFvsHypersomesComparison /> */}
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
