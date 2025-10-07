import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
// import imgDrNeoLogo from "@/assets/letterN.png";
import {
  CheckIcon,
  StarIcon,
} from "../components/growth-factors/timeline-icons";
import styles from "../styles/fue.module.css";
import GenericHeader from "@/components/generic-header";
import FueNavBar from "@/components/fue/fue-nav-bar";
import FueStyleTreatmentCard from "@/components/FueStyleTreatmentCard";
import dermatoscopeImg from "@assets/gf-howitworks-step1.webp";
import prpTubeImg from "@assets/gf-hiw2-prptube.webp";
import microneedlingPenImg from "@assets/gf-hiw3-mnpen.webp";
import recoveryTrackerImg from "@assets/gf-howitworks-step4.png";
import SiteFooter from "@/components/site-footer";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import GenericReasons from "@/components/generic-reasons";
import GenericHowItWorks from "@/components/generic-how-it-works";
import GFvsHypersomesComparison from "@/components/growth-factors/growth-factor-comparison";

const headerDetails = [
  "Stimulates natural hair growth.",
  "No pills. No prescriptions.",
  "Minimally invasive. No downtime.",
];
  const reasons = [
    {
      highlight: "89% success rate",
      title: "in clinical trials for androgenetic alopecia",
      description:
        "FDA-cleared microneedling technology combined with autologous PRP growth factors shows superior results compared to topical treatments alone.",
      statistic: "Proven in 2,400+ patients",
    },
    {
      highlight: "Zero surgical risk",
      title: "with 24-48 hour recovery time",
      description:
        "Non-invasive outpatient procedure using your body's own healing factors. Return to work the next day with minimal visible effects.",
      statistic: "<0.1% complication rate",
    },
    {
      highlight: "1000x enhanced absorption",
      title: "through controlled micro-channel delivery",
      description:
        "Medical-grade 1.5mm microneedling creates optimal penetration pathways for concentrated growth factor infiltration into follicular units.",
      statistic: "Clinically measured increase",
    },
  ];

function DrNeoLogo() {
  return (
    <div className="h-7 w-auto" data-name="Dr. NEO Logo">
      <img
        src={"imgDrNeoLogo"}
        alt="Dr. NEO"
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="relative size-5" data-name="Menu Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d="M3 10H17"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M3 5H17"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M3 15H17"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}
function BookButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center justify-center bg-black/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 hover:bg-black/25 transition-all duration-300 shadow-lg"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-white text-sm font-medium">Book</span>
    </motion.button>
  );
}

