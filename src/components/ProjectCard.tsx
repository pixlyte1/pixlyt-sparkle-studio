import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  category: string;
}

const ProjectCard = ({ image, title, category }: Props) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border-glow"
  >
    <div className="overflow-hidden aspect-[4/3]">
      <motion.img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>

    {/* Always visible bottom bar */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(211_60%_8%/0.95)] via-[hsl(211_60%_8%/0.6)] to-transparent p-6 pt-16 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <span className="text-primary/80 text-xs font-semibold uppercase tracking-wider">{category}</span>
      <h3 className="text-primary-foreground font-heading text-lg font-bold mt-1">{title}</h3>
    </div>

    {/* Hover border glow */}
    <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-500" />
  </motion.div>
);

export default ProjectCard;
