import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Braces, Cloud, type LucideIcon } from "lucide-react";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";

type DetailIcon = ComponentType<{ size?: number | string; className?: string }>;
type StackIcon = DetailIcon | LucideIcon;

const webBuildItems = [
  {
    title: "Business Website Development",
    text: "Responsive websites with polished sections, clear content paths, lead forms, SEO basics, and strong performance.",
    image: project1,
  },
  {
    title: "Web Application Development",
    text: "Browser-based products, portals, dashboards, and workflow tools built with scalable frontend architecture.",
    image: project2,
  },
  {
    title: "Landing Page Systems",
    text: "Campaign pages and product pages designed for fast loading, clear messaging, and conversion tracking.",
    image: heroSlide1,
  },
  {
    title: "API & Backend Integration",
    text: "Connected forms, user flows, authentication, payment gateways, CRMs, email services, and third-party APIs.",
    image: heroSlide3,
  },
  {
    title: "CMS & Analytics Setup",
    text: "Content workflows, analytics events, dashboards, and marketing tools configured for daily team use.",
    image: heroSlide2,
  },
  {
    title: "Launch, SEO & Optimization",
    text: "Cross-device QA, deployment support, speed improvements, metadata setup, and post-launch maintenance.",
    image: project4,
  },
];

const webStackItems: Array<{ title: string; Icon: StackIcon; accent: string }> = [
  {
    title: "React.js",
    Icon: SiReact,
    accent: "bg-sky-50 text-sky-700",
  },
  {
    title: "TypeScript",
    Icon: SiTypescript,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    title: "Tailwind CSS",
    Icon: SiTailwindcss,
    accent: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Node.js",
    Icon: SiNodedotjs,
    accent: "bg-green-50 text-green-700",
  },
  {
    title: "Express.js",
    Icon: SiExpress,
    accent: "bg-slate-100 text-slate-900",
  },
  {
    title: "REST APIs",
    Icon: Braces,
    accent: "bg-sky-50 text-sky-700",
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
    title: "Cloud Deployment",
    Icon: Cloud,
    accent: "bg-indigo-50 text-indigo-700",
  },
];

const WebDevelopmentDetail = ({ Icon }: { Icon: DetailIcon }) => {
  const [activeCapability, setActiveCapability] = useState(0);
  const [isStackPaused, setIsStackPaused] = useState(false);
  const capabilitySectionRef = useRef<HTMLElement | null>(null);
  const activeCapabilityRef = useRef(activeCapability);
  const wheelLockedRef = useRef(false);
  const activeItem = webBuildItems[activeCapability];

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
        webBuildItems.length - 1
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
              to="/solutions/development-services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={17} />
              Back to development services
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
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Modern web experiences</span>
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Web Development
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Fast, responsive websites and web applications built with clean UI, scalable engineering, SEO foundations, and reliable performance.
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
                  {["Responsive UI", "SEO Ready", "Fast Performance", "Integration Ready"].map((highlight) => (
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
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">About Web Development</span>
              <h2 className="mt-2 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Web systems with clean architecture
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                Scalable web foundations for websites, portals, dashboards, ecommerce journeys, and custom browser-based products.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-card sm:p-5 lg:p-6">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_80px_1fr] lg:items-center">
                <div className="rounded-2xl border border-border bg-secondary/40 p-3">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <img
                      src={heroSlide3}
                      alt="Web development architecture"
                      className="h-full w-full object-cover [filter:saturate(0.9)_brightness(0.92)_contrast(1.05)_hue-rotate(-8deg)]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,30,0.05),rgba(8,15,30,0.35))]" />
                    <div className="absolute bottom-4 left-4 rounded-md bg-[#061321]/80 px-3 py-2 text-xs font-semibold text-[#5EA2FF] backdrop-blur">
                      Web architecture
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
                  <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Core web expertise</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                    We build websites and web applications for startups, growing brands, internal teams, and digital products. Our web development process combines responsive UI, backend integrations, CMS workflows, analytics, testing, and deployment support so the final product is practical, fast, and easy to maintain.
                  </p>

                  <div className="mt-7 space-y-3">
                    {["Responsive frontend systems", "SEO and performance foundations", "Backend and CMS integration"].map((item) => (
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
              <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-[#F8FAFC] sm:text-5xl">Web development capabilities</h2>
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
                          Web development module
                        </p>
                        <div className="flex gap-2">
                          {webBuildItems.map((item, index) => (
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
                Tools we pair with Web Development
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                A production-ready web stack shaped for fast interfaces, connected APIs, stable data layers, and cloud deployment.
              </p>
            </div>
            <style>
              {`
                @keyframes web-stack-marquee {
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
                animation: "web-stack-marquee 24s linear infinite",
                animationPlayState: isStackPaused ? "paused" : "running",
              }}
            >
              {[...webStackItems, ...webStackItems].map(({ title, Icon: StackIcon, accent }, index) => (
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
                  Web development project
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-white">Need a scalable web solution?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
                  We design and develop modern web experiences tailored for startups, businesses, and digital products.
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

      <Contact initialMessage="I'm interested in Web Development." />
      <Footer />
    </div>
  );
};

export default WebDevelopmentDetail;
