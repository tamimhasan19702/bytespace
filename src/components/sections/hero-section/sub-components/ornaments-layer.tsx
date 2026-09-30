"use client";

import { OrnamentItems } from "@/components/ornament-items";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { useRef } from "react";
import { Elipse } from "./elipse";
import { HeroImage } from "./hero-image";

export function HeroOrnaments() {
  const scope = useRef<HTMLDivElement>(null);
  const ellipse = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("svg", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
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
      });

      gsap.from(heroImage.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });
    },
    { scope },
  );

  return (
    <>
      <div ref={scope} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block">
          {/* right */}
          <OrnamentItems
            variant="item-one"
            className="absolute top-[50%] right-[10%] text-[clamp(3rem,10vw,11.75rem)] text-shuttle-gray-100"
          />
          <OrnamentItems
            variant="item-two"
            className="absolute top-[10%] -right-[5%] text-[clamp(6rem,20vw,23.1rem)] text-electric-lime-400"
          />
          <OrnamentItems
            variant="item-three"
            className="absolute top-[70%] right-[3%] text-[clamp(5rem,17vw,20.7rem)] text-shuttle-gray-100"
          />

          {/* left */}
          <OrnamentItems
            variant="item-six"
            className="absolute top-[25%] left-[0%] text-[clamp(6rem,20vw,24.0625rem)] text-electric-lime-400"
          />
          <OrnamentItems
            variant="item-five"
            className="absolute top-[50%] left-[15%] text-[clamp(3rem,10vw,10.9375rem)] text-shuttle-gray-100"
          />
          <OrnamentItems
            variant="item-four"
            className="absolute top-[70%] left-[5%] text-[clamp(5rem,17vw,21.375rem)] text-shuttle-gray-100"
          />
        </div>

        {/* Mobile layer */}
        <div className="absolute inset-0 md:hidden">
          {/* right */}
          <OrnamentItems
            variant="item-two"
            className="absolute top-[6%] -right-[5%] text-[clamp(5rem,32vw,9rem)] text-electric-lime-400"
          />
          <OrnamentItems
            variant="item-one"
            className="absolute z-20 bottom-[20%] right-[2%] text-[clamp(3.5rem,22vw,6rem)] text-shuttle-gray-100"
          />
          {/* left */}
          <OrnamentItems
            variant="item-six"
            className="absolute top-[8%] left-[0%] text-[clamp(4rem,26vw,7rem)] text-shuttle-gray-100"
          />
          <OrnamentItems
            variant="item-three"
            className="absolute z-20 bottom-[15%] left-[2%] text-[clamp(4rem,28vw,7.5rem)] text-electric-lime-400"
          />
        </div>
      </div>

      {/* Ellipse */}
      <div ref={ellipse} className="pointer-events-none absolute inset-0 z-10">
        <Elipse className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[clamp(20rem,90vw,71.8125rem)] text-electric-lime-400" />
      </div>

      {/* Hero image */}
      <div
        ref={heroImage}
        className="absolute bottom-0 left-1/2 z-20 w-full max-w-80 -translate-x-1/2 md:w-[50vw] md:max-w-150"
      >
        <HeroImage className=" text-[300px] sm:text-[400px] md:text-[500px] lg:text-[600px]" />
      </div>
    </>
  );
}
