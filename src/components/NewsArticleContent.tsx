import Heading from "@/components/common/Heading";
import { ROUTES } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
import { WhatsNew } from "@/data/whatsNew";

interface NewsArticleContentProps {
  article: WhatsNew;
}

function NewsArticleContent({ article }: NewsArticleContentProps) {
  return (
    <article className="text-base text-brand-primary bg-surface-primary border border-subtle rounded-lg overflow-hidden">
      <div className="flex py-base px-md bg-surface-secondary border-b border-b-subtle">
        <Link href={ROUTES.news} className="flex items-center gap-2">
          <span className="">&lt; </span>Back to News
        </Link>
      </div>

      <div className="">
        <div className="flex flex-col gap-base md:w-3/4 py-7 px-5">
          <p className="text-small text-brand-secondary">{article.date}</p>

          <div className="flex flex-col gap-sm">
            <Heading
              level={1}
              className="font-calistoga text-[28px] md:text-xlarge leading-8"
            >
              {article.title}
            </Heading>

            <p className="text-base leading-5">{article.description}</p>
          </div>
        </div>

        <div className="flex justify-center items-center py-7 px-5 bg-surface-secondary">
          <div className="w-[342px] md:w-[640px] lg:w-[672px] h-[342px] md:h-[440px] rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[14px] py-7 px-5">
          {article.content.map((item) => (
            <div key={item.id} className="">
              <Heading level={2} className="font-calistoga text-[24px]">
                {item.title}
              </Heading>

              <div className="">
                {item.description.map((description) => (
                  <p key={description} className="mt-[14px]">
                    {description}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 bg-surface-secondary border-t border-t-subtle">
        <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth overscroll-contain snap-x px-2 [-webkit-overflow-scrolling:touch] [touch-action:pan-x]">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 snap-start py-1 px-2 bg-surface-secondary border border-subtle rounded-[6px]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default NewsArticleContent;
