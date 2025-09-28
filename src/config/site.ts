import { StaticImageData } from "next/image";
import instagramImage from "@/assets/instagram.svg";
import facebookImage from "@/assets/facebook.svg";
import xImage from "@/assets/x.svg";

interface SiteConfig {
  name: string;
  slogan: string;
  contact: Contact;
  socials: Social[];
}
type Contact = {
  email: string;
  phone: string;
};
type Social = {
  id: number;
  title: string;
  href: string;
  image: StaticImageData;
};

export const siteConfig: SiteConfig = {
  name: "Brewhaus",
  slogan: "",

  contact: {
    email: "hello@bhaus.com",
    phone: "+1 (212) 555-0198",
  },

  socials: [
    {
      id: 1,
      title: "instagram",
      href: "https://www.instagram.com/",
      image: instagramImage,
    },
    {
      id: 2,
      title: "facebook",
      href: "https://www.faceboo.com/",
      image: facebookImage,
    },
    {
      id: 3,
      title: "x",
      href: "https://www.x.com/",
      image: xImage,
    },
  ],
};
