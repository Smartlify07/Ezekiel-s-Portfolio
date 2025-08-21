import { useState } from 'react';
import Button from '@/ui/button';
import { Input } from '@/ui/input';
import CustomSelect from '@/ui/select';
import { TextArea } from '@/ui/textarea';
import { Plain } from '@solar-icons/react';
import { Link } from 'react-router';

export const MessageSection = () => {
  return (
    <section className="p-4 bg-[#171721] rounded-2xl grid gap-4">
      <header className="grid gap-2">
        <h1 className="text-xl font-medium gradient-text -tracking-smaller">
          Send Me a Message
        </h1>
        <p className="text-sm/[150%] text-grey-9">
          Please fill out the form below with your query or message. I am
          committed to responding to all inquiries within 24 hours or sooner.
        </p>
      </header>
      <Form />
    </section>
  );
};

export const Form = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedWork, setSelectedWork] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      selectedPlan,
      selectedWork,
    });
  };

  return (
    <form className="flex flex-col font-geist gap-4" onSubmit={handleSubmit}>
      <div className="pt-3 flex flex-col gap-2.5 border-t border-dashed border-t-grey-4/50">
        <FormInput type="text" name="name" placeholder="What is your name?" />
        <FormInput
          type="email"
          name="email"
          placeholder="Your email for contact"
        />
        <FormInput type="tel" name="phone" placeholder="Phone number" />

        <FormSelect
          placeholder="Select work"
          value={selectedWork}
          onChange={setSelectedWork}
        />

        <FormTextArea name="message" placeholder="Write your message here" />

        <SelectPlan selectedPlan={selectedPlan} onChange={setSelectedPlan} />

        <div className="border-t border-dashed pt-6 border-[rgba(76,76,76,0.50)]">
          <Button variant="default" className="self-start" type="submit">
            <Plain size={16} />
            Send Email
          </Button>
        </div>
      </div>
    </form>
  );
};

const FormInput = ({
  type,
  name,
  placeholder,
}: {
  type: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      className="z-10 gradient-input text-[#636363] text-xs font-geist font-medium p-4 w-full"
    />
  );
};

const FormTextArea = ({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) => {
  return (
    <TextArea
      rows={5}
      cols={5}
      name={name}
      placeholder={placeholder}
      className="z-10 gradient-input text-[#636363] text-xs font-geist font-medium p-4 min-h-[115px] w-full"
    />
  );
};

const SelectPlan = ({
  selectedPlan,
  onChange,
}: {
  selectedPlan: string;
  onChange: (plan: string) => void;
}) => {
  return (
    <div className="grid gap-1">
      <div className="flex items-center gap-0.5">
        <p className="text-grey-9 text-sm/[150%] font-geist">
          Which plan are you interested in?
        </p>
        <Link
          to={'/services'}
          className="text-sm/[150%] text-grey-opaque font-medium"
        >
          {' '}
          Learn more
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
        <RadioInput
          selectedPlan={selectedPlan}
          plan="Full Time UI/UX design"
          onChange={onChange}
        />
        <RadioInput
          selectedPlan={selectedPlan}
          plan="Framer Design"
          onChange={onChange}
        />
        <RadioInput
          selectedPlan={selectedPlan}
          plan="Freelance"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const RadioInput = ({
  selectedPlan,
  plan,
  onChange,
}: {
  selectedPlan: string;
  plan: string;
  onChange: (plan: string) => void;
}) => {
  return (
    <label className="radio-wrapper">
      <input
        type="radio"
        name="option"
        value={plan}
        checked={selectedPlan === plan}
        onChange={() => onChange(plan)}
        className="radio-input"
        style={{ display: 'none' }}
      />

      <div className="radio-outer">
        <div className="radio-gap">
          <div className="radio-inner"></div>
        </div>
      </div>

      <span className="text-grey-9 text-sm/[150%] font-geist">{plan}</span>
    </label>
  );
};

const FormSelect = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}) => {
  const options = [
    { label: 'UI/UX Design', value: 'ui_ux_design' },
    { label: 'Brand Design', value: 'brand_design' },
    { label: 'UX Research', value: 'ux_research' },
    { label: 'Product Design', value: 'product_design' },
    { label: 'No-Code Development', value: 'no_code_development' },
    {
      label: 'Collaboration & Consulting',
      value: 'collaboration_and_consulting',
    },
    { label: 'Others', value: 'others' },
  ];

  return (
    <CustomSelect
      label="Select project type"
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={(val) => onChange(val)}
    />
  );
};
