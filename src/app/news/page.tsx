import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import WhatsNewCard from "@/components/common/WhatsNewCard";
import whatsNew from "@/data/whatsNew";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} - News`,
  description:
    "Stay up to date with Brewhaus — new openings, seasonal drinks, events, and stories from our coffee community.",
};

function page() {
  return (
    <main className="bg-surface-primary">
      <PageHero className="text-brand-primary" background="light">
        <div className="flex flex-col items-center gap-sm">
          <SectionTitle variant="hero" dark>
            News
          </SectionTitle>

          <p className="text-medium tracking-wide">
            Fresh updates and announcements.
          </p>
        </div>
      </PageHero>

      <div className="pb-[104px] px-md md:px-xl lg:px-4xl">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {whatsNew.map((item) => (
            <li key={item.id}>
              <WhatsNewCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default page;
