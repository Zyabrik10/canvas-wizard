import { NavLink } from "react-router-dom";
import globalCss from "css/global.module.css";
import css from "./HeaderNavList.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";

export default function HeaderNav() {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  return (
    <nav>
      <ul className={`${globalCss["global-list"]} ${css["header-nav-list"]}`}>
        <li>
          <NavLink
            to="/book"
            className={`${css[currentTheme]} ${css["header-nav-link"]} ${globalCss["global-link"]}`}
          >
            Book
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
