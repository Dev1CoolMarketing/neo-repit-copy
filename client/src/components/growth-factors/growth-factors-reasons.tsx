
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import { motion } from "framer-motion";

export default function GrowthFactorsReasons() {
  const growthFactorReasons = [
    {
      highlight: "Harness your body's natural healing power",
      description: "with concentrated platelets and growth factors from your own blood",
    },
    {
      highlight: "Stimulate dormant hair follicles",
      description: "to promote new hair growth and strengthen existing strands",
    },
    {
      highlight: "Minimal side effects and downtime",
      description: "since it uses your own biological materials",
    },
    {
      highlight: "Clinically proven results",
      description: "backed by scientific research and patient success stories",
    },
    {
      highlight: "Suitable for men and women",
      description: "experiencing various types of hair loss and thinning",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-20 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container mx-auto max-w-4xl px-5">
        <div className="text-center mb-16">
          <h2 className="text-center bg-gradient-to-r from-[#2D5A27] to-[#5B8A52] bg-clip-text text-transparent text-3xl md:text-4xl font-bold mb-4">
            Why Choose Growth Factors?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the science-backed benefits of PRP therapy for natural hair restoration
          </p>
        </div>

        <div className="space-y-8">
          {growthFactorReasons.map((item, index) => (
            <FadeInOnScroll key={`growth-factor-reason-${index}`} className="w-full">
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#2D5A27] to-[#5B8A52] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[#2D5A27] mb-2">
                      {item.highlight}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeInOnScroll>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#E8F5E8] to-[#F0F8F0] rounded-2xl p-8 border border-[#2D5A27]/10">
            <h3 className="text-2xl font-bold text-[#2D5A27] mb-4">
              Ready to Regenerate Your Hair?
            </h3>
            <p className="text-gray-600 mb-6">
              Take the first step towards natural hair restoration with our proven Growth Factors therapy.
            </p>
            <button className="bg-[#2D5A27] hover:bg-[#1F3D1B] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}