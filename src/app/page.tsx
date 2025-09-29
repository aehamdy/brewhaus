import MarqueeText from "@/components/common/MarqueeText";
import Categories from "@/home/Categories";
import HeroSection from "@/home/HeroSection";
import Nearby from "@/home/Nearby";
import OrderOnline from "@/home/OrderOnline";
import Products from "@/home/Products";
import Testimonials from "@/home/Testimonials";
import Vibes from "@/home/Vibes";
import WhatsNew from "@/home/WhatsNew";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <MarqueeText />
      <Categories />
      <Products />
      <Vibes />
      <Testimonials />
      <Nearby />
      <WhatsNew />
      <OrderOnline />
    </main>
  );
}
