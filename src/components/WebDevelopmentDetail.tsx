import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Braces, Cloud, CreditCard, type LucideIcon } from "lucide-react";
import {
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSharp,
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
type ServiceSlug = "web-development" | "software-development" | "mobile-app-development";

type StackItem = {
  title: string;
  Icon: StackIcon;
  accent: string;
};

type CapabilityItem = {
  title: string;
  text: string;
  image: string;
};

type ServiceConfig = {
  title: string;
  eyebrow: string;
  heroDescription: string;
  highlights: string[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutDescription: string;
  architectureLabel: string;
  expertiseTitle: string;
  expertiseText: string;
  expertisePoints: string[];
  capabilitiesTitle: string;
  moduleLabel: string;
  stackTitle: string;
  stackText: string;
  stackItems: StackItem[];
  buildItems: CapabilityItem[];
  ctaLabel: string;
  ctaTitle: string;
  ctaText: string;
  contactMessage: string;
};

const developmentStackItems: StackItem[] = [
  { title: "MERN Stack", Icon: Braces, accent: "bg-slate-100 text-slate-800" },
  { title: "React.js", Icon: SiReact, accent: "bg-sky-50 text-sky-700" },
  { title: "Express.js", Icon: SiExpress, accent: "bg-slate-100 text-slate-900" },
  { title: "MongoDB", Icon: SiMongodb, accent: "bg-emerald-50 text-emerald-700" },
  { title: "Node.js", Icon: SiNodedotjs, accent: "bg-green-50 text-green-700" },
  { title: "PostgreSQL", Icon: SiPostgresql, accent: "bg-blue-50 text-blue-700" },
  { title: "ASP.NET", Icon: SiDotnet, accent: "bg-violet-50 text-violet-700" },
  { title: "C Sharp", Icon: SiSharp, accent: "bg-purple-50 text-purple-700" },
  { title: "Postman API", Icon: SiPostman, accent: "bg-orange-50 text-orange-700" },
  { title: "Cloud", Icon: Cloud, accent: "bg-indigo-50 text-indigo-700" },
  { title: "AI Tools", Icon: SiOpenai, accent: "bg-teal-50 text-teal-700" },
  { title: "Payment Integration", Icon: CreditCard, accent: "bg-rose-50 text-rose-700" },
];

const mobileStackItems: StackItem[] = [
  { title: "Flutter", Icon: SiFlutter, accent: "bg-sky-50 text-sky-700" },
  { title: "React Native", Icon: SiReact, accent: "bg-cyan-50 text-cyan-700" },
  { title: "MERN Stack", Icon: Braces, accent: "bg-slate-100 text-slate-800" },
  { title: "React.js", Icon: SiReact, accent: "bg-sky-50 text-sky-700" },
  { title: "Node.js", Icon: SiNodedotjs, accent: "bg-green-50 text-green-700" },
  { title: "Express.js", Icon: SiExpress, accent: "bg-slate-100 text-slate-900" },
  { title: "MongoDB", Icon: SiMongodb, accent: "bg-emerald-50 text-emerald-700" },
  { title: "PostgreSQL", Icon: SiPostgresql, accent: "bg-blue-50 text-blue-700" },
  { title: "Postman API", Icon: SiPostman, accent: "bg-orange-50 text-orange-700" },
  { title: "Cloud", Icon: Cloud, accent: "bg-indigo-50 text-indigo-700" },
  { title: "AI Tools", Icon: SiOpenai, accent: "bg-teal-50 text-teal-700" },
  { title: "Payment Integration", Icon: CreditCard, accent: "bg-rose-50 text-rose-700" },
];

export const developmentTechStackItems: StackItem[] = [
  ...developmentStackItems.slice(1, 11),
  { title: "React Native", Icon: SiReact, accent: "bg-cyan-50 text-cyan-700" },
  { title: "Flutter", Icon: SiFlutter, accent: "bg-sky-50 text-sky-700" },
  { title: "MERN Stack", Icon: Braces, accent: "bg-slate-100 text-slate-800" },
  { title: "Payment Integration", Icon: CreditCard, accent: "bg-rose-50 text-rose-700" },
];

const serviceConfigs: Record<ServiceSlug, ServiceConfig> = {
  "web-development": {
    title: "Web Development",
    eyebrow: "Modern web experiences",
    heroDescription:
      "Fast, responsive websites and web applications built with clean UI, scalable engineering, SEO foundations, payment integration, and reliable performance.",
    highlights: ["Responsive UI", "SEO Ready", "Fast Performance", "Payment Ready"],
    aboutEyebrow: "About Web Development",
    aboutTitle: "Web systems with clean architecture",
    aboutDescription:
      "Scalable web foundations for websites, portals, dashboards, ecommerce journeys, and custom browser-based products.",
    architectureLabel: "Web architecture",
    expertiseTitle: "Core web expertise",
    expertiseText:
      "We build websites and web applications for startups, growing brands, internal teams, and digital products. Our web development process combines responsive UI, backend integrations, CMS workflows, payment gateways, analytics, testing, and deployment support so the final product is practical, fast, and easy to maintain.",
    expertisePoints: ["Responsive frontend systems", "SEO and performance foundations", "Payment, backend, and CMS integration"],
    capabilitiesTitle: "Web development capabilities",
    moduleLabel: "Web development module",
    stackTitle: "Development Tech Stack",
    stackText:
      "A production-ready development stack shaped around MERN, ASP.NET, APIs, data, cloud deployment, AI tools, and payment integrations.",
    stackItems: developmentStackItems,
    buildItems: [
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
        title: "Payment Gateway Integration",
        text: "Checkout flows, subscription payments, invoices, webhook handling, and secure transaction workflows.",
        image: heroSlide2,
      },
      {
        title: "API & Backend Integration",
        text: "Connected forms, user flows, authentication, payment gateways, CRMs, email services, and third-party APIs.",
        image: heroSlide3,
      },
      {
        title: "Launch, SEO & Optimization",
        text: "Cross-device QA, deployment support, speed improvements, metadata setup, and post-launch maintenance.",
        image: project4,
      },
    ],
    ctaLabel: "Web development project",
    ctaTitle: "Need a scalable web solution?",
    ctaText: "We design and develop modern web experiences tailored for startups, businesses, and digital products.",
    contactMessage: "I'm interested in Web Development.",
  },
  "software-development": {
    title: "Software Development",
    eyebrow: "Custom business systems",
    heroDescription:
      "Custom dashboards, SaaS workflows, admin tools, APIs, payment modules, and enterprise software built with MERN, ASP.NET, C Sharp, and cloud-ready architecture.",
    highlights: ["Custom Workflows", "Secure APIs", "Payment Ready", "Cloud Ready"],
    aboutEyebrow: "About Software Development",
    aboutTitle: "Software systems built around operations",
    aboutDescription:
      "Reliable software foundations for dashboards, SaaS products, internal platforms, admin portals, and business workflow automation.",
    architectureLabel: "Software architecture",
    expertiseTitle: "Core software expertise",
    expertiseText:
      "We build custom software that connects users, data, payments, and business processes in one maintainable system. The delivery can use MERN for fast product builds, ASP.NET and C Sharp for enterprise-grade systems, PostgreSQL or MongoDB for data, Postman API for testing, and cloud deployment for scale.",
    expertisePoints: ["MERN and ASP.NET architecture", "Payment and third-party integrations", "Dashboards, roles, reports, and workflow automation"],
    capabilitiesTitle: "Software development capabilities",
    moduleLabel: "Software development module",
    stackTitle: "Development Tech Stack",
    stackText:
      "A practical software stack for MERN products, ASP.NET applications, secure APIs, payment workflows, databases, cloud deployment, and AI-assisted automation.",
    stackItems: developmentStackItems,
    buildItems: [
      {
        title: "Custom Software Platforms",
        text: "Role-based business applications, SaaS modules, internal portals, and operational systems built around your workflow.",
        image: project2,
      },
      {
        title: "Admin Dashboards",
        text: "Dashboards for analytics, user management, approvals, content operations, inventory, finance, and reporting.",
        image: project4,
      },
      {
        title: "Payment Integration",
        text: "Secure checkout, recurring billing, invoice workflows, payment status tracking, refunds, and webhook processing.",
        image: heroSlide2,
      },
      {
        title: "MERN Application Development",
        text: "React.js, Node.js, Express.js, and MongoDB systems for fast, scalable, API-driven product development.",
        image: project1,
      },
      {
        title: "ASP.NET & C Sharp Systems",
        text: "Enterprise applications, secure APIs, admin portals, and Microsoft-stack integrations built for long-term maintainability.",
        image: heroSlide3,
      },
      {
        title: "Cloud, APIs & AI Tools",
        text: "Postman API workflows, cloud deployment, database operations, AI tool integrations, monitoring, and launch support.",
        image: heroSlide1,
      },
    ],
    ctaLabel: "Software development project",
    ctaTitle: "Need custom software for your business?",
    ctaText: "We build secure software systems that simplify operations, connect data, and support business growth.",
    contactMessage: "I'm interested in Software Development.",
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    eyebrow: "React Native & Flutter apps",
    heroDescription:
      "Mobile apps for Android and iOS with React Native, Flutter, secure APIs, payment integration, cloud backends, and release-ready product flows.",
    highlights: ["React Native", "Flutter", "Payment Ready", "API Connected"],
    aboutEyebrow: "About Mobile App Development",
    aboutTitle: "Mobile apps with connected backends",
    aboutDescription:
      "Customer and internal mobile apps with smooth screens, secure data flows, payment modules, notifications, and scalable backend services.",
    architectureLabel: "Mobile app architecture",
    expertiseTitle: "Core mobile expertise",
    expertiseText:
      "We build mobile apps with React Native and Flutter for user-facing products, internal field apps, ecommerce flows, booking platforms, and service apps. The backend can use MERN, Node.js, Express.js, PostgreSQL, MongoDB, cloud services, Postman API workflows, payment integrations, and AI tools where useful.",
    expertisePoints: ["React Native and Flutter app builds", "Payment, API, and cloud backend integration", "Android and iOS release support"],
    capabilitiesTitle: "Mobile app development capabilities",
    moduleLabel: "Mobile app development module",
    stackTitle: "Development Tech Stack",
    stackText:
      "A mobile-ready stack using Flutter, React Native, MERN, APIs, cloud deployment, payments, databases, and AI tools.",
    stackItems: mobileStackItems,
    buildItems: [
      {
        title: "React Native App Development",
        text: "Cross-platform Android and iOS apps with reusable screens, API-connected flows, authentication, and release support.",
        image: heroSlide2,
      },
      {
        title: "Flutter App Development",
        text: "Polished Flutter apps with smooth UI, platform-ready features, reusable widgets, and scalable product architecture.",
        image: project1,
      },
      {
        title: "Payment Integration",
        text: "In-app checkout, subscriptions, order payments, invoice flows, transaction status, and secure webhook handling.",
        image: project2,
      },
      {
        title: "Mobile API Backends",
        text: "Node.js, Express.js, MongoDB, PostgreSQL, and cloud APIs that keep app data secure and responsive.",
        image: heroSlide3,
      },
      {
        title: "App Features & Notifications",
        text: "Profiles, forms, media, dashboards, push notifications, location-aware flows, and user activity modules.",
        image: project4,
      },
      {
        title: "Testing, Cloud & Release",
        text: "Device testing, API validation with Postman, cloud deployment, performance optimization, and launch support.",
        image: heroSlide1,
      },
    ],
    ctaLabel: "Mobile app development project",
    ctaTitle: "Need a mobile app for Android and iOS?",
    ctaText: "We plan, design, build, test, and support mobile apps with connected backends and payment-ready workflows.",
    contactMessage: "I'm interested in Mobile App Development.",
  },
};

const WebDevelopmentDetail = ({
  Icon,
  serviceSlug = "web-development",
}: {
  Icon: DetailIcon;
  serviceSlug?: ServiceSlug;
}) => {
  const config = serviceConfigs[serviceSlug];
  const [activeCapability, setActiveCapability] = useState(0);
  const [isStackPaused, setIsStackPaused] = useState(false);
  const capabilitySectionRef = useRef<HTMLElement | null>(null);
  const activeCapabilityRef = useRef(activeCapability);
  const wheelLockedRef = useRef(false);
  const activeItem = config.buildItems[activeCapability];

  useEffect(() => {
    activeCapabilityRef.current = activeCapability;
  }, [activeCapability]);

  useEffect(() => {
    setActiveCapability(0);
    activeCapabilityRef.current = 0;
  }, [serviceSlug]);

  useEffect(() => {
    const section = capabilitySectionRef.current;
    if (!section) return;

    const handleCapabilityWheel = (event: globalThis.WheelEvent) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextCapability = Math.min(
        Math.max(activeCapabilityRef.current + direction, 0),
        config.buildItems.length - 1
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
  }, [config.buildItems.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar forceSolid />

      <main className="pt-32">
        <section className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
            <Link
              to="/solutions/development-services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#3B82F6] transition-colors hover:text-[#2563EB]"
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3B82F6] text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <Icon size={24} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">{config.eyebrow}</span>
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6.5xl font-black leading-[0.95] tracking-tighter text-[#0F172A]">
                  {config.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">{config.heroDescription}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB]"
                  >
                    Discuss Project
                    <ArrowRight size={17} />
                  </a>
                  <a
                    href="/#projects"
                    className="inline-flex items-center justify-center rounded-md border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-bold text-[#0F172A] shadow-premium transition-colors hover:border-[#3B82F6]/40 hover:text-[#3B82F6]"
                  >
                    View Projects
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-premium"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {config.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-sm transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-premium hover:-translate-y-0.5">
                      <Icon size={22} className="mb-4 text-[#3B82F6]" />
                      <div className="font-heading text-lg font-black text-[#0F172A]">{highlight}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">{config.aboutEyebrow}</span>
              <h2 className="mt-2 font-heading text-4xl sm:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
                {config.aboutTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#475569]">{config.aboutDescription}</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-premium-gradient p-4 shadow-premium sm:p-5 lg:p-6">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_80px_1fr] lg:items-center">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <img
                      src={heroSlide3}
                      alt={config.architectureLabel}
                      className="h-full w-full object-cover [filter:saturate(0.9)_brightness(0.92)_contrast(1.05)_hue-rotate(-8deg)]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,30,0.05),rgba(8,15,30,0.35))]" />
                    <div className="absolute bottom-4 left-4 rounded-md bg-[#061321]/80 px-3 py-2 text-xs font-semibold text-[#5EA2FF] backdrop-blur">
                      {config.architectureLabel}
                    </div>
                  </div>
                </div>

                <div className="relative hidden h-full min-h-[260px] items-center justify-center lg:flex">
                  <div className="h-full w-px bg-[#E2E8F0]" />
                  <span className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-bold text-[#3B82F6] shadow-sm">
                    01
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">{config.expertiseTitle}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#475569]">{config.expertiseText}</p>

                  <div className="mt-7 space-y-3">
                    {config.expertisePoints.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#0F172A]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#3B82F6]/10 text-[#3B82F6] shadow-sm">
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

        <section className="relative overflow-hidden bg-[#0B0F19] py-20 text-white sm:py-24 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">What we build</span>
              <h2 className="mt-3 font-heading text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {config.capabilitiesTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#94A3B8]">
                Scroll inside this section to change the image, topic, and content in the same place.
              </p>
            </div>

            <div
              ref={capabilitySectionRef}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/40 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.5),0_0_50px_rgba(59,130,246,0.06)] sm:p-4 backdrop-blur-xl"
            >
              <motion.div
                key={`${serviceSlug}-${activeCapability}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="grid gap-4 lg:grid-cols-[1.08fr_1fr]"
              >
                <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#1E293B] lg:min-h-[520px]">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="h-full w-full object-cover opacity-80 saturate-150 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,25,0.05),rgba(11,15,25,0.6))]" />
                </div>

                <div className="grid gap-4">
                  <div className="relative min-h-[190px] overflow-hidden rounded-xl border border-white/10 bg-dark-premium-gradient p-6 sm:p-8">
                    <div className="flex h-full flex-col justify-end">
                      <span className="mb-3 text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
                        Capability {String(activeCapability + 1).padStart(2, "0")}
                      </span>
                      <h3 className="max-w-md font-heading text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>

                  <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-white/10 bg-[#0F172A]/80 p-6 sm:p-8 lg:min-h-[314px]">
                    <div className="flex h-full flex-col justify-end">
                      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-[#3B82F6] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <Icon size={21} />
                      </div>
                      <p className="max-w-lg text-lg font-bold leading-8 text-[#E2E8F0]">{activeItem.text}</p>
                      <div className="mt-8 h-px w-full bg-white/10" />
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
                          {config.moduleLabel}
                        </p>
                        <div className="flex gap-2">
                          {config.buildItems.map((item, index) => (
                            <button
                              key={item.title}
                              type="button"
                              onClick={() => setActiveCapability(index)}
                              className={`h-2.5 rounded-full transition-all ${
                                activeCapability === index ? "w-8 bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.6)]" : "w-2.5 bg-white/20 hover:bg-[#60A5FA]/70"
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

        <section className="relative overflow-hidden border-y border-[#E2E8F0] bg-gradient-to-b from-[#F8FAFC] to-white py-20">
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">Technology stack</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] leading-tight">
                {config.stackTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#475569]">{config.stackText}</p>
            </div>
            <style>
              {`
                @keyframes development-stack-marquee {
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
            className="relative mx-auto mt-2 w-[85%] cursor-pointer overflow-hidden py-4"
          >
            <div
              className="flex w-max items-center gap-6 px-6"
              style={{
                animation: "development-stack-marquee 24s linear infinite",
                animationPlayState: isStackPaused ? "paused" : "running",
              }}
            >
              {[...config.stackItems, ...config.stackItems].map(({ title, Icon: StackIcon, accent }, index) => (
                <div key={`${title}-${index}`} className="flex shrink-0 items-center gap-3 border border-[#E2E8F0] bg-white px-4 py-2.5 rounded-xl shadow-sm hover:border-[#3B82F6]/30 hover:shadow-md transition-all duration-300">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accent}`}>
                    <StackIcon size={21} />
                  </span>
                  <span className="whitespace-nowrap font-heading text-base font-bold text-[#0F172A]">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 pb-20 sm:px-10 lg:px-12">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F172A] to-[#111827] shadow-[0_24px_70px_rgba(0,0,0,0.5),0_0_50px_rgba(59,130,246,0.12)] p-1">
            <div className="grid gap-8 p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center relative z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">{config.ctaLabel}</span>
                <h2 className="mt-3 font-heading text-3xl font-black text-white tracking-tight leading-tight">{config.ctaTitle}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#94A3B8]">{config.ctaText}</p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB]"
              >
                Start a Project
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Contact initialMessage={config.contactMessage} />
      <Footer />
    </div>
  );
};

export default WebDevelopmentDetail;
