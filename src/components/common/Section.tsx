interface SectionProps {
  children: React.ReactNode;
  background: "primary" | "secondary";
  className?: string;
  border: boolean;
}

function Section({
  children,
  background = "primary",
  className = "",
  border = true,
}: SectionProps) {
  return (
    <section
      className={`py-[104px] md:py-5xl ${
        background === "primary"
          ? "bg-surface-primary"
          : background === "secondary" && "bg-surface-secondary"
      } ${border && "border-b border-subtle"} ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
