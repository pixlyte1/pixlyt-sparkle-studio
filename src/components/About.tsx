import { Brain, Monitor, Film } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  {
    icon: Brain,
    title: "AI Innovation",
    desc: "Leveraging artificial intelligence to create smarter, data-driven solutions that transform businesses.",
  },
  {
    icon: Monitor,
    title: "IT Excellence",
    desc: "Building robust, scalable technology platforms that power modern digital experiences.",
  },
  {
    icon: Film,
    title: "Creative Media",
    desc: "Crafting compelling stories and visual content that captivate audiences and elevate brands.",
  },
];

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-5">
          Who We Are
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          PIXLYT Digital Solutions Pvt Ltd is an AI-driven IT and Media company empowering brands
          through smart technology and storytelling. We blend AI, IT innovation, and creative design
          to deliver intelligent, high-impact solutions for the modern world.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15}>
            <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default About;
