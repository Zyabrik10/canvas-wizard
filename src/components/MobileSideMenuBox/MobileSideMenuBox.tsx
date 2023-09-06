import css from "./styles/MobileSideMenuBox.module.css";
import globalCss from "../../css/global.module.css";
import menu_bar from "../../img/logo/menu-bar.svg";

import { toggleMobileMenu } from "../../redux/mobileMenu/mobileMenu-redux";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";

export default function MobileSideMenuBox() {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  function buttonHandler() {
    dispatch(toggleMobileMenu(true));
    document.querySelector("body")?.setAttribute("style", "overflow: hidden;");
  }

  return (
    <div className={`${css[currentTheme]} ${css["mobile-sidemenu-box"]}`}>
      <button
        className={`${globalCss["global-button"]}`}
        onClick={buttonHandler}
      >
        <img src={menu_bar} alt="" />
      </button>
    </div>
  );
}
