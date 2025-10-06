import Heading from "@/components/common/Heading";
import { products } from "@/data/products";
import OrderOnline from "@/components/home/OrderOnline";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: { productSlug: string };
};

async function ProductPage({ params }: ProductPageProps) {
  const { productSlug } = await params;

  const product = products.find((product) => product.slug === productSlug);

  if (!product) {
    return notFound();
  }

  return (
    <section className="pt-[144px] md:pt-[184px] bg-surface-primary">
      <div className="flex justify-center">
        {/* <div className="flex flex-col md:flex-row lg:justify-between gap-lg md:gap-md lg:gap-xl lg:w-[85%] pb-10 px-md md:px-lg lg:px-4xl text-brand-primary"> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg md:gap-md lg:gap-xl lg:w-[85%] pb-10 px-md md:px-lg lg:px-4xl text-brand-primary">
          {/* <div className="lg:flex-1 md:h-[323px] lg:max-w-[400px] lg:h-[400px] bg-brand-primary rounded-lg overflow-hidden"> */}
          <div className="md:col-span-2 md:h-[323px] lg:max-w-[400px] lg:h-[400px] bg-brand-primary rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.title}-image`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* <div className="lg:flex-1 flex flex-col gap-lg md:ps-md"> */}
          <div className="md:col-span-2 flex flex-col gap-lg md:ps-md">
            {/* title, price and description */}
            <div className="flex flex-col gap-md">
              <div className="flex flex-col font-calistoga">
                <Heading level={2} className="text-xlarge lg:text-[44px]">
                  {product.title}
                </Heading>

                <Heading
                  level={4}
                  className="text-brand-secondary text-large lg:text-xlarge"
                >
                  ${product.price}
                </Heading>
              </div>

              <p className="">{product.description}</p>
            </div>

            {/* sizes */}
            <div className="flex flex-col gap-md text-small">
              <div className="flex flex-col gap-3 pt-5 border-t border-t-subtle">
                <Heading
                  level={3}
                  className="font-calistoga text-base lg:text-large text-brand-secondary"
                >
                  Available Sizes
                </Heading>

                <div className="flex items-center gap-1.5">
                  {product.options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 py-1 px-2 bg-surface-secondary border border-subtle"
                    >
                      {option.size}{" "}
                      <span className="text-brand-secondary">
                        {option.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* allergens */}
              <div className="flex flex-col gap-3 pt-5 border-t border-t-subtle">
                <div className="flex flex-col gap-3">
                  <Heading
                    level={3}
                    className="font-calistoga text-base lg:text-large text-brand-secondary"
                  >
                    Allergen Risks*
                  </Heading>

                  <div className="flex items-center gap-1.5">
                    {product.allergens.map((allergen, index) => (
                      <div
                        key={index}
                        className="py-1 px-2 bg-surface-secondary border whitespace-nowrap border-subtle"
                      >
                        {allergen}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="md:w-8/10 text-brand-secondary">
                  * Let our team know if you have any allergies before ordering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderOnline />
    </section>
  );
}

export default ProductPage;
