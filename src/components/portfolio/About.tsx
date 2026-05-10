import { motion } from "framer-motion";
import { Terminal, GitBranch, Container, Cloud, Atom, Server } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const skills = [
  { icon: Terminal, name: "Linux", note: "Shell, permissions, processes" },
  { icon: GitBranch, name: "Git & GitHub", note: "Branching, PRs, reviews" },
  { icon: Container, name: "Docker", note: "Images, compose, networks" },
  { icon: Cloud, name: "AWS", note: "EC2, S3, IAM basics" },
  { icon: Atom, name: "React", note: "Hooks, state, routing" },
  { icon: Server, name: "Node.js", note: "APIs, npm, tooling" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About"
              title={<>A learner, <em className="font-display italic">obsessively</em> documenting the climb.</>}
              description="I'm building toward a career in DevOps — one Linux command, container, and pipeline at a time. I care about clean systems, calm interfaces, and writing things down."
            />
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]">
                <p className="text-foreground/80 leading-relaxed">
                  Currently focused on the path from frontend into infrastructure: shipping
                  small full-stack projects, automating my own workflows, and treating every
                  repo as a chance to practice fundamentals. Long-term: cloud-native
                  engineering, observability and platform work.
                </p>

                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  {skills.map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.5 }}
                      whileHover={{ y: -4 }}
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-background/50 p-5 hover:shadow-[var(--shadow-soft)] transition-shadow"
                    >
                      <div className="rounded-xl bg-accent text-accent-foreground p-2.5 group-hover:bg-foreground group-hover:text-background transition-colors">
                        <s.icon className="size-5" />
                      </div>
                      <div>
                        <div className="font-medium">{s.name}</div>
                        <div className="text-sm text-muted-foreground">{s.note}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
