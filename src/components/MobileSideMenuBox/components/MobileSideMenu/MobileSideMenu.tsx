import css from "./MobileSideMenu.module.css";
import globalCss from "css/global.module.css";

import { BookSideBarList } from "components/SideMenuMap/components/index";

import { useSelector, useDispatch } from "react-redux";
import { selectMobileMenu } from "redux/mobileMenu/mobileMenu-selector";

import { toggleMobileMenu } from "redux/mobileMenu/mobileMenu-redux";

import { selectUser } from "redux/user/user-selector";

export default function MobileSideMenu() {
  const { isOpend } = useSelector(selectMobileMenu);
  const dispatch = useDispatch();
  
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;


  function buttonHandler() {
    dispatch(toggleMobileMenu(false));
    document.querySelector("body")?.setAttribute("style", "overflow: auto;");
  }
  return isOpend ? (
    <div
      className={`${css["mobile-menu-wrapper"]} ${css[currentTheme]}`}
    >
      <div>
        <button
          className={`${css["close-button"]} ${globalCss["global-button"]} ${css[currentTheme]}`}
          onClick={buttonHandler}
        >
          &times;
        </button>
      </div>
      <BookSideBarList />
    </div>
  ) : null;
}
