"use client";

import { IconStore } from "@/components/icons";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { fillToMinimum } from "@/lib/utils/fill-to-minimum";
import { useRef } from "react";
import { brands } from "./data";

export function BrandMarqueeSection() {
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
          <div key={i} className="flex shrink-0 items-center">
            <IconStore iconName={brand} className="text-[170px] text-shuttle-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
