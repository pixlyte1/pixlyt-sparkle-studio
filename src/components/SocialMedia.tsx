import { Youtube, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Youtube, label: "Tamil Tuli News", subtitle: "YouTube Channel", href: "https://youtube.com", hoverBg: "group-hover:bg-red-500", hoverText: "group-hover:text-red-500" },
  { icon: Instagram, label: "PIXLYT", subtitle: "Instagram", href: "https://instagram.com", hoverBg: "group-hover:bg-pink-500", hoverText: "group-hover:text-pink-500" },
  { icon: Facebook, label: "PIXLYT Digital", subtitle: "Facebook", href: "https://facebook.com", hoverBg: "group-hover:bg-blue-600", hoverText: "group-hover:text-blue-600" },
];

const SocialMedia = () => (
  <section className="py-28 gradient-section relative overflow-hidden">
    <div className="container mx-auto px-4 relative">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          Follow Us
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          Stay <span className="text-gradient">Connected</span>
        </h2>
      </AnimatedSection>

      <div className="flex flex-wrap items-stretch justify-center gap-8 max-w-3xl mx-auto">
        {socials.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.12} direction="scale">
            <motion.a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group flex flex-col items-center gap-4 p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-500 min-w-[200px]"
            >
              <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center ${s.hoverBg} transition-colors duration-500`}>
                <s.icon size={28} className={`text-muted-foreground group-hover:text-primary-foreground transition-colors duration-500`} />
              </div>
              <div className="text-center">
                <p className="font-heading font-semibold text-foreground">{s.label}</p>
                <p className="text-muted-foreground text-sm">{s.subtitle}</p>
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SocialMedia;
