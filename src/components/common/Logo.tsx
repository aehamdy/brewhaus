import Image from "next/image";
import logoImage from "@/assets/logo.svg";
import logoAltImage from "@/assets/logo-alt.svg";

interface LogoProps {
  variant?: "primary" | "alt";
}

function Logo({ variant = "primary" }: LogoProps) {
  return (
    <div
      className={`group relative flex flex-col items-end justify-center w-10 h-10 ${
        variant === "primary" ? "bg-accent-highlight" : "bg-brand-primary"
      } rounded-full overflow-hidden`}
    >
      {/* Viewport */}
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[26px] h-[26px] pt-1">
        {/* Top image (visible by default) */}
        <Image
          src={variant === "primary" ? logoImage : logoAltImage}
          alt="Logo"
          fill
          sizes="24px"
          className="absolute inset-0 object-contain object-bottom transition-transform duration-300 ease-in-out transform-gpu group-hover:-translate-y-full"
        />
      </div>

      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[26px] h-[26px] pt-1">
        {/* Bottom image (slides in on hover) */}
        <Image
          src={variant === "primary" ? logoImage : logoAltImage}
          alt="Logo"
          fill
          sizes="24px"
          className="absolute inset-0 translate-y-full object-contain object-bottom transition-transform duration-300 ease-in-out transform-gpu group-hover:translate-y-0"
        />
      </div>
    </div>
  );
}

export default Logo;
