import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import Nearby from "@/components/home/Nearby";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Locations`,
  description: "Find your nearest brewhaus location.",
};

function page() {
  return (
    <main>
      <PageHero className="text-accent-highlight" background="dark">
        <div className="flex flex-col items-center gap-sm">
          <SectionTitle variant="hero" dark={false}>
            Locations
          </SectionTitle>

          <p className="text-medium tracking-wide">
            Find your nearest brewhaus location.
          </p>
        </div>
      </PageHero>

      <Nearby title={false} />
    </main>
  );
}

export default page;
