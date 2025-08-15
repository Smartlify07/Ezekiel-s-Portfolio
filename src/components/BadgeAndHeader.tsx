import Badge from '@/ui/badge';

const BadgeAndHeader = ({
  icon,
  alt,
  title,
  subtitle,
  badgeTitle,
}: {
  icon: string;
  alt: string;
  title: string;
  subtitle?: string;
  badgeTitle: string;
}) => {
  return (
    <div className="grid gap-4 font-geist place-items-center">
      <Badge
        shadowSize="small"
        className={'flex text-[#EDEDEB] items-center gap-2 opacity-50'}
      >
        <img src={icon} alt={alt} />
        {badgeTitle}
      </Badge>
      <div className="grid gap-4 place-items-center">
        <h1 className="text-[40px]/[52px] md:w-10/12 gradient-text text-center font-medium -tracking-smaller">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm/[150%] text-center text-[#909090]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default BadgeAndHeader;
