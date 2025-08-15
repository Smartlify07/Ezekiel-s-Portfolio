import ProfileImage from '@/../public/assets/images/about/Profile Image.png';
import Icon from '@/../public/assets/icons/About Me Button.svg';
import Badge from '@/ui/badge';

export const AboutTopSection = () => {
  return (
    <div className="flex items-center md:w-full overflow-hidden -top-10 absolute gap-11 px-4 md:justify-between">
      <Badge
        shadowSize="small"
        className="text-grey-opaque -mt-10 md:-mt-40 shrink-0 text-xl/[20px] opacity-50 font-medium flex items-center gap-2"
      >
        <img src={Icon} alt="user-icon" /> About Me
      </Badge>
      <div className="w-[241px] md:w-[300px] mt-10 md:mt-0 overflow-hidden md:right-0">
        <img
          src={ProfileImage}
          alt={'Brain looking thing'}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};
