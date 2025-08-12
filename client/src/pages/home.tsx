import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import { HeroSectionImmersive } from "@/components/hero-section-immersive";
import TreatmentsSection from "@/components/treatments-section";
import TreatmentsSectionEnhanced from "@/components/treatments-section-enhanced";
import TestimonialsSectionPremium from "@/components/testimonials-section-premium";
import Frame_81 from "@/components/Frame_81";
import NeoDifferenceSection from "@/components/neo-difference-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { initFadeInAnimations } from "@/lib/utils";
import FueNavBar from "@/components/fue/fue-nav-bar";

export default function Home() {
  useEffect(() => {
    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "SoCal Advanced Hair Restoration | Dr. NEO";

    return cleanup;
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader /> */}
            <FueNavBar />
      
      <main className="flex-1">
        {/* Mobile: Use original components, Desktop: Use Apple-inspired enhanced components */}
        <HeroSection />
        <HeroSectionImmersive />
        <TreatmentsSection />
        <TreatmentsSectionEnhanced />
        <Frame_81 />
        <TestimonialsSectionPremium />
        <NeoDifferenceSection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
