import Heading from "@/components/common/Heading";

interface SectionTitleProps {
  children: React.ReactNode;
  variant?: "hero" | "primary" | "secondary";
  className?: string;
  dark?: boolean;
}

function SectionTitle({
  children,
  variant = "secondary",
  className = "",
  dark = false,
}: SectionTitleProps) {
  const headingLevel = variant === "hero" ? 1 : variant === "primary" ? 2 : 3;
  const baseStyles = `font-calistoga ${
    dark ? "text-brand-primary" : "text-accent-hightlight"
  } text-2xlarge lg:text-4xlarge leading-14 lg:leading-24`;

  return (
    <Heading level={headingLevel} className={`${baseStyles} ${className}`}>
      {children}
    </Heading>
  );
}

export default SectionTitle;
