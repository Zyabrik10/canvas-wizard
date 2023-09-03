import css from "./styles/MobileSideMenu.module.css";
import globalCss from "../../../css/global.module.css";

import BookSidebarList from "../../SideMenuMap/BookSidebarList/BookSidebarList";

import { useSelector, useDispatch } from "react-redux";
import { selectMobileMenu } from "../../../redux/mobileMenu/mobileMenu-selector";

import { toggleMobileMenu } from "../../../redux/mobileMenu/mobileMenu-redux";

import { selectUser } from "../../../redux/user/user-selector";
import { useEffect } from "react";
import { adaptTheme } from "../../../ts/theme/adapt-theme";

export default function MobileSideMenu() {
  const { isOpend } = useSelector(selectMobileMenu);
  const dispatch = useDispatch();

  const { theme } = useSelector(selectUser);

  useEffect(() => {
    if (isOpend) adaptTheme(theme);
  });

  function buttonHandler() {
    dispatch(toggleMobileMenu(false));
    document.querySelector("body")?.setAttribute("style", "overflow: auto;");
  }
  return isOpend ? (
    <div
      className={`${css["mobile-menu-wrapper"]} switch-theme ${css["dark-theme"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <div>
        <button
          className={`${css["close-button"]} ${globalCss["global-button"]} ${css["dark-theme"]} switch-theme`}
          data-dark-them={css["dark-theme"]}
          data-light-them={css["light-theme"]}
          onClick={buttonHandler}
        >
          &times;
        </button>
      </div>
      <BookSidebarList />
    </div>
  ) : null;
}
