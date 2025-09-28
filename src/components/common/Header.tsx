"use client";

import Logo from "@/components/common/Logo";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/navLinks";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-md md:pt-lg md:pb-0 md:px-xl">
      <nav className="relative w-full md:w-fit mx-auto p-3 md:p-[12px] text-accent-highlight bg-brand-primary-muted rounded-pill">
        <div className="flex md:hidden justify-between items-center">
          <Link href={ROUTES.home}>
            <Logo />
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            className="flex justify-center items-center w-9 h-9 bg-accent-highlight rounded-full cursor-pointer"
          >
            <div className="relative w-base h-[10px]">
              {/* Top bar */}
              <span
                className={
                  `absolute left-0 w-full h-[1px] bg-brand-primary transition duration-300 ease-in-out origin-center ` +
                  (isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")
                }
              />
              {/* Middle bar */}
              <span
                className={
                  `absolute left-0 w-full h-[1px] bg-brand-primary transition duration-300 ease-in-out origin-center top-1/2 -translate-y-1/2 ` +
                  (isMenuOpen ? "opacity-0" : "opacity-100")
                }
              />
              {/* Bottom bar */}
              <span
                className={
                  `absolute left-0 w-full h-[1px] bg-brand-primary transition duration-300 ease-in-out origin-center ` +
                  (isMenuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0")
                }
              />
            </div>
          </button>
        </div>

        <div
          aria-hidden={!isMenuOpen}
          className={`absolute w-full top-full start-0 flex flex-col items-center gap-2xl mt-3 mx-auto transition-all duration-500 ease-in-out transform origin-top ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
              : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
          } bg-brand-primary-muted rounded-md`}
        >
          <ul className="flex flex-col justify-between items-center gap-2 w-full py-[18px] px-md">
            {(navLinks ?? []).map((link) => (
              <li key={link.id} className="w-full rounded-pill overflow-hidden">
                <Link
                  href={link.href}
                  className="flex justify-center w-full py-tiny px-2xs hover:text-brand-primary hover:bg-accent-highlight transition-colors duration-slow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-2xl mx-auto">
          <ul className="flex justify-between items-center gap-2xl">
            {(navLinks ?? []).slice(0, 2).map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="py-tiny px-2xs hover:text-brand-primary hover:bg-accent-highlight rounded-pill transition-colors duration-slow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={ROUTES.home}>
            <Logo />
          </Link>

          <ul className="flex justify-between items-center gap-2xl">
            {(navLinks ?? []).slice(2).map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="py-tiny px-2xs hover:text-brand-primary hover:bg-accent-highlight rounded-pill transition-colors duration-slow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
