import React from 'react';
import { motion } from 'framer-motion';
import VIPMembershipCard from './VIPMembershipCard';
import PremiumVIPCard from './PremiumVIPCard';

interface VIPCardShowcaseProps {
  className?: string;
}

export const VIPCardShowcase: React.FC<VIPCardShowcaseProps> = ({ className = "" }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Premium Membership Cards
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the luxury of premium membership with our Apple Card-inspired design
          </p>
        </motion.div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
          {/* Gold Card */}
          <motion.div
            className="relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gold Membership</h3>
              <p className="text-gray-600 text-sm">Premium access to all standard treatments</p>
            </div>
            <PremiumVIPCard 
              memberName="Michael Johnson"
              membershipLevel="Gold"
              memberSince="2023"
              membershipNumber="4751 8392 6147 2850"
            />
          </motion.div>

          {/* Platinum Card */}
          <motion.div
            className="relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Platinum Membership</h3>
              <p className="text-gray-600 text-sm">Exclusive access to advanced therapies</p>
            </div>
            <PremiumVIPCard 
              memberName="Dr. Sarah Chen"
              membershipLevel="Platinum"
              memberSince="2024"
              membershipNumber="4751 8392 6147 2850"
            />
          </motion.div>

          {/* Diamond Card */}
          <motion.div
            className="relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Diamond Elite</h3>
              <p className="text-gray-600 text-sm">Ultimate luxury with concierge service</p>
            </div>
            <PremiumVIPCard 
              memberName="Jennifer Walsh"
              membershipLevel="Diamond"
              memberSince="2025"
              membershipNumber="4751 8392 6147 2850"
            />
          </motion.div>
        </div>

        {/* Interactive Demo Section */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Experience</h3>
            <p className="text-gray-600 mb-6">Hover over any card to see realistic lighting effects and 3D transforms</p>
            <div className="max-w-xs mx-auto">
              <PremiumVIPCard 
                memberName="Your Name"
                membershipLevel="Platinum"
                memberSince="2025"
                membershipNumber="4751 8392 6147 2850"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure & Premium</h4>
            <p className="text-gray-600 text-sm">Bank-level security with premium material design</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Access</h4>
            <p className="text-gray-600 text-sm">Immediate activation with digital wallet integration</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Benefits</h4>
            <p className="text-gray-600 text-sm">Priority access and special member pricing</p>
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          className="mt-16 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Card Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Material & Design</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium titanium construction</li>
                <li>• Laser-etched member details</li>
                <li>• Holographic security elements</li>
                <li>• Apple Card-inspired minimalism</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Contactless payment integration</li>
                <li>• Digital wallet compatibility</li>
                <li>• Biometric authentication</li>
                <li>• Real-time benefit tracking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VIPCardShowcase;