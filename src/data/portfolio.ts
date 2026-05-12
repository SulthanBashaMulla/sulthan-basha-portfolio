import portraitImg from "@/assets/portrait.png";
import collegeImg from "@/assets/project-college.jpg";
import devopsImg from "@/assets/project-devops.jpg";
import attendanceImg from "@/assets/project-attendance.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

export { portraitImg };

export type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  image: string;
  screenshots: string[];
  features: string[];
  challenges: string[];
  architecture: string;
  docs: string;
  github: string;
  live: string;
  video?: string;
};

export const projects: Project[] = [
  {
    id: "college-pwa",
    title: "College Management PWA",
    short: "An offline-first PWA for campus operations and student services.",
    description:
      "A progressive web app built to centralize college workflows — attendance, timetables, announcements and student profiles — with offline support and instant install.",
    tech: ["React", "Vite", "Tailwind", "PWA", "IndexedDB"],
    image: collegeImg,
    screenshots: [collegeImg, attendanceImg, devopsImg],
    features: [
      "Offline-first with service workers",
      "Role-based dashboards for students and staff",
      "Realtime announcement feed",
      "Installable on mobile and desktop",
    ],
    challenges: [
      "Designing a cache strategy that survives flaky campus Wi-Fi",
      "Synchronising local state with the server without conflicts",
    ],
    architecture:
      "React SPA shell + Workbox service worker. IndexedDB for local persistence with a background sync queue posting to a REST API.",
    docs: "#",
    github: "https://github.com/sulthanbasha",
    live: "#",
  },
  {
    id: "devops-tracker",
    title: "DevOps Learning Tracker",
    short: "A personal kanban for tracking the DevOps learning roadmap.",
    description:
      "A focused tool to plan, track and reflect on the DevOps journey — from Linux fundamentals to Kubernetes — with daily notes, streaks and resource links.",
    tech: ["React", "TypeScript", "Tailwind", "LocalStorage"],
    image: devopsImg,
    screenshots: [devopsImg, portfolioImg, collegeImg],
    features: [
      "Drag-and-drop kanban for topics",
      "Daily streaks and reflection journal",
      "Resource library per topic",
      "Exportable progress report",
    ],
    challenges: [
      "Modelling open-ended learning as discrete trackable units",
      "Keeping the UI calm despite rich data",
    ],
    architecture:
      "Client-only React app. State persisted in localStorage with a versioned schema and migration helpers.",
    docs: "#",
    github: "https://github.com/sulthanbasha",
    live: "#",
  },
  {
    id: "attendance-dashboard",
    title: "Student Attendance Dashboard",
    short: "An analytics dashboard summarizing attendance across cohorts.",
    description:
      "A data-rich dashboard that turns raw attendance records into insight — trends, at-risk students, and exportable reports for faculty.",
    tech: ["React", "Recharts", "Tailwind", "Node.js"],
    image: attendanceImg,
    screenshots: [attendanceImg, collegeImg, devopsImg],
    features: [
      "Cohort-level KPIs and trends",
      "At-risk student detection",
      "CSV export and printable reports",
      "Mobile-friendly tables",
    ],
    challenges: [
      "Rendering thousands of rows without jank",
      "Designing charts that read well in print",
    ],
    architecture:
      "Node API aggregating attendance into materialized summaries; React frontend with Recharts and virtualized tables.",
    docs: "#",
    github: "https://github.com/sulthanbasha",
    live: "#",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    short: "This site — an editorial, animated personal portfolio.",
    description:
      "A frontend-only portfolio built with TanStack Start, Tailwind and Framer Motion. Editorial layout, large typography and quiet animation.",
    tech: ["TanStack Start", "React", "Tailwind", "Framer Motion"],
    image: portfolioImg,
    screenshots: [portfolioImg, devopsImg, collegeImg],
    features: [
      "Section-by-section scroll reveals",
      "Glassmorphic sticky navbar",
      "Animated learning and career trees",
      "Fully responsive editorial layout",
    ],
    challenges: [
      "Balancing motion with calm, premium feel",
      "Designing trees that feel alive but legible",
    ],
    architecture:
      "Static frontend with TanStack Start. Local data, no backend. Motion via Framer Motion with viewport-driven reveals.",
    docs: "#",
    github: "https://github.com/sulthanbasha",
    live: "#",
  },
];

