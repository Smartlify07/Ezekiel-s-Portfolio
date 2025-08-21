import { AltArrowDown } from '@solar-icons/react';
import { useEffect, useRef, useState } from 'react';

type Option = { label: string; value: string };
type CustomSelectProps = {
  options: Option[];
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
  value: string;
};

const CustomSelect = ({
  options,
  placeholder,
  onChange,
  label,
  value,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedValue(option.value);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="cursor-pointer p-4 gradient-input text-xs text-[#636363] flex justify-between items-center"
        onClick={handleToggle}
      >
        <span>
          {selectedValue
            ? options.find((opt) => opt.value === selectedValue)?.label
            : placeholder}
        </span>
        <AltArrowDown size={16} />
      </div>

      {isOpen && (
        <ul className="absolute h-[200px] overflow-scroll scrollbar-hide w-full z-20 custom-select-dropdown rounded-2xl pb-3">
          <div className="border-b border-dashed w-full border-[rgba(76,76,76,0.50)] text-xs text-grey-9 font-geist font-medium pt-4 pr-3 pb-2 pl-3">
            {label || value}
          </div>
          {options.map((option) => (
            <li
              key={option.value}
              className="p-3 w-full cursor-pointer bg-[rgba(23,23,33,0.10)] font-medium custom-select-dropdown-text font-geist text-xs/[18px]"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
