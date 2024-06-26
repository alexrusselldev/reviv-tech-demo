import { MDXRemoteWrapper } from "@/components/MDXRemoteWrapper";
import { getPage } from "@/lib/strapi";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { headers } from "next/headers";

interface IProps {}

const Page: NextPage<IProps> = async () => {
  const pageData = await getPage("home");
  const content = await serialize(pageData.attributes.content);
  return (
    <div>
      <MDXRemoteWrapper {...content} />
    </div>
  );
};

export default Page;
