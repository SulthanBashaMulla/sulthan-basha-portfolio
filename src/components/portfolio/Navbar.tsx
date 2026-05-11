import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Left: logo mark + name */}
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative inline-flex size-9 items-center justify-center rounded-full bg-foreground text-background text-sm tracking-tight">
            <span className="font-medium">SB</span>
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium tracking-tight">Sulthan Basha</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Portfolio
            </span>
          </span>
        </a>

        {/* Center nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-full border border-border/70 bg-background/60 backdrop-blur px-2 py-1.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-foreground/75 hover:text-foreground rounded-full hover:bg-foreground/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2 text-sm hover:bg-foreground/90 transition-colors"
        >
          Let's talk
        </a>

        <button
          aria-label="Open menu"
          className="md:hidden rounded-full p-2 hover:bg-muted transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border/60"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base py-2 border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm"
            >
              Let's talk
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
