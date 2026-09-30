import { Skeleton } from "@/components/ui/skeleton";

export function CourseGridSkeleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mt-25 mx-auto grid w-full max-w-300 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
    >
      <span className="sr-only">Loading courses…</span>

      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="h-full rounded-2xl p-4">
          <Skeleton className="aspect-4/3 w-full rounded-2xl" />
          <Skeleton className="mt-4 h-5 w-4/5 rounded-full" />
          <Skeleton className="mt-2.5 h-3 w-1/3 rounded-full" />
          <Skeleton className="mt-4 h-7 w-3/5 rounded-full" />
        </div>
      ))}
    </div>
  );
}