function Nav({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto md:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <DrNeoLogo />
          </motion.div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <motion.a
              href="#treatment"
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.02 }}
            >
              Treatment
            </motion.a>
            <motion.a
              href="#results"
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.02 }}
            >
              Results
            </motion.a>
          </div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <BookButton onClick={onBookClick} />
            <motion.button
              className="p-2 -m-2 hover:bg-black/10 rounded-lg transition-colors duration-200 md:hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MenuIcon />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        initial={{ x: 0, y: "40vh", scale: 5.0 }}
        animate={{ x: 0, y: 0, scale: 1.0 }}
        transition={{
          delay: 0.7,
          duration: 2,
          ease: "easeIn",
        }}
        src={"/assets/FOLLICULES.png"}
        alt="Advanced Hair Follicle Technology"
        className="relative z-24 w-20 h-24 h-auto object-contain follicles-blue-tint"
        loading="eager"
      />
      <motion.div
        initial={{ x: 0, y: "100vh" }}
        animate={{ x: 0, y: 0, scale: 1.0 }}
        transition={{
          delay: 0.7,
          duration: 2,
          ease: "easeIn",
        }}
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)", // force GPU layer
        }}
        className="flex flex-col jusitify-center items-center gap-5"
      >
        <div className="flex w-full flex-col items-center justify-center gap-5 px-5  ">
          <div className="flex flex-col items-center w-full">
            {/* Main headline with growth factor emphasis */}
            <p className="text-6xl md:text-8xl apple-gradient-sierra-blue font-[600] tracking-wide font-bold text-center leading-[1.05] font-[600] tracking-[-0.02em] m-0">
              Growth {/* Subtle glow effect for growth factors */}
            </p>
            <p className="text-6xl md:text-8xl apple-gradient-sierra-blue font-[600] tracking-wide font-bold text-center leading-[1.05] font-[600] tracking-[-0.02em] m-0">
              Factors {/* Subtle glow effect for growth factors */}
            </p>
          </div>
        </div>
        <div className=" gap-1 md:text-2xl flex flex-col items-center lg:text-3xl font-[600] px-10">
          <p
            className={
              styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
            }
          >
            Stimulates natural hair growth.
          </p>
          <p
            className={
              styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
            }
          >
            No pills. No prescriptions.
          </p>
          <p
            className={
              styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
            }
          >
            Minimally invasive. No downtime.
          </p>
          <button
            className="custom-button-growth-factors w-full text-md md:text-sm font-[500] px-4 text-lg py-2  rounded-full mt-5 text-white"
            style={{ color: "white" }}
          >
            Book Consultation
          </button>
        </div>
      </motion.div>
    </div>
    // <div className="text-center max-w-6xl mx-auto mt-5">
    //   {/* Bold Apple Fitness-style Hero with Growth Factor twist */}
    //   <motion.div
    //     className="space-y-6 flex flex-col items-center w-full"
    //     initial={{ opacity: 0, y: 40 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 1.2, ease: "easeOut" }}
    //   >
    //     <motion.img
    //       src={"/assets/FOLLICULES.png"}
    //       alt="Advanced Hair Follicle Technology"
    //       className="relative z-24 w-20 h-24 h-auto object-contain"
    //       loading="eager"
    //     />

    //     {/* Powerful subtitle */}
    //     <div className=" gap-1 md:text-2xl flex flex-col items-center lg:text-3xl font-[600] px-10">
    //       <p
    //         className={
    //           styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
    //         }
    //       >
    //         Advanced FUE technology.
    //       </p>
    //       <p
    //         className={
    //           styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
    //         }
    //       >
    //         Natural results.
    //       </p>
    //       <p
    //         className={
    //           styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
    //         }
    //       >
    //         Restored confidence.
    //       </p>
    //       <div className=" p-4  mt-5 custom-button-fue py-3 rounded-full md:w-fit mx-5 mb-10 max-w-sm">
    //         <div>
    //           <span className="text-md md:text-sm text-white font-[700]">
    //             Book Consultation
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* <motion.p
    //       className="apple-gradient-sierra-blue text-lg font-[500]"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1.6, duration: 0.8 }}
    //     >
    //       89% success rate
    //     </motion.p> */}
    //   </motion.div>
    // </div>
  );
}

function ProcessStep({ label, isActive = false, index }) {
  return (
    <motion.div
      className="flex flex-col items-center space-y-3 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15 + 2.0, duration: 0.6 }}
    >
      {/* Apple-style minimal step indicator */}
      <motion.div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-[600] transition-all duration-700 ${
          isActive
            ? "bg-[#007AFF] text-white shadow-lg shadow-[#007AFF]/30"
            : "bg-black/15 text-white/60 backdrop-blur-sm"
        }`}
        animate={{
          scale: isActive ? 1.1 : 1,
          backgroundColor: isActive ? "#007AFF" : "rgba(255,255,255,0.15)",
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {index + 1}
      </motion.div>

      {/* Minimal label */}
      <motion.span
        className={`text-sm font-[500] transition-all duration-700 ${
          isActive ? "text-[#007AFF]" : "text-white/70"
        }`}
        animate={{
          color: isActive ? "#007AFF" : "rgba(255,255,255,0.7)",
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["ASSESS", "EXTRACT", "DELIVER", "HEAL", "GROW"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      {/* Bold step display */}
      <motion.div
        className="text-center mb-8"
        key={activeStep}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-[800] apple-gradient-sierra-blue mb-2 tracking-tight"
          animate={{
            scale: [1, 1.01, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {steps[activeStep]}
        </motion.h2>
      </motion.div>

      {/* Ultra-minimal progress indicators */}
      <div className="flex justify-center items-center space-x-4">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full transition-all duration-700 ${
              index === activeStep
                ? "bg-[#007AFF] w-12 shadow-lg shadow-[#007AFF]/50"
                : "bg-white/20 w-4"
            }`}
            animate={{
              width: index === activeStep ? 48 : 16,
              backgroundColor:
                index === activeStep ? "#007AFF" : "rgba(255,255,255,0.2)",
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="w-full bg-white flex min-h-screen flex-col justify-center items-center  md:mt-20 ">
      <HeroContent />
    </section>
  );
}

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BenefitCard({ title, description, highlight, statistic, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="text-center space-y-8 py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        delay: index * 0.2,
        duration: 1,
        ease: "easeOut",
      }}
    >
      <motion.h3
        className="text-[26px] md:text-3xl lg:text-4xl text-black leading-tight max-w-2xl mx-auto"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <span className="apple-gradient-sierra-blue font-semibold">
          {highlight}
        </span>
        <br />
        <span className="text-black">{title}</span>
      </motion.h3>
      <p className="text-xl text-black/80 leading-relaxed max-w-xl mx-auto">
        {description}
      </p>
      {statistic && (
        <div className="pt-8">
          <span className="apple-gradient-sierra-blue font-semibold text-lg">
            {statistic}
          </span>
        </div>
      )}
    </motion.div>
  );
}


