import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, FileText, Play, X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title={<>Projects in <em className="font-display italic">progress</em>.</>}
          description="Small, deliberate builds — each one a chance to practice a stack end to end."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="group rounded-3xl bg-card border border-border overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-7">
                  <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.short}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      onClick={() => setActive(p)}
                      className="inline-flex items-center gap-2 text-sm rounded-full bg-foreground text-background px-4 py-2 hover:bg-foreground/90 transition-colors"
                    >
                      View case study
                      <ArrowUpRight className="size-4" />
                    </button>
                    <a
                      href={p.live}
                      className="inline-flex items-center gap-2 text-sm rounded-full border border-border px-4 py-2 hover:bg-accent transition-colors"
                    >
                      Live demo
                    </a>
                    <a
                      href={p.github}
                      className="inline-flex items-center gap-2 text-sm rounded-full border border-border px-4 py-2 hover:bg-accent transition-colors"
                    >
                      <Github className="size-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full md:max-w-4xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl bg-background border border-border shadow-[var(--shadow-elegant)]"
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="sticky top-4 ml-auto mr-4 mt-4 flex size-9 items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors z-10"
        >
          <X className="size-4" />
        </button>

        <div className="px-6 md:px-10 pb-12 -mt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Case Study</p>
          <h3 className="mt-3 font-display text-3xl md:text-5xl">{project.title}</h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {project.screenshots.map((s, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                <img src={s} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" className="size-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <Block title="Features" items={project.features} />
            <Block title="Challenges solved" items={project.challenges} />
          </div>

          <div className="mt-10">
            <h4 className="font-display text-2xl">Architecture</h4>
            <p className="mt-3 text-muted-foreground leading-relaxed">{project.architecture}</p>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Play className="size-4" />
              Demo video
            </div>
            <div className="mt-4 aspect-video rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
              Demo coming soon
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={project.live} className="inline-flex items-center gap-2 text-sm rounded-full bg-foreground text-background px-5 py-2.5">
              Live website <ArrowUpRight className="size-4" />
            </a>
            <a href={project.github} className="inline-flex items-center gap-2 text-sm rounded-full border border-border px-5 py-2.5 hover:bg-accent">
              <Github className="size-4" /> GitHub
            </a>
            <a href={project.docs} className="inline-flex items-center gap-2 text-sm rounded-full border border-border px-5 py-2.5 hover:bg-accent">
              <FileText className="size-4" /> Documentation
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-2xl">{title}</h4>
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-foreground/80">
            <span className="mt-2 size-1.5 rounded-full bg-foreground shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
