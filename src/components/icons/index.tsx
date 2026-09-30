import { IconStoreProps } from "./interface";
import { BusinessIcon } from "./sub-components/business";
import { DesignIcon } from "./sub-components/design";
import { DevelopmentIcon } from "./sub-components/development";
import { HamburgerMenuIcon } from "./sub-components/hamburger-menu";
import { LogoIpsumFiveIcon } from "./sub-components/logoipsum-five";
import { LogoIpsumFourIcon } from "./sub-components/logoipsum-four";
import { LogoIpsumOneIcon } from "./sub-components/logoipsum-one";
import { LogoIpsumThreeIcon } from "./sub-components/logoipsum-three";
import { LogoIpsumTwoIcon } from "./sub-components/logoipsum-two";
import { MarketingIcon } from "./sub-components/marketing";
import { PhotographyIcon } from "./sub-components/photography";
import { ShoppingBagIcon } from "./sub-components/shopping-bag";
import { SoftwareIcon } from "./sub-components/software";

export function IconStore({ iconName, className }: IconStoreProps) {
  switch (iconName) {
    case "shopping-bag":
      return <ShoppingBagIcon className={className} />;
    case "hamburger-menu":
      return <HamburgerMenuIcon className={className} />;
    case "logoipsum-one":
      return <LogoIpsumOneIcon className={className} />;
    case "logoipsum-two":
      return <LogoIpsumTwoIcon className={className} />;
    case "logoipsum-three":
      return <LogoIpsumThreeIcon className={className} />;
    case "logoipsum-four":
      return <LogoIpsumFourIcon className={className} />;
    case "logoipsum-five":
      return <LogoIpsumFiveIcon className={className} />;
    case "business":
      return <BusinessIcon className={className} />;
    case "design":
      return <DesignIcon className={className} />;
    case "development":
      return <DevelopmentIcon className={className} />;
    case "marketing":
      return <MarketingIcon className={className} />;
    case "photography":
      return <PhotographyIcon className={className} />;
    case "software":
      return <SoftwareIcon className={className} />;
    default:
      return null;
  }
}
