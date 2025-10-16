import React from "react";

export type TermsConfig = {
  orgName: string;
  domain: string;
  lastUpdated: string;
  emails: {
    general: string;
  };
  phone: string;
  addressLines: string[];
};

export const DEFAULT_TERMS_CONFIG: TermsConfig = {
  orgName: "DrNeo",
  domain: "DrNeo.com",
  lastUpdated: "September 12, 2025",
  emails: {
    general: "team@drneo.com",
  },
  phone: "949-570-0800",
  addressLines: ["16460 Bake Pkwy.", "Irvine, CA 92618"],
};

function mergeConfig(partial?: Partial<TermsConfig>): TermsConfig {
  const base = DEFAULT_TERMS_CONFIG;
  return {
    orgName: partial?.orgName ?? base.orgName,
    domain: partial?.domain ?? base.domain,
    lastUpdated: partial?.lastUpdated ?? base.lastUpdated,
    emails: {
      general: partial?.emails?.general ?? base.emails.general,
    },
    phone: partial?.phone ?? base.phone,
    addressLines: partial?.addressLines ?? base.addressLines,
  };
}

export type TermsOfUseProps = {
  config?: Partial<TermsConfig>;
  className?: string;
  heading?: string;
};

export default function TermsOfUse({ config, className = "", heading }: TermsOfUseProps) {
  const cfg = mergeConfig(config);

  const mailtoGeneral = `mailto:${cfg.emails.general}`;
  const telHref = `tel:${cfg.phone.replace(/[^+\d]/g, "")}`;
  const domainHref = cfg.domain.startsWith("http")
    ? cfg.domain
    : `https://${cfg.domain.replace(/^https?:\/\//, "")}`;

  return (
    <main
      id="main-content"
      className={`max-w-3xl mx-auto px-5 md:px-6 lg:px-8 ${className}`}
    >
      <section className="pt-10 md:pt-14 text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight !text-black">
          {heading ?? `Terms of Use — ${cfg.domain}`}
        </h1>
        <p className="text-sm opacity-80">
          <strong>Last updated:</strong> {cfg.lastUpdated}
        </p>
      </section>

      <section className="py-10">
        <ol className="space-y-8 list-decimal pl-5">
          <li>
            <div className="space-y-2">
              <div className="font-semibold">Who we are and what these Terms cover</div>
              <div>
                {cfg.domain} is an informational website for clinics located in the State of California that offer a wide range of medical services including, but not limited to: Medical Aesthetics, Anti-Aging and Longevity Solutions, Fertility Support, Functional Restoration, Hair Restoration, Men’s Health, Non-surgical Pain Relief Procedures, Sexual Wellness, and Youth Preservation. These Terms govern your use of this website and any related online features we control. By using the site you agree to these Terms.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Not medical advice</div>
              <div>
                Content on this site is for general information only. It does not replace professional medical advice, diagnosis, or treatment. In an emergency call 911.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">California-only clinical services and licensure</div>
              <div>
                Clinical care is delivered only by California-licensed clinicians to patients located in California. Any mention of services is subject to clinician evaluation and clinical appropriateness under California law and Medical Board standards. We do not invite care from or to non-California jurisdictions.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">No provider–patient relationship via the website</div>
              <div>
                Reading content, using tools, sending a message, or booking online does not create a provider–patient relationship. That relationship forms only after you complete intake, sign our patient agreements, sign any service-specific consent agreements, and are accepted for care by a licensed clinician.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Telehealth and prescriptions</div>
              <div>
                If our clinicians provide telehealth, you will receive and we will document telehealth informed consent. The standard of care is the same as in-person visits. Prescriptions require an appropriate prior examination and a medical indication. We do not prescribe dangerous drugs or devices based solely on an online questionnaire without meeting the standard of care. Internet prescribing that does not meet California’s requirements is not offered.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Advertising claims</div>
              <div>
                All marketing claims are intended to be truthful and not misleading. We do not guarantee outcomes. Testimonials reflect individual experiences and are not a promise of results.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Corporate Practice of Medicine, supervision, and who may perform services</div>
              <div>
                The services offered by our clinics are medical services. They are performed only by properly licensed professionals with required supervision, and the medical practice is owned and controlled in compliance with California’s Corporate Practice of Medicine doctrine.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Fictitious Name Permit</div>
              <div>
                If our clinicians provide telehealth, you will receive and we will document telehealth informed consent. The standard of care is the same as in-person visits. Prescriptions require an appropriate prior examination and a medical indication. We do not prescribe dangerous drugs or devices based solely on an online questionnaire without meeting the standard of care. Internet prescribing that does not meet California’s requirements is not offered.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Required patient notices on the website</div>
              <div>
                We display legally required notices, including:
                <ul className="list-disc pl-5 space-y-1 mt-2 text-base font-semibold">
                  <li>Education disclosure on our website with clinicians’ names, license types, highest degrees earned, and other relevant information about our healthcare providers.</li>
                  <li>The Notice to Consumers about Medical Board oversight and how to check licenses and file complaints.</li>
                  <li>The Open Payments notice, with a link to the federal database, posted conspicuously on this website.</li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Generative AI disclosures</div>
              <div>
                If we use generative AI to communicate patient clinical information we will provide the notice required by California law and we will give you a clear path to reach a human. A licensed provider reviews or supervises clinical communications.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">No kickbacks, fee-splitting, or improper referrals</div>
              <div>
                We do not pay or accept compensation for patient referrals from other healthcare providers or other organizations. We follow California restrictions on referrals where a financial interest exists. We provide any required ownership or financial interest disclosures.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Content accuracy and changes</div>
              <div>
                We work to keep information current. Medicine evolves and individual situations differ. Services, eligibility, risks, benefits, and alternatives are determined during your clinical evaluation. We may change site content or these Terms at any time. The “Last updated” date shows the effective date of changes.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Submitting Information on This Site</div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium">What we collect.</div>
                  <p>Our public website forms collect only the following information so we can schedule a consultation and respond to your request:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2 text-base font-semibold">
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Preferred clinic location in California</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium">How we use it.</div>
                  <p>We use this information to contact you about scheduling, to respond to your inquiry, and to operate our clinics and website. See our Privacy Policy and Notice at Collection for more detail.</p>
                </div>
                <div>
                  <div className="font-medium">What not to submit.</div>
                  <p>Please do not include medical details, insurance numbers, Social Security numbers, photos, or other sensitive information in general website forms or chat. If you are an existing patient, use the patient portal or call our office for clinical questions.</p>
                </div>
                <div>
                  <div className="font-medium">Security.</div>
                  <p>We use commercially reasonable safeguards designed to protect the information you submit online. No method of transmission or storage is perfectly secure, and we cannot promise absolute security.</p>
                </div>
                <div>
                  <div className="font-medium">Email and text.</div>
                  <p>If you choose to communicate with us by regular email or SMS, there are security and privacy risks. We can offer more secure options. If you still prefer email or SMS after being advised of the risks, we will honor your preference. You can opt out of marketing messages at any time.</p>
                </div>
                <div>
                  <div className="font-medium">How we classify your information.</div>
                  <p>Information you submit through our public forms is treated as personal information under California law and handled under our Privacy Policy and Notice at Collection. If you later become a patient or provide clinical details, we will handle that information as medical information under California’s Confidentiality of Medical Information Act and, if applicable, as Protected Health Information under HIPAA.</p>
                </div>
                <div>
                  <p><strong>Your responsibilities.</strong> You agree that the contact details you provide are accurate and that you have the right to share them.</p>
                </div>
                <div>
                  <p><strong>Indemnity — limited.</strong> To the extent allowed by California law, you agree to indemnify us for claims arising from your violation of these Terms or misuse of the site. This indemnity does not apply to our negligence, willful misconduct, or any violation of law.</p>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Privacy, CPRA, and Notice at Collection</div>
              <div>
                When you submit information on this site you consent to our use of that information as described in our Privacy Policy and our Notice at Collection. California law requires a Notice at Collection that explains what personal information we collect, why we collect it, and whether we sell or share it. We provide links to both documents wherever we collect information online.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Communications and messaging</div>
              <div>
                If you give us your phone number or email address you agree that we may contact you about scheduling, care coordination, promotional offers, or services. You can opt out of marketing emails at any time. Messaging channels and forms are not monitored around the clock. Do not use them for emergencies.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Intellectual property</div>
              <div>
                All content on this site including text, graphics, logos, icons, images, audio, video, and software is owned by us or our licensors. You may not copy, distribute, display, modify, or create derivative works without our written permission.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Prohibited uses</div>
              <div>
                You agree that you will not misrepresent your identity or health status. You will not attempt to obtain prescriptions or medical devices unlawfully. You will not interfere with site operation or security. You will not use the site to harass, abuse, or harm others.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Off-label uses and device disclosures</div>
              <div>
                Some therapies may be prescribed or recommended for off-label use when medically appropriate and with informed consent. We do not represent that any device, biologic, or drug is safe or effective for a use that lacks required regulatory clearance or approval. Your clinician will explain risks, benefits, alternatives, and available evidence during consent.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Financial terms and insurance</div>
              <div>
                Prices and promotions on the site, if listed, can change. Any financing or membership program will be explained in writing before you enroll. Insurance coverage is not guaranteed by this website. You are responsible for charges that your insurer does not cover unless we agree otherwise in writing.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">CURES and controlled substances</div>
              <div>
                If your treatment plan involves controlled substances our clinicians comply with California’s Controlled Substance Utilization Review and Evaluation System requirements. This includes use of the prescription drug monitoring program and reporting where required.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Minors</div>
              <div>
                This site is directed to adults. If you are under 18 you must involve a parent or legal guardian for any request related to care unless California law allows you to consent for your own care for a specific service.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Third-party links and tools</div>
              <div>
                External links are offered for convenience. We are not responsible for third-party websites, apps, widgets, or their privacy practices. Your use of third-party services is at your own risk and is subject to those parties’ terms and policies.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Disclaimers</div>
              <div>
                The website and its content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law we disclaim warranties of accuracy, completeness, merchantability, fitness for a particular purpose, and non-infringement. Clinical outcomes are not guaranteed.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Limitation of liability</div>
              <div>
                To the extent allowed by California law we are not liable for indirect, incidental, special, consequential, or punitive damages that arise from or relate to your use of the site. Nothing in these Terms limits liability that cannot be limited by law.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Dispute resolution and governing law</div>
              <div>
                California law governs these Terms. You and we agree to resolve disputes in courts located in the State of California unless a separate signed agreement says otherwise. You may bring an eligible matter in small-claims court. Nothing in this section prevents you from seeking public injunctive relief where the law allows it.
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Contact us</div>
              <div className="space-y-1">
                <div>
                  <span className="font-medium">Website:</span>{" "}
                  <a className="underline" href={domainHref}>
                    {cfg.domain}
                  </a>
                </div>
                <div>
                  <span className="font-medium">Email:</span>{" "}
                  <a className="underline" href={mailtoGeneral}>
                    {cfg.emails.general}
                  </a>
                </div>
                <div>
                  <span className="font-medium">Mailing address:</span>
                  <div>
                    {cfg.addressLines.map((line, index) => (
                      <div key={line + index}>{line}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium">Phone:</span>{" "}
                  <a className="underline" href={telHref}>
                    {cfg.phone}
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-2">
              <div className="font-semibold">Accessibility (ADA, Unruh, and Section 504 or 1557 if applicable)</div>
              <div className="space-y-3">
                <p>
                  We are committed to providing patients and visitors with full and equal access to our services online and in our clinics. We do not discriminate on the basis of disability. We provide effective communication and reasonable modifications as required by law. This commitment applies to {cfg.domain}, patient portals, telehealth, scheduling, and all communication channels.
                </p>
                <div>
                  <p>
                    <strong>Auxiliary aids and services.</strong> Upon request we provide auxiliary aids and services at no charge. Examples include qualified American Sign Language interpreters, video remote interpreting, real-time captioning, large-print or accessible digital formats, and other aids that are appropriate to the situation. We do not require you to bring your own interpreter and we do not impose surcharges for required aids.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Telephone and relay access.</strong> Our staff will take calls through Telecommunications Relay Service. You can reach us through 711 for California Relay Service. Our phone systems are configured for effective real-time communication.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Telehealth accessibility.</strong> We provide telehealth to patients with disabilities on an equal basis. We take steps such as furnishing interpreters, enabling captions, and using platforms that support accessibility features.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Website and mobile accessibility.</strong> We are working toward Web Content Accessibility Guidelines 2.2 Level AA conformance for public web content and apps. If our clinics receive federal financial assistance from the U.S. Department of Health and Human Services we will bring patient-facing web and mobile content into conformance with WCAG 2.1 Level AA by the compliance dates in the Section 504 rule while continuing to meet effective communication duties.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Privacy notices.</strong> Our privacy notices are written in plain language and are reasonably accessible online. We will provide an alternative format on request.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Service animals.</strong> We welcome service animals as defined by the ADA and applicable California law in all areas open to the public. We may ask only the two permissible questions and we may request removal only if the animal is out of control or not housebroken. We do not charge fees related to service animals.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Request an accommodation.</strong> Email{" "}
                    <a className="underline" href={mailtoGeneral}>
                      {cfg.emails.general}
                    </a>
                    , call{" "}
                    <a className="underline" href={telHref}>
                      {cfg.phone}
                    </a>{" "}
                    or dial 711 for relay, or write to Clinic Accessibility Coordinator, {cfg.addressLines.join(", ")}. Please describe the aid or service you need and the program or content you want to access. We will respond promptly and we will protect your privacy.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Grievances.</strong> If you believe you were denied equal access contact us using the information above. You may also contact the California Civil Rights Department or the U.S. Department of Justice. If we are an HHS-funded provider you may also contact the HHS Office for Civil Rights.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}
