import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HotLineHowItWorks() {
  const howItWorks = [
    "Snap a photo of your hairline",
    "Text us your concern.",
    "We analyze and reply same-day.",
    "You get clear options - no obligations, no upsell.",
  ];
  return (
    <div className="text- mt-5 section-content pb-10">
      {/* Bold Apple Fitness-style Hero with Growth Factor twist */}
      <motion.div
        className="space-y-6 flex flex-col w-[60%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="">
          <h1 className="font-[600] text-xl">How It Works</h1>
        </div>
        <div className="text-white">
          <ol
            className="flex flex-col gap-5"
            style={{
              paddingLeft: 0,
            }}
          >
            {howItWorks.map((item, index) => (
              <li className="flex flex-row">
                <span className="font-[700] mr-1">{index + 1}.</span>
                <div>
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </div>
  );
}
