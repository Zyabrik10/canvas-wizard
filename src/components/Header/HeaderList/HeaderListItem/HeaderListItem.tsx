import css from "../../styles/Header.module.css";

import { JSX } from "react";

type Props = {
  children: JSX.Element;
};

export default function HeaderListItem({ children }: Props) {
  return (
    <li
      className={`switch-theme ${css["header-list-item"]} ${css["dark-theme"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      {children}
    </li>
  );
}
