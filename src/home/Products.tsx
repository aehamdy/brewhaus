import Button from "@/components/common/Button";
import ProductCard from "@/components/common/ProductCard";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { products } from "@/data/products";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

function Products() {
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase() === "cold brew" ||
      product.title.toLowerCase() === "cappuccino" ||
      product.title.toLowerCase() === "iced latte" ||
      product.title.toLowerCase() === "macaroon"
  );

  return (
    <Section background="secondary" className="px-md md:px-xl" border>
      <div className="flex flex-col gap-[48px] md:gap-[80px]">
        <div className="flex flex-col items-center gap-2xl md:gap-3xl">
          <div className="flex flex-col items-center gap-3 text-center w-fit">
            <SectionTitle variant="primary" align="center" dark>
              Loved by Locals
            </SectionTitle>

            <p className="font-normal text-medium text-brand-primary">
              Local go-to&apos;s everyone loves — handpicked and always fresh.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2xl md:gap-3xl md:px-xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-base md:gap-md">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <Link href="">
                  <ProductCard product={product} />
                </Link>
              </li>
            ))}
          </ul>

          <Button href={ROUTES.menu} variant="tertiary" className="mx-auto">
            Explore Menu
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default Products;
