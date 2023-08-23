import globalCss from "../../../../css/global.module.css";
import css from "../../styles/SideMenuMap.module.css";

import BookTermList from "./BookTermList/BookTermList";
import { useState } from "react";

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

  function buttonHandler() {
    setIsOpenedSubMenu(!isOpenedSubMenu);
  }
  return (
    <li
      className={`${css["dark-theme"]} ${css["sidebar-item"]} switch-theme`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <button className={`${css["sidebar-item-button"]} ${globalCss["global-button"]}`} type="button" onClick={buttonHandler}>
        <span className={css["item-button-title"]}>{title}</span>
        {isOpenedSubMenu ? 
        
        <span className={css["item-button-status"]}>
          &#8681;
          </span>
          :
          <span className={css["item-button-status"]}>
                    &#8680;
          </span>
      }
      </button>
      {isOpenedSubMenu ? <BookTermList terms={terms} /> : null}
    </li>
  );
}
