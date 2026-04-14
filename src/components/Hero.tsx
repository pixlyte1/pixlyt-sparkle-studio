import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            AI-Driven IT & Media Company
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
        >
          Empowering Brands with{" "}
          <span className="text-primary">AI</span> &{" "}
          <span className="text-accent">Creativity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We blend AI, IT innovation, and creative design to deliver intelligent,
          high-impact solutions for the modern world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 duration-200"
          >
            Get Started <ArrowRight size={18} />
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg font-semibold text-base border border-border text-foreground hover:bg-secondary transition-all hover:scale-105 duration-200 flex items-center gap-2"
          >
            <Play size={18} /> View Projects
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
