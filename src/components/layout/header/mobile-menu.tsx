"use client";

import { IconStore } from "@/components/icons";
import { cn } from "@/lib/utils/cn";
import { X } from "lucide-react";
import Link from "next/link";
import { Logo } from "../../logo";
import { Button } from "../../ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../ui/drawer";
import { navLinks } from "./links";

export function MobileMenu({ stuck = false }: { stuck?: boolean }) {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />}
      >
        <IconStore
          iconName="hamburger-menu"
          className={cn(
            "text-xl transition-colors",
            stuck ? "text-shuttle-gray-800" : "text-shuttle-gray-50",
          )}
        />
      </DrawerTrigger>

      <DrawerContent className="h-full w-[80%] max-w-sm rounded-none">
        <DrawerHeader className="flex flex-row items-center justify-between border-b border-border p-4">
          <DrawerTitle className="font-heading text-lg text-persian-blue-800">
            <Logo variant="alt" />
          </DrawerTitle>
          <DrawerClose render={<Button variant="ghost" size="icon" aria-label="Close menu" />}>
            <X className="h-5 w-5" />
          </DrawerClose>
        </DrawerHeader>

        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <DrawerClose
              key={link.href}
              nativeButton={false}
              render={
                <Link
                  href={link.href}
                  className="font-body rounded-md px-3 py-3 text-base text-foreground/80 transition-colors hover:bg-persian-blue-100 hover:text-persian-blue-800"
                />
              }
            >
              {link.label}
            </DrawerClose>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
          <DrawerClose
            nativeButton={false}
            render={
              <Link
                href="/signin"
                className="font-body flex h-11 w-full items-center justify-center rounded-full border border-shuttle-gray-800 font-bold text-base text-shuttle-gray-800 transition-colors hover:bg-persian-blue-100"
              />
            }
          >
            Sign in
          </DrawerClose>

          <DrawerClose
            nativeButton={false}
            render={
              <Link
                href="/joinus"
                className="font-body flex h-11 w-full items-center justify-center rounded-full bg-electric-lime-400 font-bold text-base text-shuttle-gray-900 transition-colors hover:bg-electric-lime-500"
              />
            }
          >
            Join us
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
