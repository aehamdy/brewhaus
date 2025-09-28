import uberEatsImage from "@/assets/delivery-methods/uber-eats.svg";
import grubHubImage from "@/assets/delivery-methods/grubub.svg";
import doorDashImage from "@/assets/delivery-methods/doordash.svg";
import { StaticImageData } from "next/image";

interface DeliveryMethod {
  id: number;
  title: string;
  link: string;
  image: StaticImageData;
}

const deliveryMethods: DeliveryMethod[] = [
  {
    id: 1,
    title: "Uber Eats",
    link: "https://ubereats.com",
    image: uberEatsImage,
  },
  {
    id: 2,
    title: "GrubHub",
    link: "https://grubhub.com",
    image: grubHubImage,
  },
  {
    id: 3,
    title: "DoorDash",
    link: "https://doorDash.com",
    image: doorDashImage,
  },
];

export default deliveryMethods;
