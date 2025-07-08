
import styles from "../../styles/fue.module.css";
import shinyFolliclePath from "@assets/shinyfollicle.png";
import { motion } from "framer-motion";
import { ProcessTimeline } from "@/pages/growth-factors2";

export default function FueHeader() {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-16 md:mt-20 gap-5">
      <div className="flex w-full flex-col items-center gap-5 px-5 pt-2 ">
        <div className="flex flex-col items-center w-full">
          <motion.img
            src={shinyFolliclePath}
            alt="Advanced Hair Follicle Technology"
            className="relative z-24 w-20 h-24 h-auto object-contain"
            loading="eager"
          />
          <h1 className="text-7xl text-[] font-bold">FUE</h1>
        </div>
        <div className={styles.Container_436_7764}>
          <span className="text-xl text-[#FC8310] font-[600] tracking-wide font-bold text-center bg-gradient-to-r from-[#FC8310] to-[#c8b68f] bg-clip-text text-transparent">
            HAIR TRANSPLANT
          </span>
        </div>
      </div>
      <div className="md:text-2xl lg:text-3xl font-[600] px-10">
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
      </div>
      <div className=" p-4 custom-button-fue py-3 rounded-full w-3/4 md:w-fit mx-5 mb-10 max-w-sm">
        <div className={styles.Container_420_12581}>
          <span className="text-md text-white font-[700]">
            Book Consultation
          </span>
        </div>
      </div>
      <motion.div className={`max-w`}>
        {/* <motion.div className={styles.Container_436_7770}>
          <div className={styles.Component_3_436_7771}>
            <div className={styles.Container_420_12636}>
              <span className={styles.Text_420_12637}>Before</span>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.Margin_436_7772}>
          <div className={styles.Component_3_436_7773}>
            <div className={styles.Container_420_12636}>
              <span className={styles.Text_420_12637}>Planning</span>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.Margin_436_7774}>
          <div className={styles.Component_3_436_7775}>
            <div className={styles.Container_420_12636}>
              <span className={styles.Text_420_12637}>Process</span>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.Margin_436_7776}>
          <div className={styles.Component_3_436_7777}>
            <div className={styles.Container_420_12636}>
              <span className={styles.Text_420_12637}>Growth</span>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.Margin_436_7778}>
          <div className={styles.Component_3_436_7779}>
            <div className={styles.Container_420_12636}>
              <span className={styles.Text_420_12637}>After</span>
            </div>
          </div>
        </motion.div> */}
        <ProcessTimeline color="[#FC8310]" />
      </motion.div>
    </section>
  );
}
