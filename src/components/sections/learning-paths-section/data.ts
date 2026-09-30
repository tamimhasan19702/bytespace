import {
  Building2,
  Camera,
  CodeXml,
  Laptop,
  Megaphone,
  Palette,
} from "lucide-react";
import { LearningPath, LearningPathsContent } from "./interface";

export const learningPaths: LearningPath[] = [
  { id: "design", label: "Design", icon: Palette },
  { id: "development", label: "Development", icon: CodeXml },
  { id: "it-software", label: "IT & Software", icon: Laptop },
  { id: "business", label: "Business", icon: Building2 },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "photography", label: "Photography", icon: Camera },
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
