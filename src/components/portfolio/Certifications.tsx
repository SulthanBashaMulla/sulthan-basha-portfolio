import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Certifications"
          title={<>Proof of <em className="font-display italic">practice</em>.</>}
          description="Foundations earned through structured courses and verified credentials."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <article className="group rounded-2xl bg-card border border-border overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.org}</p>
                  <h3 className="mt-2 font-display text-xl leading-snug">{c.title}</h3>
                  <div className="mt-4 text-xs text-muted-foreground space-y-1">
                    <div>ID · {c.credentialId}</div>
                    <div>Issued · {c.issued}</div>
                  </div>
                  <a
                    href={c.verifyUrl}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                  >
                    Verify <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
