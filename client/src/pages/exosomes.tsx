import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/ExosomesDesign.module.css";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { ArrowUpRight } from "lucide-react";
import { initFadeInAnimations } from "@/lib/utils";
// import ExosomesHeader from "@/components/exosomes/exosomes-header";
import GenericHeader from "@/components/generic-header";
// import ExosomesReasons from "@/components/exosomes/exosomes-reasons";
import GenericReasons from "@/components/generic-reasons";
import GenericHowItWorks from "@/components/generic-how-it-works";
import procedureImg from "@assets/fue-hiw2-procedure.webp";
import recoveryAndRegrowthImg from "@assets/fue-howitworks-step3.webp";
import followUpConsultationImg from "@assets/fue-howitworks-step4.webp";
import GenericProcess from "@/components/generic-process";
import HairLineHeroesSlider from "@/components/hairline-heroes-slider/HairlineHeroesSlider";
import ContactSection from "@/components/contact-section";
import GenericFaqSection from "@/components/generic-faq-section";
import { fueFaq } from "@/data/fue-faq";


const headerDetails = [
  "Cellular regeneration.",
  "Promote natural regrowth .",
  "Encourages fuller, healthier hair.",
];

const exosomesProcessDetails = [
  {
    title: "Step 1: Your Hypersomes Consultation",
    subtitle: "",
    description:
      "Start your journey with a personalized consultation. We’ll determine if you’re a good candidate for Hypersomes® — our stem cell–derived therapy designed to awaken dormant follicles and improve hair density.",
    image: "/assets/exosomes/hypersomes-consultation.png",
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "Why Hypersomes?",
        bullets: [
          "Stem cell–derived, regenerative signals",
          "Non-surgical and incision-free",
          "Suitable for men and women at many stages of hair loss",
        ],
      },
      {
        type: "list",
        title: "What We Evaluate:",
        bullets: [
          "Your pattern and extent of thinning",
          "Scalp health and potential for response",
          "Your goals and timeline for results",
        ],
      },
      {
        type: "list",
        title: "After your consult, you’ll know:",
        bullets: [
          "If Hypersomes is right for you",
          "Expected number of sessions",
          "Cost of your treatment plan",
          "What results you can realistically expect",
        ],
      },
    ],
  },
  {
    title: "Step 2: Hypersomes Infusion",
    subtitle: "",
    description:
      "Unlike many providers who inject alone, we combine Microneedling + Hypersomes Infusion in the same session. This dual approach enhances absorption and significantly improves efficacy.",
    image: "/assets/exosomes/dropper2.png",
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "What’s Involved",
        bullets: [
          "Scalp cleansing and preparation",
          "Microneedling to create controlled micro-channels",
          "Immediate infusion of Hypersomes into the scalp",
          "Soothing serum and aftercare instructions",
        ],
      },
      {
        type: "list",
        title: "Why It Matters",
        bullets: [
          "Microneedling primes the scalp for maximum infusion",
          "Hypersomes deliver potent regenerative proteins and growth signals",
          "The combination activates dormant follicles and supports new growth",
          "Entire session completed in 30–45 minutes, with no downtime",
        ],
      },
    ],
  },
  {
    title: "Step 3: Recovery & Regrowth",
    subtitle: "",
    description: "Recovery after Hypersomes Infusion is simple and well tolerated. Most patients experience only mild redness or sensitivity for a day or two, similar to light sun exposure. Because there are no incisions or sutures, downtime is minimal and normal activities can typically be resumed the same day.",
    image: "/assets/exosomes/recovery-and-regrowth2.png",
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "Timeline",
        bullets: [
          "Days 1–3: Mild redness or sensitivity, like a light sunburn",
          "Weeks 4–6: Early improvements in scalp vitality",
          "Weeks 6–12: Visible increases in density and thickness",
          "3–6 Months: Progressive growth, fuller coverage, and stronger strands",
        ],
      },
    ],
  },
  {
    title: "Step 4: Optimization Sessions",
    subtitle: "",
    description:
      "Hypersomes Infusion works best as a series. Follow-up sessions every 3–6 months reinforce regenerative signaling and extend long-term results.",
    image: "/assets/exosomes/optimization2.png",
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "Optimization Schedule",
        bullets: [
          "Schedule follow-up Hypersomes Infusion every 3–6 months to reinforce regenerative signaling and extend results",
        ],
      },
    ],
  },
  {
    title: "Step 5: Ongoing Follicular Maintenance",
    subtitle: "",
    description:
      "Protect your results and keep them thriving with a tailored plan.",
    image: followUpConsultationImg,
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "Maintenance Plan",
        bullets: [
          "Periodic Hypersomes Infusion maintenance",
          "Clinical-grade red light therapy",
          "Nutrition and supplement support",
          "Preventive medical therapies when appropriate",
          "Scalp health coaching for daily care",
        ],
      },
    ],
  },
];



