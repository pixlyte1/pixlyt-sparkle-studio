import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import cardCreatorAI from "@/assets/card-creator-ai.jpg";
import cardHrAI from "@/assets/card-hr-ai.jpg";

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
    desc: "Scalable technology platforms powering the next generation of digital transformation.",
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
      {/* Visual layer: background + floating cards transition together */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* Background image */}
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(211_60%_8%/0.92)] via-[hsl(211_60%_12%/0.78)] to-[hsl(211_60%_12%/0.5)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(211_60%_8%/0.6)] to-transparent" />
          </motion.div>

          {/* Floating product cards (part of the visual layer) */}
          <div className="absolute top-[14%] right-[8%] hidden lg:block">
            <motion.div
              animate={{ y: [-10, 10, -10], rotateZ: [-2, 2, -2] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.04, rotateZ: 0 }}
              className="w-64 rounded-2xl glass-dark border border-primary-foreground/15 shadow-glow-lg p-5 backdrop-blur-xl"
            >
              <div className="relative h-32 rounded-xl mb-4 overflow-hidden border border-primary-foreground/10">
                <img src={cardCreatorAI} alt="Creator AI workstation" loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(211_60%_8%/0.6)] via-transparent to-transparent" />
              </div>
              <h4 className="font-heading text-primary-foreground text-lg font-bold mb-1">Creator AI</h4>
              <p className="text-primary-foreground/60 text-xs leading-snug mb-4">
                AI tools to ideate, create and elevate your content effortlessly.
              </p>
              <div className="w-9 h-9 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <ArrowRight size={16} className="text-primary-foreground" />
              </div>
            </motion.div>
          </div>

          <div className="absolute top-[48%] right-[3%] hidden lg:block">
            <motion.div
              animate={{ y: [8, -12, 8], rotateZ: [1, -1, 1] }}
              transition={{
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
                rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              whileHover={{ scale: 1.04, rotateZ: 0 }}
              className="w-64 rounded-2xl glass-dark border border-accent/25 shadow-glow-accent p-5 backdrop-blur-xl"
            >
              <div className="relative h-32 rounded-xl mb-4 overflow-hidden border border-primary-foreground/10">
                <img src={cardHrAI} alt="HR AI network" loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(211_60%_8%/0.6)] via-transparent to-transparent" />
              </div>
              <h4 className="font-heading text-primary-foreground text-lg font-bold mb-1">HR AI</h4>
              <p className="text-primary-foreground/60 text-xs leading-snug mb-4">
                Smart recruitment, employee insights & workforce automation.
              </p>
              <div className="w-9 h-9 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <ArrowRight size={16} className="text-primary-foreground" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Animated gradient blobs (stable, behind content) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[100px] animate-blob pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-accent/10 blur-[80px] animate-blob-delayed pointer-events-none z-[1]" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-[60px] animate-blob-slow pointer-events-none z-[1]" />

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
                  className="inline-block px-5 py-2 rounded-full border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium mb-6 glass-dark"
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
                    className="gradient-primary shimmer-effect text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-glow-lg btn-3d"
                  >
                    Get Started <ArrowRight size={18} />
                  </a>
                  <a
                    href="#projects"
                    className="px-8 py-4 rounded-xl font-semibold text-base border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 text-center glass-dark btn-3d"
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
          className="w-12 h-12 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground flex items-center justify-center transition-all duration-300 glass-dark"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground flex items-center justify-center transition-all duration-300 glass-dark"
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
