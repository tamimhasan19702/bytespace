interface ProgressCardProps {
  variant: "progress";
  title: string;
  value: number;
  className?: string;
}

interface HighlightCardProps {
  variant: "highlight";
  title: string;
  subtitle: string;
  className?: string;
}

interface RatingCardProps {
  variant: "rating";
  title: string;
  rating: number;
  reviewCount: number;
  avatars: { src: string; alt: string }[];
  badgeLabel: string;
  className?: string;
}

export type StatCardProps = ProgressCardProps | HighlightCardProps | RatingCardProps;
