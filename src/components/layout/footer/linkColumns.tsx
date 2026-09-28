import Link from "next/link";
import { categoryLinks, companyLinks, exploreLinks } from "./links";

export const LinkColumns = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:gap-x-16">
      <nav className="flex flex-col gap-3">
        {exploreLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-body text-sm text-foreground/80 transition-colors hover:text-persian-blue-800"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col gap-3">
        {categoryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-body text-sm text-foreground/80 transition-colors hover:text-persian-blue-800"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col gap-3">
        {companyLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-body text-sm text-foreground/80 transition-colors hover:text-persian-blue-800"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
