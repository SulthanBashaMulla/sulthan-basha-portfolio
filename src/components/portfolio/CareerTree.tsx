import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { careerSteps } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function CareerTree() {
  return (
    <section id="career" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Career Tree"
          title={<>From student to <em className="font-display italic">DevOps</em>.</>}
          description="A roadmap I'm walking — one node at a time."
          align="center"
        />

        <div className="mt-20 max-w-md mx-auto flex flex-col items-center">
          {careerSteps.map((step, i) => {
            const isLast = i === careerSteps.length - 1;
            const isFirst = i === 0;
            return (
              <div key={step} className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                  className={
                    "w-full text-center px-6 py-4 rounded-2xl border " +
                    (isLast
                      ? "bg-foreground text-background border-foreground shadow-[var(--shadow-elegant)]"
                      : isFirst
                        ? "bg-accent text-accent-foreground border-border"
                        : "bg-card text-foreground border-border shadow-[var(--shadow-soft)]")
                  }
                >
                  <span className="font-display text-xl md:text-2xl">{step}</span>
                </motion.div>

                {!isLast && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 40, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 + 0.2, duration: 0.4 }}
                    className="my-2 flex flex-col items-center"
                  >
                    <span className="block w-px h-6 bg-border" />
                    <ArrowDown className="size-4 text-muted-foreground" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
