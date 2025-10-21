import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FueStyleTreatmentCardProps {
  step: number;
  title: string;
  children:  string | ReactNode;
  features?: string[];
  image?: string;
  gradient?: string;
  learnMoreContent?: string;
  featured?: boolean;
  color?: string;
  inverse?: boolean;
  alignLeft?: boolean;
  moreDetails?: any[];
  subtitle?: string;
  subsetTitle?: string;
}

export default function FueStyleTreatmentCard({
  step,
  title,
  children,
  features = [],
  image,
  gradient = "from-[#0071e3] to-[#005bb5]",
  learnMoreContent,
  featured = false,
  color = "#32d74b",
  alignLeft = true,
  moreDetails = [],
  subsetTitle = '',
  subtitle = '',
  inverse = true, // Inverse True = White Background Black Text // Inverse False = Black Background White Text
}: FueStyleTreatmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  function hexToRgba(hex: any, alpha = 1) {
    hex = hex.replace("#", "");
    if (hex.length === 3)
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Example usage:

  const lightShadowColor = hexToRgba(color, 0.15);

  return (
    <motion.div
      className={`${
        inverse ? "bg-white" : "bg-black"
      } rounded-3xl shadow-lg overflow-hidden border border-gray-100 ${
        featured ? "lg:col-span-2 min-h-[580px]" : ""
      }`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex flex-col min-h-[460px] relative">
        {/* Content section */}
        <div
          className={`flex-1 p-8 px-8 pb-0 ${
            featured ? "lg:w-1/2 lg:ml-[50%] lg:pr-0" : ""
          }`}
        >
          <motion.div
            className={featured ? "max-w-lg" : "max-w-md"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className={`text-2xl font-[700] ${
                inverse ? "text-black" : "text-white"
              } text-black leading-tight mb-4 tracking-[-0.02em]"`}
            >
              {title}
            </h3>
            <p 
             className={`text-lg font-[700] ${
                inverse ? "text-black" : "text-white"
              } text-black leading-tight mb-4 tracking-[-0.02em]"`}
           dangerouslySetInnerHTML={{__html: subtitle}} ></p>
            <p
              className={`text-lg font-[500] ${
                inverse ? "text-gray-600" : "text-white"
              } leading-[1.4] tracking-[-0.01em] mb-6`}
              dangerouslySetInnerHTML={{__html: children as string}}
           >
           
            </p>
        <p 
             className={`text-lg font-[700] ${
                inverse ? "text-black" : "text-white"
              } text-black leading-tight mb-4 tracking-[-0.02em]"`}
            >{subsetTitle}</p>
            {/* Features list */}

            {/* Learn More Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 font-[600] text-md hover:brightness- transition-colors duration-200 text-[#ffffff]"
              whileHover={{ x: 3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span style={{color}} className="text-lg">Learn More</span>
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Plus className="h-4 w-4" color={color} />
              </motion.div>
            </motion.button>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className={`pt-4 ${
                  inverse ? "text-gray-700" : "text-white"
                } text-sm leading-relaxed font-[400] flex flex-col gap-5`}
              >
                {/* <div className="flex flex-col">
                <p className="text-red-500">Why FUE?</p>
                <ul className="list-disc">
                  <li>No scalpel, no stitches, no linear scar</li>
                  <li>Fast recovery, natural results</li>
                 <li>Works for both men and women of all ethnicities</li>
                </ul>
                </div>
                         <div className="flex flex-col">
                <p className="text-red-500">Why FUE?</p>
                <ul className="list-disc">
                  <li>No scalpel, no stitches, no linear scar</li>
                  <li>Fast recovery, natural results</li>
                 <li>Works for both men and women of all ethnicities</li>
                </ul>
                </div>

                         <div className="flex flex-col">
                <p className="text-red-500">Why FUE?</p>
                <ul className="list-disc">
                  <li>No scalpel, no stitches, no linear scar</li>
                  <li>Fast recovery, natural results</li>
                 <li>Works for both men and women of all ethnicities</li>
                </ul>
                </div> */}
                {moreDetails.map((item, index) => {
                  if (item.type === "list") {
                    return (
                      <motion.div
                        className="space-y-3 mb-6"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.4,
                              delay: 0.5 + index * 0.1, }}
                      >
                                 <h3 className="text-xl font-extrabold">{item.title}</h3>
                                 <p dangerouslySetInnerHTML={{__html: item.subtitle}}></p>
                      {item.bullets.map((bullet, bulletIndex)=>  
                       {
                        return <motion.div
                            key={bulletIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.5 + index * 0.1,
                            }}
                          >
                   
                            <div
                              className={`ml-5 bg-[${color}]/10 rounded-full flex-shrink-0 flex items-center`}
                            >
                             {item.style !== 'number' ? <div className={`w-2 h-2 rounded-full mt-2`} style={{backgroundColor: color}} /> : 
                             <div style={{color: color}}> {bulletIndex+1}.</div>}
                            </div>
                            {typeof bullet !== 'string' ?
                                  <motion.div
                        className="space-y-3 mb-"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.4,
                              delay: 0.5 + index * 0.1, }}
                      >
                                 <h3 className="text-md font-extrabold">{bullet.title}</h3>
                             {  bullet.type === 'list' ?  
                             
                            bullet.bullets.map((nestedBullet, nestedBulletIndex) => {
                              return (      <motion.div
                            key={bulletIndex}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.5 + index * 0.1,
                            }}
                          >
                            <div
                              className={`ml-5 bg-[${color}]/10 rounded-full p-1 mt-1 flex-shrink-0 flex items-center`}
                            >
                             {nestedBullet.style !== 'number' ? <div className={`w-2 h-2 rounded-full`} style={{backgroundColor: color}} /> : 
                             <div style={{color: color}}> {nestedBullet+1}.</div>}
                            </div>
                 
                            <span
                              className={`${
                                inverse ? "text-gray-700" : "text-white"
                              } text-sm font-[500] leading-relaxed`}
                              dangerouslySetInnerHTML={{__html: nestedBullet}}
                            >
                            </span>
                          </motion.div>)
                            }) :
                            <span> Value </span>
                            }    
                      
                          </motion.div>
                            
                            :
                            <span
                              className={`${
                                inverse ? "text-gray-700" : "text-white"
                              } text-sm font-[500] leading-relaxed`}
                              dangerouslySetInnerHTML={{__html: bullet}}
                            >
                            </span>}
                          </motion.div>})}
                        
  
                      </motion.div>
                    );
                  }
                  else return <div>
                    {item.title ? <h2 className="text-2xl font-bold">{item.title}</h2> : null}
                    <p dangerouslySetInnerHTML={{__html: item.value}}></p>
                    </div>;
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Apple-style floating image section */}
        <div
          className={`flex-shrink-0 ${
            featured
              ? "lg:absolute lg:left-0 lg:top-0 lg:w-1/2 lg:h-full lg:pointer-events-none lg:overflow-hidden"
              : "p-8 pt-0"
          }`}
        >
          {featured ? (
            // Featured: Device emerges from left edge like Apple product pages
            alignLeft ? (
              <div className="w-full h-full flex items-center justify-start relative">
                <motion.img
                  src={image}
                  alt={`${title} illustration`}
                  className="w-full h-auto object-contain max-h-[85%] ml-[-15%]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{
                    scale: title.includes("Recovery") ? 1.03 : 1.05,
                    x: title.includes("Recovery") ? 5 : 10,
                    rotateY: title.includes("Recovery") ? 2 : 3,
                    rotateZ: title.includes("Recovery") ? 0.5 : 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                  style={{
                    // filter: `drop-shadow(0 30px 60px ${lightShadowColor}) drop-shadow(0 15px 30px rgba(0,0,0,0.2))`,
                    transformStyle: "preserve-3d",
                  }}
                />
              </div> // Align Right Image Styles
            ) : (
              <div className="w-full h-full flex items-center justify-end relative">
                <motion.img
                  src={image}
                  alt={`${title} illustration`}
                  className="w-full h-auto object-contain max-h-[85%] mr-[-15%] pb-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{
                    scale: title.includes("Recovery") ? 1.03 : 1.05,
                    x: title.includes("Recovery") ? 5 : 10,
                    rotateY: title.includes("Recovery") ? 2 : 3,
                    rotateZ: title.includes("Recovery") ? 0.5 : 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                  style={{
                    // filter: `drop-shadow(0 30px 60px ${lightShadowColor}) drop-shadow(0 15px 30px rgba(0,0,0,0.2))`,

                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            )
          ) : (
            // Regular cards: Keep existing container design
            <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
              {image ? (
                <motion.img
                  src={image}
                  alt={`${title} illustration`}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-white to-gray-200 rounded-2xl shadow-lg flex items-center justify-center border border-gray-200"
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl opacity-50"></div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
