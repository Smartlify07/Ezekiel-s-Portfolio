import Pallete2 from '@/../public/assets/icons/Pallete 2.svg';
import Badge from '@/ui/badge';

export const ExclusiveDealsTopSection = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <Badge
        shadowSize="small"
        className="opacity-50 font-geist flex self-center text-[#EDEDEB] items-center gap-2"
      >
        <img src={Pallete2} />
        Exclusive Deals
      </Badge>

      <h1 className="gradient-text font-medium text-[40px] font-geist text-center tracking-[-0.88px]">
        Why Choose Me for Your UI/UX Design Needs
      </h1>

      <p className="text-sm/[150%] font-normal font-geist text-center text-[#909090]">
        From brainstorming and user research to wireframing, testing, launching,
        and providing post-launch support, my comprehensive UI/UX design and
        consulting services encompass every aspect.
      </p>
    </section>
  );
};
