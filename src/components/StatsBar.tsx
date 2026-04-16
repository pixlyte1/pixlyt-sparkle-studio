import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FolderCheck, Award, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: FolderCheck, value: 120, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 80, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Zap, value: 15, suffix: "+", label: "Team Members" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient font-heading">
      {count}{suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="relative -mt-20 z-20 pb-8">
    <div className="container mx-auto px-4">
      <AnimatedSection direction="scale">
        <div className="glass-premium rounded-3xl border border-border/30 shadow-card-hover p-8 sm:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-primary shadow-glow mb-4">
                  <stat.icon className="text-primary-foreground" size={22} />
                </div>
                <div className="mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default StatsBar;
