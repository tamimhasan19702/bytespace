import { HeroContent } from "./sub-components/hero-content";
import { HeroOrnaments } from "./sub-components/ornaments-layer";
import { SquarePattern } from "./sub-components/sqaure-pattern";

export function HeroSection() {
  return (
    <section className="container w-full h-screen -mt-header pt-header flex flex-col items-center justify-center md:justify-start section-y text-center bg-persian-blue-800 relative overflow-hidden">
      <SquarePattern className="absolute inset-0 z-0 " />
      <HeroOrnaments />
      <HeroContent />
    </section>
  );
}
