import portraitImg from "@/assets/portrait.jpg";
import collegeImg from "@/assets/project-college.jpg";
import devopsImg from "@/assets/project-devops.jpg";
import attendanceImg from "@/assets/project-attendance.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import certImg from "@/assets/cert-generic.jpg";

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
    id: "git-github",
    title: "Git & GitHub Essentials",
    org: "Coursera",
    credentialId: "GH-2025-0421",
    issued: "Mar 2025",
    verifyUrl: "#",
    image: certImg,
  },
  {
    id: "linux-unhatched",
    title: "Linux Unhatched",
    org: "Cisco Networking Academy",
    credentialId: "LX-2025-1182",
    issued: "Apr 2025",
    verifyUrl: "#",
    image: certImg,
  },
  {
    id: "aws-basics",
    title: "AWS Cloud Basics",
    org: "AWS Training",
    credentialId: "AWS-2025-7740",
    issued: "Jun 2025",
    verifyUrl: "#",
    image: certImg,
  },
  {
    id: "docker-fundamentals",
    title: "Docker Fundamentals",
    org: "KodeKloud",
    credentialId: "DK-2025-3315",
    issued: "Aug 2025",
    verifyUrl: "#",
    image: certImg,
  },
];

export const learningMilestones = [
  {
    year: "2025",
    items: [
      { title: "Git Basics", note: "Branching, merging, rebase fundamentals." },
      { title: "GitHub Collaboration", note: "Pull requests, reviews, issues." },
      { title: "Linux Fundamentals", note: "Filesystem, permissions, processes." },
      { title: "Shell Scripting", note: "Bash automation and cron." },
      { title: "Docker Basics", note: "Images, containers, compose." },
      { title: "AWS Cloud Basics", note: "EC2, S3, IAM essentials." },
    ],
  },
];

export const careerSteps = [
  "Student",
  "Frontend Development",
  "Git & GitHub",
  "Linux",
  "Docker",
  "AWS",
  "CI/CD",
  "Kubernetes",
  "DevOps Engineer",
];

export const stats = [
  { value: "12+", label: "Projects" },
  { value: "8+", label: "Certifications" },
  { value: "5+", label: "Technologies" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#learning", label: "Learning Tree" },
  { href: "#career", label: "Career Tree" },
  { href: "#contact", label: "Contact" },
];
