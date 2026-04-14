import { Youtube, Instagram, Facebook } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Youtube, label: "Tamil Tuli News", href: "https://youtube.com", color: "hover:text-red-500" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-500" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com", color: "hover:text-blue-600" },
];

const SocialMedia = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Follow Us</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-5">
          Stay Connected
        </h2>
      </AnimatedSection>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {socials.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 hover:-translate-y-1 group min-w-[160px]`}
            >
              <s.icon size={36} className={`text-muted-foreground ${s.color} transition-colors duration-300`} />
              <span className="text-sm font-medium text-foreground">{s.label}</span>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SocialMedia;
