import Image from "next/image";
import notFoundImage1 from "@/assets/not-found-1.webp";
import notFoundImage2 from "@/assets/not-found-2.webp";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { ROUTES } from "@/lib/routes";

function NotFound() {
  return (
    <section className="h-dvh pt-[184px] bg-brand-primary overflow-hidden">
      <div className="flex flex-col gap-3xl overflow-hidden">
        <div className="flex flex-col items-center gap-lg px-md text-accent-highlight">
          <div className="flex flex-col items-center gap-base">
            <SectionTitle variant="hero">Not Found</SectionTitle>

            <p className="text-medium text-center">
              The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
          </div>

          <Button href={ROUTES.home} variant="secondary" fullWidthOnMobile>
            Go Home
          </Button>
        </div>

        <div className="flex justify-center pt-4xl md:pt-[95px] lg:pt-sm px-xl md:px-md lg:px-xl overflow-hidden">
          <div className="hidden lg:flex lg:max-w-[346px] pt-4xl ">
            <Image
              src={notFoundImage2}
              alt="Empty Coffee Cup Image"
              className="w-full h-full object-cover -rotate-8"
            />
          </div>

          <div className="max-w-[500px] lg:max-w-[380px]">
            <Image
              src={notFoundImage1}
              alt="Empty Coffee Cup Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden lg:flex lg:max-w-[346px] pt-4xl ">
            <Image
              src={notFoundImage2}
              alt="Empty Coffee Cup Image"
              className="w-full h-full object-cover rotate-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
