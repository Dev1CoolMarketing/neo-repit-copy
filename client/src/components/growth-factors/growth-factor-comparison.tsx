"use client";

import React from "react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, Info, ArrowRight } from "lucide-react";

// ==========================================================
// Growth Factors vs. Hypersomes – Apple‑style Comparison
// - Responsive, accessible, keyboard-friendly
// - Tailwind gradient header using the palette provided
// - Framer Motion animations with reduced‑motion support
// - Works in Next.js (app router or pages) as a client component
// ==========================================================

const FEATURES = {
  growth: {
    id: "growth",
    name: "Growth Factors Infusion",
    tagline: "Your body’s own proteins, refined for regrowth.",
    bullets: [
      "Uses your body’s own proteins to stimulate follicles",
      "Safe, trusted, and widely studied",
      "Improves thickness, scalp vitality, and regrowth over time",
    ],
  },
  hypersomes: {
    id: "hypersomes",
    name: "Hypersomes Infusion",
    tagline: "Stem‑cell–derived exosomes with advanced signals.",
    bullets: [
      "Stem cell–derived exosomes containing advanced regenerative signals",
      "Shown in studies to produce 2–3× greater increases in hair density than many traditional growth factor therapies",
      "Faster visible improvements and stronger long‑term outcomes",
    ],
  },
};

const COMPARISON_ROWS: Array<{
  label: string;
  growth: string;
  hypersomes: string;
}> = [
  {
    label: "Mechanism",
    growth: "Autologous growth factors that support follicle signaling",
    hypersomes: "Exosomal payload with potent regenerative signaling",
  },
  {
    label: "Evidence & Safety",
    growth: "Long clinical track record; excellent safety profile",
    hypersomes: "Growing body of studies; early but compelling outcomes",
  },
  {
    label: "Density Gain",
    growth: "Incremental increases over time",
    hypersomes: "Often 2–3× vs many traditional GF therapies (study dependent)",
  },
  {
    label: "Time to Visible Change",
    growth: "Gradual (weeks to months)",
    hypersomes: "Faster onset (often earlier visible changes)",
  },
  {
    label: "Best For",
    growth: "Patients prioritizing proven safety and natural boost",
    hypersomes: "Patients seeking next‑gen potency and enhanced results",
  },
];

const GUIDANCE = [
  {
    title: "How We Guide Patients",
    items: [
      {
        heading: "Growth Factors Infusion",
        body:
          "An excellent entry point when you want a natural boost with a strong safety record.",
      },
      {
        heading: "Hypersomes Infusion",
        body:
          "The next generation of regenerative hair restoration with greater potency and enhanced outcomes.",
      },
      {
        heading: "Personalized Plan",
        body:
          "Both therapies are available — your consultation helps decide which option, or combination, best supports your goals.",
      },
    ],
  },
];

export default function GFvsHypersomesComparison() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>
      <section
        aria-labelledby="gf-hs-heading"
        className="w- text-slate-900 w-[87.5%] mx-auto"
      >
        {/* Header */}
        <div
          className="relative overflow-hidden rounded-3xl border border-black/5 shadow-xl"
          role="img"
          aria-label="Growth Factors versus Hypersomes comparison header"
        >
          <div className="bg-gradient-to-r from-[#5CB270] via-[#89AD5F] to-[#E4A43C] p-[1px] rounded-3xl">
            <div className="relative rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white">
              <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-multiply" />
              <div className="grid gap-6 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h2
                    id="gf-hs-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
                  >
                    Growth Factors vs. Hypersomes
                  </h2>
                  <p className="mt-3 max-w-prose text-sm sm:text-base text-slate-700">
                    At Dr. Neo, we offer both therapies because each provides unique
                    benefits.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                  className="flex items-center gap-3 justify-start lg:justify-end"
                >
      
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards (stack on mobile, side‑by‑side on lg) */}
        <div className="mt-10 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {[FEATURES.growth, FEATURES.hypersomes].map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#89AD5F]"
              tabIndex={0}
              aria-labelledby={`${card.id}-title`}
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-[#5CB270]/10 via-[#89AD5F]/10 to-[#E4A43C]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <header>
                <h3
                  id={`${card.id}-title`}
                  className="text-lg sm:text-xl font-semibold tracking-tight"
                >
                  {card.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{card.tagline}</p>
              </header>

              <ul className="mt-5 space-y-3" role="list">
                {card.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-[#5CB270]/30 bg-white">
                      <Check aria-hidden className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-relaxed text-slate-700">{b}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
                <Info aria-hidden className="h-4 w-4" />
                <span className="sr-only">Note:</span>
                <span>
                  Individual results vary; your clinician will tailor a plan to you.
                </span>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5CB270] transition"
                  aria-label={`Learn more about ${card.name}`}
                >
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl"
          role="region"
          aria-labelledby="gf-hs-table-caption"
        >
          <div className="bg-gradient-to-r from-[#5CB270]/15 via-[#89AD5F]/15 to-[#E4A43C]/15 p-4">
            <p id="gf-hs-table-caption" className="text-sm font-medium text-slate-800">
              Side‑by‑side comparison
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full caption-bottom text-left text-sm">
              <caption className="sr-only">
                Comparison of Growth Factors and Hypersomes across mechanism, evidence,
                density gain, time to results, and best‑fit patients.
              </caption>
              <thead className="bg-white">
                <tr className="border-b border-black/5">
                  <th scope="col" className="px-4 py-3 text-slate-500 font-medium" />
                  <th scope="col" className="px-4 py-3 text-base font-semibold text-slate-900">
                    Growth Factors
                  </th>
                  <th scope="col" className="px-4 py-3 text-base font-semibold text-slate-900">
                    Hypersomes
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.label} className={i !== COMPARISON_ROWS.length - 1 ? "border-b border-black/5" : ""}>
                    <th
                      scope="row"
                      className="w-[38%] min-w-[220px] bg-slate-50 px-4 py-4 text-slate-700 font-medium"
                    >
                      {row.label}
                    </th>
                    <td className="px-4 py-4 align-top text-slate-800">{row.growth}</td>
                    <td className="px-4 py-4 align-top text-slate-800">{row.hypersomes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Guidance Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {GUIDANCE[0].items.map((item, idx) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-xl"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#5CB270]/10 via-[#89AD5F]/10 to-[#E4A43C]/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <h4 className="text-base font-semibold tracking-tight">{item.heading}</h4>
              <p className="mt-2 text-sm text-slate-700">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs text-slate-600">
          * This content is educational and not medical advice. Always consult with a qualified clinician for personalized guidance.
        </p>
      </section>
    </MotionConfig>
  );
}
