import MarqueeText from "@/components/common/MarqueeText";
import Categories from "@/components/home/Categories";
import HeroSection from "@/components/home/HeroSection";
import Nearby from "@/components/home/Nearby";
import OrderOnline from "@/components/home/OrderOnline";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import Vibes from "@/components/home/Vibes";
import WhatsNew from "@/components/home/WhatsNew";

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
