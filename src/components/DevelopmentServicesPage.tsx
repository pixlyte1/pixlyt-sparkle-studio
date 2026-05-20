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

const WebDevelopmentVisual = ({ image }: { image: string }) => (
  <div className="relative min-h-[360px] w-full h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-[#E2E8F0] bg-slate-100 p-6 flex items-center justify-center">
    <img src={image} alt="Web Development" className="absolute inset-0 h-full w-full object-cover opacity-85 saturate-[1.2] contrast-[1.05]" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-[#3B82F6]/25" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px]" />
    
    <div className="relative w-full max-w-[400px] h-[280px] flex items-center justify-center">
      {/* Code Editor Window */}
      <div className="absolute w-[280px] sm:w-[320px] h-[190px] bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-750 overflow-hidden flex flex-col z-0 opacity-40 sm:opacity-50">
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-950/90 border-b border-slate-800">
          <span className="w-2 h-2 rounded-full bg-[#EF4444]/80" />
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
          <span className="w-2 h-2 rounded-full bg-[#10B981]/80" />
        </div>
        <div className="p-4 font-mono text-[9px] text-slate-400 space-y-1.5 select-none leading-relaxed">
  <div className="relative min-h-[420px] w-full h-full overflow-hidden bg-[#F8FAFC] border-t lg:border-t-0 lg:border-l border-[#E2E8F0] flex items-center justify-center p-8">
    {/* Subtle grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

    {/* Central photo - prominent */}
    <div className="relative w-[220px] sm:w-[260px] h-[180px] sm:h-[210px] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)] z-0">
      <img src={image} alt="Web Development workspace" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>

    {/* Performance Score - top left */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 left-4 sm:left-8 z-10 w-[148px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-1">Performance Score</div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-black text-slate-900 tracking-tight">98%</span>
        <span className="flex items-center text-[10px] font-bold text-emerald-500"><TrendingUp size={10} className="mr-0.5" /> +2.4%</span>
      </div>
      <div className="mt-2 h-10 w-full">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,38 C10,35 20,30 30,22 S50,8 60,12 S80,5 100,3" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M0,38 C10,35 20,30 30,22 S50,8 60,12 S80,5 100,3 L100,40 L0,40 Z" fill="url(#perfGrad)" />
        </svg>
      </div>
    </motion.div>

    {/* Tech Stack - top right */}
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="absolute top-8 right-4 sm:right-8 z-10 w-[180px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-2.5">Tech Stack</div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { Icon: SiReact, name: "React", color: "#61DAFB" },
          { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
          { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
          { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
          { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
          { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
        ].map((tech, i) => (
          <div key={i} className="flex flex-col items-center gap-1 p-1.5 rounded-lg bg-slate-50 border border-slate-100">
            <tech.Icon style={{ color: tech.color }} className="text-base" />
            <span className="text-[7px] font-semibold text-slate-500 text-center leading-tight">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Project Status - bottom left */}
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      className="absolute bottom-8 left-4 sm:left-8 z-10 w-[155px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5"
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-semibold text-slate-500">Project Status</span>
      </div>
      <div className="text-[13px] font-bold text-slate-800 mb-2">Production Ready</div>
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div className="bg-[#3B82F6] h-full rounded-full w-full" />
      </div>
      <div className="mt-1 text-[9px] font-semibold text-slate-400 text-right">100%</div>
    </motion.div>

    {/* Uptime - bottom right */}
    <motion.div
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      className="absolute bottom-8 right-4 sm:right-8 z-10 w-[130px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-0.5">Uptime</div>
      <div className="text-xl font-black text-[#3B82F6] tracking-tight">99.99%</div>
      <div className="mt-2 h-8 w-full">
        <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
          <path d="M0,20 L12,20 L22,16 L35,20 L48,13 L60,18 L74,7 L88,7 L100,4" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </motion.div>
  </div>
);

const SoftwareDevelopmentVisual = ({ image }: { image: string }) => (
  <div className="relative min-h-[420px] w-full h-full overflow-hidden border-t lg:border-t-0 lg:border-r border-[#E2E8F0] flex items-center justify-center p-8">
    {/* Full dark image background */}
    <img src={image} alt="Software Development" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-blue-900/40" />

    {/* System Overview - top left */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 left-4 sm:left-8 z-10 w-[160px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-2">System Overview</div>
      <div className="flex items-center gap-2.5">
        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#F1F5F9" strokeWidth="4" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="78 22" strokeLinecap="round" />
          </svg>
          <span className="absolute text-[11px] font-black text-slate-800">89%</span>
        </div>
        <div className="space-y-1 text-[9px] font-semibold text-slate-500">
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-[#3B82F6]" /> Services</div>
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-emerald-500" /> Databases</div>
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-amber-400" /> APIs</div>
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-slate-300" /> Queues</div>
        </div>
      </div>
    </motion.div>

    {/* Architecture - center right */}
    <motion.div
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-10 w-[170px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-2.5">Architecture</div>
      <div className="flex flex-col items-center gap-1.5">
        <div className="border border-blue-200 bg-blue-50 px-3 py-1 text-[9px] font-bold text-blue-700 rounded-md w-full text-center">Web App</div>
        <div className="text-slate-300 text-[10px] leading-none">│</div>
        <div className="flex gap-1.5 w-full">
          <div className="border border-slate-200 bg-slate-50 px-1.5 py-1 text-[8px] font-semibold text-slate-600 rounded-md flex-1 text-center">API Gateway</div>
          <div className="border border-slate-200 bg-slate-50 px-1.5 py-1 text-[8px] font-semibold text-slate-600 rounded-md flex-1 text-center">Auth Service</div>
        </div>
        <div className="text-slate-300 text-[10px] leading-none">│</div>
        <div className="flex gap-2 w-full">
          <div className="border border-slate-200 bg-slate-50 px-1.5 py-1 text-[8px] font-semibold text-slate-600 rounded-md flex-1 text-center">User DB</div>
          <div className="border border-slate-200 bg-slate-50 px-1.5 py-1 text-[8px] font-semibold text-slate-600 rounded-md flex-1 text-center">Analytics DB</div>
        </div>
      </div>
    </motion.div>

    {/* Deployments - bottom left */}
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute bottom-8 left-4 sm:left-8 z-10 w-[160px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-3.5"
    >
      <div className="flex items-center gap-1.5 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-semibold text-slate-500">Deployments</span>
      </div>
      <div className="text-[12px] font-bold text-slate-800 mb-2">All Systems Operational</div>
      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#3B82F6]">
        View Details <ArrowRight size={10} />
      </span>
    </motion.div>

    {/* API Health - bottom right */}
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 5.9, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      className="absolute bottom-8 right-4 sm:right-8 z-10 w-[130px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-2">API Health</div>
      <div className="flex items-end justify-between h-9 px-0.5 gap-1">
        {[35, 55, 42, 70, 85, 75, 90, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i >= 5 ? "#3B82F6" : "#93C5FD" }} />
        ))}
      </div>
    </motion.div>
  </div>
);

const MobileDevelopmentVisual = ({ image }: { image: string }) => (
  <div className="relative min-h-[420px] w-full h-full overflow-hidden bg-[#EFF4FF] border-t lg:border-t-0 lg:border-l border-[#E2E8F0] flex items-center justify-center p-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />

    {/* Central phone-in-hand photo */}
    <div className="relative w-[160px] sm:w-[200px] h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.20)] z-0">
      <img src={image} alt="Mobile App Development" className="w-full h-full object-cover object-center" loading="lazy" />
      <div className="absolute inset-0 flex flex-col">
        <div className="mt-auto mx-3 mb-3 bg-white/95 backdrop-blur rounded-xl p-2.5 shadow-lg">
          <div className="text-[7px] text-slate-400 font-medium">Good Morning,</div>
          <div className="text-[9px] font-black text-slate-900">Alex 👋</div>
          <div className="mt-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-2">
            <div className="text-[6px] text-blue-200">Balance</div>
            <div className="text-[11px] font-black text-white">$4,560.00</div>
          </div>
          <div className="mt-1.5">
            <div className="text-[6px] text-slate-400 uppercase font-bold mb-1">Transactions</div>
            {[
              { label: "Shopping", val: "-$120.0s" },
              { label: "Travel", val: "-$560.0s" },
              { label: "Subscription", val: "-$21.60" },
            ].map((t, i) => (
              <div key={i} className="flex justify-between text-[6px] py-0.5 border-b border-slate-100 last:border-0">
                <span className="text-slate-600 font-semibold">{t.label}</span>
                <span className="text-slate-800 font-bold">{t.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Platforms - top right */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 right-4 sm:right-8 z-10 w-[148px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-2">Platforms</div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { Icon: SiApple, name: "iOS", color: "#000000" },
          { Icon: SiAndroid, name: "Android", color: "#3DDC84" },
          { Icon: SiFlutter, name: "Flutter", color: "#54C5F8" },
          { Icon: SiReact, name: "React Native", color: "#61DAFB" },
        ].map((plat, i) => (
          <div key={i} className="flex flex-col items-center gap-1 p-2 bg-slate-50 border border-slate-100 rounded-lg">
            <plat.Icon style={{ color: plat.color }} className="text-base" />
            <span className="text-[7px] font-semibold text-slate-500 text-center leading-tight">{plat.name}</span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* App Performance - bottom left */}
    <motion.div
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      className="absolute bottom-8 left-4 sm:left-8 z-10 w-[148px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-1">App Performance</div>
      <div className="text-[13px] font-bold text-emerald-500 flex items-center gap-1">
        Excellent <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <div className="mt-2 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div className="bg-emerald-500 h-full rounded-full w-full" />
      </div>
      <div className="mt-1 text-[9px] font-semibold text-slate-400 text-right">100%</div>
    </motion.div>

    {/* User Engagement - bottom right */}
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      className="absolute bottom-8 right-4 sm:right-8 z-10 w-[130px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5"
    >
      <div className="text-[10px] font-semibold text-slate-500 mb-0.5">User Engagement</div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-xl font-black text-slate-900">72%</span>
        <span className="flex items-center text-[10px] font-bold text-emerald-500">
          <TrendingUp size={10} className="mr-0.5" />
        </span>
      </div>
      <div className="mt-1.5 h-9 w-full">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="engGradMob" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,38 C15,35 25,28 35,22 S55,12 65,10 S82,6 100,3" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M0,38 C15,35 25,28 35,22 S55,12 65,10 S82,6 100,3 L100,40 L0,40 Z" fill="url(#engGradMob)" />
        </svg>
      </div>
      <div className="text-[8px] text-slate-400 font-medium">vs last month</div>
    </motion.div>
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
