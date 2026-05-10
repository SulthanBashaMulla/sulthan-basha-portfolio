import { Mail, Linkedin, Github, Download, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const links = [
  { icon: Mail, label: "Email", value: "sulthan@example.com", href: "mailto:sulthan@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/sulthanbasha", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "@sulthanbasha", href: "https://github.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-foreground text-background overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at top, oklch(0.88 0.04 70 / 0.4), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-background/60">— Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-balance" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.95 }}>
            Let's build <em className="italic font-light">something</em>
            <br />
            quietly excellent.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.05}>
              <a
                href={l.href}
                className="group block rounded-3xl border border-background/15 p-6 hover:bg-background/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <l.icon className="size-5 text-background/70" />
                  <ArrowUpRight className="size-4 text-background/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="mt-10 text-xs uppercase tracking-widest text-background/50">{l.label}</div>
                <div className="mt-1 text-lg">{l.value}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm hover:bg-background/90 transition-colors"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