// Clean timeline step with proper contrast


function ProcessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "Comprehensive Assessment",
      description:
        "Advanced trichoscopy and digital scalp analysis using dermoscopic technology to evaluate follicular miniaturization patterns.",
      features: [
        "Digital follicular mapping",
        "Androgenetic staging",
        "Response prediction",
      ],
      learnMoreContent:
        "Our comprehensive assessment utilizes state-of-the-art dermoscopic imaging to create detailed follicular maps. We analyze hair density, caliber variations, and miniaturization patterns to develop personalized treatment protocols. This thorough evaluation ensures optimal outcomes tailored to your specific hair restoration needs.",
      image: dermatoscopeImg,
      featured: true,
    },
    {
      title: "PRP Preparation",
      description:
        "Autologous platelet-rich plasma extraction using dual-spin centrifugation to achieve optimal growth factor concentration.",
      features: [
        "60ml blood collection",
        "Dual-spin protocol",
        "500K platelets/μL",
      ],
      learnMoreContent:
        "Our specialized dual-spin centrifugation protocol maximizes platelet concentration while preserving growth factor integrity. The 60ml blood draw is processed using FDA-approved techniques to achieve therapeutic platelet concentrations of 500,000+ platelets per microliter, significantly higher than baseline levels.",
      image: prpTubeImg,
      featured: true,
    },
    {
      title: "Microneedling Application",
      description:
        "FDA-cleared 1.5mm microneedling creates 16,000 micro-channels per cm² for enhanced PRP penetration.",
      features: [
        "1.5mm needle depth",
        "16K channels/cm²",
        "Immediate PRP application",
      ],
      learnMoreContent:
        "The precise 1.5mm needle depth creates optimal micro-channels for growth factor delivery directly to hair follicles. Our technique generates 16,000 channels per square centimeter, maximizing PRP absorption while minimizing discomfort. Immediate application ensures maximum bioavailability of growth factors.",
      image: microneedlingPenImg,
      featured: true,
    },
    {
      title: "Recovery & Results",
      description:
        "Digital progress tracking with AI-powered growth analysis. Hair density improvements of 70%+ documented within 6 months.",
      features: [
        "24-48hr recovery",
        "AI progress tracking",
        "70%+ density improvement",
      ],
      learnMoreContent:
        "Our proprietary Recovery Tracker app provides real-time monitoring of your hair restoration journey. Using advanced AI analysis, we track density improvements, growth patterns, and treatment effectiveness. Most patients experience 70%+ hair density improvements within 6 months, with progress visible as early as 4-6 weeks.",
      image: recoveryTrackerImg,
      featured: true,
    },
  ];

  return (
    <section
      id="treatment"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden"
    >
      <div className="section-content">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-[700] text-black mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-[500]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our comprehensive Growth Factors protocol combines advanced medical
            technology with precision delivery for optimal hair restoration
            results.
          </motion.p>
        </motion.div>

        {/* Mobile Layout - Stacked Cards */}
        <motion.div
          className="block md:hidden space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FueStyleTreatmentCard
                step={index + 1}
                title={step.title}
                features={step.features}
                learnMoreContent={step.learnMoreContent}
                image={step.image}
                featured={step.featured}
                inverse={index < 2}
                alignLeft={true}
              >
                {step.description}
              </FueStyleTreatmentCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Layout - Grid */}
        <motion.div
          className="hidden md:grid grid-cols-12 gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
              className={`col-span-12 ${index < 2 ? `md:col-span-6` : `md:col-span-12`}`}
            >
              <FueStyleTreatmentCard
                step={index + 1}
                title={step.title}
                features={step.features}
                learnMoreContent={step.learnMoreContent}
                image={step.image}
                featured={step.featured}
              >
                {step.description}
              </FueStyleTreatmentCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// True Apple website-style pricing card
