import { MDXRemoteWrapper } from "@/components/MDXRemoteWrapper";
import { getPage } from "@/lib/strapi";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { headers } from "next/headers";
import { useRouter } from "next/router";

interface IProps {}

const Page: NextPage<IProps> = async () => {
  const pathname = headers().get("next-url") || "";
  const path = pathname.substring(1, pathname.length + 1).split("/")[0];

  const pageData = await getPage(path);

  const content = await serialize(pageData.attributes.content);

  return (
    <div>
      <MDXRemoteWrapper {...content} />
    </div>
  );
};

export default Page;
