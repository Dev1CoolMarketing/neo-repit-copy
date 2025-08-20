import React from "react";

export type Badge = {
  src: string;
  alt: string;
};

export interface BadgeGridProps {
  badges?: Badge[];
  className?: string;
}

const DEFAULT_BADGES: Badge[] = [
  { src: "/assets/badges/certified-neograft-provider.png", alt: "Certified NeoGraft Provider" },
  { src: "/assets/badges/center-of-excellence.png", alt: "NeoGraft Center of Excellence" },
  { src: "/assets/badges/master-transplanter.png", alt: "Master NeoGraft Transplanter" },
  { src: "/assets/badges/dedicated-expert.png", alt: "Dedicated Hair Restoration Expert" },
  { src: "/assets/badges/est-2019-dr-neo.png", alt: "Est. 2019 — Dr. Neo California" },
  { src: "/assets/badges/yelp-love-us.png", alt: "People Love Us on Yelp" },

];

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

function ensureNine(list: Badge[]): Badge[] {
  const out = list.slice(0, 6);
  while (out.length < 6) out.push({ src: "", alt: "" });
  return out;
}

const BadgeCell: React.FC<{ badge: Badge }> = ({ badge }) => (
  <figure className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-sm flex items-center justify-center">
    {badge.src ? (
      <img
        src={badge.src}
        alt={badge.alt}
        loading="lazy"
        decoding="async"
        className="w-5/6 h-5/6 object-contain"
      />
    ) : (
      <div className="text-[11px] tracking-wide text-neutral-500">Empty</div>
    )}
    {!!badge.alt && <figcaption className="sr-only">{badge.alt}</figcaption>}
  </figure>
);

/**
 * 3×3 Badge Grid (TypeScript, regular <img>)yel
 * - Always 3 columns × 3 rows on every screen size
 * - Full viewport-height section using `svh` for better mobile behavior
 * - Uses plain <img> tags with lazy loading for simplicity
 */
const BadgeGrid: React.FC<BadgeGridProps> = ({ badges = DEFAULT_BADGES, className }) => {
  const items = ensureNine(badges);

  return (
    <section aria-label="Badge display" className={cn("w-full  bg-black", className)}>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 h-full w-full p-3">
        {items.map((b, i) => (
          <BadgeCell key={i} badge={b} />)
        )}
      </div>
    </section>
  );
};

export default BadgeGrid;

// Example usage:
// <BadgeGrid badges={[
//   { src: "/badges/a.webp", alt: "Certified NeoGraft Provider" },
//   { src: "/badges/b.webp", alt: "Center of Excellence" },
//   { src: "/badges/c.webp", alt: "Master Transplanter" },
//   { src: "/badges/d.webp", alt: "Dedicated Expert" },
//   { src: "/badges/e.webp", alt: "Est. 2019 — Dr. Neo California" },
//   { src: "/badges/f.webp", alt: "People Love Us on Yelp" },
//   { src: "/badges/g.webp", alt: "Top Rated" },
//   { src: "/badges/h.webp", alt: "Gold Standard" },
//   { src: "/badges/i.webp", alt: "Trusted Clinic" },
// ]} />