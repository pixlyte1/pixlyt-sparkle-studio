import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const socials = [
  {
    icon: FaYoutube,
    label: "Tamil Thuli News",
    subtitle: "YouTube Channel",
    href: "https://www.youtube.com/@TamilThulinews",
    hoverBg: "hover:bg-red-500",
    hoverShadow: "hover:shadow-red-500/30",
    iconHover: "group-hover:text-white",
  },
  {
    icon: FaInstagram,
    label: "Tamil Thuli News",
    subtitle: "Instagram",
    href: "https://www.instagram.com/tamilthulinews/",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
    hoverShadow: "hover:shadow-pink-500/30",
    iconHover: "group-hover:text-white",
  },
  {
    icon: FaFacebookF,
    label: "Tamil Thuli News",
    subtitle: "Facebook",
    href: "https://www.facebook.com/tamilthulinews/",
    hoverBg: "hover:bg-blue-600",
    hoverShadow: "hover:shadow-blue-600/30",
    iconHover: "group-hover:text-white",
  },
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
        <p className="text-muted-foreground text-lg">
          Follow us on social media for the latest updates, news, and behind-the-scenes content.
        </p>
      </AnimatedSection>

      <div className="flex flex-wrap items-stretch justify-center gap-8 max-w-3xl mx-auto">
        {socials.map((s, i) => (
          <motion.a
            key={s.subtitle}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, delay: i * 0.12 }}
            className="group flex flex-col items-center gap-5 p-10 bg-card rounded-2xl shadow-card hover:shadow-xl border border-border/50 transition-all duration-500 min-w-[220px] cursor-pointer"
          >
            <div
              className={`rounded-2xl bg-muted flex items-center justify-center transition-all duration-500 ${s.hoverBg} ${s.hoverShadow} hover:shadow-lg`}
              style={{ width: 72, height: 72 }}
            >
              <s.icon
                size={32}
                className={`text-muted-foreground ${s.iconHover} transition-colors duration-500 pointer-events-none`}
              />
            </div>
            <div className="text-center pointer-events-none">
              <p className="font-heading font-semibold text-foreground text-lg">{s.label}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.subtitle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default SocialMedia;
