import Heading from "@/components/common/Heading";
import Image from "next/image";
import orderOnlineImage from "@/assets/order-online.svg";
import deliveryMethods from "@/data/deliveryMethods";
import Link from "next/link";

function OrderOnline() {
  return (
    <section className="flex justify-center items-center pt-3xl pb-4xl bg-surface-secondary">
      <div className="flex flex-col gap-xl">
        <div className="flex flex-col items-center gap-5">
          <div className="">
            <Image
              src={orderOnlineImage}
              alt="Order Online"
              width={24}
              height={24}
            />
          </div>

          <div className="flex flex-col items-center gap-2 text-brand-primary">
            <Heading
              level={3}
              className="font-calistoga font-normal text-2xl md:text-xlarge"
            >
              Order Online
            </Heading>

            <p className="text-[18px]">Get your favorites delivered fast.</p>
          </div>
        </div>

        <div className="">
          <ul className="flex gap-xs">
            {deliveryMethods.map((deliveryMethod) => (
              <li
                key={deliveryMethod.id}
                className="flex bg-brand-primary rounded-sm overflow-hidden"
              >
                <Link
                  href={deliveryMethod.link}
                  className="py-[28px] px-[24px]"
                >
                  <Image
                    src={deliveryMethod.image}
                    alt={deliveryMethod.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OrderOnline;
