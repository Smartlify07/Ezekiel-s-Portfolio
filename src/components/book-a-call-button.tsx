import Button from '@/ui/button';
import { Calendar } from '@solar-icons/react';

export const BookACallButton = () => {
  return (
    <Button
      onClick={() => {
        window.open('https://cal.com/ezeydesign', '_blank');
      }}
      variant="outline"
      className="flex items-center gap-2"
    >
      <Calendar className="text-[#ededeb]" />
      Book a Call
    </Button>
  );
};
