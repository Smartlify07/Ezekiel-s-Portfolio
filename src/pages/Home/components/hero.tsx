import { CloudDownload, Plain } from '@solar-icons/react';
import Button from '@/ui/button';
import Card from '@/ui/card';
import HeroImage from '@/../public/assets/images/hero-image.png';
import HeroImageLarge from '@/../public/assets/images/hero-image-large.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col bg-[#111119] rounded-4xl p-6 gap-8 md:flex-row">
      <div className="flex flex-col gap-8 md:gap-9 md:grow md:shrink-0 md:basis-0">
        <header>
          <h1 className="text-[40px]/[52px] font-geist font-medium tracking-[-0.88px] text-left gradient-text">
            I'm a Product Designer with 3 years of experience creating
            user-focused digital products for startups & enterprises.
          </h1>
        </header>

        <div className="flex items-center shrink-0 gap-4">
          <Button
            variant="default"
            className="flex shrink-0 items-center gap-2"
          >
            <Plain className="text-[#EDEDEB]" size={16} /> Let's talk
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 shrink-0"
          >
            <CloudDownload className="text-[#EDEDEB]" size={16} />
            Download Resume
          </Button>
        </div>
      </div>

      <Card className="flex md:w-[300px] overflow-hidden items-center shrink-0 justify-center h-[322px]">
        <picture>
          <source
            media="(min-width:768px)"
            className="w-full h-fit"
            srcSet={HeroImageLarge}
          ></source>
          <source media="(max-width:767px)" srcSet={HeroImage}></source>
          <img
            alt="Ezekiel Olayiwola using his laptop to work"
            src={HeroImage}
          />
        </picture>
      </Card>
    </section>
  );
};

export default HeroSection;
