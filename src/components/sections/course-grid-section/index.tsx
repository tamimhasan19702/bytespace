import { SectionHeading } from "@/components/section-heading";
import dynamic from "next/dynamic";
import { CategoryTabs } from "./sub-components/category-tabs";
import { CourseGridSkeleton } from "./sub-components/course-grid-skeleton";

const CourseGrid = dynamic(
  () => import("./sub-components/course-grid").then((mod) => mod.CourseGrid),
  {
    loading: () => <CourseGridSkeleton />,
  },
);

export function CourseGridSection() {
  return (
    <section className="container section-y">
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div className="mt-10">
        <CategoryTabs />
      </div>

      <CourseGrid />
    </section>
  );
}
