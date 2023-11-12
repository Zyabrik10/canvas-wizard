import { nanoid } from "nanoid";
import { BookTermItem } from "./components/index";

type Term = {
  title: string;
  path: string;
};

export default function BookTermList({ terms }: { terms: Array<Term> }) {
  return (
    <ul>
      {terms.map(({ title, path }: Term) => (
        <BookTermItem key={nanoid()} title={title} path={path} />
      ))}
    </ul>
  );
}
