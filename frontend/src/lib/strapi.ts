import { IHeaderData } from "@/components/Header";
import { notFound } from "next/navigation";

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

export async function getPage(slug: string): Promise<any> {
  const res = await fetch(
    `${process.env.API_URL}/api/pages?filters[slug][$eq]=${slug}`
  );

  const page = await res.json();

  if (!page?.data || page.data.length == 0) {
    notFound();
  }

  return page.data[0];
}

export async function getPortfolioProject(slug: string): Promise<any> {
  const res = await fetch(
    `${process.env.API_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`
  );

  const project = await res.json();

  if (!project?.data || project.data.length == 0) {
    notFound();
  }

  return project.data[0];
}

export async function getAllProjects(): Promise<any> {
  const res = await fetch(`${process.env.API_URL}/api/projects?populate=*`);

  const project = await res.json();

  return project.data;
}
