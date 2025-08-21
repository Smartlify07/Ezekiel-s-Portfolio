import { ArrowRightUp } from '@solar-icons/react';
import { projects } from '@/lib/constants';
import Badge from '@/ui/badge';
import { motion, useAnimate } from 'motion/react';
import { useNavigate } from 'react-router';
const ProjectsSection = () => {
  return (
    <section className="flex flex-col gap-6 px-4 md:grid md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </section>
  );
};

export const ProjectCard = ({
  title,
  description,
  category,
  image,
}: {
  title: string;
  description: string;
  image: string;
  category: string;
}) => {
  const [scope, animate] = useAnimate();
  const handleMouseEnter = () => {
    animate('button', { rotate: 45 });
  };
  const handleMouseLeave = () => {
    animate('button', { rotate: 0 });
  };
  const router = useNavigate();
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={scope}
      className="relative project-card cursor-pointer border border-red-500 w-full shrink-0"
    >
      <div className="rounded-3xl h-[309px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full lg:w-[436.62px] h-[309px] aspect-[436.72/331.00] object-cover rounded-3xl"
        />
      </div>
      <div className="project-gradient absolute left-0 overflow-clip bottom-0 flex flex-col font-geist py-4 px-5 gap-2">
        <Badge className="text-white text-[10px] z-10 bg-[#0F0F1A]/80 tracking-[0%] self-start">
          {category}
        </Badge>
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl/[30.8px] text-[#EDEDEB] tracking-[-0.88px] text-start">
              {title}
            </h2>
            <p className="text-sm text-[#909090] font-normal h-10 line-clamp-2 ">
              {description}...
            </p>
          </div>
          <button
            className="cursor-pointer"
            onClick={() => {
              router('/projects/1');
            }}
          >
            <ArrowRightUp
              weight="Broken"
              className="text-[#909090] shrink-0"
              size={16}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
