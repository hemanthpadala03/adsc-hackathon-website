type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <rect width="32" height="32" rx="8" className="fill-deep" />
      <circle
        cx="13"
        cy="16"
        r="6.25"
        fill="none"
        stroke="#7eb0df"
        strokeWidth="1.75"
      />
      <circle
        cx="19"
        cy="16"
        r="6.25"
        fill="none"
        stroke="#8dceab"
        strokeWidth="1.75"
      />
      <circle cx="16" cy="16" r="2.1" fill="#7ec8c8" />
    </svg>
  );
}
