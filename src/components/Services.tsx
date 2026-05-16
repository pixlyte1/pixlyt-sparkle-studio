import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { featuredSolutions, getSolutionBySlug, solutionRows } from "@/data/solutions";

const Services = () => (
  <section id="services" className="relative overflow-hidden bg-background py-24 sm:py-28">
    <div className="absolute inset-x-0 top-0 h-px bg-border" />
    <div className="container mx-auto px-4">
      <AnimatedSection className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <span className="mb-4 inline-flex rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Expertise
          </span>
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Solutions built for intelligent digital growth
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:ml-auto">
          Choose a capability to explore how PIXLYT plans, designs, builds, and supports business-ready digital systems. Each solution page includes focused services, outcomes, and delivery approach.
        </p>
      </AnimatedSection>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <AnimatedSection className="rounded-lg border border-border bg-white shadow-card">
          <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
            {solutionRows.map((column, columnIndex) => (
              <div key={columnIndex} className="divide-y divide-border relative">
                {column.map((item) => {
                  const solution = getSolutionBySlug(item.slug);
                  if (!solution) return null;
                  const Icon = solution.icon;
                  const isSubItem = item.isSubItem;

                  return (
                    <Link
                      key={solution.slug}
                      to={`/solutions/${solution.slug}`}
                      className={`group flex min-h-20 items-center justify-between gap-4 py-5 transition-colors hover:bg-secondary/70 ${
                        solution.featured && !isSubItem ? "bg-primary/[0.03]" : ""
                      } ${isSubItem ? "pl-16 pr-5 sm:pl-20 sm:pr-7" : "px-5 sm:px-7"}`}
                    >
                      <span className="flex min-w-0 items-center gap-4 relative">
                        {!isSubItem && (
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-all relative z-10 bg-white ${
                              solution.featured
                                ? "border-primary/25 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                                : "border-border bg-secondary/50 text-muted-foreground group-hover:border-primary/25 group-hover:text-primary"
                            }`}
                          >
                            <Icon size={20} />
                          </span>
                        )}
                        {isSubItem && (
                          <div className="absolute -left-9 top-1/2 -translate-y-1/2 flex items-center">
                            <div className="h-px w-6 bg-border group-hover:bg-primary/40 transition-colors"></div>
                          </div>
                        )}
                        <span className="relative">
                          <span className={`block font-heading font-semibold transition-colors group-hover:text-primary ${
                            isSubItem ? "text-sm text-muted-foreground" : "text-base text-foreground"
                          }`}>
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
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} direction="right" className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {featuredSolutions.map((solution) => (
            <Link
              key={solution.slug}
              to={`/solutions/${solution.slug}`}
              className="group block overflow-hidden rounded-lg border border-border bg-white shadow-card transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover"
            >
              <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[112px_1fr]">
                <img
                  src={solution.heroImage}
                  alt={`${solution.title} preview`}
                  className="h-full min-h-32 w-full object-cover"
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

