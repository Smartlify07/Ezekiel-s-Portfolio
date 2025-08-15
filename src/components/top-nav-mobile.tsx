import { CloseCircle, HamburgerMenu } from '@solar-icons/react';
import Logo from '@/../public/assets/images/Logo.svg';

import { useState } from 'react';
import { Link } from 'react-router';
import { Behance, Dribbble, LinkedIn, Twitter } from './contact-icons';
import { BookACallButton } from './book-a-call-button';
import { LetsTalkButton } from './lets-talk-button';

export default function TopNavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="bg-[rgba(14,14,14,0.7)] fixed z-[1000] font-geist flex flex-col gap-4 md:hidden w-full px-4 backdrop-blur-[10px] top-0 rounded-b-2xl">
      <div className="flex flex-col gap-2">
        <LogoSection isOpen={isOpen} onToggle={() => toggle()} />
      </div>
      {isOpen && <BottomSection />}
    </nav>
  );
}

const LogoSection = ({
  onToggle,
  isOpen,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="flex items-center justify-between font-geist pt-2 border-b border-b-grey-4/60">
      <div className="flex items-center gap-6">
        <Link to={'/'} className="flex flex-col gap-1">
          <img
            src={Logo}
            alt="logo"
            className="aspect-[122/25] w-[122px] h-[25px]"
          />
          <span className="text-[10px] text-grey-9 font-medium font-geist">
            Designer, Researcher, and Creator
          </span>
        </Link>
        <div className="border-r border-l  available-slots border-dashed flex items-center gap-2 border-grey-9 py-4 px-[7px]">
          <div className="size-5 flex spots-wrapper items-center rounded-full justify-center bg-linear-[270deg,rgba(23,201,100,0.02)_2.08%,rgba(23,201,100,0.10)_50.96%,rgba(23,201,100,0.02)_97.92%]">
            <div className="bg-green-500 spots size-2.5 rounded-full"></div>
          </div>
          <span className="text-sm  -tracking-[0.45px] text-grey-9">
            2 spots left
          </span>
        </div>
      </div>

      {!isOpen ? (
        <HamburgerMenu onClick={onToggle} className="text-grey-9" size={16} />
      ) : (
        <CloseCircle onClick={onToggle} className="text-grey-9" size={16} />
      )}
    </div>
  );
};

const BottomSection = () => {
  const icons = [Dribbble, Behance, Twitter, LinkedIn];
  return (
    <div className="flex flex-col gap-6 pb-4">
      <div className="flex text-sm/[14px] items-center gap-2 text-grey-9">
        Connect with me at:
        <div className="flex items-center gap-0.5">
          {icons.map((Icon, i) => (
            <Icon key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <BookACallButton />
        <LetsTalkButton />
      </div>
    </div>
  );
};
