import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import { ROUTES } from "@/lib/routes";

function HeroSection() {
  return (
    <section className="min-h-dvh pt-[184px] bg-brand-primary">
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
    </section>
  );
}

export default HeroSection;
