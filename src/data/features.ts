import { StaticImageData } from "next/image";
import feature1Image from "@/assets/about/feat-1.svg";
import feature2Image from "@/assets/about/feat-2.svg";
import feature3Image from "@/assets/about/feat-3.svg";

type featureItem = {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
};

export const features: featureItem[] = [
  {
    id: 1,
    icon: feature1Image,
    title: "Quality First",
    description: "We never compromise on flavor or freshness",
  },
  {
    id: 2,
    icon: feature2Image,
    title: "Warm Hospitality",
    description: "Everyone is welcome here, no matter the reason or time",
  },
  {
    id: 3,
    icon: feature3Image,
    title: "Sustainability",
    description: "Ethically sources beans and eco-conscious",
  },
];
