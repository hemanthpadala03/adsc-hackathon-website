import { cn } from "cn";

export function SpectrumRule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("spectrum-rule", className)} />;
}
