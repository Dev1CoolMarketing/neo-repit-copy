import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroAnimateWrapper from "../ui/hero-animate-wrapper";

function HeroContent() {
  return (
    <div className="text- mt-5">
      {/* Bold Apple Fitness-style Hero with Growth Factor twist */}
      <motion.div
        className="space-y-6 flex flex-col w-[100%] text-center"
        
      >
        {/* Main headline with growth factor emphasis */}
        <motion.h1 className="text-2xl md:text-8xl lg:text-9xl font-[700] tracking-tight text-white leading-[0.85]">
          Text your hairline.
        </motion.h1>
        <motion.h1 className="text-2xl md:text-8xl lg:text-9xl font-[700] tracking-tight text-white leading-[0.85]">
          Get expert advice.
        </motion.h1>

        {/* Powerful subtitle */}
        <motion.p className="text-md md:text3xl lg:text-4xl text-white font-[400] leading-tight mx-auto">
          No awkard appointments. No pressure. just clarity-- from licsensed
          pros who get it.
        </motion.p>
      </motion.div>

      {/* Clean CTA section */}
      <motion.div className="mt-6 space-y-4 flex w-full justify-center items-center">
        <motion.button
          className="  rounded-full hover:bg-[#2fb943] transition-all duration-300 shadow-2xl
          p-4 custom-button-growth-factors py-3 rounded-full w-fit md:w-fit mb-10 max-w-sm"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 25px 50px rgba(50,215,75,0.4)",
            y: -2,
          }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="flex flex-row">
            <span className="text-md text-black font-[700]">
              Text the Hotline
            </span>
            <ArrowRight className="text-black ml-2" />
          </div>
        </motion.button>

        {/* <motion.p
          className="text-[#32d74b] text-lg font-[500]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          89% success rate
        </motion.p> */}
      </motion.div>
    </div>
  );
}
export function HotlineHeroSection() {
  return (
    <HeroAnimateWrapper>
      <section className="relative  bg-black overflow-hidden">
        {/* Dynamic growth factor-inspired background */}
        {/* Floating growth factor particles */}

        <div className="relative z-10 flex flex-col justify-center minh-screen section-content mt-15">
          <div className="flex-1 flex flex-col justify-center space-y-24 py-12">
            <HeroContent />
            {/* <ProcessTimeline />*/}
          </div>
        </div>
      </section>
    </HeroAnimateWrapper>
  );
}
