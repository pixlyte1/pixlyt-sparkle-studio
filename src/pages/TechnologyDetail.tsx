import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Braces, CheckCircle2, Cloud, type LucideIcon } from "lucide-react";
import { SiDocker, SiExpress, SiJsonwebtokens, SiMongodb, SiNodedotjs, SiPostgresql } from "react-icons/si";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getTechnologyBySlug } from "@/data/technologies";
import NotFound from "./NotFound";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";

type DetailIcon = ComponentType<{ size?: number | string; className?: string }>;
type StackIcon = DetailIcon | LucideIcon;

const expressBuildItems = [
  {
    title: "REST API Development",
    text: "Structured and scalable APIs for websites, mobile apps, and modern digital platforms.",
    image: project1,
  },
  {
    title: "Authentication Systems",
    text: "Secure login systems with JWT authentication, middleware handling, and protected access workflows.",
    image: heroSlide2,
  },
  {
    title: "Admin Dashboards",
    text: "Backend infrastructure for analytics dashboards, operational tools, and management platforms.",
    image: project2,
  },
  {
    title: "Third-Party Integrations",
    text: "Integration with payment gateways, CRMs, email services, cloud platforms, and external APIs.",
    image: heroSlide3,
  },
  {
    title: "Database Architecture",
    text: "Backend systems connected with MongoDB and PostgreSQL using optimized database structures.",
    image: project4,
  },
  {
    title: "Deployment & Monitoring",
    text: "Cloud deployment, backend maintenance, monitoring, and performance optimization workflows.",
    image: heroSlide1,
  },
];

const expressStackItems = [
  {
    title: "Express.js",
    Icon: SiExpress,
    accent: "bg-slate-100 text-slate-900",
  },
  {
    title: "Node.js",
    Icon: SiNodedotjs,
    accent: "bg-green-50 text-green-700",
  },
  {
    title: "MongoDB",
    Icon: SiMongodb,
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "PostgreSQL",
    Icon: SiPostgresql,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    title: "JWT Authentication",
    Icon: SiJsonwebtokens,
    accent: "bg-slate-100 text-slate-800",
  },
  {
    title: "REST APIs",
    Icon: Braces,
    accent: "bg-sky-50 text-sky-700",
  },
  {
    title: "Docker",
    Icon: SiDocker,
    accent: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Cloud Deployment",
    Icon: Cloud,
    accent: "bg-indigo-50 text-indigo-700",
  },
];

