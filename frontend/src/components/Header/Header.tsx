import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../MobileNavigation";

export interface IPageNavData {
  slug: string;
  label: string;
}

interface IProps {}

export const Header: React.FC<IProps> = async () => {
  const headerData: IPageNavData[] = [];

  return (
    <div className="sticky mx-auto w-full">
      <Navigation pages={headerData} />
      <MobileNavigation pages={headerData} />
    </div>
  );
};
