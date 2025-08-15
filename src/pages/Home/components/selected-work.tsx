import Badge from '@/ui/badge';
import Icon from '@/../public/assets/icons/selected-works.svg';
import ProjectsSection from './projects';
const SelectedWork = () => {
  return (
    <section className="flex flex-col gap-4">
      <header className="px-4 flex items-center">
        <Badge
          shadowSize="small"
          className="flex opacity-50 items-center self-start tracking-[0%] text-[#EDEDEB] font-geist font-normal text-sm/[20px] gap-2"
        >
          <img src={Icon} alt="selected-works-icon" />
          Selected Work
        </Badge>
      </header>
      <ProjectsSection />
    </section>
  );
};
export default SelectedWork;
