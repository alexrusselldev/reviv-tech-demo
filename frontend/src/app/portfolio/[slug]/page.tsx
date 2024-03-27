import { MDXRemoteWrapper } from "@/components/MDXRemoteWrapper";
import { getPortfolioProject } from "@/lib/strapi";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";

interface IProps {
  params: {
    slug: string;
  };
}

const Page: NextPage<IProps> = async (props) => {
  const { params } = props;
  const projectData = await getPortfolioProject(params.slug);

  console.log(projectData);

  const content = await serialize(projectData.attributes.projectContent);

  return (
    <div>
      <MDXRemoteWrapper {...content} />
    </div>
  );
};

export default Page;
