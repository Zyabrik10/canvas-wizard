import globalCss from "../../../../../../css/global.module.css";
import { NavLink } from "react-router-dom";
import css from "../../../../styles/SideMenuMap.module.css";

import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../../../../../../redux/mobileMenu/mobileMenu-redux";

type Term = {
  title: string;
  path: string;
};

export default function BookTermItem({ title, path }: Term) {
  const dispatch = useDispatch();

  function linkHandler() {
    dispatch(toggleMobileMenu(false));
    document.querySelector("body")?.setAttribute("style", "overflow: auto;");
  }

  return (
    <li>
      <NavLink
        className={`${css["book-term-link"]} ${globalCss["global-link"]} ${css["dark-theme"]} switch-theme`}
        to={path}
        data-dark-theme={css["dark-theme"]}
        data-light-theme={css["light-theme"]}
        onClick={linkHandler}
      >
        {title}
      </NavLink>
    </li>
  );
}
