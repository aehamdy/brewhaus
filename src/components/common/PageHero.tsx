interface PageHeroProps {
  children: React.ReactNode;
  background?: "dark" | "light";
  className?: string;
}

function PageHero({ children, background = "dark", className }: PageHeroProps) {
  return (
    <section
      className={`flex flex-col items-center pt-[184px] pb-[104px] ${className} ${
        background === "dark" ? "bg-brand-primary" : "bg-surface-secondary"
      }`}
    >
      {children}
    </section>
  );
}

export default PageHero;
