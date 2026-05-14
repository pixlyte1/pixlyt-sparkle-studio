import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotFound from "./NotFound";
import { featuredSolutions, getSolutionBySlug, solutionHighlights } from "@/data/solutions";

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = getSolutionBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    if (!solution) return;

    document.title = solution.seoTitle ?? `${solution.title} | PIXLYT Digital Solutions`;

    const description =
      solution.seoDescription ??
      `${solution.summary} Explore PIXLYT capabilities, outcomes, process, FAQs, and contact options.`;
    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, [solution]);

  if (!solution) {
    return <NotFound />;
  }

  const Icon = solution.icon;
  const relatedSolutions = featuredSolutions.filter((item) => item.slug !== solution.slug).slice(0, 2);
  const caseStudies = solution.caseStudies ?? [];
  const faqs = solution.faqs ?? [
    {
      question: `How can PIXLYT help with ${solution.shortTitle ?? solution.title}?`,
      answer: "We start by understanding your goals, current systems, users, and constraints, then shape a practical roadmap for design, build, launch, and ongoing support.",
    },
    {
      question: "Can this be planned as a phased project?",
      answer: "Yes. We can begin with discovery or a focused pilot, then expand the work in phases based on priority, budget, and measurable business value.",
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes. We can support maintenance, monitoring, optimization, reporting, and improvements after the solution goes live.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar forceSolid />

      <main>
        <section className="relative overflow-hidden bg-secondary/60 pt-32">
          <div className="absolute inset-x-0 bottom-0 h-28 bg-background" />
          <div className="container relative mx-auto px-4 pb-16">
            <Link
              to="/solutions"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={17} />
              Back to solutions
            </Link>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-glow">
                    <Icon size={24} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">{solution.eyebrow}</span>
                </div>
                <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  {solution.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{solution.summary}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    Discuss this solution
                    <ArrowRight size={17} />
                  </a>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    View all solutions
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img
                  src={solution.heroImage}
                  alt={`${solution.title} digital solution`}
                  className="aspect-[16/11] w-full rounded-lg object-cover shadow-card-hover"
                />
                <div className="absolute -bottom-8 left-6 right-6 rounded-lg border border-border bg-white p-5 shadow-card">
                  <div className="grid grid-cols-3 divide-x divide-border">
                    {solution.metrics.map((metric) => (
                      <div key={metric.label} className="px-3 text-center">
                        <div className="font-heading text-xl font-bold text-foreground">{metric.value}</div>
                        <div className="mt-1 text-xs leading-5 text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="sticky top-28 hidden lg:block">
              <img
                src={solution.accentImage}
                alt={`${solution.title} related work`}
                className="aspect-[4/5] w-full rounded-lg object-cover shadow-card"
                loading="lazy"
              />
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">What we deliver</span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Focused capabilities for real business use</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {solution.capabilities.map((capability) => (
                    <div key={capability} className="rounded-lg border border-border bg-white p-5 shadow-card">
                      <CheckCircle2 size={20} className="mb-4 text-primary" />
                      <p className="text-sm font-medium leading-6 text-foreground">{capability}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-foreground p-6 text-primary-foreground sm:p-8">
                <div className="grid gap-6 sm:grid-cols-[0.65fr_1fr] sm:items-start">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">Business outcomes</span>
                    <h2 className="mt-3 font-heading text-2xl font-bold">Built to create visible progress</h2>
                  </div>
                  <div className="space-y-4">
                    {solution.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <Sparkles size={18} className="mt-1 shrink-0 text-primary" />
                        <p className="text-sm leading-6 text-primary-foreground/75">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our approach</span>
                <div className="mt-6 space-y-4">
                  {solution.process.map((step, index) => (
                    <div key={step.title} className="grid gap-4 rounded-lg border border-border bg-secondary/40 p-5 sm:grid-cols-[80px_1fr]">
                      <div className="font-heading text-3xl font-bold text-primary/30">{String(index + 1).padStart(2, "0")}</div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {solutionHighlights.slice(0, 4).map((item) => {
                const HighlightIcon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-card">
                    <HighlightIcon size={20} className="shrink-0 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            {caseStudies.length > 0 && (
              <div className="mb-20">
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">Related case studies</span>
                    <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Project patterns we can build from</h2>
                  </div>
                  <a href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View projects
                    <ArrowRight size={17} />
                  </a>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {caseStudies.map((study) => (
                    <article
                      key={study.title}
                      className="group overflow-hidden rounded-lg border border-border bg-white shadow-card transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover"
                    >
                      <img src={study.image} alt={study.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
                      <div className="p-6">
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">{study.category}</span>
                        <h3 className="mt-3 font-heading text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                          {study.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{study.summary}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Related solutions</span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Continue exploring</h2>
              </div>
              <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                See all expertise
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {relatedSolutions.map((item) => {
                const RelatedIcon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    to={`/solutions/${item.slug}`}
                    className="group grid gap-5 rounded-lg border border-border bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover sm:grid-cols-[160px_1fr]"
                  >
                    <img src={item.heroImage} alt={item.title} className="aspect-[4/3] w-full rounded-md object-cover" loading="lazy" />
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-primary">
                        <RelatedIcon size={18} />
                        <span className="text-xs font-semibold uppercase tracking-widest">{item.eyebrow}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CircleHelp size={23} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">FAQs</span>
                <h2 className="mt-3 max-w-md font-heading text-3xl font-bold leading-tight text-foreground">
                  Common questions about {solution.shortTitle ?? solution.title}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                  A few quick answers before we map the right scope, stack, timeline, and support plan for your project.
                </p>
              </div>

              <div className="divide-y divide-border border-y border-border bg-white">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group px-5 py-5 open:bg-primary/[0.03] sm:px-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-foreground transition-colors group-open:text-primary">
                      {faq.question}
                      <ArrowRight
                        size={18}
                        className="shrink-0 text-primary transition-transform group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="container mx-auto overflow-hidden rounded-lg bg-primary">
            <div className="grid gap-8 p-7 text-primary-foreground sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-3 flex items-center gap-2 text-primary-foreground/80">
                  <Layers3 size={18} />
                  <span className="text-xs font-semibold uppercase tracking-widest">PIXLYT delivery team</span>
                </div>
                <h2 className="font-heading text-3xl font-bold">Ready to build your {solution.shortTitle ?? solution.title} roadmap?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/75">
                  We can help define the scope, content, visuals, technology stack, launch plan, and ongoing support model.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation
                  <LineChart size={17} />
                </a>
                <div className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground">
                  <ShieldCheck size={17} />
                  Strategy to support
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Contact initialMessage={`I'm interested in ${solution.title}.`} />
      <Footer />
    </div>
  );
};

export default SolutionDetail;
