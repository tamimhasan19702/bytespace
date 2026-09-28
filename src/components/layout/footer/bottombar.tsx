import Link from "next/link";
import { legalLinks } from "./links";

export const BottomBar = () => {
  return (
    <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
      <p className="font-body text-xs text-muted-foreground">
        © 2023 ByteSpace. All rights reserved.
      </p>

      <nav className="flex items-center gap-6">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-body text-xs text-muted-foreground transition-colors hover:text-persian-blue-800"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
