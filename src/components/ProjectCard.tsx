interface Props {
  image: string;
  title: string;
  category: string;
}

const ProjectCard = ({ image, title, category }: Props) => (
  <div className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
    <div className="overflow-hidden aspect-[4/3]">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <span className="text-primary-foreground/70 text-sm font-medium">{category}</span>
      <h3 className="text-primary-foreground font-heading text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

export default ProjectCard;
