import Button from "@/components/common/Button";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import whatsNewList from "@/data/whatsNew";
import { ROUTES } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

function WhatsNew() {
  return (
    <Section background="primary" border={true}>
      <div className="grid grid-cols-1 gap-2xl md:gap-3xl px-md lg:px-xl">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-md">
          <SectionTitle
            variant="primary"
            align="start"
            dark
            className="md:w-fit"
          >
            What&apos;s New At <br />
            Our Coffee Shop
          </SectionTitle>

          <Button href={ROUTES.news} className="w-full md:w-auto md:h-fit">
            View All
          </Button>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-xl lg:gap-md">
          {whatsNewList.map((item) => (
            <li key={item.id}>
              <Link
                href={`${ROUTES.news}/${item.id}`}
                className="flex flex-col gap-base"
              >
                <div className="h-[382px] lg:h-[280px] rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2xs px-2xs">
                  <p className="text-small text-brand-secondary">{item.date}</p>

                  <p className="w-1/2 lg:w-9/10 font-calistoga text-large text-brand-primary leading-6">
                    {item.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default WhatsNew;
