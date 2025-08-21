import BadgeAndHeader from '@/components/BadgeAndHeader';
import FaqIcon from '@/../public/assets/icons/Question Circle.svg';
import DoubleArrowDown from '@/../public/assets/icons/DoubleArrowDown.svg';
import Card from '@/ui/card';
import { faqs, type Faq } from '@/lib/constants';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { CustomQuestion } from './custom-question';

export const FaqSection = ({
  showCustomQuestion,
}: {
  showCustomQuestion: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="px-4 md:px-6 flex flex-col gap-[46px]">
      <BadgeAndHeader
        title="Everything you need to know before we start"
        badgeTitle="Frequently Asked Questions"
        alt="faq-icon"
        icon={FaqIcon}
      />

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div
          className={cn(
            'grid gap-4 w-full',
            showCustomQuestion ? 'md:w-8/12' : 'w-full'
          )}
        >
          {faqs.map((faq, index) => (
            <FaqCard
              index={index}
              toggle={toggle}
              active={activeIndex === index}
              {...faq}
              key={index}
            />
          ))}
        </div>
        {showCustomQuestion && <CustomQuestion />}
      </div>
    </section>
  );
};

const FaqCard = ({
  title,
  subtitle,
  active,
  toggle,
  index,
}: {
  active: boolean;
  toggle: (index: number) => void;
  index: number;
} & Faq) => {
  return (
    <Card
      onClick={() => toggle(index)}
      className="shadow-none cursor-pointer font-geist flex flex-col gap-4 items-start p-4 justify-between bg-[#171721]"
    >
      <div className="flex items-center w-full justify-between">
        <h1 className="gradient-text text-xl -tracking-smaller font-medium">
          {title}
        </h1>
        <img
          onClick={() => toggle(index)}
          className={cn(
            'shrink-0 transition-transform duration-75',
            active ? 'rotate-180' : 'rotate-0'
          )}
          src={DoubleArrowDown}
        />
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: active ? 'auto' : 0, opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            exit={{ height: 0 }}
            className="border-t border-t-grey-4/50 border-dashed overflow-hidden pt-3  text-grey-9 text-sm/[150%]"
          >
            {subtitle}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
