import css from "./BookSidebarItem.module.css";

import { BookTermList } from "../../../index";
import { useState } from "react";

import arrow from "img/logo/arrow2.svg";
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";

type Term = {
  title: string;
  path: string;
};

type Book = {
  title: string;
  terms: Array<Term>;
};

export default function BookSidebarItem({ title, terms }: Book) {
  const [isOpenedSubMenu, setIsOpenedSubMenu] = useState<boolean>(false);

  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  function buttonHandler() {
    setIsOpenedSubMenu(!isOpenedSubMenu);
  }

  return (
    <li className={`${css[currentTheme]} ${css["sidebar-item"]}`}>
      <button
        className={`${css["sidebar-item-button"]} ${css[currentTheme]}`}
        type="button"
        onClick={buttonHandler}
      >
        <span className={css["item-button-title"]}>{title}</span>
        {isOpenedSubMenu ? (
          <img src={arrow} alt="" style={{ transform: "rotate(90deg)" }} />
        ) : (
          <img src={arrow} alt="" />
        )}
      </button>
      {isOpenedSubMenu ? <BookTermList terms={terms} /> : null}
    </li>
  );
}
