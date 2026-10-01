"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import Image from "next/image";
import { useRef } from "react";

export function CTAOrnaments() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("img", {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });

      gsap.to("img", {
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    },
    { scope },
  );

  return (
    <div ref={scope} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      {/* Desktop */}
      <div className="absolute inset-0 hidden md:block">
        {/* right */}
        <Image
          src="/images/cta/item-one.png"
          alt="cta Item one"
          width={188}
          height={188}
          className="absolute top-[2%] right-[20%] z-[-10]"
        />
        <Image
          src="/images/cta/item-two.png"
          alt="cta Item two"
          width={370}
          height={370}
          className="absolute -top-[10%] -right-[5%]"
        />
        <Image
          src="/images/cta/item-three.png"
          alt="cta Item three"
          width={330}
          height={330}
          className="absolute bottom-0 right-[5%]"
        />

        {/* left */}
        <Image
          src="/images/cta/item-seven.png"
          alt="cta Item seven"
          width={385}
          height={385}
          className="absolute top-0 left-0"
        />
        <Image
          src="/images/cta/item-six.png"
          alt="cta Item six"
          width={175}
          height={175}
          className="absolute top-[2%] left-[15%]"
        />
        <Image
          src="/images/cta/item-five.png"
          alt="cta Item five"
          width={120}
          height={120}
          className="absolute bottom-[10%] left-0"
        />
        <Image
          src="/images/cta/item-four.png"
          alt="cta Item four"
          width={342}
          height={342}
          className="absolute bottom-0 left-[5%]"
        />
      </div>

      {/* Mobile layer */}
      <div className="absolute inset-0 md:hidden">
        {/* right */}
        <Image
          src="/images/cta/item-one.png"
          alt="cta Item one"
          width={70}
          height={70}
          className="absolute bottom-[2%] right-[20%] z-[-10]"
        />
        <Image
          src="/images/cta/item-two.png"
          alt="cta Item two"
          width={120}
          height={120}
          className="absolute top-[10%] -right-10"
        />
        {/* left */}
        <Image
          src="/images/cta/item-five.png"
          alt="cta Item five"
          width={70}
          height={70}
          className="absolute top-[10%] left-0"
        />
        <Image
          src="/images/cta/item-four.png"
          alt="cta Item four"
          width={120}
          height={120}
          className="absolute bottom-0 left-[5%]"
        />
      </div>
    </div>
  );
}
