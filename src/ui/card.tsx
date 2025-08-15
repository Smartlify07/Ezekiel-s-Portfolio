import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'motion/react';
const Card = ({
  children,
  className,
  ...props
}: HTMLMotionProps<'div'> & React.ComponentProps<'div'>) => {
  return (
    <motion.div
      {...props}
      className={cn(
        'bg-dark-blue rounded-2xl shadow-[0px_0px_5.5px_rgba(86,86,119,0.25)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
