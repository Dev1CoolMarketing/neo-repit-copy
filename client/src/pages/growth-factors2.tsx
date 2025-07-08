import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
// import imgDrNeoLogo from "@/assets/letterN.png";
import {
  AssessmentIcon,
  PreparationIcon,
  TreatmentIcon,
  RecoveryIcon,
  ResultsIcon,
  CheckIcon,
  StarIcon,
} from "../components/growth-factors/timeline-icons";
import FueResults from "@/components/fue/fue-results-from-real-patients";
import FueNavBar from "@/components/fue/fue-nav-bar";
import FueStyleTreatmentCard from "@/components/FueStyleTreatmentCard";

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
      className="flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 hover:bg-white/25 transition-all duration-300 shadow-lg"
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
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4">
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
              className="p-2 -m-2 hover:bg-white/10 rounded-lg transition-colors duration-200 md:hidden"
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
    <div className="text-center space-y-8 px-6 max-w-4xl mx-auto">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.85]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeOut",
          }}
        >
          RESTORE
        </motion.h1>
        <motion.p
          className="text-xl text-lime-400 tracking-[0.08em] uppercase font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Microneedling + PRP Growth Factors
        </motion.p>
      </motion.div>

      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-[600] leading-relaxed tracking-tight max-w-3xl mx-auto">
          <span className="text-lime-400 font-semibold">FDA-approved</span>{" "}
          microneedling with{" "}
          <span className="text-lime-400 font-semibold">
            PRP growth factors
          </span>{" "}
          clinically proven to stimulate natural hair regrowth in 89% of
          patients.
        </p>

        <motion.button
          className={` p-4 custom-button-growth-factors py-3 rounded-full w-3/4 md:w-fit mx-5 mb-10 max-w-sm`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-md font-[700]">Book Free Assessment</span>
        </motion.button>

        <motion.p
          className="text-sm text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-lime-400 font-semibold">$500 value</span> • No
          obligation consultation
        </motion.p>
      </motion.div>
    </div>
  );
}

function ProcessStep({
  label,
  IconComponent,
  isActive = false,
  index,
  onHover,
  isHovered,
  color = "lime-200",
  bgColor = "lime-200",
}) {
  // console.log("THIS IS COLOR", color);
  return (
    <motion.div
      className="flex flex-col items-center space-y-4 cursor-pointer"
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 1.8, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <motion.div
        className={`w-16 h-20 md:w-24 md:h-32 rounded-2xl flex items-center justify-center transition-all duration-500 relative overflow-hidden ${
          isActive || isHovered
            ? `bg-${bgColor} bg-opacity-20 border border-${color}`
            : "bg-white/8 border border-white/15"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        <IconComponent isActive={isActive} isHovered={isHovered} />
      </motion.div>

      <motion.span
        className={`text-xs md: text-sm font-medium text-center transition-colors duration-300 ${
          isActive || isHovered ? `text-${color}` : "text-transparent"
        }`}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export function ProcessTimeline({ color = "lime-200" }) {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Assessment", IconComponent: AssessmentIcon },
    { label: "Preparation", IconComponent: PreparationIcon },
    { label: "Treatment", IconComponent: TreatmentIcon },
    { label: "Recovery", IconComponent: RecoveryIcon },
    { label: "Results", IconComponent: ResultsIcon },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  // console.log("THIS IS COLOR I NN TIMELNE", color);
  return (
    <motion.div
      className="px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      {/* Timeline connector */}
      <div className="relative">
        <motion.div
          className="absolute op-10 sm:top-12 md:top-16 right-10 h-0.5 bg-white/15 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.2, duration: 1.5 }}
        />
        <motion.div
          className={`absolute top-10 sm:top-12 md:top-16 left-10 h-0.5 bg-${color} rounded-full`}
          animate={{
            width: `${(activeStep / (steps.length - 1)) * (100 - 80 / steps.length)}%`,
          }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="flex justify-between items-center relative z-10">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            label={step.label}
            IconComponent={step.IconComponent}
            isActive={activeStep === index}
            index={index}
            onHover={setHoveredStep}
            isHovered={hoveredStep === index}
            color={color}
            bgColor={`${color}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-scren bg-black overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(132,204,22,0.1),transparent_70%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_50%_120%,rgba(132,204,22,0.1),transparent_70%)",
              "radial-gradient(circle_at_30%_100%,rgba(132,204,22,0.15),transparent_70%)",
              "radial-gradient(circle_at_70%_110%,rgba(132,204,22,0.1),transparent_70%)",
              "radial-gradient(circle_at_50%_120%,rgba(132,204,22,0.1),transparent_70%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen pt-24 ">
        <div className="flex-1 flex flex-col justify-center space-y-20">
          <HeroContent />
          <ProcessTimeline color="white" />
        </div>
      </div>
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
        className="text-[26px] md:text-3xl lg:text-4xl text-white leading-tight max-w-2xl mx-auto"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-lime-400 font-semibold">{highlight}</span>
        <br />
        <span className="text-white">{title}</span>
      </motion.h3>
      <p className="text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
        {description}
      </p>
      {statistic && (
        <div className="pt-8">
          <span className="text-lime-400 font-semibold text-lg">
            {statistic}
          </span>
        </div>
      )}
    </motion.div>
  );
}

