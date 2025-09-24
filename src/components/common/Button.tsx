import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "menu";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "link" | "button";
  className?: string;
  fullWidthOnMobile?: boolean;
}

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "link",
  href = "/",
  className = "",
  fullWidthOnMobile = false,
}: ButtonProps) {
  const baseStyles =
    "flex justify-center items-center rounded-pill transition-all duration-normal";
  const variantStyles = {
    primary:
      "text-accent-highlight hover:text-brand-primary active:text-accent-highlight bg-brand-primary hover:bg-accent-highlight active:bg-brand-primary-muted border border-accent-highlight",
    secondary:
      "text-brand-primary hover:text-accent-highlight bg-accent-highlight hover:bg-brand-primary active:bg-brand-primary-muted border border-accent-highlight",
    menu: "text-brand-primary hover:text-accent-highlight bg-accent-highlight hover:bg-brand-primary active:bg-brand-primary-muted",
  };
  const sizeStyles = {
    sm: "",
    md: "py-xs px-base",
    lg: "",
  };
  const widthStyles = fullWidthOnMobile ? "w-full md:w-fit" : "w-fit";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles}`;

  return type === "link" ? (
    <Link href={href} className={`${styles} ${className}`}>
      {children}
    </Link>
  ) : (
    <button className={`${styles} ${className}`}>{children}</button>
  );
}

export default Button;
