import { GalleryWrapper } from "@/components/GalleryWrapper";
import { MDXRemoteWrapper } from "@/components/MDXRemoteWrapper";
import { getPortfolioProject } from "@/lib/strapi";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";

interface IProps {
  params: {
    slug: string;
  };
}

interface IGalleryItem {
  attributes: {
    name: "premcor-news-page";
    alternativeText: "Premcor News Index";
    width: 1341;
    height: 763;
    url: "https://effortless-blessing-dc4b98bb43.media.strapiapp.com/Screenshot_from_2024_03_27_11_44_13_af2803ff03.png";
  };
}

const Page: NextPage<IProps> = async (props) => {
  const { params } = props;
  const projectData = await getPortfolioProject(params.slug);

  const gallery = projectData.attributes.projectGallery.data.map(
    (item: IGalleryItem) => {
      return {
        src: item.attributes.url,
        width: item.attributes.width,
        height: item.attributes.height,
        alt: item.attributes.alternativeText,
      };
    }
  );

  const content = await serialize(projectData.attributes.projectContent);

  return (
    <div>
      <MDXRemoteWrapper {...content} />
      <div className="container prose mt-10 mb-4 dark:prose-invert">
        <h3>Gallery</h3>
      </div>
      <GalleryWrapper images={gallery} />
    </div>
  );
};

export default Page;
