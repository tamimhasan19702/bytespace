import type { IconName } from "@/components/icons/interface";

export interface LearningPath {
  id: string;
  label: string;
  icon: IconName;
}

export interface LearningPathsContent {
  title: string;
  description: string;
  paths: LearningPath[];
}
