import React from 'react';
import { motion } from 'framer-motion';

interface FueStyleTreatmentCardProps {
  step: number;
  title: string;
  children: React.ReactNode;
  features?: string[];
  image?: string;
  gradient?: string;
}

export default function FueStyleTreatmentCard({ 
  step, 
  title, 
  children,
  features = [],
  image,
  gradient = "from-[#0071e3] to-[#005bb5]"
}: FueStyleTreatmentCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-[18px] shadow-sm overflow-hidden border border-gray-100"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col min-h-[460px] relative">
        {/* Step indicator - circular with gradient */}
        <div className="absolute top-6 left-6 z-10">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-lg">{step}</span>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 p-8 pt-20">
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold text-black leading-tight mb-4 tracking-[-0.02em]">
              {title}
            </h3>
            <div className="text-lg text-gray-600 leading-relaxed mb-6">
              {children}
            </div>
            
            {/* Features list */}
            {features.length > 0 && (
              <div className="space-y-3">
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
          </div>
        </div>

        {/* Image section */}
        {image && (
          <div className="flex-shrink-0 p-8 pt-0">
            <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
              <motion.img
                src={image}
                alt={`${title} illustration`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}