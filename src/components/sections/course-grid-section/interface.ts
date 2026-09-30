export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CourseAvatar {
  src: string;
  alt: string;
}

export interface Course {
  id: string;
  title: string;
  image: string;
  lessons: number;
  durationLabel: string;
  comments: number;
  rating: number;
  instructor: string;
  level: CourseLevel;
  price: number;
  originalPrice?: number;
  avatars: CourseAvatar[];
  studentCountLabel: string;
}