function ApplePricingCard({ plan, isPopular = false, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
    >
      {/* Popular badge */}
      {isPopular && (
        <motion.div
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 
                     bg-accent text-white px-4 py-1 rounded-full 
                     text-xs font-medium z-20"
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "spring",
          }}
        >
          Most Popular
        </motion.div>
      )}

      {/* Card container */}
      <motion.div
        className="relative bg-black rounded-2xl p-6 border border-gray-200 
                   hover:shadow-lg transition-all duration-300 h-full"
        whileHover={{
          y: -4,
          transition: { duration: 0.3 },
        }}
      >
        {/* Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <motion.h3
              className="text-2xl font-semibold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: index * 0.1 + 0.2,
                duration: 0.6,
              }}
            >
              {plan.name}
            </motion.h3>

            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.6,
              }}
            >
              {plan.description}
            </motion.p>
          </div>

          {/* Pricing */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              delay: index * 0.1 + 0.4,
              duration: 0.6,
            }}
          >
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">
                ${plan.price}
              </span>
              {plan.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${plan.originalPrice}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">{plan.billing}</p>
          </motion.div>

          {/* Key features */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              delay: index * 0.1 + 0.5,
              duration: 0.6,
            }}
          >
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                  <CheckIcon className="w-2.5 h-2.5 text-accent" />
                </div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
              isPopular
                ? "bg-accent text-white hover:bg-accent/90"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              delay: index * 0.1 + 0.6,
              duration: 0.6,
            }}
          >
            {plan.cta}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Essential",
      description: "Perfect for early-stage hair loss and maintenance.",
      price: "1,200",
      originalPrice: "1,500",
      billing: "One-time session",
      features: [
        "Comprehensive scalp assessment",
        "Single microneedling + PRP treatment",
        "Post-treatment care kit",
        "3-month progress tracking",
      ],
      cta: "Choose Essential",
    },
    {
      name: "Optimal Series",
      description: "The gold standard protocol recommended by specialists.",
      price: "2,800",
      originalPrice: "3,600",
      billing: "3 sessions over 6 months",
      features: [
        "Complete series of 3 treatments",
        "Advanced PRP preparation protocol",
        "6-month comprehensive monitoring",
        "Growth factor serum included",
        "Priority scheduling",
      ],
      cta: "Choose Optimal",
      isPopular: true,
    },
    {
      name: "Complete",
      description: "Total transformation for advanced restoration needs.",
      price: "4,200",
      originalPrice: "5,400",
      billing: "5 sessions over 12 months",
      features: [
        "5 initial treatment sessions",
        "Premium PRP with growth factor boost",
        "12-month monitoring program",
        "Dedicated treatment coordinator",
        "Unlimited consultations",
      ],
      cta: "Choose Complete",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto ">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Choose your plan
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            All plans include FDA-approved technology and board-certified
            specialists
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <ApplePricingCard
              key={index}
              plan={plan}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm">
            All plans include comprehensive consultation and satisfaction
            guarantee
          </p>
          <div className="flex justify-center space-x-6 text-xs text-gray-500">
            <span>• Financing available</span>
            <span>• Insurance verification</span>
            <span>• 24/7 support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AppleTestimonial({ name, review, result, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="text-center space-y-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      {/* Rating */}
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-blue-500" filled={true} />
        ))}
      </div>

      {/* Review */}
      <motion.blockquote
        className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
      >
        "{review}"
      </motion.blockquote>

      {/* Result highlight */}
      <motion.div
        className="inline-block bg-blue-50 border border-blue-200 rounded-2xl  py-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
      >
        <p className="text-blue-700 font-semibold text-lg">{result}</p>
      </motion.div>

      {/* Patient info */}
      <motion.div
        className="flex justify-center items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
      >
        <div className="w-12 h-12 bg-gray-100 rounded-3xl flex items-center justify-center border border-gray-200 shadow-lgsoft">
          <span className="text-gray-600 font-semibold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold">{name}</h4>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Michael Chen",
      review:
        "As a physician myself, I was particularly impressed by the evidence-based approach and clinical rigor. The results exceeded my expectations.",
      result: "47% increase in hair density at 18 months",
    },
    {
      name: "Sarah Williams",
      review:
        "The team explained the science behind PRP and microneedling clearly. The results speak for themselves — my hair is noticeably thicker.",
      result: "38% improvement in overall density",
    },
    {
      name: "David Rodriguez",
      review:
        "I researched this extensively before committing. Six months later, people comment on how much better my hair looks.",
      result: "52% improvement in hair thickness",
    },
  ];

  return (
    <section className="bg-black py-32 md:py-48">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-24">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Patient results
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            Real outcomes from patients who achieved measurable hair restoration
          </motion.p>
        </AnimatedSection>

        <div className="space-y-24">
          {testimonials.map((testimonial, index) => (
            <AppleTestimonial key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="bg-gray-50 py-32 md:py-48">
      <div className="max-w-5xl mx-auto ">
        <AnimatedSection>
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Clinical documentation
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                viewport={{ once: true }}
              >
                Standardized photography and trichoscopic analysis documenting
                measurable improvements
              </motion.p>
            </div>

            <motion.button
              className="bg-accent text-white font-semibold text-lg py-4 px-12 rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lgsoft hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              View Results Gallery
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function AppleContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focused, setFocused] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const AppleInputField = ({
    name,
    label,
    type = "text",
    placeholder,
    isTextarea = false,
  }) => (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <label className="block text-sm font-medium text-gray-900">{label}</label>

      {isTextarea ? (
        <motion.textarea
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused("")}
          placeholder={placeholder}
          rows={4}
          className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl transition-all duration-300 
                     resize-none focus:outline-none focus:bg-white text-gray-900 placeholder-gray-500 ${
                       focused === name
                         ? "border-blue-200 shadow-lg shadow-blue-100"
                         : "border-gray-200 hover:border-gray-300"
                     }`}
          whileFocus={{ scale: 1.01 }}
        />
      ) : (
        <motion.input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused("")}
          placeholder={placeholder}
          className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl transition-all duration-300 
                     focus:outline-none focus:bg-white text-gray-900 placeholder-gray-500 ${
                       focused === name
                         ? "border-blue-200 shadow-lg shadow-blue-100"
                         : "border-gray-200 hover:border-gray-300"
                     }`}
          whileFocus={{ scale: 1.01 }}
        />
      )}
    </motion.div>
  );

  return (
    <section className="bg-black py-32 md:py-48">
      <div className="max-w-2xl mx-auto ">
        <AnimatedSection>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 leading-tight">
              Get started
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
              Complete your assessment to receive a personalized treatment
              recommendation
            </p>
          </motion.div>

          {/* Apple-style form card */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AppleInputField
                  name="name"
                  label="Full name"
                  placeholder="Enter your full name"
                />

                <AppleInputField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <AppleInputField
                name="phone"
                label="Phone number"
                type="tel"
                placeholder="Enter your phone number"
              />

              <AppleInputField
                name="message"
                label="Tell us about your hair loss concerns"
                placeholder="Describe your current situation and goals..."
                isTextarea={true}
              />

              <motion.button
                type="submit"
                className="w-full bg-accent text-white font-semibold text-lg py-4 px-8 
                          rounded-2xl hover:bg-accent/90 transition-all duration-300 
                          shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Schedule free assessment
              </motion.button>

              <motion.div
                className="text-center space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-600">
                  Response within 24 hours
                </p>
                <p className="text-xs text-gray-500">
                  Free consultation • No obligation • HIPAA compliant
                </p>
              </motion.div>
            </form>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
const growthFactorDetails = [
  {
    title: "Step 1: Your Growth Factors Consultation",
    subtitle: "Personalized evaluation for a biologic hair-density boost",
    description:
      "Start your journey with a personalized consultation. We’ll determine if Growth Factors — our biologic therapy designed to stimulate follicles and improve hair density — is right for you.",
    image: dermatoscopeImg,
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "Why Growth Factors?",
        bullets: [
          "Derived from your own blood’s regenerative proteins",
          "Non-surgical and incision-free",
          "Safe and effective for men and women",
        ],
      },
      {
        type: "list",
        title: "What We Evaluate",
        bullets: [
          "Your pattern and extent of thinning",
          "Scalp health and potential for response",
          "Your goals and expectations",
        ],
      },
      {
        type: "list",
        title: "After your consult, you’ll know",
        bullets: [
          "If Growth Factors is right for you",
          "Recommended number of sessions",
          "Cost of your treatment plan",
          "What results you can realistically expect",
        ],
      },
    ],
  },
  {
    title: "Step 2: Growth Factors + Microneedling Treatment",
    subtitle: "Combined in the same session for enhanced delivery",
    description:
      "Unlike providers who apply growth factors alone, we combine Microneedling + Growth Factors in a single visit to enhance penetration and efficacy through micro-channels that deliver regenerative proteins deeper into the scalp.",
    image: prpTubeImg,
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "What’s Involved",
        bullets: [
          "Scalp cleansing and preparation",
          "Microneedling to create controlled micro-channels",
          "Immediate infusion of concentrated Growth Factors into the scalp",
          "Soothing serum application and clear aftercare instructions",
        ],
      },
      {
        type: "list",
        title: "Why It Matters",
        bullets: [
          "Microneedling primes the scalp for maximum delivery",
          "Growth Factors support follicle signaling and circulation",
          "The combination encourages new growth and strengthens existing strands",
          "Session typically 30–45 minutes with no downtime",
        ],
      },
    ],
  },
  {
    title: "Step 3: Recovery & Regrowth",
    subtitle: "",
    description:
      "Expect a quick recovery and a staged improvement in thickness, coverage, and scalp vitality as follicles respond.",
    image: microneedlingPenImg,
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "Healing & Growth Timeline",
        bullets: [
          "Days 1–3: Mild redness or sensitivity, similar to a light sunburn",
          "Weeks 4–6: Early improvements in scalp vitality and texture",
          "Weeks 6–12: Noticeable increases in thickness and coverage",
          "3–6 Months: Progressive improvement with stronger, healthier strands",
        ],
      },
    ],
  },
  {
    title: "Step 4: Optimization Sessions",
    subtitle: "Reinforce results every 3–6 months",
    description:
      "Growth Factors Infusion is most effective as a series. Follow-up sessions every 3–6 months reinforce follicular activity and extend long-term results.",
    image: recoveryTrackerImg,
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "Why Continue",
        bullets: [
          "Sustains follicle signaling and circulation",
          "Builds on prior gains for thicker coverage",
          "Helps preserve results over time",
        ],
      },
      {
        type: "list",
        title: "Typical Cadence",
        bullets: [
          "Series of initial sessions as recommended",
          "Maintenance every 3–6 months based on goals and response",
        ],
      },
    ],
  },
  {
    title: "Step 5: Ongoing Follicular Maintenance",
    subtitle: "Protect and extend your results",
    description:
      "Keep your results thriving with a tailored plan and professional oversight.",
    image: "",
    alt: "",
    moreDetails: [
      {
        type: "list",
        title: "Your Maintenance Plan May Include",
        bullets: [
          "Periodic Growth Factors Infusion maintenance",
          "Clinical-grade red light therapy",
          "Nutrition and supplement support",
          "Preventive medical therapies when appropriate",
          "Scalp health coaching for daily care",
        ],
      },
    ],
  },

];

