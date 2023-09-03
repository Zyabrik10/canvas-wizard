import { nanoid } from "nanoid";
import globalCss from "../../../../../css/global.module.css";
// import css from "../../styles/SideMenuMap.module.css";
import BookTermItem from "./BookTermItem/BookTermItem";

import { useSelector } from "react-redux";
import { selectUser } from '../../../../../redux/user/user-selector';
import { useEffect } from 'react';
import { adaptTheme } from "../../../../../ts/theme/adapt-theme";

type Term = {
  title: string;
  path: string;
};


export default function BookTermList({ terms }: { terms: Array<Term> }) {
  const { theme } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <ul
      className={`${globalCss["global-list"]}`}
      // style={{ display: "none" }}
    >
      {terms.map(({ title, path }: Term) => (
        <BookTermItem
          key={nanoid()}
          title={title}
          path={path}
        />
      ))}
    </ul>
  );
}
