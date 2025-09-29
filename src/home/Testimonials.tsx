import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import testimonialsList from "@/data/testimonials";
import Image from "next/image";
import quotesImage from "@/assets/double-quotes.svg";
import Button from "@/components/common/Button";
import { ROUTES } from "@/lib/routes";

function Testimonials() {
  return (
    <Section background="primary" border={false}>
      <div className="flex flex-col items-center px-md gap-2xl">
        <SectionTitle variant="primary" align="center" dark>
          What People
          <br />
          Love About Us
        </SectionTitle>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-base md:gap-md">
          {testimonialsList.map((testimonial) => (
            <li
              key={testimonial.id}
              className="flex flex-col md:flex-row md:even:flex-row-reverse lg:flex-col lg:even:flex-col-reverse gap-base md:h-[251px] lg:h-[640px]"
            >
              <div className="flex-1 flex flex-col items-start gap-5 lg:max-h-[209px] py-lg px-md text-brand-primary bg-surface-secondary border border-subtle rounded-lg">
                <div className="">
                  <Image
                    src={quotesImage}
                    alt="quotes-image"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="font-calistoga leading-5">
                  {testimonial.feedback}
                </div>

                <div className="flex items-center text-brand-secondary">
                  <p className="">{testimonial.name}</p> -{" "}
                  <p className="">{testimonial.title}</p>
                </div>
              </div>

              <div className="flex-1 h-[382px] md:h-auto rounded-lg overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>

        <Button href={ROUTES.locations} className="">
          Our Locations
        </Button>
      </div>
    </Section>
  );
}

export default Testimonials;
