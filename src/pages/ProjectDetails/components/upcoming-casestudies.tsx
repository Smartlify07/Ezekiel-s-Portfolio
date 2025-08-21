import { projects } from '@/lib/constants';
import Badge from '@/ui/badge';
import Button from '@/ui/button';
import { ArrowRightUp, Case } from '@solar-icons/react';
import { useAnimate, motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router';

export const UpcomingCaseStudies = () => {
  const params = useParams();
  const router = useNavigate();
  return (
    <section className="flex flex-col gap-6 font-geist pb-10 border-b-grey-4/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="gradient-text text-start font-medium text-[40px]/[52px] -tracking-smaller">
          Upcoming Case Studies
        </h1>
        <Button
          onClick={() => {
            router('/');
          }}
          variant="default"
          className="self-start md:self-center"
        >
          <Case size={16} weight="Outline" />
          See More Case Study
        </Button>
      </div>

      <div className="flex items-start gap-6 overflow-scroll scrollbar-hide">
        {projects.slice(Number(params.id) as number).map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

const Project = ({
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
      className="relative project-card w-11/12 md:w-6/12 shrink-0"
    >
      <div className="rounded-3xl h-[301px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
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
              className="text-[#909090]  shrink-0"
              size={16}
            />
          </button>{' '}
        </div>
      </div>
    </motion.div>
  );
};
