"use client";

import { IconStore } from "@/components/icons";
import { ScrollTrigger, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { useRef, useState } from "react";
import { Logo } from "../../logo";
import { navLinks } from "./links";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const scope = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);

  useGSAP(
    () => {
      ScrollTrigger.create({
        start: 80,
        onUpdate: (self) => setStuck(self.scroll() > 80),
      });
    },
    { scope },
  );

  return (
    <header ref={scope} className="sticky top-0 z-50 w-full">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 border-b border-border bg-background/85 backdrop-blur-md transition-opacity duration-300",
          stuck ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="container relative flex h-header items-center justify-between">
        {/* Logo */}
        <div className="relative shrink-0">
          <Logo variant={stuck ? "alt" : "default"} preload />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-[16px] transition-colors duration-300",
                stuck
                  ? "text-shuttle-gray-800 hover:text-persian-blue-600"
                  : "text-shuttle-gray-50 hover:text-persian-blue-200",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 text-[16px] transition-colors duration-300 md:flex">
          <Link
            className={
              stuck
                ? "text-shuttle-gray-800 hover:text-persian-blue-600"
                : "text-shuttle-gray-50 hover:text-persian-blue-200"
            }
            href="/login"
          >
            Sign in
          </Link>
          <Link
            className={
              stuck
                ? "text-shuttle-gray-800 hover:text-persian-blue-600"
                : "text-shuttle-gray-50 hover:text-persian-blue-200"
            }
            href="/register"
          >
            Join us
          </Link>
          <IconStore
            iconName="shopping-bag"
            className={cn(
              "text-lg cursor-pointer mt-1 transition-colors duration-300",
              stuck ? "text-shuttle-gray-800" : "text-shuttle-gray-50",
            )}
          />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-4 transition-colors duration-300 md:hidden">
          <IconStore
            iconName="shopping-bag"
            className={cn(
              "text-xl cursor-pointer transition-colors duration-300",
              stuck ? "text-shuttle-gray-800" : "text-shuttle-gray-50",
            )}
          />
          <MobileMenu stuck={stuck} />
        </div>
      </div>
    </header>
  );
}
