import SectionTitle from "@/components/common/SectionTitle";
import coffeeCategory from "@/assets/coffee-category.webp";
import coldDrinksCategory from "@/assets/cold-drinks-category.webp";
import bakeryCategory from "@/assets/bakery-category.webp";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";

type Category = {
  id: number;
  title: string;
  image: StaticImageData;
  link: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: "Coffee",
    image: coffeeCategory,
    link: `${ROUTES.menu}#coffee`,
  },
  {
    id: 2,
    title: "Cold Drinks",
    image: coldDrinksCategory,
    link: `${ROUTES.menu}#cold-drinks`,
  },
  {
    id: 3,
    title: "Bakery",
    image: bakeryCategory,
    link: `${ROUTES.menu}#bakery`,
  },
];

function Categories() {
  return (
    <Section background="primary" border>
      <div className="flex flex-col gap-[48px] md:gap-[80px]">
        <div className="flex flex-col items-center gap-2xl md:gap-4xl">
          <SectionTitle variant="primary" align="center" dark>
            <div className="">Find and Get</div>
            <div className="">What You Love</div>
          </SectionTitle>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-lg md:gap-md px-xl">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={category.link}
                className="group flex md:flex-col items-center gap-lg px-large lg:px-2xl"
              >
                <div className="w-[160px] md:w-[173px] lg:w-[288px] h-[160px] md:h-[173px] lg:h-[288px] bg-brand-primary rounded-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={200}
                    height={200}
                    className="w-full h-full group-hover:scale-105 object-cover transition-all duration-slowest"
                  />
                </div>

                <Heading
                  level={3}
                  className="font-calistoga text-2xl md:text-xlarge text-brand-primary group-hover:text-brand-secondary transition-all duration-normal"
                >
                  {category.title}
                </Heading>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Categories;