export type Certification = {
  id: string;
  title: string;
  org: string;
  credentialId: string;
  issued: string;
  verifyUrl: string;
  image: string;
};

export const certifications: Certification[] = [
  {
    id: "linux-linux-administration",
    title: "Linux Unhatched",
    org: "Cisco Networking Academy | NDG",
    credentialId: "35a07a9f-8976-4ad6-b9b2-d98ff5b37ecb",
    issued: "May 2026",
    verifyUrl: "https://www.credly.com/earner/earned/badge/35a07a9f-8976-4ad6-b9b2-d98ff5b37ecb",
    image: "https://i.postimg.cc/PJR3Z4PZ/Cisco-linux-Cert.jpg",
  },
  {
    id: "git-github",
    title: "Git & GitHub Course - Master Version Control",
    org: "ScholarHat",
    credentialId: "1ZK3090526",
    issued: "May 2026",
    verifyUrl: "https://www.scholarhat.com/certificate/verify",
    image: "https://i.postimg.cc/ZR2FL1ss/Scholar-Hat-Cert.jpg",
  },
  {
    id: "aws-essentials",
    title: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services (AWS)",
    credentialId: "71110a85-1784-42e3-81d7-90e498b73df3",
    issued: "May 2025",
    verifyUrl: "https://skillbuilder.aws/71110a85-1784-42e3-81d7-90e498b73df3",
    image: "https://i.postimg.cc/rwrjYF2g/Aws-cloud-prac-Essential-Cert.jpg",
  },
  {
    id: "aws-crashcourse",
    title: "Crash Course: AWS Basics",
    org: "Kodekloud",
    credentialId: "db84a79a-9e79-4632-b938-792210af6938",
    issued: "May 2026",
    verifyUrl: "https://learn.kodekloud.com/certificate/db84a79a-9e79-4632-b938-792210af6938",
    image: "https://i.postimg.cc/L85KqPfM/Kode-Kloud-aws-Cert.jpg",
  },
  {
    id: "simplilearn-devops101",
    title: "DevOps 101: What is DevOps?",
    org: "Simplilearn",
    credentialId: "10181985",
    issued: "May 2026",
    verifyUrl: "https://simpli-web.app.link/e/kn2arWAKP2b",
    image: "https://i.postimg.cc/C5bMQqJL/Simplilearn-Cert.jpg",
  },
  {
    id: "oracle-cloud",
    title: "Oracle Cloud Infrastructure 2025 Certified Al Foundations Associate",
    org: "Oracle",
    credentialId: "326058592OCI25AICFA",
    issued: "Feb 2026",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=908FCE49893F2A78F6FB506DACF329E35E88D2B69E4662F3A51D1915B12B0CBA",
    image: "https://i.postimg.cc/FzwFPx0y/Oracle-Cert.jpg",
  },
  {
    id: "tcs-forage-simulation",
    title: "Tata - Cybersecurity Analyst Job Simulation",
    org: "Forage",
    credentialId: "v859Xt6Hy2GXS29Kc",
    issued: "Jan 2026",
    verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_696103654b3bff447ad470ca_1768151339981_completion_certificate.pdf",
    image: "https://i.postimg.cc/pVCD05hb/Tata-Forage-Cert.png",
  },
  {
    id: "ibm-ai-basics",
    title: "IBM SkillsBuild - Introduction to Artificial Intelligence",
    org: "IBM",
    credentialId: "ALM-COURSE_4058918",
    issued: "Dec 2025",
    verifyUrl: "https://skills.yourlearning.ibm.com/certificate/share/c88a3924adewogICJsZWFybmVyQ05VTSIgOiAiNjQzNDkzNlJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfNDA1ODkxOCIKfQfa377c667b-10",
    image: "https://i.postimg.cc/FF361ZBj/IBMCert.png",
  },
  {
    id: "google-play",
    title: "Google Play Academy - Store Listing Certificate",
    org: "Google Play",
    credentialId: "170438942",
    issued: "Dec 2025",
    verifyUrl: "https://www.credential.net/d79b772e-3e03-4b1e-8c33-6ae19605efe9",
    image: "https://i.postimg.cc/qqvpB5xY/Google-Cert.jpg",
  },
];

