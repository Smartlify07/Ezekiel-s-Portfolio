import { cn } from '@/lib/utils';

const Badge = ({
  children,
  className,
  shadows = true,
  shadowSize = 'large',
}: {
  children: React.ReactNode;
  className?: string;
  shadows?: boolean;
  shadowSize?: 'small' | 'medium' | 'large';
}) => {
  return (
    <div
      className={cn(
        'rounded-[10px] text-sm/[20px] px-2 py-1.5 font-geist bg-badge-primary',
        shadows && 'button-shadows',
        shadowSize === 'large' ? 'button-shadows' : 'badge-shadow',

        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
