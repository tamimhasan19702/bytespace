import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "default" | "alt";
};

export function Logo({ variant = "default" }: LogoProps) {
  const isAlt = variant === "alt";

  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-heading text-xl font-bold text-persian-blue-800 md:text-2xl"
    >
      <Image
        src={isAlt ? "/images/bytespace-logo-alt.png" : "/images/bytespace-logo.png"}
        alt="ByteSpace Logo"
        width={170}
        height={37}
      />
    </Link>
  );
}
