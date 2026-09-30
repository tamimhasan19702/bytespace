import { SectionHeadingSkeleton } from "@/components/section-heading/section-heading-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export function LearningPathsSkeleton() {
  return (
    <>
      <SectionHeadingSkeleton />

      <div className="mt-10 mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-10 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-36 rounded-2xl sm:h-40" />
        ))}
      </div>
    </>
  );
}
