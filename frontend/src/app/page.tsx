import { MDXRemoteWrapper } from "@/components/MDXRemoteWrapper";
import { getPage } from "@/lib/strapi";
import { serialize } from "next-mdx-remote/serialize";

export default async function Home() {
  const pageData = await getPage("home");
  const content = await serialize(pageData.attributes.content);
  return (
    <div>
      <MDXRemoteWrapper {...content} />
    </div>
  );
}
