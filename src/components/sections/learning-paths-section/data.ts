import { LearningPath, LearningPathsContent } from "./interface";

export const learningPaths: LearningPath[] = [
  { id: "design", label: "Design", icon: "design" },
  { id: "development", label: "Development", icon: "development" },
  { id: "it-software", label: "IT & Software", icon: "software" },
  { id: "business", label: "Business", icon: "business" },
  { id: "marketing", label: "Marketing", icon: "marketing" },
  { id: "photography", label: "Photography", icon: "photography" },
];

export async function getLearningPaths(): Promise<LearningPathsContent> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    title: "Explore Diverse Learning Paths at Bytespace",
    description:
      "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
    paths: learningPaths,
  };
}
