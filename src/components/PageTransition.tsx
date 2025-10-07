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

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate new page when it mounts
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, filter: "blur(0px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }
    );
  }, [pathname]);

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (!link || isTransitioning.current) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

      // Prevent Next.js from navigating immediately
      event.preventDefault();

      // Run exit animation on current page
      isTransitioning.current = true;
      gsap.to(containerRef.current, {
        opacity: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          router.push(href); // Navigate after animation
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
        },
      });
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [router]);

  return <div ref={containerRef}>{children}</div>;
}
