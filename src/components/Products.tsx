import { motion } from "framer-motion";
import { Sparkles, Users, Copy, Check, Lightbulb, BarChart3, Bot, FileText, BrainCircuit, CalendarCheck } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const products = [
  {
    title: "Creator AI Platform",
    description:
      "An AI-powered platform designed for content creators to generate viral content ideas, YouTube scripts, captions, thumbnails, and trend analysis.",
    icon: Sparkles,
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

const prompts = [
  {
    title: "Creator AI Prompt",
    text: "Create an AI-powered SaaS platform that helps content creators generate viral social media scripts, YouTube video ideas, captions, thumbnails, and trending topic analysis using GPT-based models. Include dashboard, prompt templates, analytics, and export features.",
  },
  {
    title: "HR Portal Prompt",
    text: "Build an AI-driven HR management system with features like resume screening, candidate ranking, interview scheduling, employee tracking, performance analytics, and chatbot-based HR assistant.",
  },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 border border-border hover:bg-primary/10 transition-colors"
      aria-label="Copy prompt"
    >
      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-muted-foreground" />}
    </button>
  );
};

const Products = () => (
  <section id="products" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          Our AI Products
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
          Our AI Products
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Innovative AI solutions built for modern businesses
        </p>
      </AnimatedSection>

      {/* Product Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {products.map((product, i) => (
          <AnimatedSection key={product.title} delay={i * 0.15} direction="up">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-border bg-card p-8 h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <product.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {product.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3 text-sm text-foreground/80">
                    <f.icon size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full gradient-primary text-primary-foreground py-3 rounded-xl font-semibold hover:scale-[1.03] transition-transform duration-300 shadow-glow">
                Explore
              </button>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* AI Product Prompts */}
      <AnimatedSection className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-3">
          AI Product Prompts
        </h3>
        <p className="text-muted-foreground">The prompts behind our AI products</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {prompts.map((prompt, i) => (
          <AnimatedSection key={prompt.title} delay={i * 0.15} direction="up">
            <div className="relative rounded-2xl bg-secondary border border-border p-6 hover:shadow-lg transition-shadow duration-300">
              <CopyButton text={prompt.text} />
              <h4 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground mb-4">
                {prompt.title}
              </h4>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed bg-background/60 rounded-xl p-4 border border-border">
                "{prompt.text}"
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
