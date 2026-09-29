"use client";

import { IconStore } from "@/components/icons";
import Link from "next/link";
import { Logo } from "../../logo";
import { navLinks } from "./links";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="z-50 w-full">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Logo />

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[16px] text-shuttle-gray-50 transition-colors hover:text-persian-blue-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden text-[16px] text-shuttle-gray-50 transition-colors gap-3 md:flex">
          <Link className="hover:text-persian-blue-200" href="/login">
            Sign in
          </Link>
          <Link className="hover:text-persian-blue-200" href="/register">
            Join us
          </Link>
          <IconStore iconName="shopping-bag" className="text-lg cursor-pointer mt-1" />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-4 text-shuttle-gray-50 md:hidden">
          <IconStore
            iconName="shopping-bag"
            className="text-xl cursor-pointer transition-colors hover:text-persian-blue-200"
          />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
