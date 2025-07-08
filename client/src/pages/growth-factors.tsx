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
import SiteFooter from "@/components/site-footer";
import FueNavBar from "@/components/fue/fue-nav-bar";
import FueStyleTreatmentCard from "@/components/FueStyleTreatmentCard";
import dermatoscopeImg from "@assets/66F01987-4F54-4A36-B770-0806AA31AE24_1751966280504.png";
import prpTubeImg from "@assets/715D4C1D-9DD8-4F92-877A-16505BC39FC9_1751966394883.png";
import microneedlingPenImg from "@assets/699A977B-D602-4DE4-90D7-4B61A9565492_1751972967388.png";
import recoveryTrackerImg from "@assets/DB46019A-08E7-4A57-AF2B-478B6D57F6C9_1751973693083.png";

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
      <div className="flex items-center justify-between px-6 py-4">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <DrNeoLogo />
        </motion.div>

        <div className="flex items-center space-x-4">
          <BookButton onClick={onBookClick} />
          <MenuIcon />
        </div>
      </div>
    </motion.nav>
  );
}

function Hero({ onBookClick }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center px-6"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              FDA-Approved Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Growth Factors
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hair Restoration
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Regenerate your natural hair growth using your body's own healing
            factors. 84% of patients see measurable improvement within 6 months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={onBookClick}
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function Timeline() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const steps = [
    {
      icon: AssessmentIcon,
      title: "Comprehensive Assessment",
      description:
        "Advanced trichoscopy and digital scalp analysis using dermoscopic technology to evaluate follicular miniaturization patterns.",
      details: [
        "Digital follicular mapping",
        "Androgenetic staging assessment", 
        "Growth factor response prediction"
      ],
      image: dermatoscopeImg,
    },
    {
      icon: PreparationIcon,
      title: "Growth Factor Isolation",
      description:
        "Specialized centrifugation process to concentrate your body's natural growth factors for maximum therapeutic benefit.",
      details: [
        "Platelet-rich plasma extraction",
        "Growth factor concentration optimization",
        "Quality assessment and validation"
      ],
      image: prpTubeImg,
    },
    {
      icon: TreatmentIcon,
      title: "Precision Application",
      description:
        "Targeted microneedling and injection techniques to deliver growth factors directly to hair follicles for optimal results.",
      details: [
        "Precise follicular targeting",
        "Controlled-depth microneedling",
        "Sterile application protocols"
      ],
      image: microneedlingPenImg,
    },
    {
      icon: RecoveryIcon,
      title: "Recovery Monitoring",
      description:
        "Digital progress tracking and personalized recovery protocols to optimize your healing and maximize results.",
      details: [
        "Mobile progress tracking",
        "24/7 support access",
        "Recovery milestone monitoring"
      ],
      image: recoveryTrackerImg,
    },
  ];

  return (
    <section ref={timelineRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            The Growth Factors Process
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            Our scientifically-proven protocol harnesses your body's natural
            healing mechanisms to restore hair growth at the cellular level.
          </motion.p>
        </AnimatedSection>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              step={step}
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index, scrollProgress }) {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  const cardY = useTransform(
    scrollProgress,
    [index * 0.25, (index + 1) * 0.25],
    [50, -50]
  );

  return (
    <motion.div
      ref={stepRef}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-12 lg:gap-20`}
      style={{ y: cardY }}
    >
      {/* Content */}
      <div className="flex-1 space-y-6">
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <step.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Step {index + 1}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {step.title}
            </h3>
          </div>
        </motion.div>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: index * 0.2 + 0.2, duration: 0.8 }}
        >
          {step.description}
        </motion.p>

        <motion.ul
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
        >
          {step.details.map((detail, detailIndex) => (
            <motion.li
              key={detailIndex}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                delay: index * 0.2 + 0.6 + detailIndex * 0.1,
                duration: 0.6,
              }}
            >
              <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{detail}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Image Card */}
      <motion.div
        className="flex-1 max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
      >
        <FueStyleTreatmentCard
          image={step.image}
          title={step.title}
          description={step.description}
          className="h-80 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
        />
      </motion.div>
    </motion.div>
  );
}

function ApplePricingCard({ plan, isPopular, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      className={`relative p-8 rounded-3xl transition-all duration-500 ${
        isPopular
          ? "bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white scale-105 shadow-2xl border-2 border-blue-400"
          : "bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-200"
      }`}
      whileHover={{ y: -5, scale: isPopular ? 1.05 : 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
        >
          <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            Most Popular
          </span>
        </motion.div>
      )}

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.2 + 0.2, duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p
          className={`text-sm mb-6 ${
            isPopular ? "text-blue-100" : "text-gray-600"
          }`}
        >
          {plan.description}
        </p>

        <div className="mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold">${plan.price}</span>
            <span
              className={`ml-2 text-lg line-through ${
                isPopular ? "text-blue-200" : "text-gray-500"
              }`}
            >
              ${plan.originalPrice}
            </span>
          </div>
          <p
            className={`text-sm mt-1 ${
              isPopular ? "text-blue-100" : "text-gray-600"
            }`}
          >
            {plan.billing}
          </p>
        </div>

        <motion.ul
          className="space-y-3 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
        >
          {plan.features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                delay: index * 0.2 + 0.5 + featureIndex * 0.1,
                duration: 0.5,
              }}
            >
              <CheckIcon
                className={`w-5 h-5 flex-shrink-0 ${
                  isPopular ? "text-blue-200" : "text-green-500"
                }`}
              />
              <span
                className={`text-sm ${
                  isPopular ? "text-blue-50" : "text-gray-700"
                }`}
              >
                {feature}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <div className="space-y-3">
          <motion.button
            className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              isPopular
                ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
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
      </div>
    </section>
  );
}

// Research-based FAQ component with 2024 clinical evidence
function GrowthFactorsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const faqData = [
    {
      question: "What exactly are growth factors and how do they work for hair restoration?",
      answer: "Growth factors are naturally occurring proteins in your blood that regulate cellular growth, healing, and regeneration. In hair restoration, we extract platelet-rich plasma (PRP) from your blood, which contains concentrated growth factors like PDGF, VEGF, and IGF-1. These proteins stimulate dormant hair follicles, increase blood circulation to the scalp, and extend the hair growth phase. Clinical studies show growth factors can increase hair density by 25-30% and hair thickness by up to 23% over 6 months.",
      icon: "🧬"
    },
    {
      question: "What's the success rate and how long until I see results?",
      answer: "Clinical data from 2024 studies shows an 84% success rate for measurable hair improvement. Most patients notice reduced hair shedding within 2-4 weeks, with new hair growth visible at 3-4 months. Peak results typically occur at 6-9 months. The treatment works best for androgenetic alopecia (pattern baldness) in stages 1-5 on the Hamilton-Norwood scale. Success rates are highest when combined with proper scalp care and multiple treatment sessions.",
      icon: "📊"
    },
    {
      question: "How does growth factor therapy compare to hair transplant surgery?",
      answer: "Growth factors therapy is non-surgical and works by regenerating your existing hair follicles, while transplants relocate healthy follicles to balding areas. Growth factors cost 70-80% less than FUE transplants ($1,200-4,200 vs $8,000-15,000), require no downtime, and have zero risk of scarring. However, transplants provide more dramatic results for advanced baldness. Many patients use growth factors as a first-line treatment or to enhance transplant results and prevent further hair loss.",
      icon: "⚖️"
    },
    {
      question: "Is the treatment painful and what's the recovery like?",
      answer: "The procedure involves minimal discomfort. We use topical numbing cream before microneedling and injections, so most patients rate pain as 2-3/10. The blood draw feels like a routine lab test. Post-treatment, you may experience mild scalp tenderness for 24-48 hours, similar to a sunburn. There's no downtime - you can return to work immediately. Avoid intense exercise for 24 hours and harsh hair products for 48 hours. Most patients resume normal activities the same day.",
      icon: "💉"
    },
    {
      question: "How many treatments do I need and how long do results last?",
      answer: "The optimal protocol is typically 3 treatments spaced 4-6 weeks apart, based on 2024 clinical guidelines. This allows proper healing between sessions and builds cumulative effects. Results typically last 12-18 months before maintenance treatments are needed. Many patients see continued improvement for 6-9 months after their final session. Annual maintenance treatments help sustain results long-term and prevent further hair loss progression.",
      icon: "📅"
    },
    {
      question: "Who is an ideal candidate and who should avoid this treatment?",
      answer: "Ideal candidates are adults with early to moderate hair loss (Hamilton-Norwood 1-5, Ludwig 1-3), those seeking non-surgical options, or patients wanting to enhance hair transplant results. The treatment works best on areas with existing hair follicles, even if miniaturized. It's not suitable for completely bald areas with no follicles. People with blood disorders, active scalp infections, cancer, or those taking blood thinners should consult their doctor first. Pregnant or breastfeeding women should wait until after nursing.",
      icon: "👤"
    },
    {
      question: "Are there any side effects or risks I should know about?",
      answer: "Growth factor therapy is considered very safe since we use your own blood, eliminating rejection risks. Common side effects are mild and temporary: slight swelling for 24-48 hours, minor bruising at injection sites, and temporary scalp tenderness. Serious complications are extremely rare (less than 0.1%). Some patients experience temporary increased shedding 2-4 weeks post-treatment - this is normal as weak hairs are replaced by stronger ones. Infection risk is minimal with sterile technique.",
      icon: "⚠️"
    },
    {
      question: "What should I do before and after treatment to maximize results?",
      answer: "Before treatment: Stay hydrated, eat iron-rich foods, avoid blood thinners (aspirin, ibuprofen) for 1 week if medically safe, and wash hair with gentle shampoo. Don't drink alcohol 24 hours prior. After treatment: Keep scalp clean but avoid harsh scrubbing for 48 hours, use gentle, sulfate-free shampoo, avoid direct sun exposure for 24 hours, take prescribed supplements (biotin, zinc), and follow up as scheduled. Proper nutrition and stress management enhance results.",
      icon: "📋"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-[800] text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-[500] leading-relaxed">
            Evidence-based answers to help you make an informed decision about growth factors therapy
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{faq.icon}</span>
                  <h3 className="text-lg font-[700] text-gray-900 flex-1 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="pl-12">
                    <p className="text-gray-700 leading-relaxed font-[500] text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6 font-[500]">
            Still have questions? Our specialists are here to help.
          </p>
          <motion.button
            className="bg-[#32d74b] text-white px-8 py-4 rounded-2xl font-[600] text-lg hover:bg-[#28a745] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default function GrowthFactors() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    document.title = "Growth Factors Hair Restoration | Dr. NEO";
  }, []);

  const handleBookClick = () => {
    window.open("tel:+19495700500", "_self");
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav onBookClick={handleBookClick} />
      <Hero onBookClick={handleBookClick} />
      <Timeline />
      <PricingSection />
      <GrowthFactorsFAQ />
      <SiteFooter />
    </div>
  );
}