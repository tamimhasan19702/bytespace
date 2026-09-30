"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils/cn";
import { Search } from "lucide-react";
import { useRef } from "react";

export function HeroContent({ className }: { className?: string }) {
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
        "relative z-20 mx-auto flex max-w-3xl flex-col gap-4 md:gap-12 items-center",
        className,
      )}
    >
      <div className="flex flex-col items-center text-center gap-2 md:gap-8">
        <h1 className="hero-reveal font-heading text-4xl font-bold text-white-800 sm:text-5xl md:text-6xl">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="hero-reveal font-body mt-4 max-w-xl text-sm text-white-600 sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>

      <form
        className="hero-reveal flex flex-col md:flex-row w-full max-w-md items-center gap-2 sm:max-w-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex h-12 w-full items-center gap-2 rounded-full bg-white-800 pl-4 pr-1.5 md:flex-1">
          <Search className="h-4 w-4 shrink-0 text-shuttle-gray-500" />
          <Input
            type="text"
            placeholder="Course, topic, creator"
            className="font-body h-full flex-1 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
          />
        </div>

        <Button
          type="submit"
          className="font-body h-12 w-full shrink-0 rounded-full bg-electric-lime-400 px-6 text-shuttle-gray-800 hover:bg-electric-lime-500 cursor-pointer md:w-auto"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
