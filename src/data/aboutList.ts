import aboutItem1TopIcon from "@/assets/about/about-item-1-1.svg";
import aboutItem1BottomIcon from "@/assets/about/about-item-1-2.svg";
import aboutItem3TopIcon from "@/assets/about/about-item-2-1.svg";
import aboutItem3BottomIcon from "@/assets/about/about-item-2-2.svg";
import aboutItem5TopIcon from "@/assets/about/about-item-3-1.svg";
import aboutItem5BottomIcon from "@/assets/about/about-item-3-2.svg";
import aboutItem2Image from "@/assets/about/about-1.webp";
import aboutItem4Image from "@/assets/about/about-2.webp";
import aboutItem6Image from "@/assets/about/about-3.webp";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export type AboutStatItem = {
  id: number;
  type: "stat";
  number: string;
  title: string;
  topIcon: StaticImport;
  bottomIcon: StaticImport;
};

export type AboutImageItem = {
  id: number;
  type: "image";
  image: StaticImport;
};

export type AboutItem = AboutStatItem | AboutImageItem;

export const aboutList: AboutItem[] = [
  {
    id: 1,
    type: "stat",
    number: "10K+",
    title: "Happy Customers",
    topIcon: aboutItem1TopIcon,
    bottomIcon: aboutItem1BottomIcon,
  },
  {
    id: 2,
    type: "image",
    image: aboutItem2Image,
  },
  {
    id: 3,
    type: "stat",
    number: "4",
    title: "Cafés",
    topIcon: aboutItem3TopIcon,
    bottomIcon: aboutItem3BottomIcon,
  },
  {
    id: 4,
    type: "image",
    image: aboutItem4Image,
  },
  {
    id: 5,
    type: "stat",
    number: "20",
    title: "Products",
    topIcon: aboutItem5TopIcon,
    bottomIcon: aboutItem5BottomIcon,
  },
  {
    id: 6,
    type: "image",
    image: aboutItem6Image,
  },
];
