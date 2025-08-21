import { CaseRoundMinimalistic, Cursor, User } from '@solar-icons/react';
import type { Icon } from '@solar-icons/react/lib/types';
import { Link, useLocation } from 'react-router';

export const NavbarMobile = () => {
  return (
    <nav className="bg-[rgb(14,14,14,0.7)] z-50 fixed w-11/12 justify-center self-center backdrop-blur-2xl bottom-4 flex items-center gap-4 md:hidden rounded-4xl border border-[rgba(76,76,76,0.6)] p-3.5">
      <NavLink to="/" Icon={CaseRoundMinimalistic} label="Projects" />
      <NavLink to="/services" Icon={Cursor} label="Services" />
      <NavLink to="/about" Icon={User} label="About" />
      <NavLink
        to="/mentorship"
        Icon={CaseRoundMinimalistic}
        label="Mentorship"
      />
    </nav>
  );
};

const NavLink = ({
  to,
  label,
  Icon,
}: {
  to: string;
  label: string;
  Icon: Icon;
}) => {
  const pathname = useLocation().pathname;

  return (
    <Link
      to={to}
      className={`grid gap-1 drop-shadow-2xl relative z-[1] font-geist place-items-center p-2 ${
        pathname === to ? 'navbar-active relative rounded-2xl' : ''
      }`}
    >
      <Icon
        weight="Outline"
        className={`size-4 drop-shadow-orange ${
          pathname === to ? 'text-[#EDEDEB]' : 'text-[#909090]'
        }`}
      />
      <span
        className={`text-sm ${
          pathname === to ? 'text-[#EDEDEB]' : 'text-[#909090]'
        }`}
      >
        {label}
      </span>
    </Link>
  );
};
