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
              {product.link ? (
                <button
                  onClick={() => openExternalLink(product.link!)}
                  className="w-full gradient-primary text-primary-foreground py-3 rounded-xl font-semibold hover:scale-[1.03] transition-transform duration-300 shadow-glow"
                >
                  Explore
                </button>
              ) : (
                <button className="w-full gradient-primary text-primary-foreground py-3 rounded-xl font-semibold hover:scale-[1.03] transition-transform duration-300 shadow-glow">
                  Coming Soon
                </button>
              )}
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

    </div>
  </section>
);

export default Products;
