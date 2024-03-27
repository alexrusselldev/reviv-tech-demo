import { MDXRemoteWrapper } from "@/components/MDXRemoteWrapper";
import { getPage } from "@/lib/strapi";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";

interface IProps {}

const Page: NextPage<IProps> = async () => {
  const pageData = await getPage("portfolio");

  const content = await serialize(pageData.attributes.content);

  return (
    <div>
      <MDXRemoteWrapper {...content} />
    </div>
  );
};

export default Page;
