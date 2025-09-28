import { siteConfig } from "@/config/site";
import Link from "next/link";

function FooterBottomBar() {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-center py-sm px-xl lg:px-4xl text-accent-highlight bg-brand-primary-muted">
      <div className="flex justify-between w-full text-small">
        <div className="flex items-center">
          {year} &copy; {siteConfig.name}
        </div>

        <Link href="#hero">Scroll to top</Link>
      </div>
    </div>
  );
}

export default FooterBottomBar;
