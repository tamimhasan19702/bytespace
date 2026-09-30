import { SectionHeading } from "@/components/section-heading";
import { getCourseGrid } from "../data";
import { CategoryTabs } from "./category-tabs";
import { CourseCard } from "./course-card";
import { CourseGridList } from "./course-grid-list";

export async function CourseGridContent() {
  const { title, description, categories, courses } = await getCourseGrid();

  return (
    <>
      <SectionHeading title={title} description={description} />

      <CategoryTabs categories={categories} />

      <CourseGridList>
        {courses.map((course) => (
          <li key={course.id} data-course-card className="h-full">
            <CourseCard course={course} />
          </li>
        ))}
      </CourseGridList>
    </>
  );
}
