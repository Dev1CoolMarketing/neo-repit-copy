import styles from "../../styles/fue.module.css";

import { motion } from "framer-motion";

export default function ExosomesHeader() {
  return (
    <section className="w-full flex min-h-screen flex-col justify-center items-center  md:mt-20 ">
      <div className="flex flex-col justify-center items-center header-height">
        <motion.div
          initial={{ x: 0, y: "40vh", scale: 3.0 }}
          animate={{ x: 0, y: 0, scale: 1.0 }}
          transition={{
            delay: 0.7,
            duration: 2,
            ease: "easeIn",
          }}
          className="flex flex-row justify-center relative z-24 text-5xl h-auto object-contain"
        >
          {"🧬"}
        </motion.div>
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
            <div className="flex flex-col items-center w-full ">
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
                <p className="pb-3"> FOLLICULAR </p>
                <p
                  className="text-4xl md:text-8xl text-[#] font-[600] tracking-wide font-bold text-center 
                   leading-[1.05] font-[600] tracking-[-0.02em] m-0 treatment-headline-gradient treatment-exo-hero"
                >
                  HYPERSOMES™
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
              Cellular regeneration.
            </p>
            <p
              className={
                styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
              }
            >
              Scientific precision.
            </p>
            <p
              className={
                styles.AdvancedFueTechnologyNaturalResultsRestoredConfidence_436_7767
              }
            >
              Promote natural regrowth.
            </p>
            <button
              className="custom-button-hypersomes w-full px-4 text-md  font-[500] text-lg py-2 rounded-full mt-5 text-white"
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
