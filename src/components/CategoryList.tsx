"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { useRef, useState } from "react";
import { ROUTES } from "@/lib/routes";

export default function CategoryList() {
  const listRef = useRef<HTMLUListElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const [moved, setMoved] = useState(false);

  const onPointerDown: React.PointerEventHandler<HTMLUListElement> = (e) => {
    const el = listRef.current;
    if (!el) return;
    el.setPointerCapture?.(e.pointerId);
    isDragging.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
    setMoved(false);
  };

  const onPointerMove: React.PointerEventHandler<HTMLUListElement> = (e) => {
    const el = listRef.current;
    if (!el || !isDragging.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 3) setMoved(true);
    el.scrollLeft = startScrollLeft.current - dx;
  };

  const endDrag: React.PointerEventHandler<HTMLUListElement> = (e) => {
    const el = listRef.current;
    if (!el) return;
    isDragging.current = false;
    try {
      el.releasePointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
    setTimeout(() => setMoved(false), 0);
  };

  return (
    <ul
      ref={listRef}
      className="flex flex-nowrap lg:flex-col md:justify-evenly items-center lg:items-start gap-xs md:gap-10 lg:gap-5 px-md overflow-x-auto scroll-smooth touch-pan-x select-none cursor-grab active:cursor-grabbing no-scrollbar"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            href={`${ROUTES.menu}#${category.slug}`}
            className="group flex items-center gap-[20px]"
            onClick={(e) => {
              if (moved) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            <div className="w-[56px] h-[56px] bg-brand-primary rounded-full overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-calistoga text-large text-brand-primary group-hover:text-brand-secondary whitespace-nowrap">
              {category.title}
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
