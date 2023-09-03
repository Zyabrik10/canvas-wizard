import css from "../../styles/Header.module.css";

import { JSX } from "react";

type Props = {
  children: JSX.Element;
};

export default function HeaderListItem({ children }: Props) {
  return <li className={`${css["header-list-item"]}`}>{children}</li>;
}
