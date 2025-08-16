import { CloudDownload } from '@solar-icons/react';
import Button from '@/ui/button';
import Ezekiel from '@/../public/assets/images/about/Ezekiel.png';
import { LetsTalkButton } from '@/components/lets-talk-button';

export const AboutContainer = () => {
  return (
    <section className="bg-[#111119] flex flex-col gap-8 rounded-4xl px-4 py-6  md:p-6 md:flex-row">
      <div className="flex flex-col md:w-8/12 gap-9">
        <StorySection />
        <div className="flex items-center shrink-0 gap-4">
          <LetsTalkButton />
          <Button
            variant="outline"
            className="inline-flex font-medium text-grey-opaque shrink-0 items-center gap-2"
          >
            <CloudDownload size={16} />
            Download Resume
          </Button>
        </div>
      </div>

      <div className="inline-block rounded-2xl md:w-4/12 p-[2px] drop-shadow-[0_0px_5.5px_var(--color-card-shadow)] card-gradient">
        <img
          src={Ezekiel}
          alt="Ezekiel"
          className="w-full h-[663px] md:h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="gradient-text font-medium font-geist -tracking-smaller text-[40px]">
        I'm an explorer who loves learning how things work and turning ideas
        into intuitive, impactful digital experiences.
      </h1>
      <p className="text-grey-9 text-sm/[150%] font-normal font-geist">
        My name is{' '}
        <span className="font-bold text-grey-opaque">Ezekiel Olayiwola</span>,{' '}
        professionally known as
        <span className="font-bold text-grey-opaque"> Ezeydesign</span> .
        <br />
        My journey into tech began in 2014, not in a classroom, but on a mobile
        phone, where I created my very first logo using the{' '}
        <span className="font-bold">PixGrid</span> app. That early spark of
        curiosity grew into a passion for designing logos and graphics for small
        businesses. Over time, I transitioned into the world of UI/UX design,
        where I've spent the last 3+ years crafting intuitive, user-centered
        digital experiences for startups, scale-ups, and brands across a range
        of industries.
        <br />
        <br />
        Today, I work as a UI/UX Designer, Brand Designer, and No-Code Builder,
        blending strategic thinking with creative execution to help companies
        not just look good, but solve real problems through thoughtful design.
        <br />
        When I’m not designing, you’ll find me reading fiction, watching
        documentaries, exploring new tech, gaming on my console, or sharing
        insights with my growing community across{' '}
        <span className="text-grey-opaque">
          X (formerly Twitter), YouTube, LinkedIn
        </span>
        , and <span className="text-grey-opaque">Facebook</span>.
      </p>
    </div>
  );
};
