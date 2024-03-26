import Link from "next/link";
import { IPageNavData } from "../Header";

interface IProps {
  pages: IPageNavData[];
}

export const Navigation: React.FC<IProps> = async (props) => {
  const { pages } = props;

  return (
    <nav role="navigation" className="hidden sm:block">
      <ul className="container flex  items-center justify-center gap-4 py-4">
        {pages.map(({ slug, label }) => {
          return (
            <li key={slug}>
              <Link href={`/${slug}`}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
