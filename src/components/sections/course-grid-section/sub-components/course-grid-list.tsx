"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import { type ReactNode, useRef } from "react";

export function CourseGridList({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-course-card]", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });
    },
    { scope },
  );

  return (
    <ul
      ref={scope}
      className="mt-15 lg:mt-25 mx-auto grid w-full max-w-300 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
    >
      {children}
    </ul>
  );
}
