import MarqueeText from "@/components/common/MarqueeText";
import Categories from "@/home/Categories";
import HeroSection from "@/home/HeroSection";
import OrderOnline from "@/home/OrderOnline";
import Products from "@/home/Products";
import Testimonials from "@/home/Testimonials";
import Vibes from "@/home/Vibes";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <MarqueeText />
      <Categories />
      <Products />
      <Vibes />
      <Testimonials />
      <OrderOnline />
    </main>
  );
}
