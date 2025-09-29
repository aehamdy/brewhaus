import { siteConfig } from "@/config/site";

interface Contact {
  id: number;
  title: string;
  contact: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    title: "General Inquiries",
    contact: siteConfig.contact.phone,
  },
  {
    id: 2,
    title: "Customer Support",
    contact: siteConfig.contact.customerSupport,
  },
  {
    id: 3,
    title: "General Email",
    contact: siteConfig.contact.email,
  },
  {
    id: 4,
    title: "Support Email",
    contact: siteConfig.contact.supportEmail,
  },
];

export default contacts;
