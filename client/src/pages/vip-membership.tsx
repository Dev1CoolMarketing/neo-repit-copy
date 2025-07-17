import React, { useEffect } from "react";
import styles from "../styles/VIPMembershipDesign.module.css";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { ArrowUpRight, Crown, Star, Shield, Calendar, Phone } from "lucide-react";
import { initFadeInAnimations } from "@/lib/utils";

export const VIPMembershipDesign = (): JSX.Element => {
  // Data for the features section
  const features = [
    {
      id: 1,
      title: "With VIP Membership,",
      description: "you gain exclusive access to premium treatments, priority scheduling, and personalized hair restoration protocols.",
      icon: <Crown className="w-8 h-8" />,
      hasSuper: true
    },
    {
      id: 2,
      title: "Priority Access",
      description: "receive preferential scheduling for all treatments, consultations, and follow-up appointments.",
      icon: <Calendar className="w-8 h-8" />,
      hasSuper: true
    },
    {
      id: 3,
      title: "Concierge Service",
      description: "enjoy dedicated support with personalized treatment coordination and 24/7 medical guidance.",
      icon: <Phone className="w-8 h-8" />,
      hasSuper: true
    },
    {
      id: 4,
      title: "Everyone benefits from",
      description: "exclusive pricing on premium treatments, complimentary consultations, and access to advanced therapies.",
      icon: <Star className="w-8 h-8" />,
      hasSuper: true
    }
  ];

  // Data for membership tiers
  const membershipTiers = [
    {
      title: "Gold Membership",
      description: "comprehensive access to all standard treatments with priority scheduling and exclusive pricing.",
      users: [
        { name: "Dr. Rodriguez", type: "Specialist", avatar: "👨‍⚕️" },
        { name: "Sarah Chen", type: "Member", avatar: "👩‍💼" }
      ]
    },
    {
      title: "Platinum Membership",
      description: "premium tier with concierge service, advanced treatments, and personalized care protocols.",
      users: [
        { name: "Michael", type: "2 years", avatar: "👨‍💼" },
        { name: "Jennifer", type: "3 years", avatar: "👩‍🦰" },
        { name: "David", type: "5 years", avatar: "👨‍🦲" }
      ]
    }
  ];

  // Data for details section
  const detailItems = [
    {
      text: "It's easy to begin your VIP membership with a comprehensive consultation — even if you're new to hair restoration treatments.",
      phoneContent: "Consultation"
    },
    {
      text: "VIP members receive priority access to our most advanced treatments, including exclusive protocols not available to general patients.",
      phoneContent: "Priority Access",
      hasSuper: true,
      superNumber: "1"
    },
    {
      text: "Our concierge team can coordinate your entire treatment journey, from initial consultation to post-procedure care and follow-up.",
      phoneContent: "Concierge Service",
      hasSuper: true,
      superNumber: "2"
    },
    {
      text: "VIP members enjoy significant savings on all treatments, complimentary services, and access to premium facilities.",
      phoneContent: "Exclusive Benefits",
      hasSuper: true,
      superNumbers: ["3", "4"]
    }
  ];

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "VIP Membership | Dr. Neo Hair Restoration";

    return cleanup;
  }, []);

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
                    Exclusive membership.
                    <br />
                    Premium experience.
                  </h1>
                </div>

                <div className={styles.subHeading}>
                  <p className={styles.subHeadingText}>
                    <span>With VIP Membership,</span>
                    <sup className={styles.superscript}>1</sup>
                    <span> you can</span>
                  </p>
                  <p className={styles.subHeadingText}>
                    access premium treatments with priority
                  </p>
                  <p className={styles.subHeadingText}>
                    scheduling and personalized care
                    <br />
                    protocols designed for optimal results.
                  </p>
                </div>

                <div className={styles.heroImagePlaceholder}>
                  <div className={styles.heroImageContent}>
                    <Shield className="w-24 h-24 text-amber-500" />
                    <p className={styles.heroImageText}>VIP Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className={styles.featuresSection}>
            <div className={styles.container}>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <div key={feature.id} className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                      {feature.icon}
                    </div>
                    <div className={styles.featureContent}>
                      <h3 className={styles.featureTitle}>
                        {feature.title}
                        {feature.hasSuper && (
                          <sup className={styles.superscript}>{feature.id}</sup>
                        )}
                      </h3>
                      <p className={styles.featureDescription}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Membership Tiers Section */}
          <section className={styles.userTypesSection}>
            <div className={styles.container}>
              <h2 className={styles.userTypesTitle}>
                Membership designed for
                <br />
                different needs.
              </h2>

              <div className={styles.userTypesGrid}>
                {membershipTiers.map((tier, index) => (
                  <div key={index} className={styles.userTypeCard}>
                    <div className={styles.userTypeContent}>
                      <h3 className={styles.userTypeTitle}>{tier.title}</h3>
                      <p className={styles.userTypeDescription}>
                        {tier.description}
                      </p>
                      
                      <div className={styles.userAvatars}>
                        {tier.users.map((user, userIndex) => (
                          <div key={userIndex} className={styles.userAvatar}>
                            <div className={styles.avatarEmoji}>{user.avatar}</div>
                            <div className={styles.avatarInfo}>
                              <div className={styles.avatarName}>{user.name}</div>
                              <div className={styles.avatarType}>{user.type}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                        <div className={styles.phoneIcon}>👑</div>
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
                Begin your VIP
                <br />
                membership journey.
              </h2>

              <div className={styles.ctaButtons}>
                <button className={styles.ctaButton}>
                  Join VIP Membership
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

export default VIPMembershipDesign;