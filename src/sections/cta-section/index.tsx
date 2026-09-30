import { CTAContent } from "./sub-components/cta-content";
import { CTAOrnaments } from "./sub-components/cta-ornaments";
import { SquarePattern } from "./sub-components/sqaure-pattern";

export function CTASection() {
  return (
    <section className="mt-20 lg:mt-0 overflow-hidden w-full h-[600px] md:h-1/5 bg-persian-blue-800">
      <div className="container section-y relative w-full h-full  flex flex-col items-center justify-center  text-center">
        <SquarePattern className="absolute inset-0 z-0 " />
        <CTAOrnaments />
        <CTAContent />
      </div>
    </section>
  );
}
