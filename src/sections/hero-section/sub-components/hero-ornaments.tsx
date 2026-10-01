"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import Image from "next/image";
import { useRef } from "react";
import { Elipse } from "./elipse";

export function HeroOrnaments() {
  const scope = useRef<HTMLDivElement>(null);
  const ellipse = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("img", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });

      gsap.to("img", {
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
    <>
      <div ref={scope} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block overflow-hidden">
          {/* right */}
          <Image
            src="/images/hero/item-one.png"
            alt="Hero Item One"
            width={188}
            height={188}
            className="absolute top-[50%] right-[10%]"
          />
          <Image
            src="/images/hero/item-two.png"
            alt="Hero Item Two"
            width={370}
            height={370}
            className="absolute top-[10%] right-[-5%]"
          />
          <Image
            src="/images/hero/item-three.png"
            alt="Hero Item Three"
            width={330}
            height={330}
            className="absolute top-[70%] right-[3%]"
          />
          {/* left */}
          <Image
            src="/images/hero/item-four.png"
            alt="Hero Item Four"
            width={385}
            height={385}
            className="absolute top-[25%] left-[0%]"
          />
          <Image
            src="/images/hero/item-five.png"
            alt="Hero Item Five"
            width={175}
            height={175}
            className="absolute top-[50%] left-[15%]"
          />
          <Image
            src="/images/hero/item-six.png"
            alt="Hero Item Six"
            width={342}
            height={342}
            className="absolute top-[70%] left-[5%]"
          />
        </div>

        {/* Mobile layer */}
        <div className="absolute inset-0 md:hidden">
          {/* right */}
          <Image
            src="/images/hero/item-two.png"
            alt="Hero Item Two"
            width={120}
            height={120}
            className="absolute top-[6%] right-[-5%]"
          />
          <Image
            src="/images/hero/item-one.png"
            alt="Hero Item One"
            width={90}
            height={90}
            className="absolute z-20 bottom-[20%] right-[2%]"
          />
          {/* left */}
          <Image
            src="/images/hero/item-six.png"
            alt="Hero Item Six"
            width={130}
            height={130}
            className="absolute z-20 bottom-[15%] left-[2%]"
          />
          <Image
            src="/images/hero/item-three.png"
            alt="Hero Item Three"
            width={140}
            height={140}
            className="absolute top-[8%] left-[0%]"
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
        className="absolute bottom-0 left-1/2 z-20 aspect-722/515 w-full max-w-80 -translate-x-1/2 sm:max-w-100 md:w-[50vw] md:max-w-120 lg:max-w-140 xl:max-w-160 2xl:max-w-180"
      >
        <Image src="/images/hero/hero-image.png" alt="Hero Image" fill className="object-contain" />

        <Image
          src="/images/hero/hero-image-progress.png"
          alt="Hero Image Progress"
          width={232}
          height={131}
          className="absolute bottom-55 right-[-100] -translate-x-1/2 w-full max-w-58 hidden md:block"
        />
        <Image
          src="/images/hero/hero-image-avatar.png"
          alt="Hero Image Avatar"
          width={238}
          height={121}
          className="absolute bottom-15 left-15 -translate-x-1/2 w-full max-w-65 hidden md:block"
        />
        <Image
          src="/images/hero/hero-image-title.png"
          alt="Hero Image Title"
          width={208}
          height={70}
          className="absolute bottom-80 left-20 -translate-x-1/2 w-full max-w-50 hidden md:block"
        />
      </div>
    </>
  );
}
