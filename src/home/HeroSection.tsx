import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import { ROUTES } from "@/lib/routes";
import Image from "next/image";
import coffeeCupImage from "@/assets/coffee-cup.webp";

function HeroSection() {
  return (
    <section
      id="hero"
      className="h-dvh md:h-[95dvh] lg:h-[155dvh] space-y-2xl pt-[184px] bg-brand-primary overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center gap-lg px-md">
        <div className="flex flex-col items-center gap-sm text-accent-highlight text-center">
          <SectionTitle variant="hero">
            <div className="">Life Begins</div>
            <div className="">After Coffee</div>
          </SectionTitle>

          <p className="w-9/10 lg:w-full text-medium">
            Because great coffee is the start of something even greater.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-xs w-full">
          <Button
            type="link"
            href={ROUTES.menu}
            variant="secondary"
            fullWidthOnMobile
            className=""
          >
            Explore Menu
          </Button>

          <Button
            type="link"
            href={ROUTES.locations}
            fullWidthOnMobile
            className=""
          >
            Our Locations
          </Button>
        </div>
      </div>

      <div className="flex justify-center pt-lg md:pt-[95px] lg:pt-sm md:px-md lg:px-xl overflow-hidden">
        <div className="hidden md:flex md:max-w-[220px] lg:max-w-[346px] pt-4xl ">
          <Image
            src={coffeeCupImage}
            alt="Coffee Cup"
            className="w-full h-full object-cover -rotate-8"
          />
        </div>

        <div className="max-w-[335px] md:max-w-[300px] lg:max-w-[380px] ">
          <Image
            src={coffeeCupImage}
            alt="Coffee Cup"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden md:flex md:max-w-[220px] lg:max-w-[346px] pt-4xl ">
          <Image
            src={coffeeCupImage}
            alt="Coffee Cup"
            className="w-full h-full object-cover rotate-8"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
