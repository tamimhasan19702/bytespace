import { HeroContent } from "./sub-components/hero-content";
import { HeroOrnaments } from "./sub-components/ornaments-layer";
import { SquarePattern } from "./sub-components/sqaure-pattern";

export function HeroSection() {
  return (
    <section className=" w-full h-full -mt-header bg-persian-blue-800">
      <div className="container relative w-full h-screen max-h-270 pt-header flex flex-col items-center justify-center md:justify-start section-y text-center   overflow-hidden">
        <SquarePattern className="absolute inset-0 z-0 " />
        <HeroOrnaments />
        <HeroContent />
      </div>
    </section>
  );
}
