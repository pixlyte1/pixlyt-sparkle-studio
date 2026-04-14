import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { image: project1, title: "E-Commerce Platform", category: "Web Development" },
  { image: project2, title: "FinTech Mobile App", category: "AI Solutions" },
  { image: project3, title: "Analytics Dashboard", category: "Digital Marketing" },
  { image: project4, title: "Brand Identity System", category: "Branding & Design" },
];

const Projects = () => (
  <section id="projects" className="py-28 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent/3 blur-3xl pointer-events-none -translate-y-1/2" />

    <div className="container mx-auto px-4 relative">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          Our Work
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          Projects That Speak{" "}
          <span className="text-gradient">For Themselves</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          A glimpse into the impactful solutions we've built for clients across industries.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
            <ProjectCard {...p} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
