"use client";

import { StatCard } from "@/components/statcard";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils/cn";
import { useRef } from "react";

export function HeroStats({ className }: { className?: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".stat-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.6,
      });
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      aria-hidden={false}
      className={cn("pointer-events-none absolute inset-0 z-30", className)}
    >
      {/* Desktop / tablet — floating around the hero image */}
      <div className="absolute inset-0 hidden md:block">
        <div className="stat-reveal pointer-events-auto absolute left-[30%] top-[65%]">
          <StatCard
            variant="highlight"
            title="UI/UX Design"
            subtitle="200 Courses  •  1000+ Students"
          />
        </div>

        <div className="stat-reveal pointer-events-auto absolute right-[34%] top-[70%]">
          <StatCard variant="progress" title="Learning Progress" value={55} />
        </div>

        <div className="stat-reveal pointer-events-auto absolute left-[26%] bottom-[4%]">
          <StatCard
            variant="rating"
            title="Happy Students"
            rating={4.5}
            reviewCount={240}
            badgeLabel="2K+"
            avatars={[
              { src: "https://i.pravatar.cc/100?img=1", alt: "Student 1" },
              { src: "https://i.pravatar.cc/100?img=5", alt: "Student 2" },
              { src: "https://i.pravatar.cc/100?img=8", alt: "Student 3" },
              { src: "https://i.pravatar.cc/100?img=12", alt: "Student 4" },
            ]}
          />
        </div>
      </div>

      {/* Mobile — stacked below the fold content, not floating */}
      <div className="pointer-events-auto flex flex-col items-center gap-3 px-4 pb-6 md:hidden">
        <StatCard
          variant="highlight"
          title="UI/UX Design"
          subtitle="200 Courses  •  1000+ Students"
        />
        <StatCard variant="progress" title="Learning Progress" value={55} />
        <StatCard
          variant="rating"
          title="Happy Students"
          rating={4.5}
          reviewCount={240}
          badgeLabel="2K+"
          avatars={[
            { src: "https://i.pravatar.cc/100?img=1", alt: "Student 1" },
            { src: "https://i.pravatar.cc/100?img=5", alt: "Student 2" },
            { src: "https://i.pravatar.cc/100?img=8", alt: "Student 3" },
            { src: "https://i.pravatar.cc/100?img=12", alt: "Student 4" },
          ]}
        />
      </div>
    </div>
  );
}
