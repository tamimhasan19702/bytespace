interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="font-body mt-3 text-sm text-muted-foreground sm:text-base">{description}</p>
      )}
    </div>
  );
}
