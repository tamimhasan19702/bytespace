import { getCourses } from "../data";
import { CourseCard } from "./course-card";
import { CourseGridList } from "./course-grid-list";

export async function CourseGrid() {
  const courses = await getCourses();

  return (
    <CourseGridList>
      {courses.map((course) => (
        <li key={course.id} data-course-card className="h-full">
          <CourseCard course={course} />
        </li>
      ))}
    </CourseGridList>
  );
}
