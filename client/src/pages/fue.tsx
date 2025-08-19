import SiteFooter from "@/components/site-footer";
import { useEffect } from "react";
import { initFadeInAnimations } from "@/lib/utils";
import FueResults from "@/components/fue/fue-results-from-real-patients";
import Frame_81 from "@/components/Frame_81";
import TestimonialsSectionPremium from "@/components/testimonials-section-premium";
import FueNavBar from "@/components/fue/fue-nav-bar";
import GenericHeader from "@/components/generic-header";
import GenericReasons from "@/components/generic-reasons";
import GenericHowItWorks from "@/components/generic-how-it-works";
import FueProcess from "@/components/fue/fue-process";
import procedureImg from "@assets/fue-hiw2-procedure.webp";
import recoveryAndRegrowthImg from "@assets/fue-howitworks-step3.webp";
import followUpConsultationImg from "@assets/fue-howitworks-step4.webp";

const headerDetails = [
  " Advanced FUE technology.",
  "Natural results.",
  "Restored confidence.",
];

    const fueReasons = [
        {
            highlight: "Natural-looking results",
            description: "with aesthetic appeal and more youthful density",
        },
        {
            highlight: "No visible linear scar",
            description:
                "because FUE skips the outdated practice of scalp strip removal",
        },
        {
            highlight: "Quicker recovery",
            description: " with our minimally invasive approach",
        },
        {
            highlight: "Ultra-popular procedure",
            description:
                "because FUE skips the outdated practice of scalp strip removal",
        },
        {
            highlight: "Men, women, hairlines, crowns, eyebrows and beards",
            description: "-we got you covered",
        },
    ];

    const fueProcessDetails  = [
    {
      // title: "Initial Consultation",
      title: "Step 1—Your FUE Consultation",
      subtitle: "The first step to a more robust head of hair",
      description:
        "Start your hair restoration journey with a quick, personalized consult. We’ll determine if you’re a good fit for the Dr. Neo® FUE (Follicular Unit Extraction) procedure—one of today’s most advanced, minimally invasive hair transplantation methods.",
      image: "/assets/fue/initial_consultation.png",
      alt: "Initial Consultation Inspection Gadget",
      moreDetails: [
        {
          type: "list",
          title: "Why FUE?",
          bullets: [
            "No scalpel, no stitches, no linear scar",
            "Fast recovery, natural results",
            "Works for both men and women of all ethnicities",
          ],
        },
        {
          type: "list",
          title: "What We Evaluate",
          bullets: [
            "How many grafts you’ll need",
            "Quality and density of your donor hair",
            "Future hair loss potential",
          ],
        },
        {
          type: "string",
          value:
            "Our Dr. Neo specialist will guide you through everything, help set realistic expectations, and provide a custom quote. If you’re ready, you can reserve your procedure date with a deposit.",
        },
        {
          type: "list",
          title: "After Your Consult, You'll know:",
          bullets: [
            "If FUE is right for you",
            "How many grafts you’ll need",
            "The cost of your procedure",
            "What results you can realistically expect",
            "How to book your procedure",
          ],
        },
      ],
    },
    {
      title: "Step 2: Prep Your Scalp for Growth",
      subtitle: "Microneedling + Growth Factors",
      description:
        "Before your NeoGraft® FUE procedure, we prep your scalp with a powerful combo: Microneedling + Growth Factor Therapy. This boosts circulation, improves healing, and sets the stage for better graft survival",
      image: "/assets/fue/initial_consultation.png",
      alt: "Initial Consultation Inspection Gadget",
      moreDetails: [
        {
          type: "list",
          title: "Why It Matters?",
          subtitle:
            "Healthy scalp = better transplant results. This treatment:",
          bullets: [
            "Increases blood flow",
            "Activates follicle-supporting stem cells",
            "Enhances healing and graft survival",
          ],
        },
        {
          type: "list",
          title: "What’s Involved",
          bullets: [
            "Microneedling: Micro-injuries trigger natural healing",
            "Growth Factors: Regenerative proteins nourish the scalp and prep it for your transplant",
          ],
        },
        {
          type: "list",
          title: "Why 4–6 Weeks Ahead?",
          subtitle: "That’s the sweet spot for:",
          bullets: [
            "Angiogenesis (new blood vessels)",
            "Stem cell activation",
            "Scalp tissue remodeling",
          ],
        },
        {
          type: "string",
          value:
            "Your scalp has time to fully respond—so it’s in peak condition by transplant day",
        },
        {
          type: "list",
          title: "After This Step, You’ll Have:",
          bullets: [
            "A healthier, more vascularized scalp",
            "Better graft anchoring",
            "Faster healing",
            "Stronger, fuller regrowth",
          ],
        },
        {
          type: "string",
          title: "Get Ready to Grow",
          value:
            "This step is all about giving your new hair the best start possible. Schedule your scalp optimization session 4–6 weeks before your FUE procedure for the best long-term results.",
        },
      ],
    },
    {
      // title: "Procedure Day",
      title: "Step 3: Procedure Day Prep",
      subtitle: "[Plan for 4–10 Hours]",
      description:
        "Your FUE Procedure Day is a full-day experience. Sessions typically last 4 to 10 hours, depending on how many grafts we harvest and implant.",
      subdescription: "Clear your schedule—you’ll be with us most of the day.",
      image: procedureImg,
      alt: "Hand Transplanting a hair follicle with Dr.Neo Tweezers",
      moreDetails: [
        {
          type: "list",
          title: "Hair Prep: What You Need to Know",
          bullets: [
            "The donor area (usually back/sides of scalp) must be shaved with a zero guard",
            "If you have longer hair, we should consider trimming to help with donor site access",
            "Faster No full buzz cut is required",
          ],
        },
        {
          type: "list",
          title: "Quick Checklist:",
          bullets: [
            "Plan for a 4–10 hour session",
            "Number of sessions varies with your goals",
            "Donor area will be shaved",
            "If you have longer hair, you may need a pre-procedure haircut",
            "No total buzz cut needed",
          ],
        },
      ],
    },
    {
      // title: "Procedure Day",
      title: "Step 4: Procedure Day",
      subtitle: "[Your Dr.Neo FUE Transplantation Session]",
      description:
        "The big day is here! Your FUE transplantation procedure is supervised by a physician and performed by Dr. Neo technicians, all working together for safe, natural-looking results.",
      subdescription: "Clear your schedule—you’ll be with us most of the day.",
      image: procedureImg,
      alt: "Hand Transplanting a hair follicle with Dr.Neo Tweezers",
      moreDetails: [
        {
          type: "list",
          title: "Hair Prep: What You Need to Know",
          bullets: [
            "The donor area (usually back/sides of scalp) must be shaved with a zero guard",
            "If you have longer hair, we should consider trimming to help with donor site access",
            "Faster No full buzz cut is required",
          ],
        },
        {
          type: "list",
          title: "Your Team",
          bullets: [
            "Dr. Neo physician: Oversees all key decisions",
            "Dr. Neo technicians: Perform FUE harvesting + implantation",
          ],
        },
        {
          type: "list",
          title: "Step-by-Step breakdown",
          style: "number",
          bullets: [
            "Donor Area Shave",
            "Back/sides of scalp shaved with a zero guard for graft access.",
            "Local Anesthesia",
            "Keeps you comfortable.",
            "Graft Harvesting (FUE)",
            "Technicians use a handheld device to extract individual follicles.",
            "These grafts (terminal hairs) resist future hair loss.",
            "Implantation + Hairline Design",
            "Grafts placed with care and precision—no linear scar, less downtime, natural results.",
          ],
        },
        {
          type: "list",
          title: "After the Procedure",
          subtitle: "Your team will:",
          bullets: [
            "Secure and inspect all grafts",
            "Cleanse donor areas",
            "Apply a light dressing (if needed)",
            "Provide full aftercare instructions (shampoos, antiseptics, etc.)",
          ],
        },
        {
          type: "string",
          value:
            "Some  mild tenderness  is normal as the anesthesiawears off. This fades within a few days. The procedure iscompleted with no incisions and no stitches, so  your healing starts immediately. Your Dr. Neo team is here for any questions or support.",
          title: "What You Might Feel",
        },
        {
          type: "list",
          title: "Procedure Day Highlights:",
          bullets: [
            "Physician-supervised, technician-performed",
            "FUE = No scar, faster healing, natural look",
            "Local anesthesia keeps you relaxed",
            "Donor area shaved (not full buzz)",
            "Full post-care instructions will be provided",
            "No sutures, less downtime",
            "Mild tenderness is expected and temporary",
          ],
        },
      ],
    },
    {
      title: "Step 5: Recovery & Regrowth",
      subtitle: "[After Your Dr.Neo FUE Procedure]",
      description:
        "Your Dr. Neo® FUE transplant is an investment—keep it thriving with long-term care and professional oversight.",
      image: recoveryAndRegrowthImg,
      alt: "Two spray bottles of The Rinse and The Spritz from Dr.Neo",
      moreDetails: [

        {
          type: "list",
          title: "Day 1",
          bullets: [
            "Minimal drainage possible",
            "Mild tenderness in donor and recipient areas",
          ],
        },
        {
          type: "list",
          title: "Week 1",
          bullets: [
            "Tenderness continues but manageable",
            "Grafts may look slightly raised",
            "Scabs begin forming",
            "Some shedding is normal and expected",
          ],
        },
        {
          type: "list",
          title: "Week 2",
          bullets: ["Most patients resume normal daily activities"],
        },
        {
          type: "list",
          title: "Week 3",
          bullets: [
            "Tenderness fades",
            "Grafts settle in",
            "Scabs flake off naturally",
          ],
        },
        {
          type: "list",
          title: "Months 1-3",
          bullets: [
            "Shedding phase finishes",
            "Dormant period before new growth starts",
          ],
        },
        {
          type: "list",
          title: "Months 4-6",
          bullets: [
            "New hair begins growing",
            "Gradual increase in density and coverage",
          ],
        },
        {
          type: "list",
          title: "Month 6 – Growth Optimization Session",
          bullets: [
            "Microneedling + Growth Factors scalp infusion",
            "Helps strengthen transplanted follicles, improve graft survival, and promote long-term density",
          ],
        },
        {
          type: "list",
          title: "Month 9–12",
          bullets: ["Full, natural results become visible"],
        },
        {
          type: "list",
          title: "Activity Restrictions",
          subtitle: "For the first 2 weeks, avoid:",
          bullets: [
            "Strenuous exercise",
            "Heavy lifting",
            "Activities that cause excessive sweating",
          ],
        },
        {
          type: "list",
          title: "Key Points",
          bullets: [
            "Little to no pain after FUE",
            "Shedding is part of the healing process",
            "The 6-month Growth Optimization Session boosts long-term results",
            "Patience is key—your hair follows a natural growth cycle",
          ],
        },
      ],
    },
    {
      title: "Step 6: Growth Optimization Session",
      subtitle: "[6 Months After Your FUE Transplantation]",
      description:
        "At the half-year mark, your new hair is growing—but it’s still developing strength and density. This is the perfect time for your Growth Optimization Session: Microneedling + Growth Factors to strengthen transplanted follicles, improve graft survival, and boost long-term thickness.",
      image: followUpConsultationImg,
      alt: "Ipad image showing follow up consultation",
      moreDetails: [
        {
          type: "list",
          title: "Why It Matters",
          bullets: [
            "Fortifies transplanted follicles during a key growth phase",
            "Increases blood flow to nourish new hair",
            "Delivers regenerative proteins for stronger, healthier strands",
            "Improves scalp health for long-term density",
          ],
        },
        { type: "string", value: "How it works" },
        {
          type: "list",
          style: "number",
          title: "Microneedling",
          bullets: [
            "Creates tiny channels in the scalp",
            "Stimulates collagen and healing response",
            "Boosts nutrient and oxygen delivery to follicles",
          ],
        },
        {
          type: "list",
          style: "number",
          title: "Growth Factor Therapy",
          bullets: [
            "Serum rich in VEGF, PDGF, IGF-1",
            "Activates follicle-supporting stem cells",
            "Strengthens and supports hair growth",
          ],
        },
        {
          type: "list",
          title: "Why 6 Months?",
          bullets: [
            "Follicles are actively growing and highly responsive",
            "Scalp is fully healed from transplant",
            "Safely boosts hair thickness and density without disturbing grafts",
          ],
        },
        {
          type: "list",
          title: "Growth Optimization Session Goals:",
          bullets: [
            "Stronger, more resilient transplanted follicles",
            "Improved graft survival",
            "Thicker hair growth and better coverage",
            "Healthier scalp environment",
          ],
        },
      ],
    },

    {
      title: "Step 7: Ongoing Follicular Health Maintenance",
      subtitle: "[Protect and Extend Your Results]",
      description:
        "Your Dr. Neo® FUE transplant is an investment—keep it thriving with long-term care and professional oversight.",
      image: followUpConsultationImg,
      alt: "Ipad image showing follow up consultation",
      moreDetails: [
        {
          type: "list",
          title: "1.Follow-Up Consultation",
          subtitle: "[9–12 months after your FUE]",
          bullets: [
            "Review final results & compare photos",
            "Assess density, coverage & hairline design",
            "Decide if additional sessions could enhance results",
            "Update your long-term maintenance plan",
          ],
        },
        {
          type: "list",
          title: "2.Growth Optimization Sessions",
          subtitle: "[Every 6–12 months] Microneedling + Growth Factor Therapy",
          bullets: [
            "Strengthens transplanted & existing follicles",
            "Boosts blood flow & nutrient delivery",
            "Improves density & hair shaft thickness",
            "Keeps scalp healthy & inflammation low",
          ],
        },
        {
          type: "list",
          title: "3.Clinical-Grade Red Light Therapy",
          subtitle: "[Every 2–4 weeks]",
          bullets: [
            "Stimulates follicles at the cellular level",
            "Increases growth rate & density",
            "Reduces inflammation",
            "Strengthens overall hair health",
          ],
        },
        {
          type: "list",
          title: "4.Extra Hair Health Boosts",
          subtitle: "[Every 2–4 weeks]",
          bullets: [
            "Nutrition check: Protein, iron, zinc, vitamin D, biotin",
            "Increases growth rate & density",
            "Medical hair loss prevention (when appropriate)",
            "Home hair care coaching for optimal daily habits",
          ],
        },
        {
          type: "string", value: "Stay ahead of future hair loss and protect your investment with a customized follicular maintenance plan."
        }
      ],
    },
  ];

export default function Fue() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "SoCal Advanced Hair Restoration | Dr. NEO";

    return cleanup;
  }, []);
  const fueGradientClass = "bg-gradient-to-r from-[#B91C1C] via-[#761A20] to-[#111827] bg-clip-text text-transparent"
  return (
    <div className="flex min-h-screen flex-col">
      <FueNavBar />
      <GenericHeader  
              title1={"Follicular "}
        title2={"Unit Extraction"}
        title3={"Hair Transplant"}
        details={headerDetails}
        image={"/assets/fue/shinyfollicle.webp"}
        gradientClass={
          "bg-gradient-to-r from-[#B91C1C] via-[#111827]  to-[#B91C1C] bg-clip-text text-transparent"
        }
        gradientButtonClass={"custom-button-fue"}/>
      <GenericReasons reasons={fueReasons} gradientClass={fueGradientClass} />
      {/* <FueHowItWorks /> */}
      <GenericHowItWorks processDetails={fueProcessDetails} color="#B91C1C"/>
      <FueProcess />
      <Frame_81 />
      <TestimonialsSectionPremium />
      <FueResults />

      <SiteFooter />
    </div>
  );
}
