


import { useEffect, useRef } from "react";

type GenericProcessProps = {
    details: string,
    title?: string,
    headline: string,
    video: string,
    fallbackVideo?: string,
    gradientClass: string,
    ctaText?: string

}

export default function GenericProcess({
    details,
    title = 'PROCESS',
    headline,
    video,
    fallbackVideo,
    gradientClass,
    ctaText = 'Watch process videos'
}: GenericProcessProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getMimeType = (src: string) => {
    const ext = src.split('?')[0].split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'webm':
        return 'video/webm';
      case 'mov':
        return 'video/quicktime';
      case 'm4v':
        return 'video/x-m4v';
      case 'ogv':
      case 'ogg':
        return 'video/ogg';
      default:
        return 'video/mp4';
    }
  };

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.muted = true;
    el.playsInline = true;

    const tryPlay = () => {
      const attempt = el.play();
      if (attempt && typeof attempt.then === "function") {
        attempt.catch(() => {
          el.controls = true;
        });
      }
    };

    if (el.readyState >= 2) {
      tryPlay();
    } else {
      const onCanPlay = () => {
        el.removeEventListener("canplay", onCanPlay);
        tryPlay();
      };
      el.addEventListener("canplay", onCanPlay);
      return () => el.removeEventListener("canplay", onCanPlay);
    }
  }, [video, fallbackVideo]);

  return (
    <section className="bg-white px-5 py-16 md:py-24">
      <div className="container mx-auto max-w-sm md:max-w-4xl">
        <div className="text-center space-y-4">
          {/* Animated PROCESS Letters */}
          <div className="flex justify-center gap-1 mb-8">
            {title.split('').map((letter, index) => (
              <div
                key={index}
                className={`w-12 h-12 ${gradientClass} rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300`}
              >
                <span className="text-sm font-semibold text-white">
                  {letter}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-medium-gray leading-relaxed">
            {headline}
          </h2>
          <p className="pb-4">
            {details}
          </p>

          <button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg rounded-full shadow-lg">
            {ctaText}
           </button>
          <div className="device device-iphone-x py-3">
            <div className="device-frame"></div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
          {/* Video Mock-up */}
          <div className="bg-black rounded-[48px] p-2 shadow-2xl max-w-72 mx-auto">
            <div className="bg-white rounded-[40px] overflow-hidden">
              <div className="bg-black h-10 flex items-center justify-center rounded-t-[40px]">
                <div className="w-20 h-1 bg-white rounded-full" />
              </div>

              <div className="bg-gradient-to-b from-gray-800 to-gray-600 h-[35rem] flex items-center justify-center relative overflow-hidden">
                {/* Video Goes Here */}

                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={video} type={getMimeType(video)} />
                  {fallbackVideo && (
                    <source src={fallbackVideo} type={getMimeType(fallbackVideo)} />
                  )}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
