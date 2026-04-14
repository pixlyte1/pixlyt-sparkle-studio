import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: Props) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-border/50 transition-shadow duration-500 overflow-hidden h-full"
  >
    {/* Background number */}
    <span className="absolute -top-2 -right-2 text-8xl font-heading font-black text-primary/[0.04] group-hover:text-primary/[0.08] transition-colors duration-500 select-none">
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:gradient-primary transition-all duration-500 group-hover:shadow-glow">
        <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
      </div>
      <h3 className="font-heading text-lg font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>

    {/* Hover gradient overlay */}
    <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl" />
  </motion.div>
);

export default ServiceCard;