const ExpressJsDetail = ({ Icon }: { Icon: DetailIcon }) => {
  const [activeCapability, setActiveCapability] = useState(0);
  const [isStackPaused, setIsStackPaused] = useState(false);
  const capabilitySectionRef = useRef<HTMLElement | null>(null);
  const activeCapabilityRef = useRef(activeCapability);
  const wheelLockedRef = useRef(false);
  const activeItem = expressBuildItems[activeCapability];

  useEffect(() => {
    activeCapabilityRef.current = activeCapability;
  }, [activeCapability]);

  useEffect(() => {
    const section = capabilitySectionRef.current;
    if (!section) return;

    const handleCapabilityWheel = (event: globalThis.WheelEvent) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextCapability = Math.min(
        Math.max(activeCapabilityRef.current + direction, 0),
        expressBuildItems.length - 1
      );

      if (nextCapability === activeCapabilityRef.current) return;

      event.preventDefault();

      if (wheelLockedRef.current) return;

      wheelLockedRef.current = true;
      activeCapabilityRef.current = nextCapability;
      setActiveCapability(nextCapability);

      window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, 650);
    };

    section.addEventListener("wheel", handleCapabilityWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleCapabilityWheel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar forceSolid />

      <main className="pt-32">
        <section className="border-b border-border bg-background">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
            <Link
              to="/technologies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={17} />
              Back to technologies
            </Link>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-glow">
                    <Icon size={24} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Backend framework</span>
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Express.js Development
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Fast, scalable backend systems for APIs, dashboards, integrations, and modern web applications.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    Discuss Project
                    <ArrowRight size={17} />
                  </a>
                  <a
                    href="/#projects"
                    className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    View Projects
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-lg border border-border bg-white p-6 shadow-card"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {["API Focused", "Secure Architecture", "Fast Performance", "Integration Ready"].map((highlight) => (
                    <div key={highlight} className="rounded-md border border-border bg-secondary/40 p-5 transition-colors hover:border-primary/30">
                      <Icon size={22} className="mb-4 text-primary" />
                      <div className="font-heading text-lg font-bold text-foreground">{highlight}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background py-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">About Express.js</span>
              <h2 className="mt-2 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Backend systems with clean architecture
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                Lightweight, scalable backend foundations for APIs, dashboards, integrations, and business workflows.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-card sm:p-5 lg:p-6">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_80px_1fr] lg:items-center">
                <div className="rounded-2xl border border-border bg-secondary/40 p-3">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <img
                      src={heroSlide3}
                      alt="Express.js backend architecture"
                      className="h-full w-full object-cover [filter:saturate(0.9)_brightness(0.92)_contrast(1.05)_hue-rotate(-8deg)]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,30,0.05),rgba(8,15,30,0.35))]" />
                    <div className="absolute bottom-4 left-4 rounded-md bg-[#061321]/80 px-3 py-2 text-xs font-semibold text-[#5EA2FF] backdrop-blur">
                      Express.js architecture
                    </div>
                  </div>
                </div>

                <div className="relative hidden h-full min-h-[260px] items-center justify-center lg:flex">
                  <div className="h-full w-px bg-border" />
                  <span className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-primary/25 bg-white text-xs font-bold text-primary">
                    01
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Core backend expertise</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                    We use Express.js to build lightweight and scalable backend systems for startups, internal platforms,
                    admin dashboards, and cloud-based applications. Its flexibility allows us to create secure APIs,
                    authentication systems, integrations, and business workflows with clean architecture and high
                    performance.
                  </p>

                  <div className="mt-7 space-y-3">
                    {["Secure API architecture", "Authentication and middleware", "Integration-ready workflows"].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                          <Icon size={15} />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#061321_0%,#0B1D33_35%,#102845_100%)] py-20 text-[#F8FAFC] sm:py-24 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,209,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_35%)]" />
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA]">What we build</span>
              <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-[#F8FAFC] sm:text-5xl">Express.js capabilities</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#94A3B8]">
                Scroll inside this section to change the image, topic, and content in the same place.
              </p>
            </div>

            <div
              ref={capabilitySectionRef}
              className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#14253D] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-4"
            >
              <motion.div
                key={activeCapability}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="grid gap-4 lg:grid-cols-[1.08fr_1fr]"
              >
                <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#102845] lg:min-h-[520px]">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="h-full w-full object-cover [filter:saturate(0.9)_brightness(0.92)_contrast(1.05)_hue-rotate(-8deg)]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,30,0.05),rgba(8,15,30,0.35))]" />
                </div>

                <div className="grid gap-4">
                  <div className="relative min-h-[190px] overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#19314F] p-6 sm:p-8">
                    <div className="flex h-full flex-col justify-end">
                      <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#60A5FA]">
                        Capability {String(activeCapability + 1).padStart(2, "0")}
                      </span>
                      <h3 className="max-w-md font-heading text-3xl font-bold leading-tight text-[#F8FAFC] sm:text-4xl">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>

                  <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#14253D] p-6 sm:p-8 lg:min-h-[314px]">
                    <div className="flex h-full flex-col justify-end">
                      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-[linear-gradient(135deg,#3B82F6,#2563EB)] text-white">
                        <Icon size={21} />
                      </div>
                      <p className="max-w-lg text-lg font-semibold leading-8 text-[#F8FAFC]">
                        {activeItem.text}
                      </p>
                      <div className="mt-8 h-px w-full bg-[rgba(255,255,255,0.08)]" />
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA]">
                          Express.js backend module
                        </p>
                        <div className="flex gap-2">
                          {expressBuildItems.map((item, index) => (
                            <button
                              key={item.title}
                              type="button"
                              onClick={() => setActiveCapability(index)}
                              className={`h-2.5 rounded-full transition-all ${
                                activeCapability === index ? "w-8 bg-[#4FD1FF]" : "w-2.5 bg-white/20 hover:bg-[#5EA2FF]/70"
                              }`}
                              aria-label={`Show ${item.title}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-border bg-background py-20">
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Technology stack</span>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Tools we pair with Express.js
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                A production-ready backend stack shaped for secure APIs, resilient data layers, and cloud deployment.
              </p>
            </div>
            <style>
              {`
                @keyframes express-stack-marquee {
                  from { transform: translateX(0); }
                  to { transform: translateX(-50%); }
                }
              `}
            </style>
          </div>
          <div
            role="button"
            tabIndex={0}
            aria-pressed={isStackPaused}
            aria-label={isStackPaused ? "Resume technology stack animation" : "Pause technology stack animation"}
            onClick={() => setIsStackPaused((paused) => !paused)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsStackPaused((paused) => !paused);
              }
            }}
            className="relative mx-auto mt-2 w-[80%] cursor-pointer overflow-hidden py-4"
          >
            <div
              className="flex w-max items-center gap-10 px-6"
              style={{
                animation: "express-stack-marquee 24s linear infinite",
                animationPlayState: isStackPaused ? "paused" : "running",
              }}
            >
              {[...expressStackItems, ...expressStackItems].map(({ title, Icon: StackIcon, accent }, index) => (
                <div
                  key={`${title}-${index}`}
                  className="flex shrink-0 items-center gap-3"
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accent}`}>
                    <StackIcon size={21} />
                  </span>
                  <span className="whitespace-nowrap font-heading text-base font-bold text-foreground">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-20 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-lg bg-[#2187F3] shadow-card">
            <div className="grid gap-8 p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  Express.js project
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-white">Need a scalable backend solution?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
                  We design and develop modern backend systems tailored for startups, businesses, and digital products.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#2187F3] transition-transform hover:-translate-y-0.5 hover:bg-white/95"
              >
                Start a Project
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Contact initialMessage="I'm interested in Express.js development." />
      <Footer />
    </div>
  );
};

const TechnologyDetail = () => {
  const { slug } = useParams();
  const technology = getTechnologyBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    if (!technology) return;
    document.title = `${technology.name} Technology | PIXLYT Digital Solutions`;
  }, [technology]);

  if (!technology) {
    return <NotFound />;
  }

  const Icon = technology.icon;

  if (technology.slug === "react-js") {
    return (
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <Navbar forceSolid />
        
        <main className="pt-24 sm:pt-32 pb-0">
          {/* HERO SECTION */}
          <section className="container mx-auto px-6 lg:px-12 py-12 lg:py-20 relative">
            <div className="absolute top-0 left-1/2 w-full max-w-3xl -translate-x-1/2 h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 block">React.js Development</span>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[1.05] text-foreground tracking-tight mb-8">
                  Scalable frontend experiences engineered for modern digital platforms.
                </h1>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
                  Interactive systems, seamless performance, and production-ready architecture built with React.js.
                </p>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="inline-flex h-14 items-center justify-center bg-primary px-8 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90"
                >
                  Discuss Project
                </motion.a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-3xl bg-secondary relative border border-border shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070" alt="React Development" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 transition-transform duration-1000 hover:scale-105 hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                {/* Floating Content Box */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-10 -left-6 sm:-left-12 bg-card/80 backdrop-blur-xl p-8 shadow-2xl max-w-xs border border-border rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-glow">
                      <Icon size={24} />
                    </div>
                    <span className="font-bold text-foreground">Performance First</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Optimized rendering and seamless state management.</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 02 — BUSINESS POSITIONING */}
          <section className="container mx-auto px-6 lg:px-12 py-32 lg:py-48">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1 relative"
              >
                <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl bg-secondary relative shadow-2xl border border-border">
                  <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076" alt="Business Architecture" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="order-1 lg:order-2"
              >
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground mb-8">
                  Build Faster with React.js
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  From SaaS platforms to enterprise-grade applications, we develop frontend systems focused on speed, usability, and long-term scalability.
                </p>
              </motion.div>
            </div>
          </section>

          {/* SECTION 03 — EXPERTISE SHOWCASE */}
          <section className="bg-foreground text-background py-32 lg:py-48 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-20 lg:mb-32"
              >
                Our Expertise
              </motion.h2>
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
                <div className="flex flex-col gap-10 border-l border-background/20 pl-8 lg:pl-12">
                  {["UI Architecture", "Component Systems", "Frontend Engineering", "API Integrations", "Performance Optimization", "Design Systems"].map((item, i) => (
                    <motion.div 
                      key={item} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group cursor-default"
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-background/30 transition-colors duration-500 group-hover:text-primary">
                        {item}
                      </h3>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative mt-16 lg:mt-0"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-background/5 relative shadow-2xl border border-background/10">
                    <img src="https://images.unsplash.com/photo-1618477247222-ac60c6218515?auto=format&fit=crop&q=80&w=2070" alt="React Expertise" className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale transition-all duration-700 hover:grayscale-0" />
                  </div>
                  {/* Floating Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute -bottom-16 -right-6 sm:-right-12 bg-background/10 backdrop-blur-2xl p-10 shadow-2xl max-w-sm border border-background/20 z-20 rounded-2xl"
                  >
                    <h4 className="font-bold text-2xl mb-4 text-background">React.js Engineering</h4>
                    <p className="text-base text-background/80 leading-relaxed">Modern frontend systems designed for scalable digital products and seamless user experiences.</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 04 — FEATURED CAPABILITIES */}
          <section className="container mx-auto px-6 lg:px-12 py-32 lg:py-48">
            <div className="max-w-3xl mb-20 lg:mb-32">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground"
              >
                Featured Capabilities
              </motion.h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
              {[
                { title: "Enterprise Dashboards", desc: "High-performance admin interfaces and analytics systems.", mt: "" },
                { title: "SaaS Platforms", desc: "Scalable frontend architecture for growing products.", mt: "mt-0 sm:mt-16" },
                { title: "Ecommerce Interfaces", desc: "Optimized shopping experiences with dynamic UI systems.", mt: "-mt-0 sm:-mt-16" },
                { title: "API Driven Applications", desc: "Flexible frontend integration with modern backend services.", mt: "" }
              ].map((card, i) => (
                <motion.div 
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`group bg-card/50 backdrop-blur-sm p-10 lg:p-14 border border-border rounded-3xl transition-all duration-300 hover:bg-card hover:shadow-glow hover:-translate-y-2 ${card.mt}`}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECTION 05 — VISUAL SHOWCASE */}
          <section className="bg-secondary/30 py-32 lg:py-40 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="container mx-auto px-6 lg:px-12 text-center mb-20 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground mb-6"
              >
                Selected React Interfaces
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground"
              >
                Designed for performance, usability, and scalability.
              </motion.p>
            </div>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="aspect-video w-full overflow-hidden rounded-[2rem] bg-background shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-border relative"
              >
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" alt="React Interface" className="w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 hover:scale-105" />
              </motion.div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="container mx-auto px-6 lg:px-12 py-32 lg:py-48 text-center max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground mb-12 tracking-tight"
            >
              Build Modern Frontend Experiences
            </motion.h2>
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-12 text-sm uppercase tracking-widest font-bold text-primary-foreground shadow-glow transition-all"
            >
              Start a React.js Project
            </motion.a>
          </section>
        </main>

        <Contact initialMessage={`I'm interested in React.js.`} />
        <Footer />
      </div>
    );
  }

  if (technology.slug === "express-js") {
    return <ExpressJsDetail Icon={Icon} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar forceSolid />

      <main>
        <section className="border-b border-border bg-secondary/60 pt-32">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
            <Link
              to="/technologies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={17} />
              Back to technologies
            </Link>

            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-glow">
                    <Icon size={24} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">{technology.category}</span>
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  {technology.name}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{technology.summary}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#procedure"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    View Procedure
                    <ArrowRight size={17} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    Discuss {technology.name} Project
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-white p-6 shadow-card">
                <div className="grid gap-4 sm:grid-cols-2">
                  {technology.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-md border border-border bg-secondary/40 p-5">
                      <Icon size={22} className="mb-4 text-primary" />
                      <div className="font-heading text-lg font-bold text-foreground">{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">About {technology.name}</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Why we use {technology.name}</h2>
              {technology.about.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-sm leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">What we build</span>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {technology.capabilities.map((capability) => (
                  <div key={capability} className="rounded-lg border border-border bg-white p-5 shadow-card">
                    <CheckCircle2 size={20} className="mb-4 text-primary" />
                    <p className="text-sm font-medium leading-6 text-foreground">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="procedure" className="border-y border-border bg-secondary/40 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Procedure</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">{technology.name} development process</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {technology.procedure.map((step, index) => (
                <div key={step.title} className="grid gap-4 rounded-lg border border-border bg-white p-5 shadow-card sm:grid-cols-[76px_1fr]">
                  <div className="font-heading text-3xl font-bold text-primary/30">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-lg bg-foreground">
            <div className="grid gap-8 p-7 text-primary-foreground sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{technology.name} project</span>
                <h2 className="mt-3 font-heading text-3xl font-bold">Ready to build with {technology.name}?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/70">
                  We can plan, design, develop, integrate, test, and launch the right {technology.name} solution for your business.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Contact initialMessage={`I'm interested in ${technology.name}.`} />
      <Footer />
    </div>
  );
};

export default TechnologyDetail;
