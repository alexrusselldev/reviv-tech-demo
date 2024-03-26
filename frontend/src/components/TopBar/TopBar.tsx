import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../MobileNavigation";

export interface IPageNavData {
  slug: string;
  label: string;
}

interface IProps {}

export const TopBar: React.FC<IProps> = async () => {
  const allPagesData: IPageNavData[] = [];

  return (
    <div className="sticky mx-auto w-full">
      <Navigation pages={allPagesData} />
      <MobileNavigation pages={allPagesData} />
    </div>
  );
};
