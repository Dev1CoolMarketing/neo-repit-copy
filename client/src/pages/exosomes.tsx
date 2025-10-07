import React, { useEffect } from "react";
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
    description: "",
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
    image: "/assets/exosomes/redlight2.png",
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

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "Exosome Therapy | Dr. NEO Hair Restoration";

    return cleanup;
  }, []);
  const exosomeGradient =
    "bg-gradient-to-r from-[#9940B6] via-[#4D74C8] to-[#8051BC] bg-clip-text text-transparent";
  const exosomeReasons = [
    {
      highlight: "2–3× greater",
      description:
        "hair density versus other traditional approaches. ",
    },
    {
      highlight: "Non-surgical treatment",
      description:
        "means no scalpels, no incisions, and no linear scar.",
    },
    {
      highlight: "Stem cell–derived paricles",
      description:
        "send regenerative signals to awaken dormant follicles.",
    },
    {
      highlight: "Growing in popularity,",
      description:
        "hypersomes apply cell based technology to hair restoration",
    },
        {
      highlight: "30–45 minute sessions ",
      description:
        "performed entirely in-office, with no extended downtime.",
    },
  ];
  const exsomeColor = "#9940B6"
  return (
    <main className="flex min-h-screen flex-col">
      <FueNavBar />
      <GenericHeader
        title1={"Follicular"}
        title2={"Hypersomes™"}
        details={headerDetails}
        image={"🧬"}
        useText={true}
        gradientClass={exosomeGradient}
        gradientButtonClass={"custom-button-hypersomes"}
      />{" "}
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
            video="/assets/video/NEO Stinger.mov"
            gradientClass={"bg-gradient-to-r from-[#9940B6] via-[#4D74C8] to-[#8051BC]"}
            />
      <div className={styles.body}>
        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.container}>
              <div className={styles.heroContent}>
                <div className={styles.headingMargin}>
                  <h1 className={styles.mainHeading}>
                    Cellular regeneration.
                    <br />
                    Scientific precision.
                  </h1>
                </div>

                <div className={styles.subHeading}>
                  <p className={styles.subHeadingText}>
                    <span>With Exosome Therapy,</span>
                    <sup className={styles.superscript}>1</sup>
                    <span> you can</span>
                  </p>
                  <p className={styles.subHeadingText}>
                    harness advanced cellular communication
                  </p>
                  <p className={styles.subHeadingText}>
                    to restore hair follicle vitality and
                    <br />
                    promote natural regrowth.
                  </p>
                </div>

                <div className={styles.heroImage}>
                  <div className={styles.heroImagePlaceholder}>
                    <div className={styles.heroImageIcon}>🧬</div>
                    <div className={styles.heroImageTitle}>
                      Cellular Regeneration
                    </div>
                    <div className={styles.heroImageSubtitle}>
                      Advanced Exosome Therapy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className={styles.featuresSection}>
            <div className={styles.featuresContainer}>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`${styles.featureItem}  fade-in`}
                >
                  {index === 0 && (
                    <div className={styles.featureIcon}>{feature.icon}</div>
                  )}

                  <div>
                    <h2 className={styles.featureTitle}>
                      {feature.title}
                      {feature.hasSuper && feature.id > 1 && (
                        <sup className={styles.superscript}>{feature.id}</sup>
                      )}
                    </h2>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Types Section */}
          <section className={styles.userTypesSection}>
            <div className={styles.container}>
              <h2 className={styles.userTypesTitle}>
                Two treatment
                <br />
                approaches.
                <br />
                The right fit
                <br />
                for everyone.
              </h2>
            </div>

            <div className={styles.userTypesContainer}>
              {treatmentTypes.map((type, index) => (
                <div key={index} className={styles.userTypeCard}>
                  <h3 className={styles.userTypeTitle}>{type.title}</h3>

                  <p className={styles.userTypeDescription}>
                    {type.description}
                  </p>

                  <div className={styles.userAvatars}>
                    {type.users.map((user, userIndex) => (
                      <div key={userIndex} className={styles.avatarContainer}>
                        <div className={styles.avatar}>{user.avatar}</div>
                        <p className={styles.avatarName}>{user.name}</p>
                        <p className={styles.avatarType}>{user.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Details Section */}
          <section className={styles.detailsSection}>
            <div className={styles.detailsContainer}>
              <h2 className={styles.detailsTitle}>
                Specialists are
                <br />
                your partners.
              </h2>

              {detailItems.map((item, index) => (
                <div key={index} className={styles.detailItem}>
                  <p className={styles.detailText}>
                    {item.text}
                    {item.hasSuper && item.superNumber && (
                      <sup className={styles.superscript}>
                        {item.superNumber}
                      </sup>
                    )}
                    {item.hasSuper && item.superNumbers && (
                      <>
                        <sup className={styles.superscript}>
                          {item.superNumbers[0]}
                        </sup>
                        <sup className={styles.superscript}>
                          {item.superNumbers[1]}
                        </sup>
                      </>
                    )}
                  </p>

                  <div className={styles.phoneContainer}>
                    <div className={styles.phoneScreen}>
                      <div className={styles.phoneContent}>
                        <div className={styles.phoneIcon}>📱</div>
                        <div className={styles.phoneTitle}>
                          {item.phoneContent}
                        </div>
                        <div className={styles.phoneBrand}>
                          Dr. Neo Hair Restoration
                        </div>
                      </div>
                    </div>
                    <div className={styles.phoneDevice}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <div className={styles.container}>
              <h2 className={styles.ctaTitle}>
                Start your cellular
                <br />
                renewal journey.
              </h2>

              <div className={styles.ctaButtons}>
                <button className={styles.ctaButton}>
                  Schedule Consultation
                  <ArrowUpRight size={20} />
                </button>
                <button className={styles.ctaButtonSecondary}>
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <SiteFooter />
    </main>
  );
};

export default ExosomesDesign;
