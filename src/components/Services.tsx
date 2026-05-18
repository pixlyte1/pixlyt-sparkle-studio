import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { featuredSolutions, getSolutionBySlug } from "@/data/solutions";

const capabilitySlugs = ["ai", "managed-services", "cms-dxp", "web-development", "data-engineering"];

const deliveryFlow = [
  { step: "01", title: "Plan", detail: "Scope, stack, content, and success metrics" },
  { step: "02", title: "Build", detail: "Design, engineering, integrations, and QA" },
  { step: "03", title: "Support", detail: "Launch care, monitoring, and improvements" },
];

const Services = () => (
  <section id="services" className="relative overflow-hidden bg-background py-16 sm:py-20">
    <div className="absolute inset-x-0 top-0 h-px bg-border" />
    <div className="container mx-auto px-4">
      <AnimatedSection className="mx-auto max-w-7xl">
        <span className="mb-5 inline-flex rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Expertise
        </span>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_0.8fr] lg:items-start lg:gap-16">
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Solutions built for intelligent digital growth
          </h2>
          <p className="max-w-xl text-base leading-8 text-muted-foreground lg:pt-2">
            Choose a capability to explore how PIXLYT plans, designs, builds, and supports business-ready digital systems. Each solution page includes focused services, outcomes, and delivery approach.
          </p>
        </div>
      </AnimatedSection>

      <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <AnimatedSection className="self-start space-y-4">
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-card">
            <div className="grid gap-px bg-border md:grid-cols-2">
              {capabilitySlugs.map((slug) => {
                const solution = getSolutionBySlug(slug);
                if (!solution) return null;

                const Icon = solution.icon;
                const isWide = solution.slug === "data-engineering";

                return (
                  <Link
                    key={solution.slug}
                    to={`/solutions/${solution.slug}`}
                    className={`group flex min-h-20 items-center justify-between gap-4 bg-white px-5 py-5 transition-colors hover:bg-primary/[0.04] sm:px-7 ${
                      solution.featured ? "bg-primary/[0.03]" : ""
                    } ${isWide ? "md:col-span-2" : ""}`}
                  >
                    <span className="relative flex min-w-0 items-center gap-4">
                      <span
                        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-sm"
                      >
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                          {solution.shortTitle ?? solution.title}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted-foreground opacity-60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-secondary/40 p-5 shadow-card">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Delivery Flow</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-foreground">From strategy to steady support</h3>
              </div>
              <span className="text-sm font-medium text-muted-foreground">3-step execution model</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {deliveryFlow.map((item) => (
                <div key={item.step} className="rounded-lg border border-border bg-white p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                    {item.step}
                  </div>
                  <h4 className="font-heading text-sm font-bold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} direction="right" className="space-y-4 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
          {featuredSolutions.map((solution) => (
            <Link
              key={solution.slug}
              to={`/solutions/${solution.slug}`}
              className="group block overflow-hidden rounded-xl border border-border bg-white shadow-card transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover"
            >
              <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[112px_1fr]">
                <img
                  src={solution.heroImage}
                  alt={`${solution.title} preview`}
                  className="h-full min-h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">{solution.eyebrow}</span>
                    <ArrowRight size={18} className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{solution.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{solution.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.15} className="mt-12 grid gap-3 rounded-lg border border-border bg-secondary/50 p-5 sm:grid-cols-3">
        {[
          "Strategy, design, build, and support in one team",
          "Responsive pages with premium brand storytelling",
          "Business content, images, and CTAs for every solution",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm font-medium text-foreground">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </AnimatedSection>
    </div>
  </section>
);

export default Services;

