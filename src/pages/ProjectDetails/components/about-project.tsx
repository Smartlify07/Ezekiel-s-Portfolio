import Badge from '@/ui/badge';
import AboutIcon from '/public/assets/icons/shopping.svg';

export const AboutProjectSection = () => {
  return (
    <section className="flex flex-col font-geist gap-8">
      <Badge
        shadowSize="small"
        className="text-xl/[20px] flex items-center p-2.5 self-start text-grey-opaque font-medium gap-2 opacity-50"
      >
        <img src={AboutIcon} alt="about-icon" /> About the Project
      </Badge>

      <div className="grid gap-4">
        <h1 className="gradient-text -tracking-smaller font-medium text-[40px]/[52px]">
          Maxwell EV Charging
        </h1>
        <p className="text-sm/[150%] text-grey-9">
          is a smart, user-centric digital platform built to empower electric
          vehicle (EV) users with the ability to seamlessly locate, access,
          monitor, and manage EV charging stations in real time. Designed with
          both convenience and sustainability in mind, the platform offers a
          robust map-based interface for discovering nearby stations, detailed
          filtering by connector type, speed, and cost, live session tracking,
          secure wallet integration for hassle-free payments, and intelligent
          notifications to keep users updated on session progress. Whether
          you're a daily commuter, fleet manager, or eco-conscious traveler,
          Maxwell simplifies the entire EV charging journey through a clean,
          intuitive, and responsive user experience tailored for modern
          mobility.
        </p>
      </div>
    </section>
  );
};
