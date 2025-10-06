import Button from "@/components/common/Button";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import nearbyCafesList from "@/data/nearbyCafes";
import Image from "next/image";
import mapImage from "@/assets/map.svg";
import Heading from "@/components/common/Heading";
import contacts from "@/data/contacts";

interface NearbyProps {
  title?: boolean;
}

function Nearby({ title = true }: NearbyProps) {
  return (
    <Section
      background="highlight"
      border={false}
      className="text-accent-highlight"
    >
      <div className="grid grid-cols-1 gap-2xl lg:gap-3xl px-md md:px-xl">
        {title && (
          <div className="flex flex-col items-center gap-3">
            <SectionTitle variant="primary" align="center">
              Nearby Cafés
            </SectionTitle>

            <p className="">
              Find a Brewhaus nearby and stop in for your favorite drink.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-base md:gap-md">
          <ul className="lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-base md:gap-md">
            {nearbyCafesList.map((cafe) => (
              <li
                key={cafe.id}
                className="flex flex-col gap-5 p-md text-brand-primary bg-surface-primary rounded-lg overflow-hidden"
              >
                <div className="flex flex-col gap-base">
                  <p className="text-brand-secondary">{cafe.state}</p>

                  <div className="flex flex-col gap-1.5 font-calistoga">
                    <div className="">
                      <p className="">{cafe.address},</p>
                      <p className="">{cafe.city}</p>
                    </div>

                    <p className="text-brand-secondary">
                      Open daily: {cafe.timings}
                    </p>
                  </div>
                </div>

                <Button
                  href={cafe.location}
                  variant="primary"
                  size="lg"
                  className="w-full py-xs px-base"
                >
                  Get Directions
                </Button>
              </li>
            ))}
          </ul>

          <div className="lg:order-1 rounded-lg overflow-hidden">
            <Image
              src={mapImage}
              alt="Map"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-xl mt-xl font-calistoga">
          <Heading level={3} className="text-xlarge">
            Need Help?
          </Heading>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-base md:gap-md w-full">
            {contacts.map((contact) => (
              <li
                key={contact.id}
                className="flex flex-col gap-2 p-md bg-brand-primary-muted rounded-lg"
              >
                <p className="font-cabin-condensed text-small">
                  {contact.title}
                </p>
                <p className="text-large">{contact.contact}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Nearby;
