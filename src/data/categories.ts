import coffeeCategory from "@/assets/coffee-category.webp";
import coldDrinksCategory from "@/assets/cold-drinks-category.webp";
import bakeryCategory from "@/assets/bakery-category.webp";
import { ROUTES } from "@/lib/routes";
import { StaticImageData } from "next/image";

export type Category = {
  id: number;
  title: string;
  image: StaticImageData;
  link: string;
};

export const categories: Category[] = [
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
