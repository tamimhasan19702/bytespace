"use client";

import { SectionHeading } from "@/components/section-heading";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { use, useRef } from "react";
import { getLearningPaths } from "../data";
import { LearningPathCard } from "./learning-path-card";

const content = getLearningPaths();

export function LearningPathsContent() {
  const { title, description, paths } = use(content);
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-learning-path]", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });
    },
    { scope },
  );

  return (
    <>
      <SectionHeading title={title} description={description} />

      <div
        ref={scope}
        className="mt-10 mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-10 xl:grid-cols-6"
      >
        {paths.map((path) => (
          <div key={path.id} data-learning-path className="h-full">
            <LearningPathCard path={path} />
          </div>
        ))}
      </div>
    </>
  );
}
