import { nanoid } from "nanoid";
import globalCss from "../../../../css/global.module.css";
import { BookTermItem } from "./components/index";

type Term = {
  title: string;
  path: string;
};

export default function BookTermList({ terms }: { terms: Array<Term> }) {
  return (
    <ul className={`${globalCss["global-list"]}`}>
      {terms.map(({ title, path }: Term) => (
        <BookTermItem key={nanoid()} title={title} path={path} />
      ))}
    </ul>
  );
}
