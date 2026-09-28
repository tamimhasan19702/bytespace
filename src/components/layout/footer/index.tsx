import { BottomBar } from "./bottombar";
import { LinkColumns } from "./linkColumns";
import { Newsletter } from "./newsletter";

export function Footer() {
  return (
    <footer className="border-t border-t-gray-100 backdrop-blur-sm bg-background">
      <div className="container section-y">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]">
          {/* Newsletter column */}
          <Newsletter />

          {/* Link columns */}
          <LinkColumns />
        </div>

        {/* Bottom bar */}
        <BottomBar />
      </div>
    </footer>
  );
}
