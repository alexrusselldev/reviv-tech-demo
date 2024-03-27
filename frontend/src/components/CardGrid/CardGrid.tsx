import { ImageWithFallback } from "../ImageWithFallback";
import Link from "next/link";

interface IProps {
  parent: string;
  items: {
    slug: string;
    title: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
}

export const CardGrid: React.FC<IProps> = (props) => {
  const { parent, items } = props;
  return (
    <div className="mx-auto max-w-md sm:max-w-xl md:max-w-3xl">
      <ul className="flex grid-cols-2 flex-col gap-4 sm:grid md:grid-cols-3">
        {items.map(({ slug, title, image }) => {
          return (
            <li key={slug}>
              <Link
                href={`/${parent}/${slug}`}
                className="flex flex-col items-center"
              >
                <ImageWithFallback src={image.src} alt={image.alt} />
                <span className="text-xl">{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
