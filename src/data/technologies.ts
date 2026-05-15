import {
  Bot,
  Braces,
  Cloud,
  Code2,
  Database,
  FileJson,
  Layers3,
  MonitorSmartphone,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Technology {
  slug: string;
  name: string;
  category: string;
  icon: LucideIcon;
  summary: string;
  about: string[];
  capabilities: string[];
  procedure: {
    title: string;
    text: string;
  }[];
  highlights: string[];
}

const commonProcedure = {
  requirements: {
    title: "Requirement analysis",
    text: "We understand the business goal, users, workflows, integrations, data needs, timeline, and success measures.",
  },
  architecture: {
    title: "Architecture planning",
    text: "We plan the structure, modules, tools, dependencies, security needs, deployment flow, and maintenance approach.",
  },
  setup: {
    title: "Project setup",
    text: "We configure the development environment, code structure, standards, environment variables, and project tooling.",
  },
  build: {
    title: "Implementation",
    text: "We build the core features in clean, maintainable modules with reusable patterns and clear integration points.",
  },
  integration: {
    title: "Integration",
    text: "We connect APIs, databases, third-party services, authentication, monitoring, and business-specific workflows.",
  },
  launch: {
    title: "Testing and launch",
    text: "We test behavior, performance, responsiveness, edge cases, production build, deployment, and support readiness.",
  },
};

export const technologies: Technology[] = [
  {
    slug: "react-js",
    name: "React.js",
    category: "Frontend technology",
    icon: Code2,
    summary:
      "React.js is used to build fast, modular, and interactive web interfaces with reusable components and clean API integration.",
    about: [
      "React.js gives projects a strong frontend foundation. Pages can be split into manageable components, state can be handled clearly, and the UI can grow without becoming difficult to maintain.",
      "It works well for business websites, SaaS tools, dashboards, booking systems, content platforms, ecommerce flows, and custom web applications that need speed and flexibility.",
    ],
    capabilities: [
      "Single page applications",
      "Reusable component systems",
      "Admin panels and dashboards",
      "API-connected web interfaces",
      "Responsive product pages",
      "Performance-focused frontend builds",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "UI architecture",
        text: "We plan the component structure, routing, layouts, shared styles, forms, validation, and reusable UI patterns.",
      },
      commonProcedure.setup,
      {
        title: "Component development",
        text: "We build clean components for navigation, sections, forms, tables, cards, modals, and user flows.",
      },
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["Component based", "Fast user experience", "API ready", "Scalable frontend"],
  },
  {
    slug: "react-native",
    name: "React Native",
    category: "Mobile technology",
    icon: MonitorSmartphone,
    summary:
      "React Native helps build mobile applications for Android and iOS from a shared codebase with native-feeling experiences.",
    about: [
      "React Native is useful when a business needs a mobile app that can reach both Android and iOS users without maintaining two completely separate frontend codebases.",
      "It supports smooth screens, API-connected flows, authentication, push notifications, device integrations, and scalable mobile product development.",
    ],
    capabilities: [
      "Android and iOS apps",
      "Authentication flows",
      "API-connected mobile screens",
      "Push notification setup",
      "Reusable mobile components",
      "App release support",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "Mobile flow planning",
        text: "We map app screens, navigation, device permissions, offline needs, forms, user journeys, and release requirements.",
      },
      commonProcedure.setup,
      {
        title: "Screen development",
        text: "We build reusable mobile screens, components, state handling, validation, and responsive layouts for different devices.",
      },
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["Cross-platform", "Native experience", "Mobile APIs", "Release ready"],
  },
  {
    slug: "express-js",
    name: "Express.js",
    category: "Backend framework",
    icon: Server,
    summary:
      "Express.js is a flexible Node.js framework for building secure backend APIs, web services, and application logic.",
    about: [
      "Express.js keeps backend development lightweight and flexible. It is useful for REST APIs, authentication, middleware, file handling, integrations, and server-side business workflows.",
      "It works especially well when paired with frontend apps, mobile apps, dashboards, payment gateways, CRMs, and database-driven products.",
    ],
    capabilities: [
      "REST API development",
      "Authentication and middleware",
      "Backend business logic",
      "Third-party integrations",
      "File upload workflows",
      "API security structure",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "API architecture",
        text: "We plan routes, controllers, middleware, validation, authentication, database access, and error handling.",
      },
      commonProcedure.setup,
      {
        title: "API implementation",
        text: "We build endpoints, services, validation layers, request handling, response formats, and reusable backend modules.",
      },
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["API focused", "Middleware support", "Fast backend", "Integration ready"],
  },
  {
    slug: "node-js",
    name: "Node.js",
    category: "Runtime technology",
    icon: Workflow,
    summary:
      "Node.js powers scalable server-side JavaScript for APIs, real-time features, automation, and backend systems.",
    about: [
      "Node.js is strong for building fast backend services, real-time applications, API gateways, automation tasks, and data-driven business systems.",
      "It lets teams use JavaScript across frontend and backend while supporting modern packages, async operations, and scalable architecture.",
    ],
    capabilities: [
      "Backend application servers",
      "Real-time communication",
      "API gateway development",
      "Background jobs",
      "Automation workflows",
      "Server-side integrations",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "Server architecture",
        text: "We define modules, runtime needs, packages, async workflows, database connections, and service boundaries.",
      },
      commonProcedure.setup,
      commonProcedure.build,
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["Scalable runtime", "Async ready", "API friendly", "Automation ready"],
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    category: "Database technology",
    icon: Database,
    summary:
      "MongoDB is a flexible document database for products that need adaptable schemas, fast iteration, and content-rich data.",
    about: [
      "MongoDB stores data as documents, which makes it useful for applications where data shapes can evolve over time without heavy schema changes.",
      "It is a good fit for content platforms, dashboards, product catalogs, analytics records, user profiles, and modern API-driven applications.",
    ],
    capabilities: [
      "Document database design",
      "Collection modeling",
      "Query optimization",
      "Index planning",
      "API data storage",
      "Backup and migration support",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "Data modeling",
        text: "We design collections, document structures, indexes, relationships, validation rules, and growth strategy.",
      },
      commonProcedure.setup,
      {
        title: "Database implementation",
        text: "We create collections, indexes, access patterns, seed data, migration plans, and API data operations.",
      },
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["Flexible schema", "Document based", "Fast iteration", "API friendly"],
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    category: "Database technology",
    icon: Database,
    summary:
      "PostgreSQL is a reliable relational database for structured business data, reporting, transactions, and complex queries.",
    about: [
      "PostgreSQL is strong when a project needs data accuracy, relationships, transactions, constraints, reporting, and long-term reliability.",
      "It works well for SaaS products, admin systems, finance workflows, booking systems, CRM tools, dashboards, and enterprise applications.",
    ],
    capabilities: [
      "Relational database design",
      "Schema and table planning",
      "Query optimization",
      "Data migration",
      "Reporting data models",
      "Secure access patterns",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "Schema planning",
        text: "We design tables, relationships, indexes, constraints, transactions, access patterns, and reporting needs.",
      },
      commonProcedure.setup,
      {
        title: "Database implementation",
        text: "We create schema, migrations, queries, seed data, access layers, backup planning, and optimization steps.",
      },
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["Relational data", "Transaction safe", "Reporting ready", "Reliable storage"],
  },
  {
    slug: "asp-net",
    name: "ASP.NET",
    category: "Enterprise framework",
    icon: Layers3,
    summary:
      "ASP.NET supports enterprise-grade web applications, APIs, portals, and cloud-ready systems on the Microsoft stack.",
    about: [
      "ASP.NET is a strong choice for secure, structured, enterprise applications that need performance, authentication, role-based access, and long-term maintainability.",
      "It is commonly used for business portals, APIs, admin tools, internal systems, cloud applications, and Microsoft ecosystem integrations.",
    ],
    capabilities: [
      "Enterprise web applications",
      "Secure API development",
      "Role-based access control",
      "Admin portals",
      "Microsoft stack integrations",
      "Cloud-ready deployment",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "Application architecture",
        text: "We plan controllers, services, models, authentication, authorization, database access, and deployment strategy.",
      },
      commonProcedure.setup,
      commonProcedure.build,
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["Enterprise ready", "Secure apps", "Microsoft stack", "Cloud capable"],
  },
  {
    slug: "c-sharp",
    name: "C Sharp",
    category: "Programming language",
    icon: Braces,
    summary:
      "C Sharp is used to build robust business applications, backend services, APIs, desktop tools, and enterprise systems.",
    about: [
      "C Sharp is a mature, type-safe language that supports clean application structure, strong tooling, maintainable code, and enterprise development.",
      "It works well with ASP.NET, cloud services, desktop applications, automation tools, integrations, and business-critical software.",
    ],
    capabilities: [
      "Backend services",
      "Business application logic",
      "API development",
      "Desktop tools",
      "Automation utilities",
      "Enterprise integrations",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "Code structure planning",
        text: "We define project layers, models, services, dependency flow, validation, error handling, and testing strategy.",
      },
      commonProcedure.setup,
      commonProcedure.build,
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["Type safe", "Enterprise grade", "Maintainable code", "Strong tooling"],
  },
  {
    slug: "postman-api",
    name: "Postman API",
    category: "API workflow",
    icon: FileJson,
    summary:
      "Postman API supports API testing, documentation, collaboration, validation, and delivery across the API lifecycle.",
    about: [
      "Postman helps teams design, test, document, and share APIs clearly. It improves collaboration between frontend, backend, QA, and business teams.",
      "It is useful for endpoint testing, collections, environment variables, authorization flows, automated checks, mock APIs, and documentation.",
    ],
    capabilities: [
      "API collection setup",
      "Endpoint testing",
      "Environment management",
      "API documentation",
      "Mock API workflows",
      "Test automation basics",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "API workflow planning",
        text: "We organize endpoints, environments, variables, authorization, sample payloads, documentation, and test coverage.",
      },
      {
        title: "Collection setup",
        text: "We create structured collections, folders, requests, response examples, and reusable environment settings.",
      },
      {
        title: "Testing implementation",
        text: "We add request checks, validation scripts, status checks, payload tests, and common API scenarios.",
      },
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["API testing", "Clear docs", "Team workflow", "Validation ready"],
  },
  {
    slug: "ai-tools",
    name: "AI Tools",
    category: "AI capability",
    icon: Bot,
    summary:
      "AI tools help automate workflows, support content generation, build assistants, analyze data, and improve operations.",
    about: [
      "AI tools can support practical business use cases such as chat assistants, content workflows, lead handling, document analysis, data extraction, and internal automation.",
      "We focus on useful AI workflows that connect with real systems, protect business context, and help teams save time.",
    ],
    capabilities: [
      "AI assistants",
      "Workflow automation",
      "Content generation support",
      "Document processing",
      "Data extraction",
      "AI API integrations",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "Use case mapping",
        text: "We identify the right AI tasks, inputs, outputs, guardrails, human review points, and business workflow fit.",
      },
      {
        title: "Tool selection",
        text: "We choose suitable AI APIs, models, automation tools, storage, prompts, and integration patterns.",
      },
      {
        title: "Workflow development",
        text: "We build prompts, data flows, assistant behavior, automation steps, validation, and fallback handling.",
      },
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["Automation", "Assistants", "Data extraction", "Workflow ready"],
  },
  {
    slug: "cloud",
    name: "Cloud",
    category: "Infrastructure",
    icon: Cloud,
    summary:
      "Cloud platforms like AWS and Microsoft Azure help deploy, scale, monitor, and manage applications securely across modern infrastructure.",
    about: [
      "Cloud infrastructure supports scalable deployments, backups, storage, monitoring, API hosting, databases, and secure application operations across AWS and Microsoft Azure.",
      "AWS and Azure are useful for websites, mobile backends, SaaS products, dashboards, data systems, automation services, and business-critical applications.",
    ],
    capabilities: [
      "AWS cloud deployment",
      "Microsoft Azure deployment",
      "Hosting setup",
      "Database and storage setup",
      "Monitoring configuration",
      "Backup planning",
      "Scalable infrastructure",
    ],
    procedure: [
      commonProcedure.requirements,
      {
        title: "Infrastructure planning",
        text: "We plan hosting, environments, domains, SSL, storage, databases, scaling needs, backups, and monitoring.",
      },
      {
        title: "Cloud setup",
        text: "We configure AWS or Microsoft Azure services, deployment settings, environment variables, networking, security, and access controls.",
      },
      {
        title: "Deployment workflow",
        text: "We prepare build pipelines, release steps, rollback plans, logs, alerts, and production readiness checks.",
      },
      commonProcedure.integration,
      commonProcedure.launch,
    ],
    highlights: ["AWS", "Microsoft Azure", "Secure setup", "Deployment ready"],
  },
];

export const getTechnologyBySlug = (slug: string | undefined) =>
  technologies.find((technology) => technology.slug === slug);
