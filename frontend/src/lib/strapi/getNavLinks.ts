export interface INavLink {
  label: string;
  slug: string;
}

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
export async function getNavLinks(): Promise<INavLink[]> {
  const topBarRes = await await fetch(
    `${process.env.API_URL}top-bar?populate=*`
  );

  if (topBarRes.status != 200) {
    return [];
  }

  const topBar: ITopBar = await topBarRes.json();

  const navLinks: INavLink[] = topBar?.data?.attributes?.navLinks?.data?.map?.(
    (navLink) => {
      return {
        label: navLink.attributes.pageTitle,
        slug: navLink.attributes.slug,
      };
    }
  );

  return navLinks || [];
}
