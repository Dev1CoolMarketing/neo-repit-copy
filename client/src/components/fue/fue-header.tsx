import styles from "../../styles/fue.module.css";
import shinyFolliclePath from "@assets/shinyfollicle.png";
import { motion } from "framer-motion";
import { ProcessTimeline } from "@/pages/growth-factors2";
import HeroAnimateWrapper from "../ui/hero-animate-wrapper";

export default function FueHeader() {
  return (
    <section className="w-full flex min-h-screen flex-col justify-center items-center  md:mt-20 ">
      <div className="flex flex-col justify-center items-center header-height">
        <motion.img
          initial={{ x: 0, y: "40vh", scale: 3.0 }}
          animate={{ x: 0, y: 0, scale: 1.0 }}
          transition={{
            delay: 0.7,
            duration: 2,
            ease: "easeIn",
          }}
          src={"/assets/fue/shinyfollicle.png"}
          alt="Advanced Hair Follicle Technology"
          className="relative z-24 w-20 h-24 h-auto object-contain"
          loading="eager"
        />
        <motion.div
          initial={{ x: 0, y: "100vh" }}
          animate={{ x: 0, y: 0, scale: 1.0 }}
          transition={{
            delay: 0.7,
            duration: 2,
            ease: "easeIn",
          }}
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)", // force GPU layer
          }}
          className="flex flex-col jusitify-center items-center gap-5"
        >
          <div className="flex w-full flex-col items-center justify-center gap-5 px-5  ">
            <div className="flex flex-col items-center w-full">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl text-center font-[700] tracking-tight text-black leading-[0.85] pb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 1.5,
                  ease: "easeOut",
                }}
              >
                <p className="pb-3">FUE</p>
                <p
                  className="text-4xl md:text-8xl apple-gradient-sierra-blue font-[600] tracking-wide font-bold text-center 
                   leading-[1.05] font-[600] tracking-[-0.02em] m-0"
                >
                  HAIR TRANSPLANT
                </p>
              </motion.h1>
            </div>
          </div>
          <div className=" gap-1 md:text-2xl flex flex-col items-center lg:text-3xl font-[600] px-5">
            <p
              className={
                styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
              }
            >
              Advanced FUE technology.
            </p>
            <p
              className={
                styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
              }
            >
              Natural results.
            </p>
            <p
              className={
                styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
              }
            >
              Restored confidence.
            </p>
            <button
              className="custom-button-fue w-full px-4 text-md  font-[500] text-lg py-2 rounded-full mt-5 text-white"
              style={{ color: "white" }}
            >
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
