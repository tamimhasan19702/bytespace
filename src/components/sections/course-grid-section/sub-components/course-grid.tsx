"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import { useEffect, useRef, useState } from "react";
import { getCourses } from "../data";
import type { Course } from "../interface";
import { CourseCard } from "./course-card";
import { CourseGridSkeleton } from "./course-grid-skeleton";

export function CourseGrid() {
  const scope = useRef<HTMLUListElement>(null);
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    let isActive = true;

    getCourses().then((result) => {
      if (isActive) setCourses(result);
    });

    return () => {
      isActive = false;
    };
  }, []);

  useGSAP(
    () => {
      if (!courses) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-course-card]", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: scope.current, start: "top 85%", once: true },
      });
    },
    { scope, dependencies: [courses] },
  );

  if (!courses) {
    return <CourseGridSkeleton />;
  }

  return (
    <ul
      ref={scope}
      className="mt-25 mx-auto grid w-full max-w-300 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
    >
      {courses.map((course) => (
        <li key={course.id} data-course-card className="h-full">
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}
