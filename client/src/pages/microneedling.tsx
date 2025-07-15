import React from "react";
import styles from "../styles/MicroneedlingDesign.module.css";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { ArrowUpRight } from "lucide-react";

export const MicroneedlingDesign = (): JSX.Element => {
  // Data for the features section
  const features = [
    {
      id: 1,
      title: "With Microneedling,",
      description: "you can stimulate natural collagen production and enhance scalp health for optimal hair growth conditions.",
      icon: "🌟",
      hasSuper: true
    },
    {
      id: 2,
      title: "Collagen Stimulation",
      description: "creates micro-channels that activate the body's natural healing response and hair follicle regeneration.",
      icon: "⚡",
      hasSuper: true
    },
    {
      id: 3,
      title: "Enhanced Absorption",
      description: "increases the effectiveness of topical treatments by improving nutrient delivery to hair follicles.",
      icon: "💧",
      hasSuper: true
    },
    {
      id: 4,
      title: "Everyone benefits from",
      description: "improved blood circulation, reduced inflammation, and strengthened hair follicle foundations.",
      icon: "✨",
      hasSuper: true
    }
  ];

  // Data for treatment types
  const treatmentTypes = [
    {
      title: "Standalone Treatment",
      description: "receive professional microneedling sessions with precise depth control and sterilized equipment.",
      users: [
        { name: "Dr. Martinez", type: "Specialist", avatar: "👨‍⚕️" },
        { name: "Lisa Wong", type: "Patient", avatar: "👩‍💼" }
      ]
    },
    {
      title: "Combination Therapy",
      description: "enhanced results when paired with PRP, growth factors, or other regenerative treatments.",
      users: [
        { name: "Robert", type: "3 months", avatar: "👨‍💼" },
        { name: "Maria", type: "6 months", avatar: "👩‍🦰" },
        { name: "James", type: "1 year", avatar: "👨‍🦲" }
      ]
    }
  ];

  // Data for details section
  const detailItems = [
    {
      text: "It's easy to begin your microneedling journey with a thorough scalp assessment — even if you haven't tried regenerative treatments before.",
      phoneContent: "Assessment"
    },
    {
      text: "Microneedling creates controlled micro-injuries that trigger your body's natural healing cascade, promoting collagen synthesis and hair follicle revitalization.",
      phoneContent: "Treatment Process",
      hasSuper: true,
      superNumber: "1"
    },
    {
      text: "Our specialists can customize needle depth, treatment frequency, and combination protocols to maximize your individual response and results.",
      phoneContent: "Customization",
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
                    Precision stimulation.
                    <br />
                    Natural regeneration.
                  </h1>
                </div>

                <div className={styles.subHeading}>
                  <p className={styles.subHeadingText}>
                    <span>With Microneedling,</span>
                    <sup className={styles.superscript}>1</sup>
                    <span> you can</span>
                  </p>
                  <p className={styles.subHeadingText}>
                    stimulate natural collagen production
                  </p>
                  <p className={styles.subHeadingText}>
                    and enhance scalp health for optimal
                    <br />
                    hair growth conditions.
                  </p>
                </div>

                <div className={styles.heroImage}>
                  <div className={styles.heroImagePlaceholder}>
                    <div className={styles.heroImageIcon}>🌟</div>
                    <div className={styles.heroImageTitle}>Precision Stimulation</div>
                    <div className={styles.heroImageSubtitle}>Advanced Microneedling Therapy</div>
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
                The perfect match
                <br />
                for your needs.
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
                Precision is
                <br />
                our priority.
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
                Start your precision
                <br />
                treatment today.
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

export default MicroneedlingDesign;