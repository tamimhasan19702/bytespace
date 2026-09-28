"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";
import { navLinks } from "./common";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Logo />

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[16px] text-foreground/80 transition-colors hover:text-persian-blue-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden text-[16px] items-center gap-3 lg:flex">
          <Link href="/login">Sign in</Link>
          <Link href="/register">Join us</Link>
          <ShoppingBag className="h-4 w-4 text-persian-blue-800 cursor-pointer" />
        </div>

        {/* Mobile menu trigger */}
        <MobileMenu />
      </div>
    </header>
  );
}
