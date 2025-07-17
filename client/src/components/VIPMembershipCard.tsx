import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Star, Sparkles } from 'lucide-react';

interface VIPMembershipCardProps {
  memberName?: string;
  membershipLevel?: 'Gold' | 'Platinum';
  memberSince?: string;
  membershipNumber?: string;
  className?: string;
}

export const VIPMembershipCard: React.FC<VIPMembershipCardProps> = ({
  memberName = "Dr. Sarah Chen",
  membershipLevel = "Platinum",
  memberSince = "2024",
  membershipNumber = "4751 8392 6147 2850",
  className = ""
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardColors = {
    Gold: {
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
      accent: '#B8860B',
      text: '#2D1B05',
      shimmer: 'rgba(255, 255, 255, 0.4)'
    },
    Platinum: {
      background: 'linear-gradient(135deg, #E5E4E2 0%, #C0C0C0 50%, #A8A8A8 100%)',
      accent: '#696969',
      text: '#2C2C2C',
      shimmer: 'rgba(255, 255, 255, 0.6)'
    }
  };

  const colors = cardColors[membershipLevel];

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      <motion.div
        className="relative w-full h-64 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Front of Card */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: colors.background,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          {/* Card Material Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />

          {/* Holographic Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 20% 30%, ${colors.shimmer} 0%, transparent 50%),
                          radial-gradient(circle at 80% 70%, ${colors.shimmer} 0%, transparent 50%),
                          radial-gradient(circle at 60% 20%, ${colors.shimmer} 0%, transparent 30%)`
            }}
          />

          {/* Card Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Crown className="w-6 h-6" style={{ color: colors.text }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: colors.text }}>
                    VIP Member
                  </h3>
                  <p className="text-sm opacity-80" style={{ color: colors.text }}>
                    {membershipLevel}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xs opacity-60" style={{ color: colors.text }}>
                  Dr. Neo Hair Restoration
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3" style={{ color: colors.accent }} />
                  <span className="text-xs font-medium" style={{ color: colors.text }}>
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Section - Membership Number */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest opacity-60" style={{ color: colors.text }}>
                Membership Number
              </div>
              <div className="font-mono text-xl tracking-wider" style={{ color: colors.text }}>
                {membershipNumber}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest opacity-60 mb-1" style={{ color: colors.text }}>
                  Member Name
                </div>
                <div className="font-semibold text-lg" style={{ color: colors.text }}>
                  {memberName}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xs opacity-60" style={{ color: colors.text }}>
                  Member Since
                </div>
                <div className="font-mono text-sm" style={{ color: colors.text }}>
                  {memberSince}
                </div>
              </div>
            </div>
          </div>

          {/* Embossed Effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/20" />
        </motion.div>

        {/* Back of Card */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: colors.background,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Card Material Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />

          {/* Back Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6" style={{ color: colors.text }} />
                <span className="font-bold text-lg" style={{ color: colors.text }}>
                  VIP Benefits
                </span>
              </div>
              <div className="text-xs opacity-60" style={{ color: colors.text }}>
                Premium Access
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }} />
                <span className="text-sm font-medium" style={{ color: colors.text }}>
                  Priority scheduling for all treatments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }} />
                <span className="text-sm font-medium" style={{ color: colors.text }}>
                  Exclusive access to advanced therapies
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }} />
                <span className="text-sm font-medium" style={{ color: colors.text }}>
                  Complimentary consultations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }} />
                <span className="text-sm font-medium" style={{ color: colors.text }}>
                  24/7 concierge medical support
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-60" style={{ color: colors.text }}>
                Valid through 2025
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" style={{ color: colors.accent }} />
                <span className="text-xs font-medium" style={{ color: colors.text }}>
                  Premium Member
                </span>
              </div>
            </div>
          </div>

          {/* Embossed Effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/20" />
        </motion.div>
      </motion.div>

      {/* Click to flip instruction */}
      <motion.div
        className="text-center mt-4 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Click to flip card
      </motion.div>
    </div>
  );
};

export default VIPMembershipCard;