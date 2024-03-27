import { IHeaderData } from "@/components/Header";

export async function getHeader(): Promise<IHeaderData> {
  const res = await fetch(`${process.env.API_URL}/api/header?populate=*`);

  const { data } = await res.json();

  return {
    nav:
      data?.attributes?.navLinks?.data?.map?.(
        (item: { attributes: { pageTitle?: string; slug?: string } }) => {
          return {
            slug:
              item?.attributes?.slug == "home"
                ? ""
                : item?.attributes?.slug || "",
            label: item?.attributes?.pageTitle || "",
          };
        }
      ) || [],
    siteLogo: {
      url: data?.attributes?.siteLogo?.data?.attributes?.url
        ? `${process.env.API_URL}${data.attributes.siteLogo.data.attributes.url}`
        : "",
      alt: data?.attributes?.siteLogo?.data?.attributes?.alternativeText,
    },
    siteTitle: data?.attributes?.siteTitle,
  };
}