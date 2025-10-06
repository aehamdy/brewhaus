import Image from "next/image";
import Logo from "@/components/common/Logo";
import phoneImage from "@/assets/phone.svg";
import envelopImage from "@/assets/envelop.svg";
import { siteConfig } from "@/config/site";

function FooterInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      <div className="flex lg:flex-col items-center lg:items-start gap-[20px] lg:gap-[28px]">
        <div className="w-fit">
          <Logo />
        </div>
        <p className="text-large leading-6">
          Life Begins <br /> After Coffee
        </p>
      </div>

      <div className="md:col-start-3 md:col-end-4 lg:col-start-1">
        <div className="flex items-center gap-3">
          <Image src={phoneImage} alt="Phone" />
          <a href={`tel:${siteConfig.contact.phone}`}>
            {siteConfig.contact.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Image src={envelopImage} alt="mail" />
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
