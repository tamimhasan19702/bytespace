"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import { fillToMinimum } from "@/lib/utils/fill-to-minimum";
import { CircleDot, Sparkle, Sparkles, Waves, Zap } from "lucide-react";
import { useRef } from "react";

const brands = [
  { name: "Logoipsum", icon: Waves },
  { name: "Logoipsum", icon: Sparkles },
  { name: "Logoipsum", icon: Zap },
  { name: "Logoipsum", icon: CircleDot },
  { name: "Logoipsum", icon: Sparkle },
];

export function BrandMarquee() {
  const scope = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;

      const track = trackRef.current;
      const trackWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -trackWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className="w-full overflow-hidden bg-muted py-8">
      <div ref={trackRef} className="flex w-max items-center gap-16">
        {fillToMinimum(brands).map((brand, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2 text-shuttle-gray-500">
            <brand.icon className="h-5 w-5" />
            <span className="font-heading text-base font-semibold">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
