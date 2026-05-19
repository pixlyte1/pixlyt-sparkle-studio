import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Bot,
  Braces,
  ChevronRight,
  Cloud,
  CreditCard,
  Layers3,
  LineChart,
  MonitorSmartphone,
  PanelsTopLeft,
  ServerCog,
  Smartphone,
} from "lucide-react";
import {
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
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
import aiSolutionImage from "@/assets/solutions/ai_solution.png";
import cmsSolutionImage from "@/assets/solutions/cms_solution.png";
import dataEngSolutionImage from "@/assets/solutions/data_eng_solution.png";
import managedServicesSolutionImage from "@/assets/solutions/managed_services_solution.png";


type DetailIcon = ComponentType<{ size?: number | string; className?: string }>;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const metrics = [
  { value: "05", label: "service tracks" },
  { value: "MERN", label: "product stack" },
  { value: "DXP", label: "enterprise platforms" },
  { value: "Cloud", label: "deployment ready" },
];

const coreServices = [
  {
    title: "Web Development",
    label: "Web Platforms",
    description:
      "Scalable web platforms engineered for performance, content flexibility, payment readiness, and future growth.",
    href: "/solutions/web-development",
    image: project1,
    Icon: PanelsTopLeft,
  },
  {
    title: "Software Development",
    label: "Product Systems",
    description:
      "Business-critical software systems built around secure APIs, operational workflows, analytics, and enterprise-grade architecture.",
    href: "/solutions/software-development",
    image: project2,
    Icon: ServerCog,
  },
  {
    title: "Mobile App Development",
    label: "Mobile Experiences",
    description:
      "Cross-platform mobile applications designed for connected services, reliable transactions, and release-ready product growth.",
    href: "/solutions/mobile-app-development",
    image: heroSlide2,
    Icon: Smartphone,
  },
];

const platforms = [
  {
    title: "Sitecore Solutions",
    href: "/solutions/sitecore-development",
    description:
      "Enterprise Sitecore implementations focused on scalable content operations, personalization systems, and headless digital experiences.",
    tags: ["Enterprise CMS", "XM Cloud", "Personalization", "Headless Architecture"],
    image: heroSlide3,
  },
  {
    title: "Optimizely Solutions",
    href: "/solutions/optimizely-development",
    description:
      "Optimizely-powered experience platforms designed for experimentation, conversion optimization, and commerce-ready digital journeys.",
    tags: ["DXP Platform", "Experimentation", "Commerce", "Personalization"],
    image: heroSlide1,
  },
  {
    title: "WordPress Solutions",
    href: "/solutions/cms-dxp",
    description:
      "Custom enterprise WordPress implementations scaled with headless APIs, custom block architectures, and high-performance hosting environments.",
    tags: ["Headless CMS", "Enterprise WP", "WooCommerce", "Custom Blocks"],
    image: heroSlide2,
  },
];

const marqueeItems = [
  { name: "JWT Authentication", Icon: SiJsonwebtokens, bg: "bg-[#F1F5F9]", color: "text-[#475569]" },
  { name: "REST APIs", Icon: Braces, bg: "bg-[#EFF6FF]", color: "text-[#3B82F6]" },
  { name: "Docker", Icon: SiDocker, bg: "bg-[#F0FDFA]", color: "text-[#0D9488]" },
  { name: "Cloud Deployment", Icon: Cloud, bg: "bg-[#EEF2FF]", color: "text-[#6366F1]" },
  { name: "Express.js", Icon: SiExpress, bg: "bg-[#F8FAFC]", color: "text-[#475569]" },
  { name: "Node.js", Icon: SiNodedotjs, bg: "bg-[#F0FDF4]", color: "text-[#16A34A]" },
  { name: "MongoDB", Icon: SiMongodb, bg: "bg-[#F0FDF4]", color: "text-[#15803D]" },
  { name: "PostgreSQL", Icon: SiPostgresql, bg: "bg-[#EFF6FF]", color: "text-[#2563EB]" },
];

const relatedSolutions = [
  {
    title: "CMS & DXP",
    eyebrow: "Digital Experience Platforms",
    href: "/solutions/cms-dxp",
    Icon: Layers3,
    image: cmsSolutionImage,
    description: "Modern content platforms that let marketing teams publish faster while giving customers consistent experiences across web, mobile, and campaigns.",
  },
  {
    title: "Data Engineering",
    eyebrow: "Reliable Data Foundations",
    href: "/solutions/data-engineering",
    Icon: ServerCog,
    image: dataEngSolutionImage,
    description: "Clean data pipelines, trusted warehouses, integrations, and reporting foundations that make business intelligence dependable.",
  },
];

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  isDark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
  isDark?: boolean;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.65, ease: "easeOut" }}
    className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
  >
    <span className={`text-xs font-bold uppercase tracking-[0.34em] ${isDark ? "text-[#60A5FA]" : "text-[#3B82F6]"}`}>{eyebrow}</span>
    <h2 className={`mt-5 font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-5xl tracking-tight ${isDark ? "text-white" : "text-[#0F172A]"}`}>{title}</h2>
    <p className={`mt-5 text-base leading-8 ${isDark ? "text-[#94A3B8]" : "text-[#475569]"}`}>{subtitle}</p>
  </motion.div>
);

const MeshBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      aria-hidden="true"
      animate={{ opacity: [0.55, 0.9, 0.55], backgroundPosition: ["0% 0%", "100% 80%", "0% 0%"] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-[linear-gradient(120deg,hsl(var(--primary)/0.15),transparent_30%,hsl(var(--accent)/0.1)_58%,transparent_76%,hsl(var(--primary)/0.1))] bg-[length:180%_180%]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.75),transparent_88%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.78),hsl(var(--secondary)/0.82)_62%,hsl(var(--background))_94%)]" />
  </div>
);

const DarkMeshBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      aria-hidden="true"
      animate={{ opacity: [0.3, 0.5, 0.3], backgroundPosition: ["0% 0%", "100% 80%", "0% 0%"] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.18),transparent_30%,rgba(147,51,234,0.12)_58%,transparent_76%,rgba(59,130,246,0.15))] bg-[length:180%_180%]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.9),transparent_80%)]" />
  </div>
);

const ArchitectureVisual = ({ image, label }: { image: string; label: string }) => (
  <div className="relative min-h-[260px] overflow-hidden border border-[#E2E8F0] bg-gradient-to-br from-slate-50 via-slate-100 to-white p-4 shadow-premium">
    <img src={image} alt={label} className="absolute inset-0 h-full w-full object-cover opacity-15 saturate-150" loading="lazy" />
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,250,252,0.9),rgba(226,232,240,0.74),rgba(248,250,252,0.93))]" />
    <div className="relative grid h-full min-h-[228px] grid-cols-6 grid-rows-5 gap-3">
      <motion.div
        whileHover={{ y: -4 }}
        className="col-span-3 row-span-2 border border-[#E2E8F0] bg-white p-4 shadow-premium rounded-lg"
      >
        <div className="mb-5 h-1.5 w-20 bg-[#3B82F6]" />
        <div className="h-2 w-full bg-slate-100 rounded-sm" />
        <div className="mt-3 h-2 w-2/3 bg-slate-50 rounded-sm" />
      </motion.div>
      <motion.div
        whileHover={{ y: -4 }}
        className="col-span-3 row-span-3 border border-[#E2E8F0] bg-slate-50 p-4 shadow-premium rounded-lg"
      >
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} className="aspect-square border border-[#E2E8F0] bg-white rounded-sm" />
          ))}
        </div>
      </motion.div>
      <motion.div
        whileHover={{ y: -4 }}
        className="col-span-4 row-span-2 border border-[#E2E8F0] bg-white p-4 shadow-premium rounded-lg"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
          <span className="h-2 w-28 bg-slate-100 rounded-sm" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-slate-50 rounded-sm" />
          <div className="h-2 w-4/5 bg-slate-50 rounded-sm" />
          <div className="h-2 w-2/5 bg-[#3B82F6]/30 rounded-sm" />
        </div>
      </motion.div>
      <motion.div
        whileHover={{ y: -4 }}
        className="col-span-2 row-span-2 border border-[#E2E8F0] bg-slate-50 p-4 shadow-premium rounded-lg"
      >
        <LineChart className="text-[#3B82F6]" size={26} />
        <div className="mt-8 h-2 w-full bg-slate-200 rounded-sm" />
      </motion.div>
    </div>
  </div>
);

