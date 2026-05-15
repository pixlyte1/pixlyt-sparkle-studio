import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getTechnologyBySlug } from "@/data/technologies";
import NotFound from "./NotFound";

const TechnologyDetail = () => {
  const { slug } = useParams();
  const technology = getTechnologyBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    if (!technology) return;
    document.title = `${technology.name} Technology | PIXLYT Digital Solutions`;
  }, [technology]);

  if (!technology) {
    return <NotFound />;
  }

  const Icon = technology.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar forceSolid />

      <main>
        <section className="border-b border-border bg-secondary/60 pt-32">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
            <Link
              to="/technologies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={17} />
              Back to technologies
            </Link>

            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-glow">
                    <Icon size={24} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">{technology.category}</span>
                </div>
                <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  {technology.name}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{technology.summary}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#procedure"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    View Procedure
                    <ArrowRight size={17} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    Discuss {technology.name} Project
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-white p-6 shadow-card">
                <div className="grid gap-4 sm:grid-cols-2">
                  {technology.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-md border border-border bg-secondary/40 p-5">
                      <Icon size={22} className="mb-4 text-primary" />
                      <div className="font-heading text-lg font-bold text-foreground">{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">About {technology.name}</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Why we use {technology.name}</h2>
              {technology.about.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-sm leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">What we build</span>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {technology.capabilities.map((capability) => (
                  <div key={capability} className="rounded-lg border border-border bg-white p-5 shadow-card">
                    <CheckCircle2 size={20} className="mb-4 text-primary" />
                    <p className="text-sm font-medium leading-6 text-foreground">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="procedure" className="border-y border-border bg-secondary/40 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Procedure</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">{technology.name} development process</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {technology.procedure.map((step, index) => (
                <div key={step.title} className="grid gap-4 rounded-lg border border-border bg-white p-5 shadow-card sm:grid-cols-[76px_1fr]">
                  <div className="font-heading text-3xl font-bold text-primary/30">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-lg bg-foreground">
            <div className="grid gap-8 p-7 text-primary-foreground sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{technology.name} project</span>
                <h2 className="mt-3 font-heading text-3xl font-bold">Ready to build with {technology.name}?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/70">
                  We can plan, design, develop, integrate, test, and launch the right {technology.name} solution for your business.
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
          </div>
        </section>
      </main>

      <Contact initialMessage={`I'm interested in ${technology.name}.`} />
      <Footer />
    </div>
  );
};

export default TechnologyDetail;