function BenefitsSection() {
  const benefits = [
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

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Clinical Evidence
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Peer-reviewed research validating microneedling + PRP therapy
          </motion.p>
        </AnimatedSection>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              highlight={benefit.highlight}
              statistic={benefit.statistic}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Clean timeline step with proper contrast
export function TimelineStep({
  title,
  description,
  IconComponent,
  index,
  features,
  isLast,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative bg-[#f5f5f7]"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        delay: index * 0.15,
        duration: 1,
        ease: "easeOut",
      }}
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px">
        {/* Main timeline line */}
        <motion.div
          className="absolute left-0 top-0 w-px bg-gray-300 h-full"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          style={{ transformOrigin: "top" }}
          transition={{
            delay: index * 0.15 + 0.3,
            duration: 1,
          }}
        />

        {/* Active progress line */}
        <motion.div
          className="absolute left-0 top-0 w-px bg-accent h-full"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          style={{ transformOrigin: "top" }}
          transition={{
            delay: index * 0.15 + 0.8,
            duration: 1.2,
          }}
        />
      </div>

      {/* Step content */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-6 md:mb-24 ${isLast ? "mb-0" : ""}`}
      >
        {/* Icon container */}
        <motion.div
          style={{ y }}
          className={`flex justify-center lg:justify-${isLeft ? "end" : "start"} ${isLeft ? "lg:order-1" : "lg:order-2"}`}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon background */}
            <div
              className="w-24 h-24 bg-white rounded-3xl 
                            flex items-center justify-center shadow-xl
                            border border-gray-100 group-hover:shadow-2xl
                            transition-all duration-500"
            >
              <IconComponent isActive={true} isHovered={false} />
            </div>

            {/* Step number */}
            <motion.div
              className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full 
                         flex items-center justify-center text-white font-bold text-sm
                         shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                delay: index * 0.15 + 0.6,
                duration: 0.5,
                type: "spring",
              }}
            >
              {index + 1}
            </motion.div>

            {/* Connection line to timeline */}
            <motion.div
              className={`absolute top-1/2 w-8 h-px bg-gray-300 hidden lg:block
                         ${isLeft ? "left-full" : "right-full"}`}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              style={{
                transformOrigin: isLeft ? "left" : "right",
              }}
              transition={{
                delay: index * 0.15 + 1,
                duration: 0.8,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className={`space-y-6 bg-white z-10 border md:border-none md:bg-none  md:shadow-none border-gray-400 shadow-xl rounded-xl p-6 text-center lg:text-left ${isLeft ? "lg:order-2" : "lg:order-1"}`}
          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isLeft ? -30 : 30 }
          }
          transition={{
            delay: index * 0.15 + 0.4,
            duration: 0.8,
          }}
        >
          <h3 className="text-xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {title}
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {description}
          </p>

          {/* Feature tags */}
          {features && (
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: index * 0.15 + 0.7,
                duration: 0.8,
              }}
            >
              {features.slice(0, 3).map((feature, featureIndex) => (
                <motion.span
                  key={featureIndex}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full 
                             text-sm text-gray-800 hover:bg-lime-50 hover:border-lime-200 
                             hover:text-gray-900 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    delay: index * 0.15 + 0.8 + featureIndex * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Connecting flow element */}
      {!isLast && (
        <motion.div
          className="absolute left-1/2 bottom-12 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: index * 0.15 + 1.2,
            duration: 0.8,
          }}
        >
          <div className="w-6 h-6 rounded-full bg-white border-2 border-accent shadow-lgsoft">
            <motion.div
              className="w-2 h-2 rounded-full bg-accent mx-auto mt-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function ProcessSection() {
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
      learnMoreContent: "Our comprehensive assessment utilizes state-of-the-art dermoscopic imaging to create detailed follicular maps. We analyze hair density, caliber variations, and miniaturization patterns to develop personalized treatment protocols. This thorough evaluation ensures optimal outcomes tailored to your specific hair restoration needs."
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
      learnMoreContent: "Our specialized dual-spin centrifugation protocol maximizes platelet concentration while preserving growth factor integrity. The 60ml blood draw is processed using FDA-approved techniques to achieve therapeutic platelet concentrations of 500,000+ platelets per microliter, significantly higher than baseline levels."
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
      learnMoreContent: "The precise 1.5mm needle depth creates optimal micro-channels for growth factor delivery directly to hair follicles. Our technique generates 16,000 channels per square centimeter, maximizing PRP absorption while minimizing discomfort. Immediate application ensures maximum bioavailability of growth factors."
    },
    {
      title: "Recovery & Results",
      description:
        "Structured healing protocol with progress monitoring. Hair growth initiation typically begins at 4-6 weeks.",
      features: [
        "24-48hr recovery",
        "Progress photography",
        "Custom aftercare",
      ],
      learnMoreContent: "Recovery typically involves minimal downtime with most patients returning to normal activities within 24-48 hours. Our structured monitoring protocol includes progress photography and follow-up assessments to track hair growth initiation, which typically begins at 4-6 weeks with visible improvements at 3-6 months."
    },
  ];

  return (
    <section id="treatment" className="bg-[#F3F4F6] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-center bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent w-full text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] font-normal leading-[1.1] tracking-[-0.04em] pb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A precise, evidence-based protocol refined through 2,400+ successful treatments
          </p>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="block md:hidden space-y-6">
          {steps.map((step, index) => (
            <FueStyleTreatmentCard 
              key={index} 
              step={index + 1} 
              title={step.title}
              features={step.features}
              learnMoreContent={step.learnMoreContent}
            >
              {step.description}
            </FueStyleTreatmentCard>
          ))}
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <FueStyleTreatmentCard 
              key={index} 
              step={index + 1} 
              title={step.title}
              features={step.features}
              learnMoreContent={step.learnMoreContent}
            >
              {step.description}
            </FueStyleTreatmentCard>
          ))}
        </div>
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
        className="relative bg-white rounded-2xl p-6 border border-gray-200 
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
      <div className="max-w-6xl mx-auto px-6">
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
          <StarIcon key={i} className="w-5 h-5 text-lime-600" filled={true} />
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
        className="inline-block bg-lime-50 border border-lime-200 rounded-2xl px-6 py-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
      >
        <p className="text-lime-700 font-semibold text-lg">{result}</p>
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
    <section className="bg-white py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-6">
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
      <div className="max-w-5xl mx-auto px-6">
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
                         ? "border-lime-200 shadow-lg shadow-lime-100"
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
                         ? "border-lime-200 shadow-lg shadow-lime-100"
                         : "border-gray-200 hover:border-gray-300"
                     }`}
          whileFocus={{ scale: 1.01 }}
        />
      )}
    </motion.div>
  );

  return (
    <section className="bg-white py-32 md:py-48">
      <div className="max-w-2xl mx-auto px-6">
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

function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <DrNeoLogo />
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Dr. Neo Hair Restoration Clinic - Board-certified specialists in
            evidence-based microneedling + PRP therapy with 2,400+ successful
            treatments.
          </p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <motion.a
              href="#"
              className="hover:text-lime-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-lime-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Terms
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-lime-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Dr. Neo Hair Restoration Clinic. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      <FueNavBar />
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      {/* <PricingSection />
      {/* <TestimonialsSection /> */}
      {/* <ResultsSection /> */}
      {/* <div ref={contactRef}>
        <AppleContactForm />
      </div> */}
      <FueResults />
      <Footer />
    </div>
  );
}
