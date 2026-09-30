import type { LucideIcon } from "lucide-react";

export interface LearningPath {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface LearningPathsContent {
  title: string;
  description: string;
  paths: LearningPath[];
}
