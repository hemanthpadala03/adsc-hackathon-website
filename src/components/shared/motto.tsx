import { siteConfig } from "@/config/site";
import { cn } from "cn";

const inkTones = ["text-rwth", "text-teal", "text-green"] as const;
const inverseTones = ["text-[#c5ddf5]", "text-[#c7ebe6]", "text-[#d5efdc]"] as const;

type MottoProps = {
  tone?: "ink" | "inverse";
  className?: string;
};

export function Motto({ tone = "ink", className }: MottoProps) {
  const words = siteConfig.motto.split(/\s+/).filter(Boolean);
  const tones = tone === "inverse" ? inverseTones : inkTones;

  return (
    <p
      className={cn("font-serif text-4xl leading-tight italic md:text-5xl", className)}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={tones[Math.min(index, tones.length - 1)]}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