export type LearningItem = {
  title: string;
  note: string;
  status?: "done" | "in-progress" | "planned";
};

export type LearningGroup = {
  year: string;
  label?: string;
  items: LearningItem[];
};

export const learningMilestones: LearningGroup[] = [
  {
    year: "2025",
    label: "Foundations",
    items: [
      { title: "Git Basics", note: "Branching, merging, rebase fundamentals.", status: "done" },
      { title: "GitHub Collaboration", note: "Pull requests, reviews, issues.", status: "done" },
      { title: "Linux Fundamentals", note: "Filesystem, permissions, processes.", status: "done" },
      { title: "Shell Scripting", note: "Bash automation and cron.", status: "in-progress" },
      { title: "Docker Basics", note: "Images, containers, compose.", status: "in-progress" },
      { title: "AWS Cloud Basics", note: "EC2, S3, IAM essentials.", status: "planned" },
    ],
  },
  {
    year: "2026",
    label: "Cloud & Automation",
    items: [
      { title: "CI/CD Pipelines", note: "GitHub Actions, build & deploy workflows.", status: "planned" },
      { title: "Infrastructure as Code", note: "Terraform basics on AWS.", status: "planned" },
      { title: "Kubernetes Fundamentals", note: "Pods, deployments, services.", status: "planned" },
      { title: "Monitoring & Logging", note: "Prometheus, Grafana, ELK.", status: "planned" },
    ],
  },
  {
    year: "2027",
    label: "Scale & Reliability",
    items: [
      { title: "Advanced Kubernetes", note: "Helm, operators, autoscaling.", status: "planned" },
      { title: "Cloud Security", note: "IAM, secrets, network policies.", status: "planned" },
      { title: "Site Reliability Engineering", note: "SLOs, error budgets, on-call.", status: "planned" },
    ],
  },
  {
    year: "2028+",
    label: "Mastery",
    items: [
      { title: "Platform Engineering", note: "Internal developer platforms.", status: "planned" },
      { title: "Multi-cloud Architecture", note: "Designing resilient cross-cloud systems.", status: "planned" },
    ],
  },
];

export type CareerStep = {
  years: string;
  role: string;
  org: string;
  phase: "past" | "present" | "future";
  description: string;
};

export const careerSteps: CareerStep[] = [
  {
    years: "2022 — 2024",
    role: "Student · Intermediate (MPC)",
    org: "Junior College",
    phase: "past",
    description: "Built the foundation — maths, physics, and the curiosity that led me to code.",
  },
  {
    years: "2024 — 2025",
    role: "CS Undergraduate · Frontend Learner",
    org: "B.Tech, Computer Science",
    phase: "past",
    description: "Picked up HTML, CSS, JavaScript and React. Shipped my first small projects.",
  },
  {
    years: "2025 — 2026",
    role: "Full Stack & DevOps Learner",
    org: "Self-taught · Open Source",
    phase: "present",
    description: "Currently here — learning Git, Linux, Docker, AWS and CI/CD while building real projects.",
  },
  {
    years: "2026 — 2027",
    role: "Junior DevOps / Cloud Intern",
    org: "Target: Cloud-native startup",
    phase: "future",
    description: "Internship role — own pipelines, write IaC, and ship containers to production.",
  },
  {
    years: "2027 — 2029",
    role: "DevOps Engineer",
    org: "Target: Product company",
    phase: "future",
    description: "Kubernetes, observability, and platform engineering at scale.",
  },
  {
    years: "2029 +",
    role: "Senior DevOps / SRE",
    org: "Long-term goal",
    phase: "future",
    description: "Designing reliable, secure cloud platforms and mentoring the next batch.",
  },
];

export const stats = [
  { value: "4+", label: "Projects" },
  { value: "9+", label: "Certifications" },
  { value: "7+", label: "Technologies" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#learning", label: "Learning Tree" },
  { href: "#career", label: "Career Tree" },
  { href: "#contact", label: "Contact" },
];
