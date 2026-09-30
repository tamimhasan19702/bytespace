import { Suspense } from "react";
import { CourseGridContent } from "./sub-components/course-grid-content";
import { CourseGridSkeleton } from "./sub-components/course-grid-skeleton";

export function CourseGridSection() {
  return (
    <section className="container section-y">
      <Suspense fallback={<CourseGridSkeleton />}>
        <CourseGridContent />
      </Suspense>
    </section>
  );
}
