import ProfileImage from '@/../public/assets/images/about/Profile Image.png';
import Icon from '@/../public/assets/icons/About Me Button.svg';
import Badge from '@/ui/badge';

export const AboutTopSection = () => {
  return (
    <div className="w-full relative">
      <div className="flex items-center w-full overflow-hidden md:overflow-visible  top-10 min-h-[221px] absolute gap-11 px-4 md:justify-between">
        <Badge
          shadowSize="small"
          className="text-grey-opaque mt-[calc(-50%+10px)] md:-mt-40 shrink-0 text-xl/[20px] opacity-50 font-medium flex items-center gap-2"
        >
          <img src={Icon} alt="user-icon" /> About Me
        </Badge>
        <div className="absolute w-[242px] md:w-[300px] right-[calc(-3%+10px)]  md:mt-0 overflow-hidden md:top-[calc(6%+10px)] md:right-[calc(1%+10px)]">
          <img
            src={ProfileImage}
            alt={'Brain looking thing'}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