export const ExosomesDesign = (): JSX.Element => {
  // Data for the features section
  const features = [
    {
      id: 1,
      title: "With Exosome Therapy,",
      description:
        "you can harness advanced cellular communication to restore hair follicle vitality and promote natural regrowth.",
      icon: "🧬",
      hasSuper: true,
    },
    {
      id: 2,
      title: "Cellular Activators",
      description:
        "contain powerful growth factors and proteins that activate dormant hair follicle stem cells.",
      icon: "⚡",
      hasSuper: true,
    },
    {
      id: 3,
      title: "Anti-Inflammatory Properties",
      description:
        "reduce scalp inflammation and create an optimal environment for hair follicle health.",
      icon: "🛡️",
      hasSuper: true,
    },
    {
      id: 4,
      title: "Everyone experiences",
      description:
        "enhanced follicle function, improved blood flow, and natural hair cycle renewal.",
      icon: "✨",
      hasSuper: true,
    },
  ];

  // Data for treatment types
  const treatmentTypes = [
    {
      title: "Primary Treatment",
      description:
        "receive targeted exosome therapy with comprehensive cellular regeneration.",
      users: [
        { name: "Dr. Thompson", type: "Specialist", avatar: "👨‍⚕️" },
        { name: "Sarah Chen", type: "Patient", avatar: "👩‍💼" },
      ],
    },
    {
      title: "Maintenance Sessions",
      description:
        "ongoing treatments to sustain cellular activity and optimize results.",
      users: [
        { name: "Michael", type: "6 months", avatar: "👨‍💼" },
        { name: "Jennifer", type: "1 year", avatar: "👩‍🦰" },
        { name: "David", type: "2 years", avatar: "👨‍🦲" },
      ],
    },
  ];

  // Data for details section
  const detailItems = [
    {
      text: "It's easy to begin your exosome therapy journey with a comprehensive consultation — even if you haven't tried cellular regeneration treatments before.",
      phoneContent: "Consultation",
    },
    {
      text: "Exosome therapy delivers concentrated growth factors and signaling molecules directly to hair follicles, creating an optimal environment for natural regeneration.",
      phoneContent: "Treatment Process",
      hasSuper: true,
      superNumber: "1",
    },
    {
      text: "Our specialists can monitor your progress, adjust treatment protocols, and ensure optimal cellular communication for sustained hair follicle health.",
      phoneContent: "Progress Tracking",
      hasSuper: true,
      superNumbers: ["2", "3"],
    },
  ];

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
    document.title = "Exosome Therapy | Dr. NEO Hair Restoration";

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
  const exosomeGradient =
    "bg-gradient-to-r from-[#9940B6] via-[#4D74C8] to-[#8051BC] bg-clip-text text-transparent";
  const exosomeReasons = [
    {
      highlight: "2–3× greater",
      description:
        "hair density versus other traditional approaches.",
    },
    {
      highlight: "Non-surgical treatment",
      description:
        "means no scalpels, no incisions, and no scarring.",
    },
    {
      highlight: "Stem cell–derived particles",
      description:
        "send regenerative signals to awaken follicles.",
    },
    {
      highlight: "Growing in popularity,",
      description:
        "Hypersomes apply cell based technology to hair restoration.",
    },
        {
      highlight: "30–45 minute sessions ",
      description:
        "performed entirely in-office, with no extended downtime.",
    },
  ];
  const exsomeColor = "#9940B6"
  return (
    <div className="flex min-h-screen flex-col">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
        <GenericHeader
        title1={"Follicular"}
        title2={"Hypersomes™"}
        details={headerDetails}
        image={"🧬"}
        useText={true}
        gradientClass={exosomeGradient}
        gradientButtonClass={"custom-button-hypersomes"}
        onReady={handleHeaderReady}
        contentId="exosomes-page-content"
      />{" "}
      {headerReady && (
        <div
          id="exosomes-page-content"
          className="flex flex-1 flex-col content-visible"
        >
          <GenericReasons
            reasons={exosomeReasons}
            gradientClass={exosomeGradient}
          />
          <GenericHowItWorks
          processDetails={exosomesProcessDetails}
          gradientClass={exosomeGradient}
          color={exsomeColor}
          title={"Hair Growth with Next-Generation Biologics"}
          />
          <GenericProcess
              title="PROCESS"
              headline="See our process in action"
              details="Watch step-by-step videos of our FUE hair transplant procedure.
                  Understand exactly what happens during your treatment."
              video="/assets/video/NEO Stinger.webm"
              gradientClass={"bg-[#8051BC]"}
              />
              <HairLineHeroesSlider/>
              <ContactSection />
                       <GenericFaqSection faqs={fueFaq}/>
                       <SiteFooter />
        </div>
      )}
      </main>

    </div>
  );
};

export default ExosomesDesign;
