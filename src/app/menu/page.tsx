import CategoryList from "@/components/CategoryList";
import Button from "@/components/common/Button";
import MarqueeText from "@/components/common/MarqueeText";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import ProductGroup from "@/components/ProductGroup";

function Page() {
  return (
    <section>
      <PageHero className="text-accent-highlight" background="dark">
        <div className="flex flex-col gap-lg">
          <div className="flex flex-col items-center gap-sm md:gap-base w-full px-md md:px-xl">
            <SectionTitle variant="hero">Menu</SectionTitle>

            <p className="text-medium tracking-wide">
              Handcrafted drinks and fresh pasteries.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center gap-xs w-full">
            <Button variant="menu" fullWidthOnMobile>
              Our Locations
            </Button>
            <Button variant="primary" fullWidthOnMobile>
              About Us
            </Button>
          </div>
        </div>
      </PageHero>
      <MarqueeText />

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3xl lg:gap-md py-[104px] px-md md:px-xl bg-surface-primary">
        <div className="lg:sticky lg:top-[128px]">
          <CategoryList />
        </div>

        <ProductGroup />
      </div>
    </section>
  );
}

export default Page;
