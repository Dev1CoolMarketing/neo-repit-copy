import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import FueStyleTreatmentCard from "./FueStyleTreatmentCard";

import HiddenCard from "./ui/hidden-card";
import FueStyleTreatmentCardDesktop from "./FueStyleTreatmentCardDesktop";

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
          <div className={`hidden md:grid grid-cols-2 gap-5 max-w-5xl mx-auto bg`}>
             {processDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`col-span-${index % 3  ? '1' : '2'}`}
              >
                <FueStyleTreatmentCardDesktop
                  step={index + 1}
                  title={detail.title}
                  subtitle={detail.subtitle}
                  subsetTitle={detail.subsetTitle}
                  image={detail.desktopImage || detail.image}
                  featured={true}
                  color={color}
                  inverse={index % 3 !== 0}
                  alignLeft={index % 3 ? true : false}
                  moreDetails={detail.moreDetails}
                >
                  {detail.description}
                </FueStyleTreatmentCardDesktop>
              </motion.div>
            ))}
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericHowItWorks;
