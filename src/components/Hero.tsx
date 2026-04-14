import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    tag: "AI-Powered Solutions",
    heading: ["Empowering Brands", "with AI & Creativity"],
    desc: "We blend AI, IT innovation, and creative design to deliver intelligent, high-impact solutions for the modern world.",
  },
  {
    image: heroSlide2,
    tag: "Creative Excellence",
    heading: ["Crafting Digital", "Experiences That Matter"],
    desc: "From branding to content production, we create compelling stories that captivate audiences and elevate your brand.",
  },
  {
    image: heroSlide3,
    tag: "Technology First",
    heading: ["Building the Future", "of Digital Innovation"],
    desc: "Robust, scalable technology platforms powering the next generation of digital transformation.",
  },
];

const SLIDE_DURATION = 6000;

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next, current]);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(211_60%_8%/0.88)] via-[hsl(211_60%_12%/0.75)] to-[hsl(211_60%_12%/0.5)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(211_60%_8%/0.6)] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-float-delayed pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div key={current}>
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium mb-6 glass-dark"
                >
                  {slide.tag}
                </motion.span>

                <motion.h1
                  className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
                >
                  {slide.heading.map((line, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                      className="block text-primary-foreground"
                    >
                      {line}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-primary-foreground/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
                >
                  {slide.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.75 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="#contact"
                    className="gradient-primary shimmer-effect text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-glow"
                  >
                    Get Started <ArrowRight size={18} />
                  </a>
                  <a
                    href="#projects"
                    className="px-8 py-4 rounded-xl font-semibold text-base border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 text-center"
                  >
                    View Projects
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 48 : 16 }}
          >
            <div className="absolute inset-0 bg-primary-foreground/30 rounded-full" />
            {i === current && (
              <motion.div
                className="absolute inset-0 gradient-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
