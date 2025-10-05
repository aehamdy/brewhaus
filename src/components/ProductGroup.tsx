import Heading from "@/components/common/Heading";
import ProductCard from "@/components/common/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

function ProductGroup() {
  return (
    <ul className="product-group grid grid-cols-1 gap-md">
      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category.slug
        );

        return (
          <div
            key={category.id}
            id={category.slug}
            className="flex flex-col gap-lg md:gap-xl pt-lg md:pt-xl border-t border-subtle"
          >
            <div className="container flex justify-between items-center">
              <Heading
                level={3}
                className="font-calistoga text-2xl md:text-xlarge text-brand-primary"
              >
                {category.title}
              </Heading>

              <span className="text-small text-brand-secondary">
                {categoryProducts.length} items
              </span>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              {categoryProducts.map((product) => (
                <li key={product.id}>
                  <Link href={`${ROUTES.menu}/${product.slug}`}>
                    <ProductCard product={product} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </ul>
  );
}

export default ProductGroup;
