import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FueStyleTreatmentCardProps {
  step: number;
  title: string;
  children: React.ReactNode;
  features?: string[];
  image?: string;
  gradient?: string;
  learnMoreContent?: string;
}

export default function FueStyleTreatmentCard({ 
  step, 
  title, 
  children,
  features = [],
  image,
  gradient = "from-[#0071e3] to-[#005bb5]",
  learnMoreContent
}: FueStyleTreatmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-[18px] shadow-sm overflow-hidden border border-gray-100"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col min-h-[460px] relative">
        {/* Content section */}
        <div className="flex-1 p-8">
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold text-black leading-tight mb-4 tracking-[-0.057px]">
              {title}
            </h3>
            <p className="text-lg font-[600] text-gray-500 leading-[23px] tracking-[-0.057px] mb-6">
              {children}
            </p>
            
            {/* Features list */}
            {features.length > 0 && (
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#A87B23]/10 rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#A87B23] rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Learn More Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-[#A87B23] font-bold text-md hover:text-[#8B6B1F] transition-colors duration-200"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <span>Learn More</span>
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Plus className="h-4 w-4" />
              </motion.div>
            </motion.button>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{ 
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 text-gray-600 text-sm leading-relaxed">
                {learnMoreContent || "Additional detailed information about this treatment step will be displayed here. This includes specific protocols, expected outcomes, and important considerations for patients."}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Apple-style floating image section */}
        <div className="flex-shrink-0 p-8 pt-0">
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
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl opacity-50"></div>
              </motion.div>
            )}
            
            {/* Floating elements for Apple-style effect */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60"
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full opacity-50"
              animate={{
                y: [0, -6, 0],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}