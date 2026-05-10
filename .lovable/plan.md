## Goal
Build a frontend-only premium personal portfolio for **Sulthan Basha** (DevOps & Full Stack learner) using TanStack Start (existing template), Tailwind, Framer Motion, and Lucide React. Editorial luxury feel: black/white/beige/soft-gray, large typography, soft shadows, glassmorphism, smooth scroll animations.

## Design System (src/styles.css)
Update tokens to luxury palette (oklch):
- `--background`: warm off-white (beige-tinted)
- `--foreground`: near-black
- `--accent` / `--muted`: soft gray + beige
- New tokens: `--beige`, `--beige-soft`, `--charcoal`, `--gradient-hero`, `--shadow-soft`, `--shadow-elegant`
- Dark mode mirrored (deep charcoal + warm beige accents)
- Add serif display font (e.g. Fraunces / Playfair) + sans (Inter) via Google Fonts in `__root.tsx` head links
- Custom scrollbar styling + smooth-scroll on `html`

## Dependencies
`bun add framer-motion` (lucide-react and tailwind already present).

## Routes (TanStack file-based)
Single-page editorial portfolio is appropriate here (sections flow as one narrative). Use one route with section anchors for in-page nav, but each major section is a self-contained component file. Set proper `head()` meta on index.

- `src/routes/index.tsx` — assembles all sections, sets SEO meta (title "Sulthan Basha — DevOps & Full Stack", description, og tags)

## Components (src/components/portfolio/)
- `Navbar.tsx` — sticky, glassmorphic on scroll, logo left, links (About, Projects, Certifications, Learning, Career, Contact), mobile sheet menu
- `Hero.tsx` — left: oversized "Hello", name, subtitle, description, two CTAs, stats row (12+/8+/5+), vertical "DevOps Engineer" side text; right: grayscale portrait placeholder with animated floating gradient blobs (framer-motion)
- `About.tsx` — bio card + animated skill cards grid (Linux, Git, Docker, AWS, React, Node) with Lucide icons + hover lift
- `Projects.tsx` + `ProjectCard.tsx` + `ProjectModal.tsx` — 4 sample projects, card with image/title/desc/tech badges/buttons; click opens shadcn Dialog with full details (description, screenshots gallery, demo video embed placeholder, features list, challenges, architecture, docs, GitHub/live links)
- `Certifications.tsx` — gallery grid of 4 certs (Git, Linux Unhatched, AWS Basics, Docker Fundamentals) with image, title, org, credential ID, issue date, Verify button
- `LearningTree.tsx` — vertical animated timeline for 2025 milestones with connected nodes, scroll-reveal stagger
- `CareerTree.tsx` — roadmap from Student → DevOps Engineer with animated SVG connectors and node hover states
- `Contact.tsx` — email, LinkedIn, GitHub, Resume download button, large editorial heading
- `Footer.tsx` — minimal: social icons, copyright, hover effects
- `SectionHeading.tsx` + `RevealOnScroll.tsx` — shared primitives using framer-motion `whileInView`

## Data
`src/data/portfolio.ts` — typed arrays for projects, certifications, skills, learningMilestones, careerSteps. All local, no backend.

## Assets
Generate one grayscale editorial portrait placeholder + 4 project preview images via image generation, store in `src/assets/`. Use static placeholder paths for cert images and screenshots.

## Animations
- `framer-motion` for: hero text stagger, floating gradient blobs (infinite y/x loops), section reveals (`whileInView` with `viewport={{ once: true, margin: "-80px" }}`), card hover (scale 1.02 + shadow), modal scale-in, timeline node draw-in, navbar background on scroll
- Smooth scroll via CSS `scroll-behavior: smooth` + anchor links

## Responsiveness
Mobile-first Tailwind: hero stacks, navbar collapses to hamburger (shadcn Sheet), grids reduce columns, typography scales with `clamp()` in styles.css.

## Out of scope
- No backend, auth, DB, or contact form submission (mailto link only)
- No real PDF resume — button links to `#` placeholder the user can swap
- No dark/light toggle UI unless trivial; tokens support both, default light luxury

## Technical notes
- Keep all colors via semantic tokens — no raw hex in components
- Lazy-load project modal content + heavy images with `loading="lazy"`
- All Lucide icons tree-shaken via named imports
- Verify build after implementation; replace placeholder index content fully

## Deliverable
A polished single-page portfolio matching the brief, ready to publish.