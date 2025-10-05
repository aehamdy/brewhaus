import Heading from "@/components/common/Heading";
import { Product } from "@/data/products";
import Image from "next/image";

function ProductCard({ product }: { product: Product }) {
  const { title, price, image, isNew } = product;
  return (
    <article className="group flex flex-col gap-sm">
      <div className="relative bg-brand-primary rounded-lg overflow-hidden">
        <Image
          src={image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[500ms]"
        />

        {isNew && (
          <span className="absolute top-4 start-4 py-tiny px-xs text-sm text-brand-primary bg-accent-highlight rounded-pill">
            New
          </span>
        )}
      </div>

      <div className="flex justify-between items-center font-calistoga text-large px-1">
        <Heading level={3} className="text-brand-primary">
          {title}
        </Heading>

        <p className="text-brand-secondary">${price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
