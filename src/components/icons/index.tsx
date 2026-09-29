import { HamburgerMenuIcon } from "./hamburger-menu";
import { ShoppingBagIcon } from "./shopping-bag";

export type IconName = "shopping-bag" | "hamburger-menu";

type IconStoreProps = {
  iconName: IconName;
  className?: string;
};

export function IconStore({ iconName, className }: IconStoreProps) {
  switch (iconName) {
    case "shopping-bag":
      return <ShoppingBagIcon className={className} />;
    case "hamburger-menu":
      return <HamburgerMenuIcon className={className} />;
    default:
      return null;
  }
}
