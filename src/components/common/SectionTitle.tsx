import Heading from "@/components/common/Heading";

interface SectionTitleProps {
  children: React.ReactNode;
  variant?: "hero" | "primary" | "secondary";
  className?: string;
  dark?: boolean;
  align?: "start" | "center" | "end";
}

function SectionTitle({
  children,
  variant = "secondary",
  className = "",
  dark = false,
  align = "center",
}: SectionTitleProps) {
  const headingLevel = variant === "hero" ? 1 : variant === "primary" ? 2 : 3;
  const baseStyles = `w-fit font-calistoga ${
    dark ? "text-brand-primary" : "text-accent-hightlight"
  } `;

  const variantStyles = {
    hero: "text-2xlarge md:text-4xlarge lg:text-5xlarge leading-14 md:leading-23 lg:leading-24",
    primary: `text-[32px] md:text-[56px] lg:text-[64px] leading-9 md:leading-16 lg:leading-18 ${
      align === "center"
        ? "text-center"
        : align === "end"
        ? "text-end"
        : "text-start"
    }`,
    secondary: "text-[24px] md:text-[32px] text-center leading-7 md:leading-10",
  };

  return (
    <Heading
      level={headingLevel}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Heading>
  );
}

export default SectionTitle;
