import { BrandMarqueeSection } from "@/components/sections/brand-marquee-section";
import { CareerGrowthSection } from "@/components/sections/career-growth-section";
import { CourseGridSection } from "@/components/sections/course-grid-section";
import { CTASection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LearningPathsSection } from "@/components/sections/learning-paths-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandMarqueeSection />
      <CourseGridSection />
      <LearningPathsSection />
      <CareerGrowthSection />
      <CTASection />
      {/* CtaBanner */}
      {/* TestimonialsSection */}
    </>
  );
}
