import { Suspense } from "react";
import { LearningPathsContent } from "./sub-components/learning-paths-content";
import { LearningPathsSkeleton } from "./sub-components/learning-paths-skeleton";

export function LearningPathsSection() {
  return (
    <section className="container section-y pt-0!">
      <Suspense fallback={<LearningPathsSkeleton />}>
        <LearningPathsContent />
      </Suspense>
    </section>
  );
}
