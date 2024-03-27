import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../MobileNavigation";
import { getHeader } from "@/lib/strapi";

export interface IPageNavData {
  slug: string;
  label: string;
}

interface IProps {}

export interface IHeaderData {
  nav: IPageNavData[];
  siteLogo: { url: string; alt: string };
  siteTitle: string;
}

export const Header: React.FC<IProps> = async () => {
  const headerData: IHeaderData = await getHeader();

  return (
    <div className="sticky mx-auto w-full">
      <Navigation pages={headerData.nav} />
      <MobileNavigation pages={headerData.nav} />
    </div>
  );
};
