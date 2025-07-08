import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GrowthFactorsFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: "What exactly are Growth Factors and how do they restore hair?",
      answer:
        "Growth Factors therapy uses concentrated platelets from your own blood, containing powerful growth factors at 5x normal concentration. These growth factors stimulate dermal papilla cells, which control hair growth cycles. Clinical studies show this triggers hair follicle regeneration, extends the growth phase, and increases hair density by up to 70%. The treatment harnesses your body's natural healing mechanisms - completely natural and safe.",
    },
    {
      question: "What results can I realistically expect and when?",
      answer:
        "Clinical data shows 84% of patients experience positive results, with average improvements of 25-46 hairs per cm². You may notice hair texture improvement within 2-4 weeks, with visible growth starting at 6-8 weeks. Significant results appear at 3-4 months, with peak benefits at 6 months. Most patients see 70-90% improvement in hair density over 6-12 months.",
    },
    {
      question: "Am I a good candidate for Growth Factors therapy?",
      answer:
        "Ideal candidates have early to moderate hair loss with viable follicles (not completely bald areas). This includes male/female pattern baldness, thinning hair, and some cases of alopecia areata. You're likely a good candidate if you've experienced hair loss within the past few years. We assess candidacy during your comprehensive consultation using advanced dermoscopic analysis.",
    },
    {
      question: "How does the microneedling + PRP combination work?",
      answer:
        "Precision 1.5mm microneedling creates 16,000 micro-channels per cm², triggering natural healing response and collagen production. PRP is immediately applied, allowing concentrated growth factors to penetrate directly to hair follicles - increasing absorption by up to 1000x compared to topical application alone. This combination maximizes bioavailability and treatment effectiveness.",
    },
    {
      question: "What does the treatment process involve?",
      answer:
        "The 45-60 minute process includes: (1) 60ml blood draw and dual-spin centrifugation to concentrate platelets, (2) topical numbing for comfort, (3) precise 1.5mm microneedling across treatment areas, (4) immediate PRP application while channels remain open. Most patients find it surprisingly comfortable and return to normal activities the same day.",
    },
    {
      question: "How many sessions will I need and how often?",
      answer:
        "Our protocol typically requires 3-4 sessions spaced 4-6 weeks apart for optimal results. Clinical studies show 79.6% of patients achieve good to excellent results with this schedule. After initial series, maintenance treatments every 6-12 months help sustain results. We customize the protocol based on your specific hair loss pattern and response.",
    },
    {
      question: "Are there any side effects or risks?",
      answer:
        "Growth Factors therapy has an excellent safety profile since we use your own blood. Common temporary effects include mild redness and tenderness (21% of patients), usually resolving within 24-48 hours. Serious complications are extremely rare. The treatment is FDA-approved and considered one of the safest hair restoration options available.",
    },
    {
      question: "How does this compare to hair transplant surgery?",
      answer:
        "Growth Factors therapy stimulates your existing follicles rather than relocating them. It's ideal for early-moderate hair loss, requires no surgery or downtime, costs significantly less, and works well as a standalone treatment or complement to transplant. Hair transplant is better for advanced hair loss with large bald areas.",
    },
    {
      question: "Will the results be permanent?",
      answer:
        "Results typically last 12-24 months before gradual decline. Since hair loss is a progressive condition, maintenance treatments every 6-12 months help sustain improvements. Many patients find the natural approach preferable to daily medications with potential side effects. Long-term studies show sustained benefits with proper maintenance.",
    },
    {
      question: "What should I expect during recovery?",
      answer:
        "Recovery is minimal with most patients returning to normal activities immediately. Avoid washing your scalp for 24 hours post-treatment. You may experience mild redness and tenderness for 24-48 hours - this is normal and indicates the healing process is working. No special aftercare products are needed, though we may recommend gentle hair care practices.",
    },
    {
      question: "Can Growth Factors be combined with other treatments?",
      answer:
        "Absolutely. Growth Factors therapy works excellently alongside hair transplants (before and after surgery), topical minoxidil, and other hair restoration approaches. Many patients combine treatments for enhanced results. We often recommend Growth Factors as preparation before hair transplant surgery to optimize follicle health and post-surgical healing.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 px-5 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-[800] text-black tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-[500] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Evidence-based answers about Growth Factors therapy from clinical research and patient outcomes
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <motion.button
                className="w-full p-6 md:p-8 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-[#F8F9FA] hover:to-[#E8F5E8] transition-all duration-300 group"
                onClick={() => toggleFaq(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-base md:text-lg font-[600] text-black pr-4 group-hover:text-[#32d74b] transition-colors">
                  {item.question}
                </span>
                <motion.div
                  animate={{ 
                    rotate: openFaq === index ? 180 : 0,
                    scale: openFaq === index ? 1.1 : 1 
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#32d74b] transition-colors" />
                </motion.div>
              </motion.button>
              
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
                      <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E8F5E8] rounded-xl p-4 md:p-6 border-l-4 border-[#32d74b]">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-[400]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-[#32d74b] to-[#28a745] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <motion.h3 
              className="text-3xl md:text-4xl font-[800] mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Still Have Questions?
            </motion.h3>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90 font-[500] leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our hair restoration specialists are here to provide personalized answers and guidance.
            </motion.p>
            <motion.button 
              className="bg-white text-[#32d74b] px-10 py-4 rounded-2xl font-[600] text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}