import { motion } from "framer-motion";
import {
  Terminal, GitBranch, Container, Cloud, Atom, Server,
  Boxes, Workflow, ShieldCheck, Database, Code2, Wind,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Skill = {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  note: string;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const groups: SkillGroup[] = [
  {
    title: "DevOps & Cloud",
    description: "The stack I'm building my career on.",
    skills: [
      { name: "Linux",        level: 75, icon: Terminal,    note: "Shell, permissions, processes" },
      { name: "Git & GitHub", level: 85, icon: GitBranch,   note: "Branching, PRs, reviews" },
      { name: "Docker",       level: 65, icon: Container,   note: "Images, compose, networks" },
      { name: "AWS",          level: 55, icon: Cloud,       note: "EC2, S3, IAM basics" },
      { name: "CI/CD",        level: 45, icon: Workflow,    note: "GitHub Actions pipelines" },
      { name: "Kubernetes",   level: 25, icon: Boxes,       note: "Learning fundamentals" },
    ],
  },
  {
    title: "Frontend",
    description: "How I ship interfaces.",
    skills: [
      { name: "React",      level: 80, icon: Atom,  note: "Hooks, state, routing" },
      { name: "TypeScript", level: 70, icon: Code2, note: "Types, generics, DX" },
      { name: "Tailwind",   level: 85, icon: Wind,  note: "Design tokens, responsive" },
    ],
  },
  {
    title: "Backend & Data",
    description: "Server-side fundamentals.",
    skills: [
      { name: "Node.js",   level: 65, icon: Server,      note: "APIs, npm, tooling" },
      { name: "REST APIs", level: 70, icon: ShieldCheck, note: "Design, auth, validation" },
      { name: "SQL",       level: 55, icon: Database,    note: "Queries, joins, indexes" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Skills"
              title={<>The tools <em className="font-display italic">in my toolkit</em>.</>}
              description="A living snapshot of where I'm strong, where I'm growing, and what's next on the roadmap."
            />
          </div>

          <div className="lg:col-span-7 space-y-12">
            {groups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 0.05}>
                <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]">
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-display tracking-tight">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>

                  <ul className="space-y-6">
                    {group.skills.map((s, i) => (
                      <motion.li
                        key={s.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="rounded-xl bg-accent text-accent-foreground p-2.5">
                            <s.icon className="size-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">{s.name}</div>
                            <div className="text-xs text-muted-foreground truncate">
                              {s.note}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 ml-[3.25rem] h-1.5 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-foreground rounded-full"
                          />
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
