import vibeIcon1 from "@/assets/vibes/vibe-icon-1.svg";
import vibeIcon2 from "@/assets/vibes/vibe-icon-2.svg";
import vibeIcon3 from "@/assets/vibes/vibe-icon-3.svg";
import vibeIcon4 from "@/assets/vibes/vibe-icon-4.svg";
import { StaticImageData } from "next/image";

type vibeItem = {
  id: number;
  title: string;
  image: StaticImageData;
};

const vibesList: vibeItem[] = [
  {
    id: 1,
    title: "Great Coffee, Tast Sips",
    image: vibeIcon1,
  },
  {
    id: 2,
    title: "Warm, Cozy Atmosphere",
    image: vibeIcon2,
  },
  {
    id: 3,
    title: "Speedy Service with a smile",
    image: vibeIcon3,
  },
  {
    id: 4,
    title: "Local & Sustainable",
    image: vibeIcon4,
  },
];

export default vibesList;
