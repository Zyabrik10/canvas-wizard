import css from "./styles/MobileSideMenu.module.css";
import globalCss from "../../css/global.module.css";

import BookSidebarList from "../SideMenuMap/BookSidebarList/BookSidebarList";

import { useSelector, useDispatch } from "react-redux";
import { selectMobileMenu } from "../../redux/mobileMenu/mobileMenu-selector";

import { toggleMobileMenu } from "../../redux/mobileMenu/mobileMenu-redux";

export default function MobileSideMenu() {
  const { isOpend } = useSelector(selectMobileMenu);
  const dispatch = useDispatch();

  function buttonHandler() {
    dispatch(toggleMobileMenu(false));
    document.querySelector("body")?.setAttribute("style", "overflow: auto;");
  }
  return isOpend ? (
    <div className={`${css["mobile-menu-wrapper"]}`}>
      <div>
        <button className={`${css['close-button']} ${globalCss["global-button"]}`} onClick={buttonHandler}>
          &times;
        </button>
      </div>
      <BookSidebarList />
    </div>
  ) : null;
}
