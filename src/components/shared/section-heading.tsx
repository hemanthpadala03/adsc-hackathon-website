import { cn } from "cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm font-medium tracking-wide text-teal">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-5xl"
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lede}</p>
      ) : null}
    </div>
  );
}
