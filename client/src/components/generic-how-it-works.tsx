import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import FueStyleTreatmentCard from "./FueStyleTreatmentCard";

import HiddenCard from "./ui/hidden-card";

const GenericHowItWorks = ({processDetails, color, gradientClass, title}: any) => {

  return (
    <div className="bg-[#F3F4F6]">
      {/* Promotional Ribbon */}

      {/* How It Works Section */}
      <section className="bg-light-gray px-5 py-16 md:py-12">
        <div className="container mx-auto max-w-md md:max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className={` ${gradientClass} text-4xl md:text-5xl lg:text-6xl font-[700] text-black mb-6 tracking-tight`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
{title}            </motion.h2>
          </motion.div>

          {/* Mobile Layout - Stacked Cards */}
          <div className="block md:hidden space-y-6">
            {processDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FueStyleTreatmentCard
                  step={index + 1}
                  title={detail.title}
                  subtitle={detail.subtitle}
                  subsetTitle={detail.subsetTitle}
                  image={detail.image}
                  featured={true}
                  color={color}
                  inverse={index > 1}
                  alignLeft={false}
                  moreDetails={detail.moreDetails}
                >
                  {detail.description}
                </FueStyleTreatmentCard>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout - Apple News Grid */}
          <div className="hidden md:grid grid-cols-2 gap-5 max-w-5xl mx-auto bg">
            <div className="col-span-2 bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex min-h-[460px]">
                <div className="flex-1 p-11 flex flex-col justify-center">
                  <div className="max-w-[310px]">
                    <h3 className="text-2xl font-semibold text-black leading-[25px] tracking-[-0.057px] mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-lg font-[600]  text-gray-500 leading-[23px] tracking-[-0.057px]">
                      The main goal of the initial consultation is to determine
                      if you are a good candidate for a Dr. Neo hair restoration
                      procedure. The good news is NeoGraft has a proven
                      track-record of delivering excellent hair transplantation
                      results for both men and women of all ethnicities.
                    </p>
                  </div>
                  <div className="mt-4">
                    <HiddenCard
                      cardText="Learn More"
                      showCardIconInitial={<Plus className="h-4" />}
                      showCardIconFinal={<Minus className="h-4" />}
                      animationIconClasses="transition-transform duration-300"
                      cardTextClasses="text-md font-bold apple-gradient-product-red"
                    >
                      <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                    </HiddenCard>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center pl-5 pr-11">
                  <div className="w-full max-w-[405px] h-[370px] ounded-2xl flex items-center justify-center">
                    <motion.img
                      src="/assets/fue/initial_consultation_desktop.png"
                      alt="Initial Consultation Inspection Gadget"
                      className="w-full h-full object-contain border-2 
                      border-white shadow-sm"
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

            <div className="bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex flex-col min-h-[590px] p-11 gap-5">
                <div className="flex-1">
                  <h3 className="text-2xl font-[600] text-black leading-[25px] tracking-[-0.057px] mb-1">
                    Procedure Day
                  </h3>
                  <p className="text-lg font-semibold leading-[23px] text-gray-500 tracking-[-0.057px] min-w-[327px]  min-h-[200px]">
                    A Dr. Neo physician will be involved in making all of the
                    necessary and important decisions, and will supervise every
                    step of your NeoGraft experience. Certified Dr. Neo
                    technicians will assist the physician performing the
                    procedure.
                  </p>
                  <HiddenCard
                    cardText="Learn More"
                    showCardIconInitial={<Plus className="h-4" />}
                    showCardIconFinal={<Minus className="h-4" />}
                    animationIconClasses="transition-transform duration-300"
                    cardTextClasses="text-md font-bold apple-gradient-product-red"
                  >
                    <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                  </HiddenCard>
                </div>
                <div className="flex justify-center items-end">
                  <div className="w-[243px] h-[337px] rounded-2xl flex items-center justify-center">
                    <motion.img
                      src="/assets/fue/procedure_day.png"
                      alt="Hand Transplanting a hair follicle with Dr.Neo Tweezers"
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

            <div className="bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex flex-col min-h-[590px] p-11 gap-5">
                <div className="flex-1">
                  <h3 className="text-2xl font-[600] text-black leading-[25px] tracking-[-0.057px] mb-1">
                    Recovery & Regrowth{" "}
                  </h3>
                  <p className="text-lg font-semibold leading-[23px] text-gray-500 tracking-[-0.057px] min-w-[327px]  min-h-[200px]">
                    There's typically very little pain or discomfort after the
                    NeoGraft procedure. You may experience some tenderness
                    around the donor site, but this is a normal part of the
                    healing process and should subside in a few days. You may
                    also experience a slight amount of drainage for the first
                    day after your procedure, but this is minimal.
                  </p>
                  <HiddenCard
                    cardText="Learn More"
                    showCardIconInitial={<Plus className="h-4" />}
                    showCardIconFinal={<Minus className="h-4" />}
                    animationIconClasses="transition-transform duration-300"
                    cardTextClasses="text-md font-bold apple-gradient-product-red"
                  >
                    <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                  </HiddenCard>
                </div>
                <div className="flex justify-center items-end">
                  <div className="w-[243px] h-[337px] rounded-2xl flex items-center justify-center">
                    <motion.img
                      src="/assets/fue/recovery_&_regrowth_desktop.png"
                      alt="Two spray bottles of The Rinse and The Spritz from Dr.Neo"
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

            <div className="col-span-2 bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex min-h-[460px] items-center">
                <div className="flex-1 p-11 flex flex-col justify-center">
                  <div className="max-w-[333px]">
                    <h3 className="text-2xl font-semibold text-black leading-[25px] tracking-[-0.057px] mb-1">
                      Follow-Up Consultation{" "}
                    </h3>
                    <p className="text-lg text-gray-500 font-semibold text-medium-gray leading-[23px] tracking-[-0.057px]">
                      We encourage all of our NeoGraft patients to schedule a
                      follow up consultation to analyze results we achieved and
                      determine if additional sessions would be beneficial.
                    </p>
                    <HiddenCard
                      cardText="Learn More"
                      showCardIconInitial={<Plus className="h-4" />}
                      showCardIconFinal={<Minus className="h-4" />}
                      animationIconClasses="transition-transform duration-300"
                      cardTextClasses="text-md font-bold apple-gradient-product-red"
                    >
                      <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                    </HiddenCard>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <motion.img
                    src="/assets/fue/follow_up_consultation_desktop.png"
                    alt="Ipad image showing follow up consultation  "
                    className="w-full h-full object-contain border-2 
                    border-white shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericHowItWorks;
