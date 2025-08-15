import Badge from '@/ui/badge';
import BuildingIcon from '@/../public/assets/icons/Buildings 3.svg';
import { industries } from '@/lib/constants';
import { CallToActionSection } from '@/pages/About/components/cta';
export const IndustriesExceled = () => {
  return (
    <section className="px-4 md:px-0">
      <div className="gap-11 flex flex-col">
        <TopSection />

        <div className="grid gap-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <IndustryCard {...item} key={index} />
            ))}
          </div>
          <div className="w-full justify-self-center md:w-11/12">
            <CallToActionSection
              title="Your industry not on the list?"
              subtitle="Contact me or check my portfolio since I have clients from various industries."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TopSection = () => {
  return (
    <section className="flex flex-col gap-4 font-geist">
      <Badge
        shadowSize="small"
        className="font-medium self-center flex items-center gap-2 opacity-50 text-[#EDEDEB]"
      >
        <img src={BuildingIcon} /> Industries
      </Badge>
      <h1 className="text-[40px] text-center tracking-[-0.88px] font-medium gradient-text">
        Industries Where Excellence Has Been Created
      </h1>
      <p className="text-sm/[150%] font-normal text-center text-[#909090]">
        I aspire to be the UI/UX designer that helps your company excel in the
        diverse digital ecosystem, where businesses from various industries
        coexist. My goal is to create a compelling brand identity that fosters
        maximum engagement and enables your company to thrive in this dynamic
        environment.
      </p>
    </section>
  );
};

const IndustryCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#111119] font-geist rounded-4xl gap-4 p-6">
      <div className="size-[100px]">
        <img src={icon} alt={title} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-medium tracking-[-0.88px] gradient-text">
          {title}
        </h1>
        <p className="text-[#909090] text-sm/[150%]">{description}</p>
      </div>
    </div>
  );
};