export default function GrowthFactors() {

  const gfGradientClass ="bg-gradient-to-r from-[#5CB270] via-[#89AD5F] to-[#E4A43C] bg-clip-text text-transparent"
  return (
    <main  id="main-content" className=" min-h-screen">
      <FueNavBar />
      {/* <GrowthFactorsHeader /> */}
      {/* <HeroSection /> */}
      <GenericHeader
        title1={"Growth"}
        title2={"Factors"}
        details={headerDetails}
        image={"/assets/FOLLICULES.png"}
        gradientClass={
          "bg-gradient-to-r from-[#5CB270] via-[#89AD5F] to-[#E4A43C] bg-clip-text text-transparent"
        }
        gradientButtonClass={"custom-button-growth-factors"}
      />
      <GenericReasons 
      reasons={reasons} 
      gradientClass={gfGradientClass}
/>  
        <GenericHowItWorks
        processDetails={growthFactorDetails}
        title="How it Works"
        gradientClass={gfGradientClass}
        color="#046706"
        
        />
      {/* <ProcessSection /> */}
      <GFvsHypersomesComparison />
      {/* <PricingSection />
      {/* <TestimonialsSection /> */}
      {/* <ResultsSection /> */}
      {/* <div ref={contactRef}>
        <AppleContactForm />
      </div> */}
      {/* <GrowthFactorsFAQ /> */}
      <SiteFooter />
    </main>
  );
}
