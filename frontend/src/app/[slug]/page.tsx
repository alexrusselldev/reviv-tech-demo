import { MDXRemoteWrapper } from "@/components/MDXRemoteWrapper";
import { getPage } from "@/lib/strapi";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";

interface IProps {
  params: {
    slug: string;
  };
}

const Page: NextPage<IProps> = async (props) => {
  const { params } = props;
  const pageData = await getPage(params.slug);

  const content = await serialize(pageData.attributes.content);

  return (
    <div>
      <MDXRemoteWrapper {...content} />
    </div>
  );
};

export default Page;
