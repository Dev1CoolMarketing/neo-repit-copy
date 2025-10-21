import React from "react";
import FueNavBar from "./fue/fue-nav-bar";

// Reusable Privacy Policy component for Next.js (App Router or Pages)
// - Tailwind-friendly markup
// - Edit contact details at the CONFIG below or pass overrides via props
// - Defaults tailored for "Dr.Neo" (renamed from Dr.Vigor)

export type PolicyConfig = {
  orgName: string;
  domain: string; // used for display like DrNeo.com
  lastUpdated: string; // e.g., "September 15, 2025"
  emails: {
    general: string; // e.g., team@drneo.com
    privacy?: string; // optional separate privacy address
  };
  phone: string; // e.g., 949-570-0500
  addressLines: string[]; // mailing address lines
};

export const DEFAULT_POLICY_CONFIG: PolicyConfig = {
  orgName: "Dr.Neo",
  domain: "DrNeo.com",
  lastUpdated: "September 15, 2025",
  emails: {
    general: "team@drneo.com",
    privacy: "privacy@drneo.com",
  },
  phone: "949-570-0500",
  addressLines: [
    "Privacy Team, Dr.Neo",
    "16460 Bake Pkwy.",
    "Irvine, CA 92618",
  ],
};

export type PrivacyPolicyProps = {
  config?: Partial<PolicyConfig>;
  className?: string;
  heading?: string; // Optional custom H1 text
};

function mergeConfig(partial?: Partial<PolicyConfig>): PolicyConfig {
  const base = DEFAULT_POLICY_CONFIG;
  return {
    orgName: partial?.orgName ?? base.orgName,
    domain: partial?.domain ?? base.domain,
    lastUpdated: partial?.lastUpdated ?? base.lastUpdated,
    emails: {
      general: partial?.emails?.general ?? base.emails.general,
      privacy: partial?.emails?.privacy ?? base.emails.privacy,
    },
    phone: partial?.phone ?? base.phone,
    addressLines: partial?.addressLines ?? base.addressLines,
  };
}

