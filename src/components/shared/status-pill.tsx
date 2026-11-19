export function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-medium text-rwth">
      <span aria-hidden className="size-1.5 rounded-full bg-turquoise" />
      {children}
    </p>
  );
}
