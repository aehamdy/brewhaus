import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import { categories } from "@/data/categories";
import { siteConfig } from "@/config/site";
import Image from "next/image";

function FooterNav() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-[28px]">
      <div className="flex-1 flex md:flex-col justify-between gap-[20px] w-full">
        <h3 className="flex-1 font-cabin-condensed">Main</h3>

        <ul className="flex-1 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex justify-between md:flex-col gap-[20px] w-full">
        <h3 className="flex-1 font-cabin-condensed">Categories</h3>

        <ul className="flex-1 flex flex-col gap-1">
          {categories.map((link) => (
            <li key={link.id}>
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex justify-between md:flex-col gap-[20px] w-full">
        <h3 className="flex-1 font-cabin-condensed">Follow Us</h3>

        <ul className="flex-1 flex items-center gap-2">
          {siteConfig.socials.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="flex items-center justify-center w-10 h-10 p-2 bg-accent-highlight hover:bg-accent-highlight/80 rounded-full duration-normal"
              >
                <Image
                  src={link.image}
                  alt={link.title}
                  className="w-full h-full object-cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterNav;
