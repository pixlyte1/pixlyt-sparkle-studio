import { Bot, Globe, Megaphone, Palette, Share2, Video } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ServiceCard from "./ServiceCard";

const services = [
  { icon: Video, title: "Media & Content Production", description: "High-quality video production, motion graphics, and multimedia content that tells your story compellingly." },
  { icon: Share2, title: "Social Media Management", description: "Strategic content planning, community management, and growth hacking across all major social platforms." },
  { icon: Megaphone, title: "Digital Marketing", description: "Data-driven marketing strategies including SEO, SEM, and performance marketing to boost your online presence and conversions." },
  { icon: Palette, title: "Branding & Creative Design", description: "Stunning visual identities, logos, brand guidelines, and creative assets that make your brand unforgettable." },
  { icon: Bot, title: "AI Solutions", description: "Intelligent automation, chatbots, predictive analytics, and machine learning solutions to streamline your business operations." },
  { icon: Globe, title: "Web Development", description: "Modern, responsive websites and progressive web applications built with cutting-edge technologies for blazing-fast performance." },
];

const Services = () => (
  <section id="services" className="py-28 gradient-section relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-blob pointer-events-none" />
    <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent/5 blur-[80px] animate-blob-delayed pointer-events-none" />

    {/* Decorative dots pattern */}
    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: "radial-gradient(circle, hsl(211 90% 52%) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
    }} />

    <div className="container mx-auto px-4 relative">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          Our Services
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          Solutions That Drive{" "}
          <span className="text-gradient">Real Growth</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to elevate your brand, optimize operations, and drive measurable business growth.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1} direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}>
            <ServiceCard {...s} index={i} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
