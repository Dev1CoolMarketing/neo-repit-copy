import React from "react";
import styles from "../styles/ExosomesDesign.module.css";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { ArrowUpRight } from "lucide-react";

export const ExosomesDesign = (): JSX.Element => {
  // Data for the features section
  const features = [
    {
      id: 1,
      title: "With Exosome Therapy,",
      description: "you can harness advanced cellular communication to restore hair follicle vitality and promote natural regrowth.",
      icon: "🧬",
      hasSuper: true
    },
    {
      id: 2,
      title: "Cellular Activators",
      description: "contain powerful growth factors and proteins that activate dormant hair follicle stem cells.",
      icon: "⚡",
      hasSuper: true
    },
    {
      id: 3,
      title: "Anti-Inflammatory Properties",
      description: "reduce scalp inflammation and create an optimal environment for hair follicle health.",
      icon: "🛡️",
      hasSuper: true
    },
    {
      id: 4,
      title: "Everyone experiences",
      description: "enhanced follicle function, improved blood flow, and natural hair cycle renewal.",
      icon: "✨",
      hasSuper: true
    }
  ];

  // Data for treatment types
  const treatmentTypes = [
    {
      title: "Primary Treatment",
      description: "receive targeted exosome therapy with comprehensive cellular regeneration.",
      users: [
        { name: "Dr. Thompson", type: "Specialist", avatar: "👨‍⚕️" },
        { name: "Sarah Chen", type: "Patient", avatar: "👩‍💼" }
      ]
    },
    {
      title: "Maintenance Sessions",
      description: "ongoing treatments to sustain cellular activity and optimize results.",
      users: [
        { name: "Michael", type: "6 months", avatar: "👨‍💼" },
        { name: "Jennifer", type: "1 year", avatar: "👩‍🦰" },
        { name: "David", type: "2 years", avatar: "👨‍🦲" }
      ]
    }
  ];

  // Data for details section
  const detailItems = [
    {
      text: "It's easy to begin your exosome therapy journey with a comprehensive consultation — even if you haven't tried cellular regeneration treatments before.",
      phoneContent: "Consultation"
    },
    {
      text: "Exosome therapy delivers concentrated growth factors and signaling molecules directly to hair follicles, creating an optimal environment for natural regeneration.",
      phoneContent: "Treatment Process",
      hasSuper: true,
      superNumber: "1"
    },
    {
      text: "Our specialists can monitor your progress, adjust treatment protocols, and ensure optimal cellular communication for sustained hair follicle health.",
      phoneContent: "Progress Tracking",
      hasSuper: true,
      superNumbers: ["2", "3"]
    }
  ];

  return (
    <div className={styles.wLight}>
      <FueNavBar />
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
                    <div className={styles.heroImageTitle}>Cellular Regeneration</div>
                    <div className={styles.heroImageSubtitle}>Advanced Exosome Therapy</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className={styles.featuresSection}>
            <div className={styles.featuresContainer}>
              {features.map((feature, index) => (
                <div key={feature.id} className={styles.featureItem}>
                  {index === 0 && (
                    <div className={styles.featureIcon}>
                      {feature.icon}
                    </div>
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
                  <h3 className={styles.userTypeTitle}>
                    {type.title}
                  </h3>
                  
                  <p className={styles.userTypeDescription}>
                    {type.description}
                  </p>

                  <div className={styles.userAvatars}>
                    {type.users.map((user, userIndex) => (
                      <div key={userIndex} className={styles.avatarContainer}>
                        <div className={styles.avatar}>
                          {user.avatar}
                        </div>
                        <p className={styles.avatarName}>
                          {user.name}
                        </p>
                        <p className={styles.avatarType}>
                          {user.type}
                        </p>
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
                      <sup className={styles.superscript}>{item.superNumber}</sup>
                    )}
                    {item.hasSuper && item.superNumbers && (
                      <>
                        <sup className={styles.superscript}>{item.superNumbers[0]}</sup>
                        <sup className={styles.superscript}>{item.superNumbers[1]}</sup>
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
    </div>
  );
};

export default ExosomesDesign;