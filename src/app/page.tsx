"use client";

import { gsap } from "@/lib/animations/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const persianBlue = [
  [100, "bg-persian-blue-100"],
  [200, "bg-persian-blue-200"],
  [300, "bg-persian-blue-300"],
  [400, "bg-persian-blue-400"],
  [500, "bg-persian-blue-500"],
  [600, "bg-persian-blue-600"],
  [700, "bg-persian-blue-700"],
  [800, "bg-persian-blue-800"],
] as const;
const electricLime = [
  [100, "bg-electric-lime-100"],
  [200, "bg-electric-lime-200"],
  [300, "bg-electric-lime-300"],
  [400, "bg-electric-lime-400"],
  [500, "bg-electric-lime-500"],
  [600, "bg-electric-lime-600"],
  [700, "bg-electric-lime-700"],
  [800, "bg-electric-lime-800"],
] as const;
const white = [
  [100, "bg-white-100"],
  [200, "bg-white-200"],
  [300, "bg-white-300"],
  [400, "bg-white-400"],
  [500, "bg-white-500"],
  [600, "bg-white-600"],
  [700, "bg-white-700"],
  [800, "bg-white-800"],
] as const;

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref },
  );

  return (
    <div className="container section-y space-y-20">
      {/* FONT CHECK */}
      <section>
        <h2 className="text-2xl font-heading font-semibold mb-2">
          Heading font — should render in Poppins
        </h2>
        <p className="font-body text-muted-foreground">
          Paragraph font — should render in Satoshi. If this looks like a
          generic system sans-serif, the font files are not loading correctly.
        </p>
      </section>

      {/* COLOR CHECK — Persian Blue */}
      <section>
        <h3 className="font-heading font-semibold mb-4">Persian Blue scale</h3>
        <div className="flex flex-wrap gap-3">
          {persianBlue.map(([shade, colorClass]) => (
            <div key={shade} className="flex flex-col items-center gap-1">
              <div
                className={`h-16 w-16 rounded-lg border border-border ${colorClass}`}
              />
              <span className="text-xs font-body text-muted-foreground">
                {shade}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* COLOR CHECK — Electric Lime */}
      <section>
        <h3 className="font-heading font-semibold mb-4">Electric Lime scale</h3>
        <div className="flex flex-wrap gap-3">
          {electricLime.map(([shade, colorClass]) => (
            <div key={shade} className="flex flex-col items-center gap-1">
              <div
                className={`h-16 w-16 rounded-lg border border-border ${colorClass}`}
              />
              <span className="text-xs font-body text-muted-foreground">
                {shade}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* COLOR CHECK — White opacity scale (on dark bg to be visible) */}
      <section className="bg-persian-blue-800 rounded-2xl p-6">
        <h3 className="font-heading font-semibold mb-4 text-white-800">
          White opacity scale
        </h3>
        <div className="flex flex-wrap gap-3">
          {white.map(([shade, colorClass]) => (
            <div key={shade} className="flex flex-col items-center gap-1">
              <div
                className={`h-16 w-16 rounded-lg border border-white-300 ${colorClass}`}
              />
              <span className="text-xs font-body text-white-600">{shade}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTAINER CHECK */}
      <section>
        <h3 className="font-heading font-semibold mb-2">Container check</h3>
        <p className="font-body text-sm text-muted-foreground">
          This whole page is wrapped in <code>.container-page</code> — resize
          the browser: padding should shrink smoothly on mobile and the content
          should never exceed 1920px wide.
        </p>
      </section>

      {/* GSAP SCROLL TRIGGER CHECK */}
      <section ref={ref} className="space-y-4">
        <h3 className="font-heading font-semibold">
          Scroll down — these should fade + slide in
        </h3>
        <div className="reveal h-32 rounded-xl bg-persian-blue-600 flex items-center justify-center text-white-800 font-heading">
          Reveal block 1
        </div>
        <div className="reveal h-32 rounded-xl bg-electric-lime-400 flex items-center justify-center font-heading">
          Reveal block 2
        </div>
        <div className="reveal h-32 rounded-xl bg-persian-blue-300 flex items-center justify-center font-heading">
          Reveal block 3
        </div>
      </section>
    </div>
  );
}
