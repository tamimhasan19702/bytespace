"use client";

import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils/cn";
import { useRef } from "react";

export function CTAContent({ className }: { className?: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".hero-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className={cn(
        "relative z-20 mx-auto flex max-w-4xl flex-col gap-4 md:gap-12 items-center",
        className,
      )}
    >
      <div className="flex flex-col items-center text-center gap-2 md:gap-8">
        <h2 className="hero-reveal font-heading text-4xl font-bold text-white-800 sm:text-5xl md:text-6xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="hero-reveal font-body mt-4 max-w-xl text-sm text-white-600 sm:text-base">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>

        <Button className="font-body h-12 w-full shrink-0 rounded-full bg-electric-lime-400 px-6 text-shuttle-gray-800 hover:bg-electric-lime-500 cursor-pointer md:w-auto">
          Join as Creator
        </Button>
      </div>
    </div>
  );
}
