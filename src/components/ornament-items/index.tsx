import { ItemFive } from "./item-five";
import { ItemFour } from "./item-four";
import { ItemOne } from "./item-one";
import { ItemSix } from "./item-six";
import { ItemThree } from "./item-three";
import { ItemTwo } from "./item-two";

type OrnamentItemsProps = {
  className?: string;
  variant: "item-one" | "item-two" | "item-three" | "item-four" | "item-five" | "item-six";
};

export function OrnamentItems({ className, variant }: OrnamentItemsProps) {
  switch (variant) {
    case "item-one":
      return <ItemOne className={className} />;
    case "item-two":
      return <ItemTwo className={className} />;
    case "item-three":
      return <ItemThree className={className} />;
    case "item-four":
      return <ItemFour className={className} />;
    case "item-five":
      return <ItemFive className={className} />;
    case "item-six":
      return <ItemSix className={className} />;
    default:
      return null;
  }
}
