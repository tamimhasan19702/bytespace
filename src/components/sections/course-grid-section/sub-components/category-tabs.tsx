"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import { categories } from "../data";

export function CategoryTabs() {
  const [active, setActive] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? categories : categories.slice(0, 15);

  return (
    <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4">
      {visible.map((category) => (
        <Badge
          key={category}
          onClick={() => setActive(category)}
          className={cn(
            "font-body h-10 shrink-0 rounded-full px-4 cursor-pointer text-[16px] transition-colors",
            active === category
              ? "bg-electric-lime-400 text-shuttle-gray-800  hover:bg-electric-lime-500"
              : "bg-muted text-muted-foreground hover:bg-shuttle-gray-200 hover:text-foreground",
          )}
        >
          {category}
        </Badge>
      ))}

      {!showAll && categories.length > 15 && (
        <button
          onClick={() => setShowAll(true)}
          className="font-body h-10 shrink-0 rounded-full px-4 cursor-pointer bg-muted text-persian-blue-800 hover:bg-shuttle-gray-200 transition-colors text-[16px] "
        >
          + More
        </button>
      )}
    </div>
  );
}
