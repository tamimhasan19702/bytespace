"use client";

import { SvgItems } from "@/components/svg-items";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { useRef } from "react";

export function CTAOrnaments() {
  const scope = useRef<HTMLDivElement>(null);
  const ellipse = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("svg", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });

      gsap.to("svg", {
        y: 20,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });

      gsap.from(ellipse.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });

      gsap.from(heroImage.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });
    },
    { scope },
  );

  return (
    <div ref={scope} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      {/* Desktop */}
      <div className="absolute inset-0 hidden md:block">
        {/* right */}
        <SvgItems
          variant="item-one"
          className="absolute top-[2%] right-[20%] text-[clamp(3rem,10vw,11.75rem)] text-electric-lime-400"
        />
        <SvgItems
          variant="item-two"
          className="absolute -top-[10%] -right-[5%] text-[clamp(6rem,20vw,23.1rem)] text-shuttle-gray-50"
        />
        <SvgItems
          variant="item-three"
          className="absolute top-[60%] right-[5%] text-[clamp(5rem,17vw,20.7rem)] text-electric-lime-400"
        />

        {/* left */}
        <SvgItems
          variant="item-six"
          className="absolute top-[2%] left-[0%] text-[clamp(6rem,20vw,24.0625rem)] text-electric-lime-400"
        />
        <SvgItems
          variant="item-five"
          className="absolute top-[50%] left-[15%] text-[clamp(3rem,10vw,10.9375rem)] text-shuttle-gray-100"
        />
        <SvgItems
          variant="item-four"
          className="absolute top-[70%] left-[5%] text-[clamp(5rem,17vw,21.375rem)] text-shuttle-gray-100"
        />
      </div>

      {/* Mobile layer */}
      <div className="absolute inset-0 md:hidden">
        {/* right */}
        <SvgItems
          variant="item-two"
          className="absolute top-[6%] -right-[15%] text-[clamp(5rem,32vw,9rem)] text-electric-lime-400"
        />
        <SvgItems
          variant="item-one"
          className="absolute z-20 bottom-[10%] -right-[5%] text-[clamp(3.5rem,22vw,6rem)] text-shuttle-gray-100"
        />
        {/* left */}
        <SvgItems
          variant="item-six"
          className="absolute top-[8%] -left-[2%] text-[clamp(4rem,26vw,7rem)] text-shuttle-gray-100"
        />
        <SvgItems
          variant="item-three"
          className="absolute z-20 -bottom-[5%] -left-[12%] text-[clamp(4rem,28vw,7.5rem)] text-electric-lime-400"
        />
      </div>
    </div>
  );
}
