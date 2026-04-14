import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: Props) => (
  <div className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:gradient-primary group-hover:text-primary-foreground transition-all duration-300">
      <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
    </div>
    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;
