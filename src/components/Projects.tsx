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
  <section id="projects" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-5">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-lg">
          A glimpse into the impactful solutions we've built for our clients.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12}>
            <ProjectCard {...p} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
