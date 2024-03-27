import { CardGrid } from "@/components/CardGrid";
import { MDXRemoteWrapper } from "@/components/MDXRemoteWrapper";
import { getAllProjects, getPage } from "@/lib/strapi";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";

interface IProps {}

const Page: NextPage<IProps> = async () => {
  const pageData = await getPage("portfolio");

  const content = await serialize(pageData.attributes.content);

  const projects = await getAllProjects();

  const projectCards = projects.map((project: any) => {
    return {
      slug: project?.attributes?.slug,
      title: project?.attributes?.projectTitle,
      image: {
        src: project?.attributes?.projectGallery?.data?.[0]?.attributes?.url,
        alt: project?.attributes?.projectGallery?.data?.[0]?.attributes
          ?.alternativeText,
      },
    };
  });

  console.log(projects);
  return (
    <div>
      <MDXRemoteWrapper {...content} />
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
      <CardGrid items={projectCards} />
    </div>
  );
};

export default Page;
