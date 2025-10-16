import React from "react";

export type AccessibilityConfig = {
  orgName: string;
  domain: string;
  lastUpdated: string;
  emails: {
    accessibility: string;
  };
  phone: string;
  mailRecipient: string;
  addressLines: string[];
};

export const DEFAULT_ACCESSIBILITY_CONFIG: AccessibilityConfig = {
  orgName: "Dr.Neo",
  domain: "DrNeo.com",
  lastUpdated: "2025",
  emails: {
    accessibility: "team@drneo.com",
  },
  phone: "949-570-0800",
  mailRecipient: "Accessibility Coordinator, DrVigor",
  addressLines: ["16460 Bake Pkwy.", "Irvine, CA 92618"],
};

function mergeConfig(partial?: Partial<AccessibilityConfig>): AccessibilityConfig {
  const base = DEFAULT_ACCESSIBILITY_CONFIG;
  return {
    orgName: partial?.orgName ?? base.orgName,
    domain: partial?.domain ?? base.domain,
    lastUpdated: partial?.lastUpdated ?? base.lastUpdated,
    emails: {
      accessibility: partial?.emails?.accessibility ?? base.emails.accessibility,
    },
    phone: partial?.phone ?? base.phone,
    mailRecipient: partial?.mailRecipient ?? base.mailRecipient,
    addressLines: partial?.addressLines ?? base.addressLines,
  };
}

export type AccessibilityStatementProps = {
  config?: Partial<AccessibilityConfig>;
  className?: string;
  heading?: string;
};

