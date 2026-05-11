import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Cloud, Server, Sparkles } from "lucide-react";
import { careerSteps, type CareerStep } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const icons = [GraduationCap, Code2, Rocket, Cloud, Server, Sparkles];

const phaseLabel: Record<CareerStep["phase"], string> = {
  past: "Completed",
  present: "Now",
  future: "Ahead",
};

export function CareerTree() {
  return (
    <section id="career" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Career Path"
          title={<>From student to <em className="font-display italic">DevOps Engineer</em>.</>}
          description="The roles I have played, where I am now, and where I am heading next."
          align="center"
        />

        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Vertical spine */}
          <span
            aria-hidden
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2"
          />

          <ol className="flex flex-col gap-12 md:gap-16">
            {careerSteps.map((step, i) => {
              const Icon = icons[i % icons.length];
              const isLeft = i % 2 === 0;
              const isPresent = step.phase === "present";
              const isFuture = step.phase === "future";

              return (
                <li key={step.years} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* Node dot */}
                  <span
                    aria-hidden
                    className={
                      "absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 inline-flex size-9 items-center justify-center rounded-full border " +
                      (isPresent
                        ? "bg-foreground text-background border-foreground shadow-[var(--shadow-elegant)]"
                        : isFuture
                          ? "bg-background text-muted-foreground border-dashed border-border"
                          : "bg-background text-foreground border-border")
                    }
                  >
                    <Icon className="size-4" />
                  </span>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                    className={
                      "pl-16 md:pl-0 " +
                      (isLeft ? "md:col-start-1 md:pr-16 md:text-right" : "md:col-start-2 md:pl-16")
                    }
                  >
                    <div
                      className={
                        "inline-flex flex-col gap-3 rounded-2xl border p-6 md:p-7 w-full " +
                        (isPresent
                          ? "bg-foreground text-background border-foreground shadow-[var(--shadow-elegant)]"
                          : isFuture
                            ? "bg-card/60 text-foreground border-dashed border-border"
                            : "bg-card text-foreground border-border shadow-[var(--shadow-soft)]")
                      }
                    >
                      <div
                        className={
                          "flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] " +
                          (isLeft ? "md:justify-end" : "") +
                          (isPresent ? " text-background/70" : " text-muted-foreground")
                        }
                      >
                        <span>{step.years}</span>
                        <span aria-hidden>·</span>
                        <span>{phaseLabel[step.phase]}</span>
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                        {step.role}
                      </h3>

                      <div
                        className={
                          "text-sm font-medium " +
                          (isPresent ? "text-background/80" : "text-foreground/70")
                        }
                      >
                        {step.org}
                      </div>

                      <p
                        className={
                          "text-sm leading-relaxed " +
                          (isPresent ? "text-background/75" : "text-muted-foreground")
                        }
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
