import CurrencyIcon from '@/../public/assets/icons/Subtract.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import Framer from '@/../public/assets/icons/Framer.svg';
import Cursor from '@/../public/assets/icons/Cursor.svg';
import DoubleCheck from '@/../public/assets/icons/DoubleCheck.svg';
import Badge from '@/ui/badge';
import { pricing } from '@/lib/constants';
import { CardStroke } from '@/components/card-stroke';
import Button from '@/ui/button';
import { cn } from '@/lib/utils';

export const Pricing = () => {
  return (
    <section className="px-4 md:px-0 font-geist grid gap-11">
      <div className="grid gap-4 place-items-center">
        <Badge
          shadowSize="small"
          className="flex text-[#EDEDEB] items-center gap-2"
        >
          <img src={CurrencyIcon} alt="currency-icon" />
          Pricing
        </Badge>
        <div className="grid gap-4 place-items-center md:w-11/12">
          <h1 className="text-[40px]/[52px] gradient-text text-center font-medium -tracking-smaller">
            Your visions , my creativity—strategies tailored just for you.
          </h1>
          <p className="text-sm/[150%] text-center text-[#909090]">
            Whether you're a startup with a bold idea or a business ready to
            scale, I offer flexible design solutions tailored to your goals and
            budget. From one-off projects to long-term collaborations, my
            pricing plans are built to deliver value without compromise—so your
            vision gets the design it deserves.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <PricingCard
          title={pricing[0].title}
          icon={Layers}
          first
          list={pricing[0].list}
        >
          <p>
            <span className="pricing-gradient-text-1">Perfect</span> for
            startups and solo founders needing a full-time UI/UX designer.
            Whether starting fresh or scaling up, this option guarantees
            consistent,
            <span className="pricing-gradient-text-2">
              {' '}
              high-quality design integrated into your workflow
            </span>
            .
          </p>
        </PricingCard>
        <PricingCard
          title={pricing[1].title}
          icon={Framer}
          list={pricing[1].list}
        >
          <p>
            <span className="pricing-gradient-text-1">Perfect</span> or startups
            needing fast websites in Framer. I’ll create a sleek, animated site
            with CMS features. From landing to multi-page sites
            <span className="pricing-gradient-text-2">
              {' '}
              you’ll have a polished, easy-to-maintain site
            </span>
            .
          </p>
        </PricingCard>
        <PricingCard
          title={pricing[2].title}
          icon={Cursor}
          list={pricing[2].list}
        >
          <p>
            <span className="pricing-gradient-text-1">Great</span> for startups
            and individuals needing expert UI/UX design for a project. Ideal for
            MVPs, landing pages, or refreshing your
            <span className="pricing-gradient-text-2">
              {' '}
              brand's digital look
            </span>
            .
          </p>
        </PricingCard>
      </div>
    </section>
  );
};

const PricingCard = ({
  icon,
  title,
  children,
  list,
  first,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  first?: boolean;
  list: string[];
}) => {
  return (
    <CardStroke className="rounded-4xl">
      <div
        className={`rounded-4xl gap-6 flex flex-col p-6 h-full  ${
          first ? 'texture-2 bg-[rgba(15,15,26,0.3)]' : 'bg-[#171721]'
        }`}
      >
        <div className="grid gap-4">
          <div className="size-12 flex items-center justify-center rounded-full opacity-50 button-shadows">
            <img src={icon} alt={title} />
          </div>

          <div className="flex flex-col h-[270px] justify-between md:gap-6">
            <div className="grid gap-2">
              <h1 className="gradient-text text-xl text-left -tracking-smaller font-medium ">
                {title}
              </h1>
              <div className="text-sm/[150%] text-[#909090]">{children}</div>
            </div>
            <h1
              className={cn(
                'pricing-text -tracking-smaller font-medium text-[40px]'
              )}
            >
              Custom
            </h1>
          </div>
        </div>

        <Button
          className="w-full h-fit"
          variant={first ? 'default' : 'outline'}
        >
          Contact Me
        </Button>

        <div className="pt-4 grid gap-2.5 border-t border-grey-4/60 border-dashed">
          {list.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={DoubleCheck} alt="double-check" />
              <p className="text-sm/[150%] text-[#909090]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </CardStroke>
  );
};
