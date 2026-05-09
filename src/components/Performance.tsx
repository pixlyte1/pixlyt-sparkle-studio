import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import strategyImage from "@/assets/strategy-to-success.png";

const Performance = () => (
  <section id="performance" className="py-28 bg-background relative overflow-hidden">
    <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-blob pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-blob-delayed pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
          Insights & Metrics
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
          Performance & <span className="text-gradient">Growth</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          From idea to impact — our proven journey from Creator to Growth.
        </p>
      </AnimatedSection>

      <AnimatedSection direction="up">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative rounded-3xl overflow-hidden border-glow glass-card group"
        >
          <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none z-10" />
          <img
            src={strategyImage}
            alt="From Strategy to Success — Creator, Competitor Analysis, Strategy, Execution, Growth journey infographic"
            className="w-full h-auto block select-none"
            loading="lazy"
          />
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

export default Performance;
