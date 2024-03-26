import { IPageNavData } from "@/components/TopBar";

export interface ITopBar {
  data: {
    attributes: {
      siteTitle: string;
      navLinks: {
        data: {
          attributes: {
            pageTitle: string;
            slug: string;
          };
        }[];
      };
    };
  };
}
export async function getNavLinks(): Promise<IPageNavData[]> {
  const topBarRes = await await fetch(
    `${process.env.API_URL}top-bar?populate=*`
  );

  if (topBarRes.status != 200) {
    return [];
  }

  const topBar: ITopBar = await topBarRes.json();

  const navLinks: IPageNavData[] =
    topBar?.data?.attributes?.navLinks?.data?.map?.((navLink) => {
      return {
        label: navLink.attributes.pageTitle,
        slug: navLink.attributes.slug,
      };
    });

  return navLinks || [];
}
