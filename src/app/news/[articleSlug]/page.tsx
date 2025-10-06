import NotFound from "@/app/not-found";
import Button from "@/components/common/Button";
import Heading from "@/components/common/Heading";
import PageHero from "@/components/common/PageHero";
import WhatsNewCard from "@/components/common/WhatsNewCard";
import NewsArticleContent from "@/components/NewsArticleContent";
import { siteConfig } from "@/config/site";
import whatsNewList from "@/data/whatsNew";
import { ROUTES } from "@/lib/routes";
import { Metadata } from "next";

interface NewsArticlePageProps {
  params: { articleSlug: string };
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { articleSlug } = await params;
  const article = whatsNewList.find((article) => article.slug === articleSlug);

  if (!article) {
    return {
      title: `Article Not Found - ${siteConfig.name}`,
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} - ${siteConfig.name}`,
    description: `Read the latest updates from ${siteConfig.name}.`,
  };
}

async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { articleSlug } = await params;

  const article = whatsNewList.find((article) => article.slug === articleSlug);

  if (!article) {
    console.log("article not found");
    return NotFound();
  }

  return (
    <main className="bg-surface-primary/85">
      <PageHero className="text-accent-highlight" background="dark">
        <div className=""></div>
      </PageHero>

      <div className="space-y-20">
        <div className="lg:max-w-[720px] -mt-40 mx-md lg:mx-auto">
          <NewsArticleContent article={article} />
        </div>

        <section className="lg:h-dvh py-[104px] lg:py-5xl bg-surface-secondary border-t border-t-subtle">
          <div className="flex flex-col gap-2xl px-md md:px-xl lg:px-[100px]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-md">
              <Heading
                level={2}
                className="font-calistoga text-2xl md:text-xlarge text-brand-primary"
              >
                More to Explore
              </Heading>

              <Button href={ROUTES.news} variant="primary" fullWidthOnMobile>
                Explore News
              </Button>
            </div>

            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
              {whatsNewList.slice(0, 3).map((article) => (
                <li key={article.id}>
                  <WhatsNewCard item={article} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NewsArticlePage;
