import { SectionHeadingSkeleton } from "@/components/section-heading/section-heading-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export function CourseGridSkeleton() {
  return (
    <>
      <SectionHeadingSkeleton />

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-8 w-24 rounded-full sm:h-10 sm:w-28" />
        ))}
      </div>

      <div className="mt-25 mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-full rounded-2xl p-4">
            <Skeleton className="aspect-4/3 w-full rounded-2xl" />
            <Skeleton className="mt-4 h-5 w-4/5 rounded-full" />
            <Skeleton className="mt-2.5 h-3 w-1/3 rounded-full" />
            <Skeleton className="mt-4 h-7 w-3/5 rounded-full" />
          </div>
        ))}
      </div>
    </>
  );
}
