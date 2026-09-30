"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";

const MOBILE_VISIBLE_COUNT = 5;
const VISIBLE_COUNT = 15;

export function CategoryTabs({ categories }: { categories: string[] }) {
  const [active, setActive] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? categories : categories.slice(0, VISIBLE_COUNT);

  return (
    <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-4">
      {visible.map((category, index) => (
        <Badge
          key={category}
          onClick={() => setActive(category)}
          className={cn(
            "font-body h-8 shrink-0 cursor-pointer rounded-full px-3 text-sm transition-colors sm:h-10 sm:px-4 sm:text-base",
            !showAll && index >= MOBILE_VISIBLE_COUNT && "max-sm:hidden",
            active === category
              ? "bg-electric-lime-400 text-shuttle-gray-800 hover:bg-electric-lime-500"
              : "bg-muted text-muted-foreground hover:bg-shuttle-gray-200 hover:text-foreground",
          )}
        >
          {category}
        </Badge>
      ))}

      {!showAll && categories.length > VISIBLE_COUNT && (
        <button
          onClick={() => setShowAll(true)}
          className="font-body h-8 shrink-0 cursor-pointer rounded-full bg-muted px-3 text-sm text-persian-blue-800 transition-colors hover:bg-shuttle-gray-200 hover:text-foreground sm:h-10 sm:px-4 sm:text-base"
        >
          + More
        </button>
      )}
    </div>
  );
}
