import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg">Sulthan Basha</div>

        <div className="flex items-center gap-5">
          <a href="https://github.com" aria-label="GitHub" className="text-background/70 hover:text-background transition-colors">
            <Github className="size-5" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-background/70 hover:text-background transition-colors">
            <Linkedin className="size-5" />
          </a>
          <a href="mailto:sulthan@example.com" aria-label="Email" className="text-background/70 hover:text-background transition-colors">
            <Mail className="size-5" />
          </a>
        </div>

        <div className="text-xs text-background/50">
          © {new Date().getFullYear()} Sulthan Basha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
