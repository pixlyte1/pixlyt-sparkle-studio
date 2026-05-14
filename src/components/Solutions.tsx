import { useState, useRef } from "react";
import { Brain, Database, Cloud, Code, Settings } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import aiImg from "@/assets/solutions/ai_solution.png";
import cmsImg from "@/assets/solutions/cms_solution.png";
import dataImg from "@/assets/solutions/data_eng_solution.png";
import managedImg from "@/assets/solutions/managed_services_solution.png";
import webImg from "@/assets/solutions/web_dev_solution.png";

const solutions = [
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn and adapt to automate complex processes.",
    icon: Brain,
    image: aiImg,
    delay: 0.1,
  },
  {
    title: "CMS Development",
    description: "Scalable content management systems tailored to your unique workflow.",
    icon: Settings,
    image: cmsImg,
    delay: 0.2,
  },
  {
    title: "Data Engineering",
    description: "Robust data pipelines and architecture for actionable business insights.",
    icon: Database,
    image: dataImg,
    delay: 0.3,
  },
  {
    title: "Managed Services",
    description: "24/7 proactive monitoring, maintenance, and IT support for your infrastructure.",
    icon: Cloud,
    image: managedImg,
    delay: 0.4,
  },
  {
    title: "Web Development",
    description: "High-performance, secure, and beautiful web applications built with modern stacks.",
    icon: Code,
    image: webImg,
    delay: 0.5,
  }
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)" }}
      className={className}
    >
      {children}
    </div>
  );
};

const Solutions = () => (
  <section id="tech-solutions" className="py-28 bg-background relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-blob pointer-events-none" />
    <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-blob-delayed pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          Enterprise Tech Solutions
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          Next-Gen <span className="text-gradient">Digital Capabilities</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Empowering your business with scalable, intelligent, and robust technologies that drive innovation and competitive advantage.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {solutions.map((solution, i) => (
          <AnimatedSection 
            key={solution.title} 
            delay={solution.delay} 
            direction="up"
            className={i === 3 || i === 4 ? "lg:col-span-1.5" : ""} 
          >
            <TiltCard className="h-full">
              <div className="relative rounded-2xl glass-card h-full flex flex-col border-glow overflow-hidden group">
                
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Subtle gradient overlay at the bottom to blend with text section */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/90 to-transparent z-10" />
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 relative z-20 bg-background/50 backdrop-blur-sm -mt-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border-2 border-background">
                    <solution.icon size={22} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {solution.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center text-sm font-semibold text-primary">
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Explore Solution</span>
                    <svg className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
