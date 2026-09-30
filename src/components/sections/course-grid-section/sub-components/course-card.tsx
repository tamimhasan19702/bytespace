import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Star } from "lucide-react";
import Image from "next/image";
import type { Course } from "../interface";

export function CourseCard({ course }: { course: Course }) {
  const metaPillClass =
    "font-body rounded-full border-0 bg-white/60 px-2.5 py-3 text-[12px] font-medium text-shuttle-gray-800 backdrop-blur-sm";

  return (
    <Card className="h-full overflow-hidden rounded-2xl border-0 p-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
          className="object-cover"
        />

        <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-start justify-start gap-1.5">
          <Badge className={metaPillClass}>{course.lessons} Lessons</Badge>
          <Badge className={metaPillClass}>{course.durationLabel}</Badge>
          <Badge className={metaPillClass}>{course.comments} Comments</Badge>
        </div>
      </div>

      <CardContent className="p-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading line-clamp-2 min-w-0 flex-1 text-xl font-semibold leading-snug text-shuttle-gray-800">
            {course.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1 pt-0.5">
            <span className="font-body text-[18px] font-medium text-shuttle-gray-600">
              {course.rating}
            </span>
            <Star className="h-4.5 w-4.5 fill-shuttle-gray-300 text-shuttle-gray-300" />
          </div>
        </div>

        <p className="font-body mt-1 truncate text-xs text-shuttle-gray-400">
          by <span className="text-persian-blue-600">{course.instructor}</span>
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-start gap-2.5">
          <Badge
            variant="outline"
            className="font-body flex items-center gap-1 rounded-full border-border bg-transparent px-2.5 py-4 text-xs font-medium text-shuttle-gray-600"
          >
            <BarChart2 className="h-3.5 w-3.5" />
            {course.level}
          </Badge>

          <div className="flex items-center">
            <div className="flex -space-x-2.5">
              {course.avatars.map((avatar) => (
                <Avatar key={avatar.src} className="h-7 w-7">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                  <AvatarFallback>{avatar.alt.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="font-body z-10 -ml-2.5 flex h-7 items-center rounded-full bg-electric-lime-400 px-2 py-4 text-[10px] font-semibold text-shuttle-gray-800">
              {course.studentCountLabel}
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-baseline gap-1.5">
          <span className="font-heading text-lg font-bold text-persian-blue-600">
            ${course.price}
          </span>
          <span className="font-body text-xs text-shuttle-gray-400">
            /lifetime
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