const DevelopmentServicesPage = ({ Icon }: { Icon: DetailIcon }) => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar forceSolid />

    <main>
      <section className="relative overflow-hidden pt-32">
        <MeshBackground />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-14 sm:px-10 lg:px-12 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-end"
          >
            <div>
              <div className="inline-flex items-center gap-2 border border-[#E2E8F0] bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#3B82F6] shadow-premium rounded-md backdrop-blur-xl">
                <BadgeCheck size={15} className="text-[#3B82F6]" />
                Premium Development Studio
              </div>
              <h1 className="mt-8 max-w-5xl font-heading text-5xl sm:text-6xl lg:text-7.5xl font-black leading-[0.95] tracking-tighter text-[#0F172A]">
                Engineering Digital Products, Platforms & Enterprise Experiences
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#475569] sm:text-xl">
                End-to-end development services for websites, software systems, mobile applications, and enterprise experience platforms.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB]"
                >
                  Discuss Your Project
                  <ArrowRight size={17} />
                </a>
                <a
                  href="#core-services"
                  className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-bold text-[#0F172A] shadow-premium transition-colors hover:border-[#3B82F6]/40 hover:text-[#3B82F6]"
                >
                  Explore Capabilities
                  <ChevronRight size={17} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-3 border border-[#E2E8F0] bg-white/90 p-3 shadow-premium backdrop-blur-2xl rounded-xl">
                <div className="grid grid-cols-2 gap-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="border border-[#E2E8F0] bg-premium-gradient p-5 shadow-premium rounded-lg transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1">
                      <div className="font-heading text-3xl font-black text-[#0F172A]">{metric.value}</div>
                      <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3B82F6]">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="relative min-h-[190px] overflow-hidden border border-[#E2E8F0] bg-premium-gradient p-5 rounded-lg shadow-inner">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:34px_34px]" />
                  <div className="relative grid h-full grid-cols-5 grid-rows-3 gap-3">
                    <div className="col-span-3 row-span-2 border border-[#E2E8F0] bg-white p-4 shadow-premium rounded-md">
                      <Icon size={28} className="text-[#3B82F6]" />
                      <div className="mt-10 h-2 w-32 bg-[#3B82F6]/20 rounded-sm" />
                    </div>
                    <div className="col-span-2 row-span-1 border border-[#E2E8F0] bg-white p-4 shadow-premium rounded-md">
                      <div className="h-2 w-20 bg-[#10B981]/50 rounded-sm" />
                    </div>
                    <div className="col-span-2 row-span-2 border border-[#E2E8F0] bg-white p-4 shadow-premium rounded-md">
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-slate-100 rounded-sm" />
                        <div className="h-2 w-3/4 bg-slate-50 rounded-sm" />
                        <div className="h-2 w-1/2 bg-slate-50 rounded-sm" />
                      </div>
                    </div>
                    <div className="col-span-3 row-span-1 border border-[#E2E8F0] bg-white p-4 shadow-premium rounded-md">
                      <div className="h-2 w-2/3 bg-slate-100 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="core-services" className="bg-white py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeader
            eyebrow="Core Services"
            title="Productized development teams for modern digital systems"
            subtitle="Focused service lines engineered around real product architecture, delivery quality, and enterprise-grade maintainability."
          />
          <div className="mt-14 space-y-7">
            {coreServices.map((service, index) => {
              const ServiceIcon = service.Icon;
              const reverse = index % 2 === 1;
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group grid overflow-hidden rounded-2xl border border-[#E2E8F0] bg-premium-gradient shadow-premium transition-all duration-500 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-premium-hover lg:grid-cols-2"
                >
                  <div className={`p-7 sm:p-10 lg:p-12 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="mb-8 inline-flex h-12 w-12 items-center justify-center border border-[#E2E8F0] bg-[#3B82F6]/5 text-[#3B82F6] rounded-lg">
                      <ServiceIcon size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B82F6]">{service.label}</span>
                    <h3 className="mt-5 font-heading text-3xl font-black text-[#0F172A] sm:text-4xl tracking-tight leading-tight">{service.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#475569]">{service.description}</p>
                    <Link
                      to={service.href}
                      className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] transition-colors hover:text-[#3B82F6]"
                    >
                      Explore Capability
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <ArchitectureVisual image={service.image} label={`${service.title} architecture visual`} />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5 bg-[linear-gradient(180deg,#061321_0%,#0B1D33_35%,#102845_100%)] py-24 sm:py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,209,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeader
            eyebrow="Enterprise Platforms"
            title="Digital Experience Platforms"
            subtitle="Enterprise-grade CMS and personalization ecosystems built for scale."
            isDark={true}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {platforms.map((platform) => (
              <motion.article
                key={platform.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#14253D] shadow-[0_4px_30px_rgba(0,0,0,0.4),0_0_40px_rgba(59,130,246,0.06)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_50px_rgba(59,130,246,0.15)]"
              >
                <div className="relative min-h-[260px] overflow-hidden">
                  <img src={platform.image} alt={platform.title} className="absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(11,15,25,0.85)_100%)]" />
                  <div className="absolute inset-x-6 bottom-6 border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl rounded-xl">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {platform.tags.map((tag) => (
                        <span key={tag} className="border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 shadow-sm rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-3xl font-black text-white">{platform.title}</h3>
                  </div>
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-base leading-8 text-[#94A3B8]">{platform.description}</p>
                  <Link
                    to={platform.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#60A5FA] hover:text-[#93C5FD] transition-colors"
                  >
                    View Platform
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#E2E8F0] bg-gradient-to-b from-[#F8FAFC] to-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeader
            eyebrow="Technology Stack"
            title="Engineering Stack"
            subtitle="Modern technologies powering scalable digital systems."
            align="center"
          />
          <style>
            {`
              @keyframes stack-marquee-dev-services {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}
          </style>
          <div className="relative mx-auto mt-12 w-[90%] overflow-hidden py-4">
            {/* Premium Soft-Fade Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />

            <div
              className="flex w-max items-center gap-6 px-6 hover:[animation-play-state:paused]"
              style={{
                animation: "stack-marquee-dev-services 24s linear infinite",
              }}
            >
              {[...marqueeItems, ...marqueeItems].map(({ name, Icon: StackIcon, bg, color }, index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex shrink-0 items-center gap-3 bg-white pl-3.5 pr-5 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg} ${color}`}>
                    <StackIcon size={20} />
                  </span>
                  <span className="whitespace-nowrap font-heading text-base font-black text-[#0F172A]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#3B82F6]">Related solutions</span>
              <h2 className="mt-3 font-heading text-3xl font-black text-[#0F172A] sm:text-4xl tracking-tight">Continue exploring</h2>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#3B82F6] transition-colors hover:text-[#2563EB]"
            >
              See all expertise
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {relatedSolutions.map((solution) => {
              const RelatedIcon = solution.Icon;
              return (
                <Link
                  key={solution.title}
                  to={solution.href}
                  className="group grid gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/30 hover:shadow-premium-hover sm:grid-cols-[160px_1fr]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-3 flex items-center gap-2 text-[#3B82F6]">
                      <RelatedIcon size={18} />
                      <span className="text-xs font-bold uppercase tracking-[0.22em]">{solution.eyebrow}</span>
                    </div>
                    <h3 className="font-heading text-xl font-black text-[#0F172A] transition-colors group-hover:text-[#3B82F6]">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#475569]">{solution.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


    </main>

    <Contact initialMessage="I'm interested in Development Services." />
    <Footer />
  </div>
);

export default DevelopmentServicesPage;
