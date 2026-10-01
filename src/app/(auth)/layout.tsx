"use client";

import { SvgItems } from "@/components/svg-items";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { PANEL_COPY } from "./_sub-components/data";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const copy = PANEL_COPY[pathname] ?? PANEL_COPY["/signin"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-persian-blue-800">
      <SvgItems variant="item-six" className="absolute inset-0 z-0 " />

      <div className="relative z-10 mx-auto grid min-h-screen w-full container lg:grid-cols-2 lg:gap-10">
        <div className="hidden flex-col px-10 py-10 lg:flex">
          <Link href="/" className="w-fit cursor-pointer">
            <Image
              src="/images/bytespace-icon.png"
              alt="ByteSpace"
              width={32}
              height={32}
              priority
            />
          </Link>

          <div className="mt-8 max-w-sm space-y-3">
            <h2 className="font-heading text-base font-semibold text-white-800">{copy.title}</h2>
            <p className="font-body text-sm leading-relaxed text-white-600">{copy.text}</p>
          </div>

          <div className="flex flex-1 items-center">
            <Image
              src="/images/signin-signup-image.png"
              alt="signin-signup image"
              width={548}
              height={585}
              className="h-auto w-full max-w-140"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 p-4 sm:p-6 lg:p-10">
          <Link href="/" className="self-start lg:hidden">
            <Image
              src="/images/bytespace-icon.png"
              alt="ByteSpace"
              width={32}
              height={32}
              priority
            />
          </Link>

          <section className="flex w-full max-w-md flex-col rounded-3xl bg-white-800 p-6 shadow-xl sm:p-10 lg:min-h-130">
            {children}
          </section>
        </div>
      </div>
    </section>
  );
}
