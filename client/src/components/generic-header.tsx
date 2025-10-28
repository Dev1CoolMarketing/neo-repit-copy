import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";
import styles2 from "../styles/ExosomesDesign.module.css";

export default function GenericHeader({
  title1,
  title2,
  title3,
  image,
  details,
  gradientClass,
  gradientButtonClass,
  useText,
  contentId,
  onReady,
}: any) {
  const hasReleased = useRef(false);
  const heroCompleted = useRef(false);
  const contentCompleted = useRef(false);
  const heroFallbackTimer = useRef<number | null>(null);
  const contentFallbackTimer = useRef<number | null>(null);
  const hardTimeoutTimer = useRef<number | null>(null);
  const originalOverflow = useRef<{ body: string; html: string }>({
    body: "",
    html: "",
  });
  const FALLBACK_DELAY_MS = 4500;
  const HARD_TIMEOUT_MS = 8000;

  const clearHeroFallback = () => {
    if (heroFallbackTimer.current !== null) {
      window.clearTimeout(heroFallbackTimer.current);
      heroFallbackTimer.current = null;
    }
  };

  const clearContentFallback = () => {
    if (contentFallbackTimer.current !== null) {
      window.clearTimeout(contentFallbackTimer.current);
      contentFallbackTimer.current = null;
    }
  };

  const clearHardTimeout = () => {
    if (hardTimeoutTimer.current !== null) {
      window.clearTimeout(hardTimeoutTimer.current);
      hardTimeoutTimer.current = null;
    }
  };

  const restoreScrollLockState = () => {
    if (typeof window === "undefined") {
      return;
    }
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    const resetOverflow = (el: HTMLElement, value: string) => {
      if (value) {
        el.style.overflow = value;
      } else {
        el.style.removeProperty("overflow");
      }
    };

    resetOverflow(bodyEl, originalOverflow.current.body);
    resetOverflow(htmlEl, originalOverflow.current.html);
    htmlEl.classList.remove("page-locked");
    bodyEl.classList.remove("page-locked");
  };

  const releaseScrollLock = () => {
    if (typeof window === "undefined" || hasReleased.current) {
      return;
    }

    console.log("[GenericHeader] releaseScrollLock invoked", {
      contentId,
      heroCompleted: heroCompleted.current,
      contentCompleted: contentCompleted.current,
    });

    hasReleased.current = true;

    clearHeroFallback();
    clearContentFallback();
    clearHardTimeout();

    restoreScrollLockState();

    const targetId = contentId ?? "page-content";
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    console.log("[GenericHeader] Scroll lock released", {
      bodyOverflow: bodyEl.style.overflow,
      htmlOverflow: htmlEl.style.overflow,
    });

    if (typeof onReady === "function") {
      window.requestAnimationFrame(() => {
        console.log("[GenericHeader] onReady callback fired", { contentId: targetId });
        onReady(targetId);
      });
    }

    window.dispatchEvent(
      new CustomEvent("generic-header-ready", {
        detail: { contentId: targetId },
      }),
    );
  };

  const checkRelease = (context: string) => {
    if (hasReleased.current) {
      return;
    }

    console.log("[GenericHeader] checkRelease", {
      context,
      contentId,
      heroCompleted: heroCompleted.current,
      contentCompleted: contentCompleted.current,
    });

    if (heroCompleted.current && contentCompleted.current) {
      releaseScrollLock();
    }
  };

  const markHeroCompleted = (source: string) => {
    if (heroCompleted.current) {
      return;
    }
    heroCompleted.current = true;
    clearHeroFallback();
    console.log("[GenericHeader] Hero segment completed", { source, contentId });
    checkRelease(`hero:${source}`);
  };

  const markContentCompleted = (source: string) => {
    if (contentCompleted.current) {
      return;
    }
    contentCompleted.current = true;
    clearContentFallback();
    console.log("[GenericHeader] Content segment completed", { source, contentId });
    checkRelease(`content:${source}`);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    hasReleased.current = false;
    heroCompleted.current = false;
    contentCompleted.current = false;

    clearHeroFallback();
    clearContentFallback();
    clearHardTimeout();

    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    originalOverflow.current = {
      body: bodyEl.style.overflow,
      html: htmlEl.style.overflow,
    };

    bodyEl.style.overflow = "hidden";
    htmlEl.classList.add("page-locked");
    bodyEl.classList.add("page-locked");
  	console.log("[GenericHeader] Scroll lock applied", { contentId });

    heroFallbackTimer.current = window.setTimeout(() => {
      console.log("[GenericHeader] Hero fallback timer fired", { contentId });
      markHeroCompleted("hero-fallback");
    }, FALLBACK_DELAY_MS);

    contentFallbackTimer.current = window.setTimeout(() => {
      console.log("[GenericHeader] Content fallback timer fired", { contentId });
      markContentCompleted("content-fallback");
    }, FALLBACK_DELAY_MS);

    hardTimeoutTimer.current = window.setTimeout(() => {
      console.log("[GenericHeader] Hard timeout reached, forcing release", { contentId });
      releaseScrollLock();
    }, HARD_TIMEOUT_MS);

    return () => {
      console.log("[GenericHeader] Cleanup invoked", { contentId });
      clearHeroFallback();
      clearContentFallback();
      clearHardTimeout();
      restoreScrollLockState();
    };
  }, []);

  return (
    <section className="w-full bg-white flex min-h-[60vh] md:min-h-screen flex-col justify-center items-center  mt-20 md:mt-0">
      <div className="flex flex-col justify-center items-center header-height">
        {!useText ? (
          <motion.img
            initial={{ x: 0, y: "40vh", scale: 3.0 }}
            animate={{ x: 0, y: 0, scale: 1.0 }}
            transition={{
              delay: 0.7,
              duration: 2,
              ease: "easeIn",
            }}
            onAnimationComplete={() => markHeroCompleted("animation")}
            src={image}
            alt="Advanced Hair Follicle Technology"
            className="relative z-24 w-20 h-24 h-auto object-contain"
            loading="eager"
          />
        ) : (
          <motion.div
            initial={{ x: 0, y: "40vh", scale: 3.0 }}
            animate={{ x: 0, y: 0, scale: 1.0 }}
            transition={{
              delay: 0.7,
              duration: 2,
              ease: "easeIn",
            }}
            className="flex flex-row justify-center relative z-24 text-5xl h-auto object-contain"
            onAnimationComplete={() => markHeroCompleted("animation")}
          >
            {image}
          </motion.div>
        )}
        <motion.div
          initial={{ x: 0, y: "100vh" }}
          animate={{ x: 0, y: 0, scale: 1.0 }}
          transition={{
            delay: 0.7,
            duration: 2,
            ease: "easeIn",
          }}
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)", // force GPU layer
          }}
          onAnimationComplete={() => markContentCompleted("animation")}
          className="flex flex-col jusitify-center items-center gap-5"
        >
          <div className="flex w-full flex-col items-center justify-center gap-5 px-5  ">
            <div className="flex flex-col items-center w-full">
              <motion.h1
                className="text-9xl  md:text-8xl lg:text-9xl text-center font-normal tracking-tight text-black leading-[0.85] pb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
              delay: 0.3,
              duration: 1.5,
              ease: "easeOut",
            }}
          >
                <p className={`${styles2.mainHeading}  ${gradientClass}`}>
                  {title1}
                </p>
                <p className={`${styles2.mainHeading}  ${gradientClass}`}>
                  {title2}
                </p>
                         <p className={`${styles2.mainHeading}  ${gradientClass}`}>
                  {title3}
                </p>
              </motion.h1>
            </div>
          </div>
          <div className=" gap-1 md:text-2xl flex flex-col items-center lg:text-3xl font-[600] px-5">
            {details.map((item: any) => {
              return (
                <p
                  className={`subHeadingText`}
                >
                  {item}
                </p>
              );
            })}

            <button
              className={`${gradientButtonClass} w-full px-4 text-md  font-[500] text-lg py-2 rounded-full mt-5 text-white`}
              style={{ color: "white" }}
              onClick={()=> smoothScrollTo('contact')}
            >
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
