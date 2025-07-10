import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function GrowthFactorsFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
        "Ideal candidates are adults with early to moderate hair loss (Hamilton-Norwood 1-5, Ludwig 1-3), those seeking non-surgical options, or patients wanting to enhance hair transplant results. The treatment works best on areas with existing hair follicles, even if miniaturized. It's not suitable for completely bald areas with no follicles. People with blood disorders, active scalp infections, cancer, or those taking blood thinners should consult their doctor first.",
    },
    {
      question: "How does this compare to hair transplant surgery?",
      answer:
        "Growth factors therapy is non-surgical and works by regenerating your existing hair follicles, while transplants relocate healthy follicles to balding areas. Growth factors cost 70-80% less than FUE transplants ($1,200-4,200 vs $8,000-15,000), require no downtime, and have zero risk of scarring. However, transplants provide more dramatic results for advanced baldness.",
    },
    {
      question: "Is the treatment painful and what's the recovery like?",
      answer:
        "The procedure involves minimal discomfort. We use topical numbing cream before microneedling and injections, so most patients rate pain as 2-3/10. Post-treatment, you may experience mild scalp tenderness for 24-48 hours. There's no downtime - you can return to work immediately. Avoid intense exercise for 24 hours and harsh hair products for 48 hours.",
    },
    {
      question: "How many treatments do I need and how long do results last?",
      answer:
        "The optimal protocol is typically 3 treatments spaced 4-6 weeks apart, based on 2024 clinical guidelines. Results typically last 12-18 months before maintenance treatments are needed. Many patients see continued improvement for 6-9 months after their final session. Annual maintenance treatments help sustain results long-term.",
    },
    {
      question: "Are there any side effects or risks?",
      answer:
        "Growth factor therapy is considered very safe since we use your own blood, eliminating rejection risks. Common side effects are mild and temporary: slight swelling for 24-48 hours, minor bruising at injection sites, and temporary scalp tenderness. Serious complications are extremely rare (less than 0.1%). Some patients experience temporary increased shedding 2-4 weeks post-treatment - this is normal.",
    },
    {
      question: "What should I do before and after treatment?",
      answer:
        "Before treatment: Stay hydrated, eat iron-rich foods, avoid blood thinners for 1 week if medically safe, and wash hair with gentle shampoo. Don't drink alcohol 24 hours prior. After treatment: Keep scalp clean but avoid harsh scrubbing for 48 hours, use gentle, sulfate-free shampoo, avoid direct sun exposure for 24 hours, and follow up as scheduled.",
    },
    {
      question: "Who is an ideal candidate for Growth Factors therapy?",
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
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 px-5 py-24 md:py-32"
    >
      <div className=" mx-auto section-content">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-[800] text-black tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-[500] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Evidence-based answers about Growth Factors therapy from clinical
            research and patient outcomes
          </motion.p>
        </motion.div>

        <motion.div className="space-y-4">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-[700] text-gray-900 flex-1 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openFaq === index ? "auto" : 0,
                  opacity: openFaq === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 pt-2">
                  <p className="text-gray-700 leading-relaxed font-[500] text-base">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

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
        </motion.div>
      </div>
    </section>
  );
}
