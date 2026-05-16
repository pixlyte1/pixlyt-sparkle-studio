import {
  Bot,
  BrainCircuit,
  Brush,
  CloudCog,
  Code2,
  Database,
  Gauge,
  Handshake,
  LucideIcon,
  Megaphone,
  MonitorCog,
  PanelsTopLeft,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import cardCreatorAi from "@/assets/card-creator-ai.jpg";
import cardHrAi from "@/assets/card-hr-ai.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import newsStudio from "@/assets/news-studio.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import strategyImage from "@/assets/strategy-to-success.png";

export type Solution = {
  slug: string;
  title: string;
  shortTitle?: string;
  eyebrow: string;
  summary: string;
  seoTitle?: string;
  seoDescription?: string;
  heroImage: string;
  accentImage: string;
  icon: LucideIcon;
  featured?: boolean;
  metrics: Array<{ value: string; label: string }>;
  capabilities: string[];
  outcomes: string[];
  process: Array<{ title: string; description: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  caseStudies?: Array<{
    title: string;
    category: string;
    summary: string;
    image: string;
  }>;
};

export const solutions: Solution[] = [
  {
    slug: "ai",
    title: "AI Solutions",
    shortTitle: "AI",
    eyebrow: "Intelligent Automation",
    summary:
      "Practical AI systems that automate repetitive work, improve decision-making, and help teams launch smarter digital experiences faster.",
    seoTitle: "AI Solutions | PIXLYT Digital Solutions",
    seoDescription:
      "Build practical AI assistants, automation workflows, content tools, and decision systems with PIXLYT.",
    heroImage: cardCreatorAi,
    accentImage: cardHrAi,
    icon: Bot,
    featured: true,
    metrics: [
      { value: "40%", label: "workflow time saved" },
      { value: "24/7", label: "assistant availability" },
      { value: "3x", label: "faster content cycles" },
    ],
    capabilities: [
      "AI chatbots and customer support assistants",
      "Content generation workflows for social, video, and campaign teams",
      "Predictive dashboards for leads, sales, and operations",
      "Document processing, classification, and internal knowledge search",
    ],
    outcomes: [
      "Reduce manual effort across marketing, support, and operations",
      "Give teams clear AI workflows instead of scattered tools",
      "Create scalable automation that stays aligned with brand and data rules",
    ],
    process: [
      {
        title: "AI opportunity mapping",
        description: "We identify high-value workflows where automation can create measurable impact.",
      },
      {
        title: "Prototype and train",
        description: "We build a focused AI pilot with brand tone, data context, and review controls.",
      },
      {
        title: "Launch and optimize",
        description: "We deploy the system, monitor quality, and tune it around real user behavior.",
      },
    ],
    faqs: [
      {
        question: "What kind of AI solutions can PIXLYT build?",
        answer: "We build practical AI assistants, automation workflows, content tools, internal knowledge search, document processing, and predictive dashboards around real business use cases.",
      },
      {
        question: "Do we need clean data before starting AI?",
        answer: "Not always. We can begin with a focused pilot, then improve data quality, permissions, and workflows as the solution moves toward production.",
      },
      {
        question: "Can the AI follow our brand and review process?",
        answer: "Yes. We design AI workflows with brand tone, approval steps, guardrails, and human review where accuracy or compliance matters.",
      },
    ],
    caseStudies: [
      {
        title: "Creator AI Workflow",
        category: "AI Automation",
        summary: "A guided content workflow for faster ideation, scripting, review, and campaign publishing.",
        image: cardCreatorAi,
      },
      {
        title: "HR Knowledge Assistant",
        category: "Internal AI",
        summary: "A searchable assistant concept that helps teams find policies, documents, and support answers faster.",
        image: cardHrAi,
      },
    ],
  },
  {
    slug: "cms-dxp",
    title: "CMS & DXP",
    eyebrow: "Digital Experience Platforms",
    summary:
      "Modern content platforms that let marketing teams publish faster while giving customers consistent experiences across web, mobile, and campaigns.",
    seoTitle: "CMS & DXP Solutions | PIXLYT Digital Solutions",
    seoDescription:
      "Plan and build CMS and DXP platforms with content models, reusable blocks, editorial workflows, SEO, analytics, and personalization.",
    heroImage: newsStudio,
    accentImage: heroSlide2,
    icon: PanelsTopLeft,
    featured: true,
    metrics: [
      { value: "60%", label: "faster page updates" },
      { value: "1", label: "content source of truth" },
      { value: "A/B", label: "ready experience testing" },
    ],
    capabilities: [
      "Headless CMS architecture and content modeling",
      "Landing page systems, reusable blocks, and editorial workflows",
      "Personalized web experiences and campaign microsites",
      "SEO, analytics, performance, and governance setup",
    ],
    outcomes: [
      "Enable non-technical teams to manage content with confidence",
      "Create consistent brand experiences across digital touchpoints",
      "Improve speed, discoverability, and conversion across key journeys",
    ],
    process: [
      {
        title: "Content audit",
        description: "We map current pages, roles, publishing gaps, and governance needs.",
      },
      {
        title: "Platform build",
        description: "We create content models, components, templates, and integrations.",
      },
      {
        title: "Editorial rollout",
        description: "We train teams and launch workflows that keep the site easy to maintain.",
      },
    ],
    faqs: [
      {
        question: "Can marketing teams update content without developers?",
        answer: "Yes. We structure CMS and DXP builds with reusable content blocks, clear roles, and editorial workflows so teams can publish with confidence.",
      },
      {
        question: "Do you support headless CMS platforms?",
        answer: "Yes. We can plan content models, APIs, frontend integration, preview flows, SEO setup, and governance for headless CMS platforms.",
      },
      {
        question: "Can CMS and DXP work with campaigns and personalization?",
        answer: "Yes. We can connect landing pages, analytics, A/B testing, campaign content, and audience-specific experiences into the platform plan.",
      },
    ],
    caseStudies: [
      {
        title: "Editorial Experience Hub",
        category: "CMS Platform",
        summary: "A modular content hub approach for faster updates, campaigns, and consistent digital publishing.",
        image: newsStudio,
      },
      {
        title: "Campaign Page System",
        category: "DXP",
        summary: "Reusable landing page patterns built for SEO, analytics, conversion, and campaign speed.",
        image: heroSlide2,
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    eyebrow: "Modern Web Experiences",
    summary:
      "Fast, responsive websites and web applications built with strong UX, clean engineering, SEO foundations, and reliable performance.",
    seoTitle: "Web Development Services | PIXLYT Digital Solutions",
    seoDescription:
      "Create fast, responsive websites, portals, landing pages, and web applications with PIXLYT.",
    heroImage: project1,
    accentImage: heroSlide1,
    icon: Code2,
    featured: true,
    metrics: [
      { value: "95+", label: "performance target" },
      { value: "SEO", label: "ready structure" },
      { value: "Mobile", label: "first delivery" },
    ],
    capabilities: [
      "Corporate websites, landing pages, portals, and web apps",
      "Frontend development with responsive, accessible interfaces",
      "Backend integrations, APIs, forms, analytics, and automation",
      "Performance optimization, SEO setup, QA, and launch support",
    ],
    outcomes: [
      "Create polished web experiences that feel trustworthy on every device",
      "Improve site speed, search visibility, and lead conversion",
      "Give teams a scalable technical foundation for future growth",
    ],
    process: [
      { title: "Plan", description: "We define pages, user journeys, content needs, stack choices, and launch priorities." },
      { title: "Build", description: "We develop responsive interfaces, integrations, CMS hooks, and business workflows." },
      { title: "Launch", description: "We test, optimize, deploy, and support the site after release." },
    ],
    faqs: [
      {
        question: "What types of websites do you develop?",
        answer: "We build corporate websites, landing pages, campaign pages, portals, dashboards, and web applications with responsive design and strong performance foundations.",
      },
      {
        question: "Can you connect forms, APIs, analytics, and CMS?",
        answer: "Yes. We handle frontend, backend integrations, analytics events, forms, CMS connections, and launch-ready QA.",
      },
      {
        question: "Will the site be mobile-friendly and SEO-ready?",
        answer: "Yes. We plan responsive layouts, semantic structure, performance optimization, SEO basics, and browser/device testing before launch.",
      },
    ],
    caseStudies: [
      {
        title: "Conversion Website Build",
        category: "Web Development",
        summary: "A responsive business website structure focused on speed, trust, lead capture, and clear content paths.",
        image: project1,
      },
      {
        title: "Product Story Landing Page",
        category: "Frontend Experience",
        summary: "A high-impact landing page pattern for explaining offers, capturing interest, and supporting campaigns.",
        image: heroSlide1,
      },
    ],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    eyebrow: "Reliable Data Foundations",
    summary:
      "Clean data pipelines, trusted warehouses, integrations, and reporting foundations that make business intelligence dependable.",
    seoTitle: "Data Engineering Services | PIXLYT Digital Solutions",
    seoDescription:
      "Build reliable data pipelines, integrations, data models, quality checks, and reporting foundations with PIXLYT.",
    heroImage: project2,
    accentImage: project4,
    icon: Database,
    featured: true,
    metrics: [
      { value: "1", label: "trusted data layer" },
      { value: "Live", label: "pipeline monitoring" },
      { value: "QA", label: "quality controls" },
    ],
    capabilities: [
      "Data ingestion, ETL/ELT pipelines, and warehouse modeling",
      "API, CRM, CMS, analytics, and cloud data integrations",
      "Data quality checks, monitoring, governance, and documentation",
      "Business-ready datasets for dashboards, AI, and operations",
    ],
    outcomes: [
      "Reduce manual reporting and fragile spreadsheet workflows",
      "Give teams clean, reusable data they can trust",
      "Prepare business systems for analytics, automation, and AI use cases",
    ],
    process: [
      { title: "Audit", description: "We map data sources, business rules, reporting gaps, and quality risks." },
      { title: "Engineer", description: "We build pipelines, models, transformations, and validation checks." },
      { title: "Operationalize", description: "We document, monitor, and improve the data foundation as teams use it." },
    ],
    faqs: [
      {
        question: "What data sources can you connect?",
        answer: "We can connect CRMs, websites, analytics platforms, CMS tools, spreadsheets, cloud databases, APIs, and other business systems.",
      },
      {
        question: "Can you help clean and organize existing data?",
        answer: "Yes. We audit data quality, define business rules, create reliable models, and add validation checks so reporting becomes more trustworthy.",
      },
      {
        question: "Is this useful for dashboards and AI later?",
        answer: "Yes. A strong data engineering foundation supports dashboards, reporting automation, personalization, forecasting, and AI workflows.",
      },
    ],
    caseStudies: [
      {
        title: "Business Data Foundation",
        category: "Data Engineering",
        summary: "A clean reporting layer that connects scattered sources into trusted datasets for business teams.",
        image: project2,
      },
      {
        title: "Revenue Operations View",
        category: "Data Integration",
        summary: "A connected data model for pipeline visibility, performance reporting, and operational decisions.",
        image: project4,
      },
    ],
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    eyebrow: "Reliable Digital Operations",
    summary:
      "Ongoing support for websites, campaigns, platforms, analytics, and cloud operations so your digital systems keep improving after launch.",
    seoTitle: "Managed Services | PIXLYT Digital Solutions",
    seoDescription:
      "Keep websites, campaigns, platforms, analytics, and cloud operations reliable with PIXLYT managed services.",
    heroImage: strategyImage,
    accentImage: heroSlide3,
    icon: MonitorCog,
    featured: true,
    metrics: [
      { value: "99.9%", label: "uptime focus" },
      { value: "SLA", label: "based response" },
      { value: "30d", label: "optimization cycles" },
    ],
    capabilities: [
      "Website maintenance, performance monitoring, and release support",
      "Security updates, backups, analytics QA, and platform health checks",
      "Campaign landing page support and content operations",
      "Monthly reporting, roadmap planning, and conversion improvements",
    ],
    outcomes: [
      "Keep critical digital assets fast, secure, and dependable",
      "Reduce internal pressure with a reliable expert delivery team",
      "Turn maintenance into continuous improvement instead of reactive fixes",
    ],
    process: [
      {
        title: "Stabilize",
        description: "We review your current stack, risks, access, workflows, and monitoring.",
      },
      {
        title: "Operate",
        description: "We run planned support, updates, content changes, and incident response.",
      },
      {
        title: "Improve",
        description: "We report trends and ship small improvements that compound every month.",
      },
    ],
    faqs: [
      {
        question: "What does managed services include?",
        answer: "It can include website updates, monitoring, backups, security patches, analytics checks, campaign support, performance improvements, and monthly reporting.",
      },
      {
        question: "Can you support an existing website or platform?",
        answer: "Yes. We can review the current setup, document risks, stabilize priority areas, and create a support rhythm around your business needs.",
      },
      {
        question: "Do you only fix issues or also improve the platform?",
        answer: "Both. We handle maintenance and incident support, while also recommending small improvements that improve speed, conversion, reliability, and usability.",
      },
    ],
    caseStudies: [
      {
        title: "Digital Operations Care",
        category: "Managed Services",
        summary: "A monthly support rhythm for updates, monitoring, reporting, security checks, and ongoing improvements.",
        image: strategyImage,
      },
      {
        title: "Performance Support Cycle",
        category: "Optimization",
        summary: "A continuous improvement model for keeping digital assets fast, stable, and campaign-ready.",
        image: heroSlide3,
      },
    ],
  },
  {
    slug: "databricks",
    title: "Databricks",
    eyebrow: "Lakehouse Data Platform",
    summary:
      "Databricks solutions for unified data engineering, analytics, machine learning, and lakehouse workflows that help teams turn raw data into trusted business intelligence.",
    seoTitle: "Databricks Solutions | PIXLYT Digital Solutions",
    seoDescription:
      "Plan and build Databricks lakehouse workflows, ETL pipelines, data quality checks, analytics models, and AI-ready data foundations with PIXLYT.",
    heroImage: heroSlide3,
    accentImage: project2,
    icon: Database,
    featured: true,
    metrics: [
      { value: "Lakehouse", label: "data architecture" },
      { value: "ETL", label: "pipeline automation" },
      { value: "AI", label: "ready datasets" },
    ],
    capabilities: [
      "Databricks workspace planning and lakehouse architecture",
      "ETL/ELT pipelines, notebooks, jobs, and workflow orchestration",
      "Data quality checks, transformations, governance, and documentation",
      "Analytics-ready and AI-ready datasets for dashboards and models",
    ],
    outcomes: [
      "Unify scattered data into a scalable lakehouse foundation",
      "Speed up reporting, analytics, and machine learning workflows",
      "Improve trust in data through cleaner pipelines and quality checks",
    ],
    process: [
      {
        title: "Assess data sources",
        description: "We map data sources, business rules, reporting needs, platform access, and lakehouse priorities.",
      },
      {
        title: "Build pipelines",
        description: "We create ingestion flows, transformations, notebooks, jobs, validation checks, and reusable data models.",
      },
      {
        title: "Operationalize",
        description: "We document, monitor, optimize, and prepare Databricks workflows for analytics and AI use cases.",
      },
    ],
    faqs: [
      {
        question: "Can PIXLYT help set up Databricks from scratch?",
        answer: "Yes. We can help plan the workspace, lakehouse structure, ingestion flows, transformations, data models, jobs, and monitoring approach.",
      },
      {
        question: "Is Databricks useful for AI and machine learning?",
        answer: "Yes. Databricks is useful for preparing clean, governed datasets that can support analytics, automation, and machine learning workflows.",
      },
      {
        question: "Can Databricks connect with existing databases and APIs?",
        answer: "Yes. We can design ingestion and integration patterns for databases, files, APIs, cloud storage, analytics tools, and business systems.",
      },
    ],
    caseStudies: [
      {
        title: "Lakehouse Reporting Foundation",
        category: "Databricks",
        summary: "A scalable data foundation for ingestion, transformation, quality checks, and dashboard-ready models.",
        image: heroSlide3,
      },
      {
        title: "AI-Ready Data Pipelines",
        category: "Data Engineering",
        summary: "Clean data workflows designed to support analytics, forecasting, and future AI use cases.",
        image: project2,
      },
    ],
  },
  {
    slug: "snowflake",
    title: "Snowflake",
    eyebrow: "Cloud Data Warehouse",
    summary:
      "Snowflake solutions for cloud data warehousing, secure data sharing, analytics models, and reliable reporting foundations across business systems.",
    seoTitle: "Snowflake Solutions | PIXLYT Digital Solutions",
    seoDescription:
      "Build Snowflake cloud data warehouse solutions with ingestion, modeling, governance, analytics, reporting, and performance optimization.",
    heroImage: project2,
    accentImage: heroSlide3,
    icon: CloudCog,
    featured: true,
    metrics: [
      { value: "Cloud", label: "warehouse setup" },
      { value: "BI", label: "ready models" },
      { value: "Secure", label: "data sharing" },
    ],
    capabilities: [
      "Snowflake warehouse design, schemas, roles, and access planning",
      "Data ingestion, transformations, modeling, and reporting layers",
      "Performance tuning, cost-aware warehouse usage, and query optimization",
      "Governance, secure sharing, documentation, and analytics enablement",
    ],
    outcomes: [
      "Create one reliable source for reporting and analytics",
      "Improve data access while keeping governance and security clear",
      "Support dashboards, operations, AI workflows, and executive reporting",
    ],
    process: [
      {
        title: "Warehouse planning",
        description: "We define data domains, schemas, access roles, warehouse sizing, reporting priorities, and governance needs.",
      },
      {
        title: "Model and integrate",
        description: "We build ingestion flows, transformation logic, data models, quality checks, and BI-ready datasets.",
      },
      {
        title: "Optimize and support",
        description: "We tune queries, document workflows, monitor usage, and improve Snowflake performance and cost efficiency.",
      },
    ],
    faqs: [
      {
        question: "Can Snowflake be used as our main data warehouse?",
        answer: "Yes. Snowflake is built for scalable cloud data warehousing, analytics, secure sharing, and business reporting.",
      },
      {
        question: "Can PIXLYT migrate existing reporting data into Snowflake?",
        answer: "Yes. We can help map current data sources, design schemas, migrate datasets, validate quality, and prepare analytics-ready models.",
      },
      {
        question: "Do you help with Snowflake performance and cost optimization?",
        answer: "Yes. We can review warehouse usage, query patterns, data models, and scheduling to improve performance and control cloud spend.",
      },
    ],
    caseStudies: [
      {
        title: "Cloud Warehouse Modernization",
        category: "Snowflake",
        summary: "A structured warehouse foundation for cleaner reporting, secure access, and scalable business analytics.",
        image: project2,
      },
      {
        title: "Executive BI Data Model",
        category: "Analytics Engineering",
        summary: "A reporting layer designed for consistent KPIs, dashboard performance, and business trust.",
        image: heroSlide3,
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "Growth Campaigns",
    summary:
      "Performance marketing, SEO, paid media, and campaign systems built to attract the right audience and convert demand into revenue.",
    heroImage: project3,
    accentImage: newsStudio,
    icon: Megaphone,
    metrics: [
      { value: "ROAS", label: "focused campaigns" },
      { value: "SEO", label: "organic growth" },
      { value: "Full", label: "funnel visibility" },
    ],
    capabilities: [
      "Paid search, paid social, retargeting, and funnel campaigns",
      "SEO content planning and technical optimization",
      "Creative testing, landing pages, and conversion tracking",
      "Monthly campaign reporting and budget optimization",
    ],
    outcomes: [
      "Increase qualified traffic and lead quality",
      "Connect campaign spend to measurable business outcomes",
      "Improve messaging through continuous testing",
    ],
    process: [
      { title: "Position", description: "We define audience, offer, messaging, and channel strategy." },
      { title: "Launch", description: "We build campaigns, landing pages, tracking, and creative variants." },
      { title: "Scale", description: "We optimize budgets and creative based on performance signals." },
    ],
  },
  {
    slug: "salesforce-sales-revenue-cloud",
    title: "Salesforce Sales & Revenue Cloud",
    shortTitle: "Salesforce Sales & Revenue Cloud",
    eyebrow: "Revenue Operations",
    summary:
      "CRM and revenue cloud workflows that bring sales, billing, pipeline visibility, and customer lifecycle management into one operating rhythm.",
    heroImage: project4,
    accentImage: strategyImage,
    icon: CloudCog,
    metrics: [
      { value: "CRM", label: "workflow automation" },
      { value: "CPQ", label: "quote clarity" },
      { value: "RevOps", label: "aligned teams" },
    ],
    capabilities: [
      "Sales Cloud setup, pipeline workflows, and automation",
      "Lead routing, account management, and reporting",
      "Revenue Cloud process design and CPQ support",
      "Integrations with marketing, support, and finance systems",
    ],
    outcomes: [
      "Improve sales visibility and forecasting confidence",
      "Reduce manual handoffs between sales and operations",
      "Create cleaner customer and revenue data",
    ],
    process: [
      { title: "Map", description: "We document current sales motions, handoffs, objects, and reporting gaps." },
      { title: "Configure", description: "We build automations, dashboards, roles, and clean workflows." },
      { title: "Adopt", description: "We support rollout, training, and continuous CRM improvement." },
    ],
  },
  {
    slug: "customer-cultural-intelligence",
    title: "Customer & Cultural Intelligence Research",
    eyebrow: "Human Insight",
    summary:
      "Research that helps brands understand customer behavior, cultural shifts, category expectations, and the emotional drivers behind decisions.",
    heroImage: newsStudio,
    accentImage: heroSlide1,
    icon: UsersRound,
    metrics: [
      { value: "360", label: "audience context" },
      { value: "Trend", label: "signal mapping" },
      { value: "Insight", label: "led strategy" },
    ],
    capabilities: [
      "Audience research and persona development",
      "Social listening, category analysis, and trend reports",
      "Customer interviews and qualitative insight synthesis",
      "Brand messaging and experience recommendations",
    ],
    outcomes: [
      "Build campaigns from real customer behavior",
      "Spot cultural opportunities before they become crowded",
      "Make brand decisions with more empathy and evidence",
    ],
    process: [
      { title: "Listen", description: "We gather market, audience, platform, and cultural signals." },
      { title: "Synthesize", description: "We convert research into patterns, tensions, and opportunities." },
      { title: "Apply", description: "We shape creative, product, and communication recommendations." },
    ],
  },
  {
    slug: "design-ux",
    title: "Design & UX",
    eyebrow: "Experience Design",
    summary:
      "Interfaces, visual systems, and user journeys designed to feel polished, trustworthy, and effortless across devices.",
    heroImage: heroSlide1,
    accentImage: project3,
    icon: Brush,
    metrics: [
      { value: "UX", label: "research backed" },
      { value: "UI", label: "component systems" },
      { value: "Mobile", label: "first quality" },
    ],
    capabilities: [
      "UX audits, journey mapping, and information architecture",
      "Website, app, dashboard, and portal interface design",
      "Design systems, component libraries, and prototyping",
      "Usability testing and conversion-focused refinements",
    ],
    outcomes: [
      "Make complex products easier to understand and use",
      "Create a consistent visual experience across touchpoints",
      "Improve conversion, retention, and user confidence",
    ],
    process: [
      { title: "Discover", description: "We study users, content, goals, constraints, and current friction." },
      { title: "Design", description: "We create flows, screens, prototypes, and scalable components." },
      { title: "Refine", description: "We test, polish, and prepare assets for development." },
    ],
  },
  {
    slug: "strategy",
    title: "Strategy",
    eyebrow: "Digital Direction",
    summary:
      "Clear digital, brand, product, and growth strategies that help teams choose the right priorities and execute with confidence.",
    heroImage: strategyImage,
    accentImage: project4,
    icon: TrendingUp,
    metrics: [
      { value: "Roadmap", label: "clear priorities" },
      { value: "Brand", label: "positioning clarity" },
      { value: "Growth", label: "measurable bets" },
    ],
    capabilities: [
      "Digital transformation and product roadmaps",
      "Brand positioning, messaging, and go-to-market planning",
      "Growth strategy, channel planning, and KPI design",
      "Stakeholder workshops and execution playbooks",
    ],
    outcomes: [
      "Align leadership and teams around the same growth plan",
      "Prioritize initiatives by impact, effort, and timing",
      "Move from scattered ideas to an executable roadmap",
    ],
    process: [
      { title: "Clarify", description: "We define business goals, audience needs, and market context." },
      { title: "Prioritize", description: "We convert opportunities into a practical roadmap." },
      { title: "Activate", description: "We turn strategy into briefs, workflows, and measurable execution." },
    ],
  },
];

export const primarySolutionSlugs = [
  "ai",
  "cms-dxp",
  "data-engineering",
  "databricks",
  "snowflake",
  "managed-services",
  "web-development",
];

export type SolutionRowItem = { slug: string; isSubItem?: boolean };

export const solutionRows: SolutionRowItem[][] = [
  [
    { slug: "ai" },
    { slug: "cms-dxp" },
    { slug: "data-engineering" },
  ],
  [
    { slug: "managed-services" },
    { slug: "web-development" },
  ],
];

export const solutionHighlights = [
  { icon: BrainCircuit, label: "AI-ready operations" },
  { icon: Database, label: "Reliable data foundation" },
  { icon: Code2, label: "Modern platform builds" },
  { icon: SearchCheck, label: "Research-led decisions" },
  { icon: Gauge, label: "Performance focused" },
  { icon: ShieldCheck, label: "Secure managed support" },
  { icon: Handshake, label: "Business-first delivery" },
  { icon: Sparkles, label: "Premium brand experience" },
];

export const getSolutionBySlug = (slug: string | undefined) =>
  solutions.find((solution) => solution.slug === slug);

export const featuredSolutions = primarySolutionSlugs
  .map((slug) => getSolutionBySlug(slug))
  .filter((solution): solution is Solution => Boolean(solution));
