import { useState, useRef } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, BarChart3, PieChart as PieIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const growthData = [
  { year: "2020", projects: 12, clients: 8 },
  { year: "2021", projects: 28, clients: 22 },
  { year: "2022", projects: 54, clients: 41 },
  { year: "2023", projects: 92, clients: 73 },
  { year: "2024", projects: 148, clients: 120 },
  { year: "2025", projects: 210, clients: 175 },
];

const serviceData = [
  { name: "AI Solutions", value: 38 },
  { name: "Web Dev", value: 28 },
  { name: "Marketing", value: 18 },
  { name: "Media", value: 16 },
];

const industryData = [
  { name: "Tech", value: 40 },
  { name: "Media", value: 25 },
  { name: "Business", value: 20 },
  { name: "Startups", value: 15 },
];

const PIE_COLORS = ["hsl(211 90% 52%)", "hsl(199 90% 48%)", "hsl(211 90% 65%)", "hsl(199 80% 70%)"];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg)");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -4;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    setTransform(`perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01, 1.01, 1.01)`);
  };

  const handleLeave = () =>
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: "transform 0.4s ease" }}
      className={className}
    >
      {children}
    </div>
  );
};

const ChartCard = ({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon: typeof TrendingUp;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <TiltCard className="h-full">
    <div className="relative rounded-2xl glass-card p-6 h-full flex flex-col border-glow overflow-hidden group">
      <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 rounded-2xl pointer-events-none" />
      <div className="flex items-center gap-3 mb-1">
        <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
          <Icon size={20} className="text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-base font-bold font-heading text-foreground leading-tight">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="flex-1 mt-4 min-h-[260px]">{children}</div>
    </div>
  </TiltCard>
);

const tooltipStyle = {
  background: "hsl(0 0% 100% / 0.95)",
  border: "1px solid hsl(211 90% 52% / 0.2)",
  borderRadius: "12px",
  boxShadow: "0 10px 30px -10px hsl(211 90% 52% / 0.3)",
  fontSize: "12px",
};

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
          Real numbers behind PIXLYT's journey across AI, IT, and Media.
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <AnimatedSection direction="up">
          <ChartCard icon={TrendingUp} title="Company Growth" subtitle="Projects & clients over time">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="lineProjects" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(211 90% 52%)" />
                    <stop offset="100%" stopColor="hsl(199 90% 48%)" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(211 25% 90%)" />
                <XAxis dataKey="year" stroke="hsl(215 15% 50%)" fontSize={12} />
                <YAxis stroke="hsl(215 15% 50%)" fontSize={12} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line
                  type="monotone"
                  dataKey="projects"
                  name="Projects Completed"
                  stroke="url(#lineProjects)"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "hsl(211 90% 52%)" }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="clients"
                  name="Client Growth"
                  stroke="hsl(199 90% 48%)"
                  strokeWidth={2.5}
                  strokeDasharray="5 4"
                  dot={{ r: 3, fill: "hsl(199 90% 48%)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.15}>
          <ChartCard icon={BarChart3} title="Service Distribution" subtitle="Project share by service">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serviceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(211 90% 52%)" />
                    <stop offset="100%" stopColor="hsl(199 90% 48%)" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(211 25% 90%)" />
                <XAxis dataKey="name" stroke="hsl(215 15% 50%)" fontSize={12} />
                <YAxis stroke="hsl(215 15% 50%)" fontSize={12} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(211 90% 52% / 0.05)" }} />
                <Bar dataKey="value" name="Share %" fill="url(#barGrad)" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </AnimatedSection>
      </div>

      <AnimatedSection direction="up" delay={0.2}>
        <ChartCard icon={PieIcon} title="Industry Focus" subtitle="Where our clients come from">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Pie
                data={industryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                stroke="hsl(0 0% 100%)"
                strokeWidth={3}
              >
                {industryData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </AnimatedSection>
    </div>
  </section>
);

export default Performance;
