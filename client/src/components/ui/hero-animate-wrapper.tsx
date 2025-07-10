// components/Hero.jsx
import { motion } from "framer-motion";

export default function HeroAnimateWrapper({ children }: { children: any }) {
  return (
    <motion.section
      initial={{ x: 0, y: 250 }}
      animate={{ x: 0, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 1.2,
        ease: "easeIn",
      }}
      className="relative w-full h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
}
