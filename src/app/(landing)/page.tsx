import { BrandMarqueeSection } from "@/sections/brand-marquee-section";
import { CareerGrowthSection } from "@/sections/career-growth-section";
import { CourseGridSection } from "@/sections/course-grid-section";
import { CTASection } from "@/sections/cta-section";
import { HeroSection } from "@/sections/hero-section";
import { LearningPathsSection } from "@/sections/learning-paths-section";
import { TestimonialsSection } from "@/sections/testimonial-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandMarqueeSection />
      <CourseGridSection />
      <LearningPathsSection />
      <CareerGrowthSection />
      <CTASection />
      <TestimonialsSection />
    </>
  );
}
