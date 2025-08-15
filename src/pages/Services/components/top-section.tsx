import Badge from '@/ui/badge';
import Icon from '@/../public/assets/icons/selected-works.svg';
import { motion } from 'motion/react';
import TypeIt from 'typeit-react';

export const TopSection = () => {
  const texts = [
    'UI/UX Design',
    'Branding and visual design',
    'UX Research',
    'Product Design',
    'No-Code Development',
    'Collaboration & Consulting',
  ];

  return (
    <section className="flex flex-col gap-6 px-4 md:px-0">
      <Badge
        shadowSize="small"
        className="text-[#EDEDEB] text-xl/[20px] px-2 py-2.5 opacity-50 font-medium flex gap-2 items-center font-geist self-start"
      >
        <img src={Icon} alt="selected-works" className="shrink-0" /> Design
        Services
      </Badge>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <h1 className="text-3xl font-medium tracking-1 text-[40px] text-[#909090] font-geist">
            I specialize in
          </h1>
          <div className="relative w-fit ">
            <TypeIt
              as="h1"
              className="text-3xl font-medium font-geist services-text-gradient tracking-1 text-[40px] text"
              getBeforeInit={(instance) => {
                instance
                  .type(texts[0])
                  .pause(2500)
                  .delete(texts[0].length)
                  .pause(500)
                  .type(texts[1])
                  .pause(2500)
                  .delete(texts[1].length)
                  .pause(500)
                  .type(texts[2])
                  .pause(2500)
                  .delete(texts[2].length)
                  .pause(500)
                  .type(texts[3])
                  .pause(2500)
                  .delete(texts[3].length)
                  .pause(500)
                  .type(texts[4])
                  .pause(2500)
                  .delete(texts[4].length)
                  .pause(500)
                  .type(texts[5])
                  .pause(2500)
                  .delete(texts[5].length)
                  .pause(500);

                return instance;
              }}
              options={{
                loop: true,
                speed: 100,
              }}
            />
          </div>
        </div>
        <motion.p className="text-sm/[150%] font-normal font-geist text-[#909090]">
          Explore my suite of UI/UX, brand, and no-code design services—crafted
          to elevate your brand.
        </motion.p>
      </div>
    </section>
  );
};
