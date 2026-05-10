import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { portraitImg, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 md:pt-32 pb-16 overflow-hidden"
    >
      {/* Floating gradients */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 size-[40rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--beige) 0%, transparent 60%)" }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-32 size-[36rem] rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 60%)" }}
        animate={{ y: [0, -24, 0], x: [0, 24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left */}
        <div className="lg:col-span-7 relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6"
          >
            — Portfolio / 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-display font-display text-foreground"
          >
            <span className="italic font-light">Hello,</span>
            <br />
            I'm Sulthan
            <br />
            <span className="text-muted-foreground">Basha.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-lg md:text-xl text-foreground/80"
          >
            DevOps & Full Stack Learner.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-3 max-w-lg text-muted-foreground"
          >
            Building systems, learning cloud, and documenting growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
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
              Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - portrait */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden bg-muted shadow-[var(--shadow-elegant)]"
          >
            <img
              src={portraitImg}
              alt="Sulthan Basha portrait"
              width={1024}
              height={1280}
              className="size-full object-cover grayscale contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </motion.div>

          {/* Vertical text */}
          <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            DevOps Engineer · in progress
          </div>

          {/* Floating chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="hidden md:flex absolute -bottom-6 -left-6 lg:left-2 glass border border-border rounded-2xl px-5 py-3 items-center gap-3 shadow-[var(--shadow-soft)]"
          >
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm">Open to opportunities</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
