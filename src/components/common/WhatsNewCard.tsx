import { ROUTES } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
import { WhatsNew } from "@/data/whatsNew";
import Heading from "@/components/common/Heading";

type Props = {
  item: WhatsNew;
};

function WhatsNewCard({ item }: Props) {
  return (
    <article className="group">
      <Link
        href={`${ROUTES.news}/${item.slug}`}
        className="flex flex-col gap-base"
      >
        <div className="h-[382px] md:h-[440px] lg:h-[280px] rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-slow"
          />
        </div>

        <div className="flex flex-col gap-2xs px-2xs">
          <p className="text-small text-brand-secondary">{item.date}</p>

          <Heading
            level={3}
            className="lg:w-9/10 font-calistoga text-large text-brand-primary group-hover:text-brand-secondary leading-6"
          >
            {item.title}
          </Heading>
        </div>
      </Link>
    </article>
  );
}

export default WhatsNewCard;
