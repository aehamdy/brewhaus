import MarqueeText from "@/components/common/MarqueeText";
import Categories from "@/home/Categories";
import HeroSection from "@/home/HeroSection";
import Products from "@/home/Products";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <MarqueeText />
      <Categories />
      <Products />
    </main>
  );
}
