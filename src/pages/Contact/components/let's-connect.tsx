import Card from '@/ui/card';
import { Letter, Phone } from '@solar-icons/react';
import type { Icon } from '@solar-icons/react/lib/types';
import DribbleIcon from '@/../public/assets/icons/Dribbble.svg';
import BehanceIcon from '@/../public/assets/icons/Behance.svg';
import Twitter from '@/../public/assets/icons/Twitter.svg';
import LinkedIn from '@/../public/assets/icons/LinkedIn.svg';
import Sixself from '@/../public/assets/icons/sixself.svg';
import { CONTACT_INFO } from '@/lib/contact-info';

const contact = [
  {
    Icon: Phone,
    text: CONTACT_INFO.phone,
  },
  {
    Icon: Letter,
    text: CONTACT_INFO.email,
  },
];
const socialIcons = [
  { title: 'Dribble', icon: DribbleIcon },
  { title: 'Behance', icon: BehanceIcon },
  { title: 'Twitter', icon: Twitter },
  { title: 'LinkedIn', icon: LinkedIn },
  { title: 'Sixself', icon: Sixself },
];

export const ConnectSection = () => {
  return (
    <section className="grid gap-8">
      <header className="grid gap-4">
        <h1 className="gradient-text font-medium -tracking-smaller text-xl">
          Let’s Connect!
        </h1>
        <p className="text-sm/[150%] text-grey-9">
          Your thoughts, questions, and feedback are crucial for me to enhance
          and refine my work. Whether you are considering working with me, have
          encountered an issue, wish to offer a suggestion, or simply want to
          talk about your experience, I am here to listen attentively. Please do
          not hesitate to reach out using the contact form on the right or
          through any other contact methods provided. Let’s partner together to
          create an exceptional experience for your design project.
        </p>
      </header>

      <div className="grid gap-2">
        {contact.map((item, i) => (
          <SocialCard {...item} key={i} />
        ))}
        <SocialCard>
          {socialIcons.map((icon) => (
            <img
              className="p-2.5"
              src={icon.icon}
              key={icon.title}
              alt={icon.title}
            />
          ))}
        </SocialCard>
      </div>
    </section>
  );
};

const SocialCard = ({
  Icon,
  text,
  children,
}: {
  Icon?: Icon | string;
  text?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Card className="p-4 shadow-none bg-[#171721] flex items-center gap-0.5">
      {Icon && (
        <div className="flex text-grey-9 text-sm items-center gap-2">
          <Icon size={16} />
          <span>{text}</span>
        </div>
      )}

      {children}
    </Card>
  );
};
