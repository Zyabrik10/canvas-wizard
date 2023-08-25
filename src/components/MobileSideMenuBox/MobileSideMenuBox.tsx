import css from "./styles/MobileSideMenuBox.module.css";
import globalCss from "../../css/global.module.css";
import menu_bar from "../../img/logo/menu-bar.svg";

import { toggleMobileMenu } from "../../redux/mobileMenu/mobileMenu-redux";
import { useDispatch } from "react-redux";

export default function MobileSideMenuBox() {
  const dispatch = useDispatch();

  function buttonHandler() {
    dispatch(toggleMobileMenu(true));
    document.querySelector("body")?.setAttribute("style", "overflow: hidden;");
  }

  return (
    <div
      className={`${css["dark-theme"]} switch-theme ${css["mobile-sidemenu-box"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <button
        className={`${globalCss["global-button"]}`}
        onClick={buttonHandler}
      >
        <img src={menu_bar} alt="" />
      </button>
    </div>
  );
}
