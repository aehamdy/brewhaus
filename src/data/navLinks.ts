import { ROUTES } from "@/lib/routes";

export type NavLink = {
  id: number;
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  {
    id: 1,
    label: "Menu",
    href: ROUTES.menu,
  },
  {
    id: 2,
    label: "Locations",
    href: ROUTES.locations,
  },
  {
    id: 3,
    label: "About",
    href: ROUTES.about,
  },
  {
    id: 4,
    label: "News",
    href: ROUTES.news,
  },
];
