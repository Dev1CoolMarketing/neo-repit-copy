import { useEffect } from "react";
import { Link } from "wouter";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import ContactSection from "@/components/contact-section";
import { initFadeInAnimations } from "@/lib/utils";
import { Clock, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanup = initFadeInAnimations();
    document.title = "Contact Dr. Neo | Concierge Consultation";
    return cleanup;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-slate-900">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
        <section className="bg-[#f5f5f7] pt-24 pb-12 md:pt-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-[#1f1210] md:text-5xl">
              Contact Dr. Neo
            </h1>
            <p className="mt-4 text-lg text-[#5c4a42] md:text-xl">
              We’re here to answer your questions, plan your visit, and craft a
              personalized treatment roadmap. Reach out and our concierge team
              will respond within one business day.
            </p>
          </div>
        </section>

        <ContactSection formAriaLabel="Contact Dr. Neo consultation request form" />

        {/* <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl space-y-8 px-6 lg:px-12">
            <div>
              <h2 className="text-2xl font-semibold text-[#1f1210] md:text-3xl">
                Business Contact Information
              </h2>
              <p className="mt-3 text-base text-[#5c4a42] md:text-lg">
                Connect with our concierge team to schedule in-person or virtual
                consultations, confirm procedure details, or request travel
                assistance.
              </p>
            </div>

            <dl
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              aria-label="Primary contact details"
            >
              <div className="flex items-start gap-4 rounded-xl bg-[#f8f6f3] p-4">
                <div className="rounded-full bg-[#1f1210] p-2 text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-[#1f1210]">
                    Call or Text
                  </dt>
                  <dd className="mt-1 text-lg text-[#5c4a42]">
                    <a className="hover:text-[#1f1210]" href="tel:+19495700500">
                      (949) 570-0500
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-[#f8f6f3] p-4">
                <div className="rounded-full bg-[#1f1210] p-2 text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-[#1f1210]">
                    Email
                  </dt>
                  <dd className="mt-1 text-lg text-[#5c4a42]">
                    <a
                      className="hover:text-[#1f1210]"
                      href="mailto:team@drvigor.com"
                    >
                      team@drvigor.com
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-[#f8f6f3] p-4">
                <div className="rounded-full bg-[#1f1210] p-2 text-white">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-[#1f1210]">
                    Concierge Hours
                  </dt>
                  <dd className="mt-1 text-lg text-[#5c4a42]">
                    Monday – Friday: 8 AM – 8 PM
                    <br />
                    Saturday – Sunday: 8 AM – 6 PM
                  </dd>
                </div>
              </div>
            </dl>

            <Link
              href="/locations"
              className="inline-flex items-center text-base font-medium text-[#1f1210] underline underline-offset-4 hover:text-[#8b5d3b]"
            >
              Explore our California locations
            </Link>
          </div>
        </section> */}
      </main>
      <SiteFooter />
    </div>
  );
}
