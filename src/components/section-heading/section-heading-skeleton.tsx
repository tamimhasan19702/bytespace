import { Skeleton } from "@/components/ui/skeleton";

export function SectionHeadingSkeleton() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Skeleton className="mx-auto h-8 w-full max-w-md sm:h-10" />
      <Skeleton className="mx-auto mt-3 h-4 w-full max-w-xl" />
      <Skeleton className="mx-auto mt-2 h-4 w-full max-w-sm" />
    </div>
  );
}
