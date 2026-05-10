import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          — {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title text-foreground text-balance">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
