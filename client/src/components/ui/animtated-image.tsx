import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedImage = ({ image, alt, initial, animate, transition }: any) => {
  console.log("THIS IS IMAGE?", image);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  return (
    <motion.img
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={transition}
      src={image}
      alt={alt}
      className="w-full h-full object-cover border-2 border-white shadow-sm"
    />
  );
};

export default AnimatedImage;
