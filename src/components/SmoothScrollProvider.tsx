"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// ScrollSmoother depends on ScrollTrigger, so register both (in this order)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize only once
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (!wrapper || !content) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Adjust smoothness (1–3 recommended)
      effects: true,
    });

    return () => smoother.kill(); // Cleanup on unmount
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
