import { motion } from "framer-motion";
import { Play, Newspaper, Mic, Subtitles, Globe2, BookOpen, Youtube, Users, Video, Eye, ExternalLink } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { openExternalLink } from "@/lib/openExternalLink";
import newsStudioImage from "@/assets/news-studio.png";

const features = [
  { icon: Newspaper, title: "Viral News Analysis", desc: "Curating the most impactful viral stories from around the world." },
  { icon: Mic, title: "Tamil Voice-over Commentary", desc: "Authentic Tamil narration that adds soul and context." },
  { icon: Subtitles, title: "Custom Subtitles", desc: "Carefully crafted subtitles for clarity and accessibility." },
  { icon: Globe2, title: "Global Story Curation", desc: "Hand-picked stories from every corner of the globe." },
  { icon: BookOpen, title: "Deep Context Explanation", desc: "Going beyond the surface — the full story behind every clip." },
];

const stats = [
  { icon: Users, value: "16K+", label: "Subscribers" },
  { icon: Video, value: "460+", label: "Videos" },
  { icon: Eye, value: "9M+", label: "Views" },
];

const socials = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com",
    hoverBg: "hover:bg-blue-600",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
  },
];

const YT_URL = "https://youtube.com";

const Media = () => (
  <section id="media" className="py-28 gradient-section-reverse relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-[100px] animate-blob pointer-events-none" />
    <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-blob-delayed pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      {/* Header */}
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          Media Division
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          PIXLYT Media – <span className="text-gradient">News Channel</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-4 font-medium">
          Viral News. Deep Tamil Commentary.
        </p>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          We analyze the most viral and inspiring news videos globally—from animal rescues to powerful human stories.
          Our content includes unique Tamil voice-overs and custom subtitles, delivering deeper context and clear storytelling.
        </p>
      </AnimatedSection>

      {/* Channel Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="glass-card rounded-2xl p-8 text-center border-glow shadow-card hover:shadow-card-hover transition-all duration-500"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
              <stat.icon className="text-primary-foreground" size={26} />
            </div>
            <div className="font-heading text-4xl font-bold text-gradient mb-1">{stat.value}</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wider font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Featured YouTube Channel Card */}
      <AnimatedSection className="max-w-5xl mx-auto mb-20">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="glass-card rounded-3xl overflow-hidden border-glow shadow-card hover:shadow-card-hover transition-all duration-500 group"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Thumbnail style preview */}
            <div className="relative aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-accent">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(0_0%_100%/0.2),transparent_60%)]" />
              {/* Floating thumbnails decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 w-24 h-16 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 shadow-lg"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 right-8 w-28 h-18 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 shadow-lg"
                />
                {/* Play button */}
                <motion.button
                  type="button"
                  onClick={() => openExternalLink(YT_URL)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Visit News Channel YouTube channel"
                  className="relative z-10 w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:shadow-glow-lg transition-shadow duration-500"
                >
                  <Play className="text-red-600 ml-1" size={32} fill="currentColor" />
                  <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-30" />
                </motion.button>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-medium">
                <Youtube size={18} className="text-red-500" fill="currentColor" />
                <span>YouTube</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Featured Channel
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                News Channel YouTube
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join our growing community for viral stories, deep Tamil commentary, and unique perspectives on global news.
              </p>
              <button
                type="button"
                onClick={() => openExternalLink(YT_URL)}
                className="inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-glow btn-3d animate-glow-pulse self-start"
              >
                Visit Channel
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mb-20">
        <AnimatedSection className="text-center mb-12">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            What Makes Us <span className="text-gradient">Different</span>
          </h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-7 border-glow shadow-card hover:shadow-card-hover transition-all duration-500 group"
            >
              <div className="w-12 h-12 mb-5 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                <f.icon className="text-primary-foreground" size={22} />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tagline highlight block */}
      <AnimatedSection className="max-w-4xl mx-auto mb-20">
        <div className="relative rounded-3xl gradient-primary p-10 sm:p-14 text-center overflow-hidden shadow-glow-lg">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <p className="relative font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground italic leading-tight">
            "Get the full, unique story behind the scroll."
          </p>
        </div>
      </AnimatedSection>

      {/* Social Links */}
      <AnimatedSection className="max-w-2xl mx-auto mb-12">
        <h4 className="text-center text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-6">
          Follow News Channel
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {socials.map((s, i) => (
            <motion.button
              type="button"
              key={s.label}
              onClick={() => openExternalLink(s.href)}
              aria-label={`Open ${s.label} in a new tab`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: i * 0.1 }}
              className="group flex items-center gap-3 px-6 py-4 glass-card rounded-2xl border-glow shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer"
            >
              <span
                className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center transition-all duration-500 ${s.hoverBg} group-hover:shadow-glow`}
              >
                <s.icon size={20} className="text-muted-foreground group-hover:text-white transition-colors duration-500" />
              </span>
              <span className="font-heading font-semibold text-foreground">{s.label}</span>
            </motion.button>
          ))}
        </div>
      </AnimatedSection>

      {/* Footer note */}
      <AnimatedSection className="max-w-2xl mx-auto">
        <p className="text-center text-xs text-muted-foreground/80 italic">
          Content used under fair use for commentary. Contact for credits or takedown requests.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default Media;
