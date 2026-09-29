"use client";

import { Menu, X } from "lucide-react";
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

export function MobileMenu() {

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />}
      >
        <Menu className="h-5 w-5 text-shuttle-gray-50 transition-colors hover:text-persian-blue-200" />
      </DrawerTrigger>

      <DrawerContent className="h-full w-[80%] max-w-sm rounded-none">
        <DrawerHeader className="flex flex-row items-center justify-between border-b border-border">
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
              <Button
                variant="outline"
                className="font-body h-11 w-full rounded-full border-persian-blue-800 text-persian-blue-800 hover:bg-persian-blue-100"
              />
            }
          >
            <Link href="/login">Sign in</Link>
          </DrawerClose>

          <DrawerClose
            nativeButton={false}
            render={
              <Button className="font-body h-11 w-full rounded-full bg-electric-lime-400 text-persian-blue-800 hover:bg-electric-lime-500" />
            }
          >
            <Link href="/register">Join us</Link>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
