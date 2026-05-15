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
    className="group relative h-full overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:shadow-card-hover border-glow"
  >
    <div className="aspect-[5/4] w-full overflow-hidden bg-secondary">
      <motion.img
        src={image}
        alt={title}
        loading="lazy"
        width={640}
        height={512}
        className="h-full w-full object-cover object-center"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>

    {/* Always visible bottom bar */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(211_60%_8%/0.95)] via-[hsl(211_60%_8%/0.6)] to-transparent p-6 pt-16">
      <span className="text-primary/80 text-xs font-semibold uppercase tracking-wider">{category}</span>
      <h3 className="text-primary-foreground font-heading text-lg font-bold mt-1">{title}</h3>
    </div>

    {/* Hover border glow */}
    <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-500" />
  </motion.div>
);

export default ProjectCard;
