import { Bot, Globe, Megaphone, Palette, Share2, Video } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ServiceCard from "./ServiceCard";

const services = [
  { icon: Bot, title: "AI Solutions", description: "Intelligent automation, chatbots, and machine learning solutions to streamline your business operations." },
  { icon: Globe, title: "Web Development", description: "Modern, responsive websites and web applications built with cutting-edge technologies." },
  { icon: Megaphone, title: "Digital Marketing", description: "Data-driven strategies to boost your online presence, engagement, and conversions." },
  { icon: Palette, title: "Branding & Creative Design", description: "Stunning visual identities, logos, and brand guidelines that make you stand out." },
  { icon: Share2, title: "Social Media Management", description: "Strategic content planning and community management across all platforms." },
  { icon: Video, title: "Media & Content Production", description: "High-quality video production, photography, and multimedia content creation." },
];

const Services = () => (
  <section id="services" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-5">
          What We Offer
        </h2>
        <p className="text-muted-foreground text-lg">
          Comprehensive digital solutions tailored to elevate your brand and drive growth.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <ServiceCard {...s} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
