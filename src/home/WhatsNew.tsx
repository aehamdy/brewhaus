import Button from "@/components/common/Button";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import WhatsNewCard from "@/components/common/WhatsNewCard";
import whatsNewList from "@/data/whatsNew";
import { ROUTES } from "@/lib/routes";

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
          {whatsNewList.slice(0, 3).map((item) => (
            <li key={item.id}>
              <WhatsNewCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default WhatsNew;
