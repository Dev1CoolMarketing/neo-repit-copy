import styles from "../../styles/fue.module.css";
import shinyFolliclePath from "@assets/shinyfollicle.png";
import { motion } from "framer-motion";
import { ProcessTimeline } from "@/pages/growth-factors2";
import HeroAnimateWrapper from "../ui/hero-animate-wrapper";

export default function FueHeader() {
  return (
    <section className="w-full flex min-h-screen flex-col justify-center items-center  md:mt-20 ">
      <div className="flex flex-col items-center">
        <motion.img
          initial={{ x: 0, y: "40vh", scale: 5.0 }}
          animate={{ x: 0, y: 0, scale: 1.0 }}
          transition={{
            delay: 0.7,
            duration: 2,
            ease: "easeIn",
          }}
          src={shinyFolliclePath}
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
              {/* Main headline with growth factor emphasis */}
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-[700] tracking-tight text-black leading-[0.85]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 1.5,
                  ease: "easeOut",
                }}
              >
                GROWTH
                <br />
                <p className="text-6xl md:text-8xl text-[#FC8310] font-[600] tracking-wide font-bold text-center bg-gradient-to-r from-[#FC8310] to-[#c8b68f] bg-clip-text text-transparent">
                  HAIR TRANSPLANT
                </p>
              </motion.h1>
            </div>
          </div>
          <div className=" gap-1 md:text-2xl flex flex-col items-center lg:text-3xl font-[600] px-10">
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
              Minimally invasive. No downtime.
            </p>
            <button
              className="custom-button-growth-factors w-full text-md md:text-sm font-[500] px-4 text-lg py-2  rounded-full mt-5 text-white"
              style={{ color: "white" }}
            >
              Restored confidence.
            </button>
          </div>
        </motion.div>
      </div>
      {/* <div className="flex flex-col justify-center items-center">
        <motion.img
          initial={{ x: 0, y: "40vh", scale: 3.0 }}
          animate={{ x: 0, y: 0, scale: 1.0 }}
          transition={{
            delay: 0.7,
            duration: 2,
            ease: "easeIn",
          }}
          src={"/assets/fue/shinyfollicle.png?format=webp;avif;png&quality=70"}
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
                className="text-6xl md:text-8xl lg:text-9xl text-center font-[700] tracking-tight text-black leading-[0.85]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 1.5,
                  ease: "easeOut",
                }}
              >
                <p className="pb-3">FUE</p>
                <p className="text-4xl md:text-8xl text-[#FC8310] font-[600] tracking-wide font-bold text-center bg-gradient-to-r from-[#FC8310] to-[#c8b68f] bg-clip-text text-transparent">
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
      </div> */}
    </section>
  );
}
