import { useState, useRef } from "react";
import { Code2, Server, Terminal, Globe, Bot, Database, Cpu, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const technologies = [
  {
    title: "React.js",
    description: "Building interactive, dynamic, and high-performance user interfaces for modern web applications.",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.1,
  },
  {
    title: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for building robust backend APIs.",
    icon: Server,
    gradient: "from-gray-700 to-gray-900",
    delay: 0.2,
  },
  {
    title: "Node.js",
    description: "Scalable event-driven JavaScript runtime for executing server-side code efficiently.",
    icon: Terminal,
    gradient: "from-green-500 to-emerald-700",
    delay: 0.3,
  },
  {
    title: "Postman API",
    description: "Streamlining API development, testing, and collaboration across the entire lifecycle.",
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    delay: 0.4,
  },
  {
    title: "AI Agents",
    description: "Intelligent autonomous systems leveraging LLMs to solve complex tasks and workflows.",
    icon: Bot,
    gradient: "from-purple-500 to-indigo-600",
    delay: 0.5,
  },
  {
    title: "ASP.NET",
    description: "High-performance, cross-platform framework for building modern, cloud-based, internet-connected applications.",
    icon: Layers,
    gradient: "from-blue-600 to-purple-600",
    delay: 0.6,
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

const Technologies = () => (
  <section id="technologies" className="py-28 bg-background relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-blob pointer-events-none" />
    <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-blob-delayed pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          Tech Stack
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          Powered By <span className="text-gradient">Modern Tech</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We leverage cutting-edge frameworks and tools to build robust, scalable, and high-performance digital solutions.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {technologies.map((tech) => (
          <AnimatedSection 
            key={tech.title} 
            delay={tech.delay} 
            direction="up"
          >
            <TiltCard className="h-full">
              <div className="relative rounded-2xl glass-card h-full flex flex-col border-glow overflow-hidden group">
                
                {/* Visual Header Section (Replacing Image) */}
                <div className={`relative h-48 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Large Background Icon */}
                  <tech.icon size={120} className="text-white/20 absolute -right-6 -bottom-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
                  
                  <tech.icon size={64} className="text-white z-20 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Subtle gradient overlay at the bottom to blend with text section */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/90 to-transparent z-10" />
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 relative z-20 bg-background/50 backdrop-blur-sm -mt-6">
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border border-border">
                    <tech.icon size={22} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {tech.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center text-sm font-semibold text-primary">
                    <span className="group-hover:translate-x-2 transition-transform duration-300">View Details</span>
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

export default Technologies;
