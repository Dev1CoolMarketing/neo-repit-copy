import { useRef } from "react";


import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { HotlineHeroSection } from "@/components/herohotline/herohotline-hero";
import { HotlineWhyMen } from "@/components/herohotline/hotline-whymen";
import { HotLineHowItWorks } from "@/components/herohotline/herohotline-howitworks";
import { HotlineVersus } from "@/components/herohotline/hotline-versus";

export default function HairHotlinePage() {

  return (
    <div className="bg-black min-h-screen">
      <FueNavBar />
      <HotlineHeroSection />
      <HotlineWhyMen />
      <HotLineHowItWorks />
      <HotlineVersus />
      <SiteFooter />
    </div>
  );
}
