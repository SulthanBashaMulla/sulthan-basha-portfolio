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
  id: "ndc-college-website",

  title: "NDC College Website",

  short:
    "Designed and deployed the first official digital presence for my college using modern frontend and deployment practices.",

  description:
    "Built and deployed a complete multi-page website for my college, which previously had no official online platform. The project was developed to improve accessibility to academic information, departmental resources, admissions details, notifications, facilities, placements, and campus updates for students and faculty. This project became an important milestone in my DevOps learning journey by introducing me to real-world deployment workflows, production hosting, project structure management, performance optimization, and maintaining scalable web infrastructure.",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Render",
    "Git",
    "GitHub"
  ],

  image: "https://i.postimg.cc/B68fmhfw/ndc-website-ss.jpg",

  screenshots: [
    "https://i.postimg.cc/B68fmhfw/ndc-website-ss.jpg",
    "https://i.postimg.cc/0Q61Vt1X/ndc-website-ss2.jpg",
    "https://i.postimg.cc/0Q61Vt1t/ndc-website-ss3.jpg",
    "https://i.postimg.cc/XJZ6s26H/ndc-website-ss4.jpg"
  ],

  features: [
    "Complete multi-page college website",
    "Department and academic information pages",
    "Admissions and circular management sections",
    "Placement and facilities showcase",
    "SEO optimization with sitemap and robots configuration",
    "Responsive layout for desktop and mobile devices",
    "Structured navigation for student accessibility",
    "Production deployment using Vercel"
  ],

  challenges: [
    "Creating a complete institutional website from scratch for a college without an existing online presence",
    "Organizing large amounts of academic and campus information into a scalable structure",
    "Ensuring responsive behavior across devices",
    "Managing deployment configuration and production hosting workflows"
  ],

  architecture:
    "The project follows a modular static website architecture using reusable HTML structures, centralized styling, and organized asset management. Deployment was handled through Vercel with optimized public assets, SEO configuration, and scalable page hierarchy for future expansion.",

  docs: "#",

  github: "https://github.com/SulthanBashaMulla/NDC-website",

  live: "https://ndcndl.org/",
},
  {
  id: "ndc-student-pwa",

  title: "NDC Student Management PWA",

  short:
    "A centralized progressive web application built to simplify academic communication and student services within the college.",

  description:
    "Designed and developed a student-focused progressive web application to modernize how academic information is shared and accessed inside the college. Previously, attendance updates, timetables, notices, marks, and circulars were distributed through fragmented communication channels such as WhatsApp groups and manual sharing. This platform was built to create a faster, structured, and more accessible digital experience for both students and faculty.The application uses student roll numbers as unique identifiers to manage authentication logic, personalized dashboards, and role-based data access. Firebase Firestore was integrated to handle realtime academic data, while Vercel was used for deployment and production hosting.This PWA can be installable on to the HomeScreen. The project also reflects my growing DevOps learning path by introducing practical experience in deployment workflows, frontend architecture, cloud-based services, environment configuration, and scalable project organization.The interface and user experience were accelerated through AI-assisted prototyping workflows, allowing rapid iteration while maintaining full control over project structure, customization, deployment, and implementation decisions.",

  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Firestore",
    "PWA",
    "Vercel",
    "Git",
    "GitHub"
  ],

  image:
    "https://i.postimg.cc/RFR4YgPk/pwa1.jpg",

  screenshots: [
    "https://i.postimg.cc/sXcsLTn8/pwa2.jpg",
    "https://i.postimg.cc/G2QdfXMV/pwa3.png",
    "https://i.postimg.cc/Qtbhzf66/pwa4.png",
    "https://i.postimg.cc/PJ5Tn1c3/pwa5.png",
    "https://i.postimg.cc/4yxsRpMr/pwa6.png",
  ],

  features: [
    "Student-specific access using roll number identification",
    "Role-based academic data visibility",
    "Attendance and internal marks tracking",
    "Realtime notices and circular updates",
    "Timetable access for students and lecturers",
    "Installable progressive web application experience",
    "Responsive UI optimized for mobile and desktop devices",
    "Cloud-hosted realtime data management using Firebase",
    "Production deployment through Vercel"
  ],

  challenges: [
    "Replacing scattered communication workflows with a centralized digital platform",
    "Designing structured access control using student roll numbers",
    "Managing secure academic data visibility for multiple user roles",
    "Optimizing realtime frontend updates with Firebase integration",
    "Creating a responsive interface accessible across different devices"
  ],

  architecture:
    "The platform follows a modular React and TypeScript frontend architecture with reusable components and scalable UI patterns built using Tailwind CSS. Firebase Firestore powers realtime cloud-based data storage and structured access management, while Vercel handles deployment, hosting, and frontend delivery. The project structure was organized for maintainability, scalability, and future feature expansion.",

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
  { value: "2+", label: "Projects" },
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
