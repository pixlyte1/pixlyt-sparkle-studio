import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { technologies } from "@/data/technologies";
import frontendImage from "@/assets/hero-slide-2.jpg";
import cloudImage from "@/assets/hero-slide-3.jpg";
import deliveryImage from "@/assets/hero-slide-1.jpg";

const leftColumn = technologies.filter((_, index) => index % 2 === 0);
const rightColumn = technologies.filter((_, index) => index % 2 === 1);

const technologyVisuals = [
  {
    image: frontendImage,
    label: "Frontend and mobile",
    title: "Interface systems built for real users",
  },
  {
    image: cloudImage,
    label: "Cloud and infrastructure",
    title: "Secure platforms ready to scale",
  },
  {
    image: deliveryImage,
    label: "AI and delivery workflow",
    title: "Connected teams, APIs, and automation",
  },
];

type TechnologiesContentProps = {
  className?: string;
};

const TechnologiesContent = ({
  className = "mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-8 lg:px-12",
}: TechnologiesContentProps) => (
  <div className={className}>
    <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
      <div>
        <h1 className="font-heading text-3xl font-bold leading-none text-foreground sm:text-4xl">Technologies</h1>
      </div>
      <a href="#contact" className="inline-flex items-center gap-3 text-base font-bold text-foreground transition-colors hover:text-primary">
        Start a Project
        <ArrowRight size={18} className="text-primary" />
      </a>
    </div>

    <div className="mb-5 text-sm font-medium text-primary/80">Tech Stack</div>

    <div className="grid gap-x-5 md:grid-cols-2">
      {[leftColumn, rightColumn].map((column, index) => (
        <div key={index} className="border-b border-border">
          {column.map((technology) => {
            const Icon = technology.icon;
            const content = (
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                    <Icon size={22} className="text-primary" />
                  </span>
                  <h2 className="text-lg text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {technology.name}
                  </h2>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            );

            return (
              <Link
                key={technology.name}
                to={`/technologies/${technology.slug}`}
                className="group block min-h-[69px] border-t border-border px-4 py-5 transition-colors hover:bg-primary/5 sm:px-5"
              >
                {content}
              </Link>
            );
          })}
          {index === 1 && <div className="hidden min-h-[69px] border-t border-border md:block" />}
        </div>
      ))}
    </div>

    <section className="mt-16">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <span className="text-sm font-semibold text-primary">Technology visuals</span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">Tools, platforms, and delivery environments</h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {technologyVisuals.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-lg border border-border bg-white shadow-card transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover">
            <div className="aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">{item.label}</span>
              <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-foreground">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="mt-16">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <span className="text-sm font-semibold text-primary">How we use them</span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">Built for reliable digital delivery</h2>
        </div>
      </div>

      <div className="grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
        {[
          {
            title: "Frontend and mobile",
            text: "React.js and React Native help us build fast, polished interfaces across web and mobile.",
          },
          {
            title: "Backend and data",
            text: "Node.js, Express.js, ASP.NET, C Sharp, MongoDB, and PostgreSQL power secure application logic and storage.",
          },
          {
            title: "APIs, AI, and cloud",
            text: "Postman API, AI tools, and cloud platforms support testing, automation, deployment, and scale.",
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
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Need the right stack?</span>
          <h2 className="mt-3 font-heading text-3xl font-bold">Let us choose the best technology path for your project.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/70">
            Share your product idea, business workflow, or integration need. We will match it with the right web,
            mobile, database, AI, and cloud stack.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
        >
          Contact Us
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  </div>
);

export default TechnologiesContent;
