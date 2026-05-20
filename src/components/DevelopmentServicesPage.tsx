import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Cloud,
  LineChart,
  PanelsTopLeft,
  ServerCog,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Database,
  Compass,
  CreditCard,
  ShoppingBag,
  Wifi,
} from "lucide-react";
import {
  SiDotnet,
  SiFlutter,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAndroid,
  SiApple,
} from "react-icons/si";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import mockupImg from "@/assets/development_services_mockup.png";
import webDevVisualMockup from "@/assets/web_development_visual_mockup.jpg";
import softwareDevVisualMockup from "@/assets/software_development_visual_mockup.jpg";
import mobileDevVisualMockup from "@/assets/mobile_development_visual_mockup.jpg";


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
    bullets: ["Custom Web Applications", "E-commerce Solutions", "CMS & Portals"],
    href: "/solutions/web-development",
    image: project1,
    Icon: PanelsTopLeft,
  },
  {
    title: "Software Development",
    label: "Product Systems",
    description:
      "Business-critical software systems built around secure APIs, operational workflows, analytics, and enterprise-grade architecture.",
    bullets: ["API & Backend Development", "Enterprise Applications", "Cloud & DevOps Engineering"],
    href: "/solutions/software-development",
    image: project2,
    Icon: ServerCog,
  },
  {
    title: "Mobile App Development",
    label: "Mobile Experiences",
    description:
      "Cross-platform mobile applications designed for connected services, reliable transactions, and release-ready product growth.",
    bullets: ["iOS & Android Apps", "Cross-Platform (Flutter / React Native)", "Secure & Scalable Architecture"],
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

const ecosystemItems = [
  { name: "React.js", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Flutter", Icon: SiFlutter },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: ".NET", Icon: SiDotnet },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Cloud Infrastructure", Icon: Cloud },
  { name: "AI Integrations", Icon: SiOpenai },
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

const WebDevelopmentVisual = ({ image: _image }: { image: string }) => (
  <div className="relative min-h-[420px] w-full h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center p-4">
    <img
      src={webDevVisualMockup}
      alt="Web Development Capability"
      className="max-w-full max-h-full object-contain"
      loading="lazy"
    />
  </div>
);

const SoftwareDevelopmentVisual = ({ image: _image }: { image: string }) => (
  <div className="relative min-h-[420px] w-full h-full overflow-hidden border-t lg:border-t-0 lg:border-r border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center p-4">
    <img
      src={softwareDevVisualMockup}
      alt="Software Development Capability"
      className="max-w-full max-h-full object-contain"
      loading="lazy"
    />
  </div>
);

const MobileDevelopmentVisual = ({ image: _image }: { image: string }) => (
  <div className="relative min-h-[420px] w-full h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center p-4">
    <img
      src={mobileDevVisualMockup}
      alt="Mobile App Development Capability"
      className="max-w-full max-h-full object-contain"
      loading="lazy"
    />
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
            eyebrow="Engineering Capabilities"
            title="Productized development teams for modern digital systems"
            subtitle="Focused service lines engineered around real product architecture, delivery quality, and enterprise-grade maintainability."
          />
          <div className="mt-14 space-y-12 sm:space-y-16">
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
                  <div className={`p-7 sm:p-10 lg:p-12 flex flex-col justify-between ${reverse ? "lg:order-2" : ""}`}>
                    <div>
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-[#E2E8F0] bg-[#3B82F6]/5 text-[#3B82F6] rounded-lg">
                        <ServiceIcon size={24} />
                      </div>
                      <span className="block text-xs font-bold uppercase tracking-[0.28em] text-[#3B82F6]">{service.label}</span>
                      <h3 className="mt-4 font-heading text-3xl font-black text-[#0F172A] sm:text-4xl tracking-tight leading-tight">{service.title}</h3>
                      <p className="mt-4 text-base leading-8 text-[#475569]">{service.description}</p>
                      
                      <ul className="mt-6 space-y-3">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-[#475569]">
                            <CheckCircle2 size={16} className="text-[#3B82F6] shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 border-t border-[#E2E8F0] pt-6">
                      <Link
                        to={service.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] transition-colors hover:text-[#3B82F6]"
                      >
                        Explore Capability
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
                    {index === 0 && <WebDevelopmentVisual image={service.image} />}
                    {index === 1 && <SoftwareDevelopmentVisual image={service.image} />}
                    {index === 2 && <MobileDevelopmentVisual image={service.image} />}
                  </div>
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
                  <div className="absolute inset-x-4 bottom-4 border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl rounded-xl">
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-white whitespace-nowrap">{platform.title}</h3>
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

      <section className="relative overflow-hidden border-y border-[#E2E8F0] bg-gradient-to-b from-[#F8FAFC] to-white py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeader
            eyebrow="Engineering Ecosystem"
            title="Engineering Ecosystem"
            subtitle="Modern technologies supporting scalable digital products and enterprise systems."
            align="center"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <div className="flex flex-wrap justify-center items-center gap-3">
              {ecosystemItems.map(({ name, Icon: EcoIcon }) => (
                <div
                  key={name}
                  className="group flex items-center gap-2.5 rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 shadow-sm transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-md hover:-translate-y-0.5 cursor-default"
                >
                  <EcoIcon size={16} className="text-[#64748B] transition-colors duration-300 group-hover:text-[#3B82F6]" />
                  <span className="whitespace-nowrap font-heading text-sm font-bold text-[#334155] tracking-tight transition-colors duration-300 group-hover:text-[#0F172A]">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/technologies"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#3B82F6] transition-colors hover:text-[#2563EB]"
              >
                Explore Full Technology Architecture
                <ArrowRight size={16} className="transition-transform hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>



    </main>

    <Contact initialMessage="I'm interested in Development Services." />
    <Footer />
  </div>
);

export default DevelopmentServicesPage;
