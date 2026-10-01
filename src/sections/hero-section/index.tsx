import { SvgItems } from "@/components/svg-items";
import { HeroContent } from "./sub-components/hero-content";
import { HeroOrnaments } from "./sub-components/hero-ornaments";

export function HeroSection() {
  return (
    <section className=" w-full h-full -mt-header bg-persian-blue-800">
      <div className="container relative w-full h-screen max-h-270 pt-header flex flex-col items-center justify-center md:justify-start section-y text-center  overflow-hidden">
        <SvgItems
          variant="item-six"
          className="absolute inset-0 z-0"
        />
        <HeroOrnaments />
        <HeroContent />
      </div>
    </section>
  );
}