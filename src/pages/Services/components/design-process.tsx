import Badge from '@/ui/badge';
import RoutingIcon from '@/../public/assets/icons/Routing 3.svg';
import Curve from '@/../public/assets/icons/Curve.svg';
import { designProcesses } from '@/lib/constants';
import { CardStroke } from '@/components/card-stroke';
import Card from '@/ui/card';

export const DesignProcess = () => {
  return (
    <section className="flex flex-col font-geist gap-11 px-4 md:px-0">
      <div className="flex flex-col gap-4">
        <Badge
          shadowSize="small"
          className="text-[#EDEDEB] flex items-center gap-2 self-center font-medium opacity-50"
        >
          <img src={RoutingIcon} alt="routing-icon" />
          Design Approach
        </Badge>

        <div className="flex flex-col gap-4">
          <h1 className="gradient-text font-medium tracking-[-0.88px] text-center text-[40px]">
            UX/UI Design Process
          </h1>
          <p className="text-sm/[150%] text-center text-[#909090]">
            I start by gaining a clear understanding of your business objectives
            and user requirements. Then, I create wireframes, mockups, and
            prototypes to effectively communicate the design solution visually.
            Throughout the design process, I work closely with you, testing and
            tweaking the design to ensure that the final product exceeds your
            expectations.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {designProcesses.map((item, index) => (
          <ProcessCard index={index} {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

const ProcessCard = ({
  title,
  icon,
  list,
  index,
}: {
  title: string;
  icon: string;
  list: string[];
  index: number;
}) => {
  return (
    <CardStroke
      initial={{ opacity: 0, y: 80 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.2,
      }}
      className="rounded-4xl h-full row-span-1"
    >
      <Card className="rounded-4xl bg-[#171721] shadow-none  h-full font-geist flex flex-col gap-4 p-6">
        <img
          className="size-[100px] self-start"
          src={icon}
          alt={title + '-illustration'}
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium gradient-text">{title}</h1>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {list.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <img src={Curve} className="mt-1" />
                <p className="text-[#909090] text-sm/[150%]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </CardStroke>
  );
};
