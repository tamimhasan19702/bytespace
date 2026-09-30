export type IconName =
  | "shopping-bag"
  | "hamburger-menu"
  | "logoipsum-one"
  | "logoipsum-two"
  | "logoipsum-three"
  | "logoipsum-four"
  | "logoipsum-five"
  | "business"
  | "design"
  | "development"
  | "marketing"
  | "photography"
  | "shopping-bag"
  | "software";

export interface IconStoreProps {
  iconName: IconName;
  className?: string;
}
