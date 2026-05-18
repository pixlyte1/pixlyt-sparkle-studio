import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Lightbulb, BarChart3, Bot, FileText, BrainCircuit, CalendarCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { openExternalLink } from "@/lib/openExternalLink";

const products = [
  {
    title: "Creator AI Platform",
    description:
      "An AI-powered platform designed for content creators to generate viral content ideas, YouTube scripts, captions, thumbnails, and trend analysis.",
    icon: Sparkles,
    link: "https://prompt-de4a.vercel.app/login",
    features: [
      { icon: FileText, label: "AI content generation (scripts, captions, hooks)" },
      { icon: Lightbulb, label: "YouTube video idea generator" },
      { icon: BarChart3, label: "Viral trend analysis" },
      { icon: BrainCircuit, label: "Prompt templates" },
      { icon: BarChart3, label: "Analytics dashboard" },
    ],
  },
  {
    title: "AI HR Portal",
    description:
      "A smart AI-driven HR management system that automates recruitment and employee management processes.",
    icon: Users,
    features: [
      { icon: FileText, label: "Resume screening using AI" },
      { icon: BarChart3, label: "Candidate ranking system" },
      { icon: CalendarCheck, label: "Interview scheduling" },
      { icon: Users, label: "Employee tracking dashboard" },
      { icon: Bot, label: "AI chatbot assistant for HR queries" },
    ],
  },
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
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
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
      style={{ transform, transition: "transform 0.3s ease" }}
      className={className}
    >
      {children}
    </div>
  );
};

const Products = () => (
  <section id="products" className="py-16 bg-background relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-primary/5 blur-[100px] animate-blob pointer-events-none" />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-blob-delayed pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          Our AI Products
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
          Innovative AI{" "}
          <span className="text-gradient">Products</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Innovative AI solutions built for modern businesses
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 mb-5">
        {products.map((product, i) => (
          <AnimatedSection key={product.title} delay={i * 0.15} direction="up">
            <TiltCard className="h-full">
              <div className="relative rounded-2xl glass-card p-8 h-full flex flex-col border-glow overflow-hidden group">
                {/* Hover glow overlay */}
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 rounded-2xl" />

                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-lg transition-all duration-500">
                  <product.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {product.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm text-foreground/80">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <f.icon size={13} className="text-primary" />
                      </div>
                      <span>{f.label}</span>
                    </li>
                  ))}
                </ul>
                {product.link ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openExternalLink(product.link!)}
                    className="w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-glow hover:shadow-glow-lg btn-3d shimmer-effect"
                  >
                    Explore
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-glow hover:shadow-glow-lg btn-3d"
                  >
                    Coming Soon
                  </motion.button>
                )}
              </div>
            </TiltCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
