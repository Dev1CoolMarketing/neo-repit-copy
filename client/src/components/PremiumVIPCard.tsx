import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Crown, Shield, Star, Sparkles, Lock, Award } from 'lucide-react';

interface PremiumVIPCardProps {
  memberName?: string;
  membershipLevel?: 'Gold' | 'Platinum' | 'Diamond';
  memberSince?: string;
  membershipNumber?: string;
  className?: string;
}

export const PremiumVIPCard: React.FC<PremiumVIPCardProps> = ({
  memberName = "Dr. Sarah Chen",
  membershipLevel = "Platinum",
  memberSince = "2024",
  membershipNumber = "4751 8392 6147 2850",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  // Card configurations
  const cardConfigs = {
    Gold: {
      background: `
        radial-gradient(circle at 30% 40%, rgba(255, 215, 0, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 70% 60%, rgba(255, 165, 0, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)
      `,
      shimmer: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
      accent: '#B8860B',
      text: '#2D1B05',
      textSecondary: '#5D4A1A',
      glow: 'rgba(255, 215, 0, 0.4)',
      icon: Crown,
      premium: '24K Gold'
    },
    Platinum: {
      background: `
        radial-gradient(circle at 30% 40%, rgba(192, 192, 192, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 70% 60%, rgba(169, 169, 169, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #F0F0F0 0%, #C0C0C0 50%, #A8A8A8 100%)
      `,
      shimmer: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.9) 50%, transparent 60%)',
      accent: '#696969',
      text: '#2C2C2C',
      textSecondary: '#4A4A4A',
      glow: 'rgba(192, 192, 192, 0.5)',
      icon: Shield,
      premium: 'Platinum'
    },
    Diamond: {
      background: `
        radial-gradient(circle at 30% 40%, rgba(185, 242, 255, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 70% 60%, rgba(230, 230, 250, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #F8F8FF 0%, #E6E6FA 50%, #D8BFD8 100%)
      `,
      shimmer: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 1) 50%, transparent 60%)',
      accent: '#4B0082',
      text: '#1A1A2E',
      textSecondary: '#16213E',
      glow: 'rgba(185, 242, 255, 0.6)',
      icon: Award,
      premium: 'Diamond Elite'
    }
  };

  const config = cardConfigs[membershipLevel];
  const IconComponent = config.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div className={`relative w-full max-w-sm mx-auto perspective-1000 ${className}`}>
      <motion.div
        ref={cardRef}
        className="relative w-full h-60 cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Card Base */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            background: config.background,
            boxShadow: `
              0 20px 40px -12px ${config.glow},
              0 8px 16px -4px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2)
            `
          }}
          animate={{
            boxShadow: isHovered 
              ? `0 30px 60px -12px ${config.glow}, 0 12px 24px -4px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)`
              : `0 20px 40px -12px ${config.glow}, 0 8px 16px -4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Holographic overlay */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 30%)
              `
            }}
          />

          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 -skew-x-12"
            style={{ background: config.shimmer }}
            animate={{
              x: isHovered ? ['0%', '100%'] : ['-100%', '100%']
            }}
            transition={{
              duration: isHovered ? 1.5 : 3,
              repeat: Infinity,
              repeatDelay: isHovered ? 1 : 2,
              ease: 'easeInOut'
            }}
          />

          {/* Micro-perforations effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          </div>

          {/* Card Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: config.text }} />
                </motion.div>
                <div>
                  <h3 className="text-sm font-bold tracking-wider uppercase" style={{ color: config.text }}>
                    VIP Member
                  </h3>
                  <p className="text-xs opacity-80 font-medium" style={{ color: config.textSecondary }}>
                    {config.premium}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xs opacity-60 font-medium" style={{ color: config.textSecondary }}>
                  Dr. Neo Hair
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3" style={{ color: config.accent }} />
                  <span className="text-xs font-bold" style={{ color: config.text }}>
                    {membershipLevel}
                  </span>
                </div>
              </div>
            </div>

            {/* Membership Number */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest opacity-60 font-medium" style={{ color: config.textSecondary }}>
                Member ID
              </div>
              <div className="font-mono text-lg tracking-wider font-medium" style={{ color: config.text }}>
                {membershipNumber}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-end justify-between">
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest opacity-60 mb-1 font-medium" style={{ color: config.textSecondary }}>
                  Member
                </div>
                <div className="font-semibold text-base" style={{ color: config.text }}>
                  {memberName}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xs opacity-60 font-medium" style={{ color: config.textSecondary }}>
                  Since
                </div>
                <div className="font-mono text-sm font-medium" style={{ color: config.text }}>
                  {memberSince}
                </div>
              </div>
            </div>
          </div>

          {/* Embossed border effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/30" />
          
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 rounded-2xl shadow-inner" />
        </motion.div>

        {/* Floating security chip */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-6 bg-gradient-to-br from-amber-300 to-amber-500 rounded-sm shadow-lg"
          style={{ transform: 'translateZ(10px)' }}
          animate={{
            rotateY: isHovered ? [0, 5, 0] : 0
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-sm" />
          <Lock className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-800" />
        </motion.div>
      </motion.div>

      {/* Reflection effect */}
      <motion.div
        className="absolute top-full left-0 w-full h-20 opacity-20 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${config.glow}, transparent)`,
          transform: 'scaleY(-1) translateY(10px)',
          filter: 'blur(10px)'
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0.1
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default PremiumVIPCard;