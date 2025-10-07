"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  // When a new page mounts, animate it in
  useEffect(() => {
    if (!containerRef.current) return;

    // Start slightly blurred and faded
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        clearProps: "filter",
      }
    );
  }, [pathname]);

  // Handle page leave animation
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (!link || isTransitioning.current) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

      event.preventDefault(); // stop immediate nav
      isTransitioning.current = true;

      // Animate the current page blur + fade out
      gsap.to(containerRef.current, {
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          router.push(href); // navigate after animation ends
          setTimeout(() => {
            isTransitioning.current = false;
          }, 700);
        },
      });
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [router]);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
