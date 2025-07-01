import { motion } from "framer-motion";

// Assessment Icon with morphing transitions
export function AssessmentIcon({ isActive, isHovered }) {
  const morphVariants = {
    idle: {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
    },
    active: {
      scale: 1.15,
      rotateY: 5,
      rotateX: 5,
    },
    hovered: {
      scale: 1.2,
      rotateY: 15,
      rotateX: 10,
    },
  };

  const currentState = isHovered ? "hovered" : isActive ? "active" : "idle";

  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="drop-shadow-2xl"
      style={{ filter: "drop-shadow(0 8px 32px rgba(166, 254, 0, 0.3))" }}
      variants={morphVariants}
      animate={currentState}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Main background with morphing */}
      <motion.circle
        cx="18"
        cy="18"
        r="16"
        fill="url(#assessmentDarkGradient)"
        animate={{
          scale: isActive || isHovered ? 1.05 : 1,
          r: isActive || isHovered ? [16, 15.5, 16] : 16,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Inner glow ring with pulsing */}
      <motion.circle
        cx="18"
        cy="18"
        r="14"
        fill="none"
        stroke="url(#glowGradient)"
        strokeWidth="0.5"
        animate={{
          opacity: isActive || isHovered ? [0.3, 0.8, 0.3] : 0.3,
          r: isActive || isHovered ? [14, 13, 14] : 14,
          strokeWidth: isActive || isHovered ? [0.5, 1, 0.5] : 0.5,
        }}
        transition={{
          duration: 2,
          repeat: isActive || isHovered ? Infinity : 0,
        }}
      />

      {/* 3D Scalp with morphing shape */}
      <motion.path
        d="M10 14C10 9 13 7 18 7C23 7 26 9 26 14C26 16.5 24 19 22 21C20 23 18 25 18 25C18 25 16 23 14 21C12 19 10 16.5 10 14Z"
        fill="url(#scalpGradient)"
        stroke="rgba(166, 254, 0, 0.4)"
        strokeWidth="0.8"
        animate={{
          fill:
            isActive || isHovered
              ? "url(#scalpActiveGradient)"
              : "url(#scalpGradient)",
          d:
            isActive || isHovered
              ? "M10 14C10 8.5 13 6.5 18 6.5C23 6.5 26 8.5 26 14C26 17 24 19.5 22 21.5C20 23.5 18 25.5 18 25.5C18 25.5 16 23.5 14 21.5C12 19.5 10 17 10 14Z"
              : "M10 14C10 9 13 7 18 7C23 7 26 9 26 14C26 16.5 24 19 22 21C20 23 18 25 18 25C18 25 16 23 14 21C12 19 10 16.5 10 14Z",
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Hair follicles with staggered morphing */}
      {[...Array(8)].map((_, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={13 + (i % 4) * 2.5}
            cy={12 + Math.floor(i / 4) * 3}
            r="0.8"
            fill="url(#follicleGradient)"
            animate={{
              scale: isActive || isHovered ? [1, 1.5, 1.2, 1] : 1,
              opacity: isActive || isHovered ? [0.6, 1, 0.8, 0.6] : 0.6,
              r: isActive || isHovered ? [0.8, 1.2, 1, 0.8] : 0.8,
            }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              repeat: isActive || isHovered ? Infinity : 0,
            }}
          />
          {/* 3D highlight with morphing */}
          <motion.circle
            cx={13 + (i % 4) * 2.5 - 0.2}
            cy={12 + Math.floor(i / 4) * 3 - 0.2}
            r="0.3"
            fill="rgba(166, 254, 0, 0.8)"
            animate={{
              opacity: isActive || isHovered ? [0.4, 0.8, 0.6, 0.4] : 0.4,
              scale: isActive || isHovered ? [1, 1.3, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: isActive || isHovered ? Infinity : 0,
            }}
          />
        </motion.g>
      ))}

      {/* Advanced scanning device with complex morphing */}
      <motion.g
        animate={{
          x: isHovered ? 2 : 0,
          y: isHovered ? -2 : 0,
          scale: isActive || isHovered ? 1.1 : 1,
          rotate: isHovered ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          duration: 0.4,
          repeat: isHovered ? Infinity : 0,
          repeatType: "reverse",
        }}
      >
        {/* Scanner body */}
        <motion.circle
          cx="22"
          cy="22"
          r="5"
          fill="url(#scannerGradient)"
          stroke="rgba(166, 254, 0, 0.6)"
          strokeWidth="1"
          animate={{
            r: isActive || isHovered ? [5, 5.5, 5] : 5,
            strokeWidth: isActive || isHovered ? [1, 1.5, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
        {/* Scanner lens with morphing */}
        <motion.circle
          cx="22"
          cy="22"
          r="3"
          fill="url(#lensGradient)"
          animate={{
            r: isActive || isHovered ? [3, 2.5, 3] : 3,
          }}
          transition={{
            duration: 1.5,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
        {/* Lens highlight */}
        <motion.circle
          cx="21.5"
          cy="21.5"
          r="1"
          fill="rgba(166, 254, 0, 0.9)"
          animate={{
            opacity: isActive || isHovered ? [0.8, 1, 0.8] : 0.8,
            scale: isActive || isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
      </motion.g>

      {/* Scanning waves with advanced morphing */}
      {[...Array(3)].map((_, i) => (
        <motion.circle
          key={i}
          cx="22"
          cy="22"
          r={4 + i * 2}
          fill="none"
          stroke="rgba(166, 254, 0, 0.6)"
          strokeWidth="0.5"
          opacity="0"
          animate={{
            r:
              isActive || isHovered
                ? [4 + i * 2, 10 + i * 2, 4 + i * 2]
                : 4 + i * 2,
            opacity: isActive || isHovered ? [0.8, 0, 0.8] : 0,
            strokeWidth: isActive || isHovered ? [0.5, 0.2, 0.5] : 0.5,
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
      ))}

      <defs>
        <linearGradient
          id="assessmentDarkGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="50%" stopColor="#111827" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a6fe00" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="scalpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient
          id="scalpActiveGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
        <linearGradient
          id="follicleGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#a6fe00" />
          <stop offset="100%" stopColor="#65a30d" />
        </linearGradient>
        <linearGradient
          id="scannerGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="50%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
        <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// Enhanced Preparation Icon with morphing
export function PreparationIcon({ isActive, isHovered }) {
  const morphVariants = {
    idle: { scale: 1, rotateZ: 0 },
    active: { scale: 1.15, rotateZ: 2 },
    hovered: { scale: 1.2, rotateZ: 5 },
  };

  const currentState = isHovered ? "hovered" : isActive ? "active" : "idle";

  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="drop-shadow-2xl"
      style={{ filter: "drop-shadow(0 8px 32px rgba(166, 254, 0, 0.3))" }}
      variants={morphVariants}
      animate={currentState}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Main background with pulsing */}
      <motion.circle
        cx="18"
        cy="18"
        r="16"
        fill="url(#preparationDarkGradient)"
        animate={{
          scale: isActive || isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isActive || isHovered ? Infinity : 0,
        }}
      />

      {/* Laboratory platform with morphing */}
      <motion.rect
        x="8"
        y="24"
        width="20"
        height="4"
        rx="2"
        fill="url(#platformGradient)"
        animate={{
          y: isActive || isHovered ? [24, 23.5, 24] : 24,
          height: isActive || isHovered ? [4, 4.5, 4] : 4,
        }}
        transition={{
          duration: 1.5,
          repeat: isActive || isHovered ? Infinity : 0,
        }}
      />

      {/* Advanced Serum Vial 1 with complex morphing */}
      <motion.g
        animate={{
          y: isActive || isHovered ? [0, -2, 0] : 0,
          scale: isActive || isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2.5,
          repeat: isActive || isHovered ? Infinity : 0,
        }}
      >
        <motion.rect
          x="11"
          y="10"
          width="5"
          height="14"
          rx="2"
          fill="url(#vialGradient)"
          stroke="rgba(166, 254, 0, 0.4)"
          strokeWidth="0.8"
          animate={{
            height: isActive || isHovered ? [14, 14.5, 14] : 14,
            strokeWidth: isActive || isHovered ? [0.8, 1.2, 0.8] : 0.8,
          }}
          transition={{
            duration: 2,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
        {/* Serum content with advanced morphing */}
        <motion.rect
          x="11.8"
          y="18"
          width="3.4"
          height="5.5"
          rx="1"
          fill="url(#serumGradient)"
          animate={{
            height: isActive || isHovered ? [5.5, 7, 6, 5.5] : 5.5,
            opacity: isActive || isHovered ? [0.8, 1, 0.9, 0.8] : 0.8,
            y: isActive || isHovered ? [18, 16, 17, 18] : 18,
          }}
          transition={{
            duration: 2,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
      </motion.g>

      {/* Enhanced molecular particles with morphing trails */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          cx={12 + i * 2.5}
          cy={26 + Math.sin(i) * 2}
          r="0.4"
          fill="#a6fe00"
          opacity="0.7"
          animate={{
            y: isActive || isHovered ? [0, -12, -8, 0] : 0,
            opacity: isActive || isHovered ? [0.7, 0, 0.3, 0.7] : 0.2,
            scale: isActive || isHovered ? [1, 1.5, 1.2, 1] : 1,
            r: isActive || isHovered ? [0.4, 0.6, 0.5, 0.4] : 0.4,
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
      ))}

      <defs>
        <linearGradient
          id="preparationDarkGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="50%" stopColor="#111827" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient
          id="platformGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
        <linearGradient id="vialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="50%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
        <linearGradient id="serumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a6fe00" />
          <stop offset="100%" stopColor="#65a30d" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// Continue with other enhanced icons...
export function TreatmentIcon({ isActive, isHovered }) {
  const morphVariants = {
    idle: { scale: 1, rotateX: 0 },
    active: { scale: 1.15, rotateX: 5 },
    hovered: { scale: 1.2, rotateX: 10 },
  };

  const currentState = isHovered ? "hovered" : isActive ? "active" : "idle";

  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="drop-shadow-2xl"
      style={{ filter: "drop-shadow(0 8px 32px rgba(166, 254, 0, 0.3))" }}
      variants={morphVariants}
      animate={currentState}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Main background */}
      <motion.circle
        cx="18"
        cy="18"
        r="16"
        fill="url(#treatmentDarkGradient)"
        animate={{
          scale: isActive || isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 1.5,
          repeat: isActive || isHovered ? Infinity : 0,
        }}
      />

      {/* Device handle with advanced morphing */}
      <motion.rect
        x="15"
        y="5"
        width="6"
        height="16"
        rx="3"
        fill="url(#deviceHandleGradient)"
        stroke="rgba(166, 254, 0, 0.4)"
        strokeWidth="0.8"
        animate={{
          y: isActive || isHovered ? [5, 4, 3.5, 5] : 5,
          height: isActive || isHovered ? [16, 16.5, 17, 16] : 16,
          strokeWidth: isActive || isHovered ? [0.8, 1.2, 1, 0.8] : 0.8,
        }}
        transition={{
          duration: 1,
          repeat: isActive || isHovered ? Infinity : 0,
        }}
      />

      {/* Enhanced microneedles with morphing */}
      {[...Array(12)].map((_, i) => (
        <motion.line
          key={i}
          x1={14 + (i % 4) * 2}
          y1="25"
          x2={14 + (i % 4) * 2}
          y2="27.5"
          stroke="#a6fe00"
          strokeWidth="0.4"
          strokeLinecap="round"
          animate={{
            y1: isActive || isHovered ? [25, 24, 23, 25] : 25,
            y2: isActive || isHovered ? [27.5, 26.5, 25.5, 27.5] : 27.5,
            opacity: isActive || isHovered ? [1, 0.6, 0.3, 1] : 1,
            strokeWidth: isActive || isHovered ? [0.4, 0.6, 0.8, 0.4] : 0.4,
          }}
          transition={{
            duration: 1,
            delay: i * 0.03,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
      ))}

      {/* Enhanced energy waves with morphing */}
      {[...Array(4)].map((_, i) => (
        <motion.circle
          key={i}
          cx="18"
          cy="26"
          r={4 + i * 2}
          fill="none"
          stroke="#a6fe00"
          strokeWidth="0.6"
          opacity="0"
          animate={{
            r:
              isActive || isHovered
                ? [4 + i * 2, 12 + i * 2, 8 + i * 2, 4 + i * 2]
                : 4 + i * 2,
            opacity: isActive || isHovered ? [0.9, 0, 0.4, 0.9] : 0,
            strokeWidth: isActive || isHovered ? [0.6, 0.2, 0.4, 0.6] : 0.6,
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
      ))}

      <defs>
        <linearGradient
          id="treatmentDarkGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="50%" stopColor="#111827" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient
          id="deviceHandleGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="50%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export function RecoveryIcon({ isActive, isHovered }) {
  const morphVariants = {
    idle: { scale: 1, rotateY: 0 },
    active: { scale: 1.15, rotateY: 3 },
    hovered: { scale: 1.2, rotateY: 8 },
  };

  const currentState = isHovered ? "hovered" : isActive ? "active" : "idle";

  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="drop-shadow-2xl"
      style={{ filter: "drop-shadow(0 8px 32px rgba(166, 254, 0, 0.3))" }}
      variants={morphVariants}
      animate={currentState}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Main background */}
      <motion.circle
        cx="18"
        cy="18"
        r="16"
        fill="url(#recoveryDarkGradient)"
        animate={{
          scale: isActive || isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isActive || isHovered ? Infinity : 0,
        }}
      />

      {/* Enhanced hair strands with advanced morphing */}
      {[...Array(10)].map((_, i) => (
        <motion.g key={i}>
          <motion.path
            d={`M ${8 + i * 2} 25 Q ${8 + i * 2 + Math.sin(i) * 0.8} ${20 - i * 0.4} ${8 + i * 2 + Math.sin(i) * 1.5} ${15 - i * 0.6}`}
            stroke="url(#hairStrandGradient)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: isActive || isHovered ? [0, 1, 0.8, 1] : 0.7,
              opacity: isActive || isHovered ? [0.6, 1, 0.8, 1] : 0.7,
              strokeWidth: isActive || isHovered ? [1.2, 1.5, 1.3, 1.2] : 1.2,
              d:
                isActive || isHovered
                  ? `M ${8 + i * 2} 25 Q ${8 + i * 2 + Math.sin(i) * 1} ${19 - i * 0.4} ${8 + i * 2 + Math.sin(i) * 2} ${14 - i * 0.6}`
                  : `M ${8 + i * 2} 25 Q ${8 + i * 2 + Math.sin(i) * 0.8} ${20 - i * 0.4} ${8 + i * 2 + Math.sin(i) * 1.5} ${15 - i * 0.6}`,
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.1,
              repeat: isActive || isHovered ? Infinity : 0,
            }}
          />
        </motion.g>
      ))}

      <defs>
        <linearGradient
          id="recoveryDarkGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="50%" stopColor="#111827" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient
          id="hairStrandGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#a6fe00" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export function ResultsIcon({ isActive, isHovered }) {
  const morphVariants = {
    idle: { scale: 1, rotateZ: 0 },
    active: { scale: 1.15, rotateZ: 2 },
    hovered: { scale: 1.2, rotateZ: 5 },
  };

  const currentState = isHovered ? "hovered" : isActive ? "active" : "idle";

  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="drop-shadow-2xl"
      style={{ filter: "drop-shadow(0 8px 32px rgba(166, 254, 0, 0.3))" }}
      variants={morphVariants}
      animate={currentState}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Main background */}
      <motion.circle
        cx="18"
        cy="18"
        r="16"
        fill="url(#resultsDarkGradient)"
        animate={{
          scale: isActive || isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isActive || isHovered ? Infinity : 0,
        }}
      />

      {/* Enhanced chart bars with morphing */}
      {[...Array(6)].map((_, i) => (
        <motion.rect
          key={i}
          x={11.5 + i * 2.2}
          y={23 - (i + 1) * 1.8}
          width="1.8"
          height={(i + 1) * 1.8}
          rx="0.5"
          fill={
            i < 2 ? "url(#barNegativeGradient)" : "url(#barPositiveGradient)"
          }
          animate={{
            height:
              isActive || isHovered
                ? [(i + 1) * 1.8, (i + 2) * 1.8, (i + 1.5) * 1.8, (i + 1) * 1.8]
                : (i + 1) * 1.8,
            fill:
              isActive || (isHovered && i >= 2)
                ? "url(#barActiveGradient)"
                : i < 2
                  ? "url(#barNegativeGradient)"
                  : "url(#barPositiveGradient)",
            width: isActive || isHovered ? [1.8, 2, 1.9, 1.8] : 1.8,
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: isActive || isHovered ? Infinity : 0,
          }}
        />
      ))}

      <defs>
        <linearGradient
          id="resultsDarkGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="50%" stopColor="#111827" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient
          id="barNegativeGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient
          id="barPositiveGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient
          id="barActiveGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#a6fe00" />
          <stop offset="100%" stopColor="#65a30d" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// Dark theme UI icons
export function ArrowRightIcon({ className = "w-5 h-5" }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </motion.svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </motion.svg>
  );
}

export function PlayIcon({ className = "w-6 h-6" }) {
  return (
    <motion.svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <path d="M8 5v14l11-7z" />
    </motion.svg>
  );
}

export function ChevronDownIcon({ className = "w-5 h-5" }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </motion.svg>
  );
}

export function ChevronUpIcon({ className = "w-5 h-5" }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </motion.svg>
  );
}

export function ClockIcon({ className = "w-5 h-5" }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1 }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </motion.svg>
  );
}

export function StarIcon({ className = "w-5 h-5", filled = false }) {
  return (
    <motion.svg
      className={className}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      whileHover={{ scale: 1.2, rotate: 180 }}
      transition={{ duration: 0.3 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </motion.svg>
  );
}

export function QuoteIcon({ className = "w-8 h-8" }) {
  return (
    <motion.svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </motion.svg>
  );
}

export function CalendarIcon({ className = "w-5 h-5" }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </motion.svg>
  );
}

export function DollarIcon({ className = "w-5 h-5" }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </motion.svg>
  );
}

export function InfoIcon({ className = "w-4 h-4" }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </motion.svg>
  );
}
