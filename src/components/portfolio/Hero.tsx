import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { portraitImg, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 md:pt-28 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-10 lg:gap-0 items-end lg:items-stretch min-h-[calc(100vh-6rem)]">
        {/* Left content */}
        <div className="lg:col-span-7 px-6 md:px-12 lg:px-16 pt-6 lg:pt-24 pb-16 flex flex-col">
          {/* Top meta row */}
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12 lg:mb-20">
            <span>Portfolio © 2026</span>
            <span className="hidden md:inline">Based in India</span>
          </div>

          {/* Stats — above headline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-md mb-10 lg:mb-14"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-sans text-3xl md:text-4xl font-medium tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Headline — sans-serif, oversized */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-display font-sans font-medium text-foreground tracking-[-0.04em]"
          >
            Hello,
            <br />
            I'm Sulthan
            <br />
            <span className="text-muted-foreground">Basha.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 max-w-md text-base md:text-lg text-foreground/75"
          >
            DevOps Learner | Cloud Enthusiast — exploring Linux, Git, CI/CD, Docker, and scalable infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm hover:bg-foreground/90 transition-colors"
            >
              View Projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              <Download className="size-4" />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right — full-bleed portrait */}
        <div className="lg:col-span-5 relative lg:self-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[70vh] lg:h-full w-full overflow-hidden"
          >
            <img
              src={portraitImg}
              alt="Sulthan Basha portrait"
              className="size-full object-cover grayscale contrast-[1.05] mix-blend-multiply"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />

            {/* Vertical text */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.4em] text-background/80">
              DevOps Engineer · in progress
            </div>

            {/* Floating chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 md:right-auto glass border border-border/60 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-[var(--shadow-soft)]"
            >
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm">Open to opportunities</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
