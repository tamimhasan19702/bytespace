"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "./gsap";

export function useScrollReveal<T extends HTMLElement>(
  options?: gsap.TweenVars,
) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
        ...options,
      });
    },
    { scope: ref },
  );

  return ref;
}
