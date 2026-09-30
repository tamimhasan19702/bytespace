import { Card, CardContent } from "@/components/ui/card";
import { LearningPath } from "../interface";

export function LearningPathCard({ path }: { path: LearningPath }) {
  const Icon = path.icon;

  return (
    <Card className="h-full rounded-2xl border border-shuttle-gray-200 p-0 shadow-none transition-colors hover:border-electric-lime-400 cursor-pointer">
      <CardContent className="flex h-full flex-col items-center justify-center gap-2.5 px-3 py-6 sm:gap-3 sm:px-4 sm:py-8">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-electric-lime-400 sm:h-12 sm:w-12">
          <Icon className="h-5 w-5 text-shuttle-gray-800" />
        </div>
        <span className="font-body text-center text-base font-medium text-shuttle-gray-800 sm:text-lg xl:text-xl">
          {path.label}
        </span>
      </CardContent>
    </Card>
  );
}
