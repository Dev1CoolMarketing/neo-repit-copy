import React from "react";
import styles from "../styles/FigmaDesign.module.css";

export const FigmaDesign = (): JSX.Element => {
  // Data for the features section
  const features = [
    {
      id: 1,
      title: "With Apple Card Family,",
      description: "you can share Apple Card with a Co‑Owner and add up to four Participants to one easy-to-manage account.",
      icon: "💳",
      hasSuper: true
    },
    {
      id: 2,
      title: "Co‑Owners",
      description: "manage the account together and build credit as equals.",
      icon: "👥",
      hasSuper: true
    },
    {
      id: 3,
      title: "Participants age 18",
      description: "and over can build their own credit history.",
      icon: "👤",
      hasSuper: true
    },
    {
      id: 4,
      title: "Everyone gets up to",
      description: "3% Daily Cash back on their purchases.",
      icon: "💰",
      hasSuper: true
    }
  ];

  // Data for user types
  const userTypes = [
    {
      title: "Co‑Owners",
      description: "share equal benefits and responsibilities for the account.",
      users: [
        { name: "Charlene", type: "Adult", avatar: "👩‍💼" },
        { name: "Elton", type: "Adult", avatar: "👨‍💼" }
      ]
    },
    {
      title: "Participants",
      description: "age 13 and older can spend within limits and get Daily Cash.",
      users: [
        { name: "Gino", type: "Age 15", avatar: "👦" },
        { name: "Yishuang", type: "Adult", avatar: "👩" },
        { name: "Racine", type: "Adult", avatar: "👨" }
      ]
    }
  ];

  // Data for details section
  const detailItems = [
    {
      text: "It's easy to add your partner, spouse, or other adult from your Family Sharing group as a Co‑Owner — even if they don't have their own Apple Card yet.",
      phoneContent: "Setup Screen"
    },
    {
      text: "Apple Card Family allows two partners to merge credit lines to form a single co-owned account, manage that account together, and build credit as equals.",
      phoneContent: "Credit Lines",
      hasSuper: true,
      superNumber: "7"
    },
    {
      text: "Both Co‑Owners can view and manage the account, see each member's activity, route their Daily Cash to individual Savings accounts, and set limits on Participants' spending.",
      phoneContent: "Management",
      hasSuper: true,
      superNumbers: ["8", "9"]
    }
  ];

  return (
    <div className={styles.wLight}>
      <div className={styles.body}>
        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.container}>
              <div className={styles.heroContent}>
                <div className={styles.headingMargin}>
                  <h1 className={styles.mainHeading}>
                    Healthy finances.
                    <br />
                    Family style.
                  </h1>
                </div>

                <div className={styles.subHeading}>
                  <p className={styles.subHeadingText}>
                    <span>With Apple Card Family,</span>
                    <sup className={styles.superscript}>1</sup>
                    <span> you can</span>
                  </p>
                  <p className={styles.subHeadingText}>
                    share Apple Card with a Co‑Owner
                  </p>
                  <p className={styles.subHeadingText}>
                    and add up to four Participants to
                    <br />
                    one easy-to-manage account.
                  </p>
                </div>

                <div className={styles.heroImage}>
                  <div className={styles.heroImagePlaceholder}>
                    🏠 Family
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

          {/* User Types Section */}
          <section className={styles.userTypesSection}>
            <div className={styles.container}>
              <h2 className={styles.userTypesTitle}>
                Two kinds
                <br />
                of users.
                <br />
                The right fit
                <br />
                for everyone.
              </h2>
            </div>

            <div className={styles.userTypesContainer}>
              {userTypes.map((type, index) => (
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
                Co‑Owners are
                <br />
                equal partners.
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
                      📱 {item.phoneContent}
                    </div>
                    <div className={styles.phoneDevice}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};