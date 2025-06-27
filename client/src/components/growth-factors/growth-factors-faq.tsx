import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GrowthFactorsFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: "What are Growth Factors and how do they work for hair loss?",
      answer:
        "Growth Factors therapy, also known as PRP (Platelet-Rich Plasma), uses concentrated platelets from your own blood. These platelets contain powerful growth factors that stimulate hair follicles, improve blood circulation to the scalp, and promote natural hair regrowth. The treatment harnesses your body's natural healing mechanisms to restore hair.",
    },
    {
      question: "How long does the Growth Factors treatment take?",
      answer:
        "The entire process typically takes 30-45 minutes. This includes blood draw (5-10 minutes), PRP processing (15-20 minutes), and the injection procedure (10-15 minutes). Most patients can return to their normal activities immediately after treatment.",
    },
    {
      question: "When will I see results from Growth Factors therapy?",
      answer:
        "Initial improvements may be noticed within 6-8 weeks, with more significant results visible at 3-4 months. Optimal results are typically achieved after 6-12 months and may continue improving with follow-up treatments. Results vary based on individual factors and the extent of hair loss.",
    },
    {
      question: "Is Growth Factors treatment painful?",
      answer:
        "Most patients experience minimal discomfort. The blood draw is similar to routine lab work, and the scalp injections are performed with very fine needles. Local anesthetic can be applied to ensure comfort. Any mild tenderness typically resolves within 24-48 hours.",
    },
    {
      question: "How many Growth Factors sessions will I need?",
      answer:
        "Most patients benefit from an initial series of 3-4 treatments spaced 4-6 weeks apart, followed by maintenance sessions every 6-12 months. The exact number depends on your individual hair loss pattern, response to treatment, and aesthetic goals.",
    },
    {
      question: "Who is a good candidate for Growth Factors therapy?",
      answer:
        "Growth Factors therapy is suitable for both men and women experiencing various types of hair loss, including androgenetic alopecia, thinning hair, and early-stage hair loss. It's particularly effective for those who want a natural, non-surgical approach. A consultation will determine if you're a good candidate.",
    },
    {
      question: "Are there any side effects or risks?",
      answer:
        "Since Growth Factors therapy uses your own blood, the risk of allergic reactions or adverse effects is extremely low. Some patients may experience mild swelling, redness, or tenderness at injection sites for 24-48 hours. Serious complications are very rare.",
    },
    {
      question: "Can Growth Factors be combined with other hair restoration treatments?",
      answer:
        "Yes, Growth Factors therapy can complement other treatments like hair transplants, microneedling, or topical therapies. Many patients combine PRP with other treatments for enhanced results. Your treatment plan will be customized based on your specific needs and goals.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#F8F9FA] to-white px-5 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2D5A27] to-[#5B8A52] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get comprehensive answers about Growth Factors therapy for hair restoration
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full p-6 md:p-8 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-[#F8F9FA] hover:to-[#E8F5E8] transition-all duration-300 group"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-base md:text-lg font-semibold text-black pr-4 group-hover:text-[#2D5A27] transition-colors">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#2D5A27] transition-colors" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E8F5E8] rounded-xl p-4 md:p-6 border-l-4 border-[#2D5A27]">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#2D5A27] to-[#5B8A52] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our hair restoration specialists are here to provide personalized answers and guidance.
            </p>
            <button className="bg-white text-[#2D5A27] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}