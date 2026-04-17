import { Brain, Monitor, Film, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  {
    icon: Brain,
    title: "AI Innovation",
    desc: "Leveraging artificial intelligence to create smarter, data-driven solutions that transform businesses and unlock new opportunities.",
  },
  {
    icon: Monitor,
    title: "IT Excellence",
    desc: "Building scalable technology platforms that power modern digital experiences and drive operational efficiency.",
  },
  {
    icon: Film,
    title: "Creative Media",
    desc: "Crafting compelling stories and visual content that captivate audiences, build trust, and elevate your brand identity.",
  },
];

const About = () => (
  <section id="about" className="py-28 bg-background relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] animate-blob pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-[80px] animate-blob-delayed pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          About Us
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          Transforming Ideas Into{" "}
          <span className="text-gradient">Digital Reality</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          PIXLYT Digital Solutions Pvt Ltd is an AI-driven IT and Media company empowering brands
          through smart technology and storytelling. We blend AI, IT innovation, and creative design
          to deliver intelligent, high-impact solutions for the modern world.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative glass-card rounded-2xl p-8 hover:shadow-card-hover transition-all duration-500 border-glow overflow-hidden h-full"
            >
              {/* Gradient border top */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow-lg transition-all duration-500">
                <item.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
              <a href="#services" className="inline-flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default About;
