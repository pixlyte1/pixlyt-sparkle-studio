import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { featuredSolutions } from "@/data/solutions";

const leftColumn = featuredSolutions.filter((solution) =>
  ["ai", "data-engineering", "databricks", "web-development"].includes(solution.slug)
);
const rightColumn = featuredSolutions.filter((solution) =>
  ["cms-dxp", "snowflake", "managed-services"].includes(solution.slug)
);

const Solutions = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar forceSolid />

    <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-8 lg:px-12">
      <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <h1 className="font-heading text-3xl font-bold leading-none text-foreground sm:text-4xl">Solutions</h1>
        <a href="/#services" className="inline-flex items-center gap-3 text-base font-bold text-foreground transition-colors hover:text-primary">
          What We Do
          <ArrowRight size={18} className="text-primary" />
        </a>
      </div>

      <div className="mb-5 text-sm font-medium text-primary/80">Expertise</div>

      <div className="grid gap-x-5 md:grid-cols-2">
        {[leftColumn, rightColumn].map((column, index) => (
          <div key={index} className="border-b border-border">
            {column.map((solution) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="group flex min-h-[69px] items-center justify-between gap-4 border-t border-border px-4 text-lg text-foreground transition-colors hover:bg-primary/5 hover:text-primary sm:px-5 sm:text-2xl"
              >
                <span>{solution.shortTitle ?? solution.title}</span>
                <ArrowRight
                  size={18}
                  className="text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            ))}
            {index === 1 && <div className="hidden min-h-[69px] border-t border-border md:block" />}
          </div>
        ))}
      </div>

      <section className="mt-16">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-primary">Why PIXLYT</span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">Built for practical digital progress</h2>
          </div>
        </div>

        <div className="grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
          {[
            {
              title: "Business-first planning",
              text: "We shape each solution around clear goals, user needs, and measurable outcomes.",
            },
            {
              title: "AI + data ready builds",
              text: "We design platforms, pipelines, and workflows that can support smarter automation.",
            },
            {
              title: "Launch and managed support",
              text: "We stay with the work after launch through optimization, monitoring, and care.",
            },
          ].map((item) => (
            <div key={item.title} className="py-6 md:px-6 first:md:pl-0 last:md:pr-0">
              <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 overflow-hidden rounded-lg border border-border bg-foreground">
        <div className="grid gap-8 p-7 text-primary-foreground sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Need direction?</span>
            <h2 className="mt-3 font-heading text-3xl font-bold">Not sure which solution fits your project?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/70">
              Tell us what you want to build, improve, or automate. We will help you choose the right path across AI,
              CMS, data, managed services, and web development.
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Solutions;
