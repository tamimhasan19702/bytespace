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
    <div
      ref={scope}
      className="my-auto flex min-h-32 w-full items-center overflow-hidden bg-shuttle-gray-50 py-6 sm:min-h-40 sm:py-8 lg:min-h-50.5 lg:py-10"
    >
      <div ref={trackRef} className="flex w-max items-center gap-8 sm:gap-12 lg:gap-18">
        {fillToMinimum(brands).map((brand, i) => (
          <div key={i} className="flex shrink-0 items-center gap-1.5 text-shuttle-gray-500 sm:gap-2">
            <brand.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
            <span className="font-heading text-lg font-bold sm:text-xl lg:text-2xl">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