export default function AccessibilityStatement({
  config,
  className = "",
  heading,
}: AccessibilityStatementProps) {
  const cfg = mergeConfig(config);

  const mailtoAccessibility = `mailto:${cfg.emails.accessibility}`;
  const telHref = `tel:${cfg.phone.replace(/[^+\d]/g, "")}`;

  return (
    <main
      id="main-content"
      className={`max-w-3xl mx-auto px-5 md:px-6 lg:px-8 ${className}`}
    >
      <section className="pt-10 md:pt-14 text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight !text-black">
          {heading ?? `Accessibility at ${cfg.domain}`}
        </h1>
        <p className="text-sm opacity-80">
          <strong>Last updated:</strong> {cfg.lastUpdated}
        </p>
      </section>

      <section className="py-10 space-y-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Accessibility Statement</h2>
          <p>
            {cfg.domain} is committed to digital accessibility so every patient and visitor can learn about, schedule, and receive our Medical Aesthetics, Anti‑Aging and Longevity Solutions, Fertility Support, Functional Restoration, Hair Restoration, Men’s Health, Non-surgical Pain Relief Procedures, Sexual Wellness, and Youth Preservation services in California on an equal basis. We do not discriminate on the basis of disability. We provide effective communication and reasonable modifications as required by law.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Our Accessibility Standard and Scope</h2>
          <ul className="list-disc pl-5 space-y-2 text-base font-semibold">
            <li>
              <strong>Primary web standard.</strong> We design, build, and test to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA across our public website and patient-facing experiences to support users with visual, hearing, mobility, and cognitive disabilities.
            </li>
            <li>
              <strong>Effective communication duty under the ADA.</strong> As a health care provider open to the public, we furnish appropriate auxiliary aids and services where needed to ensure effective communication with people with disabilities. Examples include qualified ASL interpreters, video remote interpreting, real-time captions, accessible documents, and relay services.
            </li>
            <li>
              <strong>Service animals and in-clinic access.</strong> Our clinics permit service animals in all public areas and provide reasonable modifications to policies and procedures as required by ADA Title III.
            </li>
            <li>
              <strong>California civil rights protections.</strong> In California, access obligations are reinforced by the Unruh Civil Rights Act and the California Disabled Persons Act, which prohibit disability discrimination in places of public accommodation, including medical facilities.
            </li>
            <li>
              <strong>Privacy notices in accessible formats.</strong> California’s CPRA regulations require online notices and policies to be reasonably accessible to consumers with disabilities. We follow these requirements for our privacy materials.
            </li>
            <li>
              <strong>If federal funds are involved.</strong> Where a clinic or program receives U.S. Department of Health and Human Services funding, the updated Section 504 rule requires WCAG 2.1 Level A and AA conformance for public-facing websites and mobile apps on set timelines. We will meet those obligations while continuing to provide effective communication during remediation.
            </li>
            <li>
              <strong>Telehealth access.</strong> We make telehealth accessible and ensure platforms and workflows are usable by people with disabilities and for callers using relay services.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">How to Get Help or Report a Barrier</h2>
          <p>
            If you encounter a barrier or need an accommodation, please contact us and include the page or service, the assistive technology you use, and your preferred format. We aim to acknowledge accessibility reports within five business days and to resolve or provide an equally effective alternative as quickly as possible.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
            <li>
              <strong>Email:</strong>{" "}
              <a className="underline" href={mailtoAccessibility}>
                {cfg.emails.accessibility}
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a className="underline" href={telHref}>
                {cfg.phone}
              </a>{" "}
              or dial 711 for Telecommunications Relay Service.
            </li>
            <li>
              <strong>Mail:</strong> {cfg.mailRecipient}
              <div>
                {cfg.addressLines.map((line, index) => (
                  <div key={line + index}>{line}</div>
                ))}
              </div>
            </li>
          </ul>
          <p>In a medical emergency, call 911 or visit the nearest emergency department.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Active Measures We Take</h2>
          <p>
            We maintain an accessibility program that is practical to run on a modern website and strong enough to withstand legal scrutiny. The measures below are either already in place or scheduled as part of our continuous improvement program.
          </p>
          <ol className="list-decimal pl-5 space-y-6">
            <li>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Governance and Accountability</div>
                <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
                  <li>Assign an Accessibility Coordinator to oversee policy, training, vendor management, and issue resolution.</li>
                  <li>Maintain an accessibility roadmap and a documented bug-triage process with severity levels, remediation targets, and verification steps.</li>
                  <li>Require accessibility commitments from vendors for plugins, widgets, scheduling tools, and telehealth platforms, and test critical user flows in-house.</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Design and Code Standards</div>
                <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
                  <li>Use semantic HTML, landmark regions, and proper heading order. Apply WAI-ARIA only where needed.</li>
                  <li>Ensure keyboard access for all content and controls with visible focus indicators. Avoid keyboard traps.</li>
                  <li>Meet color contrast at 4.5:1 for normal text and 3:1 for large text, and target higher contrast where feasible.</li>
                  <li>Size and space interactive targets to meet WCAG 2.2 Target Size (Minimum).</li>
                  <li>Avoid conveying information by color alone and provide text or pattern indicators as needed.</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Images, Media, and Documents</div>
                <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
                  <li>Provide alt text for meaningful images and avoid text in images where possible.</li>
                  <li>Offer captions for prerecorded videos and live captions for live streams and webinars. Provide transcripts for audio-only media.</li>
                  <li>When older PDFs are posted, include a concise HTML summary and provide an accessible version on request if full remediation is not immediately feasible.</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Forms, Scheduling, and Feedback</div>
                <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
                  <li>Use explicit labels, programmatic error identification, and clear instructions. Forms are operable with a keyboard alone and support common screen readers.</li>
                  <li>Do not impose arbitrary time limits to complete forms. If a time limit is unavoidable, provide extensions or disable the timeout.</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Dynamic Content and Interactions</div>
                <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
                  <li>Keep dialogs, pop-ups, and banners focus-managed, labeled, and dismissible from the keyboard. Avoid disruptive auto-show modals that block navigation.</li>
                  <li>Ensure carousels and sliders are pauseable, keyboard accessible, and announced to assistive technologies.</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Telehealth and Communications</div>
                <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
                  <li>Provide auxiliary aids at no charge when needed for telehealth, including interpreters and real-time captions. Platforms must support screen readers, keyboard navigation, and scalable text.</li>
                  <li>Support TRS callers through 711 on all published phone lines.</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Content and Policy Pages</div>
                <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
                  <li>Write in plain language with consistent navigation and headings.</li>
                  <li>Publish privacy and consumer notices in an accessible format and provide an alternative format on request.</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Testing and Continuous Improvement</div>
                <ul className="list-disc pl-5 space-y-1 text-base font-semibold">
                  <li>Run regular audits that combine automated scanning and manual testing with assistive technologies such as NVDA, JAWS, and VoiceOver, and on current versions of Chrome, Edge, Safari, and Firefox. Track results and remediation in a recurring cycle.</li>
                  <li>Invite and prioritize user feedback from people with disabilities through our contact channels and incorporate those insights into fixes.</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">What Is Covered and Known Limitations</h2>
          <ul className="list-disc pl-5 space-y-2 text-base font-semibold">
            <li>
              This statement covers {cfg.domain} and patient-facing content that we control. It does not cover third-party platforms or content we do not manage, such as external scheduling widgets, maps, or payment services. We ask vendors to meet accessibility obligations and we provide an equally effective alternative when direct conformance is not possible.
            </li>
            <li>
              Legacy content. Some older posts and documents may not yet meet our current standard. We are updating high-traffic items first and will provide accessible alternatives on request.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Your Rights</h2>
          <ul className="list-disc pl-5 space-y-2 text-base font-semibold">
            <li>Under ADA Title III, public accommodations must provide effective communication and reasonable modifications where necessary for equal access.</li>
            <li>In California, the Unruh Civil Rights Act and the Disabled Persons Act prohibit disability discrimination in businesses and medical facilities.</li>
            <li>If a clinic or program receives HHS funds, the Section 504 rule requires conformance of public-facing web and mobile content to WCAG 2.1 Level A and AA within the specified compliance windows, and providers must continue meeting effective communication duties during any remediation.</li>
            <li>California CPRA regulations require privacy notices to be reasonably accessible to consumers with disabilities online.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Feedback, Complaints, and Non-Retaliation</h2>
          <p>
            We welcome accessibility feedback and take it seriously. We will never retaliate against anyone for raising an accessibility concern in good faith. If you believe we have not met our obligations, please contact our Accessibility Coordinator using the channels above. We will work with you to provide access to the requested content or service, and we will document and address the underlying issue.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Change Management</h2>
          <p>
            We aim to review this page periodically and after major redesigns or platform changes. Timing may vary based on workload, but we post updates when we make material changes and we adjust the “Last updated” date at that time.
          </p>
          <p>
            <strong>
              This statement describes our current accessibility goals and practices. It is not a contract, warranty, or guarantee. We will continue to meet our legal obligations regardless of how often this page is updated.
            </strong>
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Developer Appendix (Technical Highlights)</h2>
          <ul className="list-disc pl-5 space-y-2 text-base font-semibold">
            <li>Structure and semantics: Proper page title, language attribute, landmark regions, logical headings, lists, and tables with headers.</li>
            <li>Keyboard and focus: All interactive elements reachable and operable by keyboard. Visible focus. No character-only shortcuts that trap focus.</li>
            <li>Contrast and color: Minimum text contrast 4.5:1 and non-text UI contrast 3:1, with enhanced contrast where feasible.</li>
            <li>Target size: Minimum 24 × 24 CSS px or adequate spacing per WCAG 2.2 SC 2.5.8.</li>
            <li>Motion and animation: Provide user controls to pause movement. Avoid content that flashes.</li>
            <li>Media: Captions and transcripts. Audio descriptions or descriptive transcripts where needed for meaningful access.</li>
            <li>Errors and help: Clear error messages, programmatic associations, and consistent help options.</li>
            <li>Telecommunications: Public numbers are relay-friendly. Staff are trained to accept 711 relay calls for scheduling and clinical coordination.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
