import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, Check, Sparkles, Zap, Shield } from "lucide-react";
import { useInView } from "react-intersection-observer";
import FueNavBar from "@/components/fue/fue-nav-bar";
import SiteFooter from "@/components/site-footer";
import { Button } from "@/components/ui/button";

// Hero section with Apple Card Family style
const ExosomesHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-[#f5f5f7] py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#c17ff0] via-[#df73a5] to-[#f5a53b] bg-clip-text text-transparent">
                Cellular regeneration.
              </span>
              <br />
              <span className="text-black">Scientific precision.</span>
            </h1>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-xl md:text-2xl font-semibold text-black mb-2">
                With Exosome Therapy,
                <sup className="text-xs text-gray-600">1</sup>
              </p>
              <p className="text-xl md:text-2xl font-semibold text-black mb-2">
                you can harness advanced cellular communication
              </p>
              <p className="text-xl md:text-2xl font-semibold text-black">
                to restore hair follicle vitality and promote natural regrowth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-md mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#c17ff0] to-[#f5a53b] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">
                  Exosome Therapy
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced cellular regeneration through targeted exosome delivery
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Treatment Time</span>
                    <span className="text-sm font-semibold">45-60 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Recovery</span>
                    <span className="text-sm font-semibold">24-48 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Results</span>
                    <span className="text-sm font-semibold">3-6 months</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Feature sections with Apple Card Family style
const ExosomesFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#c17ff0]" />,
      title: "Cellular Activators",
      description: "Exosomes contain powerful growth factors and proteins that activate dormant hair follicle stem cells, triggering natural regeneration processes.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#df73a5]" />,
      title: "Anti-Inflammatory",
      description: "Reduce scalp inflammation and create an optimal environment for hair follicle health and sustained growth.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#f5a53b]" />,
      title: "Regenerative Signaling",
      description: "Direct cellular communication enhances follicle function, improves blood flow, and stimulates natural hair cycle renewal.",
    },
  ];

  return (
    <section ref={ref} className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-black leading-tight">
                Three powerful mechanisms.
                <br />
                One advanced treatment.
              </h2>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Treatment process section
const ExosomesProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      title: "Consultation",
      description: "Comprehensive scalp analysis and personalized treatment planning",
    },
    {
      title: "Preparation",
      description: "Gentle scalp preparation and targeted application areas identified",
    },
    {
      title: "Treatment",
      description: "Precise exosome delivery using advanced micro-injection techniques",
    },
    {
      title: "Recovery",
      description: "Minimal downtime with personalized aftercare protocols",
    },
  ];

  return (
    <section ref={ref} className="bg-[#f5f5f7] py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-black">
            Four steps to cellular renewal.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#c17ff0] to-[#f5a53b] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA section
const ExosomesCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-black">
            Start your cellular renewal journey.
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Schedule a consultation to discover how exosome therapy can restore your hair's natural vitality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FAE151] hover:bg-[#f5d93a] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Schedule Consultation
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-200 text-black hover:bg-gray-50 px-8 py-4 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main component
export default function ExosomesPage() {
  return (
    <div className="min-h-screen bg-white">
      <FueNavBar />
      <main>
        <ExosomesHero />
        <ExosomesFeatures />
        <ExosomesProcess />
        <ExosomesCTA />
      </main>
      <SiteFooter />
    </div>
  );
}