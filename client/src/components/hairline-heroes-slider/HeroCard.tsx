"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Pause, Play } from "lucide-react";

export type HeroType = {
  name: string;
  image: string;
  location: string;
  age: number | string;
  badge?: string;
  /** Primary video URL (H.264/MP4 is safest). */
  video?: string;
  /** Optional codec-targeted sources; falls back to `video`. */
  videoAvc?: string;  // e.g., H.264/avc1
  videoHevc?: string; // e.g., HEVC/hvc1 for Safari
};

type HeroCardProps = {
  hero: HeroType;
  index: number;
  /** Portion of card that must be visible to count as "in view". */
  inViewAmount?: number;   // default 0.9
  /** If true, only auto on mobile widths. */
  mobileOnly?: boolean;    // default true
  /** Optional tiny delay before play when entering view (ms). */
  videoDelayMs?: number;   // default 0 (snappy)
  /** EXTRA: hold the image before showing video (autoplay only) */
  imageHoldMs?: number;    // default 1000
};

export default function HeroCard({
  hero,
  index,
  inViewAmount = 0.9,
  mobileOnly = true,
  videoDelayMs = 0,
  imageHoldMs = 1400, // ← NEW default 1s
}: HeroCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Eager warmup vs. strict in-view gate
  const almostInView = useInView(cardRef, { rootMargin: "200% 0px", amount: 0 });
  const fullyInView = useInView(cardRef, { margin: "0px", amount: inViewAmount });

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Visual state
  const [showVideo, setShowVideo] = useState(false);
  const [canRenderVideo, setCanRenderVideo] = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Playback state
  const [isPlaying, setIsPlaying] = useState(false);

  // Reveal gate: we only reveal when BOTH firstFrameReady && allowReveal
  const [allowReveal, setAllowReveal] = useState(false);

  // Refs to avoid effect races
  const rVfcHandle = useRef<number | null>(null);
  const primedRef = useRef(false);       // first decoded frame detected
  const loadedOnceRef = useRef(false);   // `.load()` called for current src
  const autoTimerRef = useRef<number | null>(null);   // autoplay combined delay
  const holdClearRef = useRef<number | null>(null);   // legacy extra clear slot

  const clearTimer = (ref: React.MutableRefObject<number | null>) => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const clearAllTimers = () => {
    clearTimer(autoTimerRef);
    clearTimer(holdClearRef);
  };

  const markReadyAndFadeIn = () => {
    setCanRenderVideo(true);
    setShowVideo(true);
  };

  const safePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    try {
      await v.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const safePauseAndReset = () => {
    const v = videoRef.current;
    if (!v) return;
    try { v.pause(); } catch {}
    setIsPlaying(false);
    setShowVideo(false);
    setCanRenderVideo(false);
    setAllowReveal(false);
    try { v.currentTime = 0; } catch {}
  };

  const handleEnded = () => {
    // End of a single play: fade back to image, reset for next entry.
    setIsPlaying(false);
    setShowVideo(false);
    setCanRenderVideo(false);
    setAllowReveal(false);
    const v = videoRef.current;
    if (v) {
      try { v.currentTime = 0; } catch {}
    }
  };

  // --- Manual Play should also trigger the fade (desktop & mobile) ---
  // Prime the first frame, then reveal + play (manual ignores the 1s hold to feel responsive).
  const primeThenRevealAndPlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    // If first frame already primed, allow reveal now and play.
    if (primedRef.current) {
      setAllowReveal(true);
      if (!canRenderVideo) {
        setFirstFrameReady(true);
        markReadyAndFadeIn();
      }
      await safePlay();
      return;
    }

    const allowAndReveal = async () => {
      if (primedRef.current) {
        setAllowReveal(true);
        setFirstFrameReady(true);
        markReadyAndFadeIn();
        await safePlay();
      }
    };

    const onLoadedMetadata = () => {
      try { v.currentTime = 0.001; } catch {}
    };

    if ("requestVideoFrameCallback" in (v as any)) {
      const id = (v as any).requestVideoFrameCallback(async () => {
        primedRef.current = true;
        await allowAndReveal();
      });
      rVfcHandle.current = id;
      v.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
    } else {
      const onSeeked = async () => {
        v.removeEventListener("seeked", onSeeked);
        primedRef.current = true;
        await allowAndReveal();
      };
      v.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
      v.addEventListener("seeked", onSeeked);
    }

    try { v.load(); } catch {}
  };

  const handleTogglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
      // Optional: fade back immediately on manual pause
      setShowVideo(false);
      setCanRenderVideo(false);
      setAllowReveal(false);
      return;
    }

    if (v.ended || v.currentTime >= (v.duration || 0)) {
      try { v.currentTime = 0; } catch {}
    }
    await primeThenRevealAndPlay();
  };

  // Reset state when source changes
  useEffect(() => {
    primedRef.current = false;
    loadedOnceRef.current = false;
    setFirstFrameReady(false);
    setShowVideo(false);
    setCanRenderVideo(false);
    setIsPlaying(false);
    setAllowReveal(false);
    clearAllTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hero.video, hero.videoAvc, hero.videoHevc]);

  // Warm the network & decoder early (once per source)
  useEffect(() => {
    if (!hero.video || !almostInView) return;
    const v = videoRef.current;
    if (!v || loadedOnceRef.current) return;
    try {
      v.load();
      loadedOnceRef.current = true;
    } catch {}
  }, [almostInView, hero.video]);

  // Prime: detect the *first decoded frame*, but DO NOT reveal yet here.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !hero.video) return;

    const flagPrimed = () => {
      if (primedRef.current) return;
      primedRef.current = true;
      setFirstFrameReady(true);
      // We don't call markReadyAndFadeIn() here anymore.
      // Reveal happens only when allowReveal === true.
    };

    const onLoadedMetadata = () => {
      try { v.currentTime = 0.001; } catch {}
    };

    const hasRVFC = "requestVideoFrameCallback" in (v as any);
    if (hasRVFC) {
      const id = (v as any).requestVideoFrameCallback(() => flagPrimed());
      rVfcHandle.current = id;
      v.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });

      return () => {
        v.removeEventListener("loadedmetadata", onLoadedMetadata);
        if (rVfcHandle.current && (v as any).cancelVideoFrameCallback) {
          try { (v as any).cancelVideoFrameCallback(rVfcHandle.current); } catch {}
          rVfcHandle.current = null;
        }
      };
    } else {
      const onSeeked = () => {
        v.removeEventListener("seeked", onSeeked);
        flagPrimed();
      };
      v.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
      v.addEventListener("seeked", onSeeked);
      return () => {
        v.removeEventListener("loadedmetadata", onLoadedMetadata);
        v.removeEventListener("seeked", onSeeked);
      };
    }
  }, [hero.video]);

  // Autoplay policy: enter view → wait (videoDelayMs + imageHoldMs) → allow reveal → play
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !hero.video) return;

    const shouldAuto = !!hero.video && (!mobileOnly || isMobile);
    v.loop = false;

    if (!fullyInView || !shouldAuto) {
      // Leaving view (or blocked by mobileOnly): stop immediately
      clearAllTimers();
      safePauseAndReset();
      return;
    }

    // Entering view: run combined delay; after that we "allowReveal".
    clearAllTimers();
    const combinedDelay = Math.max(0, videoDelayMs) + Math.max(0, imageHoldMs);
    autoTimerRef.current = window.setTimeout(() => {
      setAllowReveal(true);
      // If first frame already ready, reveal now; otherwise the watcher below will reveal.
      if (firstFrameReady && !canRenderVideo) {
        markReadyAndFadeIn();
      }
      // Start playback (will be visible once reveal occurs)
      safePlay();
    }, combinedDelay);

    return () => {
      clearAllTimers();
    };
    // include all relevant deps
  }, [fullyInView, hero.video, isMobile, mobileOnly, videoDelayMs, imageHoldMs, firstFrameReady, canRenderVideo]);

  // When BOTH gates are open, reveal the video (used for cases where first frame arrives after hold)
  useEffect(() => {
    if (allowReveal && firstFrameReady && !canRenderVideo) {
      markReadyAndFadeIn();
    }
  }, [allowReveal, firstFrameReady, canRenderVideo]);

  // 🎨 Crossfade tuning
  const DURATION_IMG_OUT = 0.5;
  const DURATION_VID_IN = 0.4;
  const OVERLAP_MS = 90;
  const EASE_IMAGE_OUT: any = [0.4, 0.0, 1.0, 1.0];
  const EASE_VIDEO_IN: any = [0.16, 1.0, 0.3, 1.0];

  const videoFadeDelay = firstFrameReady ? 0.06 : 0;
  const imageFadeDelay = firstFrameReady ? OVERLAP_MS / 1000 : 0;

  // Card entrance
  const CARD_IN_DURATION = 0.75;
  const CARD_IN_DELAY = 0.6 + index * 0.08;

  return (
    <motion.div
      ref={cardRef}
      key={hero.name}
      className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: CARD_IN_DURATION, delay: CARD_IN_DELAY }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="aspect-[3/4] relative">
        {/* IMAGE */}
        <motion.img
          src={hero.image}
          alt={`${hero.name} - Hair Hero`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "opacity, filter" }}
          animate={{
            opacity: showVideo && canRenderVideo ? 0 : 1,
            filter: showVideo && canRenderVideo ? "brightness(0.96)" : "brightness(1)",
          }}
          transition={{
            opacity: { duration: DURATION_IMG_OUT, ease: EASE_IMAGE_OUT, delay: imageFadeDelay },
            filter:  { duration: DURATION_IMG_OUT * 0.7, ease: EASE_IMAGE_OUT, delay: imageFadeDelay },
          }}
        />

        {/* VIDEO */}
        {hero.video && (
          <motion.video
            ref={videoRef}
            muted
            playsInline
            loop={false}
            preload="auto"
            crossOrigin="anonymous"
            poster={hero.image}
            onEnded={handleEnded}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ willChange: "opacity" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: canRenderVideo ? 1 : 0 }}
            transition={{
              opacity: { duration: DURATION_VID_IN, ease: EASE_VIDEO_IN, delay: videoFadeDelay },
            }}
          >
            {hero.videoHevc && <source src={hero.videoHevc} type="video/mp4; codecs=hvc1" />}
            <source src={hero.videoAvc ?? hero.video} type="video/mp4" />
          </motion.video>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Badge */}
        {hero.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#A87B23]/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
              {hero.badge}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{hero.name}</h3>
          <p className="text-sm opacity-90">
            {hero.location}, {hero.age}
          </p>
        </div>

        {/* Play/Pause (manual override triggers fade via primeThenRevealAndPlay) */}
        {hero.video && (
          <button
            type="button"
            onClick={handleTogglePlay}
            className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-black/60 text-white text-xs px-3 py-1.5 backdrop-blur-md hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-pressed={isPlaying}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        )}
      </div>
    </motion.div>
  );
}
