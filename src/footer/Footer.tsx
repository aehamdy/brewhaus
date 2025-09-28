import FooterNav from "@/footer/FooterNav";
import FooterInfo from "@/footer/FooterInfo";
import FooterSignature from "@/footer/FooterSignature";

function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-4xl lg:gap-[120px] pt-2xl md:pt-3xl lg:pt-4xl px-xl lg:px-4xl pb-md md:pb-xl lg:pb-xl font-calistoga text-accent-highlight bg-brand-primary">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-3xl">
          <div className="lg:order-2 lg:col-span-5 gap-[28px]">
            <FooterNav />
          </div>

          <div className="lg:col-span-3">
            <FooterInfo />
          </div>
        </div>
      </div>

      <FooterSignature />
    </footer>
  );
}

export default Footer;
