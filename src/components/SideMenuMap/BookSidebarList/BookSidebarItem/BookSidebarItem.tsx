import globalCss from "../../../../css/global.module.css";
import css from "../../styles/SideMenuMap.module.css";

import BookTermList from "./BookTermList/BookTermList";
import { useEffect, useState } from "react";

import arrow from "../../../../img/logo/arrow2.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

type Term = {
  title: string;
  path: string;
};

type Book = {
  title: string;
  terms: Array<Term>;
};


export default function BookSidebarItem({ title, terms}: Book) {
  const [isOpenedSubMenu, setIsOpenedSubMenu] = useState<boolean>(false);

  const { theme } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  function buttonHandler() {
    setIsOpenedSubMenu(!isOpenedSubMenu);
  }

  return (
    <li
      className={`${css["dark-theme"]} ${css["sidebar-item"]} switch-theme`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <button
        className={`${css["sidebar-item-button"]} ${globalCss["global-button"]} ${css['dark-theme']} switch-theme`}
        data-dark-theme={css["dark-theme"]}
        data-light-theme={css["light-theme"]}
        type="button"
        onClick={buttonHandler}
      >
        <span className={css["item-button-title"]}>{title}</span>
        {isOpenedSubMenu ? (
          <img src={arrow} alt="" style={{ transform: "rotate(90deg)" }}/>
        ) : (
          <img src={arrow} alt=""  />
        )}
      </button>
      {isOpenedSubMenu ? <BookTermList terms={terms} /> : null}
    </li>
  );
}
