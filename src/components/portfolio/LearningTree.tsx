import { motion } from "framer-motion";
import { learningMilestones } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function LearningTree() {
  return (
    <section id="learning" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Learning Tree"
          title={<>The path so <em className="font-display italic">far</em>.</>}
          description="A growing record of what I've studied and shipped."
        />

        <div className="mt-20 max-w-3xl mx-auto space-y-24">
          {learningMilestones.map((group) => (
            <div key={group.year} className="relative">
              <div className="sticky top-24 mb-10 z-10 flex items-baseline gap-4">
                <span className="font-display text-6xl md:text-8xl text-foreground/10 leading-none">
                  {group.year}
                </span>
                {group.label && (
                  <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {group.label}
                  </span>
                )}
              </div>

              <ol className="relative border-l border-border pl-8 md:pl-12 space-y-10">
                {group.items.map((item, i) => {
                  const isPlanned = item.status === "planned";
                  const isProgress = item.status === "in-progress";
                  return (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: i * 0.06, duration: 0.5 }}
                      className="relative"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 + 0.2, type: "spring", stiffness: 200 }}
                        className="absolute -left-[37px] md:-left-[53px] top-2 flex size-4 items-center justify-center"
                      >
                        <span
                          className={
                            "size-3 rounded-full " +
                            (isPlanned
                              ? "bg-background border border-dashed border-foreground/40"
                              : isProgress
                                ? "bg-foreground/60"
                                : "bg-foreground")
                          }
                        />
                        <span className="absolute size-6 rounded-full border border-foreground/20" />
                      </motion.span>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3
                          className={
                            "font-display text-2xl md:text-3xl " +
                            (isPlanned ? "text-foreground/55" : "")
                          }
                        >
                          {item.title}
                        </h3>
                        {item.status && (
                          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                            {item.status === "in-progress" ? "in progress" : item.status}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-muted-foreground">{item.note}</p>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
