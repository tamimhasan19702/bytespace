import { ItemEight } from "./item-eight";
import { ItemElelven } from "./item-eleven";
import { ItemFive } from "./item-five";
import { ItemFour } from "./item-four";
import { ItemNine } from "./item-nine";
import { ItemOne } from "./item-one";
import { ItemSeven } from "./item-seven";
import { ItemSix } from "./item-six";
import { ItemTen } from "./item-ten";
import { ItemThree } from "./item-three";
import { ItemTwo } from "./item-two";

type OrnamentItemsProps = {
  className?: string;
  variant:
    | "item-one"
    | "item-two"
    | "item-three"
    | "item-four"
    | "item-five"
    | "item-six"
    | "item-seven"
    | "item-eight"
    | "item-nine"
    | "item-ten"
    | "item-eleven";
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
    case "item-seven":
      return <ItemSeven className={className} />;
    case "item-eight":
      return <ItemEight className={className} />;
    case "item-nine":
      return <ItemNine className={className} />;
    case "item-ten":
      return <ItemTen className={className} />;
    case "item-eleven":
      return <ItemElelven className={className} />;
    default:
      return null;
  }
}
