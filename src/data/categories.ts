import coffeeCategory from "@/assets/coffee-category.webp";
import coldDrinksCategory from "@/assets/cold-drinks-category.webp";
import bakeryCategory from "@/assets/bakery-category.webp";
import { ROUTES } from "@/lib/routes";
import { StaticImageData } from "next/image";

export type Category = {
  id: number;
  slug: string;
  title: string;
  image: StaticImageData;
  link: string;
};

export const categories: Category[] = [
  {
    id: 1,
    slug: "coffee",
    title: "Coffee",
    image: coffeeCategory,
    link: `${ROUTES.menu}#coffee`,
  },
  {
    id: 2,
    slug: "cold-drinks",
    title: "Cold Drinks",
    image: coldDrinksCategory,
    link: `${ROUTES.menu}#cold-drinks`,
  },
  {
    id: 3,
    slug: "bakery",
    title: "Bakery",
    image: bakeryCategory,
    link: `${ROUTES.menu}#bakery`,
  },
];