export default function PrivacyPolicy({ config, className = "", heading }: PrivacyPolicyProps) {
  const cfg = mergeConfig(config);

  const mailtoGeneral = `mailto:${cfg.emails.general}`;
  const mailtoPrivacy = cfg.emails.privacy ? `mailto:${cfg.emails.privacy}` : mailtoGeneral;

  return (
    <main id="main-content" className={`max-w-3xl mx-auto px-5 md:px-6 lg:px-8 ${className}`}>
      <FueNavBar />{/* Header */}

      <section className="pt-10 md:pt-14">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight !text-black">
            {`Privacy Policy — Dr.Neo`}
          </h1>
          <p className="mt-2 text-sm opacity-80">
            <strong>Last updated:</strong> {cfg.lastUpdated}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-10">
        <ol className="space-y-8 list-decimal pl-5">
          <li>
            <div className="space-y-2">
              <div className="font-semibold">Who we are and what this Policy covers</div>
              <div>
                {cfg.domain} is an informational and promotional website for clinics in California that offer Medical Aesthetics, Anti‑Aging and Longevity Solutions, Fertility Support, Functional Restoration, Hair Restoration, Men’s Health, Non‑surgical Pain Relief Procedures, Sexual Wellness, and Youth Preservation. This Policy explains how we collect, use, disclose, and protect personal information on {cfg.domain} and other public‑facing channels we control. It does not replace medical advice. This Policy works together with our Terms of Use and our Accessibility statement. If anything here conflicts with those pages, those pages govern to the extent required by law.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Scope: Website and marketing vs. clinical care (HIPAA/CMIA)</div>
              <div>
                <strong>Website and marketing —</strong> Information you submit on our public website is treated as personal information under California law and handled under this Privacy Policy and our Notice at Collection.
                <br />
                <br />
                <strong>Clinical care —</strong> If you become a patient or provide clinical details, we will handle that information as medical information under California’s CMIA and, where applicable, as PHI under HIPAA. Your care will be governed by our separate HIPAA Notice of Privacy Practices, which we provide at or before the start of care.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Quick Summary and Your Privacy Choices</div>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  We collect only what we need to respond to you, schedule time with you, operate our website, improve our services, and comply with law. <strong>Our public website forms ask only for name, phone, email, and preferred clinic location. Please do not include medical details, insurance numbers, Social Security numbers, photos, or other sensitive data in general website forms or chat.</strong>
                </li>
                <li>
                  We do not sell personal information for money. We may share limited identifiers and internet activity with advertising or analytics providers for cross‑context behavioral advertising as defined by California law. You can opt out any time via our “Your Privacy Choices” link and we honor recognized opt‑out preference signals like Global Privacy Control (GPC).
                </li>
                <li>If you become a patient, your medical information is handled under HIPAA and CMIA, not under this website policy.</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="space-y-3">
              <div className="font-semibold">Notice at Collection (California)</div>
              <div>
                We provide a Notice at Collection at or before the point of collection that tells you what we collect, why we collect it, whether we sell or share it, and how long we keep it or the criteria used to decide retention.
              </div>
              <div className="font-medium">Categories we collect online and why</div>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <div className="font-medium">Identifers and contact details</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>What: Name, email, phone.</li>
                    <li>Why: Respond to inquiries, schedule visits, communicate about services, prevent fraud, maintain records.</li>
                    <li>Source: You.</li>
                    <li>Disclosed to: Service providers that help us manage forms, client care, scheduling, email, and SMS.</li>
                    <li>Sold or shared: Not sold. May be shared for advertising or analytics unless you opt out.</li>
                    <li>Retention: Indefinitely while you are our client, we need the ability to communicate with you, and/or are receiving messages from our business.</li>
                  </ul>
                </li>
                <li>
                  <div className="font-medium">Preferred clinic location</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>What: Preferred clinic location in California.</li>
                    <li>Why: Schedule visits, communicate about services.</li>
                    <li>Source: You.</li>
                    <li>Disclosed to: Service providers that help us manage forms, client care, scheduling, email, and SMS.</li>
                    <li>Sold or shared: Not sold. May be shared as above.</li>
                    <li>Retention: Indefinitely while you are our client, we need the ability to communicate with you, and/or are receiving messages from our business.</li>
                  </ul>
                </li>
                <li>
                  <div className="font-medium">Internet or network activity</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>What: IP address, device and browser type, pages viewed, events, and general location.</li>
                    <li>Why: Site security, debugging, analytics, improving content, advertising and retargeting.</li>
                    <li>Source: Your browser or app, cookies, pixels, and SDKs.</li>
                    <li>Disclosed to: Service providers that help us manage forms, client care, scheduling, email, and SMS.</li>
                    <li>Sold or shared: Not sold. May be shared for cross‑context advertising unless you opt out.</li>
                    <li>Retention: Variable and ranging from more than 2 years for analytics to a shorter amount of time for security logs where feasible.</li>
                  </ul>
                </li>
                <li>
                  <div className="font-medium">Inferences</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>What: Interest segments inferred from site visits.</li>
                    <li>Why: Show relevant content or ads.</li>
                    <li>Source: From analytics or advertising tools.</li>
                    <li>Disclosed to: Advertising and analytics partners.</li>
                    <li>Sold or shared: Not sold. May be shared unless you opt out.</li>
                    <li>Retention: Variable and undetermined.</li>
                  </ul>
                </li>
                <li>
                  <div className="font-medium">Sensitive personal information</div>
                  <div>
                    We do not ask for sensitive personal information on public forms. If you become a patient, HIPAA and CMIA apply, and our clinical Notice of Privacy Practices governs those records. We limit collection to what is reasonably necessary and proportionate for the purposes described. If we ever collect new categories or use data for incompatible purposes, we will provide a new or updated notice.
                  </div>
                </li>
              </ol>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Cookies, analytics, ads, and tracking technologies</div>
              <div>
                We use cookies, pixels, and similar tools for site operations, measurement, and advertising. You can manage settings in our banner and opt out of sale or sharing through Your Privacy Choices. We process recognized opt‑out preference signals such as GPC in a frictionless way. We avoid sending PHI to advertising or analytics vendors and we configure tracking to reduce risk on pages where PHI could be implicated.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Do we sell or share personal information?</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sell: We do not sell personal information for money.</li>
                <li>Share: We may share limited identifiers, internet activity, or inferences with advertising and analytics partners for cross‑context behavioral advertising. You can opt out any time via Your Privacy Choices or by enabling a recognized opt‑out preference signal like GPC in your browser.</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Your California privacy rights</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Know and access the categories and specific pieces of personal information we have collected about you.</li>
                <li>Delete personal information, with certain exceptions.</li>
                <li>Correct inaccurate personal information.</li>
                <li>Opt out of sale or sharing of personal information.</li>
                <li>Limit the use and disclosure of sensitive personal information when used for non‑exempt purposes.</li>
                <li>Be free from discrimination for exercising these rights.</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">How to exercise your rights</div>
              <div>Submit a request to know, delete, or correct, or to opt out of sale or sharing by:</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Using the Your Privacy Choices link in our footer.</li>
                <li>
                  Emailing <a className="underline" href={mailtoGeneral}>{cfg.emails.general}</a>.
                </li>
                <li>
                  Calling {cfg.phone} or dialing 711 for Telecommunications Relay Service.
                </li>
                <li>
                  Writing to: {cfg.addressLines.join(", ")}
                </li>
              </ul>
              <div>
                We will verify your request and respond within the timelines required by law. You may use an authorized agent to make a request on your behalf if they provide proof of authorization and we can verify your identity. We do not use dark patterns to subvert your choices. Contact options and relay access align with our Accessibility commitments.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Children and teens</div>
              <div>
                Our website is directed to and intended for adults. We do not knowingly collect personal information from children under 13. For minors ages 13 to 16, we do not sell or share personal information without an affirmative opt‑in. Parents or guardians must provide consent for children under 13.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Data security</div>
              <div>
                We use commercially reasonable safeguards designed to protect information you submit online. <strong>No method of transmission or storage is perfectly secure. If you choose to communicate by regular email or SMS, you are hereby notified and you acknowledge that there are privacy and security risks because these channels may be unencrypted and subject to interception in transit. To the extent permitted by law, we are not responsible for unauthorized access solely due to transmission over networks we do not control, provided we have not acted negligently or in violation of applicable law.</strong> This acknowledgment does not waive any rights you may have under applicable law, nor our obligation to use reasonable safeguards and to secure information in our possession. We can offer more secure options, and you can opt out of marketing messages at any time.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Data minimization and retention</div>
              <div>
                We collect and keep only what we need for the purposes disclosed, and we retain personal information <strong>only for as long as is reasonably necessary and proportionate</strong> for those purposes, for security, or as required by law. We build long‑term relationships with our <strong>patients and clients</strong>, and <strong>our typical retention aligns with the duration of your relationship with us—often many years—plus a reasonable period afterward</strong> to support scheduling, care coordination, service delivery, recordkeeping, accounting, legal compliance, fraud prevention, and safety. We delete or de‑identify information when retention is no longer needed for these purposes. <strong>We also keep suppression records (for example, “do‑not‑contact” flags) as needed to honor your opt‑out choices.</strong>
                <br />
                <br />
                If you become a patient, <strong>clinical records are retained under California law and professional standards</strong>—for example, <strong>at least seven years after your last date of service</strong>, and <strong>longer where other laws require</strong>, such as certain Medi‑Cal records.
                <br />
                <br />
                For alignment across our site, this section works together with the retention and plain‑language disclosures referenced in our <strong>Terms of Use</strong> and <strong>Accessibility</strong> pages.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Accessibility of this Privacy Policy</div>
              <div>
                We write privacy materials in plain language and make them reasonably accessible online. We will provide this Policy or our notices in an alternative format on request. Please contact <a className="underline" href={mailtoPrivacy}>{cfg.emails.privacy ?? cfg.emails.general}</a> or call {cfg.phone}, or dial 711 for relay. We are working toward WCAG 2.2 Level AA conformance for public web content.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Generative AI and automated decision‑making</div>
              <div>
                If we use generative AI to help draft clinical communications, we will provide any notice required by California law and give you a clear path to reach a human. A licensed provider reviews or supervises clinical communications. We do not use automated decision‑making to deny access to services or to make decisions that produce legal or similarly significant effects about you.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Third‑party tools and links</div>
              <div>
                We use trusted vendors for hosting, security, analytics, scheduling, email, texting, and similar functions. We are not responsible for third‑party websites or apps, including how they handle privacy. Your use of those services is subject to their policies.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Your communications choices</div>
              <div>
                If you give us your phone number or email, you agree that we may contact you about scheduling, care coordination, promotional offers, or services. You can opt out of marketing emails or texts at any time. Messaging channels and forms are not monitored around the clock. Do not use them for emergencies.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Financial incentives</div>
              <div>
                If we offer a membership, referral program, or other financial incentive or price or service difference that involves personal information, we will provide a Notice of Financial Incentive describing the material terms, how to opt in, how to withdraw, and how the value of your data relates to the incentive.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">California “Do Not Track” disclosure and GPC</div>
              <div>
                California law requires us to say how we respond to Do Not Track signals. Industry standards for DNT are not uniform, so we currently do not respond to DNT signals.
                <br />
                <br />
                We do honor recognized opt‑out preference signals like the Global Privacy Control as a valid, frictionless opt‑out of sale or sharing.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">What you should not send through public forms</div>
              <div>
                Please do not upload or include medical details, insurance numbers, Social Security numbers, photos, or other sensitive information in general website forms or chat. If you are an existing patient, use the patient portal or call our office for clinical questions.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Required notices we link from the website</div>
              <div>
                We display legally required notices on this website, including education disclosures for clinicians, the Notice to Consumers about Medical Board oversight, and the Open Payments notice.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Changes to this Privacy Policy</div>
              <div>
                We may update this Policy to reflect changes in our practices or the law. When we make material changes we will update the “Last updated” date/year and post the revised Policy on this page.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Contact us</div>
              <div>
                Website: {cfg.domain}
                <br />
                <br />
                Email: <a className="underline" href={mailtoGeneral}>{cfg.emails.general}</a>
                <br />
                <br />
                Phone: {cfg.phone} or dial 711 for Telecommunications Relay Service
                <br />
                <br />
                Mail: {cfg.addressLines.join(", ")}
              </div>
              <div className="mt-4 text-sm opacity-80">
                This Privacy Policy is provided for general informational purposes and reflects our current practices and legal understanding as of the date above. It is not a warranty or contract. We will continue to meet our legal obligations regardless of how often this page is updated.
              </div>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}
