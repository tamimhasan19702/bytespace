"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils/cn";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { StatItem } from "../interface";

interface FeatureRowProps {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  stats?: StatItem[];
  checklist?: string[];
}

export function FeatureRow({
  title,
  description,
  imagePosition,
  stats,
  checklist,
}: FeatureRowProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const timeline = gsap.timeline({
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });

      timeline
        .from("[data-feature-image]", {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        })
        .from(
          "[data-feature-text]",
          {
            x: imagePosition === "right" ? -60 : 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.65",
        )
        .from(
          "[data-feature-item]",
          {
            y: 24,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.07,
          },
          "-=0.45",
        );
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className="mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div
        data-feature-image
        className={cn("flex justify-center relative", imagePosition === "right" && "lg:order-2")}
      >
        {imagePosition === "left" ? (
          <Image
            src="/images/career/career-left.png"
            alt="Career Left Visual"
            width={621}
            height={552}
            className="w-full max-w-125 lg:max-w-180"
          />
        ) : (
          <Image
            src="/images/career/career-right.png"
            alt="Career Right Visual"
            width={621}
            height={552}
            className="w-full max-w-125 lg:max-w-180"
          />
        )}
      </div>

      <div data-feature-text className={cn(imagePosition === "right" && "lg:order-1")}>
        <h2 className="font-heading md:text-[44px] font-bold text-shuttle-gray-800 text-2xl">
          {title}
        </h2>
        <p className="font-body mt-4 text-sm text-shuttle-gray-400 md:text-lg">{description}</p>

        {stats && (
          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label} data-feature-item>
                <p className="font-heading text-[38px] font-semibold text-persian-blue-600">
                  {stat.value}
                </p>
                <p className="font-body text-lg text-shuttle-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {checklist && (
          <ul className="mt-6 flex flex-col gap-3">
            {checklist.map((item) => (
              <li key={item} data-feature-item className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 fill-persian-blue-600 text-white md:h-5 md:w-5" />
                <span className="font-body text-sm text-shuttle-gray-400 md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
