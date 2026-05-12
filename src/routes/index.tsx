import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { LearningTree } from "@/components/portfolio/LearningTree";
import { CareerTree } from "@/components/portfolio/CareerTree";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sulthan Basha — DevOps & Full Stack Learner" },
      {
        name: "description",
        content:
          "Portfolio of Sulthan Basha — DevOps and Full Stack learner. Building systems, learning cloud, and documenting growth.",
      },
      { property: "og:title", content: "Sulthan Basha — DevOps & Full Stack Learner" },
      {
        property: "og:description",
        content: "Editorial portfolio: projects, certifications, learning tree and career roadmap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <LearningTree />
      <CareerTree />
      <Contact />
      <Footer />
    </main>
  );
}
