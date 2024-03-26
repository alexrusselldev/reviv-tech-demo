import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../MobileNavigation";
import { getNavLinks } from "@/lib/strapi";

export interface IPageNavData {
  slug: string;
  label: string;
}

interface IProps {}

export const TopBar: React.FC<IProps> = async () => {
  const navLinks = await getNavLinks();

  return (
    <div className="sticky mx-auto w-full">
      <Navigation pages={navLinks} />
      <MobileNavigation pages={navLinks} />
    </div>
  );
};
