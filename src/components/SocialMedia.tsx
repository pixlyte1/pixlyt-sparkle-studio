import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { openExternalLink } from "@/lib/openExternalLink";

const socials = [
  {
    icon: FaYoutube,
    label: "YouTube",
    subtitle: "YouTube",
    href: "https://youtube.com",
    hoverBg: "group-hover:bg-red-500",
    hoverShadow: "group-hover:shadow-red-500/30",
    iconHover: "group-hover:text-white",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    subtitle: "Instagram",
    href: "https://instagram.com",
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400",
    hoverShadow: "group-hover:shadow-pink-500/30",
    iconHover: "group-hover:text-white",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    subtitle: "Facebook",
    href: "https://facebook.com",
    hoverBg: "group-hover:bg-blue-600",
    hoverShadow: "group-hover:shadow-blue-600/30",
    iconHover: "group-hover:text-white",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    subtitle: "LinkedIn",
    href: "https://linkedin.com",
    hoverBg: "group-hover:bg-[#0077B5]",
    hoverShadow: "group-hover:shadow-[#0077B5]/30",
    iconHover: "group-hover:text-white",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    subtitle: "Twitter",
    href: "https://twitter.com",
    hoverBg: "group-hover:bg-[#1DA1F2]",
    hoverShadow: "group-hover:shadow-[#1DA1F2]/30",
    iconHover: "group-hover:text-white",
  },
];

const SocialMedia = () => (
  <section className="py-16 gradient-section relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-blob pointer-events-none" />
    <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-accent/5 blur-[100px] animate-blob-delayed pointer-events-none" />

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

      <div className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 max-w-7xl mx-auto">
        {socials.map((s, i) => (
          <motion.button
            type="button"
            key={s.subtitle}
            aria-label={`Open ${s.subtitle} in a new tab`}
            onClick={() => openExternalLink(s.href)}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, delay: i * 0.12 }}
            className="group flex flex-col items-center gap-5 p-6 sm:p-8 glass-card rounded-2xl hover:shadow-card-hover border-glow transition-all duration-500 w-full sm:w-[180px] xl:w-[200px] cursor-pointer"
          >
            <div
              className={`rounded-2xl bg-muted flex items-center justify-center transition-all duration-500 ${s.hoverBg} ${s.hoverShadow} hover:shadow-lg group-hover:shadow-glow`}
              style={{ width: 72, height: 72 }}
            >
              <s.icon
                size={32}
                className={`text-muted-foreground ${s.iconHover} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
              />
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold text-foreground text-lg">{s.label}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.subtitle}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  </section>
);

export default SocialMedia;
