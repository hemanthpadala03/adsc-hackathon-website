import { ArrowUpRight } from "lucide-react";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button";
import { registrationConfig } from "@/config/registration";

type RegistrationCtaProps = {
  size?: "default" | "xl";
  variant?: "default" | "outline";
  className?: string;
};

/**
 * Single registration entry point. It reads `registrationConfig` only.
 * With no URL it renders a disabled, non-interactive state and never a form.
 */
export function RegistrationCta({
  size = "xl",
  variant = "default",
  className,
}: RegistrationCtaProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (!registrationConfig.url) {
    return (
      <span
        role="link"
        aria-disabled="true"
        className={cn(classes, "cursor-not-allowed opacity-70")}
      >
        {registrationConfig.closedLabel}
      </span>
    );
  }

  return (
    <a
      href={registrationConfig.url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {registrationConfig.openLabel}
      <ArrowUpRight aria-hidden />
    </a>
  );
}
