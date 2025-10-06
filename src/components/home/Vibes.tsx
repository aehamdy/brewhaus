import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import vibesList from "@/data/vibeList";
import Image from "next/image";
import vibesImage1 from "@/assets/vibes/vibe-image-1.webp";
import vibesImage2 from "@/assets/vibes/vibe-image-2.webp";
import vibesImage3 from "@/assets/vibes/vibe-image-3.webp";

function Vibes() {
  return (
    <Section background="primary" border={false}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4xl px-md md:px-xl text-brand-primary">
        <div className="flex flex-col gap-lg lg:gap-4xl">
          <div className="flex flex-col gap-sm">
            <SectionTitle variant="primary" align="start" dark>
              Good Vibes.
              <br />
              Great Coffee.
            </SectionTitle>

            <p className="text-medium md:w-3/5 lg:w-4/5">
              At Brewhaus, we serve great coffee and fresh pastries with care
              and passion, creating a warm, cozy space that feels like home.
            </p>
          </div>

          <div className="">
            <ul className="relative grid grid-cols-1 md:grid-cols-2 gap-sm md:before:absolute md:before:inset-0 md:before:w-px md:before:bg-subtle md:before:start-1/2 md:after:absolute md:after:inset-0 md:after:w-full md:after:h-px md:after:bg-subtle md:after:top-1/2">
              {vibesList.map((vibe) => (
                <li
                  key={vibe.id}
                  className="py-md px-5 md:p-md border-b last:border-b-0 md:border-none border-subtle"
                >
                  <div className="flex md:flex-col items-center gap-5">
                    <div className="w-12 h-12 p-1.5 bg-brand-primary rounded-full overflow-hidden">
                      <Image
                        src={vibe.image}
                        alt={vibe.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Heading
                      level={3}
                      className="md:w-1/2 lg:w-7/10 font-calistoga text-large text-center"
                    >
                      {vibe.title}
                    </Heading>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-[2fr_1fr_1fr] md:grid-cols-2 md:grid-rows-2 gap-base md:gap-md h-[1032px] md:h-[688px] lg:h-[609px]">
          <div className="rounded-lg overflow-hidden md:row-span-2">
            <Image
              src={vibesImage1}
              alt="Vibes Image 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src={vibesImage2}
              alt="Vibes Image 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src={vibesImage3}
              alt="Vibes Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Vibes;
