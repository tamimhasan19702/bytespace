import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils/cn";
import { Star } from "lucide-react";
import { StatCardProps } from "./interface";

function ProgressCard({ title, value, className }: StatCardProps & { variant: "progress" }) {
  return (
    <Card className={cn("w-64 rounded-2xl border-0 shadow-lg", className)}>
      <CardContent className="p-4">
        <p className="font-body text-sm text-muted-foreground">{title}</p>
        <p className="font-heading mt-1 text-3xl font-bold text-foreground">{value}%</p>
        <Progress value={value} className="mt-3 h-2 bg-muted [&>div]:bg-electric-lime-400" />
      </CardContent>
    </Card>
  );
}

function HighlightCard({ title, subtitle, className }: StatCardProps & { variant: "highlight" }) {
  return (
    <Card
      className={cn(
        "w-64 rounded-2xl border-2 border-electric-lime-400 bg-persian-blue-800 shadow-lg",
        className,
      )}
    >
      <CardContent className="p-4">
        <p className="font-heading text-lg font-semibold text-white-800">{title}</p>
        <p className="font-body mt-1 text-sm text-white-600">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

function RatingCard({
  title,
  rating,
  reviewCount,
  avatars,
  badgeLabel,
  className,
}: StatCardProps & { variant: "rating" }) {
  return (
    <Card className={cn("w-64 rounded-2xl border-0 bg-electric-lime-400 shadow-lg", className)}>
      <CardContent className="p-4">
        <p className="font-heading text-lg font-semibold text-persian-blue-800">{title}</p>

        <div className="mt-1 flex items-center gap-1">
          <span className="font-body text-sm font-medium text-persian-blue-800">{rating}</span>
          <span className="font-body text-sm text-persian-blue-800/70">({reviewCount})</span>
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        </div>

        <div className="mt-3 flex items-center">
          <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
              <Avatar key={i} className="h-9 w-9 border-2 border-electric-lime-400">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
                <AvatarFallback>{avatar.alt.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-electric-lime-400 bg-persian-blue-800">
            <span className="font-body text-[10px] font-semibold text-white-800">{badgeLabel}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatCard(props: StatCardProps) {
  switch (props.variant) {
    case "progress":
      return <ProgressCard {...props} />;
    case "highlight":
      return <HighlightCard {...props} />;
    case "rating":
      return <RatingCard {...props} />;
    default:
      return null;
  }
}
