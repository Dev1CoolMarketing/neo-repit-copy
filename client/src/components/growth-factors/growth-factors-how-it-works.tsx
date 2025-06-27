import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import HiddenCard from "../ui/hidden-card";
import AnimatedImage from "../ui/animtated-image";

const GrowthFactorsHowItWorks = () => {
  const processDetails = [
    {
      title: "Blood Draw & Processing",
      description:
        "A small amount of your blood is drawn and processed using advanced centrifugation technology to isolate and concentrate your platelet-rich plasma (PRP). This natural concentrate contains powerful growth factors that stimulate hair follicle regeneration and promote healthy hair growth.",
      image: "/assets/growth-factors/blood_draw.svg",
      alt: "Blood draw and PRP processing equipment",
    },
    {
      title: "Scalp Preparation",
      description:
        "Your scalp is carefully prepared and cleansed. Local anesthetic is applied to ensure maximum comfort during the treatment. The targeted areas for injection are mapped out based on your specific hair loss pattern and treatment goals.",
      image: "/assets/growth-factors/scalp_prep.svg",
      alt: "Scalp preparation and treatment mapping",
    },
    {
      title: "Growth Factor Injection",
      description:
        "The concentrated growth factors are precisely injected into the scalp using micro-needles. This process delivers the healing proteins directly to hair follicles, stimulating cellular regeneration and improving blood flow to promote natural hair growth.",
      image: "/assets/growth-factors/injection.svg",
      alt: "Growth factor injection procedure",
    },
    {
      title: "Recovery & Results",
      description:
        "Recovery is minimal with most patients returning to normal activities immediately. You may experience mild tenderness for 24-48 hours. Results typically become visible within 3-4 months, with continued improvement over 6-12 months as new hair growth strengthens.",
      image: "/assets/growth-factors/recovery.svg",
      alt: "Patient recovery and results timeline",
    },
  ];

  const treatmentBenefits = [
    {
      icon: "🩸",
      title: "100% Natural Treatment",
      description:
        "Uses your own blood's healing properties - no synthetic chemicals or foreign substances.",
    },
    {
      icon: "⚡",
      title: "Minimal Downtime",
      description:
        "Quick 30-45 minute procedure with immediate return to daily activities.",
    },
    {
      icon: "🎯",
      title: "Targeted Delivery",
      description:
        "Precise injection directly to hair follicles for maximum effectiveness.",
    },
    {
      icon: "💪",
      title: "Strengthens Existing Hair",
      description: "Improves hair thickness, quality, and overall scalp health.",
    },
  ];

  return (
    <div className="bg-[#F8F9FA]">
      {/* How Growth Factors Work Section */}
      <section className="bg-light-gray px-5 py-16 md:py-12">
        <div className="container mx-auto max-w-sm md:max-w-5xl">
          <div className="text-center mb-8 md:mb-20 flex flex-col items-center">
            <h2 className="text-center bg-gradient-to-r from-[#2D5A27] to-[#5B8A52] bg-clip-text text-transparent w-full text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] font-normal leading-[1.1] tracking-[-0.04em pb-6">
              How Growth Factors Work
              <br />
            </h2>
            <div />
          </div>

          {/* Mobile Layout - Stacked Cards */}
          <div className="block md:hidden space-y-6">
            {processDetails.map((detail, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm">
                <div className="space-y- p-8 pb-0 ">
                  <h3 className="text-xl font-[700] text-black leading-tight mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-lg font-[600] text-[#86868B] leading-relaxed">
                    {detail.description}
                  </p>
                  <div className="mt-4">
                    <HiddenCard
                      cardText="Learn More"
                      showCardIconInitial={<Plus className="h-4" />}
                      showCardIconFinal={<Minus className="h-4" />}
                      animationIconClasses="transition-transform duration-300"
                      cardTextClasses="text-md font-bold text-medium-gray"
                    >
                      <div className="text-sm text-gray-600 mt-2">
                        <h4 className="font-semibold mb-2">What to Expect:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Professional consultation and assessment</li>
                          <li>Comfortable treatment environment</li>
                          <li>Personalized treatment plan</li>
                          <li>Follow-up progress monitoring</li>
                        </ul>
                      </div>
                    </HiddenCard>
                  </div>
                </div>
                <div className="w-full pl-10 bg-light-gray rounded-2xl flex items-center justify-center max-h-[450px]">
                  <motion.img
                    src={detail.image}
                    alt={detail.alt}
                    className="w-full h-full object-contain rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Apple News Grid */}
          <div className="hidden md:grid grid-cols-2 gap-5 max-w-5xl mx-auto bg">
            {/* First Card - Full Width */}
            <div className="col-span-2 bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex min-h-[460px]">
                <div className="flex-1 p-11 flex flex-col justify-center">
                  <div className="max-w-[310px]">
                    <h3 className="text-2xl font-semibold text-black leading-[25px] tracking-[-0.057px] mb-2">
                      Blood Draw & Processing
                    </h3>
                    <p className="text-lg font-[600] text-gray-500 leading-[23px] tracking-[-0.057px]">
                      A small amount of your blood is drawn and processed using advanced centrifugation technology to isolate and concentrate your platelet-rich plasma (PRP). This natural concentrate contains powerful growth factors that stimulate hair follicle regeneration and promote healthy hair growth.
                    </p>
                  </div>
                  <div className="mt-4">
                    <HiddenCard
                      cardText="Learn More"
                      showCardIconInitial={<Plus className="h-4" />}
                      showCardIconFinal={<Minus className="h-4" />}
                      animationIconClasses="transition-transform duration-300"
                      cardTextClasses="text-md font-bold text-medium-gray"
                    >
                      <div className="text-sm text-gray-600 mt-2">
                        <h4 className="font-semibold mb-2">PRP Processing Details:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Advanced centrifuge technology</li>
                          <li>Sterile processing environment</li>
                          <li>Optimal platelet concentration</li>
                          <li>Quality control measures</li>
                        </ul>
                      </div>
                    </HiddenCard>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center pl-5 pr-11">
                  <div className="w-full max-w-[405px] h-[370px] rounded-2xl flex items-center justify-center">
                    <motion.img
                      src="/assets/growth-factors/blood_draw_desktop.svg"
                      alt="Blood draw and PRP processing equipment"
                      className="w-full h-full object-contain border-2 border-white shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card - Half Width */}
            <div className="bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex flex-col min-h-[590px] p-11 gap-5">
                <div className="flex-1">
                  <h3 className="text-2xl font-[600] text-black leading-[25px] tracking-[-0.057px] mb-1">
                    Scalp Preparation
                  </h3>
                  <p className="text-lg font-semibold leading-[23px] text-gray-500 tracking-[-0.057px] min-w-[327px] min-h-[200px]">
                    Your scalp is carefully prepared and cleansed. Local anesthetic is applied to ensure maximum comfort during the treatment. The targeted areas for injection are mapped out based on your specific hair loss pattern and treatment goals.
                  </p>
                  <HiddenCard
                    cardText="Learn More"
                    showCardIconInitial={<Plus className="h-4" />}
                    showCardIconFinal={<Minus className="h-4" />}
                    animationIconClasses="transition-transform duration-300"
                    cardTextClasses="text-md font-bold text-medium-gray"
                  >
                    <div className="text-sm text-gray-600 mt-2">
                      <h4 className="font-semibold mb-2">Preparation Steps:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Thorough scalp assessment</li>
                        <li>Sterile preparation</li>
                        <li>Comfort measures applied</li>
                        <li>Treatment area mapping</li>
                      </ul>
                    </div>
                  </HiddenCard>
                </div>
                <div className="flex justify-center items-end">
                  <div className="w-[243px] h-[337px] rounded-2xl flex items-center justify-center">
                    <motion.img
                      src="/assets/growth-factors/scalp_prep.png"
                      alt="Scalp preparation and treatment mapping"
                      className="w-full h-full object-cover border-2 border-white shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card - Half Width */}
            <div className="bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex flex-col min-h-[590px] p-11 gap-5">
                <div className="flex-1">
                  <h3 className="text-2xl font-[600] text-black leading-[25px] tracking-[-0.057px] mb-1">
                    Growth Factor Injection
                  </h3>
                  <p className="text-lg font-semibold leading-[23px] text-gray-500 tracking-[-0.057px] min-w-[327px] min-h-[200px]">
                    The concentrated growth factors are precisely injected into the scalp using micro-needles. This process delivers the healing proteins directly to hair follicles, stimulating cellular regeneration and improving blood flow to promote natural hair growth.
                  </p>
                  <HiddenCard
                    cardText="Learn More"
                    showCardIconInitial={<Plus className="h-4" />}
                    showCardIconFinal={<Minus className="h-4" />}
                    animationIconClasses="transition-transform duration-300"
                    cardTextClasses="text-md font-bold text-medium-gray"
                  >
                    <div className="text-sm text-gray-600 mt-2">
                      <h4 className="font-semibold mb-2">Injection Process:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Micro-needle precision</li>
                        <li>Targeted follicle delivery</li>
                        <li>Minimal discomfort</li>
                        <li>Immediate growth factor activation</li>
                      </ul>
                    </div>
                  </HiddenCard>
                </div>
                <div className="flex justify-center items-end">
                  <div className="w-[243px] h-[337px] rounded-2xl flex items-center justify-center">
                    <motion.img
                      src="/assets/growth-factors/injection_desktop.svg"
                      alt="Growth factor injection procedure"
                      className="w-full h-full object-contain border-2 border-white shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Card - Full Width */}
            <div className="col-span-2 bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex min-h-[460px] items-center">
                <div className="flex-1 p-11 flex flex-col justify-center">
                  <div className="max-w-[333px]">
                    <h3 className="text-2xl font-semibold text-black leading-[25px] tracking-[-0.057px] mb-1">
                      Recovery & Results
                    </h3>
                    <p className="text-lg text-gray-500 font-semibold leading-[23px] tracking-[-0.057px]">
                      Recovery is minimal with most patients returning to normal activities immediately. You may experience mild tenderness for 24-48 hours. Results typically become visible within 3-4 months, with continued improvement over 6-12 months as new hair growth strengthens.
                    </p>
                    <HiddenCard
                      cardText="Learn More"
                      showCardIconInitial={<Plus className="h-4" />}
                      showCardIconFinal={<Minus className="h-4" />}
                      animationIconClasses="transition-transform duration-300"
                      cardTextClasses="text-md font-bold text-medium-gray"
                    >
                      <div className="text-sm text-gray-600 mt-2">
                        <h4 className="font-semibold mb-2">Recovery Timeline:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Day 1-2: Mild tenderness possible</li>
                          <li>Week 1: Return to normal activities</li>
                          <li>Month 3-4: Initial results visible</li>
                          <li>Month 6-12: Continued improvement</li>
                        </ul>
                      </div>
                    </HiddenCard>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-[380px] h-[280px] rounded-2xl flex items-center justify-center">
                    <motion.img
                      src="/assets/growth-factors/recovery_desktop.svg"
                      alt="Patient recovery and results timeline"
                      className="w-full h-full object-contain border-2 border-white shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Benefits Section */}
      <section className="bg-white px-5 py-16 md:py-24">
        <div className="container mx-auto max-w-sm md:max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-center bg-gradient-to-r from-[#2D5A27] to-[#5B8A52] bg-clip-text text-transparent text-3xl md:text-4xl font-bold mb-4">
              Why Choose Growth Factors?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Harness your body's natural healing power for effective, safe hair restoration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#F8F9FA] to-[#E8F5E8] rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrowthFactorsHowItWorks;