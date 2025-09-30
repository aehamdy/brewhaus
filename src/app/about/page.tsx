import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import MarqueeText from "@/components/common/MarqueeText";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import { aboutList } from "@/data/aboutList";
import { ROUTES } from "@/lib/routes";
import Image from "next/image";
import aboutImage from "@/assets/about/about.webp";
import { features } from "@/data/features";
import Heading from "@/components/common/Heading";
import OrderOnline from "@/home/OrderOnline";
import Vibes from "@/home/Vibes";

function page() {
  return (
    <section className="">
      <PageHero className="text-accent-highlight" background="dark">
        <div className="flex flex-col items-center gap-sm md:gap-base">
          <SectionTitle variant="hero">About Us</SectionTitle>

          <p className="text-medium tracking-wide">
            Learn who we are and what we brew for.
          </p>
        </div>
      </PageHero>
      <MarqueeText />

      <section className="pt-[104px] bg-surface-primary">
        <div className="space-y-[40px] lg:space-y-[80px] px-md lg:px-xl">
          <div className="flex flex-col items-center gap-lg">
            <Logo variant="alt" />

            <SectionTitle
              variant="secondary"
              dark
              className="md:w-8/10 lg:w-1/2"
            >
              Brewhaus is where flavor meets craft. From bean to cup, we focus
              on quality, speed, and simplicity – perfect for busy mornings or
              laid-back afternoons.
            </SectionTitle>

            <div className="flex flex-col md:flex-row md:justify-center gap-sm w-full">
              <Button
                href={ROUTES.locations}
                variant="primary"
                fullWidthOnMobile
              >
                Our Locations
              </Button>
              <Button href={ROUTES.news} variant="tertiary" fullWidthOnMobile>
                Our News
              </Button>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-base md:gap-md lg:max-h-[95dvh]">
            {aboutList.map((item) => (
              <li
                key={item.id}
                className="rounded-lg overflow-hidden lg:first:col-span-2 lg:last:col-span-2"
              >
                {item.type === "stat" ? (
                  <div className="flex flex-col justify-center lg:justify-between items-center gap-lg h-full p-md bg-brand-primary">
                    <div className="self-end w-10 h-10">
                      <Image
                        src={item.topIcon}
                        alt={`${item.title} icon`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col items-center font-calistoga text-accent-highlight">
                      <p className="text-[40px] lg:text-3xlarge">
                        {item.number}
                      </p>
                      <p className="text-large">{item.title}</p>
                    </div>

                    <div className="self-start w-10 h-10">
                      <Image
                        src={item.bottomIcon}
                        alt={`${item.title} icon`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full max-h-[264px] md:max-h-[332px] lg:max-h-auto overflow-hidden">
                    <Image
                      src={item.image}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pt-5xl bg-surface-primary">
        <div className="flex flex-col items-center gap-2xl">
          <SectionTitle variant="primary" dark>
            The Heart <br /> of Brewhaus
          </SectionTitle>

          <div className="space-y-md px-md md:px-xl">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-base md:gap-md">
              {features.map((feature) => (
                <li
                  key={feature.id}
                  className="bg-surface-secondary border border-subtle rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-sm py-lg px-md text-brand-secondary">
                    <div className="w-10 h-10">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-xs">
                      <Heading level={3} className="font-calistoga text-large">
                        {feature.title}
                      </Heading>

                      <p className="w-4/5 text-medium text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="h-[400px] md:h-[560px] lg:h-[720px] rounded-lg overflow-hidden">
              <Image
                src={aboutImage}
                alt="about-image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <Vibes />

        <OrderOnline />
      </section>
    </section>
  );
}

export default page;
